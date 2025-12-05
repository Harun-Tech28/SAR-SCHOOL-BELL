/**
 * Electron utility functions for detecting and interacting with Electron environment
 */

/**
 * Check if the app is running in Electron
 */
export function isElectron(): boolean {
  if (typeof window === 'undefined') return false;
  return window.electronAPI?.isElectron === true;
}

/**
 * Get the Electron API if available
 */
export function getElectronAPI() {
  if (typeof window === 'undefined') return null;
  return window.electronAPI || null;
}

/**
 * Check if a specific Electron feature is available
 */
export function hasElectronFeature(feature: keyof NonNullable<typeof window.electronAPI>): boolean {
  const api = getElectronAPI();
  return api !== null && typeof api[feature] !== 'undefined';
}

/**
 * Get platform information
 */
export function getPlatform(): string {
  const api = getElectronAPI();
  if (api) {
    return api.platform;
  }
  // Fallback to browser detection
  if (typeof navigator !== 'undefined') {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) return 'win32';
    if (userAgent.includes('mac')) return 'darwin';
    if (userAgent.includes('linux')) return 'linux';
  }
  return 'unknown';
}

/**
 * Check if running on Windows
 */
export function isWindows(): boolean {
  return getPlatform() === 'win32';
}

/**
 * Check if running on macOS
 */
export function isMacOS(): boolean {
  return getPlatform() === 'darwin';
}

/**
 * Check if running on Linux
 */
export function isLinux(): boolean {
  return getPlatform() === 'linux';
}

/**
 * Safe wrapper for Electron API calls
 */
export async function safeElectronCall<T>(
  fn: () => Promise<T>,
  fallback: T
): Promise<T> {
  if (!isElectron()) {
    return fallback;
  }
  
  try {
    return await fn();
  } catch (error) {
    console.error('Electron API call failed:', error);
    return fallback;
  }
}

/**
 * Show a notification (works in both Electron and browser)
 */
export function showNotification(title: string, body: string): void {
  const api = getElectronAPI();
  
  if (api) {
    // Use Electron notification
    api.showNotification(title, body);
  } else if ('Notification' in window && Notification.permission === 'granted') {
    // Use browser notification
    new Notification(title, { body });
  } else if ('Notification' in window) {
    // Request permission first
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification(title, { body });
      }
    });
  }
}
