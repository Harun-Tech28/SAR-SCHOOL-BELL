import type { Language, VoiceType } from "./store"
import { getAIVoiceService } from "./ai-voice-service"
import { AIVoiceError } from "./ai-voice-types"
import { getVoiceFallbackHandler } from "./voice-fallback"
import { isElectron } from "./electron-utils"
import { playTextToSpeechOffline, isOfflineVoiceAvailable } from "./voice-utils-offline"

export const VOICE_OPTIONS: Record<VoiceType, { name: string; language: Language; description: string }> = {
  "standard-male": { name: "Male Voice", language: "english", description: "Clear male voice" },
  "standard-female": { name: "Female Voice", language: "english", description: "Clear female voice" },
  "azan-islamic": { name: "Islamic Azan", language: "arabic", description: "Islamic prayer call (Azan)" },
  hausa: { name: "Hausa", language: "hausa", description: "Native Hausa speaker" },
  twi: { name: "Twi", language: "twi", description: "Native Twi speaker" },
  arabic: { name: "Arabic", language: "arabic", description: "Native Arabic speaker" },

  // OpenAI Voices (Placeholder - requires API key)
  "openai-alloy": { name: "OpenAI Alloy", language: "english", description: "Neutral, balanced voice" },
  "openai-echo": { name: "OpenAI Echo", language: "english", description: "Warm, rounded male voice" },
  "openai-fable": { name: "OpenAI Fable", language: "english", description: "British accent, storytelling voice" },
  "openai-onyx": { name: "OpenAI Onyx", language: "english", description: "Deep, authoritative male voice" },
  "openai-nova": { name: "OpenAI Nova", language: "english", description: "Energetic female voice" },
  "openai-shimmer": { name: "OpenAI Shimmer", language: "english", description: "Clear, bright female voice" },

  // ElevenLabs Voices (Placeholder - requires API key)
  "elevenlabs-rachel": { name: "ElevenLabs Rachel", language: "english", description: "American female, narrative" },
  "elevenlabs-drew": { name: "ElevenLabs Drew", language: "english", description: "American male, news" },
  "elevenlabs-clyde": { name: "ElevenLabs Clyde", language: "english", description: "American male, deep" },
  "elevenlabs-paul": { name: "ElevenLabs Paul", language: "english", description: "American male, soft" },

  // Azure Voices (Placeholder - requires API key)
  "azure-jenny": { name: "Azure Jenny", language: "english", description: "American female, conversational" },
  "azure-guy": { name: "Azure Guy", language: "english", description: "American male, conversational" },
  "azure-aria": { name: "Azure Aria", language: "english", description: "American female, helpful" },
  "azure-davis": { name: "Azure Davis", language: "english", description: "American male, casual" },
}

export const LANGUAGE_NAMES: Record<Language, string> = {
  english: "English",
  hausa: "Hausa",
  twi: "Twi",
  arabic: "Arabic",
}

// Voice configuration with pitch and rate adjustments
// Optimized for NATURAL HUMAN SPEECH - closer to normal speaking patterns
const VOICE_CONFIG: Record<VoiceType, { pitch: number; rate: number; volume: number }> = {
  "standard-male": { pitch: 1.0, rate: 1.0, volume: 1 },      // Natural male - reset to defaults
  "standard-female": { pitch: 1.0, rate: 1.0, volume: 1 },    // Natural female - reset to defaults
  "azan-islamic": { pitch: 1.0, rate: 0.9, volume: 1 },       // Reverent, measured
  hausa: { pitch: 1.0, rate: 1.0, volume: 1 },
  twi: { pitch: 1.0, rate: 1.0, volume: 1 },
  arabic: { pitch: 1.0, rate: 0.95, volume: 1 },

  // OpenAI Voices - NATURAL HUMAN SPEECH
  "openai-alloy": { pitch: 1.0, rate: 1.0, volume: 1 },       // Neutral, natural
  "openai-echo": { pitch: 1.0, rate: 1.0, volume: 1 },        // Warm male, natural
  "openai-fable": { pitch: 1.0, rate: 1.0, volume: 1 },       // British, natural
  "openai-onyx": { pitch: 1.0, rate: 1.0, volume: 1 },        // Deep male, natural
  "openai-nova": { pitch: 1.0, rate: 1.0, volume: 1 },        // Female, natural
  "openai-shimmer": { pitch: 1.0, rate: 1.0, volume: 1 },     // Bright female, natural

  // ElevenLabs Voices - NATURAL HUMAN SPEECH
  "elevenlabs-rachel": { pitch: 1.0, rate: 1.0, volume: 1 }, // Female, natural
  "elevenlabs-drew": { pitch: 1.0, rate: 1.0, volume: 1 },   // Male, natural
  "elevenlabs-clyde": { pitch: 1.0, rate: 1.0, volume: 1 },  // Deep male, natural
  "elevenlabs-paul": { pitch: 1.0, rate: 1.0, volume: 1 },    // Soft male, natural

  // Azure Voices - NATURAL HUMAN SPEECH
  "azure-jenny": { pitch: 1.0, rate: 1.0, volume: 1 },       // Female, natural
  "azure-guy": { pitch: 1.0, rate: 1.0, volume: 1 },         // Male, natural
  "azure-aria": { pitch: 1.0, rate: 1.0, volume: 1 },        // Female, natural
  "azure-davis": { pitch: 1.0, rate: 1.0, volume: 1 },       // Male, natural
}

