import type { Language, VoiceType } from "./store"
import { getAIVoiceService } from "./ai-voice-service"
import { AIVoiceError } from "./ai-voice-types"
import { playBrowserTTS, playAudioBuffer, generateAIVoice } from "./voice-utils"

export interface VoiceFallbackOptions {
  maxRetries?: number
  retryDelay?: number
  preferAI?: boolean
  fallbackToTTS?: boolean
  logErrors?: boolean
}

export interface VoicePlaybackResult {
  success: boolean
  method: 'ai' | 'network-tts' | 'tts' | 'none'
  provider?: string
  error?: string
  retries: number
  duration?: number
}

export class VoiceFallbackHandler {
  private defaultOptions: Required<VoiceFallbackOptions> = {
    maxRetries: 2,
    retryDelay: 1000,
    preferAI: true,
    fallbackToTTS: true,
    logErrors: true
  }

  async playWithFallback(
    text: string,
    voice: VoiceType,
    language: Language = "english",
    type: 'announcement' | 'prayer' | 'bell' | 'general' = 'general',
    options?: VoiceFallbackOptions
  ): Promise<VoicePlaybackResult> {
    const opts = { ...this.defaultOptions, ...options }
    const startTime = Date.now()
    let retries = 0
    let lastError: string | undefined

    // Determine playback strategy
    const strategies = this.getPlaybackStrategies(opts)

    for (const strategy of strategies) {
      for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
        try {
          const success = await this.executeStrategy(strategy, text, voice, language, type)

          if (success) {
            const duration = Date.now() - startTime
            return {
              success: true,
              method: strategy,
              provider: strategy === 'ai' ? await this.getActiveProvider(type) : undefined,
              retries: attempt,
              duration
            }
          }
        } catch (error) {
          lastError = error instanceof Error ? error.message : 'Unknown error'
          retries = attempt + 1

          if (opts.logErrors) {
            console.warn(`[VoiceFallback] ${strategy} attempt ${attempt + 1} failed:`, lastError)
          }

          // Wait before retry (except on last attempt)
          if (attempt < opts.maxRetries) {
            await this.sleep(opts.retryDelay * (attempt + 1)) // Exponential backoff
          }
        }
      }
    }

