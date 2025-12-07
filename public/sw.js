// public/sw.js
// Service Worker for SAR Educational Complex Bell System
// Provides offline support, caching, and background sync

const CACHE_VERSION = 'v1.0.0';
const CACHE_NAMES = {
  static: `sar-bell-static-${CACHE_VERSION}`,
  assets: `sar-bell-assets-${CACHE_VERSION}`,
  audio: `sar-bell-audio-${CACHE_VERSION}`,
  data: `sar-bell-data-${CACHE_VERSION}`,
};

// Assets to precache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192x192.svg',
  '/icon-512x512.svg',
  '/icon-maskable-192x192.svg',
  '/icon-maskable-512x512.svg',
  '/apple-icon.png',
];

// Note: Bell sounds are generated using Web Audio API and don't require caching
// They work offline automatically as they're synthesized in the browser

// Install event - precache essential assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    caches.open(CACHE_NAMES.static)
      .then((cache) => {
        console.log('[SW] Precaching static assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        console.log('[SW] Service worker installed successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Precaching failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        const validCacheNames = Object.values(CACHE_NAMES);
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!validCacheNames.includes(cacheName)) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions and other protocols
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Navigation requests - Network first, fallback to cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful navigation responses
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAMES.static).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache when offline
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || caches.match('/index.html');
          });
        })
    );
    return;
  }

  // Audio files - Cache first
  if (request.url.includes('audio') || request.url.match(/\.(mp3|wav|ogg)$/)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAMES.audio).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Static assets (JS, CSS, images, fonts) - Cache first
  if (request.url.match(/\.(js|css|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot)$/)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAMES.assets).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // All other requests - Network first, fallback to cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAMES.data).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Helper to open IndexedDB
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('SchoolBellSyncDB', 1);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('timetables')) {
                db.createObjectStore('timetables', { keyPath: 'id' });
            }
        };
    });
}

// Background sync for scheduled bells
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'bell-schedule') {
        event.waitUntil(checkScheduleAndPlayBell());
    }
});

// Message handler for scheduled bells from the app
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SCHEDULE_BELL') {
        const { time, config } = event.data;
        scheduleBellAlarm(time, config);
    }
});

// Store scheduled bells
let scheduledBells = [];

function scheduleBellAlarm(time, config) {
    const bellTime = new Date(time);
    const now = new Date();
    const delay = bellTime.getTime() - now.getTime();

    if (delay > 0) {
        scheduledBells.push({
            time: bellTime,
            config,
            timeout: setTimeout(() => {
                playBellInBackground(config);
            }, delay)
        });
        console.log('[SW] Bell scheduled for', bellTime);
    }
}

async function playBellInBackground(config) {
    console.log('[SW] Playing bell in background');
    
    // Show notification
    await self.registration.showNotification('School Bell', {
        body: config.announcement || 'Bell is ringing',
        icon: '/icon-192x192.svg',
        badge: '/icon-192x192.svg',
        tag: 'bell-notification',
        requireInteraction: false,
        silent: false, // Play default notification sound
    });

    // Try to wake up the app and play audio
    const clients = await self.clients.matchAll({ 
        includeUncontrolled: true,
        type: 'window'
    });

    if (clients.length > 0) {
        // App is open - send message to play audio
        clients.forEach(client => {
            client.postMessage({
                type: 'PLAY_BELL',
                payload: config
            });
        });
    } else {
        // App is closed - open it
        await self.clients.openWindow('/');
    }
}

async function checkScheduleAndPlayBell() {
    try {
        const db = await openDB();
        const transaction = db.transaction('timetables', 'readonly');
        const store = transaction.objectStore('timetables');
        const request = store.getAll();

        const timetables = await new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });

        const now = new Date();
        const currentTime = now.getHours().toString().padStart(2, '0') + ':' + 
                          now.getMinutes().toString().padStart(2, '0');
        const currentDay = now.getDay(); // 0-6

        for (const tt of timetables) {
            if (tt.time === currentTime && tt.days && tt.days.includes(currentDay)) {
                await playBellInBackground(tt);
            }
        }
    } catch (error) {
        console.error('[SW] Background sync failed:', error);
    }
}
