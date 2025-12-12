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

      // In Electron, ALWAYS prioritize file system data over localStorage
      if (this.useElectronFS && (window as any).electronAPI) {
        // Check if we've already loaded from file system in this session
        const sessionKey = `__fs_loaded_${name}__`;
        const alreadyLoaded = (window as any)[sessionKey];

        if (!alreadyLoaded) {
          console.log('[ElectronStorage] 🔄 First load - checking file system for:', name);
          
          // Mark as loading to prevent duplicate loads
          (window as any)[sessionKey] = true;

          // Load from file system asynchronously
          (window as any).electronAPI.loadZustandState(name).then((result: any) => {
            if (result.success && result.data) {
              console.log('[ElectronStorage] ✅ Loaded from file system, length:', result.data.length);
              
              // Parse and compare with localStorage
              const localValue = window.localStorage.getItem(name);
              
              if (localValue !== result.data) {
                console.log('[ElectronStorage] 🔄 File system data differs from localStorage - updating');
                
                // File system is source of truth - update localStorage
                window.localStorage.setItem(name, result.data);
                
                // Trigger a storage event to notify Zustand to rehydrate
                window.dispatchEvent(new StorageEvent('storage', {
                  key: name,
                  newValue: result.data,
                  url: window.location.href
                }));
                
                // Also trigger a custom event for immediate UI update
                window.dispatchEvent(new CustomEvent('electron-storage-sync', {
                  detail: { key: name, value: result.data }
                }));
              } else {
                console.log('[ElectronStorage] ✅ localStorage matches file system - no sync needed');
              }
            } else {
              console.log('[ElectronStorage] ℹ️ No file system data found for:', name);
            }
          }).catch((error: any) => {
            console.error('[ElectronStorage] ❌ Failed to load from file system:', error);
          });
        }
      }

      // Return localStorage value (which may be updated by the async load above)
      const value = window.localStorage.getItem(name);
      if (value) {
        console.log('[ElectronStorage] ✅ Returning data from localStorage, length:', value.length);
      } else {
        console.log('[ElectronStorage] ⚠️ No data in localStorage for:', name);
      }
      return value;
    } catch (error) {
      console.error('[ElectronStorage] ❌ Error reading:', error);
      return null;
    }
  }

  setItem(name: string, value: string): void {
    const startTime = Date.now();
    console.log('[ElectronStorage] 🔵 SAVE OPERATION STARTED:', {
      key: name,
      dataSize: value.length,
      timestamp: new Date().toISOString()
    });

    try {
      if (typeof window === 'undefined') {
        console.error('[ElectronStorage] ❌ SAVE FAILED: window undefined');
        return;
      }

      let localStorageFailed = false;

      // Save to localStorage immediately (with error handling)
      try {
        window.localStorage.setItem(name, value);
        console.log('[ElectronStorage] ✅ Saved to localStorage, length:', value.length);
        
        // VERIFY: Read back immediately to confirm write
        const readBack = window.localStorage.getItem(name);
        if (readBack === value) {
          console.log('[ElectronStorage] ✅ VERIFIED: localStorage write successful (read-back matches)');
        } else {
          console.error('[ElectronStorage] ❌ VERIFICATION FAILED: localStorage read-back does not match!', {
            written: value.substring(0, 100),
            readBack: readBack?.substring(0, 100)
          });
        }
      } catch (storageError: any) {
        console.error('[ElectronStorage] ❌ localStorage.setItem FAILED:', {
          error: storageError.message,
          name: storageError.name,
          stack: storageError.stack
        });
        localStorageFailed = true;
        
        // Show user-friendly error
        if (storageError.name === 'QuotaExceededError') {
          console.error('[ElectronStorage] ❌ localStorage is FULL! Clearing old data...');
          
          // Try to clear some space by removing old data
          try {
            // Keep only the current store data
            const keysToKeep = [name];
            for (let i = 0; i < window.localStorage.length; i++) {
              const key = window.localStorage.key(i);
              if (key && !keysToKeep.includes(key)) {
                window.localStorage.removeItem(key);
              }
            }
            
            // Try saving again
            window.localStorage.setItem(name, value);
            console.log('[ElectronStorage] ✅ Saved after clearing space');
            localStorageFailed = false;
          } catch (retryError) {
            console.error('[ElectronStorage] ❌ Still failed after clearing:', retryError);
          }
        }
      }

      // In Electron, ALSO save to file system via IPC (IMMEDIATE, not debounced)
      if (this.useElectronFS && (window as any).electronAPI) {
        // Clear existing timeout
        if (this.saveTimeout) {
          clearTimeout(this.saveTimeout);
        }

        console.log('[ElectronStorage] 🔵 Starting file system save...');

        // Save IMMEDIATELY to file system (no debounce for critical data)
        (window as any).electronAPI.saveZustandState(name, value).then((result: any) => {
          const elapsed = Date.now() - startTime;
          
          if (result.success) {
            console.log('[ElectronStorage] ✅ File system save SUCCESSFUL', {
              elapsed: `${elapsed}ms`,
              timestamp: new Date().toISOString()
            });
            
            // VERIFY: Try to read back from file system
            (window as any).electronAPI.loadZustandState(name).then((verifyResult: any) => {
              if (verifyResult.success && verifyResult.data === value) {
                console.log('[ElectronStorage] ✅ VERIFIED: File system write successful (read-back matches)');
              } else if (verifyResult.success) {
                console.error('[ElectronStorage] ❌ VERIFICATION FAILED: File system read-back does not match!');
              } else {
                console.warn('[ElectronStorage] ⚠️ Could not verify file system write:', verifyResult.error);
              }
            }).catch((verifyError: any) => {
              console.warn('[ElectronStorage] ⚠️ Verification read failed:', verifyError);
            });
            
            // If localStorage failed but file system succeeded, notify user
            if (localStorageFailed) {
              console.warn('[ElectronStorage] ⚠️ localStorage failed but file system save succeeded');
              // Dispatch event to notify UI
              window.dispatchEvent(new CustomEvent('storage-warning', {
                detail: { 
                  message: 'Data saved to disk but browser storage is full. Your data is safe.',
                  type: 'warning'
                }
              }));
            }
          } else {
            console.error('[ElectronStorage] ❌ File system save FAILED:', {
              error: result.error,
              elapsed: `${elapsed}ms`,
              timestamp: new Date().toISOString()
            });
            
            // CRITICAL: Both storage methods failed!
            if (localStorageFailed) {
              console.error('[ElectronStorage] 🚨 CRITICAL: Both localStorage AND file system failed!');
              // Dispatch critical error event
              window.dispatchEvent(new CustomEvent('storage-error', {
                detail: { 
                  message: 'Failed to save data! Please check disk space and try again.',
                  type: 'error'
                }
              }));
            }
          }
        }).catch((error: any) => {
          const elapsed = Date.now() - startTime;
          console.error('[ElectronStorage] ❌ File system save ERROR:', {
            error: error.message,
            stack: error.stack,
            elapsed: `${elapsed}ms`,
            timestamp: new Date().toISOString()
          });
          
          if (localStorageFailed) {
            console.error('[ElectronStorage] 🚨 CRITICAL: Both storage methods failed!');
            window.dispatchEvent(new CustomEvent('storage-error', {
              detail: { 
                message: 'Failed to save data! Please check disk space and try again.',
                type: 'error'
              }
            }));
          }
        });
      } else {
        console.log('[ElectronStorage] ℹ️ File system save skipped (not in Electron or API not available)');
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

      const elapsed = Date.now() - startTime;
      console.log('[ElectronStorage] ✅ SAVE OPERATION COMPLETED:', {
        key: name,
        elapsed: `${elapsed}ms`,
        timestamp: new Date().toISOString()
      });

    } catch (error: any) {
      const elapsed = Date.now() - startTime;
      console.error('[ElectronStorage] ❌ SAVE OPERATION FAILED:', {
        key: name,
        error: error.message,
        stack: error.stack,
        elapsed: `${elapsed}ms`,
        timestamp: new Date().toISOString()
      });
      
      // Dispatch error event for UI to handle
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('storage-error', {
          detail: { 
            message: `Storage error: ${error.message}`,
            type: 'error'
          }
        }));
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

  /**
   * Force immediate save to file system (for app shutdown)
   */
  async forceSave(name: string): Promise<void> {
    try {
      if (typeof window === 'undefined') return;

      // Clear any pending timeout
      if (this.saveTimeout) {
        clearTimeout(this.saveTimeout);
        this.saveTimeout = null;
      }

      // Get current value from localStorage
      const value = window.localStorage.getItem(name);
      if (!value) return;

      // Save immediately to file system
      if (this.useElectronFS && (window as any).electronAPI) {
        const result = await (window as any).electronAPI.saveZustandState(name, value);
        if (result.success) {
          console.log('[ElectronStorage] ✅ Force saved to file system');
        } else {
          console.error('[ElectronStorage] ❌ Force save failed:', result.error);
        }
      }
    } catch (error) {
      console.error('[ElectronStorage] ❌ Force save error:', error);
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
