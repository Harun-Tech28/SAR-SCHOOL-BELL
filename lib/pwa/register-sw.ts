// Service Worker Registration Module
// Handles registration, updates, and lifecycle events

export interface ServiceWorkerConfig {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onOffline?: () => void;
  onOnline?: () => void;
  onError?: (error: Error) => void;
}

let swRegistration: ServiceWorkerRegistration | null = null;

/**
 * Register the service worker
 */
export function registerServiceWorker(config: ServiceWorkerConfig = {}): void {
  // Check if service workers are supported
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    console.warn('[SW] Service workers are not supported in this browser');
    return;
  }

  // Register on page load
  window.addEventListener('load', () => {
    const swUrl = '/sw.js';

    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        swRegistration = registration;
        console.log('[SW] Service worker registered successfully');

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // New update available
                console.log('[SW] New content available, please refresh');
                config.onUpdate?.(registration);
              } else {
                // Content cached for offline use
                console.log('[SW] Content cached for offline use');
                config.onSuccess?.(registration);
              }
            }
          });
        });

        // Check for updates periodically (every 4 hours to reduce interruptions)
        setInterval(() => {
          registration.update();
        }, 4 * 60 * 60 * 1000); // 4 hours instead of 1 hour
      })
      .catch((error) => {
        console.error('[SW] Service worker registration failed:', error);
        config.onError?.(error);
      });

    // Listen for online/offline events
    window.addEventListener('online', () => {
      console.log('[SW] Back online');
      config.onOnline?.();
    });

    window.addEventListener('offline', () => {
      console.log('[SW] Gone offline');
      config.onOffline?.();
    });

    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', (event) => {
      console.log('[SW] Message from service worker:', event.data);

      if (event.data.type === 'PLAY_BELL') {
        // Handle bell play request from service worker
        window.dispatchEvent(new CustomEvent('sw-play-bell', {
          detail: event.data.payload
        }));
      }
    });
  });
}

/**
 * Unregister the service worker
 */
export async function unregisterServiceWorker(): Promise<boolean> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const success = await registration.unregister();

    if (success) {
      console.log('[SW] Service worker unregistered successfully');
      swRegistration = null;
    }

    return success;
  } catch (error) {
    console.error('[SW] Service worker unregistration failed:', error);
    return false;
  }
}

/**
 * Get the current service worker registration
 */
export function getServiceWorkerRegistration(): ServiceWorkerRegistration | null {
  return swRegistration;
}

/**
 * Check if service worker is registered and active
 */
export async function isServiceWorkerActive(): Promise<boolean> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.active !== null;
  } catch {
    return false;
  }
}

/**
 * Force update the service worker
 */
export async function updateServiceWorker(): Promise<void> {
  if (!swRegistration) {
    console.warn('[SW] No service worker registration found');
    return;
  }

  try {
    await swRegistration.update();
    console.log('[SW] Service worker update check initiated');
  } catch (error) {
    console.error('[SW] Service worker update failed:', error);
  }
}

/**
 * Skip waiting and activate new service worker immediately
 * NOTE: Does not reload page automatically to prevent data loss
 */
export function skipWaitingAndActivate(): void {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  navigator.serviceWorker.controller?.postMessage({ type: 'SKIP_WAITING' });
  // Removed automatic reload to prevent data loss
  // Users can reload manually when convenient
  console.log('[SW] New service worker activated. Reload the page when convenient to use the updated version.');
}

/**
 * Get cache storage information
 */
export async function getCacheInfo(): Promise<{
  caches: string[];
  totalSize: number;
}> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return { caches: [], totalSize: 0 };
  }

  try {
    const cacheNames = await caches.keys();
    let totalSize = 0;

    for (const cacheName of cacheNames) {
      const cache = await caches.open(cacheName);
      const requests = await cache.keys();

      for (const request of requests) {
        const response = await cache.match(request);
        if (response) {
          const blob = await response.blob();
          totalSize += blob.size;
        }
      }
    }

    return {
      caches: cacheNames,
      totalSize,
    };
  } catch (error) {
    console.error('[SW] Failed to get cache info:', error);
    return { caches: [], totalSize: 0 };
  }
}

/**
 * Clear all caches
 */
export async function clearAllCaches(): Promise<void> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return;
  }

  try {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
    console.log('[SW] All caches cleared');
  } catch (error) {
    console.error('[SW] Failed to clear caches:', error);
  }
}
