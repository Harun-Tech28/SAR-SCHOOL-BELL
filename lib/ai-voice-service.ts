import type {
  AIVoiceProvider,
  VoiceOptions,
  AIVoiceProfile,
  AIVoiceSettings,
  AudioGenerationRequest,
  AIVoiceProviderType
} from "./ai-voice-types"
import {
  AIVoiceError,
  RateLimitError,
  AuthenticationError,
  ServiceUnavailableError
} from "./ai-voice-types"
import { ProviderFactory, createProviderSafely } from "./providers/provider-factory"
import { getCacheManager } from "./cache-manager"
import { getRateLimiter } from "./rate-limiter"

export class AIVoiceService {
  private settings: AIVoiceSettings
  private providers: Map<AIVoiceProviderType, AIVoiceProvider> = new Map()
  private providerHealth: Map<AIVoiceProviderType, {
    healthy: boolean
    lastCheck: number
    consecutiveFailures: number
    nextRetry: number
  }> = new Map()

  private readonly HEALTH_CHECK_INTERVAL = 5 * 60 * 1000 // 5 minutes
  private readonly MAX_CONSECUTIVE_FAILURES = 3
  private readonly RETRY_BACKOFF_BASE = 2 * 60 * 1000 // 2 minutes

  constructor(settings: AIVoiceSettings) {
    this.settings = settings
    this.initializeProviders()
  }

  async updateSettings(settings: AIVoiceSettings): Promise<void> {
    this.settings = settings
    await this.initializeProviders()

    // Update cache manager settings
    const cacheManager = getCacheManager()
    cacheManager.updateSettings(settings)

    // Update rate limiter settings
    const rateLimiter = getRateLimiter()
    for (const [providerType, config] of Object.entries(settings.providerConfigs)) {
      if (config.enabled) {
        rateLimiter.updateProviderLimits(providerType as AIVoiceProviderType, config.rateLimit)
      }
    }
  }

  private async initializeProviders(): Promise<void> {
    this.providers.clear()
    this.providerHealth.clear()

    for (const [providerType, config] of Object.entries(this.settings.providerConfigs)) {
      if (!config.enabled) continue

      const type = providerType as AIVoiceProviderType
      const result = await createProviderSafely(type, config)

      if (result.provider) {
        this.providers.set(type, result.provider)
        this.providerHealth.set(type, {
          healthy: true,
          lastCheck: Date.now(),
          consecutiveFailures: 0,
          nextRetry: 0
        })
      } else {
        console.warn(`Failed to initialize ${type} provider:`, result.error)
        this.providerHealth.set(type, {
          healthy: false,
          lastCheck: Date.now(),
          consecutiveFailures: 1,
          nextRetry: Date.now() + this.RETRY_BACKOFF_BASE
        })
      }
    }
  }

  async generateSpeech(
    text: string,
    type: 'announcement' | 'prayer' | 'bell' | 'general',
    options?: Partial<VoiceOptions>
  ): Promise<AudioBuffer> {
    if (!this.settings.aiVoiceEnabled) {
      throw new AIVoiceError("AI voice generation is disabled", "System", "DISABLED", false)
    }

    // Get voice profile for the type
    const voiceProfile = this.settings.voiceProfiles[type]
    if (!voiceProfile) {
      throw new AIVoiceError(`No voice profile configured for type: ${type}`, "System", "CONFIG_ERROR", false)
    }

    // Build voice options
    const voiceOptions: VoiceOptions = {
      voice: options?.voice || voiceProfile.id,
      language: options?.language || voiceProfile.language,
      speed: options?.speed || 1.0,
      pitch: options?.pitch || 1.0,
      stability: options?.stability,
      clarity: options?.clarity
    }

    // Check cache first
    const cacheManager = getCacheManager()
    const cachedAudio = await cacheManager.retrieveAudio(text, voiceProfile.id, voiceProfile.provider)
    if (cachedAudio) {
      return cachedAudio
    }

    // Generate with provider failover
    const audioBuffer = await this.generateWithFailover(text, voiceOptions, voiceProfile)

    // Cache the result
    await cacheManager.storeAudio(text, voiceProfile.id, voiceProfile.provider, audioBuffer)

    return audioBuffer
  }

