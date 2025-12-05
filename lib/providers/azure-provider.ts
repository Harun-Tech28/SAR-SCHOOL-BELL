import type { AIVoiceProvider, VoiceOptions, AIVoiceProfile } from "../ai-voice-types"
import { AIVoiceError, RateLimitError, AuthenticationError, ServiceUnavailableError } from "../ai-voice-types"
import { PROVIDER_COSTS } from "../ai-voice-constants"
import { fetchWithTimeout } from "../utils"

export class AzureProvider implements AIVoiceProvider {
  name = "Azure Cognitive Services"
  private apiKey: string
  private region: string
  private baseUrl: string

  constructor(apiKey: string, endpoint?: string) {
    this.apiKey = apiKey

    // Extract region from endpoint or use default
    if (endpoint) {
      const match = endpoint.match(/https:\/\/([^.]+)\.tts\.speech\.microsoft\.com/)
      this.region = match ? match[1] : "eastus"
      this.baseUrl = endpoint
    } else {
      this.region = "eastus"
      this.baseUrl = `https://${this.region}.tts.speech.microsoft.com`
    }
  }

  async generateSpeech(text: string, options: VoiceOptions): Promise<AudioBuffer> {
    if (!this.apiKey) {
      throw new AuthenticationError("Azure")
    }

    // Get access token first
    const accessToken = await this.getAccessToken()

    const voiceInfo = this.mapVoiceId(options.voice)
    const ssml = this.generateSSML(text, voiceInfo, options)

    try {
      const response = await fetchWithTimeout(`${this.baseUrl}/cognitiveservices/v1`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/ssml+xml",
          "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
          "User-Agent": "SchoolBellSystem"
        },
        body: ssml
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
      throw new ServiceUnavailableError("Azure")
    }
  }

  async getAvailableVoices(): Promise<AIVoiceProfile[]> {
    if (!this.apiKey) {
      return this.getDefaultVoices()
    }

    try {
      const accessToken = await this.getAccessToken()
      const response = await fetchWithTimeout(`${this.baseUrl}/cognitiveservices/voices/list`, {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
        , timeout: 5000
      })

      if (!response.ok) {
        return this.getDefaultVoices()
      }

      const voices = await response.json()
      return this.mapAzureVoices(voices)
    } catch (error) {
      return this.getDefaultVoices()
    }
  }

  async validateCredentials(): Promise<boolean> {
    if (!this.apiKey) {
      return false
    }

    try {
      const accessToken = await this.getAccessToken()
      return !!accessToken
    } catch (error) {
      return false
    }
  }

  estimateCost(text: string, voice: string): number {
    const characterCount = text.length
    return (characterCount / 1000) * PROVIDER_COSTS.azure
  }

  private async getAccessToken(): Promise<string> {
    const tokenUrl = `https://${this.region}.api.cognitive.microsoft.com/sts/v1.0/issueToken`

    try {
      const response = await fetchWithTimeout(tokenUrl, {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": this.apiKey,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: ""
      })

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          throw new AuthenticationError("Azure")
        }
        throw new ServiceUnavailableError("Azure")
      }

