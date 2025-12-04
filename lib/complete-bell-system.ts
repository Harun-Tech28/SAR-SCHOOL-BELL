import { playTaskAudio, playToneAndAnnouncement, CombinedAudioPlayer } from "./combined-audio"
import { playCustomAnnouncement } from "./high-quality-announcements"
import { playBellSound } from "./bell-sounds"
import { useStore } from "./store"
import type { BellType } from "./bell-sounds"
import type { VoiceType, Language } from "./store"
import { playStoredAudio } from "./audio-storage"

/**
 * COMPLETE BELL SYSTEM FOR SCHOOL
 * Combines ringing tones with voice announcements
 * Supports all bell types, voice options, and scheduling
 */

export interface BellSystemOptions {
  bellType?: BellType
  voice?: VoiceType
  language?: Language
  repeatCount?: number
  bellRingsBeforeVoice?: number // Number of times to ring bell BEFORE voice plays
  delayBetweenToneAndVoice?: number
  delayBetweenRepeats?: number
  useHighQualityVoice?: boolean
  customAudioId?: string // ID of custom audio file to play instead of TTS
}

export interface ScheduledBell {
  id: string
  name: string
  time: string
  day: string
  bellType: BellType
  message: string
  voice?: VoiceType
  enabled: boolean
}

export class CompleteBellSystem {
  // All available bell types with descriptions
  static readonly BELL_TYPES = {
    // Traditional bells
    "bell": "Traditional school bell - classic ringing sound",
    "electronic-bell": "Modern electronic bell - sharp beeps",
    "double-ring": "Double ring bell - two quick rings",
    "triple-ring": "Triple ring bell - three quick rings",
    "long-ring": "Long continuous ring - extended bell sound",
    "dismissal-bell": "Dismissal bell - cheerful ascending melody",

    // Chimes and soft tones
    "chime": "Soft melodic chime - pleasant ascending notes",
    "westminster-chimes": "Westminster chimes - Big Ben style",
    "islamic-chime": "Islamic chime - gentle prayer reminder",
    "prayer-bell": "Prayer bell - reverent sustained tone",

    // Announcement and alert tones
    "announcement": "Announcement tone - attention-getting sound",
    "emergency-alert": "Emergency alert - urgent siren sound",

    // Special purpose
    "adhan-call": "Adhan call - Islamic prayer call tone"
  } as const

  // Premium voice options for announcements
  static readonly PREMIUM_VOICES = {
    "openai-nova": "Professional female - clear and authoritative",
    "openai-onyx": "Deep male - authoritative and commanding",
    "openai-shimmer": "Bright female - friendly and welcoming",
    "openai-echo": "Warm male - rounded and approachable",
    "openai-fable": "British storytelling - engaging and articulate",
    "openai-alloy": "Balanced neutral - versatile for all uses",
    "elevenlabs-rachel": "Premium ElevenLabs - natural and expressive",
    "azure-aria": "Microsoft Azure - helpful and conversational"
  } as const

