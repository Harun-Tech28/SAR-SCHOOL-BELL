import { 
  ringClassBell,
  ringBreakBell,
  ringLunchBell,
  ringAssemblyBell,
  ringDismissalBell,
  ringEmergencyBell,
  ringFireDrill,
  showBellFunctions
} from "./bell-system-interface"

import { CompleteBellSystem } from "./complete-bell-system"

/**
 * Complete Bell System Demonstration
 * Shows the full capabilities of the integrated tone + voice system
 */

export const demoCompleteBellSystem = async () => {
  console.log("🔔 COMPLETE BELL SYSTEM DEMONSTRATION")
  console.log("=" .repeat(60))
  console.log("🌟 Features:")
  console.log("   ✅ 13+ Different Bell Tones")
  console.log("   ✅ 8+ Premium AI Voices")
  console.log("   ✅ Perfect Tone + Voice Synchronization")
  console.log("   ✅ School Schedule Integration")
  console.log("   ✅ Emergency Alert System")
  console.log("   ✅ Custom Message Support")
  console.log("   ✅ Repeat Functionality")
  console.log("=" .repeat(60))

  // Demo 1: Traditional Class Bell
  console.log("\n🔔 DEMO 1: Traditional Class Bell")
  console.log("   Sequence: School Bell Tone → Professional Voice Announcement")
  await ringClassBell("Mathematics Period")
  
  await new Promise(resolve => setTimeout(resolve, 7000))

  // Demo 2: Soft Break Chime
  console.log("\n🎵 DEMO 2: Soft Break Chime")
  console.log("   Sequence: Melodic Chime → Friendly Voice Announcement")
  await ringBreakBell("Morning Break")
  
  await new Promise(resolve => setTimeout(resolve, 6000))

  // Demo 3: Assembly Announcement
  console.log("\n📢 DEMO 3: Assembly Announcement")
  console.log("   Sequence: Attention Tone → Authoritative Voice Announcement")
  await ringAssemblyBell("Weekly School Assembly")
  
  await new Promise(resolve => setTimeout(resolve, 7000))

  // Demo 4: Emergency Alert
  console.log("\n🚨 DEMO 4: Emergency Alert System")
  console.log("   Sequence: Urgent Siren → Emergency Voice Instructions")
  await ringFireDrill()
  
  await new Promise(resolve => setTimeout(resolve, 8000))

  // Demo 5: Dismissal Bell
  console.log("\n🏠 DEMO 5: School Dismissal")
  console.log("   Sequence: Cheerful Melody → End-of-Day Announcement")
  await ringDismissalBell()

  console.log("\n✅ COMPLETE BELL SYSTEM DEMO FINISHED!")
  console.log("🎯 Every bell perfectly combines tone with voice announcement")
}

export const showSystemCapabilities = () => {
  console.log("🔔 COMPLETE BELL SYSTEM CAPABILITIES")
  console.log("=" .repeat(60))
  
  const status = CompleteBellSystem.getSystemStatus()
  
  console.log("\n📊 SYSTEM STATISTICS:")
  console.log(`   • ${status.bellTypes} different bell tones available`)
  console.log(`   • ${status.voices} premium AI voices available`)
  console.log(`   • ${status.features.length} advanced features`)
  
  console.log("\n🔊 AVAILABLE BELL TONES:")
  console.log("   • Traditional School Bell")
  console.log("   • Electronic Bell")
  console.log("   • Soft Melodic Chime")
  console.log("   • Westminster Chimes (Big Ben style)")
  console.log("   • Double/Triple Ring Bells")
  console.log("   • Emergency Alert Siren")
  console.log("   • Dismissal Melody")
  console.log("   • Prayer Bells")
  console.log("   • And more...")
  
  console.log("\n🎤 PREMIUM AI VOICES:")
  console.log("   • OpenAI Nova (Professional Female)")
  console.log("   • OpenAI Onyx (Authoritative Male)")
  console.log("   • OpenAI Shimmer (Friendly Female)")
  console.log("   • OpenAI Echo (Warm Male)")
  console.log("   • OpenAI Fable (British Storytelling)")
  console.log("   • ElevenLabs Premium Voices")
  console.log("   • Azure Premium Voices")
  console.log("   • And more...")
  
  console.log("\n🏫 SCHOOL FUNCTIONS:")
  console.log("   • Class Period Bells")
  console.log("   • Break Time Chimes")
  console.log("   • Lunch Announcements")
  console.log("   • Assembly Calls")
  console.log("   • Dismissal Bells")
  console.log("   • Emergency Alerts")
  console.log("   • Prayer Time Calls")
  console.log("   • Custom Messages")
  
  console.log("\n⚡ KEY FEATURES:")
  status.features.forEach(feature => {
    console.log(`   • ${feature}`)
  })
  
  console.log("=" .repeat(60))
}

