"use client"

import { useEffect } from "react"
import { useStore } from "@/lib/store"

/**
 * Component to handle storage synchronization before app closes
 * Ensures data is saved to disk in Electron before window closes
 */
export function StorageSync() {
  // Get all the state we need
  const students = useStore((state) => state.students)
  const timetables = useStore((state) => state.timetables)
  const devices = useStore((state) => state.devices)
  const callRequests = useStore((state) => state.callRequests)
  const settings = useStore((state) => state.settings)

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return

    const handleBeforeUnload = async (e: BeforeUnloadEvent) => {
      // Check if running in Electron
      const isElectron = (window as any).electronAPI?.isElectron === true

      if (isElectron) {
        console.log('[StorageSync] App closing - forcing save to disk...')
        
        // Build the state object
        const state = {
          students,
          timetables,
          devices,
          callRequests,
          settings
        }
        const stateJSON = JSON.stringify({ state, version: 1 })
        
        // Force immediate save to file system
        try {
          await (window as any).electronAPI.saveZustandState('school-bell-storage', stateJSON)
          console.log('[StorageSync] ✅ Data saved successfully before close')
        } catch (error) {
          console.error('[StorageSync] ❌ Failed to save before close:', error)
        }
      }
    }

    // Add event listener
    window.addEventListener('beforeunload', handleBeforeUnload)

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [students, timetables, devices, callRequests, settings])

  // This component doesn't render anything
  return null
}
