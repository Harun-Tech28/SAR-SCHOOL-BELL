(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/school-bell-system/lib/pwa/register-sw.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Service Worker Registration Module
// Handles registration, updates, and lifecycle events
__turbopack_context__.s([
    "clearAllCaches",
    ()=>clearAllCaches,
    "getCacheInfo",
    ()=>getCacheInfo,
    "getServiceWorkerRegistration",
    ()=>getServiceWorkerRegistration,
    "isServiceWorkerActive",
    ()=>isServiceWorkerActive,
    "registerServiceWorker",
    ()=>registerServiceWorker,
    "skipWaitingAndActivate",
    ()=>skipWaitingAndActivate,
    "unregisterServiceWorker",
    ()=>unregisterServiceWorker,
    "updateServiceWorker",
    ()=>updateServiceWorker
]);
let swRegistration = null;
function registerServiceWorker(config = {}) {
    // Check if service workers are supported
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !('serviceWorker' in navigator)) {
        console.warn('[SW] Service workers are not supported in this browser');
        return;
    }
    // Register on page load
    window.addEventListener('load', ()=>{
        const swUrl = '/sw.js';
        navigator.serviceWorker.register(swUrl).then((registration)=>{
            swRegistration = registration;
            console.log('[SW] Service worker registered successfully');
            // Check for updates
            registration.addEventListener('updatefound', ()=>{
                const newWorker = registration.installing;
                if (!newWorker) return;
                newWorker.addEventListener('statechange', ()=>{
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
            // Check for updates periodically (every hour)
            setInterval(()=>{
                registration.update();
            }, 60 * 60 * 1000);
        }).catch((error)=>{
            console.error('[SW] Service worker registration failed:', error);
            config.onError?.(error);
        });
        // Listen for online/offline events
        window.addEventListener('online', ()=>{
            console.log('[SW] Back online');
            config.onOnline?.();
        });
        window.addEventListener('offline', ()=>{
            console.log('[SW] Gone offline');
            config.onOffline?.();
        });
        // Listen for messages from service worker
        navigator.serviceWorker.addEventListener('message', (event)=>{
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
async function unregisterServiceWorker() {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !('serviceWorker' in navigator)) {
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
function getServiceWorkerRegistration() {
    return swRegistration;
}
async function isServiceWorkerActive() {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !('serviceWorker' in navigator)) {
        return false;
    }
    try {
        const registration = await navigator.serviceWorker.ready;
        return registration.active !== null;
    } catch  {
        return false;
    }
}
async function updateServiceWorker() {
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
function skipWaitingAndActivate() {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !('serviceWorker' in navigator)) {
        return;
    }
    navigator.serviceWorker.controller?.postMessage({
        type: 'SKIP_WAITING'
    });
    window.location.reload();
}
async function getCacheInfo() {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !('caches' in window)) {
        return {
            caches: [],
            totalSize: 0
        };
    }
    try {
        const cacheNames = await caches.keys();
        let totalSize = 0;
        for (const cacheName of cacheNames){
            const cache = await caches.open(cacheName);
            const requests = await cache.keys();
            for (const request of requests){
                const response = await cache.match(request);
                if (response) {
                    const blob = await response.blob();
                    totalSize += blob.size;
                }
            }
        }
        return {
            caches: cacheNames,
            totalSize
        };
    } catch (error) {
        console.error('[SW] Failed to get cache info:', error);
        return {
            caches: [],
            totalSize: 0
        };
    }
}
async function clearAllCaches() {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !('caches' in window)) {
        return;
    }
    try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((cacheName)=>caches.delete(cacheName)));
        console.log('[SW] All caches cleared');
    } catch (error) {
        console.error('[SW] Failed to clear caches:', error);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/pwa/storage-manager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Storage Manager for PWA
// Handles IndexedDB and LocalStorage operations
__turbopack_context__.s([
    "STORES",
    ()=>STORES,
    "StorageManager",
    ()=>StorageManager,
    "storageManager",
    ()=>storageManager
]);
const DB_NAME = "SARBellSystemDB";
const DB_VERSION = 1;
const STORES = {
    TIMETABLE: "timetable",
    STUDENTS: "students",
    ANNOUNCEMENTS: "announcements",
    SETTINGS: "settings"
};
class StorageManager {
    db = null;
    /**
   * Initialize IndexedDB
   */ async init() {
        if (("TURBOPACK compile-time value", "object") === "undefined" || !("indexedDB" in window)) {
            console.warn("[Storage] IndexedDB not available");
            return;
        }
        return new Promise((resolve, reject)=>{
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = ()=>{
                console.error("[Storage] Failed to open database:", request.error);
                reject(request.error);
            };
            request.onsuccess = ()=>{
                this.db = request.result;
                console.log("[Storage] Database opened successfully");
                resolve();
            };
            request.onupgradeneeded = (event)=>{
                const db = event.target.result;
                // Create object stores if they don't exist
                if (!db.objectStoreNames.contains(STORES.TIMETABLE)) {
                    db.createObjectStore(STORES.TIMETABLE, {
                        keyPath: "id"
                    });
                    console.log("[Storage] Created timetable store");
                }
                if (!db.objectStoreNames.contains(STORES.STUDENTS)) {
                    db.createObjectStore(STORES.STUDENTS, {
                        keyPath: "id"
                    });
                    console.log("[Storage] Created students store");
                }
                if (!db.objectStoreNames.contains(STORES.ANNOUNCEMENTS)) {
                    db.createObjectStore(STORES.ANNOUNCEMENTS, {
                        keyPath: "id"
                    });
                    console.log("[Storage] Created announcements store");
                }
                if (!db.objectStoreNames.contains(STORES.SETTINGS)) {
                    db.createObjectStore(STORES.SETTINGS);
                    console.log("[Storage] Created settings store");
                }
            };
        });
    }
    /**
   * Save data to IndexedDB
   */ async saveToIndexedDB(store, key, data) {
        if (!this.db) {
            await this.init();
        }
        if (!this.db) {
            throw new Error("Database not initialized");
        }
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORES[store]
            ], "readwrite");
            const objectStore = transaction.objectStore(STORES[store]);
            const request = objectStore.put({
                id: key,
                ...data
            });
            request.onsuccess = ()=>{
                console.log(`[Storage] Saved to ${store}:`, key);
                resolve();
            };
            request.onerror = ()=>{
                console.error(`[Storage] Failed to save to ${store}:`, request.error);
                reject(request.error);
            };
        });
    }
    /**
   * Get data from IndexedDB
   */ async getFromIndexedDB(store, key) {
        if (!this.db) {
            await this.init();
        }
        if (!this.db) {
            return null;
        }
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORES[store]
            ], "readonly");
            const objectStore = transaction.objectStore(STORES[store]);
            const request = objectStore.get(key);
            request.onsuccess = ()=>{
                const result = request.result;
                if (result) {
                    const { id, ...data } = result;
                    resolve(data);
                } else {
                    resolve(null);
                }
            };
            request.onerror = ()=>{
                console.error(`[Storage] Failed to get from ${store}:`, request.error);
                reject(request.error);
            };
        });
    }
    /**
   * Get all data from a store
   */ async getAllFromIndexedDB(store) {
        if (!this.db) {
            await this.init();
        }
        if (!this.db) {
            return [];
        }
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORES[store]
            ], "readonly");
            const objectStore = transaction.objectStore(STORES[store]);
            const request = objectStore.getAll();
            request.onsuccess = ()=>{
                const results = request.result || [];
                resolve(results);
            };
            request.onerror = ()=>{
                console.error(`[Storage] Failed to get all from ${store}:`, request.error);
                reject(request.error);
            };
        });
    }
    /**
   * Delete data from IndexedDB
   */ async deleteFromIndexedDB(store, key) {
        if (!this.db) {
            await this.init();
        }
        if (!this.db) {
            throw new Error("Database not initialized");
        }
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORES[store]
            ], "readwrite");
            const objectStore = transaction.objectStore(STORES[store]);
            const request = objectStore.delete(key);
            request.onsuccess = ()=>{
                console.log(`[Storage] Deleted from ${store}:`, key);
                resolve();
            };
            request.onerror = ()=>{
                console.error(`[Storage] Failed to delete from ${store}:`, request.error);
                reject(request.error);
            };
        });
    }
    /**
   * Clear all data from a store
   */ async clearStore(store) {
        if (!this.db) {
            await this.init();
        }
        if (!this.db) {
            throw new Error("Database not initialized");
        }
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORES[store]
            ], "readwrite");
            const objectStore = transaction.objectStore(STORES[store]);
            const request = objectStore.clear();
            request.onsuccess = ()=>{
                console.log(`[Storage] Cleared store: ${store}`);
                resolve();
            };
            request.onerror = ()=>{
                console.error(`[Storage] Failed to clear ${store}:`, request.error);
                reject(request.error);
            };
        });
    }
    /**
   * Save to LocalStorage
   */ saveToLocalStorage(key, value) {
        if (("TURBOPACK compile-time value", "object") === "undefined" || !("localStorage" in window)) {
            console.warn("[Storage] LocalStorage not available");
            return;
        }
        try {
            const serialized = JSON.stringify(value);
            localStorage.setItem(key, serialized);
            console.log(`[Storage] Saved to localStorage: ${key}`);
        } catch (error) {
            console.error("[Storage] Failed to save to localStorage:", error);
        }
    }
    /**
   * Get from LocalStorage
   */ getFromLocalStorage(key) {
        if (("TURBOPACK compile-time value", "object") === "undefined" || !("localStorage" in window)) {
            return null;
        }
        try {
            const serialized = localStorage.getItem(key);
            if (serialized === null) {
                return null;
            }
            return JSON.parse(serialized);
        } catch (error) {
            console.error("[Storage] Failed to get from localStorage:", error);
            return null;
        }
    }
    /**
   * Remove from LocalStorage
   */ removeFromLocalStorage(key) {
        if (("TURBOPACK compile-time value", "object") === "undefined" || !("localStorage" in window)) {
            return;
        }
        try {
            localStorage.removeItem(key);
            console.log(`[Storage] Removed from localStorage: ${key}`);
        } catch (error) {
            console.error("[Storage] Failed to remove from localStorage:", error);
        }
    }
    /**
   * Clear all LocalStorage
   */ clearLocalStorage() {
        if (("TURBOPACK compile-time value", "object") === "undefined" || !("localStorage" in window)) {
            return;
        }
        try {
            localStorage.clear();
            console.log("[Storage] Cleared localStorage");
        } catch (error) {
            console.error("[Storage] Failed to clear localStorage:", error);
        }
    }
    /**
   * Get storage quota information
   */ async getStorageQuota() {
        if (("TURBOPACK compile-time value", "object") === "undefined" || !("navigator" in window) || !("storage" in navigator) || !("estimate" in navigator.storage)) {
            return {
                usage: 0,
                quota: 0,
                percentage: 0
            };
        }
        try {
            const estimate = await navigator.storage.estimate();
            const usage = estimate.usage || 0;
            const quota = estimate.quota || 0;
            const percentage = quota > 0 ? usage / quota * 100 : 0;
            return {
                usage,
                quota,
                percentage: Math.round(percentage * 100) / 100
            };
        } catch (error) {
            console.error("[Storage] Failed to get storage quota:", error);
            return {
                usage: 0,
                quota: 0,
                percentage: 0
            };
        }
    }
    /**
   * Clear all storage (IndexedDB + LocalStorage)
   */ async clearAllStorage() {
        // Clear IndexedDB
        const stores = Object.keys(STORES);
        for (const store of stores){
            try {
                await this.clearStore(store);
            } catch (error) {
                console.error(`[Storage] Failed to clear ${store}:`, error);
            }
        }
        // Clear LocalStorage
        this.clearLocalStorage();
        console.log("[Storage] All storage cleared");
    }
    /**
   * Export all data (for backup)
   */ async exportData() {
        const data = {};
        // Export IndexedDB data
        const stores = Object.keys(STORES);
        for (const store of stores){
            try {
                data[store] = await this.getAllFromIndexedDB(store);
            } catch (error) {
                console.error(`[Storage] Failed to export ${store}:`, error);
                data[store] = [];
            }
        }
        // Export LocalStorage data
        if (("TURBOPACK compile-time value", "object") !== "undefined" && "localStorage" in window) {
            data.localStorage = {};
            for(let i = 0; i < localStorage.length; i++){
                const key = localStorage.key(i);
                if (key) {
                    data.localStorage[key] = this.getFromLocalStorage(key);
                }
            }
        }
        return data;
    }
    /**
   * Import data (for restore)
   */ async importData(data) {
        // Import IndexedDB data
        const stores = Object.keys(STORES);
        for (const store of stores){
            if (data[store] && Array.isArray(data[store])) {
                for (const item of data[store]){
                    try {
                        await this.saveToIndexedDB(store, item.id, item);
                    } catch (error) {
                        console.error(`[Storage] Failed to import to ${store}:`, error);
                    }
                }
            }
        }
        // Import LocalStorage data
        if (data.localStorage && typeof data.localStorage === "object") {
            for (const [key, value] of Object.entries(data.localStorage)){
                this.saveToLocalStorage(key, value);
            }
        }
        console.log("[Storage] Data imported successfully");
    }
    /**
   * Close database connection
   */ close() {
        if (this.db) {
            this.db.close();
            this.db = null;
            console.log("[Storage] Database closed");
        }
    }
}
const storageManager = new StorageManager();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/pwa-init.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PWAInit",
    ()=>PWAInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$pwa$2f$register$2d$sw$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/pwa/register-sw.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$pwa$2f$storage$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/pwa/storage-manager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PWAInit() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PWAInit.useEffect": ()=>{
            // Initialize storage manager
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$pwa$2f$storage$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageManager"].init().catch({
                "PWAInit.useEffect": (error)=>{
                    console.error("Failed to initialize storage:", error);
                }
            }["PWAInit.useEffect"]);
            // Register service worker
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$pwa$2f$register$2d$sw$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerServiceWorker"])({
                onSuccess: {
                    "PWAInit.useEffect": ()=>{
                        console.log("✅ App is ready for offline use");
                    }
                }["PWAInit.useEffect"],
                onUpdate: {
                    "PWAInit.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("New version available!", {
                            description: "Refresh to update the app",
                            action: {
                                label: "Refresh",
                                onClick: {
                                    "PWAInit.useEffect": ()=>window.location.reload()
                                }["PWAInit.useEffect"]
                            },
                            duration: 10000
                        });
                    }
                }["PWAInit.useEffect"],
                onOffline: {
                    "PWAInit.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning("You are offline", {
                            description: "Some features may be limited"
                        });
                    }
                }["PWAInit.useEffect"],
                onOnline: {
                    "PWAInit.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Back online!", {
                            description: "All features are available"
                        });
                    }
                }["PWAInit.useEffect"],
                onError: {
                    "PWAInit.useEffect": (error)=>{
                        console.error("Service worker registration failed:", error);
                    }
                }["PWAInit.useEffect"]
            });
            // Listen for bell play events from service worker
            const handleBellPlay = {
                "PWAInit.useEffect.handleBellPlay": (event)=>{
                    const customEvent = event;
                    console.log("🔔 Bell play requested by service worker:", customEvent.detail);
                // The actual bell playing will be handled by the bell system
                }
            }["PWAInit.useEffect.handleBellPlay"];
            window.addEventListener("sw-play-bell", handleBellPlay);
            return ({
                "PWAInit.useEffect": ()=>{
                    window.removeEventListener("sw-play-bell", handleBellPlay);
                }
            })["PWAInit.useEffect"];
        }
    }["PWAInit.useEffect"], []);
    return null; // This component doesn't render anything
}
_s(PWAInit, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PWAInit;
var _c;
__turbopack_context__.k.register(_c, "PWAInit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_school-bell-system_1437bf44._.js.map