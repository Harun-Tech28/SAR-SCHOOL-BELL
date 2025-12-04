"use client"

import { useOnlineStatus } from "@/hooks/use-online-status"
import { WifiOff, Wifi } from "lucide-react"
import { useEffect, useState } from "react"

export interface OfflineIndicatorProps {
  position?: "top" | "bottom"
  showWhenOnline?: boolean
  customMessage?: string
}

/**
 * Offline Indicator Component
 * Shows a banner when the user is offline
 */
export function OfflineIndicator({
  position = "top",
  showWhenOnline = false,
  customMessage,
}: OfflineIndicatorProps) {
  const { isOnline, isOffline } = useOnlineStatus()
  const [showOnlineMessage, setShowOnlineMessage] = useState(false)

  useEffect(() => {
    if (isOnline && showWhenOnline) {
      setShowOnlineMessage(true)
      // Hide the online message after 3 seconds
      const timer = setTimeout(() => {
        setShowOnlineMessage(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isOnline, showWhenOnline])

  // Don't show anything if online and not showing online message
  if (isOnline && !showOnlineMessage) {
    return null
  }

  const positionClasses =
    position === "top"
      ? "top-0 left-0 right-0"
      : "bottom-0 left-0 right-0"

  return (
    <div
      className={`fixed ${positionClasses} z-50 animate-in slide-in-from-top duration-300`}
    >
      {isOffline && (
        <div className="bg-yellow-500 text-yellow-950 px-4 py-2 text-center text-sm font-medium flex items-center justify-center gap-2">
          <WifiOff className="h-4 w-4" />
          <span>
            {customMessage || "You are offline. Some features may be limited."}
          </span>
        </div>
      )}

      {isOnline && showOnlineMessage && (
        <div className="bg-green-500 text-green-950 px-4 py-2 text-center text-sm font-medium flex items-center justify-center gap-2 animate-in slide-in-from-top duration-300">
          <Wifi className="h-4 w-4" />
          <span>Back online! All features are available.</span>
        </div>
      )}
    </div>
  )
}
