import { playHighQualityAnnouncement, playNormalAnnouncement } from "./combined-audio"
import type { VoiceType, Language } from "./store"

/**
 * High-Quality AI Voice Announcement System
 * Uses premium AI voices for crystal-clear announcements
 */

export interface HighQualityAnnouncementOptions {
  voice?: VoiceType
  language?: Language
  repeatCount?: number
  withTone?: boolean
}

export class HighQualityAnnouncementSystem {
  // Premium AI voices for different announcement types
  static readonly PREMIUM_VOICES = {
    professional: "openai-nova" as VoiceType,      // Clear, professional female
    authoritative: "openai-onyx" as VoiceType,     // Deep, authoritative male
    friendly: "openai-shimmer" as VoiceType,       // Bright, friendly female
    warm: "openai-echo" as VoiceType,              // Warm, rounded male
    storytelling: "openai-fable" as VoiceType,     // British accent, engaging
    balanced: "openai-alloy" as VoiceType,         // Neutral, balanced
    elevenlabs: "elevenlabs-rachel" as VoiceType,  // Premium ElevenLabs voice
    azure: "azure-aria" as VoiceType               // Microsoft Azure premium
  }

  // Play a custom announcement with high-quality AI voice
  static async playCustomAnnouncement(
    message: string,
    options: HighQualityAnnouncementOptions = {}
  ): Promise<boolean> {
    const {
      voice = this.PREMIUM_VOICES.professional,
      language = "english",
      repeatCount = 1,
      withTone = false
    } = options

    console.log(`[HighQuality] Playing custom announcement with ${voice}`)
    console.log(`[HighQuality] Message: "${message}"`)

    if (withTone) {
      return playNormalAnnouncement(message, {
        voice,
        language,
        repeatCount
      })
    } else {
      return playHighQualityAnnouncement(message, {
        voice,
        language,
        repeatCount
      })
    }
  }

  // Professional school announcements
  static async playSchoolAnnouncement(
    title: string,
    details: string,
    options: HighQualityAnnouncementOptions = {}
  ): Promise<boolean> {
    const message = `Attention all students and staff. ${title}. ${details}`
    
    return this.playCustomAnnouncement(message, {
      voice: this.PREMIUM_VOICES.professional,
      withTone: true,
      ...options
    })
  }

  // Emergency announcements with authoritative voice
  static async playEmergencyAnnouncement(
    emergency: string,
    instructions: string,
    options: HighQualityAnnouncementOptions = {}
  ): Promise<boolean> {
    const message = `Emergency alert. ${emergency}. ${instructions}. Please follow all safety procedures immediately.`
    
    return this.playCustomAnnouncement(message, {
      voice: this.PREMIUM_VOICES.authoritative,
      withTone: true,
      repeatCount: 2,
      ...options
    })
  }

  // Friendly announcements for positive news
  static async playFriendlyAnnouncement(
    message: string,
    options: HighQualityAnnouncementOptions = {}
  ): Promise<boolean> {
    return this.playCustomAnnouncement(message, {
      voice: this.PREMIUM_VOICES.friendly,
      withTone: true,
      ...options
    })
  }

  // Administrative announcements
  static async playAdministrativeAnnouncement(
    message: string,
    options: HighQualityAnnouncementOptions = {}
  ): Promise<boolean> {
    return this.playCustomAnnouncement(message, {
      voice: this.PREMIUM_VOICES.balanced,
      withTone: true,
      ...options
    })
  }

  // Test all premium voices
  static async testAllPremiumVoices(): Promise<void> {
    console.log("🎤 Testing All Premium AI Voices")
    console.log("=" .repeat(50))

    const testMessage = "This is a test of the high-quality announcement system."
    
    for (const [name, voice] of Object.entries(this.PREMIUM_VOICES)) {
      console.log(`\n🔊 Testing ${name} voice (${voice})`)
      
      await this.playCustomAnnouncement(testMessage, {
        voice,
        repeatCount: 1,
        withTone: false
      })
      
      // Wait between tests
      await new Promise(resolve => setTimeout(resolve, 4000))
    }
    
    console.log("\n✅ Premium voice testing completed!")
  }

