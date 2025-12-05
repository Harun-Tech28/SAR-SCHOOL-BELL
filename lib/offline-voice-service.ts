/**
 * Offline Voice Service
 * 
 * Provides text-to-speech synthesis using only offline/local engines.
 * No internet connection required.
 */

export interface OfflineVoice {
  id: string;
  name: string;
  language: string;
  gender: 'male' | 'female' | 'neutral';
  engine: 'webspeech' | 'espeak' | 'piper' | 'system';
  quality: 'low' | 'medium' | 'high';
  local: true;
}

export interface OfflineEngineStatus {
  webSpeech: { available: boolean; voiceCount: number };
  espeak: { available: boolean; voiceCount: number };
  piper: { available: boolean; voiceCount: number };
  system: { available: boolean; voiceCount: number };
}

export interface VoiceOptions {
  voice?: string;
  language?: string;
  speed?: number;
  pitch?: number;
  volume?: number;
}

export class OfflineVoiceService {
  private webSpeechVoices: SpeechSynthesisVoice[] = [];
  private initialized: boolean = false;
  private initPromise: Promise<void> | null = null;

  constructor() {
    // Initialize will be called explicitly
  }

  /**
   * Initialize the offline voice service
   */
  async initialize(): Promise<void> {
    if (this.initialized) return;
    if (this.initPromise) return this.initPromise;

    this.initPromise = this._initialize();
    await this.initPromise;
  }

  private async _initialize(): Promise<void> {
    console.log('🎤 Initializing Offline Voice Service...');

    // Initialize Web Speech API
    await this.initializeWebSpeech();

    // TODO: Initialize Piper TTS (if available)
    // TODO: Initialize eSpeak-NG (if available)

    this.initialized = true;
    console.log('✅ Offline Voice Service initialized');
  }

  /**
   * Initialize Web Speech API voices
   */
  private async initializeWebSpeech(): Promise<void> {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Web Speech API not available');
      return;
    }