      return await response.text()
    } catch (error) {
      if (error instanceof AIVoiceError) {
        throw error
      }
      throw new ServiceUnavailableError("Azure")
    }
  }

  private generateSSML(text: string, voiceInfo: any, options: VoiceOptions): string {
    const rate = this.mapSpeedToRate(options.speed)
    const pitch = this.mapPitchToSSML(options.pitch)

    return `
      <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${voiceInfo.locale}">
        <voice name="${voiceInfo.name}">
          <prosody rate="${rate}" pitch="${pitch}">
            ${this.escapeXML(text)}
          </prosody>
        </voice>
      </speak>
    `.trim()
  }

  private mapSpeedToRate(speed: number): string {
    // Convert speed (0.25-4.0) to Azure rate format
    if (speed <= 0.5) return "x-slow"
    if (speed <= 0.75) return "slow"
    if (speed <= 1.25) return "medium"
    if (speed <= 1.5) return "fast"
    return "x-fast"
  }

  private mapPitchToSSML(pitch: number): string {
    // Convert pitch (0.5-2.0) to Azure pitch format
    if (pitch <= 0.75) return "low"
    if (pitch <= 1.25) return "medium"
    return "high"
  }

  private escapeXML(text: string): string {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;")
  }

  private getDefaultVoices(): AIVoiceProfile[] {
    return [
      {
        id: "azure-jenny",
        name: "Jenny",
        language: "english",
        gender: "female",
        accent: "american",
        category: "standard",
        provider: "azure"
      },
      {
        id: "azure-guy",
        name: "Guy",
        language: "english",
        gender: "male",
        accent: "american",
        category: "announcement",
        provider: "azure"
      },
      {
        id: "azure-aria",
        name: "Aria",
        language: "english",
        gender: "female",
        accent: "american",
        category: "announcement",
        provider: "azure"
      },
      {
        id: "azure-davis",
        name: "Davis",
        language: "english",
        gender: "male",
        accent: "american",
        category: "standard",
        provider: "azure"
      },
      {
        id: "azure-jane",
        name: "Jane",
        language: "english",
        gender: "female",
        accent: "american",
        category: "standard",
        provider: "azure"
      },
      {
        id: "azure-jason",
        name: "Jason",
        language: "english",
        gender: "male",
        accent: "american",
        category: "announcement",
        provider: "azure"
      }
    ]
  }

  private mapAzureVoices(voices: any[]): AIVoiceProfile[] {
    return voices
      .filter(voice => voice.VoiceType === "Neural") // Only use neural voices
      .map(voice => ({
        id: `azure-${voice.ShortName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        name: voice.DisplayName,
        language: this.mapLocaleToLanguage(voice.Locale),
        gender: voice.Gender.toLowerCase() as "male" | "female" | "neutral",
        accent: this.extractAccent(voice.LocaleName),
        category: this.categorizeVoice(voice.StyleList || []),
        provider: "azure"
      }))
      .slice(0, 20) // Limit to first 20 voices to avoid overwhelming UI
  }

  private mapLocaleToLanguage(locale: string): string {
    const languageMap: Record<string, string> = {
      "en-US": "english",
      "en-GB": "english",
      "en-AU": "english",
      "en-CA": "english",
      "es-ES": "spanish",
      "es-MX": "spanish",
      "fr-FR": "french",
      "fr-CA": "french",
      "de-DE": "german",
      "it-IT": "italian",
      "pt-BR": "portuguese",
      "pt-PT": "portuguese",
      "ru-RU": "russian",
      "ja-JP": "japanese",
      "ko-KR": "korean",
      "zh-CN": "chinese",
      "ar-SA": "arabic",
      "hi-IN": "hindi",
      "nl-NL": "dutch",
      "sv-SE": "swedish"
    }

    return languageMap[locale] || "english"
  }

  private extractAccent(localeName: string): string | undefined {
    if (localeName.includes("United States")) return "american"
    if (localeName.includes("United Kingdom")) return "british"
    if (localeName.includes("Australia")) return "australian"
    if (localeName.includes("Canada")) return "canadian"
    return undefined
  }

  private categorizeVoice(styleList: string[]): "standard" | "religious" | "announcement" | "bell" {
    const styles = styleList.join(" ").toLowerCase()

    if (styles.includes("newscast") || styles.includes("announcement")) {
      return "announcement"
    }
    if (styles.includes("religious") || styles.includes("prayer")) {
      return "religious"
    }
    return "standard"
  }

  private mapVoiceId(voiceId: string): { name: string; locale: string } {
    // Map our voice IDs to Azure voice names
    const voiceMap: Record<string, { name: string; locale: string }> = {
      "azure-jenny": { name: "en-US-JennyNeural", locale: "en-US" },
      "azure-guy": { name: "en-US-GuyNeural", locale: "en-US" },
      "azure-aria": { name: "en-US-AriaNeural", locale: "en-US" },
      "azure-davis": { name: "en-US-DavisNeural", locale: "en-US" },
      "azure-jane": { name: "en-US-JaneNeural", locale: "en-US" },
      "azure-jason": { name: "en-US-JasonNeural", locale: "en-US" }
    }

    return voiceMap[voiceId] || { name: "en-US-JennyNeural", locale: "en-US" }
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
      case 403:
        throw new AuthenticationError("Azure")
      case 429:
        const retryAfter = response.headers.get("retry-after")
        throw new RateLimitError("Azure", retryAfter ? parseInt(retryAfter) : undefined)
      case 500:
      case 502:
      case 503:
      case 504:
        throw new ServiceUnavailableError("Azure")
      default:
        throw new AIVoiceError(
          errorData.error?.message || `Azure API error: ${response.status}`,
          "Azure",
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
        "Failed to decode audio data from Azure",
        "Azure",
        "DECODE_ERROR",
        false
      )
    }
  }

  // Utility method to check if a language is supported
  isLanguageSupported(language: string): boolean {
    const supportedLanguages = [
      "english", "spanish", "french", "german", "italian", "portuguese",
      "russian", "japanese", "korean", "chinese", "arabic", "hindi",
      "dutch", "swedish", "norwegian", "danish", "finnish"
    ]
    return supportedLanguages.includes(language.toLowerCase())
  }

  // Get the maximum character limit for Azure
  getMaxCharacters(): number {
    return 10000
  }

  // Get supported audio formats
  getSupportedFormats(): string[] {
    return ["mp3", "wav", "ogg", "webm"]
  }

  // Update API key and region
  updateCredentials(apiKey: string, endpoint?: string): void {
    this.apiKey = apiKey

    if (endpoint) {
      const match = endpoint.match(/https:\/\/([^.]+)\.tts\.speech\.microsoft\.com/)
      this.region = match ? match[1] : "eastus"
      this.baseUrl = endpoint
    }
  }

  // Get current API key (masked for security)
  getApiKeyMask(): string {
    if (!this.apiKey) return ""
    return this.apiKey.substring(0, 7) + "..." + this.apiKey.substring(this.apiKey.length - 4)
  }

  // Get current region
  getRegion(): string {
    return this.region
  }

  // Azure specific methods
  async getVoiceStyles(voiceName: string): Promise<string[]> {
    // This would require additional API calls to get voice styles
    // For now, return common styles
    return ["default", "newscast", "customerservice", "chat", "cheerful", "empathetic"]
  }

  async getSpeechSynthesisMarkup(text: string, voiceName: string, options?: {
    rate?: string
    pitch?: string
    volume?: string
    style?: string
  }): Promise<string> {
    const rate = options?.rate || "medium"
    const pitch = options?.pitch || "medium"
    const volume = options?.volume || "medium"
    const style = options?.style || "default"

    return `
      <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
        <voice name="${voiceName}">
          <mstts:express-as style="${style}">
            <prosody rate="${rate}" pitch="${pitch}" volume="${volume}">
              ${this.escapeXML(text)}
            </prosody>
          </mstts:express-as>
        </voice>
      </speak>
    `.trim()
  }
}