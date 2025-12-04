import { getAllVoices, getVoiceStats } from "./voice-selector"
import { testVoice } from "./voice-initialization"
import { playTextToSpeech } from "./voice-utils"
import type { VoiceType } from "./store"

export interface VoiceTestResult {
  voiceId: VoiceType
  name: string
  provider: string
  success: boolean
  error?: string
  duration?: number
}

export class VoiceTester {
  static async testAllVoices(testText: string = "Hello, this is a voice test"): Promise<VoiceTestResult[]> {
    const voices = getAllVoices()
    const results: VoiceTestResult[] = []
    
    console.log(`[VoiceTest] Testing ${voices.length} voices...`)
    
    for (const voice of voices) {
      const startTime = Date.now()
      
      try {
        const success = await testVoice(voice.id, testText)
        const duration = Date.now() - startTime
        
        results.push({
          voiceId: voice.id,
          name: voice.name,
          provider: voice.provider,
          success,
          duration
        })
        
        console.log(`[VoiceTest] ${voice.name} (${voice.provider}): ${success ? 'PASS' : 'FAIL'} (${duration}ms)`)
      } catch (error) {
        const duration = Date.now() - startTime
        
        results.push({
          voiceId: voice.id,
          name: voice.name,
          provider: voice.provider,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
          duration
        })
        
        console.error(`[VoiceTest] ${voice.name} (${voice.provider}): ERROR - ${error}`)
      }
      
      // Small delay between tests to avoid overwhelming the system
      await new Promise(resolve => setTimeout(resolve, 500))
    }
    
    return results
  }

  static async testVoicesByProvider(provider: string, testText?: string): Promise<VoiceTestResult[]> {
    const voices = getAllVoices().filter(v => 
      v.provider.toLowerCase().includes(provider.toLowerCase())
    )
    
    const results: VoiceTestResult[] = []
    
    for (const voice of voices) {
      const startTime = Date.now()
      
      try {
        const success = await testVoice(voice.id, testText)
        const duration = Date.now() - startTime
        
        results.push({
          voiceId: voice.id,
          name: voice.name,
          provider: voice.provider,
          success,
          duration
        })
      } catch (error) {
        const duration = Date.now() - startTime
        
        results.push({
          voiceId: voice.id,
          name: voice.name,
          provider: voice.provider,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
          duration
        })
      }
      
      await new Promise(resolve => setTimeout(resolve, 500))
    }
    
    return results
  }

  static async testSingleVoice(
    voiceId: VoiceType, 
    testText: string = "Hello, this is a voice test"
  ): Promise<VoiceTestResult> {
    const voice = getAllVoices().find(v => v.id === voiceId)
    
    if (!voice) {
      return {
        voiceId,
        name: "Unknown",
        provider: "Unknown",
        success: false,
        error: "Voice not found"
      }
    }
    
    const startTime = Date.now()
    
    try {
      const success = await playTextToSpeech(testText, voiceId, voice.language)
      const duration = Date.now() - startTime
      
      return {
        voiceId,
        name: voice.name,
        provider: voice.provider,
        success,
        duration
      }
    } catch (error) {
      const duration = Date.now() - startTime
      
      return {
        voiceId,
        name: voice.name,
        provider: voice.provider,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        duration
      }
    }
  }

  static generateTestReport(results: VoiceTestResult[]): {
    summary: {
      total: number
      passed: number
      failed: number
      successRate: number
      averageDuration: number
    }
    byProvider: Record<string, {
      total: number
      passed: number
      failed: number
      successRate: number
    }>
    failures: VoiceTestResult[]
  } {
    const total = results.length
    const passed = results.filter(r => r.success).length
    const failed = total - passed
    const successRate = total > 0 ? (passed / total) * 100 : 0
    const averageDuration = results.reduce((sum, r) => sum + (r.duration || 0), 0) / total
    
    // Group by provider
    const byProvider: Record<string, {
      total: number
      passed: number
      failed: number
      successRate: number
    }> = {}
    
    results.forEach(result => {
      if (!byProvider[result.provider]) {
        byProvider[result.provider] = { total: 0, passed: 0, failed: 0, successRate: 0 }
      }
      
      byProvider[result.provider].total++
      if (result.success) {
        byProvider[result.provider].passed++
      } else {
        byProvider[result.provider].failed++
      }
    })
    
    // Calculate success rates for each provider
    Object.keys(byProvider).forEach(provider => {
      const stats = byProvider[provider]
      stats.successRate = stats.total > 0 ? (stats.passed / stats.total) * 100 : 0
    })
    
    const failures = results.filter(r => !r.success)
    
    return {
      summary: {
        total,
        passed,
        failed,
        successRate: Math.round(successRate * 100) / 100,
        averageDuration: Math.round(averageDuration)
      },
      byProvider,
      failures
    }
  }

  static printTestReport(results: VoiceTestResult[]): void {
    const report = this.generateTestReport(results)
    
    console.log("\n=== VOICE TEST REPORT ===")
    console.log(`Total Voices: ${report.summary.total}`)
    console.log(`Passed: ${report.summary.passed}`)
    console.log(`Failed: ${report.summary.failed}`)
    console.log(`Success Rate: ${report.summary.successRate}%`)
    console.log(`Average Duration: ${report.summary.averageDuration}ms`)
    
    console.log("\n--- By Provider ---")
    Object.entries(report.byProvider).forEach(([provider, stats]) => {
      console.log(`${provider}: ${stats.passed}/${stats.total} (${stats.successRate.toFixed(1)}%)`)
    })
    
    if (report.failures.length > 0) {
      console.log("\n--- Failures ---")
      report.failures.forEach(failure => {
        console.log(`${failure.name} (${failure.provider}): ${failure.error}`)
      })
    }
    
    console.log("========================\n")
  }
}

// Export convenience functions
export const testAllVoices = (testText?: string) => VoiceTester.testAllVoices(testText)
export const testVoicesByProvider = (provider: string, testText?: string) => 
  VoiceTester.testVoicesByProvider(provider, testText)
export const testSingleVoice = (voiceId: VoiceType, testText?: string) => 
  VoiceTester.testSingleVoice(voiceId, testText)
export const generateTestReport = (results: VoiceTestResult[]) => 
  VoiceTester.generateTestReport(results)
export const printTestReport = (results: VoiceTestResult[]) => 
  VoiceTester.printTestReport(results)

// Quick test functions for console use
export const quickTestAIVoices = async () => {
  console.log("Testing AI voices...")
  const results = await testVoicesByProvider("OpenAI")
  printTestReport(results)
  return results
}

export const quickTestTTSVoices = async () => {
  console.log("Testing TTS voices...")
  const results = await testVoicesByProvider("Browser TTS")
  printTestReport(results)
  return results
}

export const quickTestAll = async () => {
  console.log("Testing all voices...")
  const results = await testAllVoices()
  printTestReport(results)
  return results
}