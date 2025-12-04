import { CombinedAudioPlayer, playTaskAudio } from "./combined-audio"
import type { BellType } from "./bell-sounds"

export class CombinedAudioTester {
  static async quickTest(): Promise<void> {
    console.log("🔊 Quick Combined Audio Test")
    
    // Test basic tone + announcement
    await playTaskAudio("Math Class", "class", "bell")
    
    console.log("✅ Quick test completed!")
  }

  static async fullTest(): Promise<void> {
    console.log("🔊 Full Combined Audio Test")
    
    const testSchedule = [
      { name: "Morning Assembly", type: "assembly", bell: "announcement" as BellType },
      { name: "First Period - Mathematics", type: "class", bell: "bell" as BellType },
      { name: "Morning Break", type: "break", bell: "chime" as BellType },
      { name: "Second Period - English", type: "class", bell: "bell" as BellType },
      { name: "Lunch Time", type: "lunch", bell: "chime" as BellType },
      { name: "Third Period - Science", type: "class", bell: "bell" as BellType },
      { name: "Fire Drill", type: "emergency", bell: "emergency-alert" as BellType },
      { name: "End of School Day", type: "dismissal", bell: "dismissal-bell" as BellType }
    ]

    for (const item of testSchedule) {
      console.log(`\n📅 Testing: ${item.name}`)
      await playTaskAudio(item.name, item.type, item.bell, {
        repeatCount: 1 // Single repetition for testing
      })
      
      // Wait between tests
      await new Promise(resolve => setTimeout(resolve, 5000))
    }

    console.log("\n✅ Full combined audio test completed!")
  }

  static async testRepeatFunctionality(): Promise<void> {
    console.log("🔄 Testing Combined Audio Repeat Functionality")
    
    // Test with different repeat counts
    const repeatTests = [
      { count: 1, name: "Single Announcement" },
      { count: 2, name: "Double Announcement" },
      { count: 3, name: "Triple Announcement" }
    ]

    for (const test of repeatTests) {
      console.log(`\nTesting ${test.count} repetition(s): ${test.name}`)
      await playTaskAudio("Test Message", "announcement", "announcement", {
        repeatCount: test.count
      })
      
      // Wait between tests
      await new Promise(resolve => setTimeout(resolve, 3000))
    }

    console.log("\n✅ Repeat functionality test completed!")
  }

  static async testDifferentTones(): Promise<void> {
    console.log("🎵 Testing Different Tone Types")
    
    const toneTests: Array<{ tone: BellType; name: string }> = [
      { tone: "bell", name: "School Bell" },
      { tone: "chime", name: "Soft Chime" },
      { tone: "announcement", name: "Announcement Tone" },
      { tone: "emergency-alert", name: "Emergency Alert" },
      { tone: "dismissal-bell", name: "Dismissal Bell" }
    ]

    for (const test of toneTests) {
      console.log(`\nTesting ${test.tone}: ${test.name}`)
      await CombinedAudioPlayer.playToneAndAnnouncement(`This is a test of the ${test.name}`, {
        tone: test.tone,
        repeatCount: 1
      })
      
      // Wait between tests
      await new Promise(resolve => setTimeout(resolve, 4000))
    }

    console.log("\n✅ Tone types test completed!")
  }

  static async demonstrateSchoolDay(): Promise<void> {
    console.log("🏫 Demonstrating Full School Day Audio")
    
    const schoolDay = [
      { time: "08:00", name: "Morning Assembly", type: "assembly" },
      { time: "08:30", name: "First Period", type: "class" },
      { time: "09:30", name: "Morning Break", type: "break" },
      { time: "09:45", name: "Second Period", type: "class" },
      { time: "10:45", name: "Third Period", type: "class" },
      { time: "11:45", name: "Lunch Break", type: "lunch" },
      { time: "12:30", name: "Fourth Period", type: "class" },
      { time: "13:30", name: "Fifth Period", type: "class" },
      { time: "14:30", name: "End of School", type: "dismissal" }
    ]

    for (const event of schoolDay) {
      console.log(`\n🕐 ${event.time} - ${event.name}`)
      await playTaskAudio(event.name, event.type, undefined, {
        repeatCount: 1
      })
      
      // Wait between events (shorter for demo)
      await new Promise(resolve => setTimeout(resolve, 3000))
    }

    console.log("\n✅ School day demonstration completed!")
  }
}

// Export convenience functions for console use
export const quickTestCombined = () => CombinedAudioTester.quickTest()
export const fullTestCombined = () => CombinedAudioTester.fullTest()
export const testRepeatCombined = () => CombinedAudioTester.testRepeatFunctionality()
export const testDifferentTones = () => CombinedAudioTester.testDifferentTones()
export const demonstrateSchoolDay = () => CombinedAudioTester.demonstrateSchoolDay()

// Make it available globally for console testing
if (typeof window !== "undefined") {
  (window as any).CombinedAudioTester = CombinedAudioTester;
  (window as any).quickTestCombined = quickTestCombined;
  (window as any).fullTestCombined = fullTestCombined;
  (window as any).testRepeatCombined = testRepeatCombined;
  (window as any).testDifferentTones = testDifferentTones;
  (window as any).demonstrateSchoolDay = demonstrateSchoolDay;
}