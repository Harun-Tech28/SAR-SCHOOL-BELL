"use client"

import { useEffect, useState } from "react"
import { Download, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { installPromptManager } from "@/lib/pwa/install-prompt"
import { toast } from "sonner"

export interface InstallButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  onInstallSuccess?: () => void
  onInstallDismiss?: () => void
}

/**
 * Install Button Component
 * Shows a button to install the PWA
 */
export function InstallButton({
  variant = "default",
  size = "default",
  onInstallSuccess,
  onInstallDismiss,
}: InstallButtonProps) {
  const [canInstall, setCanInstall] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isInstalling, setIsInstalling] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    setIsInstalled(installPromptManager.isAppInstalled())

    // Check if install prompt is available
    const checkInstallability = () => {
      setCanInstall(installPromptManager.canInstall())
    }

    checkInstallability()

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = () => {
      checkInstallability()
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setCanInstall(false)
      toast.success("App installed successfully!", {
        description: "You can now use the app offline",
      })
      onInstallSuccess?.()
    }

    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      )
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [onInstallSuccess])

  const handleInstall = async () => {
    setIsInstalling(true)

    try {
      const result = await installPromptManager.showInstallPrompt()

      if (result === "accepted") {
        toast.success("Installing app...", {
          description: "The app will be added to your home screen",
        })
        onInstallSuccess?.()
      } else if (result === "dismissed") {
        toast.info("Installation cancelled", {
          description: "You can install the app later from the menu",
        })
        onInstallDismiss?.()
      } else {
        // Show platform-specific instructions
        const instructions = installPromptManager.getInstallInstructions()
        toast.info("Install this app", {
          description: instructions,
          duration: 5000,
        })
      }
    } catch (error) {
      console.error("Install error:", error)
      toast.error("Installation failed", {
        description: "Please try again or use your browser's install option",
      })
    } finally {
      setIsInstalling(false)
    }
  }

  // Don't show button if already installed
  if (isInstalled) {
    return (
      <Button variant="outline" size={size} disabled>
        <Check className="mr-2 h-4 w-4" />
        Installed
      </Button>
    )
  }

  // Don't show button if can't install
  if (!canInstall) {
    return null
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleInstall}
      disabled={isInstalling}
    >
      <Download className="mr-2 h-4 w-4" />
      {isInstalling ? "Installing..." : "Install App"}
    </Button>
  )
}
