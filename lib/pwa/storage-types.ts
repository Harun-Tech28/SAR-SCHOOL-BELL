// Storage Types and Schema Definitions
// Defines the structure of data stored in IndexedDB

/**
 * Timetable Entry
 */
export interface TimetableEntry {
  id: string;
  bellTime: string;
  day: string;
  bellType: string;
  voice: string;
  announcement?: string;
  enabled: boolean;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Student
 */
export interface Student {
  id: string;
  name: string;
  class?: string;
  section?: string;
  rollNumber?: string;
  createdAt?: string;
}

/**
 * Announcement
 */
export interface Announcement {
  id: string;
  text: string;
  voice: string;
  bellType?: string;
  createdAt: string;
  playedAt?: string;
}

/**
 * App Settings
 */
export interface AppSettings {
  bellType?: string;
  voice?: string;
  volume?: number;
  autoPlay?: boolean;
  notifications?: boolean;
  theme?: "light" | "dark" | "system";
  schoolName?: string;
  schoolLogo?: string;
  lastSync?: string;
}

/**
 * IndexedDB Schema
 */
export interface DBSchema {
  timetable: {
    key: string;
    value: TimetableEntry;
  };
  students: {
    key: string;
    value: Student;
  };
  announcements: {
    key: string;
    value: Announcement;
  };
  settings: {
    key: string;
    value: AppSettings;
  };
}

/**
 * Storage Keys for LocalStorage
 */
export const STORAGE_KEYS = {
  // App state
  LAST_ACTIVE_TAB: "sar-bell-last-active-tab",
  SIDEBAR_COLLAPSED: "sar-bell-sidebar-collapsed",
  
  // User preferences
  THEME: "sar-bell-theme",
  VOLUME: "sar-bell-volume",
  
  // Cache metadata
  CACHE_VERSION: "sar-bell-cache-version",
  LAST_UPDATE_CHECK: "sar-bell-last-update-check",
  
  // Installation
  INSTALL_PROMPT_DISMISSED: "sar-bell-install-dismissed",
  INSTALL_PROMPT_COUNT: "sar-bell-install-count",
  
  // Onboarding
  ONBOARDING_COMPLETED: "sar-bell-onboarding-completed",
  FIRST_LAUNCH: "sar-bell-first-launch",
} as const;

/**
 * Default values
 */
export const DEFAULT_SETTINGS: AppSettings = {
  bellType: "traditional",
  voice: "female",
  volume: 0.8,
  autoPlay: true,
  notifications: true,
  theme: "system",
  schoolName: "SAR Educational Complex",
};

/**
 * Storage limits
 */
export const STORAGE_LIMITS = {
  MAX_TIMETABLE_ENTRIES: 1000,
  MAX_STUDENTS: 10000,
  MAX_ANNOUNCEMENTS: 500,
  MAX_CACHE_SIZE_MB: 50,
} as const;