  private async generateWithFailover(
    text: string,
    options: VoiceOptions,
    voiceProfile: AIVoiceProfile
  ): Promise<AudioBuffer> {
    const providers = this.getOrderedProviders(voiceProfile.provider)
    let lastError: AIVoiceError | null = null
    const rateLimiter = getRateLimiter()

    for (const { type, provider } of providers) {
      try {
        // Check if provider is healthy
        if (!await this.isProviderHealthy(type)) {
          continue
        }

        // Create generation request
        const request: AudioGenerationRequest = {
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          text,
          type: 'general', // Will be set properly by caller
          voice: voiceProfile,
          options,
          priority: 'normal',
          timestamp: Date.now(),
          status: 'pending',
          retryCount: 0,
          estimatedCost: provider.estimateCost(text, options.voice)
        }

        // Execute with rate limiting
        const audioBuffer = await rateLimiter.executeWithRateLimit(
          type,
          request,
          () => provider.generateSpeech(text, options)
        )

        // Mark provider as healthy on success
        this.markProviderHealthy(type)

        return audioBuffer
      } catch (error) {
        lastError = error instanceof AIVoiceError ? error :
          new ServiceUnavailableError(type)

        // Handle different error types
        if (error instanceof RateLimitError) {
          this.handleRateLimit(type, error.retryAfter)
        } else if (error instanceof AuthenticationError) {
          this.markProviderUnhealthy(type)
        } else if (error instanceof ServiceUnavailableError) {
          this.markProviderUnhealthy(type)
        }

        console.warn(`Provider ${type} failed:`, error)
      }
    }

    // All providers failed
    throw lastError || new AIVoiceError(
      "All voice providers failed",
      "System",
      "ALL_PROVIDERS_FAILED",
      true
    )
  }

  private getOrderedProviders(preferredProvider: string): Array<{
    type: AIVoiceProviderType
    provider: AIVoiceProvider
  }> {
    const providers: Array<{
      type: AIVoiceProviderType
      provider: AIVoiceProvider
      priority: number
    }> = []

    // Add all available providers with their priorities
    for (const [type, provider] of this.providers.entries()) {
      const config = this.settings.providerConfigs[type]
      if (config?.enabled) {
        let priority = config.priority

        // Boost priority for preferred provider
        if (type === preferredProvider) {
          priority -= 100 // Lower number = higher priority
        }

        providers.push({ type, provider, priority })
      }
    }

    // Sort by priority (lower number = higher priority)
    providers.sort((a, b) => a.priority - b.priority)

    return providers.map(({ type, provider }) => ({ type, provider }))
  }

  private async isProviderHealthy(type: AIVoiceProviderType): Promise<boolean> {
    const health = this.providerHealth.get(type)
    if (!health) return false

    // If marked unhealthy and retry time hasn't passed, skip
    if (!health.healthy && Date.now() < health.nextRetry) {
      return false
    }

    // If it's been a while since last check, do a health check
    if (Date.now() - health.lastCheck > this.HEALTH_CHECK_INTERVAL) {
      await this.performHealthCheck(type)
    }

    return this.providerHealth.get(type)?.healthy || false
  }

  private async performHealthCheck(type: AIVoiceProviderType): Promise<void> {
    const provider = this.providers.get(type)
    const health = this.providerHealth.get(type)

    if (!provider || !health) return

    try {
      const isValid = await provider.validateCredentials()

      if (isValid) {
        this.markProviderHealthy(type)
      } else {
        this.markProviderUnhealthy(type)
      }
    } catch (error) {
      this.markProviderUnhealthy(type)
    }
  }

  private markProviderHealthy(type: AIVoiceProviderType): void {
    const health = this.providerHealth.get(type)
    if (health) {
      health.healthy = true
      health.lastCheck = Date.now()
      health.consecutiveFailures = 0
      health.nextRetry = 0
    }
  }

  private markProviderUnhealthy(type: AIVoiceProviderType): void {
    const health = this.providerHealth.get(type)
    if (health) {
      health.healthy = false
      health.lastCheck = Date.now()
      health.consecutiveFailures += 1

      // Exponential backoff for retry
      const backoffMultiplier = Math.pow(2, Math.min(health.consecutiveFailures - 1, 5))
      health.nextRetry = Date.now() + (this.RETRY_BACKOFF_BASE * backoffMultiplier)
    }
  }

  private handleRateLimit(type: AIVoiceProviderType, retryAfter?: number): void {
    const health = this.providerHealth.get(type)
    if (health) {
      health.healthy = false
      health.lastCheck = Date.now()
      health.nextRetry = Date.now() + (retryAfter ? retryAfter * 1000 : this.RETRY_BACKOFF_BASE)
    }
  }

