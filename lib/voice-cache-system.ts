/**
 * Voice Cache System
 * 
 * Pre-generates and caches voice audio for offline playback
 * Uses high-quality online voices when available, stores for offline use
 */

import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface VoiceCacheDB extends DBSchema {
  'voice-cache': {
    key: string;
    value: {
      id: string;
      text: string;
      voice: string;
      audioBlob: Blob;
      timestamp: number;
      duration: number;
    };
  };
}

class VoiceCacheSystem {
  private db: IDBPDatabase<VoiceCacheDB> | null = null;
  private readonly DB_NAME = 'voice-cache-db';
  private readonly STORE_NAME = 'voice-cache';
  private readonly MAX_CACHE_SIZE = 100; // Maximum number of cached voices
  private readonly CACHE_EXPIRY_DAYS = 30; // Cache expires after 30 days

  async init(): Promise<void> {
    if (this.db) return;

    try {
      this.db = await openDB<VoiceCacheDB>(this.DB_NAME, 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('voice-cache')) {
            db.createObjectStore('voice-cache', { keyPath: 'id' });
          }
        },
      });
      console.log('[VoiceCache] Database initialized');
    } catch (error) {
      console.error('[VoiceCache] Failed to initialize database:', error);
    }
  }

  /**
   * Generate a unique cache key for text + voice combination
   */
  private generateCacheKey(text: string, voice: string): string {
    // Simple hash function for cache key
    const str = `${text}-${voice}`;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return `voice-${Math.abs(hash)}`;
  }

  /**
   * Check if voice audio is cached
   */
  async isCached(text: string, voice: string): Promise<boolean> {
    if (!this.db) await this.init();
    if (!this.db) return false;

    try {
      const key = this.generateCacheKey(text, voice);
      const cached = await this.db.get(this.STORE_NAME, key);
      
      if (!cached) return false;

      // Check if cache is expired
      const now = Date.now();
      const expiryTime = this.CACHE_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
      if (now - cached.timestamp > expiryTime) {
        // Cache expired, delete it
        await this.db.delete(this.STORE_NAME, key);
        return false;
      }

      return true;
    } catch (error) {
      console.error('[VoiceCache] Error checking cache:', error);
      return false;
    }
  }

  /**
   * Get cached voice audio
   */
  async getCached(text: string, voice: string): Promise<Blob | null> {
    if (!this.db) await this.init();
    if (!this.db) return null;

    try {
      const key = this.generateCacheKey(text, voice);
      const cached = await this.db.get(this.STORE_NAME, key);
      
      if (!cached) return null;

      // Check if cache is expired
      const now = Date.now();
      const expiryTime = this.CACHE_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
      if (now - cached.timestamp > expiryTime) {
        await this.db.delete(this.STORE_NAME, key);
        return null;
      }

      console.log(`[VoiceCache] Retrieved cached audio for: "${text.substring(0, 50)}..."`);
      return cached.audioBlob;
    } catch (error) {
      console.error('[VoiceCache] Error getting cached audio:', error);
      return null;
    }
  }

  /**
   * Cache voice audio for offline use
   */
  async cacheVoice(text: string, voice: string, audioBlob: Blob, duration: number): Promise<void> {
    if (!this.db) await this.init();
    if (!this.db) return;

    try {
      const key = this.generateCacheKey(text, voice);
      
      await this.db.put(this.STORE_NAME, {
        id: key,
        text,
        voice,
        audioBlob,
        timestamp: Date.now(),
        duration,
      });

      console.log(`[VoiceCache] Cached audio for: "${text.substring(0, 50)}..."`);

      // Clean up old cache if needed
      await this.cleanupOldCache();
    } catch (error) {
      console.error('[VoiceCache] Error caching audio:', error);
    }
  }

  /**
   * Generate and cache voice audio using online TTS
   */
  async generateAndCache(text: string, voice: string): Promise<Blob | null> {
    // Check if already cached
    const cached = await this.getCached(text, voice);
    if (cached) {
      console.log('[VoiceCache] Using cached audio');
      return cached;
    }

    // Check if online
    if (!navigator.onLine) {
      console.warn('[VoiceCache] Offline - cannot generate new audio');
      return null;
    }

    try {
      console.log('[VoiceCache] Generating new audio online...');
      
      // Use browser's Speech Synthesis to generate audio
      const audioBlob = await this.generateAudioFromTTS(text, voice);
      
      if (audioBlob) {
        // Cache for offline use
        await this.cacheVoice(text, voice, audioBlob, 0);
        return audioBlob;
      }

      return null;
    } catch (error) {
      console.error('[VoiceCache] Error generating audio:', error);
      return null;
    }
  }

  /**
   * Generate audio blob from browser TTS
   */
  private async generateAudioFromTTS(text: string, voice: string): Promise<Blob | null> {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window)) {
        resolve(null);
        return;
      }

      try {
        // Create audio context for recording
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const audioContext = new AudioContext();
        const dest = audioContext.createMediaStreamDestination();
        
        // Create media recorder
        const mediaRecorder = new MediaRecorder(dest.stream);
        const chunks: Blob[] = [];

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunks.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/webm' });
          resolve(blob);
        };

        // Start recording
        mediaRecorder.start();

        // Create speech synthesis utterance
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Try to find the best voice - PRIORITIZE MICROSOFT EDGE VOICES
        const voices = window.speechSynthesis.getVoices();
        
        // 1. First try Microsoft Edge Natural/Online voices (BEST QUALITY)
        let selectedVoice = voices.find(v => {
          const name = v.name.toLowerCase();
          return name.includes('microsoft') && 
                 (name.includes('natural') || name.includes('online'));
        });
        
        // 2. Fallback to Google voices (Chrome)
        if (!selectedVoice) {
          selectedVoice = voices.find(v => 
            v.name.toLowerCase().includes('google')
          );
        }
        
        // 3. Fallback to any Natural/Enhanced voice
        if (!selectedVoice) {
          selectedVoice = voices.find(v => {
            const name = v.name.toLowerCase();
            return name.includes('natural') || name.includes('enhanced');
          });
        }
        
        // 4. Use first available voice as last resort
        if (!selectedVoice) {
          selectedVoice = voices[0];
        }

        if (selectedVoice) {
          utterance.voice = selectedVoice;
          console.log(`[VoiceCache] Using voice: ${selectedVoice.name}`);
        }

        utterance.onend = () => {
          setTimeout(() => {
            mediaRecorder.stop();
            audioContext.close();
          }, 500);
        };

        utterance.onerror = () => {
          mediaRecorder.stop();
          audioContext.close();
          resolve(null);
        };

        // Speak
        window.speechSynthesis.speak(utterance);

      } catch (error) {
        console.error('[VoiceCache] Error recording TTS:', error);
        resolve(null);
      }
    });
  }

  /**
   * Play cached audio
   */
  async playCached(text: string, voice: string): Promise<boolean> {
    const audioBlob = await this.getCached(text, voice);
    if (!audioBlob) return false;

    try {
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      
      await new Promise<void>((resolve, reject) => {
        audio.onended = () => {
          URL.revokeObjectURL(audioUrl);
          resolve();
        };
        audio.onerror = () => {
          URL.revokeObjectURL(audioUrl);
          reject(new Error('Audio playback failed'));
        };
        audio.play();
      });

      return true;
    } catch (error) {
      console.error('[VoiceCache] Error playing cached audio:', error);
      return false;
    }
  }

  /**
   * Pre-cache common announcements
   */
  async preCacheCommonAnnouncements(announcements: Array<{ text: string; voice: string }>): Promise<void> {
    if (!navigator.onLine) {
      console.warn('[VoiceCache] Offline - cannot pre-cache');
      return;
    }

    console.log(`[VoiceCache] Pre-caching ${announcements.length} announcements...`);

    for (const { text, voice } of announcements) {
      const isCached = await this.isCached(text, voice);
      if (!isCached) {
        await this.generateAndCache(text, voice);
        // Add delay to avoid overwhelming the system
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    console.log('[VoiceCache] Pre-caching complete');
  }

  /**
   * Clean up old cache entries
   */
  private async cleanupOldCache(): Promise<void> {
    if (!this.db) return;

    try {
      const allKeys = await this.db.getAllKeys(this.STORE_NAME);
      
      if (allKeys.length > this.MAX_CACHE_SIZE) {
        // Get all entries
        const allEntries = await this.db.getAll(this.STORE_NAME);
        
        // Sort by timestamp (oldest first)
        allEntries.sort((a, b) => a.timestamp - b.timestamp);
        
        // Delete oldest entries
        const toDelete = allEntries.slice(0, allEntries.length - this.MAX_CACHE_SIZE);
        for (const entry of toDelete) {
          await this.db.delete(this.STORE_NAME, entry.id);
        }
        
        console.log(`[VoiceCache] Cleaned up ${toDelete.length} old cache entries`);
      }
    } catch (error) {
      console.error('[VoiceCache] Error cleaning up cache:', error);
    }
  }

  /**
   * Clear all cached voices
   */
  async clearCache(): Promise<void> {
    if (!this.db) await this.init();
    if (!this.db) return;

    try {
      await this.db.clear(this.STORE_NAME);
      console.log('[VoiceCache] Cache cleared');
    } catch (error) {
      console.error('[VoiceCache] Error clearing cache:', error);
    }
  }

  /**
   * Get cache statistics
   */
  async getCacheStats(): Promise<{ count: number; totalSize: number }> {
    if (!this.db) await this.init();
    if (!this.db) return { count: 0, totalSize: 0 };

    try {
      const allEntries = await this.db.getAll(this.STORE_NAME);
      const totalSize = allEntries.reduce((sum, entry) => sum + entry.audioBlob.size, 0);
      
      return {
        count: allEntries.length,
        totalSize,
      };
    } catch (error) {
      console.error('[VoiceCache] Error getting cache stats:', error);
      return { count: 0, totalSize: 0 };
    }
  }
}

// Export singleton instance
export const voiceCacheSystem = new VoiceCacheSystem();

// Initialize on module load
if (typeof window !== 'undefined') {
  voiceCacheSystem.init().catch(console.error);
}
