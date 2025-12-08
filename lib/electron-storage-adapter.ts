/**
 * Electron Storage Adapter for Zustand
 * 
 * Provides localStorage persistence for Zustand store.
 * Simplified and reliable version.
 */

import { StateStorage } from 'zustand/middleware';
import { isElectron } from './electron-utils';

export class ElectronStorageAdapter implements StateStorage {
  private storeName: string;
  private useElectronFS: boolean;
  private saveTimeout: any = null;

  constructor(storeName: string = 'app-store') {
    this.storeName = storeName;
    this.useElectronFS = isElectron();
    console.log('[ElectronStorage] Adapter initialized for:', storeName, 'Using Electron FS:', this.useElectronFS);
  }

  getItem(name: string): string | null {
    try {
      if (typeof window === 'undefined') {
        return null;
      }

      // In Electron, try to load from file system via IPC (synchronously on first load)
      if (this.useElectronFS && (window as any).electronAPI) {
        // Check localStorage first for immediate access
        const localValue = window.localStorage.getItem(name);
        if (localValue) {
          console.log('[ElectronStorage] ✅ Loaded from localStorage, length:', localValue.length);
          return localValue;
        }

        // If not in localStorage, try to load from file system
        // This will be async, so we return null and let Zustand handle rehydration
        (window as any).electronAPI.loadZustandState(name).then((result: any) => {
          if (result.success && result.data) {
            console.log('[ElectronStorage] ✅ Loaded from file system, length:', result.data.length);
            // Store in localStorage for next time
            window.localStorage.setItem(name, result.data);
            // Trigger a storage event to notify Zustand
            window.dispatchEvent(new StorageEvent('storage', {
              key: name,
              newValue: result.data,
              url: window.location.href
            }));
          }
        }).catch((error: any) => {
          console.error('[ElectronStorage] Failed to load from file system:', error);
        });
      }

      // Return localStorage value (or null if not found)
      const value = window.localStorage.getItem(name);
      if (value) {
        console.log('[ElectronStorage] ✅ Loaded data, length:', value.length);
      }
      return value;
    } catch (error) {
      console.error('[ElectronStorage] Error reading:', error);
      return null;
    }
  }

  setItem(name: string, value: string): void {
    try {
      if (typeof window === 'undefined') {
        console.warn('[ElectronStorage] Cannot save - window undefined');
        return;
      }

      // Save to localStorage immediately
      window.localStorage.setItem(name, value);
      console.log('[ElectronStorage] ✅ Saved to localStorage, length:', value.length);

      // In Electron, ALSO save to file system via IPC (debounced)
      if (this.useElectronFS && (window as any).electronAPI) {
        // Clear existing timeout
        if (this.saveTimeout) {
          clearTimeout(this.saveTimeout);
        }

        // Debounce file system writes
        this.saveTimeout = setTimeout(() => {
          (window as any).electronAPI.saveZustandState(name, value).then((result: any) => {
            if (result.success) {
              console.log('[ElectronStorage] ✅ Saved to file system');
            } else {
              console.error('[ElectronStorage] ❌ Failed to save to file system:', result.error);
            }
          }).catch((error: any) => {
            console.error('[ElectronStorage] ❌ File system save error:', error);
          });
        }, 500); // Wait 500ms before writing to disk
      }

      // Log what we're saving
      try {
        const parsed = JSON.parse(value);
        if (parsed.state) {
          console.log('[ElectronStorage] 📊 Saving state with:', {
            students: parsed.state.students?.length || 0,
            timetables: parsed.state.timetables?.length || 0,
            devices: parsed.state.devices?.length || 0,
          });
        }
      } catch (e) {
        // Ignore parse errors
      }

    } catch (error: any) {
      console.error('[ElectronStorage] ❌ FAILED to save:', error);
    }
  }

  removeItem(name: string): void {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(name);
        console.log('[ElectronStorage] Removed:', name);
      }
    } catch (error) {
      console.error('[ElectronStorage] Error removing:', error);
    }
  }
}

/**
 * Create storage adapter
 */
export function createStorageAdapter(storeName?: string): StateStorage {
  return new ElectronStorageAdapter(storeName);
}

/**
 * Get storage type for debugging
 */
export function getStorageType(): 'electron' | 'browser' {
  return isElectron() ? 'electron' : 'browser';
}

/**
 * Check storage health
 */
export function checkStorageHealth(): { available: boolean; used: number; message: string } {
  try {
    if (typeof window === 'undefined') {
      return { available: false, used: 0, message: 'Window not available' };
    }

    // Test write/read
    const testKey = '__storage_test__';
    window.localStorage.setItem(testKey, 'test');
    window.localStorage.removeItem(testKey);

    // Estimate used storage
    let used = 0;
    for (let key in window.localStorage) {
      if (window.localStorage.hasOwnProperty(key)) {
        used += window.localStorage.getItem(key)?.length || 0;
      }
    }

    return {
      available: true,
      used: Math.round(used / 1024), // KB
      message: `Storage working. Using ~${Math.round(used / 1024)}KB`
    };
  } catch (error) {
    return { available: false, used: 0, message: `Storage error: ${error}` };
  }
}
