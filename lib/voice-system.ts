// Main voice system exports - everything you need for voice functionality

// Core voice functions
export {
  playTextToSpeech,
  playAnnouncement,
  generateAIVoice,
  playAudioBuffer,
  playBrowserTTS,
  playAzanCall,
  generatePrayerCallText,
  getVoiceSystemStatus,
  isAIVoiceAvailable,
  estimateVoiceCost,
  VOICE_OPTIONS,
  LANGUAGE_NAMES
} from "./voice-utils"

// Voice initialization and management
export {
  initializeVoiceSystem,
  updateVoiceSettings,
  getAvailableVoices,
  testVoice,
  enableAIVoice,
  getVoiceSystemStatus as getSystemStatus,
  VoiceSystemInitializer
} from "./voice-initialization"

// Voice selection and filtering
export {
  getAllVoices,
  getVoicesByProvider,
  getVoicesByLanguage,
  getVoicesByCategory,
  getAIVoices,
  getTTSVoices,
  getRecommendedVoices,
  searchVoices,
  getVoiceInfo,
  isAIVoice,
  getProviderVoices,
  getLanguageVoices,
  getVoiceStats,
  VoiceSelector
} from "./voice-selector"

// Voice testing
export {
  testAllVoices,
  testVoicesByProvider,
  testSingleVoice,
  generateTestReport,
  printTestReport,
  quickTestAIVoices,
  quickTestTTSVoices,
  quickTestAll,
  VoiceTester
} from "./voice-test"

// Voice demonstration
export {
  demoAllVoices,
  demoProvider,
  demoCategory,
  quickDemo,
  listVoices,
  interactiveDemo,
  VoiceDemo
} from "./voice-demo"

// Repeat testing
export {
  testRepeat,
  testDifferentCounts,
  testAnnouncementTypes,
  setRepeatCount,
  getRepeatCount,
  demonstrateRepeatSettings,
  quickRepeatTest,
  RepeatTester
} from "./repeat-test"

// Combined audio (tone + voice)
export {
  playToneAndAnnouncement,
  playClassBell,
  playBreakChime,
  playAnnouncementTone,
  playEmergencyAlert,
  playHighQualityAnnouncement,
  playNormalAnnouncement,
  playTaskAudio,
  getToneForTaskType,
  generateVoiceMessage,
  CombinedAudioPlayer
} from "./combined-audio"

// High-quality AI voice announcements
export {
  playCustomAnnouncement,
  playSchoolAnnouncement,
  playEmergencyAnnouncement as playHighQualityEmergencyAnnouncement,
  playFriendlyAnnouncement,
  playAdministrativeAnnouncement,
  testAllPremiumVoices,
  demonstrateAnnouncementTypes,
  quickHighQualityTest,
  getAvailablePremiumVoices,
  HighQualityAnnouncementSystem
} from "./high-quality-announcements"

// Combined audio testing
export {
  quickTestCombined,
  fullTestCombined,
  testRepeatCombined,
  testDifferentTones,
  demonstrateSchoolDay,
  CombinedAudioTester
} from "./combined-audio-test"

// Simple combined audio tests
export {
  testCombinedAudio,
  testSchoolScenarios,
  testProfessionalAnnouncements,
  testClosingAnnouncement
} from "./test-combined-audio"

// Professional announcement demonstrations
export {
  demoClosingAnnouncement,
  demoAllAnnouncementTypes,
  showAnnouncementFormat
} from "./demo-professional-announcements"

// High-quality announcement testing
export {
  testHighQualityBasics,
  testAnnouncementCategories,
  testPremiumVoiceComparison,
  testRealWorldScenarios,
  quickPremiumDemo
} from "./test-high-quality-announcements"

// Simple announcement interface
export {
  announce,
  announceVoiceOnly,
  announceSchool,
  announceEmergency,
  announceWithVoice,
  announceRepeated,
  showVoices,
  testAnnouncements
} from "./announcement-interface"

// High-quality system demonstrations
export {
  demoHighQualitySystem,
  showSystemCapabilities,
  quickStartGuide
} from "./demo-high-quality-system"

// Complete Bell System (tone + voice combined)
export {
  CompleteBellSystem,
  playClassBell as playCompleteBellClass,
  playBreakBell as playCompleteBellBreak,
  playLunchBell as playCompleteBellLunch,
  playAssemblyBell as playCompleteBellAssembly,
  playDismissalBell as playCompleteBellDismissal,
  playEmergencyBell as playCompleteBellEmergency,
  playPrayerBell as playCompleteBellPrayer,
  playCustomBell as playCompleteBellCustom,
  testAllBellTypes,
  testAllVoices as testAllBellVoices,
  demonstrateSchoolDay as demonstrateBellSchoolDay,
  demonstrateEmergencyDrills,
  showAllBellOptions,
  getBellSystemStatus
} from "./complete-bell-system"

