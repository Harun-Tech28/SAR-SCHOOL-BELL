const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Settings operations
  saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
  loadSettings: () => ipcRenderer.invoke('load-settings'),

  // Timetable operations
  saveTimetable: (timetable) => ipcRenderer.invoke('save-timetable', timetable),
  loadTimetable: () => ipcRenderer.invoke('load-timetable'),

  // Student data operations
  saveStudentData: (studentData) => ipcRenderer.invoke('save-student-data', studentData),
  loadStudentData: () => ipcRenderer.invoke('load-student-data'),

  // Storage statistics
  getStorageStats: () => ipcRenderer.invoke('get-storage-stats'),

  // Zustand store persistence
  saveZustandState: (key, value) => ipcRenderer.invoke('save-zustand-state', key, value),
  loadZustandState: (key) => ipcRenderer.invoke('load-zustand-state', key),

  // Audio scheduling
  scheduleAudio: (time, config) => ipcRenderer.invoke('schedule-audio', time, config),
  cancelAudio: (id) => ipcRenderer.invoke('cancel-audio', id),
  getScheduledAudio: () => ipcRenderer.invoke('get-scheduled-audio'),
  playAudioNow: (config) => ipcRenderer.invoke('play-audio-now', config),
  getAudioQueueStatus: () => ipcRenderer.invoke('get-audio-queue-status'),

  // Audio playback
  audioPlaybackComplete: (audioId, success, error) => ipcRenderer.send('audio-playback-complete', audioId, success, error),
  getAudioHistory: (limit) => ipcRenderer.invoke('get-audio-history', limit),
  getAudioStatistics: () => ipcRenderer.invoke('get-audio-statistics'),
  getDefaultAudioDevice: () => ipcRenderer.invoke('get-default-audio-device'),

  // System operations
  minimizeToTray: () => ipcRenderer.send('minimize-to-tray'),
  showNotification: (title, body) => ipcRenderer.send('show-notification', title, body),
  getDataPath: () => ipcRenderer.invoke('get-data-path'),

  // Auto-start operations
  setAutoStart: (enabled) => ipcRenderer.invoke('set-auto-start', enabled),
  getAutoStart: () => ipcRenderer.invoke('get-auto-start'),

  // Background mode operations
  setRunInBackground: (enabled) => ipcRenderer.invoke('set-run-in-background', enabled),
  getRunInBackground: () => ipcRenderer.invoke('get-run-in-background'),

  // Data export/import
  exportData: () => ipcRenderer.invoke('export-data'),
  importData: (filePath) => ipcRenderer.invoke('import-data', filePath),

  // Voice engine operations
  getOfflineVoices: () => ipcRenderer.invoke('get-offline-voices'),
  testOfflineVoice: (voiceId) => ipcRenderer.invoke('test-offline-voice', voiceId),

  // Update operations
  checkForUpdates: () => ipcRenderer.send('check-for-updates'),
  installUpdate: () => ipcRenderer.send('install-update'),

  // Event listeners
  onScheduledAudioTrigger: (callback) => {
    ipcRenderer.on('scheduled-audio-trigger', (event, audioConfig) => callback(audioConfig));
  },
  onPlayAudio: (callback) => {
    ipcRenderer.on('play-audio', (event, audioData) => callback(audioData));
  },
  onUpdateAvailable: (callback) => {
    ipcRenderer.on('app-update-available', (event, version) => callback(version));
  },
  onStorageChanged: (callback) => {
    ipcRenderer.on('storage-changed', (event, key, value) => callback(key, value));
  },
  onSystemTrayClick: (callback) => {
    ipcRenderer.on('system-tray-click', () => callback());
  },

  // Remove listeners
  removeListener: (channel, callback) => {
    ipcRenderer.removeListener(channel, callback);
  },

  // Platform info
  platform: process.platform,
  isElectron: true
});
