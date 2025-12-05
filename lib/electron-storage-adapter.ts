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

  constructor(storeName: string = 'app-store') {
    this.storeName = storeName;
    console.log('[ElectronStorage] Adapter initialized for:', storeName);
  }

  getItem(name: string): string | null {
    try {
      if (typeof window === 'undefined') {
        return null;
      }

      const value = window.localStorage.getItem(name);
      if (value) {
        console.log('[ElectronStorage] ✅ Loaded data, length:', value.length);
        
        // Validate JSON before returning
        try {
          JSON.parse(value);
          console.log('[ElectronStorage] ✅ Data is valid JSON');
        } catch (parseError) {
          console.error('[ElectronStorage] ❌ CORRUPTED DATA DETECTED! Clearing...');
          console.error('[ElectronStorage] Parse error:', parseError);
          // Clear corrupted data
          window.localStorage.removeItem(name);
          alert('⚠️ Corrupted data detected and cleared. Starting fresh.');
          return null;
        }
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

      // Save to localStorage
      window.localStorage.setItem(name, value);
      console.log('[ElectronStorage] ✅ Saved to localStorage, length:', value.length);

      // VERIFY the save worked by reading it back
      const verification = window.localStorage.getItem(name);
      if (verification === value) {
        console.log('[ElectronStorage] ✅ VERIFIED: Data successfully persisted');
      } else {
        console.error('[ElectronStorage] ❌ VERIFICATION FAILED: Data not persisted correctly!');
        console.error('[ElectronStorage] Expected length:', value.length, 'Got:', verification?.length || 0);
      }

      // Also log what we're saving for debugging
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

      // Check if it's a quota error
      if (error.name === 'QuotaExceededError' || error.code === 22) {
        console.error('[ElectronStorage] ❌ Storage quota exceeded! Try clearing old data.');
        alert('Storage is full! Please clear some browser data.');
      } else {
        // Show alert for other errors too
        alert(`Failed to save data: ${error.message}. Your settings may not be saved!`);
      }
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
