/**
 * Electron Audio Handler
 * 
 * Handles audio playback in the renderer process for Electron.
 * Listens for play-audio events from main process and plays audio using Web Audio API.
 */

import { isElectron } from './electron-utils';

interface AudioData {
  id: string;
  config: {
    type?: 'bell' | 'announcement' | 'combined';
    bellSound?: string;
    announcement?: string;
    voice?: string;
    repeat?: number;
    title?: string;
  };
  scheduledTime?: Date;
  immediate?: boolean;
}

class ElectronAudioHandler {
  private initialized = false;
  private audioContext: AudioContext | null = null;

  /**
   * Initialize the audio handler
   * Sets up event listeners for audio playback
   */
  initialize() {
    if (this.initialized || !isElectron()) {
      return;
    }

    console.log('[ElectronAudioHandler] Initializing');

    // Listen for play-audio events from main process
    if (window.electronAPI?.onPlayAudio) {
      window.electronAPI.onPlayAudio((audioData: AudioData) => {
        this.handlePlayAudio(audioData);
      });
    }

    this.initialized = true;
    console.log('[ElectronAudioHandler] Initialized');
  }

  /**
   * Handle audio playback request
   */
  private async handlePlayAudio(audioData: AudioData) {
    console.log(`[ElectronAudioHandler] Playing audio ${audioData.id}`, audioData.config);

    try {
      // Initialize audio context if needed
      if (!this.audioContext) {
        this.audioContext = new AudioContext();
      }

      // Resume audio context if suspended (browser autoplay policy)
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      // Play the audio based on type
      await this.playAudioByType(audioData);

      // Notify main process of successful completion
      this.notifyCompletion(audioData.id, true);

    } catch (error) {
      console.error(`[ElectronAudioHandler] Failed to play audio ${audioData.id}:`, error);
      
      // Notify main process of failure
      this.notifyCompletion(audioData.id, false, error instanceof Error ? error.message : 'Unknown error');
    }
  }

  /**
   * Play audio based on its type
   */
  private async playAudioByType(audioData: AudioData) {
    const { config } = audioData;

    switch (config.type) {
      case 'bell':
        await this.playBellSound(config.bellSound || 'default', config.repeat || 1);
        break;

      case 'announcement':
        await this.playAnnouncement(config.announcement || '', config.voice);
        break;

      case 'combined':
        // Play bell first, then announcement
        await this.playBellSound(config.bellSound || 'default', config.repeat || 1);
        if (config.announcement) {
          await this.playAnnouncement(config.announcement, config.voice);
        }
        break;

      default:
        // Default to bell sound
        await this.playBellSound('default', 1);
    }
  }

  /**
   * Play a bell sound
   */
  private async playBellSound(bellSound: string, repeat: number): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        // Use the existing bell sound system
        // This assumes bell sounds are available in the public directory
        const audio = new Audio(`/sounds/${bellSound}.mp3`);
        
        let playCount = 0;

        const playNext = () => {
          playCount++;
          if (playCount < repeat) {
            audio.currentTime = 0;
            audio.play().catch(reject);
          } else {
            resolve();
          }
        };

        audio.addEventListener('ended', playNext);
        audio.addEventListener('error', (e) => {
          reject(new Error(`Failed to load bell sound: ${bellSound}`));
        });

        audio.play().catch(reject);

      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Play an announcement using text-to-speech
   */
  private async playAnnouncement(text: string, voice?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        // Use Web Speech API for text-to-speech
        const utterance = new SpeechSynthesisUtterance(text);

        // Set voice if specified
        if (voice) {
          const voices = speechSynthesis.getVoices();
          const selectedVoice = voices.find(v => v.name === voice || v.voiceURI === voice);
          if (selectedVoice) {
            utterance.voice = selectedVoice;
          }
        }

        utterance.onend = () => resolve();
        utterance.onerror = (event) => reject(new Error(`Speech synthesis error: ${event.error}`));

        speechSynthesis.speak(utterance);

      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Notify main process that audio playback completed
   */
  private notifyCompletion(audioId: string, success: boolean, error?: string) {
    if (window.electronAPI?.audioPlaybackComplete) {
      window.electronAPI.audioPlaybackComplete(audioId, success, error);
      console.log(`[ElectronAudioHandler] Notified completion: ${audioId}, success: ${success}`);
    }
  }

  /**
   * Clean up resources
   */
  cleanup() {
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    this.initialized = false;
  }
}

// Singleton instance
let handlerInstance: ElectronAudioHandler | null = null;

/**
 * Get the electron audio handler instance
 */
export function getElectronAudioHandler(): ElectronAudioHandler {
  if (!handlerInstance) {
    handlerInstance = new ElectronAudioHandler();
  }
  return handlerInstance;
}

/**
 * Initialize electron audio handler
 * Should be called once when the app starts
 */
export function initializeElectronAudio() {
  if (isElectron()) {
    const handler = getElectronAudioHandler();
    handler.initialize();
  }
}