  // Play a complete bell sequence (tone + voice)
  static async playBellSequence(
    bellName: string,
    message: string,
    options: BellSystemOptions = {}
  ): Promise<boolean> {
    const settings = useStore.getState().settings
    const {
      bellType = "bell",
      voice = settings.defaultVoice,
      language = settings.defaultLanguage,
      repeatCount = settings.defaultRepeatCount,
      bellRingsBeforeVoice = 1, // Default: ring bell once before voice
      delayBetweenToneAndVoice = 1500,
      delayBetweenRepeats = 3000,
      useHighQualityVoice = true,
      customAudioId
    } = options

    console.log(`[BellSystem] Playing bell sequence: ${bellName}`)
    console.log(`[BellSystem] Bell type: ${bellType}, Voice: ${voice}`)
    console.log(`[BellSystem] Bell rings before voice: ${bellRingsBeforeVoice}`)
    console.log(`[BellSystem] Message: "${message}"`)
    console.log(`[BellSystem] Custom Audio ID: ${customAudioId || 'none'}`)

    let allSuccessful = true

    for (let i = 0; i < repeatCount; i++) {
      console.log(`[BellSystem] Sequence ${i + 1} of ${repeatCount}`)

      try {
        // 1. Ring the bell multiple times BEFORE voice
        for (let ringNum = 0; ringNum < bellRingsBeforeVoice; ringNum++) {
          console.log(`[BellSystem] Bell ring ${ringNum + 1} of ${bellRingsBeforeVoice}`)
          playBellSound(bellType)
          
          // Wait between bell rings (shorter delay)
          if (ringNum < bellRingsBeforeVoice - 1) {
            await new Promise(resolve => setTimeout(resolve, 800)) // 800ms between rings
          }
        }

        // 2. Wait before voice announcement
        await new Promise(resolve => setTimeout(resolve, delayBetweenToneAndVoice))

        // 3. Play voice announcement (custom audio or TTS)
        console.log(`[BellSystem] Playing voice: "${message}"`)
        let voiceSuccess: boolean = false

        // Check for custom audio first
        if (customAudioId) {
          console.log(`[BellSystem] Using custom audio: ${customAudioId}`)
          voiceSuccess = await playStoredAudio(customAudioId)
          if (voiceSuccess) {
            console.log(`[BellSystem] ✅ Custom audio played successfully`)
          } else {
            console.warn(`[BellSystem] ❌ Custom audio failed, falling back to TTS`)
          }
        }

        // Fall back to TTS if no custom audio or if it failed
        if (!customAudioId || !voiceSuccess) {
          console.log(`[BellSystem] Using voice: ${voice} (AI: ${this.isAIVoice(voice)}, High Quality: ${useHighQualityVoice})`)
          
          if (useHighQualityVoice && this.isAIVoice(voice)) {
            console.log(`[BellSystem] Playing with HIGH QUALITY AI voice: ${voice}`)
            voiceSuccess = await playCustomAnnouncement(message, {
              voice,
              language,
              withTone: false // We already played the tone
            })
          } else {
            console.log(`[BellSystem] Playing with STANDARD TTS voice: ${voice}`)
            voiceSuccess = await playToneAndAnnouncement(message, {
              tone: "bell", // Dummy tone, we already played the real one
              voice,
              language,
              repeatCount: 1
            })
          }
          
          console.log(`[BellSystem] Voice playback result: ${voiceSuccess ? 'SUCCESS' : 'FAILED'}`)
        }

        if (!voiceSuccess) {
          // Final fallback to built-in tone when custom audio and TTS both fail
          console.log('[BellSystem] Falling back to built-in bell tone')
          try {
            playBellSound("bell")
            voiceSuccess = true
          } catch (e) {
            console.error('[BellSystem] Built-in tone failed', e)
            allSuccessful = false
            console.error(`[BellSystem] Voice failed for sequence ${i + 1}`)
          }
        }

        // 4. Wait between repetitions
        if (i < repeatCount - 1) {
          console.log(`[BellSystem] Waiting ${delayBetweenRepeats}ms before next sequence...`)
          await new Promise(resolve => setTimeout(resolve, delayBetweenRepeats))
        }
      } catch (error) {
        allSuccessful = false
        console.error(`[BellSystem] Error in sequence ${i + 1}:`, error)
      }
    }

    console.log(`[BellSystem] Bell sequence completed. Success: ${allSuccessful}`)
    return allSuccessful
  }

  // School-specific bell functions
  static async playClassBell(className: string, options?: BellSystemOptions): Promise<boolean> {
    const message = `Attention all students, it is time for ${className}. Please proceed to your classrooms.`
    return this.playBellSequence(className, message, {
      bellType: "bell",
      delayBetweenToneAndVoice: 2000,
      ...options
    })
  }