export const playTextToSpeech = async (
  text: string,
  voice: VoiceType,
  language: Language = "english",
  repeatCount?: number
) => {
  // In Electron, use offline voice service
  if (isElectron()) {
    console.log(`[Electron] Using offline voice service`)
    return playTextToSpeechOffline(text, voice, language, repeatCount)
  }

  // In browser, use browser TTS
  // Get repeat count from store settings if not provided
  const { useStore } = await import("./store")
  const settings = useStore.getState().settings
  const timesToRepeat = repeatCount ?? settings.defaultRepeatCount ?? 1

  console.log(`[v0] Playing text ${timesToRepeat} time(s): "${text.substring(0, 50)}..."`)

  let allSuccessful = true

  for (let i = 0; i < timesToRepeat; i++) {
    console.log(`[v0] Playing repetition ${i + 1} of ${timesToRepeat}`)

    // Use browser TTS directly - simple and reliable
    try {
      const success = await playBrowserTTS(text, voice, language)
      if (!success) {
        allSuccessful = false
        console.error(`[v0] Repetition ${i + 1} failed`)
      }
    } catch (error) {
      console.error(`[v0] Browser TTS failed:`, error)
      allSuccessful = false
    }

    // Add delay between repetitions (except for the last one)
    if (i < timesToRepeat - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000)) // 1 second delay
    }
  }

  console.log(`[v0] Completed ${timesToRepeat} repetitions. Success: ${allSuccessful}`)
  return allSuccessful
}

// New AI voice generation function
export const generateAIVoice = async (
  text: string,
  type: 'announcement' | 'prayer' | 'bell' | 'general' = 'general',
  options?: { voice?: VoiceType; language?: Language; speed?: number; pitch?: number }
): Promise<AudioBuffer | null> => {
  try {
    const aiVoiceService = getAIVoiceService()
    if (!aiVoiceService || !aiVoiceService.isEnabled()) {
      return null
    }

    console.log("[v0] Generating AI voice - Text:", text.substring(0, 50), "Type:", type)

    const voiceOptions = {
      voice: options?.voice,
      language: options?.language,
      speed: options?.speed || 1.0,
      pitch: options?.pitch || 1.0
    }

    const audioBuffer = await aiVoiceService.generateSpeech(text, type, voiceOptions)
    console.log("[v0] AI voice generation successful")
    return audioBuffer
  } catch (error) {
    if (error instanceof AIVoiceError) {
      console.error("[v0] AI Voice Error:", error.message, "Provider:", error.provider)
    } else {
      console.error("[v0] AI voice generation failed:", error)
    }
    return null
  }
}

// Play AudioBuffer using Web Audio API
export const playAudioBuffer = async (audioBuffer: AudioBuffer): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext
      const audioContext = new AudioContext()

      const source = audioContext.createBufferSource()
      source.buffer = audioBuffer
      source.connect(audioContext.destination)

      source.onended = () => {
        console.log("[v0] AI voice playback finished")
        resolve()
      }

      // Set up error handling with timeout as fallback
      const timeoutId = setTimeout(() => {
        console.error("[v0] Audio playback timeout")
        reject(new Error("Audio playback timeout"))
      }, audioBuffer.duration * 1000 + 5000) // Buffer duration + 5 seconds

      source.onended = () => {
        clearTimeout(timeoutId)
        console.log("[v0] AI voice playback finished")
        resolve()
      }

      source.start(0)
      console.log("[v0] AI voice playback started")
    } catch (error) {
      console.error("[v0] Failed to play audio buffer:", error)
      reject(error)
    }
  })
}