// Complete Bell System Testing
export {
  testCompleteBellSystem,
  testBellTypeVariations,
  testVoiceVariations,
  testSchoolScenarios as testBellSchoolScenarios,
  testRepeatFunctionality as testBellRepeatFunctionality,
  testEmergencySystem,
  quickBellSystemDemo,
  showTestMenu
} from "./test-complete-bell-system"

// Simple Bell System Interface
export {
  ringClassBell,
  ringBreakBell,
  ringLunchBell,
  ringAssemblyBell,
  ringDismissalBell,
  ringEmergencyBell,
  ringCustomBell,
  ringSchoolStart,
  ringSchoolEnd,
  ringPeriodChange,
  ringFireDrill,
  ringWeatherAlert,
  testBellSystem,
  showBellFunctions,
  quickBellDemo
} from "./bell-system-interface"

// Complete Bell System Demonstrations
export {
  demoCompleteBellSystem,
  showSystemCapabilities as showBellSystemCapabilities,
  demonstrateSchoolDay as demonstrateBellSystemSchoolDay,
  demonstrateEmergencySystem as demonstrateBellEmergencySystem,
  quickSystemOverview,
  testSystemIntegration
} from "./demo-complete-bell-system"

// Complete Bell System Summary
export {
  showCompleteBellSystemSummary,
  showQuickCommands
} from "./bell-system-summary"

// Integration Tests
export {
  testTimetableIntegration,
  testDashboardIntegration,
  testSystemStatus,
  runFullIntegrationTest
} from "./test-integration"

// Timetable Selection Features
export {
  showTimetableSelectionFeatures,
  showExampleTimetableConfigurations,
  showTimetableWorkflow
} from "./demo-timetable-selection"

// Fallback system
export {
  playWithSmartFallback,
  playAnnouncementWithFallback,
  playPrayerCallWithFallback,
  playBellWithFallback,
  getVoiceFallbackHandler,
  VoiceFallbackHandler
} from "./voice-fallback"

// Prayer call generation
export {
  generateSimplePrayerCall,
  generateTraditionalPrayerCall,
  generateSchoolPrayerCall,
  getPrayerCallGenerator,
  PrayerCallGenerator
} from "./prayer-call-generator"

// AI Voice Service
export {
  getAIVoiceService,
  initializeAIVoiceService,
  updateAIVoiceService,
  AIVoiceService
} from "./ai-voice-service"

// Types
export type {
  VoiceType,
  Language,
  SystemSettings
} from "./store"

export type {
  AIVoiceProvider,
  VoiceOptions,
  AIVoiceProfile,
  AIVoiceSettings,
  AudioGenerationRequest,
  UsageRecord,
  UsageStats,
  AIVoiceProviderType
} from "./ai-voice-types"

export type {
  VoiceOption
} from "./voice-selector"

export type {
  VoiceTestResult
} from "./voice-test"

export type {
  VoiceFallbackOptions,
  VoicePlaybackResult
} from "./voice-fallback"

export type {
  PrayerCallOptions,
  PrayerCallContent
} from "./prayer-call-generator"

// Quick setup function for new users
export const setupVoiceSystem = async (config?: {
  enableAI?: boolean
  apiKeys?: {
    openai?: string
    elevenlabs?: string
    azure?: { key: string; region: string }
  }
  testVoices?: boolean
}) => {
  console.log("🎤 Setting up Voice System...")
  
  // Import functions dynamically to avoid circular dependencies
  const { initializeVoiceSystem } = await import("./voice-initialization")
  const { enableAIVoice } = await import("./voice-initialization")
  const { quickDemo } = await import("./voice-demo")
  const { getVoiceStats } = await import("./voice-selector")
  const { quickTestAll } = await import("./voice-test")
  
  // Initialize the system
  await initializeVoiceSystem()
  
  // Enable AI if requested and API keys provided
  if (config?.enableAI && config?.apiKeys) {
    const success = await enableAIVoice(config.apiKeys)
    if (success) {
      console.log("✅ AI Voice enabled successfully")
    } else {
      console.log("❌ Failed to enable AI Voice")
    }
  }
  
  // Test voices if requested
  if (config?.testVoices) {
    console.log("🧪 Testing voices...")
    await quickDemo()
  }
  
  // Show system status
  const stats = getVoiceStats()
  console.log(`🎵 Voice System Ready!`)
  console.log(`   Total voices: ${stats.total}`)
  console.log(`   AI voices: ${stats.aiVoices}`)
  console.log(`   TTS voices: ${stats.ttsVoices}`)
  
  // Show available commands
  console.log("\n📋 Available commands:")
  console.log("   listVoices() - Show all available voices")
  console.log("   quickDemo() - Test one voice from each provider")
  console.log("   demoProvider('OpenAI') - Test all voices from a provider")
  console.log("   testSingleVoice('openai-nova') - Test a specific voice")
  console.log("   playTextToSpeech('Hello world', 'openai-nova') - Play text with a voice")
  
  return {
    stats,
    aiEnabled: config?.enableAI || false,
    testResults: config?.testVoices ? await quickTestAll() : null
  }
}