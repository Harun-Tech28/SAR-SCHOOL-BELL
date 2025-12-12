"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Info, RefreshCw } from "lucide-react"

interface StorageHealth {
  localStorage: {
    available: boolean
    used: number
    message: string
  }
  fileSystem?: {
    available: boolean
    path: string
    message: string
  }
  lastSave?: {
    timestamp: string
    success: boolean
    error?: string
  }
}

export function StorageDiagnostics() {
  const [health, setHealth] = useState<StorageHealth | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  const checkHealth = async () => {
    setIsChecking(true)
    
    try {
      // Check localStorage
      const localStorageHealth = {
        available: false,
        used: 0,
        message: ""
      }

      try {
        const testKey = "__storage_test__"
        window.localStorage.setItem(testKey, "test")
        window.localStorage.removeItem(testKey)
        
        let used = 0
        for (let key in window.localStorage) {
          if (window.localStorage.hasOwnProperty(key)) {
            used += window.localStorage.getItem(key)?.length || 0
          }
        }
        
        localStorageHealth.available = true
        localStorageHealth.used = Math.round(used / 1024)
        localStorageHealth.message = `Working. Using ~${Math.round(used / 1024)}KB`
      } catch (error: any) {
        localStorageHealth.message = `Error: ${error.message}`
      }

      // Check file system (Electron only)
      let fileSystemHealth = undefined
      if ((window as any).electronAPI) {
        try {
          const dataPath = await (window as any).electronAPI.getDataPath()
          fileSystemHealth = {
            available: true,
            path: dataPath,
            message: "File system storage available"
          }
        } catch (error: any) {
          fileSystemHealth = {
            available: false,
            path: "",
            message: `Error: ${error.message}`
          }
        }
      }

      setHealth({
        localStorage: localStorageHealth,
        fileSystem: fileSystemHealth
      })
    } catch (error) {
      console.error("Health check failed:", error)
    } finally {
      setIsChecking(false)
    }
  }

  useEffect(() => {
    checkHealth()

    // Listen for storage events
    const handleStorageError = (event: Event) => {
      const customEvent = event as CustomEvent
      console.error("Storage error detected:", customEvent.detail)
      
      setHealth(prev => prev ? {
        ...prev,
        lastSave: {
          timestamp: new Date().toISOString(),
          success: false,
          error: customEvent.detail.message
        }
      } : null)
    }

    const handleStorageWarning = (event: Event) => {
      const customEvent = event as CustomEvent
      console.warn("Storage warning:", customEvent.detail)
    }

    window.addEventListener("storage-error", handleStorageError)
    window.addEventListener("storage-warning", handleStorageWarning)

    return () => {
      window.removeEventListener("storage-error", handleStorageError)
      window.removeEventListener("storage-warning", handleStorageWarning)
    }
  }, [])

  if (!health) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Storage Diagnostics</CardTitle>
          <CardDescription>Checking storage health...</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Storage Diagnostics
          <Button
            variant="outline"
            size="sm"
            onClick={checkHealth}
            disabled={isChecking}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isChecking ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </CardTitle>
        <CardDescription>Monitor storage system health</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* localStorage Status */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">Browser Storage (localStorage)</span>
            {health.localStorage.available ? (
              <Badge variant="default" className="bg-green-500">
                <CheckCircle className="h-3 w-3 mr-1" />
                Available
              </Badge>
            ) : (
              <Badge variant="destructive">
                <AlertCircle className="h-3 w-3 mr-1" />
                Unavailable
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{health.localStorage.message}</p>
        </div>

        {/* File System Status (Electron only) */}
        {health.fileSystem && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">File System Storage</span>
              {health.fileSystem.available ? (
                <Badge variant="default" className="bg-green-500">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Available
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Unavailable
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{health.fileSystem.message}</p>
            {health.fileSystem.path && (
              <p className="text-xs text-muted-foreground font-mono">
                Path: {health.fileSystem.path}
              </p>
            )}
          </div>
        )}

        {/* Last Save Status */}
        {health.lastSave && (
          <div className="space-y-2 border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Last Save Operation</span>
              {health.lastSave.success ? (
                <Badge variant="default" className="bg-green-500">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Success
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Failed
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {new Date(health.lastSave.timestamp).toLocaleString()}
            </p>
            {health.lastSave.error && (
              <p className="text-sm text-destructive">{health.lastSave.error}</p>
            )}
          </div>
        )}

        {/* Info */}
        <div className="flex items-start gap-2 text-sm text-muted-foreground border-t pt-4">
          <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <p>
            Open the browser console (F12) to see detailed storage operation logs.
            All save and load operations are logged with timestamps and verification status.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
