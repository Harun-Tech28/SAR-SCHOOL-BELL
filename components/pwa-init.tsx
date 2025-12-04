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

    // Register service worker
    registerServiceWorker({
      onSuccess: () => {
        console.log("✅ App is ready for offline use");
      },
      onUpdate: () => {
        toast.info("New version available!", {
          description: "Refresh to update the app",
          action: {
            label: "Refresh",
            onClick: () => window.location.reload(),
          },
          duration: 10000,
        });
      },
      onOffline: () => {
        toast.warning("You are offline", {
          description: "Some features may be limited",
        });
      },
      onOnline: () => {
        toast.success("Back online!", {
          description: "All features are available",
        });
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
