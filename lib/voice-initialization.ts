import { useStore } from "./store"
import { initializeAIVoiceService, updateAIVoiceService } from "./ai-voice-service"
import { initializeCacheManager } from "./cache-manager"
import { getRateLimiter } from "./rate-limiter"
import type { AIVoiceSettings } from "./ai-voice-types"

export class VoiceSystemInitializer {
  private static initialized = false

  static async initialize(): Promise<void> {
    if (this.initialized) return

    try {
      // Get current settings from store
      const settings = useStore.getState().settings
      
      if (settings.aiVoice) {
        // Initialize AI voice service
        const aiVoiceService = initializeAIVoiceService(settings.aiVoice)
        
        // Initialize cache manager
        initializeCacheManager(settings.aiVoice)
        
        // Initialize rate limiter
        const rateLimiter = getRateLimiter()
        for (const [providerType, config] of Object.entries(settings.aiVoice.providerConfigs)) {
          if (config.enabled) {
            rateLimiter.updateProviderLimits(providerType as any, config.rateLimit)
          }
        }
        
        console.log("[VoiceInit] AI voice system initialized successfully")
      } else {
        console.log("[VoiceInit] AI voice not configured, using TTS only")
      }
      
      this.initialized = true
    } catch (error) {
      console.error("[VoiceInit] Failed to initialize voice system:", error)
    }
  }

  static async updateSettings(newSettings: Partial<AIVoiceSettings>): Promise<void> {
    try {
      const currentSettings = useStore.getState().settings.aiVoice
      if (!currentSettings) return

      const updatedSettings = { ...currentSettings, ...newSettings }
      
      // Update AI voice service
      await updateAIVoiceService(updatedSettings)
      
      // Update store
      useStore.getState().updateSettings({
        aiVoice: updatedSettings
      })
      
      console.log("[VoiceInit] Voice settings updated successfully")
    } catch (error) {
      console.error("[VoiceInit] Failed to update voice settings:", error)
    }
  }

  static getAvailableVoices(): Array<{
    id: string
    name: string
    provider: string
    language: string
    category: string
  }> {
    // Return all available voices from different providers
    const voices = [
      // OpenAI voices
      { id: "openai-alloy", name: "Alloy", provider: "OpenAI", language: "english", category: "standard" },
      { id: "openai-echo", name: "Echo", provider: "OpenAI", language: "english", category: "announcement" },
      { id: "openai-fable", name: "Fable", provider: "OpenAI", language: "english", category: "standard" },
      { id: "openai-onyx", name: "Onyx", provider: "OpenAI", language: "english", category: "announcement" },
      { id: "openai-nova", name: "Nova", provider: "OpenAI", language: "english", category: "standard" },
      { id: "openai-shimmer", name: "Shimmer", provider: "OpenAI", language: "english", category: "announcement" },
      
      // ElevenLabs voices
      { id: "elevenlabs-rachel", name: "Rachel", provider: "ElevenLabs", language: "english", category: "standard" },
      { id: "elevenlabs-drew", name: "Drew", provider: "ElevenLabs", language: "english", category: "announcement" },
      { id: "elevenlabs-clyde", name: "Clyde", provider: "ElevenLabs", language: "english", category: "standard" },
      { id: "elevenlabs-paul", name: "Paul", provider: "ElevenLabs", language: "english", category: "announcement" },
      
      // Azure voices
      { id: "azure-jenny", name: "Jenny", provider: "Azure", language: "english", category: "standard" },
      { id: "azure-guy", name: "Guy", provider: "Azure", language: "english", category: "announcement" },
      { id: "azure-aria", name: "Aria", provider: "Azure", language: "english", category: "announcement" },
      { id: "azure-davis", name: "Davis", provider: "Azure", language: "english", category: "standard" },
      
      // Traditional TTS voices
      { id: "standard-male", name: "Standard Male", provider: "Browser TTS", language: "english", category: "standard" },
      { id: "standard-female", name: "Standard Female", provider: "Browser TTS", language: "english", category: "standard" },
      { id: "azan-islamic", name: "Islamic Azan", provider: "Browser TTS", language: "arabic", category: "religious" },
      { id: "hausa", name: "Hausa", provider: "Browser TTS", language: "hausa", category: "standard" },
      { id: "twi", name: "Twi", provider: "Browser TTS", language: "twi", category: "standard" },
      { id: "arabic", name: "Arabic", provider: "Browser TTS", language: "arabic", category: "standard" },
    ]

    return voices
  }

