"use client"

import { useEffect } from "react"
import { registerServiceWorker } from "@/lib/pwa/register-sw"
import { storageManager } from "@/lib/pwa/storage-manager"
import { pwaSWBridge } from "@/lib/pwa-sw-bridge"
import { useStore } from "@/lib/store"
import { toast } from "sonner"

/**
 * PWA Initialization Component
 * Registers service worker and handles PWA events
 */
export function PWAInit() {
  const timetables = useStore((state) => state.timetables);

  useEffect(() => {
    let mounted = true;

    async function initializePWA() {
      try {
        // Initialize storage manager
        await storageManager.init();
        console.log("✅ Storage manager initialized");

        // Register service worker for offline support
        registerServiceWorker({
          onSuccess: async () => {
            if (!mounted) return;
            
            console.log("✅ Service Worker registered successfully");
            
            // Initialize PWA-SW Bridge
            const bridgeInitialized = await pwaSWBridge.initialize();
            if (bridgeInitialized) {
              console.log("✅ PWA-SW Bridge initialized");
              
              // Request notification permission for background bells
              const permissionGranted = await pwaSWBridge.constructor.requestNotificationPermission();
              if (permissionGranted) {
                console.log("✅ Notification permission granted");
                toast.success("Background bells enabled", {
                  description: "Bells will ring even when the app is closed",
                  duration: 3000,
                });
              } else {
                console.warn("⚠️ Notification permission denied");
                toast.warning("Notifications blocked", {
                  description: "Enable notifications for background bells to work",
                  duration: 5000,
                });
              }
              
              // Try to register periodic sync (optional, may not be supported)
              await pwaSWBridge.constructor.registerPeriodicSync().catch(() => {
                console.log("ℹ️ Periodic sync not supported, using fallback");
              });
            }
          },
          onUpdate: () => {
            console.log("ℹ️ New version available");
            toast.info("Update available", {
              description: "A new version is available. Refresh when you're ready.",
              duration: 5000,
            });
          },
          onOffline: () => {
            console.log("📴 You are offline");
          },
          onOnline: () => {
            console.log("📶 Back online");
          },
          onError: (error) => {
            console.error("❌ Service worker registration failed:", error);
          },
        });

        // Listen for bell play messages from Service Worker
        pwaSWBridge.onMessage('PLAY_BELL', async (data) => {
          console.log("🔔 Bell play requested by Service Worker:", data);
          
          // Import and play bell using the complete bell system
          try {
            const { CompleteBellSystem } = await import("@/lib/complete-bell-system");
            const schedule = data.payload || data;
            
            // Play the bell
            await CompleteBellSystem.playBell(
              schedule.bellType || 'bell',
              schedule.customMessage || schedule.timetableName,
              {
                voice: schedule.voice,
                repeatCount: 1
              }
            );
          } catch (error) {
            console.error("Failed to play bell:", error);
          }
        });

      } catch (error) {
        console.error("❌ PWA initialization failed:", error);
      }
    }

    initializePWA();

    return () => {
      mounted = false;
    };
  }, []);

  // Sync timetables to Service Worker whenever they change
  useEffect(() => {
    if (timetables.length > 0 && pwaSWBridge.isActive()) {
      pwaSWBridge.syncTimetables(timetables).catch((error) => {
        console.error("Failed to sync timetables to Service Worker:", error);
      });
    }
  }, [timetables]);

  return null; // This component doesn't render anything
}
