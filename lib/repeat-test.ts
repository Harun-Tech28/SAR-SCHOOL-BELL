import { playAnnouncement, playTextToSpeech } from "./voice-utils"
import { useStore } from "./store"
import type { VoiceType, Language } from "./store"

export class RepeatTester {
  static async testRepeatFunctionality(): Promise<void> {
    console.log("🔄 Testing Repeat Functionality...")
    
    const settings = useStore.getState().settings
    console.log(`Current defaultRepeatCount: ${settings.defaultRepeatCount}`)
    
    // Test with default repeat count
    console.log("\n1. Testing with default repeat count...")
    await playAnnouncement("This is a test announcement with default repeat count")
    
    // Wait a bit
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Test with custom repeat count
    console.log("\n2. Testing with custom repeat count (3 times)...")
    await playAnnouncement("This announcement should play 3 times", undefined, undefined, 3)
    
    console.log("\n✅ Repeat functionality test completed!")
  }

  static async testWithDifferentCounts(): Promise<void> {
    console.log("🔄 Testing Different Repeat Counts...")
    
    const testCases = [1, 2, 3, 5]
    
    for (const count of testCases) {
      console.log(`\nTesting ${count} repetition(s)...`)
      await playTextToSpeech(`Testing ${count} repetitions`, "standard-female", "english", count)
      
      // Wait between tests
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
    
    console.log("\n✅ Different repeat counts test completed!")
  }

  static async testAnnouncementTypes(): Promise<void> {
    console.log("📢 Testing Different Announcement Types...")
    
    const announcements = [
      { text: "Morning assembly announcement", type: "announcement" as const },
      { text: "Break time bell", type: "bell" as const },
      { text: "Emergency drill", type: "emergency" as const },
      { text: "End of school day", type: "dismissal" as const }
    ]
    
    for (const announcement of announcements) {
      console.log(`\nTesting ${announcement.type}: ${announcement.text}`)
      await playAnnouncement(announcement.text)
      
      // Wait between announcements
      await new Promise(resolve => setTimeout(resolve, 3000))
    }
    
    console.log("\n✅ Announcement types test completed!")
  }

  static async setRepeatCount(count: number): Promise<void> {
    console.log(`🔧 Setting default repeat count to ${count}`)
    
    useStore.getState().updateSettings({
      defaultRepeatCount: count
    })
    
    console.log(`✅ Default repeat count updated to ${count}`)
    
    // Test the new setting
    await playAnnouncement(`Testing new repeat count of ${count}`)
  }

  static getRepeatCount(): number {
    const settings = useStore.getState().settings
    return settings.defaultRepeatCount
  }

  static async demonstrateRepeatSettings(): Promise<void> {
    console.log("🎛️ Demonstrating Repeat Settings...")
    
    const originalCount = this.getRepeatCount()
    console.log(`Original repeat count: ${originalCount}`)
    
    // Test different repeat counts
    const testCounts = [1, 2, 3]
    
    for (const count of testCounts) {
      console.log(`\nSetting repeat count to ${count}...`)
      await this.setRepeatCount(count)
      
      await playAnnouncement(`This should repeat ${count} time${count > 1 ? 's' : ''}`)
      
      // Wait between tests
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
    
    // Restore original count
    console.log(`\nRestoring original repeat count: ${originalCount}`)
    await this.setRepeatCount(originalCount)
    
    console.log("✅ Repeat settings demonstration completed!")
  }

  static async quickRepeatTest(text: string = "Quick repeat test", count: number = 2): Promise<void> {
    console.log(`🚀 Quick test: "${text}" ${count} times`)
    await playTextToSpeech(text, "standard-male", "english", count)
  }
}

// Export convenience functions for console use
export const testRepeat = () => RepeatTester.testRepeatFunctionality()
export const testDifferentCounts = () => RepeatTester.testWithDifferentCounts()
export const testAnnouncementTypes = () => RepeatTester.testAnnouncementTypes()
export const setRepeatCount = (count: number) => RepeatTester.setRepeatCount(count)
export const getRepeatCount = () => RepeatTester.getRepeatCount()
export const demonstrateRepeatSettings = () => RepeatTester.demonstrateRepeatSettings()
export const quickRepeatTest = (text?: string, count?: number) => RepeatTester.quickRepeatTest(text, count)

// Make it available globally for console testing
if (typeof window !== "undefined") {
  (window as any).RepeatTester = RepeatTester;
  (window as any).testRepeat = testRepeat;
  (window as any).setRepeatCount = setRepeatCount;
  (window as any).getRepeatCount = getRepeatCount;
  (window as any).quickRepeatTest = quickRepeatTest;
}