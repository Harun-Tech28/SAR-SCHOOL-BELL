// Install Prompt Manager for PWA
// Handles the beforeinstallprompt event and install flow

export interface InstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

export class InstallPromptManager {
  private deferredPrompt: InstallPromptEvent | null = null
  private isInstalled = false

  constructor() {
    if (typeof window !== "undefined") {
      this.init()
    }
  }

  private init() {
    // Listen for beforeinstallprompt event
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault()
      this.deferredPrompt = e as InstallPromptEvent
      console.log("[Install] Install prompt available")
    })

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      this.isInstalled = true
      console.log("[Install] App is already installed")
    }

    // Listen for app installed event
    window.addEventListener("appinstalled", () => {
      this.isInstalled = true
      this.deferredPrompt = null
      console.log("[Install] App was installed")
    })
  }

  /**
   * Capture the install prompt event
   */
  capturePrompt(event: InstallPromptEvent): void {
    this.deferredPrompt = event
  }

  /**
   * Show the install prompt
   */
  async showInstallPrompt(): Promise<"accepted" | "dismissed" | "unavailable"> {
    if (!this.deferredPrompt) {
      console.warn("[Install] Install prompt not available")
      return "unavailable"
    }

    try {
      // Show the install prompt
      await this.deferredPrompt.prompt()

      // Wait for the user's response
      const { outcome } = await this.deferredPrompt.userChoice

      console.log(`[Install] User ${outcome} the install prompt`)

      // Clear the deferred prompt
      this.deferredPrompt = null

      return outcome
    } catch (error) {
      console.error("[Install] Error showing install prompt:", error)
      return "unavailable"
    }
  }

  /**
   * Check if the app is already installed
   */
  isAppInstalled(): boolean {
    if (typeof window === "undefined") {
      return false
    }

    // Check if running in standalone mode
    if (window.matchMedia("(display-mode: standalone)").matches) {
      return true
    }

    // Check if running as installed PWA on iOS
    if ((window.navigator as any).standalone === true) {
      return true
    }

    return this.isInstalled
  }

  /**
   * Check if install prompt is available
   */
  canInstall(): boolean {
    return this.deferredPrompt !== null && !this.isAppInstalled()
  }

  /**
   * Get platform information
   */
  getPlatform(): "ios" | "android" | "desktop" | "unknown" {
    if (typeof window === "undefined") {
      return "unknown"
    }

    const userAgent = window.navigator.userAgent.toLowerCase()

    if (/iphone|ipad|ipod/.test(userAgent)) {
      return "ios"
    }

    if (/android/.test(userAgent)) {
      return "android"
    }

    if (/windows|mac|linux/.test(userAgent)) {
      return "desktop"
    }

    return "unknown"
  }

  /**
   * Get install instructions based on platform
   */
  getInstallInstructions(): string {
    const platform = this.getPlatform()

    switch (platform) {
      case "ios":
        return 'Tap the Share button and select "Add to Home Screen"'
      case "android":
        return 'Tap the menu and select "Install app" or "Add to Home screen"'
      case "desktop":
        return 'Click the install icon in the address bar or use the install button'
      default:
        return "Use your browser's install option to add this app to your device"
    }
  }
}

// Export singleton instance
export const installPromptManager = new InstallPromptManager()
