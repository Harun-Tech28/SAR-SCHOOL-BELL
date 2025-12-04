import { 
  announce, 
  announceVoiceOnly, 
  announceSchool, 
  announceEmergency,
  announceWithVoice,
  showVoices 
} from "./announcement-interface"

/**
 * Comprehensive Demonstration of High-Quality AI Voice Announcement System
 */

export const demoHighQualitySystem = async () => {
  console.log("🎤 HIGH-QUALITY AI VOICE ANNOUNCEMENT SYSTEM DEMO")
  console.log("=" .repeat(60))
  console.log("🌟 Features:")
  console.log("   ✅ Premium AI voices (OpenAI, ElevenLabs, Azure)")
  console.log("   ✅ Crystal-clear audio quality")
  console.log("   ✅ Professional announcements")
  console.log("   ✅ Multiple voice personalities")
  console.log("   ✅ Tone + Voice or Voice-only options")
  console.log("=" .repeat(60))

  // Demo 1: Basic high-quality announcement
  console.log("\n🔊 DEMO 1: Basic High-Quality Announcement")
  console.log("   Format: Tone + Premium AI Voice")
  await announce("Welcome to our high-quality AI voice announcement system. This demonstrates crystal-clear, professional audio quality.")
  
  await new Promise(resolve => setTimeout(resolve, 6000))

  // Demo 2: Voice-only announcement
  console.log("\n🗣️ DEMO 2: Pure AI Voice (No Tone)")
  console.log("   Format: Premium AI Voice Only")
  await announceVoiceOnly("This is a pure AI voice demonstration without any tone. Notice the exceptional clarity and natural speech patterns.")
  
  await new Promise(resolve => setTimeout(resolve, 5000))

  // Demo 3: School announcement
  console.log("\n📚 DEMO 3: Professional School Announcement")
  console.log("   Format: Structured School Message")
  await announceSchool(
    "Important Schedule Update", 
    "Due to the weather conditions, all afternoon outdoor activities have been moved indoors. Please check with your teachers for room assignments."
  )
  
  await new Promise(resolve => setTimeout(resolve, 7000))

  // Demo 4: Emergency announcement
  console.log("\n🚨 DEMO 4: Emergency Announcement")
  console.log("   Format: Authoritative Voice + Urgent Tone")
  await announceEmergency(
    "Severe weather warning in effect",
    "All students and staff should move to the designated safe areas in the main building immediately"
  )
  
  await new Promise(resolve => setTimeout(resolve, 7000))

  // Demo 5: Different voice personalities
  console.log("\n🎭 DEMO 5: Different Voice Personalities")
  
  const voiceTests = [
    { voice: "openai-nova" as const, name: "Professional Female", message: "This is the professional female voice, perfect for general announcements." },
    { voice: "openai-onyx" as const, name: "Authoritative Male", message: "This is the authoritative male voice, ideal for important announcements." },
    { voice: "openai-shimmer" as const, name: "Friendly Female", message: "This is the friendly female voice, great for positive news and celebrations." }
  ]

  for (const test of voiceTests) {
    console.log(`\n   🎤 ${test.name} (${test.voice})`)
    await announceWithVoice(test.message, test.voice)
    await new Promise(resolve => setTimeout(resolve, 5000))
  }

  console.log("\n✅ HIGH-QUALITY SYSTEM DEMO COMPLETED!")
  console.log("🎯 All announcements used premium AI voices for maximum clarity")
}

export const showSystemCapabilities = () => {
  console.log("🎤 HIGH-QUALITY AI VOICE SYSTEM CAPABILITIES")
  console.log("=" .repeat(60))
  
  console.log("\n📢 ANNOUNCEMENT TYPES:")
  console.log("   • Basic Announcements (tone + voice)")
  console.log("   • Voice-Only Announcements (no tone)")
  console.log("   • School Announcements (structured)")
  console.log("   • Emergency Announcements (urgent)")
  console.log("   • Custom Announcements (any message)")
  
  console.log("\n🎭 PREMIUM VOICES AVAILABLE:")
  console.log("   • OpenAI Nova (Professional Female)")
  console.log("   • OpenAI Onyx (Authoritative Male)")
  console.log("   • OpenAI Shimmer (Friendly Female)")
  console.log("   • OpenAI Echo (Warm Male)")
  console.log("   • OpenAI Fable (British Storytelling)")
  console.log("   • OpenAI Alloy (Balanced Neutral)")
  console.log("   • ElevenLabs Rachel (Premium)")
  console.log("   • Azure Aria (Microsoft Premium)")
  
  console.log("\n⚡ QUICK COMMANDS:")
  console.log("   announce('Your message')                    - Basic announcement")
  console.log("   announceVoiceOnly('Your message')          - Voice only")
  console.log("   announceSchool('Title', 'Details')         - School format")
  console.log("   announceEmergency('Alert', 'Instructions') - Emergency")
  console.log("   announceWithVoice('Message', 'voice-name') - Specific voice")
  console.log("   showVoices()                               - List all voices")
  
  console.log("\n🧪 TEST COMMANDS:")
  console.log("   testAnnouncements()           - Test basic functionality")
  console.log("   quickPremiumDemo()            - Quick demo")
  console.log("   testHighQualityBasics()       - Comprehensive test")
  console.log("   demoHighQualitySystem()       - Full system demo")
  
  console.log("=" .repeat(60))
}

export const quickStartGuide = () => {
  console.log("🚀 QUICK START GUIDE - High-Quality Announcements")
  console.log("=" .repeat(50))
  
  console.log("\n1️⃣ BASIC ANNOUNCEMENT:")
  console.log("   announce('Hello everyone, this is a test announcement')")
  
  console.log("\n2️⃣ VOICE-ONLY (NO TONE):")
  console.log("   announceVoiceOnly('This is just the voice without any tone')")
  
  console.log("\n3️⃣ SCHOOL ANNOUNCEMENT:")
  console.log("   announceSchool('Library Closure', 'The library will be closed tomorrow')")
  
  console.log("\n4️⃣ EMERGENCY ANNOUNCEMENT:")
  console.log("   announceEmergency('Fire drill', 'Please exit using nearest emergency exit')")
  
  console.log("\n5️⃣ SPECIFIC VOICE:")
  console.log("   announceWithVoice('Your message', 'openai-onyx')")
  
  console.log("\n6️⃣ SEE ALL VOICES:")
  console.log("   showVoices()")
  
  console.log("\n7️⃣ TEST THE SYSTEM:")
  console.log("   quickPremiumDemo()")
  
  console.log("=" .repeat(50))
  console.log("🎯 All functions use premium AI voices for crystal-clear quality!")
}

// Make functions available globally for console testing
if (typeof window !== "undefined") {
  (window as any).demoHighQualitySystem = demoHighQualitySystem;
  (window as any).showSystemCapabilities = showSystemCapabilities;
  (window as any).quickStartGuide = quickStartGuide;
}