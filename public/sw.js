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

// ============================================================================
// BACKGROUND BELL SCHEDULING SYSTEM
// ============================================================================

// Database configuration - must match IndexedDB manager
const DB_NAME = 'SchoolBellDB';
const DB_VERSION = 2;
const TIMETABLES_STORE = 'timetables';
const LOGS_STORE = 'bellLogs';

// Bell scheduling state
let schedules = [];
let checkInterval = null;
let lastCheckedMinute = '';

/**
 * Open IndexedDB connection
 */
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onerror = () => {
      console.error('[SW] Failed to open IndexedDB:', request.error);
      reject(request.error);
    };
    
    request.onsuccess = () => {
      console.log('[SW] IndexedDB opened successfully');
      resolve(request.result);
    };
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      console.log('[SW] Upgrading IndexedDB schema...');
      
      // Create timetables store if needed
      if (!db.objectStoreNames.contains(TIMETABLES_STORE)) {
        const timetableStore = db.createObjectStore(TIMETABLES_STORE, { keyPath: 'id' });
        timetableStore.createIndex('isActive', 'isActive', { unique: false });
        timetableStore.createIndex('day', 'day', { unique: false });
        console.log('[SW] Created timetables store');
      }
      
      // Create logs store if needed
      if (!db.objectStoreNames.contains(LOGS_STORE)) {
        const logsStore = db.createObjectStore(LOGS_STORE, { keyPath: 'id' });
        logsStore.createIndex('executionTime', 'executionTime', { unique: false });
        logsStore.createIndex('status', 'status', { unique: false });
        console.log('[SW] Created logs store');
      }
    };
  });
}

/**
 * Load schedules from IndexedDB
 */
async function loadSchedules() {
  try {
    const db = await openDB();
    const transaction = db.transaction([TIMETABLES_STORE], 'readonly');
    const store = transaction.objectStore(TIMETABLES_STORE);
    const request = store.getAll();
    
    const timetables = await new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    
    console.log(`[SW] Loaded ${timetables.length} timetables from IndexedDB`);
    
    // Convert timetables to schedules
    schedules = [];
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    
    timetables.forEach(tt => {
      // Check if timetable is active and matches today or is Daily
      if (tt.isActive !== false && (tt.day === 'Daily' || tt.day === today)) {
        schedules.push({
          id: tt.id,
          timetableName: tt.name,
          time: tt.bellTime,
          day: tt.day,
          bellType: tt.bellType,
          voice: tt.voice,
          customMessage: tt.customMessage,
          customAudioId: tt.customAudioId,
          triggered: false
        });
      }
    });
    
    console.log(`[SW] Created ${schedules.length} active schedules for today`);
    return schedules;
  } catch (error) {
    console.error('[SW] Failed to load schedules:', error);
    return [];
  }
}

/**
 * Check schedules and trigger bells
 */
async function checkSchedules() {
  const now = new Date();
  const currentTime = now.getHours().toString().padStart(2, '0') + ':' + 
                      now.getMinutes().toString().padStart(2, '0');
  
  // Only check once per minute
  if (currentTime === lastCheckedMinute) {
    return;
  }
  lastCheckedMinute = currentTime;
  
  console.log(`[SW] Checking schedules at ${currentTime}...`);
  
  // Check each schedule
  for (const schedule of schedules) {
    if (schedule.time === currentTime && !schedule.triggered) {
      console.log(`[SW] ⏰ Bell triggered: ${schedule.timetableName} at ${schedule.time}`);
      schedule.triggered = true;
      
      // Trigger the bell
      await triggerBell(schedule);
      
      // Reset triggered flag after 2 minutes
      setTimeout(() => {
        schedule.triggered = false;
      }, 120000);
    }
  }
}

/**
 * Trigger a bell event
 */
async function triggerBell(schedule) {
  try {
    console.log('[SW] Triggering bell:', schedule.timetableName);
    
    // Show notification
    await showBellNotification(schedule);
    
    // Try to play audio
    await playBellAudio(schedule);
    
    // Log execution
    await logBellExecution(schedule, 'success');
    
  } catch (error) {
    console.error('[SW] Failed to trigger bell:', error);
    await logBellExecution(schedule, 'failed', error.message);
  }
}

/**
 * Show bell notification
 */
