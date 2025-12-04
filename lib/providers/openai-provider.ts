import type { AIVoiceProvider, VoiceOptions, AIVoiceProfile } from "../ai-voice-types"
import { AIVoiceError, RateLimitError, AuthenticationError, ServiceUnavailableError } from "../ai-voice-types"
import { PROVIDER_COSTS } from "../ai-voice-constants"

export class OpenAIProvider implements AIVoiceProvider {
  name = "OpenAI TTS"
  private apiKey: string
  private baseUrl = "https://api.openai.com/v1"

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async generateSpeech(text: string, options: VoiceOptions): Promise<AudioBuffer> {
    if (!this.apiKey) {
      throw new AuthenticationError("OpenAI")
    }

    const requestBody = {
      model: "tts-1", // Use tts-1 for faster generation, tts-1-hd for higher quality
      input: text,
      voice: this.mapVoiceId(options.voice),
      response_format: "mp3",
      speed: Math.max(0.25, Math.min(4.0, options.speed)) // OpenAI supports 0.25 to 4.0
    }

    try {
      const response = await fetch(`${this.baseUrl}/audio/speech`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      })

      if (!response.ok) {
        await this.handleErrorResponse(response)
      }

      const arrayBuffer = await response.arrayBuffer()
      return await this.convertMp3ToAudioBuffer(arrayBuffer)
    } catch (error) {
      if (error instanceof AIVoiceError) {
        throw error
      }
      throw new ServiceUnavailableError("OpenAI")
    }
  }

  async getAvailableVoices(): Promise<AIVoiceProfile[]> {
    // OpenAI TTS voices are predefined
    return [
      {
        id: "openai-alloy",
        name: "Alloy",
        language: "english",
        gender: "neutral",
        category: "standard",
        provider: "openai"
      },
      {
        id: "openai-echo",
        name: "Echo",
        language: "english",
        gender: "male",
        category: "announcement",
        provider: "openai"
      },
      {
        id: "openai-fable",
        name: "Fable",
        language: "english",
        gender: "neutral",
        category: "standard",
        provider: "openai"
      },
      {
        id: "openai-onyx",
        name: "Onyx",
        language: "english",
        gender: "male",
        category: "announcement",
        provider: "openai"
      },
      {
        id: "openai-nova",
        name: "Nova",
        language: "english",
        gender: "female",
        category: "standard",
        provider: "openai"
      },
      {
        id: "openai-shimmer",
        name: "Shimmer",
        language: "english",
        gender: "female",
        category: "announcement",
        provider: "openai"
      }
    ]
  }

  async validateCredentials(): Promise<boolean> {
    if (!this.apiKey) {
      return false
    }

    try {
      // Test with a minimal request
      const response = await fetch(`${this.baseUrl}/audio/speech`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "tts-1",
          input: "test",
          voice: "alloy",
          response_format: "mp3"
        })
      })

      return response.ok || response.status === 400 // 400 might be due to minimal input, but auth is valid
    } catch (error) {
      return false
    }
  }

  estimateCost(text: string, voice: string): number {
    const characterCount = text.length
    return (characterCount / 1000) * PROVIDER_COSTS.openai
  }

  private mapVoiceId(voiceId: string): string {
    // Map our voice IDs to OpenAI voice names
    const voiceMap: Record<string, string> = {
      "openai-alloy": "alloy",
      "openai-echo": "echo",
      "openai-fable": "fable",
      "openai-onyx": "onyx",
      "openai-nova": "nova",
      "openai-shimmer": "shimmer"
    }

    return voiceMap[voiceId] || "alloy" // Default to alloy
  }

  private async handleErrorResponse(response: Response): Promise<never> {
    const errorText = await response.text()
    let errorData: any = {}
    
    try {
      errorData = JSON.parse(errorText)
    } catch {
      // If JSON parsing fails, use the raw text
    }

    switch (response.status) {
      case 401:
        throw new AuthenticationError("OpenAI")
      case 429:
        const retryAfter = response.headers.get("retry-after")
        throw new RateLimitError("OpenAI", retryAfter ? parseInt(retryAfter) : undefined)
      case 500:
      case 502:
      case 503:
      case 504:
        throw new ServiceUnavailableError("OpenAI")
      default:
        throw new AIVoiceError(
          errorData.error?.message || `OpenAI API error: ${response.status}`,
          "OpenAI",
          `HTTP_${response.status}`,
          response.status >= 500
        )
    }
  }

  private async convertMp3ToAudioBuffer(mp3ArrayBuffer: ArrayBuffer): Promise<AudioBuffer> {
    // Create AudioContext
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext
    const audioContext = new AudioContext()

    try {
      // Decode the MP3 data
      const audioBuffer = await audioContext.decodeAudioData(mp3ArrayBuffer.slice(0))
      return audioBuffer
    } catch (error) {
      throw new AIVoiceError(
        "Failed to decode audio data from OpenAI",
        "OpenAI",
        "DECODE_ERROR",
        false
      )
    }
  }

  // Utility method to check if a language is supported
  isLanguageSupported(language: string): boolean {
    // OpenAI TTS supports many languages, but voices are primarily English
    const supportedLanguages = [
      "english", "spanish", "french", "german", "italian", "portuguese", 
      "russian", "japanese", "korean", "chinese", "arabic", "hindi", "dutch"
    ]
    return supportedLanguages.includes(language.toLowerCase())
  }

  // Get the maximum character limit for OpenAI
  getMaxCharacters(): number {
    return 4096
  }

  // Get supported audio formats
  getSupportedFormats(): string[] {
    return ["mp3", "opus", "aac", "flac"]
  }

  // Update API key
  updateApiKey(apiKey: string): void {
    this.apiKey = apiKey
  }

  // Get current API key (masked for security)
  getApiKeyMask(): string {
    if (!this.apiKey) return ""
    return this.apiKey.substring(0, 7) + "..." + this.apiKey.substring(this.apiKey.length - 4)
  }
}