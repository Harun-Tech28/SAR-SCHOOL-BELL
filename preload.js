const { contextBridge, ipcRenderer } = require('electron');

// Expose safe IPC methods to renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // Settings
  saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
  loadSettings: () => ipcRenderer.invoke('load-settings'),

  // Timetable
  saveTimetable: (timetable) => ipcRenderer.invoke('save-timetable', timetable),
  loadTimetable: () => ipcRenderer.invoke('load-timetable'),

  // Schools
  saveSchools: (schools) => ipcRenderer.invoke('save-schools', schools),
  loadSchools: () => ipcRenderer.invoke('load-schools'),

  // Bells
  saveBells: (bells) => ipcRenderer.invoke('save-bells', bells),
  loadBells: () => ipcRenderer.invoke('load-bells'),

  // Import/Export
  exportData: () => ipcRenderer.invoke('export-data'),
  importData: () => ipcRenderer.invoke('import-data'),

  // App Info
  getAppDataPath: () => ipcRenderer.invoke('get-app-data-path'),
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  getAppInfo: () => ipcRenderer.invoke('get-app-info'),

  // Notifications
  showNotification: (options) => ipcRenderer.invoke('show-notification', options),

  // Listeners
  onMessage: (channel, callback) => ipcRenderer.on(channel, (event, ...args) => callback(...args)),
  offMessage: (channel, callback) => ipcRenderer.off(channel, callback),
  once: (channel, callback) => ipcRenderer.once(channel, (event, ...args) => callback(...args))
});
