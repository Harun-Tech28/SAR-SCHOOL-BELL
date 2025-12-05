/**
 * Voice Utils - Offline Edition
 * 
 * This module provides voice synthesis using offline engines only.
 * Replaces AI voice service with offline voice service for Electron.
 */

import type { Language, VoiceType } from "./store";
import { isElectron } from "./electron-utils";
import { playTextWithFallback } from "./offline-voice-fallback";
import { getOfflineVoiceService } from "./offline-voice-service";

// Re-export voice options and language names for compatibility
export { VOICE_OPTIONS, LANGUAGE_NAMES } from "./voice-utils";

/**
 * Play text-to-speech using offline voice engines
 * This is the main function that replaces the AI voice service
 */
export async function playTextToSpeechOffline(
  text: string,
  voice: VoiceType,
  language: Language = "english",
  repeatCount?: number
): Promise<boolean> {
  // Get repeat count from store settings if not provided
  const { useStore } = await import("./store");
  const settings = useStore.getState().settings;
  const timesToRepeat = repeatCount ?? settings.defaultRepeatCount ?? 1;

  console.log(`[Offline] Playing text ${timesToRepeat} time(s): "${text.substring(0, 50)}..."`);

  let allSuccessful = true;

  for (let i = 0; i < timesToRepeat; i++) {
    console.log(`[Offline] Playing repetition ${i + 1} of ${timesToRepeat}`);

    try {
      // Use offline voice service with fallback
      const result = await playTextWithFallback(text, {
        language: getLanguageCode(language),
        speed: 1.0,
        pitch: 1.0,
        volume: 1.0
      });

      if (!result.success) {
        console.error(`[Offline] Repetition ${i + 1} failed:`, result.error);
        allSuccessful = false;
      } else {
        console.log(`[Offline] Repetition ${i + 1} succeeded using ${result.engine}`);
      }
    } catch (error) {
      console.error(`[Offline] Voice synthesis failed:`, error);
      allSuccessful = false;
    }

    // Add delay between repetitions (except for the last one)
    if (i < timesToRepeat - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    }
  }

  console.log(`[Offline] Completed ${timesToRepeat} repetitions. Success: ${allSuccessful}`);
  return allSuccessful;
}

/**
 * Play announcement with offline voice
 */
export async function playAnnouncementOffline(
  text: string,
  options?: {
    voice?: VoiceType;
    language?: Language;
    repeatCount?: number;
  }
): Promise<boolean> {
  const voice = options?.voice || "standard-female";
  const language = options?.language || "english";
  const repeatCount = options?.repeatCount;

  return playTextToSpeechOffline(text, voice, language, repeatCount);
}

/**
 * Get language code for voice synthesis
 */
function getLanguageCode(language: Language): string {
  const languageCodes: Record<Language, string> = {
    english: "en-US",
    hausa: "ha",
    twi: "tw",
    arabic: "ar"
  };

  return languageCodes[language] || "en-US";
}

/**
 * Check if offline voice is available
 */
export async function isOfflineVoiceAvailable(): Promise<boolean> {
  try {
    const service = getOfflineVoiceService();
    await service.initialize();
    const status = await service.getEngineStatus();
    
    return status.webSpeech.available || 
           status.piper.available || 
           status.espeak.available;
  } catch (error) {
    console.error("[Offline] Failed to check voice availability:", error);
    return false;
  }
}

/**
 * Get available offline voices
 */
export async function getAvailableOfflineVoices() {
  try {
    const service = getOfflineVoiceService();
    await service.initialize();
    return await service.getAvailableVoices();
  } catch (error) {
    console.error("[Offline] Failed to get available voices:", error);
    return [];
  }
}

/**
 * Get voice system status for offline mode
 */
export async function getOfflineVoiceSystemStatus() {
  const available = await isOfflineVoiceAvailable();
  const voices = await getAvailableOfflineVoices();
  const service = getOfflineVoiceService();
  await service.initialize();
  const status = await service.getEngineStatus();

  return {
    available,
    voiceCount: voices.length,
    engines: status,
    mode: 'offline' as const
  };
}
