/**
 * Audio Scheduler Module
 * 
 * Manages scheduled audio playback with timer-based triggering.
 * Provides 1-second accuracy for scheduled events and maintains
 * an audio queue for multiple simultaneous requests.
 */

const { EventEmitter } = require('events');

class AudioScheduler extends EventEmitter {
  constructor() {
    super();
    
    // Map of scheduled audio: id -> { time, config, timeout }
    this.scheduledAudio = new Map();
    
    // Audio queue for simultaneous requests
    this.audioQueue = [];
    
    // Currently playing audio
    this.currentlyPlaying = null;
    
    // ID counter for scheduled audio
    this.nextId = 1;
    
    // Check interval for scheduled audio (every second)
    this.checkInterval = null;
    
    console.log('[AudioScheduler] Initialized');
  }

  /**
   * Start the scheduler
   */
  start() {
    if (this.checkInterval) {
      return;
    }

    // Check every second for scheduled audio
    this.checkInterval = setInterval(() => {
      this.checkScheduledAudio();
    }, 1000);

    console.log('[AudioScheduler] Started');
  }

  /**
   * Stop the scheduler
   */
  stop() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }

    // Clear all scheduled audio
    for (const [id, scheduled] of this.scheduledAudio.entries()) {
      if (scheduled.timeout) {
        clearTimeout(scheduled.timeout);
      }
    }
    this.scheduledAudio.clear();

    console.log('[AudioScheduler] Stopped');
  }

  /**
   * Schedule audio to play at a specific time
   * 
   * @param {Date} time - When to play the audio
   * @param {Object} config - Audio configuration
   * @returns {string} - Scheduled audio ID
   */
  scheduleAudio(time, config) {
    const now = new Date();
    const scheduledTime = new Date(time);

    // Validate time is in the future
    if (scheduledTime <= now) {
      throw new Error('Scheduled time must be in the future');
    }

    // Generate unique ID
    const id = `audio_${this.nextId++}`;

    // Calculate delay in milliseconds
    const delay = scheduledTime.getTime() - now.getTime();

    // Create timeout for the scheduled audio
    const timeout = setTimeout(() => {
      this.triggerScheduledAudio(id);
    }, delay);

    // Store scheduled audio
    this.scheduledAudio.set(id, {
      id,
      time: scheduledTime,
      config,
      timeout,
      status: 'scheduled'
    });

    console.log(`[AudioScheduler] Scheduled audio ${id} for ${scheduledTime.toISOString()}`);

    return id;
  }

  /**
   * Cancel scheduled audio
   * 
   * @param {string} id - Scheduled audio ID
   * @returns {boolean} - True if cancelled, false if not found
   */
  cancelScheduledAudio(id) {
    const scheduled = this.scheduledAudio.get(id);
    
    if (!scheduled) {
      console.warn(`[AudioScheduler] Cannot cancel: audio ${id} not found`);
      return false;
    }

    // Clear timeout
    if (scheduled.timeout) {
      clearTimeout(scheduled.timeout);
    }

    // Remove from scheduled audio
    this.scheduledAudio.delete(id);

    console.log(`[AudioScheduler] Cancelled audio ${id}`);

    return true;
  }

  /**
   * Get all upcoming scheduled audio
   * 
   * @returns {Array} - Array of scheduled audio objects
   */
  getUpcomingSchedules() {
    const now = new Date();
    const upcoming = [];

    for (const [id, scheduled] of this.scheduledAudio.entries()) {
      if (scheduled.time > now) {
        upcoming.push({
          id: scheduled.id,
          time: scheduled.time.toISOString(),
          config: scheduled.config,
          status: scheduled.status
        });
      }
    }

    // Sort by time
    upcoming.sort((a, b) => new Date(a.time) - new Date(b.time));

    return upcoming;
  }

  /**
   * Check for scheduled audio that should be triggered
   * Called every second by the check interval
   */
  checkScheduledAudio() {
    const now = new Date();

    for (const [id, scheduled] of this.scheduledAudio.entries()) {
      // Check if scheduled time has passed (with 1-second tolerance)
      const timeDiff = scheduled.time.getTime() - now.getTime();
      
      if (timeDiff <= 1000 && timeDiff >= -1000 && scheduled.status === 'scheduled') {
        // Mark as triggered to prevent duplicate triggers
        scheduled.status = 'triggered';
        
        // Trigger immediately
        this.triggerScheduledAudio(id);
      }
    }
  }

  /**
   * Trigger scheduled audio playback
   * 
   * @param {string} id - Scheduled audio ID
   */
  triggerScheduledAudio(id) {
    const scheduled = this.scheduledAudio.get(id);
    
    if (!scheduled) {
      console.warn(`[AudioScheduler] Cannot trigger: audio ${id} not found`);
      return;
    }

    console.log(`[AudioScheduler] Triggering audio ${id}`);

    // Add to queue
    this.audioQueue.push({
      id: scheduled.id,
      config: scheduled.config,
      scheduledTime: scheduled.time
    });

    // Remove from scheduled audio
    this.scheduledAudio.delete(id);

    // Emit event for audio playback
    this.emit('audio-trigger', {
      id: scheduled.id,
      config: scheduled.config,
      scheduledTime: scheduled.time
    });

    // Process queue
    this.processQueue();
  }

  /**
   * Play audio immediately (not scheduled)
   * 
   * @param {Object} config - Audio configuration
   * @returns {Promise<void>}
   */
  async playAudioNow(config) {
    const id = `immediate_${this.nextId++}`;

    console.log(`[AudioScheduler] Playing audio immediately: ${id}`);

    // Add to queue
    this.audioQueue.push({
      id,
      config,
      immediate: true
    });

    // Emit event for audio playback
    this.emit('audio-trigger', {
      id,
      config,
      immediate: true
    });

    // Process queue
    this.processQueue();
  }

  /**
   * Process the audio queue
   * Plays audio in order, one at a time
   */
  processQueue() {
    // If already playing, wait for it to finish
    if (this.currentlyPlaying) {
      console.log('[AudioScheduler] Audio already playing, queued');
      return;
    }

    // Get next audio from queue
    const nextAudio = this.audioQueue.shift();
    
    if (!nextAudio) {
      return;
    }

    // Mark as currently playing
    this.currentlyPlaying = nextAudio;

    console.log(`[AudioScheduler] Processing audio ${nextAudio.id} from queue`);

    // Emit event to play audio
    this.emit('play-audio', nextAudio);
  }

  /**
   * Mark current audio as finished
   * Called by the audio playback module when audio completes
   */
  audioFinished() {
    if (this.currentlyPlaying) {
      console.log(`[AudioScheduler] Audio ${this.currentlyPlaying.id} finished`);
      this.currentlyPlaying = null;
    }

    // Process next in queue
    if (this.audioQueue.length > 0) {
      this.processQueue();
    }
  }

  /**
   * Get current queue status
   * 
   * @returns {Object} - Queue status
   */
  getQueueStatus() {
    return {
      currentlyPlaying: this.currentlyPlaying ? {
        id: this.currentlyPlaying.id,
        config: this.currentlyPlaying.config
      } : null,
      queueLength: this.audioQueue.length,
      scheduledCount: this.scheduledAudio.size
    };
  }

  /**
   * Clear all scheduled audio and queue
   */
  clearAll() {
    // Cancel all scheduled audio
    for (const [id] of this.scheduledAudio.entries()) {
      this.cancelScheduledAudio(id);
    }

    // Clear queue
    this.audioQueue = [];
    this.currentlyPlaying = null;

    console.log('[AudioScheduler] Cleared all scheduled audio and queue');
  }
}

// Singleton instance
let schedulerInstance = null;

/**
 * Get the audio scheduler instance
 * 
 * @returns {AudioScheduler}
 */
function getAudioScheduler() {
  if (!schedulerInstance) {
    schedulerInstance = new AudioScheduler();
    schedulerInstance.start();
  }
  return schedulerInstance;
}

module.exports = {
  AudioScheduler,
  getAudioScheduler
};
