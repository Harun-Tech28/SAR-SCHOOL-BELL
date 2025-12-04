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
"[project]/Downloads/school-bell-system/components/pwa-init.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PWAInit",
    ()=>PWAInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$pwa$2f$register$2d$sw$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/pwa/register-sw.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PWAInit() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PWAInit.useEffect": ()=>{
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

//# sourceMappingURL=Downloads_school-bell-system_53cce03b._.js.map