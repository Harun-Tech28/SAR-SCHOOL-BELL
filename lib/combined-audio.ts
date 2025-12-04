import { playBellSound } from "./bell-sounds"
import { playAnnouncement } from "./voice-utils"
import { useStore } from "./store"
import type { BellType } from "./bell-sounds"
import type { VoiceType, Language } from "./store"

export interface CombinedAudioOptions {
  tone?: BellType
  voice?: VoiceType
  language?: Language
  repeatCount?: number
  delayBetweenToneAndVoice?: number
  delayBetweenRepeats?: number
}

export class CombinedAudioPlayer {
  static async playToneAndAnnouncement(
    taskName: string,
    options: CombinedAudioOptions = {}
  ): Promise<boolean> {
    const settings = useStore.getState().settings
    const {
      tone = "bell",
      voice = settings.defaultVoice,
      language = settings.defaultLanguage,
      repeatCount = settings.defaultRepeatCount,
      delayBetweenToneAndVoice = 1500,
      delayBetweenRepeats = 3000
    } = options

    console.log(`[CombinedAudio] Playing ${repeatCount} time(s): ${tone} + "${taskName}"`)

    let allSuccessful = true

    for (let i = 0; i < repeatCount; i++) {
      console.log(`[CombinedAudio] Repetition ${i + 1} of ${repeatCount}`)
      
      try {
        // 1. Play the tone first
        console.log(`[CombinedAudio] Playing ${tone} tone...`)
        playBellSound(tone)
        
        // 2. Wait for tone to finish
        await new Promise(resolve => setTimeout(resolve, delayBetweenToneAndVoice))
        
        // 3. Play voice announcement
        console.log(`[CombinedAudio] Playing voice announcement: "${taskName}"`)
        const voiceSuccess = await playAnnouncement(taskName, voice, language, 1) // Single announcement per repetition
        
        if (!voiceSuccess) {
          allSuccessful = false
          console.error(`[CombinedAudio] Voice announcement failed for repetition ${i + 1}`)
        }
        
        // 4. Wait between repetitions (except for the last one)
        if (i < repeatCount - 1) {
          console.log(`[CombinedAudio] Waiting ${delayBetweenRepeats}ms before next repetition...`)
          await new Promise(resolve => setTimeout(resolve, delayBetweenRepeats))
        }
      } catch (error) {
        allSuccessful = false
        console.error(`[CombinedAudio] Error in repetition ${i + 1}:`, error)
      }
    }

    console.log(`[CombinedAudio] Completed ${repeatCount} repetitions. Success: ${allSuccessful}`)
    return allSuccessful
  }

  // Specific functions for different task types
  static async playClassBell(taskName: string, options?: Partial<CombinedAudioOptions>): Promise<boolean> {
    return this.playToneAndAnnouncement(taskName, {
      tone: "bell",
      delayBetweenToneAndVoice: 2000, // Longer delay for bell
      ...options
    })
  }

  static async playBreakChime(taskName: string, options?: Partial<CombinedAudioOptions>): Promise<boolean> {
    return this.playToneAndAnnouncement(taskName, {
      tone: "chime",
      delayBetweenToneAndVoice: 1000, // Shorter delay for chime
      ...options
    })
  }

  static async playAnnouncement(taskName: string, options?: Partial<CombinedAudioOptions>): Promise<boolean> {
    return this.playToneAndAnnouncement(taskName, {
      tone: "announcement",
      delayBetweenToneAndVoice: 800, // Quick notification sound
      ...options
    })
  }

  static async playEmergencyAlert(taskName: string, options?: Partial<CombinedAudioOptions>): Promise<boolean> {
    return this.playToneAndAnnouncement(taskName, {
      tone: "emergency-alert",
      delayBetweenToneAndVoice: 500, // Immediate voice after emergency tone
      repeatCount: 3, // Emergency alerts repeat more
      delayBetweenRepeats: 2000, // Shorter delay for urgency
      ...options
    })
  }

