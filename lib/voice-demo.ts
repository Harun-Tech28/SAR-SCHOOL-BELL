import { getAllVoices, getVoiceStats } from "./voice-selector"
import { testSingleVoice } from "./voice-test"
import { playTextToSpeech } from "./voice-utils"
import type { VoiceType } from "./store"

export class VoiceDemo {
  static async demonstrateAllVoices(): Promise<void> {
    const voices = getAllVoices()
    const stats = getVoiceStats()
    
    console.log("=== VOICE SYSTEM DEMONSTRATION ===")
    console.log(`Total voices available: ${stats.total}`)
    console.log(`AI voices: ${stats.aiVoices}`)
    console.log(`TTS voices: ${stats.ttsVoices}`)
    console.log("===================================\n")
    
    // Group voices by provider for organized demo
    const providerVoices = voices.reduce((acc, voice) => {
      if (!acc[voice.provider]) {
        acc[voice.provider] = []
      }
      acc[voice.provider].push(voice)
      return acc
    }, {} as Record<string, typeof voices>)
    
    for (const [provider, providerVoiceList] of Object.entries(providerVoices)) {
      console.log(`\n--- ${provider} Voices ---`)
      
      for (const voice of providerVoiceList) {
        console.log(`Testing: ${voice.name} (${voice.language})`)
        
        const testText = this.getTestText(voice.language as any, voice.category)
        
        try {
          await playTextToSpeech(testText, voice.id, voice.language)
          console.log(`✅ ${voice.name} - SUCCESS`)
        } catch (error) {
          console.log(`❌ ${voice.name} - FAILED: ${error}`)
        }
        
        // Wait between voices
        await new Promise(resolve => setTimeout(resolve, 2000))
      }
    }
    
    console.log("\n=== DEMONSTRATION COMPLETE ===")
  }

