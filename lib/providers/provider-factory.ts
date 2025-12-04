import type { AIVoiceProvider, ProviderConfig, AIVoiceProviderType } from "../ai-voice-types"
import { OpenAIProvider } from "./openai-provider"
import { ElevenLabsProvider } from "./elevenlabs-provider"
import { AzureProvider } from "./azure-provider"

export class ProviderFactory {
  private static providers: Map<string, AIVoiceProvider> = new Map()

  static createProvider(
    type: AIVoiceProviderType,
    config: ProviderConfig
  ): AIVoiceProvider {
    const key = `${type}-${config.apiKey.substring(0, 8)}`
    
    // Return existing provider if already created with same config
    if (this.providers.has(key)) {
      const existingProvider = this.providers.get(key)!
      return existingProvider
    }

    let provider: AIVoiceProvider

    switch (type) {
      case "openai":
        provider = new OpenAIProvider(config.apiKey)
        break
      case "elevenlabs":
        provider = new ElevenLabsProvider(config.apiKey)
        break
      case "azure":
        provider = new AzureProvider(config.apiKey, config.endpoint)
        break
      default:
        throw new Error(`Unknown provider type: ${type}`)
    }

    this.providers.set(key, provider)
    return provider
  }

  static getProvider(
    type: AIVoiceProviderType,
    config: ProviderConfig
  ): AIVoiceProvider | null {
    const key = `${type}-${config.apiKey.substring(0, 8)}`
    return this.providers.get(key) || null
  }

  static removeProvider(
    type: AIVoiceProviderType,
    config: ProviderConfig
  ): void {
    const key = `${type}-${config.apiKey.substring(0, 8)}`
    this.providers.delete(key)
  }

  static clearAllProviders(): void {
    this.providers.clear()
  }

  static getActiveProviders(): Array<{
    type: AIVoiceProviderType
    provider: AIVoiceProvider
  }> {
    const activeProviders: Array<{
      type: AIVoiceProviderType
      provider: AIVoiceProvider
    }> = []

    for (const [key, provider] of this.providers.entries()) {
      const type = key.split("-")[0] as AIVoiceProviderType
      activeProviders.push({ type, provider })
    }

    return activeProviders
  }

  static async validateAllProviders(): Promise<Record<string, boolean>> {
    const results: Record<string, boolean> = {}

    for (const [key, provider] of this.providers.entries()) {
      try {
        results[key] = await provider.validateCredentials()
      } catch (error) {
        results[key] = false
      }
    }

    return results
  }

  static getSupportedProviders(): AIVoiceProviderType[] {
    return ["openai", "elevenlabs", "azure"]
  }

  static isProviderSupported(type: AIVoiceProviderType): boolean {
    return this.getSupportedProviders().includes(type)
  }
}

// Utility function to create provider with error handling
export const createProviderSafely = async (
  type: AIVoiceProviderType,
  config: ProviderConfig
): Promise<{
  provider: AIVoiceProvider | null
  error: string | null
}> => {
  try {
    if (!ProviderFactory.isProviderSupported(type)) {
      return {
        provider: null,
        error: `Provider ${type} is not yet supported`
      }
    }

    const provider = ProviderFactory.createProvider(type, config)
    
    // Validate credentials
    const isValid = await provider.validateCredentials()
    if (!isValid) {
      return {
        provider: null,
        error: `Invalid credentials for ${type} provider`
      }
    }

    return {
      provider,
      error: null
    }
  } catch (error) {
    return {
      provider: null,
      error: error instanceof Error ? error.message : `Failed to create ${type} provider`
    }
  }
}