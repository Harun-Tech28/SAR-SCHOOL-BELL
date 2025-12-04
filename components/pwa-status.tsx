"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wifi, WifiOff, Download, HardDrive, Trash2, RefreshCw } from "lucide-react"
import { useOnlineStatus } from "@/hooks/use-online-status"
import { getCacheInfo, clearAllCaches, updateServiceWorker } from "@/lib/pwa/register-sw"
import { storageManager } from "@/lib/pwa/storage-manager"
import { toast } from "sonner"

/**
 * PWA Status Component
 * Shows installation status, cache size, storage quota, and online/offline status
 */
export function PWAStatus() {
  const { isOnline } = useOnlineStatus()
  const [isInstalled, setIsInstalled] = useState(false)
  const [cacheSize, setCacheSize] = useState(0)
  const [cacheCount, setCacheCount] = useState(0)
  const [storageQuota, setStorageQuota] = useState({ usage: 0, quota: 0, percentage: 0 })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    checkInstallStatus()
    loadCacheInfo()
    loadStorageQuota()
  }, [])

  const checkInstallStatus = () => {
    // Check if app is installed (running in standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    const isIOSStandalone = (window.navigator as any).standalone === true
    setIsInstalled(isStandalone || isIOSStandalone)
  }

  const loadCacheInfo = async () => {
    try {
      const info = await getCacheInfo()
      setCacheSize(info.totalSize)
      setCacheCount(info.caches.length)
    } catch (error) {
      console.error('Failed to load cache info:', error)
    }
  }

  const loadStorageQuota = async () => {
    try {
      const quota = await storageManager.getStorageQuota()
      setStorageQuota(quota)
    } catch (error) {
      console.error('Failed to load storage quota:', error)
    }
  }

  const handleClearCache = async () => {
    if (!confirm('Are you sure you want to clear all cached data? The app will reload.')) {
      return
    }

    setIsLoading(true)
    try {
      await clearAllCaches()
      toast.success('Cache cleared successfully')
      // Reload to re-cache essential assets
      window.location.reload()
    } catch (error) {
      console.error('Failed to clear cache:', error)
      toast.error('Failed to clear cache')
      setIsLoading(false)
    }
  }

  const handleCheckUpdates = async () => {
    setIsLoading(true)
    try {
      await updateServiceWorker()
      toast.success('Checking for updates...')
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to check for updates:', error)
      toast.error('Failed to check for updates')
      setIsLoading(false)
    }
  }

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>PWA Status</CardTitle>
        <CardDescription>
          Progressive Web App installation and storage information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Installation Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Download className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Installation</span>
          </div>
          <Badge variant={isInstalled ? "default" : "secondary"}>
            {isInstalled ? "Installed" : "Not Installed"}
          </Badge>
        </div>

        {/* Online Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isOnline ? (
              <Wifi className="h-4 w-4 text-green-600" />
            ) : (
              <WifiOff className="h-4 w-4 text-orange-600" />
            )}
            <span className="text-sm font-medium">Connection</span>
          </div>
          <Badge variant={isOnline ? "default" : "secondary"}>
            {isOnline ? "Online" : "Offline"}
          </Badge>
        </div>

        {/* Cache Information */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Cache Size</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {formatBytes(cacheSize)} ({cacheCount} caches)
            </span>
          </div>
        </div>

        {/* Storage Quota */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Storage Used</span>
            <span className="text-sm text-muted-foreground">
              {formatBytes(storageQuota.usage)} / {formatBytes(storageQuota.quota)}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2 transition-all"
              style={{ width: `${Math.min(storageQuota.percentage, 100)}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            {storageQuota.percentage.toFixed(1)}% of available storage
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCheckUpdates}
            disabled={isLoading}
            className="flex-1"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Check Updates
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearCache}
            disabled={isLoading}
            className="flex-1"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cache
          </Button>
        </div>

        {!isInstalled && (
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground">
              Install this app on your device for the best offline experience. Look for the install button in your browser or on the dashboard.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