  static async testVoice(voiceId: string, text: string = "Hello, this is a test message"): Promise<boolean> {
    try {
      const { playWithSmartFallback } = await import("./voice-fallback")
      
      // Determine voice type and language
      const voice = this.getAvailableVoices().find(v => v.id === voiceId)
      if (!voice) {
        console.error("[VoiceInit] Voice not found:", voiceId)
        return false
      }

      const result = await playWithSmartFallback(
        text,
        voiceId as any,
        voice.language as any,
        voice.category === 'religious' ? 'prayer' : 
        voice.category === 'announcement' ? 'announcement' : 'general'
      )

      console.log(`[VoiceInit] Voice test ${result ? 'passed' : 'failed'} for ${voiceId}`)
      return result
    } catch (error) {
      console.error("[VoiceInit] Voice test failed:", error)
      return false
    }
  }

  static async enableAIVoice(apiKeys: {
    openai?: string
    elevenlabs?: string
    azure?: { key: string; region: string }
  }): Promise<boolean> {
    try {
      const currentSettings = useStore.getState().settings.aiVoice
      if (!currentSettings) return false

      const updatedProviderConfigs = { ...currentSettings.providerConfigs }

      // Update OpenAI config
      if (apiKeys.openai) {
        updatedProviderConfigs.openai = {
          ...updatedProviderConfigs.openai,
          apiKey: apiKeys.openai,
          enabled: true
        }
      }

      // Update ElevenLabs config
      if (apiKeys.elevenlabs) {
        updatedProviderConfigs.elevenlabs = {
          ...updatedProviderConfigs.elevenlabs,
          apiKey: apiKeys.elevenlabs,
          enabled: true
        }
      }

      // Update Azure config
      if (apiKeys.azure) {
        updatedProviderConfigs.azure = {
          ...updatedProviderConfigs.azure,
          apiKey: apiKeys.azure.key,
          endpoint: `https://${apiKeys.azure.region}.tts.speech.microsoft.com/`,
          enabled: true
        }
      }

      // Update voice profiles to use AI voices
      const updatedVoiceProfiles = {
        announcement: {
          id: "openai-echo",
          name: "OpenAI Echo",
          language: "english",
          gender: "male" as const,
          category: "announcement" as const,
          provider: "openai"
        },
        prayer: {
          id: "azure-aria",
          name: "Azure Aria",
          language: "arabic",
          gender: "female" as const,
          category: "religious" as const,
          provider: "azure"
        },
        bell: {
          id: "openai-shimmer",
          name: "OpenAI Shimmer",
          language: "english",
          gender: "female" as const,
          category: "bell" as const,
          provider: "openai"
        },
        general: {
          id: "openai-nova",
          name: "OpenAI Nova",
          language: "english",
          gender: "female" as const,
          category: "standard" as const,
          provider: "openai"
        }
      }

      await this.updateSettings({
        aiVoiceEnabled: true,
        providerConfigs: updatedProviderConfigs,
        voiceProfiles: updatedVoiceProfiles
      })

      console.log("[VoiceInit] AI voice enabled successfully")
      return true
    } catch (error) {
      console.error("[VoiceInit] Failed to enable AI voice:", error)
      return false
    }
  }

  static getSystemStatus(): {
    initialized: boolean
    aiVoiceEnabled: boolean
    availableProviders: string[]
    totalVoices: number
  } {
    const settings = useStore.getState().settings.aiVoice
    const availableProviders = settings ? 
      Object.entries(settings.providerConfigs)
        .filter(([_, config]) => config.enabled)
        .map(([provider, _]) => provider) : []

    return {
      initialized: this.initialized,
      aiVoiceEnabled: settings?.aiVoiceEnabled || false,
      availableProviders,
      totalVoices: this.getAvailableVoices().length
    }
  }
}

// Auto-initialize when imported
if (typeof window !== "undefined") {
  // Initialize after a short delay to ensure store is ready
  setTimeout(() => {
    VoiceSystemInitializer.initialize()
  }, 100)
}

// Export convenience functions
export const initializeVoiceSystem = () => VoiceSystemInitializer.initialize()
export const updateVoiceSettings = (settings: Partial<AIVoiceSettings>) => 
  VoiceSystemInitializer.updateSettings(settings)
export const getAvailableVoices = () => VoiceSystemInitializer.getAvailableVoices()
export const testVoice = (voiceId: string, text?: string) => 
  VoiceSystemInitializer.testVoice(voiceId, text)
export const enableAIVoice = (apiKeys: Parameters<typeof VoiceSystemInitializer.enableAIVoice>[0]) =>
  VoiceSystemInitializer.enableAIVoice(apiKeys)
export const getVoiceSystemStatus = () => VoiceSystemInitializer.getSystemStatus()