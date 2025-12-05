"use client"

import { useEffect } from "react"
import { registerServiceWorker } from "@/lib/pwa/register-sw"
import { storageManager } from "@/lib/pwa/storage-manager"
import { toast } from "sonner"

/**
 * PWA Initialization Component
 * Registers service worker and handles PWA events
 */
export function PWAInit() {
  useEffect(() => {
    // Initialize storage manager
    storageManager.init().catch((error) => {
      console.error("Failed to initialize storage:", error);
    });

    // Register service worker for offline support
    // Fixed: Removed automatic page reloads that were causing data loss
    registerServiceWorker({
      onSuccess: () => {
        console.log("✅ App is ready for offline use");
      },
      onUpdate: () => {
        console.log("ℹ️ New version available. Refresh the page when convenient to update.");
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
        console.error("Service worker registration failed:", error);
      },
    });

    // Listen for bell play events from service worker
    const handleBellPlay = (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log("🔔 Bell play requested by service worker:", customEvent.detail);
      // The actual bell playing will be handled by the bell system
    };

    window.addEventListener("sw-play-bell", handleBellPlay);

    return () => {
      window.removeEventListener("sw-play-bell", handleBellPlay);
    };
  }, []);

  return null; // This component doesn't render anything
}
