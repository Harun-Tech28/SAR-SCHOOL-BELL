// Zustand Storage Adapter for PWA
// Syncs Zustand state with both LocalStorage and IndexedDB

import { StateStorage } from "zustand/middleware";
import { storageManager, STORES } from "./storage-manager";

/**
 * Custom storage adapter that syncs with IndexedDB
 * Falls back to localStorage for immediate access
 */
export const pwaStorageAdapter: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    try {
      // Try localStorage first (faster)
      const localValue = localStorage.getItem(name);
      if (localValue) {
        return localValue;
      }

      // Fallback to IndexedDB
      const dbValue = await storageManager.getFromIndexedDB<any>(
        "SETTINGS",
        name
      );
      if (dbValue) {
        return JSON.stringify(dbValue);
      }

      return null;
    } catch (error) {
      console.error("[Storage Adapter] Failed to get item:", error);
      return null;
    }
  },

  setItem: async (name: string, value: string): Promise<void> => {
    try {
      // Save to localStorage (immediate)
      localStorage.setItem(name, value);

      // Also save to IndexedDB (persistent)
      const parsed = JSON.parse(value);
      await storageManager.saveToIndexedDB("SETTINGS", name, parsed);
    } catch (error) {
      console.error("[Storage Adapter] Failed to set item:", error);
    }
  },

  removeItem: async (name: string): Promise<void> => {
    try {
      // Remove from localStorage
      localStorage.removeItem(name);

      // Remove from IndexedDB
      await storageManager.deleteFromIndexedDB("SETTINGS", name);
    } catch (error) {
      console.error("[Storage Adapter] Failed to remove item:", error);
    }
  },
};

/**
 * Sync timetables to IndexedDB
 */
export async function syncTimetablesToDB(timetables: any[]): Promise<void> {
  try {
    // Clear existing timetables
    await storageManager.clearStore("TIMETABLE");

    // Save each timetable
    for (const timetable of timetables) {
      await storageManager.saveToIndexedDB("TIMETABLE", timetable.id, timetable);
    }

    console.log(`[Storage Sync] Synced ${timetables.length} timetables to IndexedDB`);
  } catch (error) {
    console.error("[Storage Sync] Failed to sync timetables:", error);
  }
}

/**
 * Sync students to IndexedDB
 */
export async function syncStudentsToDB(students: any[]): Promise<void> {
  try {
    // Clear existing students
    await storageManager.clearStore("STUDENTS");

    // Save each student
    for (const student of students) {
      await storageManager.saveToIndexedDB("STUDENTS", student.id, student);
    }

    console.log(`[Storage Sync] Synced ${students.length} students to IndexedDB`);
  } catch (error) {
    console.error("[Storage Sync] Failed to sync students:", error);
  }
}

/**
 * Load timetables from IndexedDB
 */
export async function loadTimetablesFromDB(): Promise<any[]> {
  try {
    const timetables = await storageManager.getAllFromIndexedDB("TIMETABLE");
    console.log(`[Storage Sync] Loaded ${timetables.length} timetables from IndexedDB`);
    return timetables;
  } catch (error) {
    console.error("[Storage Sync] Failed to load timetables:", error);
    return [];
  }
}

/**
 * Load students from IndexedDB
 */
export async function loadStudentsFromDB(): Promise<any[]> {
  try {
    const students = await storageManager.getAllFromIndexedDB("STUDENTS");
    console.log(`[Storage Sync] Loaded ${students.length} students from IndexedDB`);
    return students;
  } catch (error) {
    console.error("[Storage Sync] Failed to load students:", error);
    return [];
  }
}