  async getAvailableVoices(): Promise<Record<AIVoiceProviderType, AIVoiceProfile[]>> {
    const voices: Record<string, AIVoiceProfile[]> = {}

    for (const [type, provider] of this.providers.entries()) {
      try {
        if (await this.isProviderHealthy(type)) {
          voices[type] = await provider.getAvailableVoices()
        }
      } catch (error) {
        console.warn(`Failed to get voices from ${type}:`, error)
        voices[type] = []
      }
    }

    return voices as Record<AIVoiceProviderType, AIVoiceProfile[]>
  }

  async validateAllProviders(): Promise<Record<AIVoiceProviderType, {
    valid: boolean
    error?: string
  }>> {
    const results: Record<string, { valid: boolean; error?: string }> = {}

    for (const [type, provider] of this.providers.entries()) {
      try {
        const isValid = await provider.validateCredentials()
        results[type] = { valid: isValid }

        if (isValid) {
          this.markProviderHealthy(type)
        } else {
          this.markProviderUnhealthy(type)
          results[type].error = "Invalid credentials"
        }
      } catch (error) {
        this.markProviderUnhealthy(type)
        results[type] = {
          valid: false,
          error: error instanceof Error ? error.message : "Unknown error"
        }
      }
    }

    return results as Record<AIVoiceProviderType, { valid: boolean; error?: string }>
  }

  getProviderHealth(): Record<AIVoiceProviderType, {
    healthy: boolean
    lastCheck: number
    consecutiveFailures: number
    nextRetry: number
  }> {
    const health: Record<string, any> = {}

    for (const [type, healthInfo] of this.providerHealth.entries()) {
      health[type] = { ...healthInfo }
    }

    return health as Record<AIVoiceProviderType, {
      healthy: boolean
      lastCheck: number
      consecutiveFailures: number
      nextRetry: number
    }>
  }

  async estimateCost(text: string, type: 'announcement' | 'prayer' | 'bell' | 'general'): Promise<{
    provider: string
    cost: number
    cached: boolean
  }> {
    const voiceProfile = this.settings.voiceProfiles[type]
    if (!voiceProfile) {
      return { provider: "unknown", cost: 0, cached: false }
    }

    // Check if already cached
    const cacheManager = getCacheManager()
    const isCached = await cacheManager.hasAudio(text, voiceProfile.id, voiceProfile.provider)

    if (isCached) {
      return { provider: voiceProfile.provider, cost: 0, cached: true }
    }

    // Get provider and estimate cost
    const provider = this.providers.get(voiceProfile.provider as AIVoiceProviderType)
    if (!provider) {
      return { provider: voiceProfile.provider, cost: 0, cached: false }
    }

    const cost = provider.estimateCost(text, voiceProfile.id)
    return { provider: voiceProfile.provider, cost, cached: false }
  }

  getSettings(): AIVoiceSettings {
    return { ...this.settings }
  }

  isEnabled(): boolean {
    return this.settings.aiVoiceEnabled
  }

  hasHealthyProviders(): boolean {
    for (const health of this.providerHealth.values()) {
      if (health.healthy) return true
    }
    return false
  }

  getRateLimitStatus(): Record<AIVoiceProviderType, {
    requestsInLastMinute: number
    charactersToday: number
    requestsPerMinuteLimit: number
    charactersPerDayLimit: number
    utilizationPercent: number
  }> {
    const rateLimiter = getRateLimiter()
    return rateLimiter.getRateLimitStatus()
  }

  getQueueStatus(): Record<AIVoiceProviderType, {
    queueLength: number
    processing: boolean
    oldestRequest?: number
  }> {
    const rateLimiter = getRateLimiter()
    return rateLimiter.getQueueStatus()
  }

  getEstimatedWaitTime(provider: AIVoiceProviderType): number {
    const rateLimiter = getRateLimiter()
    return rateLimiter.getEstimatedWaitTime(provider)
  }
}

// Global service instance
let aiVoiceServiceInstance: AIVoiceService | null = null

export const getAIVoiceService = (): AIVoiceService | null => {
  return aiVoiceServiceInstance
}

export const initializeAIVoiceService = (settings: AIVoiceSettings): AIVoiceService => {
  aiVoiceServiceInstance = new AIVoiceService(settings)
  return aiVoiceServiceInstance
}

export const updateAIVoiceService = async (settings: AIVoiceSettings): Promise<void> => {
  if (aiVoiceServiceInstance) {
    await aiVoiceServiceInstance.updateSettings(settings)
  } else {
    initializeAIVoiceService(settings)
  }
}