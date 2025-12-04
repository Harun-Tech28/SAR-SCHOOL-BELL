"use client"

import { useEffect, useState } from "react"

export interface OnlineStatus {
  isOnline: boolean
  isOffline: boolean
  effectiveType?: string
  downlink?: number
  rtt?: number
}

/**
 * Hook to detect online/offline status
 * Also provides network quality information if available
 */
export function useOnlineStatus(): OnlineStatus {
  const [isOnline, setIsOnline] = useState(true)
  const [networkInfo, setNetworkInfo] = useState<{
    effectiveType?: string
    downlink?: number
    rtt?: number
  }>({})

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") {
      return
    }

    // Set initial online status
    setIsOnline(navigator.onLine)

    // Update network info if available
    const updateNetworkInfo = () => {
      if ("connection" in navigator) {
        const connection = (navigator as any).connection
        setNetworkInfo({
          effectiveType: connection?.effectiveType,
          downlink: connection?.downlink,
          rtt: connection?.rtt,
        })
      }
    }

    updateNetworkInfo()

    // Listen for online/offline events
    const handleOnline = () => {
      console.log("[Network] Back online")
      setIsOnline(true)
      updateNetworkInfo()
    }

    const handleOffline = () => {
      console.log("[Network] Gone offline")
      setIsOnline(false)
    }

    // Listen for network quality changes
    const handleConnectionChange = () => {
      updateNetworkInfo()
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // Listen for connection changes if available
    if ("connection" in navigator) {
      const connection = (navigator as any).connection
      connection?.addEventListener("change", handleConnectionChange)
    }

    // Cleanup
    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)

      if ("connection" in navigator) {
        const connection = (navigator as any).connection
        connection?.removeEventListener("change", handleConnectionChange)
      }
    }
  }, [])

  return {
    isOnline,
    isOffline: !isOnline,
    ...networkInfo,
  }
}
