/**
 * PWA Service Worker Bridge
 * Handles communication between PWA and Service Worker for background bells
 */

import type { Timetable } from './store';

export interface ServiceWorkerStatus {
  isActive: boolean;
  isSupported: boolean;
  scheduledBellsCount: number;
  nextBellTime?: Date;
  lastSyncTime: Date;
  notificationPermission: NotificationPermission;
  errors: string[];
}

export class PWAServiceWorkerBridge {
  private sw: ServiceWorker | null = null;
  private registration: ServiceWorkerRegistration | null = null;
  private messageHandlers: Map<string, (data: any) => void> = new Map();

  constructor() {
    this.setupMessageListener();
  }

  /**
   * Check if Service Worker is supported
   */
  static isSupported(): boolean {
    return 'serviceWorker' in navigator && 'Notification' in window;
  }

  /**
   * Initialize Service Worker connection
   */
  async initialize(): Promise<boolean> {
    if (!PWAServiceWorkerBridge.isSupported()) {
      console.warn('[PWA-SW Bridge] Service Workers not supported');
      return false;
    }

    try {
      // Wait for Service Worker to be ready
      this.registration = await navigator.serviceWorker.ready;
      this.sw = this.registration.active;

      if (!this.sw) {
        console.error('[PWA-SW Bridge] No active Service Worker found');
        return false;
      }

      console.log('[PWA-SW Bridge] Service Worker connection established');
      return true;
    } catch (error) {
      console.error('[PWA-SW Bridge] Failed to initialize:', error);
      return false;
    }
  }

  /**
   * Send timetable updates to Service Worker
   */
  async syncTimetables(timetables: Timetable[]): Promise<void> {
    if (!this.sw) {
      console.warn('[PWA-SW Bridge] Service Worker not initialized');
      return;
    }

    try {
      // Timetables are already in IndexedDB (synced by zustand adapter)
      // Just tell Service Worker to reload them
      this.sw.postMessage({
        type: 'RELOAD_SCHEDULES',
        timestamp: Date.now()
      });

      console.log('[PWA-SW Bridge] Sent reload schedules message');
    } catch (error) {
      console.error('[PWA-SW Bridge] Failed to sync timetables:', error);
      throw error;
    }
  }

  /**
   * Request Service Worker status
   */
  async getStatus(): Promise<ServiceWorkerStatus> {
    if (!this.sw) {
      return {
        isActive: false,
        isSupported: PWAServiceWorkerBridge.isSupported(),
        scheduledBellsCount: 0,
        lastSyncTime: new Date(),
        notificationPermission: Notification.permission,
        errors: ['Service Worker not initialized']
      };
    }

    try {
      // Create a message channel for response
      const messageChannel = new MessageChannel();
      
      const statusPromise = new Promise<any>((resolve, reject) => {
        messageChannel.port1.onmessage = (event) => {
          resolve(event.data);
        };
        
        // Timeout after 5 seconds
        setTimeout(() => {
          reject(new Error('Status request timeout'));
        }, 5000);
      });

      // Send status request
      this.sw.postMessage(
        { type: 'GET_STATUS' },
        [messageChannel.port2]
      );

      const status = await statusPromise;

      return {
        isActive: status.isActive || false,
        isSupported: true,
        scheduledBellsCount: status.scheduledBellsCount || 0,
        lastSyncTime: new Date(),
        notificationPermission: Notification.permission,
        errors: []
      };
    } catch (error) {
      console.error('[PWA-SW Bridge] Failed to get status:', error);
      return {
        isActive: false,
        isSupported: true,
        scheduledBellsCount: 0,
        lastSyncTime: new Date(),
        notificationPermission: Notification.permission,
        errors: [error instanceof Error ? error.message : 'Unknown error']
      };
    }
  }

  /**
   * Force immediate schedule check
   */
  async checkSchedulesNow(): Promise<void> {
    if (!this.sw) {
      console.warn('[PWA-SW Bridge] Service Worker not initialized');
      return;
    }

    try {
      this.sw.postMessage({
        type: 'CHECK_NOW',
        timestamp: Date.now()
      });

      console.log('[PWA-SW Bridge] Sent check now message');
    } catch (error) {
      console.error('[PWA-SW Bridge] Failed to trigger check:', error);
      throw error;
    }
  }

  /**
   * Listen for messages from Service Worker
   */
  onMessage(type: string, callback: (data: any) => void): void {
    this.messageHandlers.set(type, callback);
  }

  /**
   * Remove message listener
   */
  offMessage(type: string): void {
    this.messageHandlers.delete(type);
  }

  /**
   * Setup message listener for Service Worker messages
   */
  private setupMessageListener(): void {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    navigator.serviceWorker.addEventListener('message', (event) => {
      if (!event.data || !event.data.type) {
        return;
      }

      const handler = this.messageHandlers.get(event.data.type);
      if (handler) {
        handler(event.data.payload || event.data);
      }

      // Also log all messages for debugging
      console.log('[PWA-SW Bridge] Message from SW:', event.data.type);
    });
  }

  /**
   * Request notification permission
   */
  static async requestNotificationPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.warn('[PWA-SW Bridge] Notifications not supported');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission === 'denied') {
      console.warn('[PWA-SW Bridge] Notification permission denied');
      return false;
    }

    try {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    } catch (error) {
      console.error('[PWA-SW Bridge] Failed to request permission:', error);
      return false;
    }
  }

  /**
   * Check notification permission status
   */
  static getNotificationPermission(): NotificationPermission {
    if (!('Notification' in window)) {
      return 'denied';
    }
    return Notification.permission;
  }

  /**
   * Register periodic background sync (if supported)
   */
  static async registerPeriodicSync(): Promise<boolean> {
    if (!('serviceWorker' in navigator)) {
      return false;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      
      // Check if periodic sync is supported
      if (!('periodicSync' in registration)) {
        console.warn('[PWA-SW Bridge] Periodic Background Sync not supported');
        return false;
      }

      // Register periodic sync
      await (registration as any).periodicSync.register('bell-schedule', {
        minInterval: 60 * 1000 // Check every minute
      });

      console.log('[PWA-SW Bridge] Periodic sync registered');
      return true;
    } catch (error) {
      console.error('[PWA-SW Bridge] Failed to register periodic sync:', error);
      return false;
    }
  }

  /**
   * Unregister periodic background sync
   */
  static async unregisterPeriodicSync(): Promise<void> {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      
      if ('periodicSync' in registration) {
        await (registration as any).periodicSync.unregister('bell-schedule');
        console.log('[PWA-SW Bridge] Periodic sync unregistered');
      }
    } catch (error) {
      console.error('[PWA-SW Bridge] Failed to unregister periodic sync:', error);
    }
  }

  /**
   * Get Service Worker registration
   */
  getRegistration(): ServiceWorkerRegistration | null {
    return this.registration;
  }

  /**
   * Check if Service Worker is active
   */
  isActive(): boolean {
    return this.sw !== null && this.registration !== null;
  }
}

// Export singleton instance
export const pwaSWBridge = new PWAServiceWorkerBridge();
