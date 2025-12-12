/**
 * React hook for PWA Service Worker Bridge
 * Provides easy access to Service Worker functionality in React components
 */

import { useState, useEffect, useCallback } from 'react';
import { pwaSWBridge, type ServiceWorkerStatus } from '@/lib/pwa-sw-bridge';

export function usePWASWBridge() {
  const [status, setStatus] = useState<ServiceWorkerStatus | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Initialize Service Worker connection
   */
  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        const success = await pwaSWBridge.initialize();
        if (mounted) {
          setIsInitialized(success);
          if (success) {
            await refreshStatus();
          }
        }
      } catch (error) {
        console.error('[usePWASWBridge] Initialization failed:', error);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    init();

    return () => {
      mounted = false;
    };
  }, []);

  /**
   * Refresh Service Worker status
   */
  const refreshStatus = useCallback(async () => {
    try {
      const newStatus = await pwaSWBridge.getStatus();
      setStatus(newStatus);
      return newStatus;
    } catch (error) {
      console.error('[usePWASWBridge] Failed to get status:', error);
      return null;
    }
  }, []);

  /**
   * Request notification permission
   */
  const requestNotificationPermission = useCallback(async () => {
    const granted = await pwaSWBridge.constructor.requestNotificationPermission();
    await refreshStatus(); // Refresh to update permission status
    return granted;
  }, [refreshStatus]);

  /**
   * Trigger immediate schedule check
   */
  const checkSchedulesNow = useCallback(async () => {
    try {
      await pwaSWBridge.checkSchedulesNow();
      return true;
    } catch (error) {
      console.error('[usePWASWBridge] Failed to check schedules:', error);
      return false;
    }
  }, []);

  /**
   * Register periodic background sync
   */
  const registerPeriodicSync = useCallback(async () => {
    const success = await pwaSWBridge.constructor.registerPeriodicSync();
    await refreshStatus();
    return success;
  }, [refreshStatus]);

  /**
   * Listen for Service Worker messages
   */
  const onMessage = useCallback((type: string, callback: (data: any) => void) => {
    pwaSWBridge.onMessage(type, callback);
    
    // Return cleanup function
    return () => {
      pwaSWBridge.offMessage(type);
    };
  }, []);

  return {
    // State
    status,
    isInitialized,
    isLoading,
    isSupported: pwaSWBridge.constructor.isSupported(),
    
    // Actions
    refreshStatus,
    requestNotificationPermission,
    checkSchedulesNow,
    registerPeriodicSync,
    onMessage,
    
    // Utilities
    getNotificationPermission: pwaSWBridge.constructor.getNotificationPermission,
  };
}
