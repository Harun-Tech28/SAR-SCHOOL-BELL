import { CompleteBellSystem } from "./complete-bell-system"
import type { BellType } from "./bell-sounds"
import type { VoiceType } from "./store"

/**
 * Simple Interface for Complete Bell System
 * Easy-to-use functions for school bell operations
 */

// Quick bell functions with smart defaults
export const ringClassBell = async (className: string): Promise<boolean> => {
  console.log(`🔔 Ringing class bell for: ${className}`)
  return CompleteBellSystem.playClassBell(className, {
    voice: "openai-nova",
    useHighQualityVoice: true
  })
}

export const ringBreakBell = async (breakName: string = "Break Time"): Promise<boolean> => {
  console.log(`🔔 Ringing break bell for: ${breakName}`)
  return CompleteBellSystem.playBreakBell(breakName, {
    voice: "openai-shimmer",
    useHighQualityVoice: true
  })
}

export const ringLunchBell = async (): Promise<boolean> => {
  console.log("🔔 Ringing lunch bell")
  return CompleteBellSystem.playLunchBell({
    voice: "openai-echo",
    useHighQualityVoice: true
  })
}

export const ringAssemblyBell = async (assemblyName: string): Promise<boolean> => {
  console.log(`🔔 Ringing assembly bell for: ${assemblyName}`)
  return CompleteBellSystem.playAssemblyBell(assemblyName, {
    voice: "openai-nova",
    useHighQualityVoice: true
  })
}

export const ringDismissalBell = async (): Promise<boolean> => {
  console.log("🔔 Ringing dismissal bell")
  return CompleteBellSystem.playDismissalBell({
    voice: "openai-fable",
    useHighQualityVoice: true
  })
}

export const ringEmergencyBell = async (emergency: string, instructions: string): Promise<boolean> => {
  console.log(`🚨 Ringing emergency bell: ${emergency}`)
  return CompleteBellSystem.playEmergencyBell(emergency, instructions, {
    voice: "openai-onyx", // Authoritative voice for emergencies
    useHighQualityVoice: true,
    repeatCount: 2
  })
}

export const ringCustomBell = async (
  message: string, 
  bellType: BellType = "bell",
  voice: VoiceType = "openai-nova"
): Promise<boolean> => {
  console.log(`🔔 Ringing custom bell: ${message}`)
  return CompleteBellSystem.playCustomBell("Custom Bell", message, bellType, {
    voice,
    useHighQualityVoice: true
  })
}

// School day automation
export const ringSchoolStart = async (): Promise<boolean> => {
  console.log("🏫 Ringing school start bell")
  return ringAssemblyBell("Good Morning - School Day Begins")
}

export const ringSchoolEnd = async (): Promise<boolean> => {
  console.log("🏫 Ringing school end bell")
  return ringDismissalBell()
}

// Common school scenarios
export const ringPeriodChange = async (nextClass: string): Promise<boolean> => {
  console.log(`🔄 Ringing period change bell for: ${nextClass}`)
  return ringClassBell(nextClass)
}

export const ringFireDrill = async (): Promise<boolean> => {
  console.log("🚨 Ringing fire drill bell")
  return ringEmergencyBell(
    "Fire drill in progress",
    "Please exit the building using the nearest emergency exit and proceed to the assembly point"
  )
}

export const ringWeatherAlert = async (): Promise<boolean> => {
  console.log("⛈️ Ringing weather alert bell")
  return ringEmergencyBell(
    "Severe weather warning",
    "All students and staff should move to the designated safe areas immediately"
  )
}

// Test the bell system
export const testBellSystem = async (): Promise<void> => {
  console.log("🧪 Testing Complete Bell System")
  console.log("=" .repeat(40))
  
  // Test sequence
  const tests = [
    { name: "Class Bell", func: () => ringClassBell("Test Class") },
    { name: "Break Bell", func: () => ringBreakBell("Test Break") },
    { name: "Assembly Bell", func: () => ringAssemblyBell("Test Assembly") },
    { name: "Dismissal Bell", func: () => ringDismissalBell() }
  ]
  
  for (const test of tests) {
    console.log(`\n🔔 Testing: ${test.name}`)
    await test.func()
    await new Promise(resolve => setTimeout(resolve, 5000))
  }
  
  console.log("\n✅ Bell system test completed!")
}

// Show available bell functions
export const showBellFunctions = (): void => {
  console.log("🔔 AVAILABLE BELL FUNCTIONS")
  console.log("=" .repeat(40))
  console.log("")
  console.log("📚 SCHOOL BELLS:")
  console.log("• ringClassBell('Math Class')")
  console.log("• ringBreakBell('Morning Break')")
  console.log("• ringLunchBell()")
  console.log("• ringAssemblyBell('Weekly Assembly')")
  console.log("• ringDismissalBell()")
  console.log("")
  console.log("🚨 EMERGENCY BELLS:")
  console.log("• ringEmergencyBell('Fire drill', 'Exit instructions')")
  console.log("• ringFireDrill()")
  console.log("• ringWeatherAlert()")
  console.log("")
  console.log("🏫 SCHOOL DAY:")
  console.log("• ringSchoolStart()")
  console.log("• ringSchoolEnd()")
  console.log("• ringPeriodChange('Next Class')")
  console.log("")
  console.log("🎛️ CUSTOM:")
  console.log("• ringCustomBell('Your message', 'bell', 'openai-nova')")
  console.log("")
  console.log("🧪 TESTING:")
  console.log("• testBellSystem()")
  console.log("• showBellFunctions()")
  console.log("")
  console.log("🎯 All functions combine bell tones with voice announcements!")
  console.log("=" .repeat(40))
}

// Quick demo
export const quickBellDemo = async (): Promise<void> => {
  console.log("⚡ QUICK BELL SYSTEM DEMO")
  console.log("🔔 Bell Tone → 🗣️ Voice Announcement")
  
  await ringClassBell("Demo Class")
  
  console.log("✅ Demo completed!")
  console.log("🎯 Perfect combination of tone and voice!")
}

// Make functions available globally for console testing
if (typeof window !== "undefined") {
  (window as any).ringClassBell = ringClassBell;
  (window as any).ringBreakBell = ringBreakBell;
  (window as any).ringLunchBell = ringLunchBell;
  (window as any).ringAssemblyBell = ringAssemblyBell;
  (window as any).ringDismissalBell = ringDismissalBell;
  (window as any).ringEmergencyBell = ringEmergencyBell;
  (window as any).ringCustomBell = ringCustomBell;
  (window as any).ringSchoolStart = ringSchoolStart;
  (window as any).ringSchoolEnd = ringSchoolEnd;
  (window as any).ringPeriodChange = ringPeriodChange;
  (window as any).ringFireDrill = ringFireDrill;
  (window as any).ringWeatherAlert = ringWeatherAlert;
  (window as any).testBellSystem = testBellSystem;
  (window as any).showBellFunctions = showBellFunctions;
  (window as any).quickBellDemo = quickBellDemo;
}