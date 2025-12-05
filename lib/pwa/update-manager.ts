// Update Manager for PWA
// Handles service worker updates and version management

export interface UpdateInfo {
  available: boolean;
  version?: string;
  releaseNotes?: string;
}

export type UpdateCallback = (info: UpdateInfo) => void;

/**
 * Update Manager Class
 * Manages service worker updates and notifications
 */
export class UpdateManager {
  private updateCallbacks: UpdateCallback[] = [];
  private registration: ServiceWorkerRegistration | null = null;
  private updateAvailable = false;

  /**
   * Initialize update manager with service worker registration
   */
  init(registration: ServiceWorkerRegistration): void {
    this.registration = registration;
    this.setupUpdateListener();
  }

  /**
   * Set up listener for service worker updates
   */
  private setupUpdateListener(): void {
    if (!this.registration) return;

    this.registration.addEventListener('updatefound', () => {
      const newWorker = this.registration!.installing;
      if (!newWorker) return;

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          // New update available
          this.updateAvailable = true;
          const updateInfo: UpdateInfo = {
            available: true,
            version: this.getVersion(),
          };
          this.notifyUpdateAvailable(updateInfo);
        }
      });
    });
  }

  /**
   * Check for updates manually
   */
  async checkForUpdates(): Promise<UpdateInfo> {
    if (!this.registration) {
      return { available: false };
    }

    try {
      await this.registration.update();
      
      return {
        available: this.updateAvailable,
        version: this.getVersion(),
      };
    } catch (error) {
      console.error('[UpdateManager] Failed to check for updates:', error);
      return { available: false };
    }
  }

  /**
   * Apply the pending update
   * NOTE: This will reload the page, so only call when user explicitly requests it
   */
  async applyUpdate(): Promise<void> {
    if (!this.updateAvailable) {
      console.warn('[UpdateManager] No update available to apply');
      return;
    }

    // Warn user before reloading
    const confirmed = confirm('This will reload the page to apply the update. Any unsaved changes will be lost. Continue?');
    if (!confirmed) {
      console.log('[UpdateManager] Update cancelled by user');
      return;
    }

    // Tell the service worker to skip waiting
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }

    // Reload the page to activate the new service worker
    window.location.reload();
  }

  /**
   * Skip the current update
   */
  skipUpdate(version?: string): void {
    if (version) {
      // Store skipped version in localStorage
      try {
        localStorage.setItem('skipped-update-version', version);
        console.log('[UpdateManager] Skipped update version:', version);
      } catch (error) {
        console.error('[UpdateManager] Failed to store skipped version:', error);
      }
    }
    
    this.updateAvailable = false;
  }

  /**
   * Check if a version was previously skipped
   */
  wasVersionSkipped(version: string): boolean {
    try {
      const skippedVersion = localStorage.getItem('skipped-update-version');
      return skippedVersion === version;
    } catch {
      return false;
    }
  }

  /**
   * Register callback for update notifications
   */
  onUpdateAvailable(callback: UpdateCallback): () => void {
    this.updateCallbacks.push(callback);
    
    // Return unsubscribe function
    return () => {
      const index = this.updateCallbacks.indexOf(callback);
      if (index > -1) {
        this.updateCallbacks.splice(index, 1);
      }
    };
  }

  /**
   * Notify all registered callbacks about update
   */
  private notifyUpdateAvailable(info: UpdateInfo): void {
    console.log('[UpdateManager] Update available:', info);
    this.updateCallbacks.forEach((callback) => {
      try {
        callback(info);
      } catch (error) {
        console.error('[UpdateManager] Error in update callback:', error);
      }
    });
  }

  /**
   * Get current app version from package or cache
   */
  private getVersion(): string {
    // Try to get version from meta tag
    const metaVersion = document.querySelector('meta[name="version"]');
    if (metaVersion) {
      return metaVersion.getAttribute('content') || 'unknown';
    }

    // Fallback to cache version
    return 'v1.0.0';
  }

  /**
   * Get update status
   */
  isUpdateAvailable(): boolean {
    return this.updateAvailable;
  }

  /**
   * Force reload to activate new service worker
   */
  forceReload(): void {
    window.location.reload();
  }
}

// Export singleton instance
export const updateManager = new UpdateManager();
