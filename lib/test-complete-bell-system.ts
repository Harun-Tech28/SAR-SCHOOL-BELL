import { 
  CompleteBellSystem,
  playClassBell,
  playBreakBell,
  playLunchBell,
  playAssemblyBell,
  playDismissalBell,
  playEmergencyBell,
  playPrayerBell,
  playCustomBell
} from "./complete-bell-system"

/**
 * Comprehensive Test Suite for Complete Bell System
 */

export const testCompleteBellSystem = async () => {
  console.log("🔔 COMPLETE BELL SYSTEM TEST")
  console.log("=" .repeat(50))
  console.log("Testing: Tone + Voice Combination")
  console.log("=" .repeat(50))

  // Test 1: Class Bell
  console.log("\n📚 Test 1: Class Bell")
  console.log("Expected: School bell tone → Voice announcement")
  await playClassBell("Mathematics Period", {
    voice: "openai-nova",
    repeatCount: 1
  })
  
  await new Promise(resolve => setTimeout(resolve, 6000))

  // Test 2: Break Bell
  console.log("\n☕ Test 2: Break Bell")
  console.log("Expected: Chime tone → Voice announcement")
  await playBreakBell("Morning Break", {
    voice: "openai-shimmer",
    repeatCount: 1
  })
  
  await new Promise(resolve => setTimeout(resolve, 6000))

  // Test 3: Assembly Bell
  console.log("\n🏛️ Test 3: Assembly Bell")
  console.log("Expected: Announcement tone → Voice announcement")
  await playAssemblyBell("Weekly Assembly", {
    voice: "openai-onyx",
    repeatCount: 1
  })
  
  await new Promise(resolve => setTimeout(resolve, 6000))

  // Test 4: Emergency Bell
  console.log("\n🚨 Test 4: Emergency Bell")
  console.log("Expected: Emergency siren → Urgent voice announcement")
  await playEmergencyBell(
    "Fire drill in progress",
    "Please exit using the nearest emergency exit",
    {
      voice: "openai-onyx",
      repeatCount: 1 // Reduced for testing
    }
  )
  
  await new Promise(resolve => setTimeout(resolve, 8000))

  // Test 5: Dismissal Bell
  console.log("\n🏠 Test 5: Dismissal Bell")
  console.log("Expected: Dismissal melody → Voice announcement")
  await playDismissalBell({
    voice: "openai-fable",
    repeatCount: 1
  })

  console.log("\n✅ Complete bell system test finished!")
}

export const testBellTypeVariations = async () => {
  console.log("🎵 BELL TYPE VARIATIONS TEST")
  console.log("=" .repeat(50))

  const bellTests = [
    { type: "bell", name: "Traditional School Bell", message: "This is the traditional school bell sound." },
    { type: "chime", name: "Soft Chime", message: "This is a soft melodic chime sound." },
    { type: "electronic-bell", name: "Electronic Bell", message: "This is a modern electronic bell sound." },
    { type: "double-ring", name: "Double Ring", message: "This is a double ring bell sound." },
    { type: "westminster-chimes", name: "Westminster Chimes", message: "This is the Westminster chimes like Big Ben." },
    { type: "emergency-alert", name: "Emergency Alert", message: "This is an urgent emergency alert sound." }
  ]

  for (const test of bellTests) {
    console.log(`\n🔊 Testing: ${test.name}`)
    await playCustomBell(
      test.name,
      test.message,
      test.type as any,
      {
        voice: "openai-nova",
        repeatCount: 1
      }
    )
    
    // Wait between tests
    await new Promise(resolve => setTimeout(resolve, 5000))
  }

  console.log("\n✅ Bell type variations test completed!")
}

export const testVoiceVariations = async () => {
  console.log("🎤 VOICE VARIATIONS TEST")
  console.log("=" .repeat(50))

  const voiceTests = [
    { voice: "openai-nova", name: "Professional Female", description: "Clear and professional" },
    { voice: "openai-onyx", name: "Authoritative Male", description: "Deep and commanding" },
    { voice: "openai-shimmer", name: "Friendly Female", description: "Bright and welcoming" },
    { voice: "openai-echo", name: "Warm Male", description: "Rounded and approachable" },
    { voice: "openai-fable", name: "British Storytelling", description: "Engaging and articulate" }
  ]

  for (const test of voiceTests) {
    console.log(`\n🗣️ Testing: ${test.name}`)
    console.log(`   Description: ${test.description}`)
    
    await playCustomBell(
      "Voice Test",
      `This is a test of the ${test.name.toLowerCase()} voice option for school announcements.`,
      "chime",
      {
        voice: test.voice as any,
        repeatCount: 1
      }
    )
    
    // Wait between tests
    await new Promise(resolve => setTimeout(resolve, 5000))
  }

  console.log("\n✅ Voice variations test completed!")
}