  static async demonstrateProvider(providerName: string): Promise<void> {
    const voices = getAllVoices().filter(v => 
      v.provider.toLowerCase().includes(providerName.toLowerCase())
    )
    
    if (voices.length === 0) {
      console.log(`No voices found for provider: ${providerName}`)
      return
    }
    
    console.log(`\n=== ${providerName.toUpperCase()} VOICE DEMONSTRATION ===`)
    console.log(`Found ${voices.length} voices\n`)
    
    for (const voice of voices) {
      console.log(`Testing: ${voice.name}`)
      console.log(`Description: ${voice.description}`)
      
      const testText = this.getTestText(voice.language as any, voice.category)
      
      try {
        await playTextToSpeech(testText, voice.id, voice.language)
        console.log(`✅ SUCCESS\n`)
      } catch (error) {
        console.log(`❌ FAILED: ${error}\n`)
      }
      
      // Wait between voices
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
    
    console.log("=== DEMONSTRATION COMPLETE ===")
  }

  static async demonstrateCategory(category: 'standard' | 'religious' | 'announcement' | 'bell'): Promise<void> {
    const voices = getAllVoices().filter(v => v.category === category)
    
    if (voices.length === 0) {
      console.log(`No voices found for category: ${category}`)
      return
    }
    
    console.log(`\n=== ${category.toUpperCase()} VOICE DEMONSTRATION ===`)
    console.log(`Found ${voices.length} voices\n`)
    
    for (const voice of voices) {
      console.log(`Testing: ${voice.name} (${voice.provider})`)
      
      const testText = this.getTestText(voice.language as any, category)
      
      try {
        await playTextToSpeech(testText, voice.id, voice.language)
        console.log(`✅ SUCCESS\n`)
      } catch (error) {
        console.log(`❌ FAILED: ${error}\n`)
      }
      
      // Wait between voices
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
    
    console.log("=== DEMONSTRATION COMPLETE ===")
  }

  static async quickDemo(): Promise<void> {
    console.log("=== QUICK VOICE DEMO ===")
    
    // Test one voice from each provider
    const providers = ["OpenAI", "ElevenLabs", "Azure", "Browser TTS"]
    
    for (const provider of providers) {
      const voice = getAllVoices().find(v => v.provider === provider)
      
      if (voice) {
        console.log(`Testing ${provider}: ${voice.name}`)
        
        try {
          await playTextToSpeech("Hello, this is a quick voice test", voice.id, voice.language)
          console.log(`✅ ${provider} - Working`)
        } catch (error) {
          console.log(`❌ ${provider} - Failed: ${error}`)
        }
        
        await new Promise(resolve => setTimeout(resolve, 1500))
      } else {
        console.log(`❌ ${provider} - No voices available`)
      }
    }
    
    console.log("=== QUICK DEMO COMPLETE ===")
  }

  private static getTestText(language: 'english' | 'hausa' | 'twi' | 'arabic', category: string): string {
    const testTexts = {
      english: {
        standard: "Hello, this is a test of the voice system. How does this sound?",
        religious: "This is a test of the prayer call system. May peace be upon you.",
        announcement: "Attention students and staff. This is a test announcement from the school system.",
        bell: "This is a test of the school bell system. Please listen to the tone quality."
      },
      hausa: {
        standard: "Sannu, wannan gwaji ne na tsarin murya. Yaya wannan sauti yake?",
        religious: "Wannan gwaji ne na tsarin kiran sallah. Salama ta kasance a kanku.",
        announcement: "Hankali dalibai da ma'aikata. Wannan sanarwa ce ta gwaji daga tsarin makaranta.",
        bell: "Wannan gwaji ne na tsarin kararrawa na makaranta."
      },
      twi: {
        standard: "Akwaaba, eyi voice system test. Ɛte sɛn?",
        religious: "Eyi prayer call system test. Asomdwoe nka wo so.",
        announcement: "Asuafo ne staff, eyi announcement test fi school system.",
        bell: "Eyi school bell system test."
      },
      arabic: {
        standard: "مرحبا، هذا اختبار لنظام الصوت. كيف يبدو هذا الصوت؟",
        religious: "هذا اختبار لنظام الأذان. السلام عليكم ورحمة الله وبركاته.",
        announcement: "انتباه الطلاب والموظفين. هذا إعلان تجريبي من نظام المدرسة.",
        bell: "هذا اختبار لنظام جرس المدرسة."
      }
    }
    
    return testTexts[language]?.[category as keyof typeof testTexts[typeof language]] || 
           testTexts.english.standard
  }

  // Interactive demo functions
  static async interactiveDemo(): Promise<void> {
    console.log("=== INTERACTIVE VOICE DEMO ===")
    console.log("Available commands:")
    console.log("- VoiceDemo.demonstrateAllVoices() - Test all voices")
    console.log("- VoiceDemo.demonstrateProvider('OpenAI') - Test specific provider")
    console.log("- VoiceDemo.demonstrateCategory('announcement') - Test specific category")
    console.log("- VoiceDemo.quickDemo() - Quick test of each provider")
    console.log("- VoiceDemo.listVoices() - Show all available voices")
    console.log("================================")
  }

  static listVoices(): void {
    const voices = getAllVoices()
    const stats = getVoiceStats()
    
    console.log("=== AVAILABLE VOICES ===")
    console.log(`Total: ${stats.total} voices`)
    console.log(`AI Voices: ${stats.aiVoices}`)
    console.log(`TTS Voices: ${stats.ttsVoices}`)
    console.log("========================\n")
    
    // Group by provider
    const byProvider = voices.reduce((acc, voice) => {
      if (!acc[voice.provider]) {
        acc[voice.provider] = []
      }
      acc[voice.provider].push(voice)
      return acc
    }, {} as Record<string, typeof voices>)
    
    Object.entries(byProvider).forEach(([provider, providerVoices]) => {
      console.log(`--- ${provider} (${providerVoices.length} voices) ---`)
      providerVoices.forEach(voice => {
        console.log(`  ${voice.id}: ${voice.name} (${voice.language})`)
        console.log(`    ${voice.description}`)
      })
      console.log("")
    })
  }
}

// Export convenience functions for console use
export const demoAllVoices = () => VoiceDemo.demonstrateAllVoices()
export const demoProvider = (provider: string) => VoiceDemo.demonstrateProvider(provider)
export const demoCategory = (category: 'standard' | 'religious' | 'announcement' | 'bell') => 
  VoiceDemo.demonstrateCategory(category)
export const quickDemo = () => VoiceDemo.quickDemo()
export const listVoices = () => VoiceDemo.listVoices()
export const interactiveDemo = () => VoiceDemo.interactiveDemo()

// Make it available globally for console testing
if (typeof window !== "undefined") {
  (window as any).VoiceDemo = VoiceDemo;
  (window as any).demoAllVoices = demoAllVoices;
  (window as any).demoProvider = demoProvider;
  (window as any).demoCategory = demoCategory;
  (window as any).quickDemo = quickDemo;
  (window as any).listVoices = listVoices;
  (window as any).interactiveDemo = interactiveDemo;
}