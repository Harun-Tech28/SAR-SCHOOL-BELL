import type { AIVoiceProvider, VoiceOptions, AIVoiceProfile } from "../ai-voice-types"
import { AIVoiceError, RateLimitError, AuthenticationError, ServiceUnavailableError } from "../ai-voice-types"
import { PROVIDER_COSTS } from "../ai-voice-constants"
import { fetchWithTimeout } from "../utils"

export class ElevenLabsProvider implements AIVoiceProvider {
  name = "ElevenLabs"
  private apiKey: string
  private baseUrl = "https://api.elevenlabs.io/v1"

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async generateSpeech(text: string, options: VoiceOptions): Promise<AudioBuffer> {
    if (!this.apiKey) {
      throw new AuthenticationError("ElevenLabs")
    }

    const voiceId = this.mapVoiceId(options.voice)
    const requestBody = {
      text: text,
      model_id: "eleven_monolingual_v1", // Use multilingual for other languages
      voice_settings: {
        stability: options.stability || 0.5,
        similarity_boost: options.clarity || 0.75,
        style: 0.0,
        use_speaker_boost: true
      }
    }

    try {
      const response = await fetchWithTimeout(`${this.baseUrl}/text-to-speech/${voiceId}`, {
        method: "POST",
        headers: {
          "Accept": "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": this.apiKey
        },
        body: JSON.stringify(requestBody)
        , timeout: 5000
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
      throw new ServiceUnavailableError("ElevenLabs")
    }
  }

  async getAvailableVoices(): Promise<AIVoiceProfile[]> {
    if (!this.apiKey) {
      // Return default voices if no API key
      return this.getDefaultVoices()
    }

    try {
      const response = await fetchWithTimeout(`${this.baseUrl}/voices`, {
        headers: {
          "xi-api-key": this.apiKey
        }
        , timeout: 5000
      })

      if (!response.ok) {
        // Fallback to default voices if API call fails
        return this.getDefaultVoices()
      }

      const data = await response.json()
      return this.mapElevenLabsVoices(data.voices || [])
    } catch (error) {
      // Fallback to default voices
      return this.getDefaultVoices()
    }
  }

  async validateCredentials(): Promise<boolean> {
    if (!this.apiKey) {
      return false
    }

    try {
      const response = await fetchWithTimeout(`${this.baseUrl}/user`, {
        headers: {
          "xi-api-key": this.apiKey
        }
        , timeout: 5000
      })

      return response.ok
    } catch (error) {
      return false
    }
  }

  estimateCost(text: string, voice: string): number {
    const characterCount = text.length
    return (characterCount / 1000) * PROVIDER_COSTS.elevenlabs
  }

  private getDefaultVoices(): AIVoiceProfile[] {
    return [
      {
        id: "elevenlabs-rachel",
        name: "Rachel",
        language: "english",
        gender: "female",
        accent: "american",
        category: "standard",
        provider: "elevenlabs"
      },
      {
        id: "elevenlabs-drew",
        name: "Drew",
        language: "english",
        gender: "male",
        accent: "american",
        category: "announcement",
        provider: "elevenlabs"
      },
      {
        id: "elevenlabs-clyde",
        name: "Clyde",
        language: "english",
        gender: "male",
        accent: "american",
        category: "standard",
        provider: "elevenlabs"
      },
      {
        id: "elevenlabs-paul",
        name: "Paul",
        language: "english",
        gender: "male",
        accent: "american",
        category: "announcement",
        provider: "elevenlabs"
      },
      {
        id: "elevenlabs-domi",
        name: "Domi",
        language: "english",
        gender: "female",
        accent: "american",
        category: "standard",
        provider: "elevenlabs"
      },
      {
        id: "elevenlabs-dave",
        name: "Dave",
        language: "english",
        gender: "male",
        accent: "british",
        category: "announcement",
        provider: "elevenlabs"
      }
    ]
  }

  private mapElevenLabsVoices(voices: any[]): AIVoiceProfile[] {
    return voices.map(voice => ({
      id: `elevenlabs-${voice.voice_id}`,
      name: voice.name,
      language: this.detectLanguage(voice.labels || {}),
      gender: this.detectGender(voice.labels || {}),
      accent: this.detectAccent(voice.labels || {}),
      category: this.detectCategory(voice.labels || {}),
      provider: "elevenlabs",
      previewUrl: voice.preview_url
    }))
  }

  private detectLanguage(labels: any): string {
    const language = labels.language || labels.accent || "english"
    return language.toLowerCase()
  }

  private detectGender(labels: any): "male" | "female" | "neutral" {
    const gender = labels.gender || labels.sex || ""
    if (gender.toLowerCase().includes("male")) return "male"
    if (gender.toLowerCase().includes("female")) return "female"
    return "neutral"
  }

  private detectAccent(labels: any): string | undefined {
    return labels.accent || labels.region || undefined
  }

  private detectCategory(labels: any): "standard" | "religious" | "announcement" | "bell" {
    const description = (labels.description || "").toLowerCase()
    const useCase = (labels.use_case || "").toLowerCase()

    if (description.includes("announcement") || useCase.includes("announcement")) {
      return "announcement"
    }
    if (description.includes("religious") || useCase.includes("religious")) {
      return "religious"
    }
    if (description.includes("bell") || useCase.includes("bell")) {
      return "bell"
    }
    return "standard"
  }

  private mapVoiceId(voiceId: string): string {
    // Map our voice IDs to ElevenLabs voice IDs
    const voiceMap: Record<string, string> = {
      "elevenlabs-rachel": "21m00Tcm4TlvDq8ikWAM",
      "elevenlabs-drew": "29vD33N1CtxCmqQRPOHJ",
      "elevenlabs-clyde": "2EiwWnXFnvU5JabPnv8n",
      "elevenlabs-paul": "5Q0t7uMcjvnagumLfvZi",
      "elevenlabs-domi": "AZnzlk1XvdvUeBnXmlld",
      "elevenlabs-dave": "CYw3kZ02Hs0563khs1Fj"
    }

    // If it's already a direct voice ID (from API), use it
    if (voiceId.length === 20 && !voiceId.includes("-")) {
      return voiceId
    }

    return voiceMap[voiceId] || "21m00Tcm4TlvDq8ikWAM" // Default to Rachel
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
        throw new AuthenticationError("ElevenLabs")
      case 429:
        const retryAfter = response.headers.get("retry-after")
        throw new RateLimitError("ElevenLabs", retryAfter ? parseInt(retryAfter) : undefined)
      case 500:
      case 502:
      case 503:
      case 504:
        throw new ServiceUnavailableError("ElevenLabs")
      default:
        throw new AIVoiceError(
          errorData.detail?.message || errorData.message || `ElevenLabs API error: ${response.status}`,
          "ElevenLabs",
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
        "Failed to decode audio data from ElevenLabs",
        "ElevenLabs",
        "DECODE_ERROR",
        false
      )
    }
  }

  // Utility method to check if a language is supported
  isLanguageSupported(language: string): boolean {
    const supportedLanguages = [
      "english", "spanish", "french", "german", "italian", "portuguese",
      "polish", "hindi", "arabic", "japanese", "korean", "chinese"
    ]
    return supportedLanguages.includes(language.toLowerCase())
  }

  // Get the maximum character limit for ElevenLabs
  getMaxCharacters(): number {
    return 5000
  }

  // Get supported audio formats
  getSupportedFormats(): string[] {
    return ["mp3", "wav", "ogg"]
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

  // ElevenLabs specific methods
  async getVoiceSettings(voiceId: string): Promise<any> {
    if (!this.apiKey) {
      throw new AuthenticationError("ElevenLabs")
    }

    try {
      const response = await fetchWithTimeout(`${this.baseUrl}/voices/${voiceId}/settings`, {
        headers: {
          "xi-api-key": this.apiKey
        }
        , timeout: 5000
      })

      if (!response.ok) {
        throw new AIVoiceError("Failed to get voice settings", "ElevenLabs", "SETTINGS_ERROR", false)
      }

      return await response.json()
    } catch (error) {
      if (error instanceof AIVoiceError) {
        throw error
      }
      throw new ServiceUnavailableError("ElevenLabs")
    }
  }

  async getUserInfo(): Promise<any> {
    if (!this.apiKey) {
      throw new AuthenticationError("ElevenLabs")
    }

    try {
      const response = await fetch(`${this.baseUrl}/user`, {
        headers: {
          "xi-api-key": this.apiKey
        }
      })

      if (!response.ok) {
        throw new AIVoiceError("Failed to get user info", "ElevenLabs", "USER_INFO_ERROR", false)
      }

      return await response.json()
    } catch (error) {
      if (error instanceof AIVoiceError) {
        throw error
      }
      throw new ServiceUnavailableError("ElevenLabs")
    }
  }
}