  // High-quality AI voice announcement (no tone, just premium voice)
  static async playHighQualityAnnouncement(
    message: string, 
    options?: Partial<CombinedAudioOptions>
  ): Promise<boolean> {
    const settings = useStore.getState().settings
    const {
      voice = "openai-nova", // Default to high-quality AI voice
      language = settings.defaultLanguage,
      repeatCount = settings.defaultRepeatCount
    } = options || {}

    console.log(`[CombinedAudio] Playing high-quality announcement: "${message}"`)

    let allSuccessful = true

    for (let i = 0; i < repeatCount; i++) {
      console.log(`[CombinedAudio] High-quality announcement repetition ${i + 1} of ${repeatCount}`)
      
      try {
        const voiceSuccess = await playAnnouncement(message, voice, language, 1)
        
        if (!voiceSuccess) {
          allSuccessful = false
          console.error(`[CombinedAudio] High-quality announcement failed for repetition ${i + 1}`)
        }
        
        // Wait between repetitions (except for the last one)
        if (i < repeatCount - 1) {
          await new Promise(resolve => setTimeout(resolve, 3000))
        }
      } catch (error) {
        allSuccessful = false
        console.error(`[CombinedAudio] Error in high-quality announcement repetition ${i + 1}:`, error)
      }
    }

    console.log(`[CombinedAudio] High-quality announcement completed. Success: ${allSuccessful}`)
    return allSuccessful
  }

  // Normal announcement with tone + high-quality AI voice
  static async playNormalAnnouncement(
    message: string,
    options?: Partial<CombinedAudioOptions>
  ): Promise<boolean> {
    return this.playToneAndAnnouncement(message, {
      tone: "announcement",
      voice: "openai-nova", // High-quality AI voice
      delayBetweenToneAndVoice: 800,
      ...options
    })
  }

  // Smart task-based audio player
  static async playTaskAudio(
    taskName: string,
    taskType: string,
    bellType?: BellType,
    options?: Partial<CombinedAudioOptions>
  ): Promise<boolean> {
    console.log(`[CombinedAudio] Playing task audio for: "${taskName}" (Type: ${taskType}, Bell: ${bellType})`)
    
    // Determine appropriate tone and settings based on task type and bell type
    let tone: BellType = bellType || "bell"
    let delayBetweenToneAndVoice = 1500
    let voiceMessage = taskName

    // Customize based on task type
    switch (taskType.toLowerCase()) {
      case "class":
      case "lesson":
        tone = bellType || "bell"
        delayBetweenToneAndVoice = 2000
        voiceMessage = `Attention all students, it is time for ${taskName}. Please proceed to your classrooms.`
        break
      case "break":
      case "recess":
        tone = bellType || "chime"
        delayBetweenToneAndVoice = 1000
        voiceMessage = `Attention all students, it is time for ${taskName}. You may now leave your classrooms.`
        break
      case "assembly":
      case "meeting":
        tone = bellType || "announcement"
        delayBetweenToneAndVoice = 800
        voiceMessage = `Attention all students and staff, it is time for ${taskName}. Please proceed to the assembly hall.`
        break
      case "lunch":
      case "meal":
        tone = bellType || "chime"
        delayBetweenToneAndVoice = 1200
        voiceMessage = `Attention all students, it is time for ${taskName}. Please proceed to the dining hall.`
        break
      case "dismissal":
      case "end":
        tone = bellType || "dismissal-bell"
        delayBetweenToneAndVoice = 2000
        voiceMessage = `Attention all students, it is time for ${taskName}. Please collect your belongings and proceed to the exit.`
        break
      case "emergency":
      case "drill":
        tone = bellType || "emergency-alert"
        delayBetweenToneAndVoice = 500
        voiceMessage = `Emergency alert. ${taskName}. All students and staff must follow emergency procedures immediately.`
        break
      default:
        // Use provided bell type or default
        tone = bellType || "bell"
        voiceMessage = `Attention all students, it is time for ${taskName}.`
    }

    return this.playToneAndAnnouncement(voiceMessage, {
      tone,
      delayBetweenToneAndVoice,
      ...options
    })
  }