async function showBellNotification(schedule) {
  try {
    const notificationOptions = {
      body: schedule.customMessage || `${schedule.timetableName} - ${schedule.time}`,
      icon: '/icon-192x192.svg',
      badge: '/icon-192x192.svg',
      tag: `bell-${schedule.id}`,
      requireInteraction: false,
      silent: false,
      vibrate: [200, 100, 200], // Vibration pattern
      data: {
        scheduleId: schedule.id,
        time: schedule.time,
        url: '/'
      }
    };
    
    await self.registration.showNotification('🔔 School Bell', notificationOptions);
    console.log('[SW] Notification displayed');
  } catch (error) {
    console.error('[SW] Failed to show notification:', error);
    throw error;
  }
}

/**
 * Play bell audio
 */
async function playBellAudio(schedule) {
  try {
    // Check if any clients are open
    const clients = await self.clients.matchAll({ 
      includeUncontrolled: true,
      type: 'window'
    });
    
    if (clients.length > 0) {
      // App is open - send message to play audio
      console.log('[SW] App is open, sending play message to clients');
      clients.forEach(client => {
        client.postMessage({
          type: 'PLAY_BELL',
          payload: schedule
        });
      });
    } else {
      // App is closed - open it in background to play audio
      console.log('[SW] App is closed, opening in background');
      await self.clients.openWindow('/?bell=' + schedule.id);
    }
  } catch (error) {
    console.error('[SW] Failed to play audio:', error);
    // Don't throw - notification already shown
  }
}

/**
 * Log bell execution
 */
async function logBellExecution(schedule, status, error = null) {
  try {
    const db = await openDB();
    const transaction = db.transaction([LOGS_STORE], 'readwrite');
    const store = transaction.objectStore(LOGS_STORE);
    
    const log = {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      scheduleId: schedule.id,
      timetableName: schedule.timetableName,
      bellLabel: schedule.timetableName,
      executionTime: new Date(),
      scheduledTime: schedule.time,
      status: status,
      method: 'background-pwa',
      error: error,
      deviceInfo: {
        browser: 'Service Worker',
        os: 'Android',
        batteryLevel: null
      }
    };
    
    await new Promise((resolve, reject) => {
      const request = store.add(log);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
    
    console.log('[SW] Bell execution logged');
  } catch (error) {
    console.error('[SW] Failed to log execution:', error);
    // Don't throw - this is non-critical
  }
}

/**
 * Start schedule monitoring
 */
function startScheduleMonitoring() {
  if (checkInterval) {
    clearInterval(checkInterval);
  }
  
  // Check every 10 seconds
  checkInterval = setInterval(() => {
    checkSchedules();
  }, 10000);
  
  console.log('[SW] Schedule monitoring started (checking every 10 seconds)');
}

/**
 * Stop schedule monitoring
 */
function stopScheduleMonitoring() {
  if (checkInterval) {
    clearInterval(checkInterval);
    checkInterval = null;
    console.log('[SW] Schedule monitoring stopped');
  }
}

// ============================================================================
// SERVICE WORKER EVENT HANDLERS
// ============================================================================

// Activate event - load schedules and start monitoring
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        const validCacheNames = Object.values(CACHE_NAMES);
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!validCacheNames.includes(cacheName)) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Load schedules and start monitoring
      loadSchedules().then(() => {
        startScheduleMonitoring();
      })
    ])
    .then(() => {
      console.log('[SW] Service worker activated');
      return self.clients.claim();
    })
  );
});

// Message handler - handle commands from PWA
self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data?.type);
  
  if (!event.data) return;
  
  switch (event.data.type) {
    case 'RELOAD_SCHEDULES':
      // Reload schedules from IndexedDB
      loadSchedules().then(() => {
        console.log('[SW] Schedules reloaded');
      });
      break;
      
    case 'GET_STATUS':
      // Send status back to client
      event.ports[0]?.postMessage({
        isActive: checkInterval !== null,
        scheduledBellsCount: schedules.length,
        lastCheckedMinute: lastCheckedMinute
      });
      break;
      
    case 'CHECK_NOW':
      // Force immediate check
      checkSchedules();
      break;
      
    default:
      console.log('[SW] Unknown message type:', event.data.type);
  }
});

// Notification click handler - open app
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked');
  event.notification.close();
  
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // If app is already open, focus it
        for (const client of clientList) {
          if (client.url === self.registration.scope && 'focus' in client) {
            return client.focus();
          }
        }
        // Otherwise open new window
        if (self.clients.openWindow) {
          return self.clients.openWindow('/');
        }
      })
  );
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'bell-schedule') {
    console.log('[SW] Periodic sync triggered');
    event.waitUntil(checkSchedules());
  }
});