  static async playBreakBell(breakName: string, options?: BellSystemOptions): Promise<boolean> {
    const message = `Attention all students, it is time for ${breakName}. You may now leave your classrooms.`
    return this.playBellSequence(breakName, message, {
      bellType: "chime",
      delayBetweenToneAndVoice: 1000,
      ...options
    })
  }

  static async playLunchBell(options?: BellSystemOptions): Promise<boolean> {
    const message = "Attention all students, it is time for lunch. Please proceed to the dining hall."
    return this.playBellSequence("Lunch Time", message, {
      bellType: "chime",
      delayBetweenToneAndVoice: 1200,
      ...options
    })
  }

  static async playAssemblyBell(assemblyName: string, options?: BellSystemOptions): Promise<boolean> {
    const message = `Attention all students and staff, it is time for ${assemblyName}. Please proceed to the assembly hall.`
    return this.playBellSequence(assemblyName, message, {
      bellType: "announcement",
      delayBetweenToneAndVoice: 800,
      ...options
    })
  }

  static async playDismissalBell(options?: BellSystemOptions): Promise<boolean> {
    const message = "Attention all students, it is time for school dismissal. Please collect your belongings and proceed to the exit."
    return this.playBellSequence("School Dismissal", message, {
      bellType: "dismissal-bell",
      delayBetweenToneAndVoice: 2000,
      ...options
    })
  }

  static async playEmergencyBell(emergency: string, instructions: string, options?: BellSystemOptions): Promise<boolean> {
    const message = `Emergency alert. ${emergency}. ${instructions}. All students and staff must follow emergency procedures immediately.`
    return this.playBellSequence("Emergency", message, {
      bellType: "emergency-alert",
      delayBetweenToneAndVoice: 500,
      repeatCount: 3,
      delayBetweenRepeats: 2000,
      voice: "openai-onyx", // Authoritative voice for emergencies
      ...options
    })
  }

  static async playPrayerBell(prayerName: string, options?: BellSystemOptions): Promise<boolean> {
    const message = `It is time for ${prayerName} prayer. Please proceed to the prayer area.`
    return this.playBellSequence(prayerName, message, {
      bellType: "prayer-bell",
      delayBetweenToneAndVoice: 1500,
      voice: "azan-islamic",
      language: "arabic",
      ...options // This will include customAudioId if provided
    })
  }

  // Custom bell with any message
  static async playCustomBell(
    bellName: string,
    message: string,
    bellType: BellType,
    options?: BellSystemOptions
  ): Promise<boolean> {
    return this.playBellSequence(bellName, message, {
      bellType,
      ...options
    })
  }

  // Test all bell types
  static async testAllBellTypes(): Promise<void> {
    console.log("🔔 Testing All Bell Types")
    console.log("=".repeat(50))

    for (const [bellType, description] of Object.entries(this.BELL_TYPES)) {
      console.log(`\n🔊 Testing: ${bellType}`)
      console.log(`   Description: ${description}`)

      await this.playBellSequence(
        `Test ${bellType}`,
        `This is a test of the ${bellType} with voice announcement.`,
        {
          bellType: bellType as BellType,
          repeatCount: 1,
          useHighQualityVoice: true,
          voice: "openai-nova"
        }
      )

      // Wait between tests
      await new Promise(resolve => setTimeout(resolve, 4000))
    }

    console.log("\n✅ All bell types tested!")
  }

  // Test all premium voices
  static async testAllVoices(): Promise<void> {
    console.log("🎤 Testing All Premium Voices")
    console.log("=".repeat(50))

    const testMessage = "This is a test of the premium voice with bell system integration."

    for (const [voice, description] of Object.entries(this.PREMIUM_VOICES)) {
      console.log(`\n🗣️ Testing: ${voice}`)
      console.log(`   Description: ${description}`)

      await this.playBellSequence(
        `Voice Test`,
        testMessage,
        {
          bellType: "chime",
          voice: voice as VoiceType,
          repeatCount: 1,
          useHighQualityVoice: true
        }
      )

      // Wait between tests
      await new Promise(resolve => setTimeout(resolve, 4000))
    }

    console.log("\n✅ All voices tested!")
  }

