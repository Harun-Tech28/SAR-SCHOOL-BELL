import type { AIVoiceProviderType, ProviderConfig, AIVoiceProfile } from "./ai-voice-types"
import { DEFAULT_VOICE_PROFILES, PROVIDER_CAPABILITIES, DEFAULT_RATE_LIMITS } from "./ai-voice-constants"

// Provider configuration utilities
export class ProviderConfigManager {
  static validateConfig(provider: AIVoiceProviderType, config: ProviderConfig): boolean {
    if (!config.apiKey || config.apiKey.trim() === "") {
      return false
    }

    // Provider-specific validation
    switch (provider) {
      case "azure":
        return !!(config.endpoint && config.endpoint.trim() !== "")
      case "openai":
      case "elevenlabs":
        return true
      default:
        return false
    }
  }

  static getDefaultConfig(provider: AIVoiceProviderType): ProviderConfig {
    const rateLimits = DEFAULT_RATE_LIMITS[provider]
    
    return {
      apiKey: "",
      endpoint: provider === "azure" ? "" : undefined,
      enabled: false,
      priority: provider === "openai" ? 1 : provider === "elevenlabs" ? 2 : 3,
      rateLimit: rateLimits
    }
  }

  static getProviderVoices(provider: AIVoiceProviderType): AIVoiceProfile[] {
    return DEFAULT_VOICE_PROFILES[provider] || []
  }

  static getProviderCapabilities(provider: AIVoiceProviderType) {
    return PROVIDER_CAPABILITIES[provider]
  }

  static estimateCost(provider: AIVoiceProviderType, characterCount: number): number {
    const costs = {
      openai: 0.015,
      elevenlabs: 0.30,
      azure: 0.016
    }
    
    return (characterCount / 1000) * costs[provider]
  }

  static isLanguageSupported(provider: AIVoiceProviderType, language: string): boolean {
    const capabilities = PROVIDER_CAPABILITIES[provider]
    return capabilities.supportedLanguages.includes(language)
  }

  static getMaxCharacters(provider: AIVoiceProviderType): number {
    return PROVIDER_CAPABILITIES[provider].maxCharacters
  }

  static getSupportedFormats(provider: AIVoiceProviderType): string[] {
    return PROVIDER_CAPABILITIES[provider].supportedFormats
  }
}

// Environment variable configuration
export interface AIVoiceEnvironmentConfig {
  OPENAI_API_KEY?: string
  ELEVENLABS_API_KEY?: string
  AZURE_SPEECH_KEY?: string
  AZURE_SPEECH_REGION?: string
  AI_VOICE_CACHE_SIZE?: string
  AI_VOICE_MONTHLY_LIMIT?: string
}

export class EnvironmentConfigLoader {
  static loadFromEnvironment(): Partial<Record<AIVoiceProviderType, ProviderConfig>> {
    const config: Partial<Record<AIVoiceProviderType, ProviderConfig>> = {}

    // OpenAI configuration
    if (process.env.OPENAI_API_KEY) {
      config.openai = {
        ...ProviderConfigManager.getDefaultConfig("openai"),
        apiKey: process.env.OPENAI_API_KEY,
        enabled: true
      }
    }

    // ElevenLabs configuration
    if (process.env.ELEVENLABS_API_KEY) {
      config.elevenlabs = {
        ...ProviderConfigManager.getDefaultConfig("elevenlabs"),
        apiKey: process.env.ELEVENLABS_API_KEY,
        enabled: true
      }
    }

    // Azure configuration
    if (process.env.AZURE_SPEECH_KEY && process.env.AZURE_SPEECH_REGION) {
      config.azure = {
        ...ProviderConfigManager.getDefaultConfig("azure"),
        apiKey: process.env.AZURE_SPEECH_KEY,
        endpoint: `https://${process.env.AZURE_SPEECH_REGION}.tts.speech.microsoft.com/`,
        enabled: true
      }
    }

    return config
  }

  static getCacheSize(): number {
    const size = process.env.AI_VOICE_CACHE_SIZE
    return size ? parseInt(size, 10) : 100 // Default 100MB
  }

  static getMonthlyLimit(): number {
    const limit = process.env.AI_VOICE_MONTHLY_LIMIT
    return limit ? parseInt(limit, 10) : 100000 // Default 100k characters
  }
}

// Configuration validation utilities
export class ConfigValidator {
  static validateProviderConfig(provider: AIVoiceProviderType, config: ProviderConfig): {
    valid: boolean
    errors: string[]
  } {
    const errors: string[] = []

    if (!config.apiKey || config.apiKey.trim() === "") {
      errors.push("API key is required")
    }

    if (provider === "azure" && (!config.endpoint || config.endpoint.trim() === "")) {
      errors.push("Endpoint is required for Azure provider")
    }

    if (config.priority < 1 || config.priority > 10) {
      errors.push("Priority must be between 1 and 10")
    }

    if (config.rateLimit.requestsPerMinute < 1) {
      errors.push("Requests per minute must be at least 1")
    }

    if (config.rateLimit.charactersPerDay < 1000) {
      errors.push("Characters per day must be at least 1000")
    }

    return {
      valid: errors.length === 0,
      errors
    }
  }

  static validateVoiceProfile(profile: AIVoiceProfile): {
    valid: boolean
    errors: string[]
  } {
    const errors: string[] = []

    if (!profile.id || profile.id.trim() === "") {
      errors.push("Voice profile ID is required")
    }

    if (!profile.name || profile.name.trim() === "") {
      errors.push("Voice profile name is required")
    }

    if (!profile.language || profile.language.trim() === "") {
      errors.push("Language is required")
    }

    if (!["male", "female", "neutral"].includes(profile.gender)) {
      errors.push("Gender must be male, female, or neutral")
    }

    if (!["standard", "religious", "announcement", "bell"].includes(profile.category)) {
      errors.push("Category must be standard, religious, announcement, or bell")
    }

    if (!profile.provider || profile.provider.trim() === "") {
      errors.push("Provider is required")
    }

    return {
      valid: errors.length === 0,
      errors
    }
  }
}