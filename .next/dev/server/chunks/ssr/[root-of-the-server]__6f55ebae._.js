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
"[project]/Downloads/school-bell-system/components/pwa-init.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PWAInit",
    ()=>PWAInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$pwa$2f$register$2d$sw$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/pwa/register-sw.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function PWAInit() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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

//# sourceMappingURL=%5Broot-of-the-server%5D__6f55ebae._.js.map