  // Demonstrate a complete school day
  static async demonstrateSchoolDay(): Promise<void> {
    console.log("🏫 Complete School Day Bell Demonstration")
    console.log("=".repeat(60))

    const schoolSchedule = [
      { time: "08:00", func: () => this.playAssemblyBell("Morning Assembly") },
      { time: "08:30", func: () => this.playClassBell("First Period - Mathematics") },
      { time: "09:30", func: () => this.playBreakBell("Morning Break") },
      { time: "09:45", func: () => this.playClassBell("Second Period - English") },
      { time: "10:45", func: () => this.playClassBell("Third Period - Science") },
      { time: "11:45", func: () => this.playLunchBell() },
      { time: "12:30", func: () => this.playClassBell("Fourth Period - History") },
      { time: "13:30", func: () => this.playClassBell("Fifth Period - Art") },
      { time: "14:30", func: () => this.playDismissalBell() }
    ]

    for (const event of schoolSchedule) {
      console.log(`\n🕐 ${event.time} - Playing school bell...`)
      await event.func()

      // Wait between events (shorter for demo)
      await new Promise(resolve => setTimeout(resolve, 6000))
    }

    console.log("\n✅ Complete school day demonstration finished!")
  }

  // Emergency drill demonstration
  static async demonstrateEmergencyDrills(): Promise<void> {
    console.log("🚨 Emergency Drill Demonstrations")
    console.log("=".repeat(50))

    const emergencies = [
      {
        name: "Fire Drill",
        instructions: "Please exit the building using the nearest emergency exit and proceed to the assembly point"
      },
      {
        name: "Earthquake Drill",
        instructions: "Drop, cover, and hold on. Stay under your desks until the shaking stops"
      },
      {
        name: "Lockdown Drill",
        instructions: "Please remain in your classrooms and follow lockdown procedures"
      },
      {
        name: "Severe Weather Alert",
        instructions: "Please move to the designated safe areas immediately"
      }
    ]

    for (const emergency of emergencies) {
      console.log(`\n🚨 ${emergency.name}`)
      await this.playEmergencyBell(emergency.name, emergency.instructions, {
        repeatCount: 2 // Emergency drills repeat twice
      })

      // Wait between drills
      await new Promise(resolve => setTimeout(resolve, 8000))
    }

    console.log("\n✅ Emergency drill demonstrations completed!")
  }

  // Get system status
  static getSystemStatus(): {
    bellTypes: number
    voices: number
    features: string[]
  } {
    return {
      bellTypes: Object.keys(this.BELL_TYPES).length,
      voices: Object.keys(this.PREMIUM_VOICES).length,
      features: [
        "Tone + Voice Combination",
        "High-Quality AI Voices",
        "Multiple Bell Types",
        "School Schedule Integration",
        "Emergency Alert System",
        "Prayer Time Support",
        "Custom Messages",
        "Repeat Functionality"
      ]
    }
  }

  // Helper function to check if voice is AI
  static isAIVoice(voice: VoiceType): boolean {
    return voice.startsWith("openai-") ||
      voice.startsWith("elevenlabs-") ||
      voice.startsWith("azure-")
  }

