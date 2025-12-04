// Core AI Voice Generation Types and Interfaces

export interface AIVoiceProvider {
  name: string
  generateSpeech(text: string, options: VoiceOptions): Promise<AudioBuffer>
  getAvailableVoices(): Promise<AIVoiceProfile[]>
  validateCredentials(): Promise<boolean>
  estimateCost(text: string, voice: string): number
}

export interface VoiceOptions {
  voice: string
  language: string
  speed: number
  pitch: number
  stability?: number
  clarity?: number
}

export interface AIVoiceProfile {
  id: string
  name: string
  language: string
  gender: 'male' | 'female' | 'neutral'
  accent?: string
  category: 'standard' | 'religious' | 'announcement' | 'bell'
  provider: string
  previewUrl?: string
}

export interface AudioCacheManager {
  store(key: string, audio: AudioBuffer, metadata: CacheMetadata): Promise<void>
  retrieve(key: string): Promise<AudioBuffer | null>
  exists(key: string): Promise<boolean>
  clear(pattern?: string): Promise<void>
  getUsageStats(): Promise<CacheStats>
  cleanup(): Promise<void>
}

export interface CacheMetadata {
  text: string
  voice: string
  provider: string
  timestamp: number
  size: number
  usage: number
}

export interface CacheStats {
  totalSize: number
  totalFiles: number
  hitRate: number
  oldestFile: number
  newestFile: number
}

export interface ProviderConfig {
  apiKey: string
  endpoint?: string
  enabled: boolean
  priority: number
  rateLimit: {
    requestsPerMinute: number
    charactersPerDay: number
  }
}

export interface AIVoiceSettings {
  aiVoiceEnabled: boolean
  primaryProvider: string
  fallbackProvider?: string
  voiceProfiles: {
    announcement: AIVoiceProfile
    prayer: AIVoiceProfile
    bell: AIVoiceProfile
    general: AIVoiceProfile
  }
  cacheSettings: {
    maxSize: number // MB
    maxAge: number // days
    enabled: boolean
  }
  usageSettings: {
    monthlyLimit: number // characters
    costThreshold: number // USD
    optimizationEnabled: boolean
  }
  providerConfigs: Record<string, ProviderConfig>
}

export interface AudioGenerationRequest {
  id: string
  text: string
  type: 'announcement' | 'prayer' | 'bell' | 'general'
  voice: AIVoiceProfile
  options: VoiceOptions
  priority: 'high' | 'normal' | 'low'
  timestamp: number
  status: 'pending' | 'generating' | 'completed' | 'failed' | 'cached'
  retryCount: number
  estimatedCost: number
}

export interface UsageRecord {
  id: string
  timestamp: number
  provider: string
  voice: string
  characterCount: number
  cost: number
  type: 'announcement' | 'prayer' | 'bell' | 'general'
  cached: boolean
}

export interface UsageStats {
  currentMonth: {
    totalCharacters: number
    totalCost: number
    requestCount: number
    cacheHitRate: number
  }
  byProvider: Record<string, {
    characters: number
    cost: number
    requests: number
  }>
  byType: Record<string, {
    characters: number
    cost: number
    requests: number
  }>
}

// Provider-specific types
export type AIVoiceProviderType = 'openai' | 'elevenlabs' | 'azure'

export interface ProviderCapabilities {
  maxCharacters: number
  supportedLanguages: string[]
  supportedFormats: string[]
  realTimeGeneration: boolean
  voiceCloning: boolean
  emotionControl: boolean
}

// Error types for AI voice operations
export class AIVoiceError extends Error {
  constructor(
    message: string,
    public provider: string,
    public code: string,
    public retryable: boolean = false
  ) {
    super(message)
    this.name = 'AIVoiceError'
  }
}

export class RateLimitError extends AIVoiceError {
  constructor(provider: string, retryAfter?: number) {
    super(`Rate limit exceeded for ${provider}`, provider, 'RATE_LIMIT', true)
    this.retryAfter = retryAfter
  }
  retryAfter?: number
}

export class AuthenticationError extends AIVoiceError {
  constructor(provider: string) {
    super(`Authentication failed for ${provider}`, provider, 'AUTH_FAILED', false)
  }
}

export class ServiceUnavailableError extends AIVoiceError {
  constructor(provider: string) {
    super(`Service unavailable for ${provider}`, provider, 'SERVICE_UNAVAILABLE', true)
  }
}

// Utility types
export type VoiceGenerationStatus = 'idle' | 'generating' | 'completed' | 'error'

export interface VoiceGenerationProgress {
  status: VoiceGenerationStatus
  progress: number // 0-100
  message?: string
  estimatedTimeRemaining?: number
}