    // All strategies failed
    const duration = Date.now() - startTime
    return {
      success: false,
      method: 'none',
      error: lastError || 'All playback methods failed',
      retries,
      duration
    }
  }

  private getPlaybackStrategies(options: VoiceFallbackOptions): Array<'ai' | 'network-tts' | 'tts'> {
    const strategies: Array<'ai' | 'network-tts' | 'tts'> = []

    if (options.preferAI) {
      strategies.push('ai')
      strategies.push('network-tts')
      if (options.fallbackToTTS) {
        strategies.push('tts')
      }
    } else {
      strategies.push('network-tts')
      strategies.push('tts')
      if (options.preferAI) {
        strategies.push('ai')
      }
    }

    return strategies
  }

  private async executeStrategy(
    strategy: 'ai' | 'network-tts' | 'tts',
    text: string,
    voice: VoiceType,
    language: Language,
    type: 'announcement' | 'prayer' | 'bell' | 'general'
  ): Promise<boolean> {
    switch (strategy) {
      case 'ai':
        return await this.tryAIVoice(text, type, { voice, language })
      case 'network-tts':
        return await this.tryNetworkTTS(text, language)
      case 'tts':
        return await this.tryBrowserTTS(text, voice, language)
      default:
        throw new Error(`Unknown strategy: ${strategy}`)
    }
  }

  private async tryNetworkTTS(text: string, language: Language): Promise<boolean> {
    // Network TTS removed - use browser TTS instead
    console.log('[VoiceFallback] Network TTS not available, using browser TTS')
    return await this.tryBrowserTTS(text, 'standard-male', language)
  }

  private async tryAIVoice(
    text: string,
    type: 'announcement' | 'prayer' | 'bell' | 'general',
    options: { voice?: VoiceType; language?: Language }
  ): Promise<boolean> {
    const aiVoiceService = getAIVoiceService()

    // Quick availability check
    if (!aiVoiceService || !aiVoiceService.isEnabled()) {
      throw new AIVoiceError("AI voice service not available", "System", "SERVICE_UNAVAILABLE", false)
    }

    if (!aiVoiceService.hasHealthyProviders()) {
      throw new AIVoiceError("No healthy AI voice providers", "System", "NO_PROVIDERS", true)
    }

    // Generate and play AI voice
    const audioBuffer = await generateAIVoice(text, type, options)
    if (!audioBuffer) {
      throw new AIVoiceError("AI voice generation returned null", "System", "GENERATION_FAILED", true)
    }

    await playAudioBuffer(audioBuffer)
    return true
  }

  private async tryBrowserTTS(
    text: string,
    voice: VoiceType,
    language: Language
  ): Promise<boolean> {
    // Check TTS availability
    if (typeof window === "undefined" || !("speechSynthesis" in window) || !window.speechSynthesis) {
      throw new Error("Browser TTS not available")
    }

    const result = await playBrowserTTS(text, voice, language)
    if (!result) {
      throw new Error("Browser TTS playback failed")
    }

    return true
  }

  private async getActiveProvider(type: 'announcement' | 'prayer' | 'bell' | 'general'): Promise<string | undefined> {
    const aiVoiceService = getAIVoiceService()
    if (!aiVoiceService) return undefined

    const settings = aiVoiceService.getSettings()
    const voiceProfile = settings.voiceProfiles[type]
    return voiceProfile?.provider
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // Utility methods for system health checking
  async checkSystemHealth(): Promise<{
    ai: { available: boolean; providers: string[]; error?: string }
    tts: { available: boolean; error?: string }
    recommendation: 'ai' | 'tts' | 'both' | 'none'
  }> {
    const aiStatus = await this.checkAIVoiceHealth()
    const ttsStatus = this.checkTTSHealth()

    let recommendation: 'ai' | 'tts' | 'both' | 'none' = 'none'

    if (aiStatus.available && ttsStatus.available) {
      recommendation = 'both'
    } else if (aiStatus.available) {
      recommendation = 'ai'
    } else if (ttsStatus.available) {
      recommendation = 'tts'
    }

    return {
      ai: aiStatus,
      tts: ttsStatus,
      recommendation
    }
  }

  private async checkAIVoiceHealth(): Promise<{
    available: boolean
    providers: string[]
    error?: string
  }> {
    try {
      const aiVoiceService = getAIVoiceService()

      if (!aiVoiceService) {
        return { available: false, providers: [], error: "AI voice service not initialized" }
      }

      if (!aiVoiceService.isEnabled()) {
        return { available: false, providers: [], error: "AI voice disabled in settings" }
      }

      const health = aiVoiceService.getProviderHealth()
      const healthyProviders = Object.entries(health)
        .filter(([_, status]) => status.healthy)
        .map(([provider, _]) => provider)

      if (healthyProviders.length === 0) {
        return { available: false, providers: [], error: "No healthy providers available" }
      }

      return { available: true, providers: healthyProviders }
    } catch (error) {
      return {
        available: false,
        providers: [],
        error: error instanceof Error ? error.message : "Unknown error"
      }
    }
  }

  private checkTTSHealth(): { available: boolean; error?: string } {
    if (typeof window === "undefined") {
      return { available: false, error: "Not in browser environment" }
    }

    if (!("speechSynthesis" in window)) {
      return { available: false, error: "Speech Synthesis API not supported" }
    }

    if (!window.speechSynthesis) {
      return { available: false, error: "Speech Synthesis API not available" }
    }

    return { available: true }
  }

  // Performance monitoring
  async measurePerformance(
    text: string,
    voice: VoiceType,
    language: Language,
    type: 'announcement' | 'prayer' | 'bell' | 'general',
    iterations: number = 3
  ): Promise<{
    ai: { avgTime: number; successRate: number; errors: string[] }
    tts: { avgTime: number; successRate: number; errors: string[] }
  }> {
    const aiResults: { time: number; success: boolean; error?: string }[] = []
    const ttsResults: { time: number; success: boolean; error?: string }[] = []

    // Test AI voice performance
    for (let i = 0; i < iterations; i++) {
      const startTime = Date.now()
      try {
        await this.tryAIVoice(text, type, { voice, language })
        aiResults.push({ time: Date.now() - startTime, success: true })
      } catch (error) {
        aiResults.push({
          time: Date.now() - startTime,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }

      // Small delay between tests
      await this.sleep(500)
    }

    // Test TTS performance
    for (let i = 0; i < iterations; i++) {
      const startTime = Date.now()
      try {
        await this.tryBrowserTTS(text, voice, language)
        ttsResults.push({ time: Date.now() - startTime, success: true })
      } catch (error) {
        ttsResults.push({
          time: Date.now() - startTime,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }

      // Small delay between tests
      await this.sleep(500)
    }

    return {
      ai: {
        avgTime: aiResults.reduce((sum, r) => sum + r.time, 0) / aiResults.length,
        successRate: (aiResults.filter(r => r.success).length / aiResults.length) * 100,
        errors: aiResults.filter(r => !r.success).map(r => r.error || 'Unknown')
      },
      tts: {
        avgTime: ttsResults.reduce((sum, r) => sum + r.time, 0) / ttsResults.length,
        successRate: (ttsResults.filter(r => r.success).length / ttsResults.length) * 100,
        errors: ttsResults.filter(r => !r.success).map(r => r.error || 'Unknown')
      }
    }
  }
}

// Global fallback handler instance
let fallbackHandlerInstance: VoiceFallbackHandler | null = null

export const getVoiceFallbackHandler = (): VoiceFallbackHandler => {
  if (!fallbackHandlerInstance) {
    fallbackHandlerInstance = new VoiceFallbackHandler()
  }
  return fallbackHandlerInstance
}

// Convenience functions for common use cases
export const playWithSmartFallback = async (
  text: string,
  voice: VoiceType,
  language: Language = "english",
  type: 'announcement' | 'prayer' | 'bell' | 'general' = 'general'
): Promise<boolean> => {
  const handler = getVoiceFallbackHandler()
  const result = await handler.playWithFallback(text, voice, language, type)
  return result.success
}

export const playAnnouncementWithFallback = async (text: string): Promise<boolean> => {
  return playWithSmartFallback(text, "standard-male", "english", "announcement")
}

export const playPrayerCallWithFallback = async (prayerName: string): Promise<boolean> => {
  const prayerText = `${prayerName} prayer time. Come and pray.`
  return playWithSmartFallback(prayerText, "azan-islamic", "arabic", "prayer")
}

export const playBellWithFallback = async (eventName: string): Promise<boolean> => {
  const bellText = `Bell ring for ${eventName}`
  return playWithSmartFallback(bellText, "standard-female", "english", "bell")
}