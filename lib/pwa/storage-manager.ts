// Storage Manager for PWA
// Handles IndexedDB and LocalStorage operations

export interface StorageQuota {
  usage: number;
  quota: number;
  percentage: number;
}

const DB_NAME = "SARBellSystemDB";
const DB_VERSION = 1;

// IndexedDB store names
export const STORES = {
  TIMETABLE: "timetable",
  STUDENTS: "students",
  ANNOUNCEMENTS: "announcements",
  SETTINGS: "settings",
} as const;

/**
 * Storage Manager Class
 * Provides unified interface for IndexedDB and LocalStorage
 */
export class StorageManager {
  private db: IDBDatabase | null = null;

  /**
   * Initialize IndexedDB
   */
  async init(): Promise<void> {
    if (typeof window === "undefined" || !("indexedDB" in window)) {
      console.warn("[Storage] IndexedDB not available");
      return;
    }

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        console.error("[Storage] Failed to open database:", request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log("[Storage] Database opened successfully");
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Create object stores if they don't exist
        if (!db.objectStoreNames.contains(STORES.TIMETABLE)) {
          db.createObjectStore(STORES.TIMETABLE, { keyPath: "id" });
          console.log("[Storage] Created timetable store");
        }

        if (!db.objectStoreNames.contains(STORES.STUDENTS)) {
          db.createObjectStore(STORES.STUDENTS, { keyPath: "id" });
          console.log("[Storage] Created students store");
        }

        if (!db.objectStoreNames.contains(STORES.ANNOUNCEMENTS)) {
          db.createObjectStore(STORES.ANNOUNCEMENTS, { keyPath: "id" });
          console.log("[Storage] Created announcements store");
        }

        if (!db.objectStoreNames.contains(STORES.SETTINGS)) {
          db.createObjectStore(STORES.SETTINGS);
          console.log("[Storage] Created settings store");
        }
      };
    });
  }

  /**
   * Save data to IndexedDB
   */
  async saveToIndexedDB<T>(
    store: keyof typeof STORES,
    key: string,
    data: T
  ): Promise<void> {
    if (!this.db) {
      await this.init();
    }

    if (!this.db) {
      throw new Error("Database not initialized");
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORES[store]], "readwrite");
      const objectStore = transaction.objectStore(STORES[store]);
      const request = objectStore.put({ id: key, ...data });

      request.onsuccess = () => {
        console.log(`[Storage] Saved to ${store}:`, key);
        resolve();
      };

      request.onerror = () => {
        console.error(`[Storage] Failed to save to ${store}:`, request.error);
        reject(request.error);
      };
    });
  }

  /**
   * Get data from IndexedDB
   */
  async getFromIndexedDB<T>(
    store: keyof typeof STORES,
    key: string
  ): Promise<T | null> {
    if (!this.db) {
      await this.init();
    }

    if (!this.db) {
      return null;
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORES[store]], "readonly");
      const objectStore = transaction.objectStore(STORES[store]);
      const request = objectStore.get(key);

      request.onsuccess = () => {
        const result = request.result;
        if (result) {
          const { id, ...data } = result;
          resolve(data as T);
        } else {
          resolve(null);
        }
      };

      request.onerror = () => {
        console.error(`[Storage] Failed to get from ${store}:`, request.error);
        reject(request.error);
      };
    });
  }

  /**
   * Get all data from a store
   */
  async getAllFromIndexedDB<T>(store: keyof typeof STORES): Promise<T[]> {
    if (!this.db) {
      await this.init();
    }

    if (!this.db) {
      return [];
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORES[store]], "readonly");
      const objectStore = transaction.objectStore(STORES[store]);
      const request = objectStore.getAll();

      request.onsuccess = () => {
        const results = request.result || [];
        resolve(results as T[]);
      };

      request.onerror = () => {
        console.error(
          `[Storage] Failed to get all from ${store}:`,
          request.error
        );
        reject(request.error);
      };
    });
  }

  /**
   * Delete data from IndexedDB
   */
  async deleteFromIndexedDB(
    store: keyof typeof STORES,
    key: string
  ): Promise<void> {
    if (!this.db) {
      await this.init();
    }

    if (!this.db) {
      throw new Error("Database not initialized");
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORES[store]], "readwrite");
      const objectStore = transaction.objectStore(STORES[store]);
      const request = objectStore.delete(key);

      request.onsuccess = () => {
        console.log(`[Storage] Deleted from ${store}:`, key);
        resolve();
      };

      request.onerror = () => {
        console.error(
          `[Storage] Failed to delete from ${store}:`,
          request.error
        );
        reject(request.error);
      };
    });
  }

  /**
   * Clear all data from a store
   */
  async clearStore(store: keyof typeof STORES): Promise<void> {
    if (!this.db) {
      await this.init();
    }

    if (!this.db) {
      throw new Error("Database not initialized");
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORES[store]], "readwrite");
      const objectStore = transaction.objectStore(STORES[store]);
      const request = objectStore.clear();

      request.onsuccess = () => {
        console.log(`[Storage] Cleared store: ${store}`);
        resolve();
      };

      request.onerror = () => {
        console.error(`[Storage] Failed to clear ${store}:`, request.error);
        reject(request.error);
      };
    });
  }

  /**
   * Save to LocalStorage
   */
  saveToLocalStorage(key: string, value: any): void {
    if (typeof window === "undefined" || !("localStorage" in window)) {
      console.warn("[Storage] LocalStorage not available");
      return;
    }

    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      console.log(`[Storage] Saved to localStorage: ${key}`);
    } catch (error) {
      console.error("[Storage] Failed to save to localStorage:", error);
    }
  }

  /**
   * Get from LocalStorage
   */
  getFromLocalStorage<T>(key: string): T | null {
    if (typeof window === "undefined" || !("localStorage" in window)) {
      return null;
    }

    try {
      const serialized = localStorage.getItem(key);
      if (serialized === null) {
        return null;
      }
      return JSON.parse(serialized) as T;
    } catch (error) {
      console.error("[Storage] Failed to get from localStorage:", error);
      return null;
    }
  }

  /**
   * Remove from LocalStorage
   */
  removeFromLocalStorage(key: string): void {
    if (typeof window === "undefined" || !("localStorage" in window)) {
      return;
    }

    try {
      localStorage.removeItem(key);
      console.log(`[Storage] Removed from localStorage: ${key}`);
    } catch (error) {
      console.error("[Storage] Failed to remove from localStorage:", error);
    }
  }

  /**
   * Clear all LocalStorage
   */
  clearLocalStorage(): void {
    if (typeof window === "undefined" || !("localStorage" in window)) {
      return;
    }

    try {
      localStorage.clear();
      console.log("[Storage] Cleared localStorage");
    } catch (error) {
      console.error("[Storage] Failed to clear localStorage:", error);
    }
  }

  /**
   * Get storage quota information
   */
  async getStorageQuota(): Promise<StorageQuota> {
    if (
      typeof window === "undefined" ||
      !("navigator" in window) ||
      !("storage" in navigator) ||
      !("estimate" in navigator.storage)
    ) {
      return { usage: 0, quota: 0, percentage: 0 };
    }

    try {
      const estimate = await navigator.storage.estimate();
      const usage = estimate.usage || 0;
      const quota = estimate.quota || 0;
      const percentage = quota > 0 ? (usage / quota) * 100 : 0;

      return {
        usage,
        quota,
        percentage: Math.round(percentage * 100) / 100,
      };
    } catch (error) {
      console.error("[Storage] Failed to get storage quota:", error);
      return { usage: 0, quota: 0, percentage: 0 };
    }
  }

  /**
   * Clear all storage (IndexedDB + LocalStorage)
   */
  async clearAllStorage(): Promise<void> {
    // Clear IndexedDB
    const stores = Object.keys(STORES) as Array<keyof typeof STORES>;
    for (const store of stores) {
      try {
        await this.clearStore(store);
      } catch (error) {
        console.error(`[Storage] Failed to clear ${store}:`, error);
      }
    }

    // Clear LocalStorage
    this.clearLocalStorage();

    console.log("[Storage] All storage cleared");
  }

  /**
   * Export all data (for backup)
   */
  async exportData(): Promise<Record<string, any>> {
    const data: Record<string, any> = {};

    // Export IndexedDB data
    const stores = Object.keys(STORES) as Array<keyof typeof STORES>;
    for (const store of stores) {
      try {
        data[store] = await this.getAllFromIndexedDB(store);
      } catch (error) {
        console.error(`[Storage] Failed to export ${store}:`, error);
        data[store] = [];
      }
    }

    // Export LocalStorage data
    if (typeof window !== "undefined" && "localStorage" in window) {
      data.localStorage = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          data.localStorage[key] = this.getFromLocalStorage(key);
        }
      }
    }

    return data;
  }

  /**
   * Import data (for restore)
   */
  async importData(data: Record<string, any>): Promise<void> {
    // Import IndexedDB data
    const stores = Object.keys(STORES) as Array<keyof typeof STORES>;
    for (const store of stores) {
      if (data[store] && Array.isArray(data[store])) {
        for (const item of data[store]) {
          try {
            await this.saveToIndexedDB(store, item.id, item);
          } catch (error) {
            console.error(`[Storage] Failed to import to ${store}:`, error);
          }
        }
      }
    }

    // Import LocalStorage data
    if (data.localStorage && typeof data.localStorage === "object") {
      for (const [key, value] of Object.entries(data.localStorage)) {
        this.saveToLocalStorage(key, value);
      }
    }

    console.log("[Storage] Data imported successfully");
  }

  /**
   * Close database connection
   */
  close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
      console.log("[Storage] Database closed");
    }
  }
}

// Export singleton instance
export const storageManager = new StorageManager();
