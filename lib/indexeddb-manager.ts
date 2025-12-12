/**
 * IndexedDB Manager
 * Manages persistent storage accessible by both PWA and Service Worker
 * This enables background bells to work even when the browser is closed
 */

import type { Timetable } from './store';

// Database configuration
const DB_NAME = 'SchoolBellDB';
const DB_VERSION = 2;
const TIMETABLES_STORE = 'timetables';
const LOGS_STORE = 'bellLogs';

// Bell execution log interface
export interface BellLog {
  id: string;
  scheduleId: string;
  timetableName: string;
  bellLabel: string;
  executionTime: Date;
  scheduledTime: string;
  status: 'success' | 'failed' | 'skipped';
  method: 'notification' | 'background-pwa' | 'foreground';
  error?: string;
  deviceInfo: {
    browser: string;
    os: string;
    batteryLevel?: number;
  };
}

export class IndexedDBManager {
  private dbName: string = DB_NAME;
  private version: number = DB_VERSION;
  private db: IDBDatabase | null = null;

  /**
   * Open database connection
   */
  async open(): Promise<IDBDatabase> {
    if (this.db) {
      return this.db;
    }

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => {
        console.error('[IndexedDB] Failed to open database:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('[IndexedDB] Database opened successfully');
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        console.log('[IndexedDB] Upgrading database schema...');

        // Create timetables store if it doesn't exist
        if (!db.objectStoreNames.contains(TIMETABLES_STORE)) {
          const timetableStore = db.createObjectStore(TIMETABLES_STORE, { keyPath: 'id' });
          timetableStore.createIndex('isActive', 'isActive', { unique: false });
          timetableStore.createIndex('day', 'day', { unique: false });
          console.log('[IndexedDB] Created timetables store');
        }

        // Create logs store if it doesn't exist
        if (!db.objectStoreNames.contains(LOGS_STORE)) {
          const logsStore = db.createObjectStore(LOGS_STORE, { keyPath: 'id' });
          logsStore.createIndex('executionTime', 'executionTime', { unique: false });
          logsStore.createIndex('status', 'status', { unique: false });
          logsStore.createIndex('scheduleId', 'scheduleId', { unique: false });
          console.log('[IndexedDB] Created logs store');
        }
      };
    });
  }

  /**
   * Save timetable to IndexedDB
   */
  async saveTimetable(timetable: Timetable): Promise<void> {
    const db = await this.open();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([TIMETABLES_STORE], 'readwrite');
      const store = transaction.objectStore(TIMETABLES_STORE);
      const request = store.put(timetable);

      request.onsuccess = () => {
        console.log('[IndexedDB] Timetable saved:', timetable.id);
        resolve();
      };

      request.onerror = () => {
        console.error('[IndexedDB] Failed to save timetable:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * Get all timetables from IndexedDB
   */
  async getAllTimetables(): Promise<Timetable[]> {
    const db = await this.open();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([TIMETABLES_STORE], 'readonly');
      const store = transaction.objectStore(TIMETABLES_STORE);
      const request = store.getAll();

      request.onsuccess = () => {
        console.log('[IndexedDB] Retrieved all timetables:', request.result.length);
        resolve(request.result);
      };

      request.onerror = () => {
        console.error('[IndexedDB] Failed to get timetables:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * Get active timetables for today
   */
  async getActiveTimetables(): Promise<Timetable[]> {
    const allTimetables = await this.getAllTimetables();
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    
    return allTimetables.filter(tt => 
      tt.isActive !== false && (tt.day === 'Daily' || tt.day === today)
    );
  }

  /**
   * Delete timetable from IndexedDB
   */
  async deleteTimetable(id: string): Promise<void> {
    const db = await this.open();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([TIMETABLES_STORE], 'readwrite');
      const store = transaction.objectStore(TIMETABLES_STORE);
      const request = store.delete(id);

      request.onsuccess = () => {
        console.log('[IndexedDB] Timetable deleted:', id);
        resolve();
      };

      request.onerror = () => {
        console.error('[IndexedDB] Failed to delete timetable:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * Save bell execution log
   */
  async logBellExecution(log: BellLog): Promise<void> {
    const db = await this.open();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([LOGS_STORE], 'readwrite');
      const store = transaction.objectStore(LOGS_STORE);
      const request = store.add(log);

      request.onsuccess = () => {
        console.log('[IndexedDB] Bell execution logged:', log.id);
        resolve();
      };

      request.onerror = () => {
        console.error('[IndexedDB] Failed to log bell execution:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * Get execution logs
   */
  async getLogs(limit: number = 100): Promise<BellLog[]> {
    const db = await this.open();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([LOGS_STORE], 'readonly');
      const store = transaction.objectStore(LOGS_STORE);
      const index = store.index('executionTime');
      const request = index.openCursor(null, 'prev'); // Descending order
      
      const logs: BellLog[] = [];
      let count = 0;

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor && count < limit) {
          logs.push(cursor.value);
          count++;
          cursor.continue();
        } else {
          console.log('[IndexedDB] Retrieved logs:', logs.length);
          resolve(logs);
        }
      };

      request.onerror = () => {
        console.error('[IndexedDB] Failed to get logs:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * Clear old logs (keep only recent ones)
   */
  async clearOldLogs(daysToKeep: number = 30): Promise<void> {
    const db = await this.open();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([LOGS_STORE], 'readwrite');
      const store = transaction.objectStore(LOGS_STORE);
      const index = store.index('executionTime');
      const range = IDBKeyRange.upperBound(cutoffDate);
      const request = index.openCursor(range);
      
      let deletedCount = 0;

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          cursor.delete();
          deletedCount++;
          cursor.continue();
        } else {
          console.log('[IndexedDB] Cleared old logs:', deletedCount);
          resolve();
        }
      };

      request.onerror = () => {
        console.error('[IndexedDB] Failed to clear old logs:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * Sync all timetables to IndexedDB (bulk operation)
   */
  async syncAllTimetables(timetables: Timetable[]): Promise<void> {
    const db = await this.open();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([TIMETABLES_STORE], 'readwrite');
      const store = transaction.objectStore(TIMETABLES_STORE);
      
      // Clear existing timetables first
      const clearRequest = store.clear();
      
      clearRequest.onsuccess = () => {
        // Add all new timetables
        let completed = 0;
        const total = timetables.length;
        
        if (total === 0) {
          console.log('[IndexedDB] No timetables to sync');
          resolve();
          return;
        }
        
        timetables.forEach(timetable => {
          const addRequest = store.add(timetable);
          
          addRequest.onsuccess = () => {
            completed++;
            if (completed === total) {
              console.log('[IndexedDB] Synced all timetables:', total);
              resolve();
            }
          };
          
          addRequest.onerror = () => {
            console.error('[IndexedDB] Failed to sync timetable:', timetable.id, addRequest.error);
            reject(addRequest.error);
          };
        });
      };
      
      clearRequest.onerror = () => {
        console.error('[IndexedDB] Failed to clear timetables:', clearRequest.error);
        reject(clearRequest.error);
      };
    });
  }

  /**
   * Close database connection
   */
  close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
      console.log('[IndexedDB] Database connection closed');
    }
  }
}

// Export singleton instance
export const indexedDBManager = new IndexedDBManager();
