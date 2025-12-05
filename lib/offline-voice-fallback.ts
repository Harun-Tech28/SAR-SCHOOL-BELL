/**
 * Offline Voice Fallback Chain
 * 
 * Implements a fallback strategy for offline voice synthesis.
 * Tries engines in order until one succeeds.
 */

import { getOfflineVoiceService, type VoiceOptions } from './offline-voice-service';

export interface VoiceFallbackOptions extends VoiceOptions {
  preferredVoice?: string;
  fallbackVoices?: string[];
  language?: string;
}

export interface VoiceFallbackResult {
  success: boolean;
  engine: string;
  voiceUsed: string;
  error?: string;
}

export class OfflineVoiceFallbackChain {
  private service = getOfflineVoiceService();

  /**
   * Generate speech with automatic fallback
   */
  async generateWithFallback(
    text: string,
    options?: VoiceFallbackOptions
  ): Promise<VoiceFallbackResult> {
    await this.service.initialize();

    const voices = await this.getVoiceChain(options);

    for (const voice of voices) {
      try {
        await this.service.playTextToSpeech(text, {
          voice,
          speed: options?.speed,
          pitch: options?.pitch,
          volume: options?.volume
        });

        return {
          success: true,
          engine: this.getEngineFromVoiceId(voice),
          voiceUsed: voice
        };
      } catch (error) {
        console.warn(`Voice ${voice} failed, trying next...`, error);
        continue;
      }
    }

    // All voices failed
    return {
      success: false,
      engine: 'none',
      voiceUsed: 'none',
      error: 'All voice engines failed. Ensure system voices are available.'
    };
  }

  /**
   * Get recommended fallback chain for a language
   */
  getRecommendedChain(language: string): string[] {
    const chain: string[] = [];

    // Get all available voices
    const allVoices = this.service.getAvailableVoices();

    allVoices.then(voices => {
      // Filter by language
      const languageVoices = voices.filter(v => 
        v.language.startsWith(language) || 
        v.language.startsWith(language.split('-')[0])
      );

      // Sort by quality (high to low)
      languageVoices.sort((a, b) => {
        const qualityOrder = { high: 3, medium: 2, low: 1 };
        return qualityOrder[b.quality] - qualityOrder[a.quality];
      });

      // Add to chain
      for (const voice of languageVoices) {
        chain.push(voice.id);
      }
    });

    return chain;
  }

  /**
   * Build voice chain from options
   */
  private async getVoiceChain(options?: VoiceFallbackOptions): Promise<string[]> {
    const chain: string[] = [];

    // 1. Add preferred voice if specified
    if (options?.preferredVoice) {
      chain.push(options.preferredVoice);
    }

    // 2. Add explicit fallback voices
    if (options?.fallbackVoices) {
      chain.push(...options.fallbackVoices);
    }

    // 3. Add language-based fallbacks
    if (options?.language) {
      const languageChain = await this.getLanguageBasedChain(options.language);
      chain.push(...languageChain);
    }

    // 4. Add default system voice as final fallback
    const allVoices = await this.service.getAvailableVoices();
    if (allVoices.length > 0 && !chain.includes(allVoices[0].id)) {
      chain.push(allVoices[0].id);
    }

    // Remove duplicates while preserving order
    return [...new Set(chain)];
  }

  /**
   * Get language-based fallback chain
   */
  private async getLanguageBasedChain(language: string): Promise<string[]> {
    const allVoices = await this.service.getAvailableVoices();
    
    // Filter voices by language
    const languageVoices = allVoices.filter(v => 
      v.language.startsWith(language) || 
      v.language.startsWith(language.split('-')[0])
    );

    // Sort by quality (high to low)
    languageVoices.sort((a, b) => {
      const qualityOrder = { high: 3, medium: 2, low: 1 };
      return qualityOrder[b.quality] - qualityOrder[a.quality];
    });

    return languageVoices.map(v => v.id);
  }

  /**
   * Extract engine name from voice ID
   */
  private getEngineFromVoiceId(voiceId: string): string {
    if (voiceId.startsWith('webspeech:')) return 'Web Speech API';
    if (voiceId.startsWith('piper:')) return 'Piper TTS';
    if (voiceId.startsWith('espeak:')) return 'eSpeak-NG';
    return 'Unknown';
  }

  /**
   * Test all voices in the fallback chain
   */
  async testFallbackChain(options?: VoiceFallbackOptions): Promise<{
    voice: string;
    available: boolean;
    error?: string;
  }[]> {
    const chain = await this.getVoiceChain(options);
    const results: { voice: string; available: boolean; error?: string }[] = [];

    for (const voice of chain) {
      try {
        const available = await this.service.testVoice(voice);
        results.push({ voice, available });
      } catch (error) {
        results.push({
          voice,
          available: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    return results;
  }
}

// Global instance
let fallbackChainInstance: OfflineVoiceFallbackChain | null = null;

/**
 * Get the global fallback chain instance
 */
export function getOfflineVoiceFallbackChain(): OfflineVoiceFallbackChain {
  if (!fallbackChainInstance) {
    fallbackChainInstance = new OfflineVoiceFallbackChain();
  }
  return fallbackChainInstance;
}

/**
 * Quick helper to play text with automatic fallback
 */
export async function playTextWithFallback(
  text: string,
  options?: VoiceFallbackOptions
): Promise<VoiceFallbackResult> {
  const chain = getOfflineVoiceFallbackChain();
  return chain.generateWithFallback(text, options);
}
