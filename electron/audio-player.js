/**
 * Audio Player Module
 * 
 * Manages audio playback coordination between main and renderer processes.
 * Handles error logging, notifications, and audio device management.
 */

const { Notification } = require('electron');
const path = require('path');
const fs = require('fs').promises;

class AudioPlayer {
  constructor(mainWindow) {
    this.mainWindow = mainWindow;
    this.currentAudio = null;
    this.audioHistory = [];
    this.maxHistorySize = 100;

    console.log('[AudioPlayer] Initialized');
  }

  /**
   * Play audio with the given configuration
   * 
   * @param {Object} audioData - Audio data from scheduler
   * @returns {Promise<void>}
   */
  async playAudio(audioData) {
    try {
      console.log(`[AudioPlayer] Playing audio ${audioData.id}`);

      this.currentAudio = {
        ...audioData,
        startTime: new Date(),
        status: 'playing'
      };

      // Try to send to renderer process first (if window is available)
      if (this.mainWindow && !this.mainWindow.isDestroyed() && this.mainWindow.isVisible()) {
        console.log('[AudioPlayer] Window available, using renderer for playback');
        this.mainWindow.webContents.send('play-audio', audioData);
      } else {
        // Window not available - play audio in main process using native method
        console.log('[AudioPlayer] Window not available, using native playback');
        await this.playAudioNatively(audioData);
      }

      // Log the playback
      await this.logAudioPlayback(audioData, 'started');

    } catch (error) {
      console.error(`[AudioPlayer] Failed to play audio ${audioData.id}:`, error);

      // Log the error
      await this.logAudioPlayback(audioData, 'failed', error.message);

      // Show error notification
      this.showErrorNotification(audioData, error);

      // Rethrow to let scheduler know
      throw error;
    }
  }

  /**
   * Play audio natively in main process (for background playback)
   * Uses Windows PowerShell TTS (SAPI) for offline text-to-speech
   * 
   * @param {Object} audioData - Audio data from scheduler
   * @returns {Promise<void>}
   */
  async playAudioNatively(audioData) {
    const { exec } = require('child_process');
    const { promisify } = require('util');
    const execAsync = promisify(exec);
    const path = require('path');
    const fs = require('fs');

    try {
      // Get the audio file path from config
      const audioPath = audioData.config?.audioPath || audioData.config?.bellSound;

      // If we have an audio file, play it
      if (audioPath && fs.existsSync(audioPath)) {
        console.log(`[AudioPlayer] Playing audio file natively: ${audioPath}`);
        const command = `powershell -c "(New-Object Media.SoundPlayer '${audioPath}').PlaySync()"`;
        await execAsync(command, { timeout: 30000 });
        console.log('[AudioPlayer] Native playback completed');
        await this.audioCompleted(audioData.id, true);
        return;
      }

      // Check for default bell in resources (Production)
      const { app } = require('electron');
   * @param { string } audioId - Audio ID
        * @param { boolean } success - Whether playback succeeded
          * @param { string } error - Error message if failed
            */
  async audioCompleted(audioId, success, error = null) {
        if (this.currentAudio && this.currentAudio.id === audioId) {
          const duration = new Date() - this.currentAudio.startTime;

          console.log(`[AudioPlayer] Audio ${audioId} completed in ${duration}ms, success: ${success}`);

          // Log completion
          await this.logAudioPlayback(
            this.currentAudio,
            success ? 'completed' : 'failed',
            error,
            duration
          );

          // Add to history
          this.audioHistory.push({
            ...this.currentAudio,
            endTime: new Date(),
            duration,
            success,
            error
          });

          // Trim history if too large
          if (this.audioHistory.length > this.maxHistorySize) {
            this.audioHistory.shift();
          }

          this.currentAudio = null;
        }
      }

  /**
   * Log audio playback event
   * 
   * @param {Object} audioData - Audio data
   * @param {string} status - Status (started, completed, failed)
   * @param {string} error - Error message if applicable
   * @param {number} duration - Duration in milliseconds
   */
  async logAudioPlayback(audioData, status, error = null, duration = null) {
        const logEntry = {
          timestamp: new Date().toISOString(),
          audioId: audioData.id,
          status,
          config: audioData.config,
          error,
          duration
        };

        // Log to console
        console.log('[AudioPlayer] Log:', JSON.stringify(logEntry));

        // Could also write to a log file if needed
        // For now, just console logging is sufficient
      }

      /**
       * Show error notification to user
       * 
       * @param {Object} audioData - Audio data
       * @param {Error} error - Error object
       */
      showErrorNotification(audioData, error) {
        if (Notification.isSupported()) {
          new Notification({
            title: 'Audio Playback Error',
            body: `Failed to play audio: ${error.message}`,
            icon: path.join(__dirname, '../build/icon.png'),
            urgency: 'critical'
          }).show();
        }
      }

      /**
       * Get current audio status
       * 
       * @returns {Object|null}
       */
      getCurrentAudio() {
        return this.currentAudio;
      }

      /**
       * Get audio playback history
       * 
       * @param {number} limit - Maximum number of entries to return
       * @returns {Array}
       */
      getHistory(limit = 10) {
        return this.audioHistory.slice(-limit);
      }

      /**
       * Get audio playback statistics
       * 
       * @returns {Object}
       */
      getStatistics() {
        const total = this.audioHistory.length;
        const successful = this.audioHistory.filter(a => a.success).length;
        const failed = total - successful;

        const avgDuration = total > 0
          ? this.audioHistory.reduce((sum, a) => sum + (a.duration || 0), 0) / total
          : 0;

        return {
          total,
          successful,
          failed,
          successRate: total > 0 ? (successful / total * 100).toFixed(2) : 0,
          averageDuration: Math.round(avgDuration)
        };
      }

      /**
       * Clear audio history
       */
      clearHistory() {
        this.audioHistory = [];
        console.log('[AudioPlayer] History cleared');
      }

      /**
       * Get default audio output device info
       * Note: Electron/Chromium automatically uses the system default audio device
       * 
       * @returns {Object}
       */
      getDefaultAudioDevice() {
        // In Electron, audio playback in the renderer process automatically
        // uses the system's default audio output device
        return {
          name: 'System Default',
          description: 'Audio will play through the system default audio device',
          isDefault: true
        };
      }
    }

// Export factory function
let playerInstance = null;

    /**
     * Get or create audio player instance
     * 
     * @param {BrowserWindow} mainWindow - Main window instance
     * @returns {AudioPlayer}
     */
    function getAudioPlayer(mainWindow) {
      if (!playerInstance && mainWindow) {
        playerInstance = new AudioPlayer(mainWindow);
      } else if (playerInstance && mainWindow) {
        // Update window reference if needed
        playerInstance.mainWindow = mainWindow;
      }
      return playerInstance;
    }

    module.exports = {
      AudioPlayer,
      getAudioPlayer
    };