  // Get appropriate tone for task type
  static getToneForTaskType(taskType: string): BellType {
    switch (taskType.toLowerCase()) {
      case "class":
      case "lesson":
      case "dismissal":
        return "bell"
      case "break":
      case "recess":
      case "lunch":
        return "chime"
      case "assembly":
      case "meeting":
      case "announcement":
        return "announcement"
      case "emergency":
      case "drill":
        return "emergency-alert"
      default:
        return "bell"
    }
  }

  // Generate appropriate voice message for task
  static generateVoiceMessage(taskName: string, taskType: string): string {
    const baseMessages: Record<string, string> = {
      class: `Attention all students, it is time for ${taskName}. Please proceed to your classrooms.`,
      lesson: `Attention all students, it is time for ${taskName}. Please proceed to your classrooms.`,
      break: `Attention all students, it is time for ${taskName}. You may now leave your classrooms.`,
      recess: `Attention all students, it is time for ${taskName}. You may now leave your classrooms.`,
      lunch: `Attention all students, it is time for ${taskName}. Please proceed to the dining hall.`,
      assembly: `Attention all students and staff, it is time for ${taskName}. Please proceed to the assembly hall.`,
      meeting: `Attention all students and staff, it is time for ${taskName}. Please proceed to the designated area.`,
      announcement: `Attention all students and staff, it is time for ${taskName}. Please listen carefully.`,
      dismissal: `Attention all students, it is time for ${taskName}. Please collect your belongings and proceed to the exit.`,
      end: `Attention all students, it is time for ${taskName}. Please collect your belongings and proceed to the exit.`,
      emergency: `Emergency alert. ${taskName}. All students and staff must follow emergency procedures immediately.`,
      drill: `Emergency drill. ${taskName}. All students and staff must follow drill procedures immediately.`
    }

    return baseMessages[taskType.toLowerCase()] || `Attention all students, it is time for ${taskName}.`
  }
}

// Export convenience functions
export const playToneAndAnnouncement = (taskName: string, options?: CombinedAudioOptions) =>
  CombinedAudioPlayer.playToneAndAnnouncement(taskName, options)

export const playClassBell = (taskName: string, options?: Partial<CombinedAudioOptions>) =>
  CombinedAudioPlayer.playClassBell(taskName, options)

export const playBreakChime = (taskName: string, options?: Partial<CombinedAudioOptions>) =>
  CombinedAudioPlayer.playBreakChime(taskName, options)

export const playAnnouncementTone = (taskName: string, options?: Partial<CombinedAudioOptions>) =>
  CombinedAudioPlayer.playAnnouncement(taskName, options)

export const playEmergencyAlert = (taskName: string, options?: Partial<CombinedAudioOptions>) =>
  CombinedAudioPlayer.playEmergencyAlert(taskName, options)

export const playHighQualityAnnouncement = (message: string, options?: Partial<CombinedAudioOptions>) =>
  CombinedAudioPlayer.playHighQualityAnnouncement(message, options)

export const playNormalAnnouncement = (message: string, options?: Partial<CombinedAudioOptions>) =>
  CombinedAudioPlayer.playNormalAnnouncement(message, options)

export const playTaskAudio = (taskName: string, taskType: string, bellType?: BellType, options?: Partial<CombinedAudioOptions>) =>
  CombinedAudioPlayer.playTaskAudio(taskName, taskType, bellType, options)

export const getToneForTaskType = (taskType: string) => CombinedAudioPlayer.getToneForTaskType(taskType)

export const generateVoiceMessage = (taskName: string, taskType: string) => 
  CombinedAudioPlayer.generateVoiceMessage(taskName, taskType)

// Make it available globally for console testing
if (typeof window !== "undefined") {
  (window as any).CombinedAudioPlayer = CombinedAudioPlayer;
  (window as any).playToneAndAnnouncement = playToneAndAnnouncement;
  (window as any).playTaskAudio = playTaskAudio;
  (window as any).playHighQualityAnnouncement = playHighQualityAnnouncement;
  (window as any).playNormalAnnouncement = playNormalAnnouncement;
}