import { 
  playCustomAnnouncement, 
  playSchoolAnnouncement,
  playEmergencyAnnouncement,
  playFriendlyAnnouncement,
  playAdministrativeAnnouncement,
  HighQualityAnnouncementSystem
} from "./high-quality-announcements"

/**
 * Test functions for High-Quality AI Voice Announcements
 */

export const testHighQualityBasics = async () => {
  console.log("🎤 Testing High-Quality AI Voice Announcements")
  console.log("=" .repeat(50))
  
  // Test 1: Basic high-quality announcement (no tone)
  console.log("\n1. Testing pure AI voice (no tone)...")
  await playCustomAnnouncement(
    "This is a test of our high-quality AI voice system. The audio should be crystal clear and professional.",
    { 
      voice: "openai-nova",
      withTone: false,
      repeatCount: 1
    }
  )
  
  await new Promise(resolve => setTimeout(resolve, 5000))
  
  // Test 2: High-quality announcement with tone
  console.log("\n2. Testing AI voice with announcement tone...")
  await playCustomAnnouncement(
    "Attention all students, this announcement demonstrates our premium AI voice with an attention tone.",
    {
      voice: "openai-nova", 
      withTone: true,
      repeatCount: 1
    }
  )
  
  await new Promise(resolve => setTimeout(resolve, 5000))
  
  // Test 3: Different premium voice
  console.log("\n3. Testing different premium voice (Authoritative)...")
  await playCustomAnnouncement(
    "This is the authoritative voice option, perfect for important announcements and emergency situations.",
    {
      voice: "openai-onyx",
      withTone: true,
      repeatCount: 1
    }
  )
  
  console.log("\n✅ High-quality basics test completed!")
}

export const testAnnouncementCategories = async () => {
  console.log("📢 Testing Different Announcement Categories")
  console.log("=" .repeat(50))
  
  // Test school announcement
  console.log("\n📚 Testing School Announcement...")
  await playSchoolAnnouncement(
    "Library Closure",
    "The library will be closed tomorrow for maintenance. Please plan accordingly."
  )
  
  await new Promise(resolve => setTimeout(resolve, 6000))
  
  // Test friendly announcement
  console.log("\n😊 Testing Friendly Announcement...")
  await playFriendlyAnnouncement(
    "Great news everyone! Our school has been selected for the excellence award. Congratulations to all students and staff!"
  )
  
  await new Promise(resolve => setTimeout(resolve, 6000))
  
  // Test administrative announcement
  console.log("\n📋 Testing Administrative Announcement...")
  await playAdministrativeAnnouncement(
    "Reminder that all permission slips for the field trip must be submitted by Friday. Please see the main office if you have any questions."
  )
  
  await new Promise(resolve => setTimeout(resolve, 6000))
  
  // Test emergency announcement
  console.log("\n🚨 Testing Emergency Announcement...")
  await playEmergencyAnnouncement(
    "Severe weather warning",
    "All students and staff should move to the designated safe areas immediately"
  )
  
  console.log("\n✅ Announcement categories test completed!")
}

export const testPremiumVoiceComparison = async () => {
  console.log("🎭 Testing Premium Voice Comparison")
  console.log("=" .repeat(50))
  
  const testMessage = "This is a comparison test of our premium AI voices. Each voice has its own unique character and tone."
  
  const voiceTests = [
    { name: "Professional (Nova)", voice: "openai-nova" as const, description: "Clear, professional female" },
    { name: "Authoritative (Onyx)", voice: "openai-onyx" as const, description: "Deep, authoritative male" },
    { name: "Friendly (Shimmer)", voice: "openai-shimmer" as const, description: "Bright, friendly female" },
    { name: "Warm (Echo)", voice: "openai-echo" as const, description: "Warm, rounded male" },
    { name: "Storytelling (Fable)", voice: "openai-fable" as const, description: "British accent, engaging" }
  ]
  
  for (const test of voiceTests) {
    console.log(`\n🎤 Testing ${test.name}`)
    console.log(`   Description: ${test.description}`)
    
    await playCustomAnnouncement(testMessage, {
      voice: test.voice,
      withTone: false,
      repeatCount: 1
    })
    
    // Wait between voice tests
    await new Promise(resolve => setTimeout(resolve, 5000))
  }
  
  console.log("\n✅ Premium voice comparison completed!")
}

export const testRealWorldScenarios = async () => {
  console.log("🏫 Testing Real-World School Scenarios")
  console.log("=" .repeat(50))
  
  const scenarios = [
    {
      name: "Morning Announcement",
      func: () => playSchoolAnnouncement(
        "Good morning everyone",
        "Today is Monday, December 2nd. Please remember that the school photo day is this Wednesday. All students should wear their formal uniforms."
      )
    },
    {
      name: "Weather Alert",
      func: () => playEmergencyAnnouncement(
        "Severe weather approaching",
        "All outdoor activities are cancelled. Students should remain indoors until further notice"
      )
    },
    {
      name: "Achievement Celebration",
      func: () => playFriendlyAnnouncement(
        "Congratulations to Sarah Johnson from Grade 10 for winning first place in the regional science fair! The entire school is proud of your achievement!"
      )
    },
    {
      name: "Schedule Change",
      func: () => playAdministrativeAnnouncement(
        "Due to a special assembly, all afternoon classes will be shortened by 10 minutes today. Please check with your teachers for any updates to assignments."
      )
    },
    {
      name: "Custom Professional",
      func: () => playCustomAnnouncement(
        "Attention students and parents. The annual school fundraiser begins next week. Information packets have been sent home with all students. Thank you for your continued support.",
        { voice: "openai-nova", withTone: true }
      )
    }
  ]
  
  for (const scenario of scenarios) {
    console.log(`\n📢 ${scenario.name}`)
    await scenario.func()
    
    // Wait between scenarios
    await new Promise(resolve => setTimeout(resolve, 8000))
  }
  
  console.log("\n✅ Real-world scenarios test completed!")
}

export const quickPremiumDemo = async () => {
  console.log("⚡ Quick Premium AI Voice Demo")
  console.log("🎤 Using OpenAI Nova (Professional Female Voice)")
  
  await playCustomAnnouncement(
    "Welcome to our premium AI voice announcement system. This demonstration showcases crystal-clear, professional-quality audio that's perfect for school announcements.",
    {
      voice: "openai-nova",
      withTone: true,
      repeatCount: 1
    }
  )
  
  console.log("✅ Quick demo completed!")
}

// Make functions available globally for console testing
if (typeof window !== "undefined") {
  (window as any).testHighQualityBasics = testHighQualityBasics;
  (window as any).testAnnouncementCategories = testAnnouncementCategories;
  (window as any).testPremiumVoiceComparison = testPremiumVoiceComparison;
  (window as any).testRealWorldScenarios = testRealWorldScenarios;
  (window as any).quickPremiumDemo = quickPremiumDemo;
}