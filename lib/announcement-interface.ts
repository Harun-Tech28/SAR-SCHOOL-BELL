import { playCustomAnnouncement, playSchoolAnnouncement, HighQualityAnnouncementSystem } from "./high-quality-announcements"
import type { VoiceType } from "./store"

/**
 * Simple Interface for Making High-Quality Announcements
 * Easy-to-use functions for common announcement scenarios
 */

// Quick announcement with default high-quality voice
export const announce = async (message: string): Promise<boolean> => {
  console.log("📢 Making announcement with premium AI voice...")
  return playCustomAnnouncement(message, {
    voice: "openai-nova",
    withTone: true,
    repeatCount: 1
  })
}

// Announcement without tone (pure voice)
export const announceVoiceOnly = async (message: string): Promise<boolean> => {
  console.log("🗣️ Making voice-only announcement...")
  return playCustomAnnouncement(message, {
    voice: "openai-nova", 
    withTone: false,
    repeatCount: 1
  })
}

// Quick school announcement
export const announceSchool = async (title: string, details: string): Promise<boolean> => {
  console.log(`📚 Making school announcement: ${title}`)
  return playSchoolAnnouncement(title, details, {
    voice: "openai-nova",
    repeatCount: 1
  })
}

// Emergency announcement
export const announceEmergency = async (emergency: string, instructions: string): Promise<boolean> => {
  console.log(`🚨 Making emergency announcement: ${emergency}`)
  return playCustomAnnouncement(
    `Emergency alert. ${emergency}. ${instructions}. Please follow all safety procedures immediately.`,
    {
      voice: "openai-onyx", // Authoritative voice for emergencies
      withTone: true,
      repeatCount: 2
    }
  )
}

// Announcement with specific voice
export const announceWithVoice = async (message: string, voice: VoiceType): Promise<boolean> => {
  console.log(`🎤 Making announcement with ${voice}...`)
  return playCustomAnnouncement(message, {
    voice,
    withTone: true,
    repeatCount: 1
  })
}

// Repeated announcement
export const announceRepeated = async (message: string, times: number): Promise<boolean> => {
  console.log(`🔄 Making announcement ${times} times...`)
  return playCustomAnnouncement(message, {
    voice: "openai-nova",
    withTone: true,
    repeatCount: times
  })
}

// Show available voices
export const showVoices = (): void => {
  console.log("🎭 Available Premium Voices:")
  console.log("=" .repeat(40))
  
  const voices = HighQualityAnnouncementSystem.getAvailablePremiumVoices()
  voices.forEach((voice, index) => {
    console.log(`${index + 1}. ${voice.name} (${voice.voice})`)
    console.log(`   ${voice.description}`)
  })
  
  console.log("\nUsage examples:")
  console.log(`announceWithVoice("Your message", "openai-nova")`)
  console.log(`announceWithVoice("Your message", "openai-onyx")`)
}

// Test the announcement system
export const testAnnouncements = async (): Promise<void> => {
  console.log("🧪 Testing Announcement System")
  console.log("=" .repeat(40))
  
  // Test basic announcement
  console.log("\n1. Basic announcement...")
  await announce("This is a test of the announcement system.")
  
  await new Promise(resolve => setTimeout(resolve, 4000))
  
  // Test voice-only
  console.log("\n2. Voice-only announcement...")
  await announceVoiceOnly("This is a voice-only test without any tone.")
  
  await new Promise(resolve => setTimeout(resolve, 4000))
  
  // Test school announcement
  console.log("\n3. School announcement...")
  await announceSchool("Library Hours", "The library will be open until 6 PM today for extended study hours.")
  
  console.log("\n✅ Announcement system test completed!")
}

// Make functions available globally for console testing
if (typeof window !== "undefined") {
  (window as any).announce = announce;
  (window as any).announceVoiceOnly = announceVoiceOnly;
  (window as any).announceSchool = announceSchool;
  (window as any).announceEmergency = announceEmergency;
  (window as any).announceWithVoice = announceWithVoice;
  (window as any).announceRepeated = announceRepeated;
  (window as any).showVoices = showVoices;
  (window as any).testAnnouncements = testAnnouncements;
}