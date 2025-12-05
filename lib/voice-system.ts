// Main voice system exports - simplified and cleaned up

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

// Voice testing, demonstration, and repeat testing modules have been removed
// Use the production voice utilities and complete bell system instead

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

// Complete Bell System
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
  VoiceFallbackOptions,
  VoicePlaybackResult
} from "./voice-fallback"

export type {
  PrayerCallOptions,
  PrayerCallContent
} from "./prayer-call-generator"