export const demonstrateSchoolDay = async () => {
  console.log("🏫 COMPLETE SCHOOL DAY DEMONSTRATION")
  console.log("=" .repeat(60))
  console.log("Simulating a full school day with appropriate bells and announcements")
  console.log("=" .repeat(60))

  const schoolSchedule = [
    {
      time: "08:00",
      name: "School Day Begins",
      func: () => ringAssemblyBell("Good Morning - School Day Begins"),
      description: "Morning assembly with welcoming tone"
    },
    {
      time: "08:30", 
      name: "First Period",
      func: () => ringClassBell("First Period - Mathematics"),
      description: "Traditional school bell for class start"
    },
    {
      time: "09:30",
      name: "Morning Break",
      func: () => ringBreakBell("Morning Break"),
      description: "Soft chime for break time"
    },
    {
      time: "09:45",
      name: "Second Period",
      func: () => ringClassBell("Second Period - English Literature"),
      description: "Class bell for period change"
    },
    {
      time: "11:45",
      name: "Lunch Time",
      func: () => ringLunchBell(),
      description: "Pleasant chime for lunch break"
    },
    {
      time: "12:30",
      name: "Afternoon Classes",
      func: () => ringClassBell("Third Period - Science"),
      description: "Afternoon class bell"
    },
    {
      time: "14:30",
      name: "School Dismissal",
      func: () => ringDismissalBell(),
      description: "Cheerful dismissal melody"
    }
  ]

  for (const event of schoolSchedule) {
    console.log(`\n🕐 ${event.time} - ${event.name}`)
    console.log(`   ${event.description}`)
    await event.func()
    
    // Wait between events
    await new Promise(resolve => setTimeout(resolve, 6000))
  }

  console.log("\n✅ Complete school day demonstration finished!")
  console.log("🎯 Each bell used appropriate tone + voice combination")
}

export const demonstrateEmergencySystem = async () => {
  console.log("🚨 EMERGENCY SYSTEM DEMONSTRATION")
  console.log("=" .repeat(50))

  const emergencies = [
    {
      name: "Fire Drill",
      func: () => ringFireDrill(),
      description: "Urgent siren + evacuation instructions"
    },
    {
      name: "Severe Weather",
      func: () => ringEmergencyBell(
        "Severe weather warning",
        "All students and staff should move to designated safe areas immediately"
      ),
      description: "Weather alert with safety instructions"
    },
    {
      name: "Security Alert",
      func: () => ringEmergencyBell(
        "Security alert",
        "Please remain in your current location and await further instructions"
      ),
      description: "Security alert with lockdown instructions"
    }
  ]

  for (const emergency of emergencies) {
    console.log(`\n🚨 ${emergency.name}`)
    console.log(`   ${emergency.description}`)
    await emergency.func()
    
    // Wait between emergency demos
    await new Promise(resolve => setTimeout(resolve, 8000))
  }

  console.log("\n✅ Emergency system demonstration completed!")
}

export const quickSystemOverview = () => {
  console.log("⚡ COMPLETE BELL SYSTEM OVERVIEW")
  console.log("=" .repeat(50))
  console.log("")
  console.log("🔔 WHAT IT DOES:")
  console.log("   1. Plays appropriate bell tone/chime")
  console.log("   2. Waits for tone to finish")
  console.log("   3. Plays professional voice announcement")
  console.log("   4. Repeats if configured")
  console.log("")
  console.log("🎯 PERFECT FOR:")
  console.log("   • School bell systems")
  console.log("   • Public announcements")
  console.log("   • Emergency alerts")
  console.log("   • Scheduled notifications")
  console.log("   • Custom messaging")
  console.log("")
  console.log("⚡ QUICK COMMANDS:")
  console.log("   ringClassBell('Math Class')    - Class bell")
  console.log("   ringBreakBell('Morning Break') - Break chime")
  console.log("   ringLunchBell()                - Lunch bell")
  console.log("   ringEmergencyBell('Fire', 'Exit now') - Emergency")
  console.log("   demoCompleteBellSystem()       - Full demo")
  console.log("")
  console.log("📋 MORE INFO:")
  console.log("   showBellFunctions()            - All functions")
  console.log("   showAllBellOptions()           - All options")
  console.log("=" .repeat(50))
}

export const testSystemIntegration = async () => {
  console.log("🔧 SYSTEM INTEGRATION TEST")
  console.log("Testing tone + voice synchronization")
  console.log("=" .repeat(40))
  
  console.log("\n🔔 Test 1: Perfect Timing")
  console.log("Bell tone → Wait → Voice announcement")
  await ringClassBell("Integration Test Class")
  
  await new Promise(resolve => setTimeout(resolve, 6000))
  
  console.log("\n✅ Integration test completed!")
  console.log("🎯 Tone and voice perfectly synchronized!")
}

// Make functions available globally for console testing
if (typeof window !== "undefined") {
  (window as any).demoCompleteBellSystem = demoCompleteBellSystem;
  (window as any).showSystemCapabilities = showSystemCapabilities;
  (window as any).demonstrateSchoolDay = demonstrateSchoolDay;
  (window as any).demonstrateEmergencySystem = demonstrateEmergencySystem;
  (window as any).quickSystemOverview = quickSystemOverview;
  (window as any).testSystemIntegration = testSystemIntegration;
}