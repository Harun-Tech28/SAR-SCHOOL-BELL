// lib/background-sync.ts
import { Timetable } from "./store"

export const registerBellSync = async () => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return

    try {
        const registration = await navigator.serviceWorker.register('/sw.js')
        console.log('Service Worker registered with scope:', registration.scope)

        // Register periodic sync if supported
        if ('periodicSync' in registration) {
            try {
                // @ts-ignore - periodicSync is not yet in standard types
                const status = await navigator.permissions.query({ name: 'periodic-background-sync' })
                if (status.state === 'granted') {
                    // @ts-ignore
                    await registration.periodicSync.register('bell-schedule', {
                        minInterval: 60 * 1000 // 1 minute
                    })
                    console.log('Periodic sync registered')
                }
            } catch (e) {
                console.warn('Periodic sync registration failed:', e)
            }
        }
    } catch (error) {
        console.error('Service Worker registration failed:', error)
    }
}

// Sync timetables to IndexedDB for the Service Worker to read
export const syncTimetablesToSW = async (timetables: Timetable[]) => {
    if (typeof window === 'undefined') return

    return new Promise<void>((resolve, reject) => {
        const request = indexedDB.open('SchoolBellSyncDB', 1)

        request.onerror = () => reject(request.error)

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result
            if (!db.objectStoreNames.contains('timetables')) {
                db.createObjectStore('timetables', { keyPath: 'id' })
            }
        }

        request.onsuccess = () => {
            const db = request.result
            const transaction = db.transaction('timetables', 'readwrite')
            const store = transaction.objectStore('timetables')

            // Clear existing
            store.clear()

            // Add all timetables
            timetables.forEach(tt => {
                store.put(tt)
            })

            transaction.oncomplete = () => resolve()
            transaction.onerror = () => reject(transaction.error)
        }
    })
}