    // Load voices
    return new Promise((resolve) => {
      const loadVoices = () => {
        this.webSpeechVoices = window.speechSynthesis.getVoices();

        if (this.webSpeechVoices.length > 0) {
          console.log(`✓ Web Speech API: ${this.webSpeechVoices.length} voices loaded`);
          resolve();
        }
      };

      // Voices might load asynchronously
      loadVoices();

      if (this.webSpeechVoices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
          loadVoices();
        };

        // Timeout after 2 seconds
        setTimeout(() => {
          if (this.webSpeechVoices.length === 0) {
            console.warn('No Web Speech API voices loaded after timeout');
          }
          resolve();
        }, 2000);
      }
    });
  }

  /**
   * Get all available offline voices
   */
  async getAvailableVoices(): Promise<OfflineVoice[]> {
    await this.initialize();

    const voices: OfflineVoice[] = [];

    // Add Web Speech API voices
    for (const voice of this.webSpeechVoices) {
      voices.push({
        id: `webspeech:${voice.name}`,
        name: voice.name,
        language: voice.lang,
        gender: this.detectGender(voice.name),
        engine: 'webspeech',
        quality: this.detectQuality(voice.name),
        local: true
      });
    }

    // TODO: Add Piper voices
    // TODO: Add eSpeak voices

    return voices;
  }

  /**
   * Generate speech using offline engines
   */
  async generateSpeech(
    text: string,
    options?: VoiceOptions
  ): Promise<AudioBuffer> {
    await this.initialize();

    // Try Web Speech API first
    try {
      return await this.generateWebSpeech(text, options);
    } catch (error) {
      console.error('Web Speech API failed:', error);

      // TODO: Try Piper TTS
      // TODO: Try eSpeak-NG

      throw new Error('All offline voice engines failed');
    }
  }

  /**
   * Generate speech using Web Speech API
   * Note: Returns a promise that resolves when speech completes
   * For actual AudioBuffer, use playWebSpeech instead
   */
  private async generateWebSpeech(
    text: string,
    options?: VoiceOptions
  ): Promise<AudioBuffer> {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      throw new Error('Web Speech API not available');
    }

    // Web Speech API doesn't provide AudioBuffer directly
    // We'll create a minimal buffer as a placeholder
    // The actual speech will be played directly via speechSynthesis
    const audioContext = new AudioContext();
    const buffer = audioContext.createBuffer(1, audioContext.sampleRate, audioContext.sampleRate);

    // Play the speech
    await this.playWebSpeech(text, options);

    return buffer;
  }

  /**
   * Play speech using Web Speech API (direct playback)
   */
  async playWebSpeech(text: string, options?: VoiceOptions): Promise<void> {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      throw new Error('Web Speech API not available');
    }

    return new Promise((resolve, reject) => {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      // Set voice
      if (options?.voice) {
        const voiceId = options.voice.replace('webspeech:', '');
        const voice = this.webSpeechVoices.find(v => v.name === voiceId);
        if (voice) {
          utterance.voice = voice;
        }
      } else if (options?.language) {
        const voice = this.webSpeechVoices.find(v => v.lang.startsWith(options.language!));
        if (voice) {
          utterance.voice = voice;
        }
      }

      // Set options
      if (options?.speed) utterance.rate = options.speed;
      if (options?.pitch) utterance.pitch = options.pitch;
      if (options?.volume) utterance.volume = options.volume;

      utterance.onend = () => {
        resolve();
      };

      utterance.onerror = (event) => {
        reject(new Error(`Speech synthesis failed: ${event.error}`));
      };

      window.speechSynthesis.speak(utterance);
    });
  }

  /**
   * Play text-to-speech directly (recommended for Web Speech API)
   */
  async playTextToSpeech(text: string, options?: VoiceOptions): Promise<void> {
    await this.initialize();

    // Try Web Speech API first
    try {
      await this.playWebSpeech(text, options);
      return;
    } catch (error) {
      console.error('Web Speech API failed:', error);

      // TODO: Try Piper TTS
      // TODO: Try eSpeak-NG

      throw new Error('All offline voice engines failed');
    }
  }

  /**
   * Test if a voice is available
   */
  async testVoice(voiceId: string): Promise<boolean> {
    await this.initialize();

    try {
      await this.playWebSpeech('Test', { voice: voiceId });
      return true;
    } catch (error) {
      console.error(`Voice test failed for ${voiceId}:`, error);
      return false;
    }
  }

  /**
   * Get engine status
   */
  async getEngineStatus(): Promise<OfflineEngineStatus> {
    await this.initialize();

    return {
      webSpeech: {
        available: this.webSpeechVoices.length > 0,
        voiceCount: this.webSpeechVoices.length
      },
      espeak: {
        available: false, // TODO: Check if eSpeak is available
        voiceCount: 0
      },
      piper: {
        available: false, // TODO: Check if Piper is available
        voiceCount: 0
      },
      system: {
        available: this.webSpeechVoices.length > 0,
        voiceCount: this.webSpeechVoices.length
      }
    };
  }

  /**
   * Detect gender from voice name (heuristic)
   */
  private detectGender(name: string): 'male' | 'female' | 'neutral' {
    const nameLower = name.toLowerCase();

    // Common male voice names
    const maleNames = ['david', 'mark', 'james', 'alex', 'daniel', 'george', 'richard', 'paul', 'stefan', 'heami'];
    if (maleNames.some(n => nameLower.includes(n))) return 'male';

    // Common female voice names
    const femaleNames = ['zira', 'hazel', 'susan', 'samantha', 'victoria', 'karen', 'linda', 'sarah', 'heather', 'ravi'];
    if (femaleNames.some(n => nameLower.includes(n))) return 'female';

    return 'neutral';
  }

  /**
   * Detect quality from voice name (heuristic)
   */
  private detectQuality(name: string): 'low' | 'medium' | 'high' {
    const nameLower = name.toLowerCase();

    if (nameLower.includes('premium') || nameLower.includes('enhanced') || nameLower.includes('natural')) {
      return 'high';
    }

    if (nameLower.includes('microsoft')) {
      return 'medium'; // Microsoft offline voices are generally better than basic
    }

    if (nameLower.includes('basic') || nameLower.includes('compact')) {
      return 'low';
    }

    return 'medium';
  }
}

// Global instance
let offlineVoiceServiceInstance: OfflineVoiceService | null = null;

/**
 * Get the global offline voice service instance
 */
export function getOfflineVoiceService(): OfflineVoiceService {
  if (!offlineVoiceServiceInstance) {
    offlineVoiceServiceInstance = new OfflineVoiceService();
  }
  return offlineVoiceServiceInstance;
}

/**
 * Initialize the offline voice service
 */
export async function initializeOfflineVoiceService(): Promise<OfflineVoiceService> {
  const service = getOfflineVoiceService();
  await service.initialize();
  return service;
}
