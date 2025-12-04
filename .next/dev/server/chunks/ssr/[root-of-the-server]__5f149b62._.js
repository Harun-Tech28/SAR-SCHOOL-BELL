module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/school-bell-system/lib/pwa/register-sw.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('serviceWorker' in navigator)) {
        console.warn('[SW] Service workers are not supported in this browser');
        return;
    }
    //TURBOPACK unreachable
    ;
}
async function unregisterServiceWorker() {
    if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('serviceWorker' in navigator)) {
        return false;
    }
    //TURBOPACK unreachable
    ;
}
function getServiceWorkerRegistration() {
    return swRegistration;
}
async function isServiceWorkerActive() {
    if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('serviceWorker' in navigator)) {
        return false;
    }
    //TURBOPACK unreachable
    ;
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
    if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('serviceWorker' in navigator)) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
async function getCacheInfo() {
    if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('caches' in window)) {
        return {
            caches: [],
            totalSize: 0
        };
    }
    //TURBOPACK unreachable
    ;
}
async function clearAllCaches() {
    if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('caches' in window)) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
}),
"[project]/Downloads/school-bell-system/lib/pwa/storage-manager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        if (("TURBOPACK compile-time value", "undefined") === "undefined" || !("indexedDB" in window)) {
            console.warn("[Storage] IndexedDB not available");
            return;
        }
        //TURBOPACK unreachable
        ;
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
        if (("TURBOPACK compile-time value", "undefined") === "undefined" || !("localStorage" in window)) {
            console.warn("[Storage] LocalStorage not available");
            return;
        }
        //TURBOPACK unreachable
        ;
    }
    /**
   * Get from LocalStorage
   */ getFromLocalStorage(key) {
        if (("TURBOPACK compile-time value", "undefined") === "undefined" || !("localStorage" in window)) {
            return null;
        }
        //TURBOPACK unreachable
        ;
    }
    /**
   * Remove from LocalStorage
   */ removeFromLocalStorage(key) {
        if (("TURBOPACK compile-time value", "undefined") === "undefined" || !("localStorage" in window)) {
            return;
        }
        //TURBOPACK unreachable
        ;
    }
    /**
   * Clear all LocalStorage
   */ clearLocalStorage() {
        if (("TURBOPACK compile-time value", "undefined") === "undefined" || !("localStorage" in window)) {
            return;
        }
        //TURBOPACK unreachable
        ;
    }
    /**
   * Get storage quota information
   */ async getStorageQuota() {
        if (("TURBOPACK compile-time value", "undefined") === "undefined" || !("navigator" in window) || !("storage" in navigator) || !("estimate" in navigator.storage)) {
            return {
                usage: 0,
                quota: 0,
                percentage: 0
            };
        }
        //TURBOPACK unreachable
        ;
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
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && "localStorage" in window) //TURBOPACK unreachable
        ;
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
}),
"[project]/Downloads/school-bell-system/components/pwa-init.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PWAInit",
    ()=>PWAInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$pwa$2f$register$2d$sw$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/pwa/register-sw.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$pwa$2f$storage$2d$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/pwa/storage-manager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function PWAInit() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initialize storage manager
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$pwa$2f$storage$2d$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageManager"].init().catch((error)=>{
            console.error("Failed to initialize storage:", error);
        });
        // Register service worker
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$pwa$2f$register$2d$sw$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerServiceWorker"])({
            onSuccess: ()=>{
                console.log("✅ App is ready for offline use");
            },
            onUpdate: ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("New version available!", {
                    description: "Refresh to update the app",
                    action: {
                        label: "Refresh",
                        onClick: ()=>window.location.reload()
                    },
                    duration: 10000
                });
            },
            onOffline: ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning("You are offline", {
                    description: "Some features may be limited"
                });
            },
            onOnline: ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Back online!", {
                    description: "All features are available"
                });
            },
            onError: (error)=>{
                console.error("Service worker registration failed:", error);
            }
        });
        // Listen for bell play events from service worker
        const handleBellPlay = (event)=>{
            const customEvent = event;
            console.log("🔔 Bell play requested by service worker:", customEvent.detail);
        // The actual bell playing will be handled by the bell system
        };
        window.addEventListener("sw-play-bell", handleBellPlay);
        return ()=>{
            window.removeEventListener("sw-play-bell", handleBellPlay);
        };
    }, []);
    return null; // This component doesn't render anything
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5f149b62._.js.map