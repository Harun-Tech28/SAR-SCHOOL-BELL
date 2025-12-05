// Type definitions for Electron API exposed via preload script

export interface ElectronAPI {
  // Settings operations
  saveSettings: (settings: any) => Promise<{ success: boolean; error?: string }>;
  loadSettings: () => Promise<{ success: boolean; data?: any; error?: string }>;
  
  // Timetable operations
  saveTimetable: (timetable: any) => Promise<{ success: boolean; error?: string }>;
  loadTimetable: () => Promise<{ success: boolean; data?: any; error?: string }>;
  
  // Audio scheduling
  scheduleAudio: (time: Date, config: any) => Promise<{ success: boolean; id?: string; error?: string }>;
  cancelAudio: (id: string) => Promise<{ success: boolean; error?: string }>;
  getScheduledAudio: () => Promise<{ success: boolean; data?: any[]; error?: string }>;
  playAudioNow: (config: any) => Promise<{ success: boolean; error?: string }>;
  getAudioQueueStatus: () => Promise<{ success: boolean; data?: { currentlyPlaying: any; queueLength: number; scheduledCount: number }; error?: string }>;
  
  // Audio playback
  audioPlaybackComplete: (audioId: string, success: boolean, error?: string) => void;
  getAudioHistory: (limit?: number) => Promise<{ success: boolean; data?: any[]; error?: string }>;
  getAudioStatistics: () => Promise<{ success: boolean; data?: { total: number; successful: number; failed: number; successRate: string; averageDuration: number }; error?: string }>;
  getDefaultAudioDevice: () => Promise<{ success: boolean; data?: { name: string; description: string; isDefault: boolean }; error?: string }>;
  
  // System operations
  minimizeToTray: () => void;
  showNotification: (title: string, body: string) => void;
  getDataPath: () => Promise<string>;
  
  // Auto-start operations
  setAutoStart: (enabled: boolean) => Promise<{ success: boolean; enabled?: boolean; error?: string }>;
  getAutoStart: () => Promise<{ success: boolean; enabled?: boolean; error?: string }>;
  
  // Data export/import
  exportData: () => Promise<{ success: boolean; data?: string; error?: string }>;
  importData: (filePath: string) => Promise<{ success: boolean; error?: string }>;
  
  // Voice engine operations
  getOfflineVoices: () => Promise<{ success: boolean; voices?: any[]; error?: string }>;
  testOfflineVoice: (voiceId: string) => Promise<{ success: boolean; error?: string }>;
  
  // Update operations
  checkForUpdates: () => void;
  installUpdate: () => void;
  
  // Event listeners
  onScheduledAudioTrigger: (callback: (audioConfig: any) => void) => void;
  onPlayAudio: (callback: (audioData: any) => void) => void;
  onUpdateAvailable: (callback: (version: string) => void) => void;
  onStorageChanged: (callback: (key: string, value: any) => void) => void;
  onSystemTrayClick: (callback: () => void) => void;
  
  // Remove listeners
  removeListener: (channel: string, callback: Function) => void;
  
  // Platform info
  platform: string;
  isElectron: boolean;
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}

export {};