  // Show all available options
  static showAllOptions(): void {
    console.log("🔔 COMPLETE BELL SYSTEM OPTIONS")
    console.log("=".repeat(60))

    console.log("\n🔊 AVAILABLE BELL TYPES:")
    Object.entries(this.BELL_TYPES).forEach(([type, desc], index) => {
      console.log(`${index + 1}. ${type} - ${desc}`)
    })

    console.log("\n🎤 AVAILABLE PREMIUM VOICES:")
    Object.entries(this.PREMIUM_VOICES).forEach(([voice, desc], index) => {
      console.log(`${index + 1}. ${voice} - ${desc}`)
    })

    console.log("\n📚 SCHOOL BELL FUNCTIONS:")
    console.log("• playClassBell(className)")
    console.log("• playBreakBell(breakName)")
    console.log("• playLunchBell()")
    console.log("• playAssemblyBell(assemblyName)")
    console.log("• playDismissalBell()")
    console.log("• playEmergencyBell(emergency, instructions)")
    console.log("• playPrayerBell(prayerName)")
    console.log("• playCustomBell(name, message, bellType)")

    console.log("\n🧪 TEST FUNCTIONS:")
    console.log("• testAllBellTypes()")
    console.log("• testAllVoices()")
    console.log("• demonstrateSchoolDay()")
    console.log("• demonstrateEmergencyDrills()")

    const status = this.getSystemStatus()
    console.log(`\n📊 SYSTEM STATUS:`)
    console.log(`• ${status.bellTypes} bell types available`)
    console.log(`• ${status.voices} premium voices available`)
    console.log(`• ${status.features.length} features supported`)

    console.log("=".repeat(60))
  }
}

// Export convenience functions
export const playClassBell = (className: string, options?: BellSystemOptions) =>
  CompleteBellSystem.playClassBell(className, options)

export const playBreakBell = (breakName: string, options?: BellSystemOptions) =>
  CompleteBellSystem.playBreakBell(breakName, options)

export const playLunchBell = (options?: BellSystemOptions) =>
  CompleteBellSystem.playLunchBell(options)

export const playAssemblyBell = (assemblyName: string, options?: BellSystemOptions) =>
  CompleteBellSystem.playAssemblyBell(assemblyName, options)

export const playDismissalBell = (options?: BellSystemOptions) =>
  CompleteBellSystem.playDismissalBell(options)

export const playEmergencyBell = (emergency: string, instructions: string, options?: BellSystemOptions) =>
  CompleteBellSystem.playEmergencyBell(emergency, instructions, options)

export const playPrayerBell = (prayerName: string, options?: BellSystemOptions) =>
  CompleteBellSystem.playPrayerBell(prayerName, options)

export const playCustomBell = (name: string, message: string, bellType: BellType, options?: BellSystemOptions) =>
  CompleteBellSystem.playCustomBell(name, message, bellType, options)

export const testAllBellTypes = () => CompleteBellSystem.testAllBellTypes()
export const testAllVoices = () => CompleteBellSystem.testAllVoices()
export const demonstrateSchoolDay = () => CompleteBellSystem.demonstrateSchoolDay()
export const demonstrateEmergencyDrills = () => CompleteBellSystem.demonstrateEmergencyDrills()
export const showAllBellOptions = () => CompleteBellSystem.showAllOptions()
export const getBellSystemStatus = () => CompleteBellSystem.getSystemStatus()

// Make it available globally for console testing
if (typeof window !== "undefined") {
  (window as any).CompleteBellSystem = CompleteBellSystem;
  (window as any).playClassBell = playClassBell;
  (window as any).playBreakBell = playBreakBell;
  (window as any).playLunchBell = playLunchBell;
  (window as any).playAssemblyBell = playAssemblyBell;
  (window as any).playDismissalBell = playDismissalBell;
  (window as any).playEmergencyBell = playEmergencyBell;
  (window as any).playPrayerBell = playPrayerBell;
  (window as any).playCustomBell = playCustomBell;
  (window as any).testAllBellTypes = testAllBellTypes;
  (window as any).testAllVoices = testAllVoices;
  (window as any).demonstrateSchoolDay = demonstrateSchoolDay;
  (window as any).demonstrateEmergencyDrills = demonstrateEmergencyDrills;
  (window as any).showAllBellOptions = showAllBellOptions;
  (window as any).getBellSystemStatus = getBellSystemStatus;
}