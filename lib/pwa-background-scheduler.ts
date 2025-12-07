/**
 * PWA Background Scheduler
 * Handles background bell scheduling for PWA version
 */

export class PWABackgroundScheduler {
  private static instance: PWABackgroundScheduler;
  private scheduledBells: Map<string, number> = new Map();

  private constructor() {
    this.setupMessageListener();
  }

  static getInstance(): PWABackgroundScheduler {
    if (!PWABackgroundScheduler.instance) {
      PWABackgroundScheduler.instance = new PWABackgroundScheduler();
    }
    return PWABackgroundScheduler.instance;
  }

  /**
   * Schedule a bell to play at a specific time
   */
  scheduleBell(time: Date, config: any): string {
    const id = `bell_${Date.now()}`;
    const now = new Date();
    const delay = time.getTime() - now.getTime();

    if (delay <= 0) {
      console.warn('[PWA Scheduler] Time is in the past');
      return '';
    }

    // Schedule using setTimeout
    const timeoutId = window.setTimeout(() => {
      this.playBell(config);
      this.scheduledBells.delete(id);
    }, delay);

    this.scheduledBells.set(id, timeoutId);

    // Also notify service worker
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'SCHEDULE_BELL',
        time: time.toISOString(),
        config
      });
    }

    console.log(`[PWA Scheduler] Bell scheduled for ${time.toISOString()}`);
    return id;
  }

  /**
   * Cancel a scheduled bell
   */
  cancelBell(id: string): boolean {
    const timeoutId = this.scheduledBells.get(id);
    if (timeoutId) {
      window.clearTimeout(timeoutId);
      this.scheduledBells.delete(id);
      console.log(`[PWA Scheduler] Bell ${id} cancelled`);
      return true;
    }
    return false;
  }

  /**
   * Play bell immediately
   */
  private async playBell(config: any) {
    console.log('[PWA Scheduler] Playing bell');

    // Show notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('School Bell', {
        body: config.announcement || 'Bell is ringing',
        icon: '/icon-192x192.svg',
        badge: '/icon-192x192.svg',
        tag: 'bell-notification',
      });
    }

    // Play audio
    try {
      const audio = new Audio(config.bellSound || config.audioPath);
      audio.volume = config.volume || 1.0;
      await audio.play();
    } catch (error) {
      console.error('[PWA Scheduler] Failed to play audio:', error);
    }

    // Trigger TTS if needed
    if (config.announcement && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(config.announcement);
      utterance.rate = config.rate || 1.0;
      utterance.pitch = config.pitch || 1.0;
      utterance.volume = config.volume || 1.0;
      window.speechSynthesis.speak(utterance);
    }
  }

  /**
   * Setup listener for service worker messages
   */
  private setupMessageListener() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'PLAY_BELL') {
          this.playBell(event.data.payload);
        }
      });
    }
  }

  /**
   * Request notification permission
   */
  static async requestNotificationPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.warn('[PWA Scheduler] Notifications not supported');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }

    return false;
  }

  /**
   * Register periodic background sync (if supported)
   */
  static async registerPeriodicSync(): Promise<boolean> {
    if (!('serviceWorker' in navigator) || !('periodicSync' in ServiceWorkerRegistration.prototype)) {
      console.warn('[PWA Scheduler] Periodic Background Sync not supported');
      return false;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      await (registration as any).periodicSync.register('bell-schedule', {
        minInterval: 60 * 1000, // Check every minute
      });
      console.log('[PWA Scheduler] Periodic sync registered');
      return true;
    } catch (error) {
      console.error('[PWA Scheduler] Failed to register periodic sync:', error);
      return false;
    }
  }

  /**
   * Get all scheduled bells
   */
  getScheduledBells(): string[] {
    return Array.from(this.scheduledBells.keys());
  }

  /**
   * Clear all scheduled bells
   */
  clearAll() {
    this.scheduledBells.forEach((timeoutId) => {
      window.clearTimeout(timeoutId);
    });
    this.scheduledBells.clear();
    console.log('[PWA Scheduler] All bells cleared');
  }
}

// Export singleton instance
export const pwaScheduler = PWABackgroundScheduler.getInstance();