  // Demonstrate different announcement types
  static async demonstrateAnnouncementTypes(): Promise<void> {
    console.log("📢 Demonstrating High-Quality Announcement Types")
    console.log("=" .repeat(60))

    const demonstrations = [
      {
        type: "School Announcement",
        func: () => this.playSchoolAnnouncement(
          "Morning Assembly",
          "All students please proceed to the main hall for our weekly assembly"
        )
      },
      {
        type: "Emergency Announcement", 
        func: () => this.playEmergencyAnnouncement(
          "Fire drill in progress",
          "Please exit the building using the nearest emergency exit"
        )
      },
      {
        type: "Friendly Announcement",
        func: () => this.playFriendlyAnnouncement(
          "Congratulations to our basketball team for winning the championship! Well done everyone!"
        )
      },
      {
        type: "Administrative Announcement",
        func: () => this.playAdministrativeAnnouncement(
          "Reminder that parent-teacher conferences are scheduled for next week. Please check your emails for appointment times."
        )
      },
      {
        type: "Custom High-Quality",
        func: () => this.playCustomAnnouncement(
          "This is a demonstration of our premium AI voice system with crystal-clear audio quality.",
          { voice: this.PREMIUM_VOICES.elevenlabs, withTone: false }
        )
      }
    ]

    for (const demo of demonstrations) {
      console.log(`\n🎯 ${demo.type}`)
      await demo.func()
      
      // Wait between demonstrations
      await new Promise(resolve => setTimeout(resolve, 6000))
    }

    console.log("\n✅ All announcement type demonstrations completed!")
  }

  // Quick test with the best voice
  static async quickHighQualityTest(): Promise<void> {
    console.log("⚡ Quick High-Quality Voice Test")
    
    await this.playCustomAnnouncement(
      "Attention all students, this is a test of our premium AI voice announcement system. The audio quality should be crystal clear and professional.",
      {
        voice: this.PREMIUM_VOICES.professional,
        withTone: true,
        repeatCount: 1
      }
    )
    
    console.log("✅ Quick test completed!")
  }

  // Get available premium voices
  static getAvailablePremiumVoices(): Array<{name: string, voice: VoiceType, description: string}> {
    return [
      { name: "Professional", voice: this.PREMIUM_VOICES.professional, description: "Clear, professional female voice" },
      { name: "Authoritative", voice: this.PREMIUM_VOICES.authoritative, description: "Deep, authoritative male voice" },
      { name: "Friendly", voice: this.PREMIUM_VOICES.friendly, description: "Bright, friendly female voice" },
      { name: "Warm", voice: this.PREMIUM_VOICES.warm, description: "Warm, rounded male voice" },
      { name: "Storytelling", voice: this.PREMIUM_VOICES.storytelling, description: "British accent, engaging voice" },
      { name: "Balanced", voice: this.PREMIUM_VOICES.balanced, description: "Neutral, balanced voice" },
      { name: "ElevenLabs Premium", voice: this.PREMIUM_VOICES.elevenlabs, description: "Premium ElevenLabs voice" },
      { name: "Azure Premium", voice: this.PREMIUM_VOICES.azure, description: "Microsoft Azure premium voice" }
    ]
  }
}

// Export convenience functions
export const playCustomAnnouncement = (message: string, options?: HighQualityAnnouncementOptions) =>
  HighQualityAnnouncementSystem.playCustomAnnouncement(message, options)

export const playSchoolAnnouncement = (title: string, details: string, options?: HighQualityAnnouncementOptions) =>
  HighQualityAnnouncementSystem.playSchoolAnnouncement(title, details, options)

export const playEmergencyAnnouncement = (emergency: string, instructions: string, options?: HighQualityAnnouncementOptions) =>
  HighQualityAnnouncementSystem.playEmergencyAnnouncement(emergency, instructions, options)

export const playFriendlyAnnouncement = (message: string, options?: HighQualityAnnouncementOptions) =>
  HighQualityAnnouncementSystem.playFriendlyAnnouncement(message, options)

export const playAdministrativeAnnouncement = (message: string, options?: HighQualityAnnouncementOptions) =>
  HighQualityAnnouncementSystem.playAdministrativeAnnouncement(message, options)

export const testAllPremiumVoices = () => HighQualityAnnouncementSystem.testAllPremiumVoices()

export const demonstrateAnnouncementTypes = () => HighQualityAnnouncementSystem.demonstrateAnnouncementTypes()

export const quickHighQualityTest = () => HighQualityAnnouncementSystem.quickHighQualityTest()

export const getAvailablePremiumVoices = () => HighQualityAnnouncementSystem.getAvailablePremiumVoices()

// Make it available globally for console testing
if (typeof window !== "undefined") {
  (window as any).HighQualityAnnouncementSystem = HighQualityAnnouncementSystem;
  (window as any).playCustomAnnouncement = playCustomAnnouncement;
  (window as any).playSchoolAnnouncement = playSchoolAnnouncement;
  (window as any).playEmergencyAnnouncement = playEmergencyAnnouncement;
  (window as any).playFriendlyAnnouncement = playFriendlyAnnouncement;
  (window as any).playAdministrativeAnnouncement = playAdministrativeAnnouncement;
  (window as any).testAllPremiumVoices = testAllPremiumVoices;
  (window as any).demonstrateAnnouncementTypes = demonstrateAnnouncementTypes;
  (window as any).quickHighQualityTest = quickHighQualityTest;
  (window as any).getAvailablePremiumVoices = getAvailablePremiumVoices;
}