export const testSchoolScenarios = async () => {
  console.log("🏫 REAL SCHOOL SCENARIOS TEST")
  console.log("=" .repeat(50))

  const scenarios = [
    {
      name: "Morning Start",
      func: () => playAssemblyBell("Good Morning Assembly", {
        voice: "openai-shimmer"
      })
    },
    {
      name: "Class Change",
      func: () => playClassBell("Second Period - English Literature", {
        voice: "openai-nova"
      })
    },
    {
      name: "Lunch Time",
      func: () => playLunchBell({
        voice: "openai-echo"
      })
    },
    {
      name: "Weather Alert",
      func: () => playEmergencyBell(
        "Severe weather warning",
        "All students must remain indoors until further notice",
        { voice: "openai-onyx", repeatCount: 1 }
      )
    },
    {
      name: "End of Day",
      func: () => playDismissalBell({
        voice: "openai-fable"
      })
    }
  ]

  for (const scenario of scenarios) {
    console.log(`\n📅 Scenario: ${scenario.name}`)
    await scenario.func()
    
    // Wait between scenarios
    await new Promise(resolve => setTimeout(resolve, 7000))
  }

  console.log("\n✅ School scenarios test completed!")
}

export const testRepeatFunctionality = async () => {
  console.log("🔄 REPEAT FUNCTIONALITY TEST")
  console.log("=" .repeat(50))

  const repeatTests = [
    { count: 1, name: "Single Bell" },
    { count: 2, name: "Double Bell" },
    { count: 3, name: "Triple Bell" }
  ]

  for (const test of repeatTests) {
    console.log(`\n🔔 Testing: ${test.name} (${test.count} repetition${test.count > 1 ? 's' : ''})`)
    
    await playCustomBell(
      "Repeat Test",
      `This is a test of ${test.count} repetition${test.count > 1 ? 's' : ''} of the bell and voice announcement.`,
      "chime",
      {
        voice: "openai-nova",
        repeatCount: test.count
      }
    )
    
    // Wait between tests (longer for multiple repetitions)
    await new Promise(resolve => setTimeout(resolve, test.count * 4000 + 2000))
  }

  console.log("\n✅ Repeat functionality test completed!")
}

export const testEmergencySystem = async () => {
  console.log("🚨 EMERGENCY SYSTEM TEST")
  console.log("=" .repeat(50))

  const emergencies = [
    {
      type: "Fire Drill",
      instructions: "Please exit the building using the nearest emergency exit and proceed to the assembly point"
    },
    {
      type: "Severe Weather Alert",
      instructions: "All students and staff should move to the designated safe areas immediately"
    },
    {
      type: "Security Alert",
      instructions: "Please remain in your current location and await further instructions"
    }
  ]

  for (const emergency of emergencies) {
    console.log(`\n🚨 Emergency: ${emergency.type}`)
    
    await playEmergencyBell(
      emergency.type,
      emergency.instructions,
      {
        voice: "openai-onyx", // Authoritative voice for emergencies
        repeatCount: 1 // Reduced for testing
      }
    )
    
    // Wait between emergency tests
    await new Promise(resolve => setTimeout(resolve, 8000))
  }

  console.log("\n✅ Emergency system test completed!")
}

export const quickBellSystemDemo = async () => {
  console.log("⚡ QUICK BELL SYSTEM DEMO")
  console.log("🔔 Tone → 🗣️ Voice → ✅ Complete")
  
  await playClassBell("Quick Demo Class", {
    voice: "openai-nova",
    repeatCount: 1
  })
  
  console.log("✅ Quick demo completed!")
  console.log("🎯 Bell tone played first, followed by voice announcement")
}

export const showTestMenu = () => {
  console.log("🧪 COMPLETE BELL SYSTEM TEST MENU")
  console.log("=" .repeat(50))
  console.log("Available test functions:")
  console.log("")
  console.log("📋 COMPREHENSIVE TESTS:")
  console.log("• testCompleteBellSystem()     - Full system test")
  console.log("• testBellTypeVariations()     - All bell types")
  console.log("• testVoiceVariations()        - All voice options")
  console.log("• testSchoolScenarios()        - Real school situations")
  console.log("• testRepeatFunctionality()    - Repeat testing")
  console.log("• testEmergencySystem()        - Emergency alerts")
  console.log("")
  console.log("⚡ QUICK TESTS:")
  console.log("• quickBellSystemDemo()        - Quick demonstration")
  console.log("")
  console.log("🏫 INDIVIDUAL FUNCTIONS:")
  console.log("• playClassBell('Math Class')  - Class bell")
  console.log("• playBreakBell('Morning Break') - Break bell")
  console.log("• playLunchBell()              - Lunch bell")
  console.log("• playAssemblyBell('Assembly') - Assembly bell")
  console.log("• playDismissalBell()          - Dismissal bell")
  console.log("• playEmergencyBell('Fire', 'Exit now') - Emergency")
  console.log("")
  console.log("📊 SYSTEM INFO:")
  console.log("• showAllBellOptions()         - Show all options")
  console.log("• getBellSystemStatus()        - System status")
  console.log("=" .repeat(50))
}

// Make functions available globally for console testing
if (typeof window !== "undefined") {
  (window as any).testCompleteBellSystem = testCompleteBellSystem;
  (window as any).testBellTypeVariations = testBellTypeVariations;
  (window as any).testVoiceVariations = testVoiceVariations;
  (window as any).testSchoolScenarios = testSchoolScenarios;
  (window as any).testRepeatFunctionality = testRepeatFunctionality;
  (window as any).testEmergencySystem = testEmergencySystem;
  (window as any).quickBellSystemDemo = quickBellSystemDemo;
  (window as any).showTestMenu = showTestMenu;
}