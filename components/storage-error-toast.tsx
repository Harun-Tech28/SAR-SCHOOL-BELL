"use client"

import { useEffect, useState } from "react"
import { AlertCircle, CheckCircle, X } from "lucide-react"

interface StorageNotification {
  message: string
  type: 'error' | 'warning' | 'success'
}

export function StorageErrorToast() {
  const [notification, setNotification] = useState<StorageNotification | null>(null)

  useEffect(() => {
    // Listen for storage errors
    const handleStorageError = (event: Event) => {
      const customEvent = event as CustomEvent
      setNotification({
        message: customEvent.detail.message,
        type: customEvent.detail.type
      })

      // Auto-dismiss after 10 seconds for warnings, keep errors visible
      if (customEvent.detail.type !== 'error') {
        setTimeout(() => setNotification(null), 10000)
      }
    }

    const handleStorageWarning = (event: Event) => {
      const customEvent = event as CustomEvent
      setNotification({
        message: customEvent.detail.message,
        type: customEvent.detail.type
      })

      // Auto-dismiss warnings after 8 seconds
      setTimeout(() => setNotification(null), 8000)
    }

    window.addEventListener('storage-error', handleStorageError)
    window.addEventListener('storage-warning', handleStorageWarning)

    return () => {
      window.removeEventListener('storage-error', handleStorageError)
      window.removeEventListener('storage-warning', handleStorageWarning)
    }
  }, [])

  if (!notification) return null

  const bgColor = notification.type === 'error' 
    ? 'bg-red-500' 
    : notification.type === 'warning'
    ? 'bg-yellow-500'
    : 'bg-green-500'

  const Icon = notification.type === 'error' 
    ? AlertCircle 
    : notification.type === 'warning'
    ? AlertCircle
    : CheckCircle

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg max-w-md flex items-start gap-3`}>
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-semibold">
            {notification.type === 'error' ? 'Save Failed!' : 
             notification.type === 'warning' ? 'Warning' : 'Success'}
          </p>
          <p className="text-sm mt-1">{notification.message}</p>
          {notification.type === 'error' && (
            <p className="text-xs mt-2 opacity-90">
              Please check your disk space and try again. Contact support if the problem persists.
            </p>
          )}
        </div>
        <button
          onClick={() => setNotification(null)}
          className="flex-shrink-0 hover:bg-white/20 rounded p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