// Original browser TTS function (renamed for clarity)
export const playBrowserTTS = async (text: string, voice: VoiceType, language: Language = "english"): Promise<boolean> => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    console.error("[v0] Speech Synthesis not supported in this browser")
    return false
  }

  // Check if speech synthesis is available and not disabled
  if (!window.speechSynthesis) {
    console.error("[v0] Speech Synthesis API is not available")
    return false
  }

  // Ensure voices are loaded
  let voices = window.speechSynthesis.getVoices()
  if (voices.length === 0) {
    await new Promise<void>(resolve => {
      const onVoicesChanged = () => {
        voices = window.speechSynthesis.getVoices()
        window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged)
        resolve()
      }
      window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged)
      // Fallback timeout in case voiceschanged never fires
      setTimeout(resolve, 3000)
    })
  }

  // Get settings for voice mapping
  const { useStore } = await import("./store")
  const settings = useStore.getState().settings
  const mapping = settings.browserVoiceMapping

  return new Promise((resolve) => {
    try {
      // Only cancel if nothing is currently speaking
      // This allows sequential playback for repetitions
      if (!window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel()
      }

      const utterance = new SpeechSynthesisUtterance(text)
      const config = VOICE_CONFIG[voice]
      const langCode = getLanguageCode(language)

      console.log("[v0] Available Browser Voices:", voices.map(v => `${v.name} (${v.lang})`))

      let selectedBrowserVoice: SpeechSynthesisVoice | undefined

      // Helper to find voice by name or gender
      const findVoice = (keywords: string[], gender: 'male' | 'female') => {
        const lowerKeywords = keywords.map(k => k.toLowerCase())

        // 1. TOP PRIORITY: Microsoft Edge Natural voices (best quality, online)
        // Look for "Microsoft" + "Natural" + "Online" voices
        let match = voices.find(v => {
          const name = v.name.toLowerCase()
          const lang = v.lang.toLowerCase()
          const targetLang = langCode.split('-')[0].toLowerCase()

          return lang.startsWith(targetLang) &&
            name.includes("microsoft") &&
            (name.includes("natural") || name.includes("online")) &&
            lowerKeywords.some(k => name.includes(k))
        })

        // 2. HIGH PRIORITY: Microsoft Offline Voices (good quality, offline)
        // Look for "Microsoft" voices that are NOT "Online"
        if (!match) {
          match = voices.find(v => {
            const name = v.name.toLowerCase()
            const lang = v.lang.toLowerCase()
            const targetLang = langCode.split('-')[0].toLowerCase()

            return lang.startsWith(targetLang) &&
              name.includes("microsoft") &&
              !name.includes("online") &&
              lowerKeywords.some(k => name.includes(k))
          })
        }

        // 3. Fallback to ANY Microsoft Edge Natural voice of correct language
        if (!match) {
          match = voices.find(v => {
            const name = v.name.toLowerCase()
            const lang = v.lang.toLowerCase()
            const targetLang = langCode.split('-')[0].toLowerCase()

            return lang.startsWith(targetLang) &&
              name.includes("microsoft") &&
              (name.includes("natural") || name.includes("online"))
          })
        }

        // 4. Google voices (Chrome - also high quality)
        if (!match) {
          match = voices.find(v => {
            const name = v.name.toLowerCase()
            const lang = v.lang.toLowerCase()
            const targetLang = langCode.split('-')[0].toLowerCase()

            return lang.startsWith(targetLang) &&
              name.includes("google") &&
              lowerKeywords.some(k => name.includes(k))
          })
        }

        // 5. Any Natural/Enhanced voice
        if (!match) {
          match = voices.find(v => {
            const name = v.name.toLowerCase()
            const lang = v.lang.toLowerCase()
            const targetLang = langCode.split('-')[0].toLowerCase()

            return lang.startsWith(targetLang) &&
              (name.includes("natural") || name.includes("enhanced")) &&
              lowerKeywords.some(k => name.includes(k))
          })
        }

        // 6. Standard search: match language and keywords
        if (!match) {
          match = voices.find(v => {
            const name = v.name.toLowerCase()
            const lang = v.lang.toLowerCase()
            const targetLang = langCode.split('-')[0].toLowerCase()

            return lang.startsWith(targetLang) &&
              lowerKeywords.some(k => name.includes(k))
          })
        }

        // 7. If no specific match, try to find any voice of the correct gender for the language
        if (!match) {
          // Common identifiers for gender in voice names
          const maleIdentifiers = ['male', 'david', 'james', 'daniel', 'mark', 'george', 'guy', 'richard', 'paul']
          const femaleIdentifiers = ['female', 'zira', 'samantha', 'susan', 'hazel', 'heather', 'jenny', 'aria', 'linda', 'sarah']

          const targetIdentifiers = gender === 'male' ? maleIdentifiers : femaleIdentifiers

          match = voices.find(v => {
            const name = v.name.toLowerCase()
            const lang = v.lang.toLowerCase()
            const targetLang = langCode.split('-')[0].toLowerCase()

            return lang.startsWith(targetLang) &&
              targetIdentifiers.some(id => name.includes(id))
          })
        }

        return match
      }

      // Map AI voices to browser voice characteristics

      // Check for explicit mapping first
      if (mapping) {
        if (mapping.male && (voice === 'standard-male' || voice === 'openai-onyx' || voice === 'openai-echo' || voice === 'azure-guy' || voice === 'azure-davis' || voice === 'elevenlabs-clyde' || voice === 'elevenlabs-drew' || voice === 'elevenlabs-paul')) {
          const mappedVoice = voices.find(v => v.name === mapping.male)
          if (mappedVoice) {
            selectedBrowserVoice = mappedVoice
            console.log(`[v0] Using mapped male voice: ${mappedVoice.name}`)
          }
        }
        if (mapping.female && (voice === 'standard-female' || voice === 'openai-nova' || voice === 'openai-shimmer' || voice === 'openai-alloy' || voice === 'azure-jenny' || voice === 'azure-aria' || voice === 'elevenlabs-rachel')) {
          const mappedVoice = voices.find(v => v.name === mapping.female)
          if (mappedVoice) {
            selectedBrowserVoice = mappedVoice
            console.log(`[v0] Using mapped female voice: ${mappedVoice.name}`)
          }
        }
      }

      if (!selectedBrowserVoice) {
        if (voice === 'openai-onyx' || voice === 'openai-echo' || voice === 'standard-male' || voice === 'azure-guy' || voice === 'azure-davis' || voice === 'elevenlabs-clyde' || voice === 'elevenlabs-drew' || voice === 'elevenlabs-paul') {
          // Look for male voices
          selectedBrowserVoice = findVoice(['male', 'david', 'james', 'daniel', 'guy'], 'male')
        } else if (voice === 'openai-nova' || voice === 'openai-shimmer' || voice === 'openai-alloy' || voice === 'standard-female' || voice === 'azure-jenny' || voice === 'azure-aria' || voice === 'elevenlabs-rachel') {
          // Look for female voices
          selectedBrowserVoice = findVoice(['female', 'zira', 'samantha', 'google us english', 'jenny', 'aria'], 'female')
        }
      }

      // If specific match found, use it. Otherwise let browser default for language.
      if (selectedBrowserVoice) {
        utterance.voice = selectedBrowserVoice
        console.log(`[v0] Selected browser voice: ${selectedBrowserVoice.name}`)
      } else {
        console.log(`[v0] No specific voice match found, using browser default for ${langCode}`)
      }

      utterance.pitch = config.pitch
      utterance.rate = config.rate
      utterance.volume = config.volume
      utterance.lang = langCode

      console.log("[v0] Playing Browser TTS - Text:", text.substring(0, 50), "Voice:", voice, "Lang:", langCode)

      // Event handlers
      utterance.onstart = () => {
        console.log("[v0] Browser TTS started")
      }

      utterance.onend = () => {
        console.log("[v0] Browser TTS finished")
        resolve(true)
      }

      utterance.onerror = (event) => {
        console.error("[v0] Browser TTS error:", event.error)
        resolve(false)
      }

      // Speak immediately
      window.speechSynthesis.speak(utterance)
    } catch (error) {
      console.error("[v0] Browser TTS Error:", error)
      resolve(false)
    }
  })
}

