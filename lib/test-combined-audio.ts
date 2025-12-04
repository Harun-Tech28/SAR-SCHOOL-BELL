import { playTaskAudio, playToneAndAnnouncement } from "./combined-audio"

// Simple test functions for the combined audio system
export const testCombinedAudio = async () => {
  console.log("🔊 Testing Combined Audio System")
  
  // Test 1: Basic tone + announcement
  console.log("\n1. Testing basic bell + professional announcement...")
  await playTaskAudio("Mathematics Period", "class", "bell", {
    repeatCount: 1
  })
  
  await new Promise(resolve => setTimeout(resolve, 5000))
  
  // Test 2: Chime + announcement
  console.log("\n2. Testing chime + break announcement...")
  await playTaskAudio("Morning Break", "break", "chime", {
    repeatCount: 1
  })
  
  await new Promise(resolve => setTimeout(resolve, 5000))
  
  // Test 3: Assembly announcement
  console.log("\n3. Testing assembly announcement...")
  await playTaskAudio("Morning Assembly", "assembly", "announcement", {
    repeatCount: 1
  })
  
  console.log("\n✅ Combined audio test completed!")
}

// Test different scenarios
export const testSchoolScenarios = async () => {
  console.log("🏫 Testing Professional School Announcements")
  
  const scenarios = [
    { name: "First Period Mathematics", type: "class", bell: "bell" },
    { name: "Morning Break", type: "break", bell: "chime" },
    { name: "Lunch Time", type: "lunch", bell: "chime" },
    { name: "School Assembly", type: "assembly", bell: "announcement" },
    { name: "Fire Drill", type: "emergency", bell: "emergency-alert" },
    { name: "School Closing", type: "dismissal", bell: "dismissal-bell" }
  ]
  
  for (const scenario of scenarios) {
    console.log(`\n📅 Testing: ${scenario.name}`)
    console.log(`   Expected: "Attention all students, it is time for ${scenario.name}..."`)
    
    await playTaskAudio(scenario.name, scenario.type, scenario.bell as any, {
      repeatCount: 1
    })
    
    // Wait between scenarios
    await new Promise(resolve => setTimeout(resolve, 6000))
  }
  
  console.log("\n✅ Professional school announcements test completed!")
}

// Test the exact format requested: "Attention all students, it is time for [TIMETABLE NAME]"
export const testProfessionalAnnouncements = async () => {
  console.log("🎓 Testing Professional School Announcements")
  console.log("Format: 'Attention all students, it is time for [TIMETABLE NAME]'")
  
  const testCases = [
    { name: "School Closing", type: "dismissal", expected: "Attention all students, it is time for School Closing. Please collect your belongings and proceed to the exit." },
    { name: "Morning Assembly", type: "assembly", expected: "Attention all students and staff, it is time for Morning Assembly. Please proceed to the assembly hall." },
    { name: "Lunch Break", type: "lunch", expected: "Attention all students, it is time for Lunch Break. Please proceed to the dining hall." },
    { name: "Mathematics Period", type: "class", expected: "Attention all students, it is time for Mathematics Period. Please proceed to your classrooms." },
    { name: "Afternoon Break", type: "break", expected: "Attention all students, it is time for Afternoon Break. You may now leave your classrooms." }
  ]
  
  for (const testCase of testCases) {
    console.log(`\n🔔 Testing: ${testCase.name}`)
    console.log(`📢 Expected announcement: "${testCase.expected}"`)
    
    // Play tone first, then voice announcement
    await playTaskAudio(testCase.name, testCase.type, undefined, {
      repeatCount: 1
    })
    
    // Wait between tests
    await new Promise(resolve => setTimeout(resolve, 8000))
  }
  
  console.log("\n✅ Professional announcements test completed!")
  console.log("🎯 Each announcement follows the format: 'Attention all students, it is time for [TIMETABLE NAME]'")
}

// Quick test for the exact closing announcement you mentioned
export const testClosingAnnouncement = async () => {
  console.log("🏫 Testing School Closing Announcement")
  console.log("🔔 Playing tone first, then voice announcement...")
  
  await playTaskAudio("School Closing", "dismissal", "dismissal-bell", {
    repeatCount: 1
  })
  
  console.log("✅ Closing announcement completed!")
  console.log("📢 Announcement: 'Attention all students, it is time for School Closing. Please collect your belongings and proceed to the exit.'")
}

// Make functions available globally for console testing
if (typeof window !== "undefined") {
  (window as any).testCombinedAudio = testCombinedAudio;
  (window as any).testSchoolScenarios = testSchoolScenarios;
  (window as any).testProfessionalAnnouncements = testProfessionalAnnouncements;
  (window as any).testClosingAnnouncement = testClosingAnnouncement;
}