export const getLanguageCode = (language: Language): string => {
  const codes: Record<Language, string> = {
    english: "en-US",
    hausa: "ha",
    twi: "ak",
    arabic: "ar",
  }
  return codes[language] || "en-US"
}

export const translateMessage = (text: string, targetLanguage: Language): string => {
  // Simple translation dictionary for common messages
  const translations: Record<Language, Record<string, string>> = {
    english: {},
    hausa: {
      "should report to the office": "ya kamata ya je ofis",
      "your parent is waiting at the gate": "mahaifiyar ku tana jira a baje",
      "please come to the staff common room": "zo gida mai aiki da fushi",
      "report to the headteacher's office now": "je ofis mai shugaba yanzu",
    },
    twi: {
      "should report to the office": "forow kye ofis no",
      "your parent is waiting at the gate": "wo/wo maame/papa retua wɔ apon no",
      "please come to the staff common room": "ba stamfo no",
      "report to the headteacher's office now": "kɔ ofis osofo mu",
    },
    arabic: {
      "should report to the office": "يجب أن تتوجه إلى المكتب",
      "your parent is waiting at the gate": "والدك ينتظر عند البوابة",
      "please come to the staff common room": "يرجى الحضور إلى غرفة الموظفين",
      "report to the headteacher's office now": "توجه إلى مكتب مدير المدرسة الآن",
    },
  }

  if (targetLanguage === "english") return text

  let translated = text
  const trans = translations[targetLanguage] || {}

  Object.entries(trans).forEach(([en, local]) => {
    translated = translated.replace(new RegExp(en, "gi"), local)
  })

  return translated
}

export const isTTSAvailable = (): boolean => {
  return typeof window !== "undefined" && "speechSynthesis" in window && !!window.speechSynthesis
}

export const getTTSStatus = (): { available: boolean; message: string } => {
  if (typeof window === "undefined") {
    return { available: false, message: "TTS not available in server environment" }
  }

  if (!("speechSynthesis" in window)) {
    return { available: false, message: "Speech Synthesis not supported in this browser" }
  }

  if (!window.speechSynthesis) {
    return { available: false, message: "Speech Synthesis API is not available" }
  }

  return { available: true, message: "TTS is ready" }
}

// Get comprehensive voice system status with fallback information
export const getVoiceSystemStatus = async (): Promise<{
  aiVoice: { available: boolean; message: string; providers?: string[] }
  browserTTS: { available: boolean; message: string }
  fallback: { available: boolean; recommendation: 'ai' | 'tts' | 'both' | 'none' }
  recommended: 'ai' | 'tts' | 'none'
}> => {
  const aiVoiceService = getAIVoiceService()
  const ttsStatus = getTTSStatus()
  const fallbackHandler = getVoiceFallbackHandler()

  let aiVoiceStatus = { available: false, message: "AI voice not initialized" }
  let providers: string[] = []

  if (aiVoiceService) {
    if (aiVoiceService.isEnabled()) {
      const hasHealthy = aiVoiceService.hasHealthyProviders()
      if (hasHealthy) {
        aiVoiceStatus = { available: true, message: "AI voice ready" }
        // Get available providers
        const health = aiVoiceService.getProviderHealth()
        providers = Object.entries(health)
          .filter(([_, status]) => status.healthy)
          .map(([provider, _]) => provider)
      } else {
        aiVoiceStatus = { available: false, message: "No healthy AI voice providers" }
      }
    } else {
      aiVoiceStatus = { available: false, message: "AI voice disabled" }
    }
  }

  // Get fallback system health
  const fallbackHealth = await fallbackHandler.checkSystemHealth()

  const recommended = aiVoiceStatus.available ? 'ai' :
    ttsStatus.available ? 'tts' : 'none'

  return {
    aiVoice: { ...aiVoiceStatus, providers },
    browserTTS: ttsStatus,
    fallback: {
      available: fallbackHealth.recommendation !== 'none',
      recommendation: fallbackHealth.recommendation
    },
    recommended
  }
}

// Check if AI voice is available for a specific type
export const isAIVoiceAvailable = (type: 'announcement' | 'prayer' | 'bell' | 'general' = 'general'): boolean => {
  const aiVoiceService = getAIVoiceService()
  if (!aiVoiceService || !aiVoiceService.isEnabled()) {
    return false
  }

  const settings = aiVoiceService.getSettings()
  const voiceProfile = settings.voiceProfiles[type]

  if (!voiceProfile) {
    return false
  }

  const health = aiVoiceService.getProviderHealth()
  const providerHealth = health[voiceProfile.provider as keyof typeof health]

  return providerHealth?.healthy || false
}

// Get cost estimate for text
export const estimateVoiceCost = async (
  text: string,
  type: 'announcement' | 'prayer' | 'bell' | 'general' = 'general'
): Promise<{ cost: number; provider: string; cached: boolean } | null> => {
  const aiVoiceService = getAIVoiceService()
  if (!aiVoiceService || !aiVoiceService.isEnabled()) {
    return null
  }

  try {
    return await aiVoiceService.estimateCost(text, type)
  } catch (error) {
    console.error("[v0] Cost estimation failed:", error)
    return null
  }
}

// Play announcement with repeat functionality
export const playAnnouncement = async (
  text: string,
  voice?: VoiceType,
  language?: Language,
  repeatCount?: number
): Promise<boolean> => {
  const { useStore } = await import("./store")
  const settings = useStore.getState().settings

  const selectedVoice = voice || settings.defaultVoice
  const selectedLanguage = language || settings.defaultLanguage
  const timesToRepeat = repeatCount ?? settings.defaultRepeatCount ?? 1

  // In Electron, use offline voice service
  if (isElectron()) {
    console.log(`[Electron] Playing announcement ${timesToRepeat} time(s) with offline voice`)
    return playTextToSpeechOffline(text, selectedVoice, selectedLanguage, timesToRepeat)
  }

  // In browser, use fallback handler
  console.log(`[v0] Playing announcement ${timesToRepeat} time(s)`)

  let allSuccessful = true

  for (let i = 0; i < timesToRepeat; i++) {
    console.log(`[v0] Announcement repetition ${i + 1} of ${timesToRepeat}`)

    const fallbackHandler = getVoiceFallbackHandler()
    const result = await fallbackHandler.playWithFallback(text, selectedVoice, selectedLanguage, 'announcement', {
      maxRetries: 2,
      retryDelay: 1000,
      preferAI: true,
      fallbackToTTS: true,
      logErrors: true
    })

    if (!result.success) {
      allSuccessful = false
      console.error(`[v0] Announcement repetition ${i + 1} failed`)
    }

    // Add delay between repetitions (except for the last one)
    if (i < timesToRepeat - 1) {
      await new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay for announcements
    }
  }

  console.log(`[v0] Announcement completed. ${timesToRepeat} repetitions. Success: ${allSuccessful}`)
  return allSuccessful
}

export const playAzanCall = async (prayerName: string, customAudioId?: string) => {
  console.log(`[v0] playAzanCall called for ${prayerName}, customAudioId: ${customAudioId || 'none'}`)

  // If custom audio is provided, try to play it first
  if (customAudioId) {
    console.log(`[v0] Attempting to play custom audio: ${customAudioId}`)
    const { playStoredAudio } = await import("./audio-storage")
    const customSuccess = await playStoredAudio(customAudioId)

    if (customSuccess) {
      console.log(`[v0] ✅ Custom prayer audio played successfully`)
      return true
    } else {
      console.warn(`[v0] ⚠️ Custom prayer audio failed, falling back to generated Azan`)
    }
  }

  // Fall back to generated prayer call
  const azanText = generatePrayerCallText(prayerName)

  // Use the comprehensive fallback system with prayer-specific settings
  const fallbackHandler = getVoiceFallbackHandler()
  const result = await fallbackHandler.playWithFallback(azanText, "azan-islamic", "arabic", 'prayer', {
    maxRetries: 2, // More retries for important prayer calls
    retryDelay: 1000,
    preferAI: true,
    fallbackToTTS: true,
    logErrors: true // Log errors for prayer calls
  })

  if (result.success) {
    console.log(`[v0] Prayer call played successfully using ${result.method} (${result.provider || 'browser'})`)
  } else {
    console.error(`[v0] Prayer call failed: ${result.error}`)
  }

  return result.success
}

// Generate traditional Islamic prayer call text using the comprehensive generator
export const generatePrayerCallText = (prayerName: string): string => {
  // Import here to avoid circular dependencies
  const { generateSchoolPrayerCall } = require("./prayer-call-generator")

  // Generate school-appropriate prayer call
  return generateSchoolPrayerCall(prayerName, true)
}
