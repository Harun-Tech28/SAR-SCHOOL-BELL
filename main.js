const { app, BrowserWindow, ipcMain, Menu, Tray, Notification, dialog } = require('electron');
// Determine dev mode - force production since we're using packaged build
const isDev = false;
const path = require('path');
const fs = require('fs');
const Store = require('electron-store');

// Initialize store with app-data in app directory
const store = new Store({
  cwd: path.join(app.getPath('userData'), 'GhanaBell')
});

let mainWindow;
let tray;

// Get app data directory
const getAppDataPath = () => {
  return path.join(app.getPath('userData'), 'GhanaBell');
};

// Ensure app data directory exists
const ensureAppDataDir = () => {
  const dataPath = getAppDataPath();
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath, { recursive: true });
  }
  return dataPath;
};

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      sandbox: true
    },
    icon: path.join(__dirname, 'assets/icon.png')
  });

  // Load the app
  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, 'out', 'index.html')}`;

  mainWindow.loadURL(startURL);

  // Open DevTools in development
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Save window bounds
  mainWindow.on('close', () => {
    store.set('windowBounds', mainWindow.getBounds());
  });
}

function createTray() {
  const iconPath = path.join(__dirname, 'assets/tray-icon.png');
  
  if (fs.existsSync(iconPath)) {
    tray = new Tray(iconPath);
    
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Show',
        click: () => {
          if (mainWindow) {
            mainWindow.show();
          }
        }
      },
      {
        label: 'Hide',
        click: () => {
          if (mainWindow) {
            mainWindow.hide();
          }
        }
      },
      { type: 'separator' },
      {
        label: 'Quit',
        click: () => {
          app.isQuitting = true;
          app.quit();
        }
      }
    ]);
    
    tray.setContextMenu(contextMenu);
    
    tray.on('click', () => {
      if (mainWindow) {
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
      }
    });
  }
}

app.on('ready', () => {
  ensureAppDataDir();
  createWindow();
  createTray();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// IPC Handlers

// Settings
ipcMain.handle('save-settings', async (event, settings) => {
  try {
    store.set('settings', settings);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('load-settings', async () => {
  try {
    const settings = store.get('settings', {});
    return { success: true, data: settings };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Timetable
ipcMain.handle('save-timetable', async (event, timetable) => {
  try {
    const dataPath = ensureAppDataDir();
    const filePath = path.join(dataPath, 'timetable.json');
    fs.writeFileSync(filePath, JSON.stringify(timetable, null, 2), 'utf8');
    store.set('timetable', timetable);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('load-timetable', async () => {
  try {
    const dataPath = ensureAppDataDir();
    const filePath = path.join(dataPath, 'timetable.json');
    
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      const timetable = JSON.parse(data);
      return { success: true, data: timetable };
    }
    
    return { success: true, data: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Schools/Classes
ipcMain.handle('save-schools', async (event, schools) => {
  try {
    const dataPath = ensureAppDataDir();
    const filePath = path.join(dataPath, 'schools.json');
    fs.writeFileSync(filePath, JSON.stringify(schools, null, 2), 'utf8');
    store.set('schools', schools);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('load-schools', async () => {
  try {
    const dataPath = ensureAppDataDir();
    const filePath = path.join(dataPath, 'schools.json');
    
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      const schools = JSON.parse(data);
      return { success: true, data: schools };
    }
    
    return { success: true, data: [] };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Audio/Bells
ipcMain.handle('save-bells', async (event, bells) => {
  try {
    const dataPath = ensureAppDataDir();
    const filePath = path.join(dataPath, 'bells.json');
    fs.writeFileSync(filePath, JSON.stringify(bells, null, 2), 'utf8');
    store.set('bells', bells);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('load-bells', async () => {
  try {
    const dataPath = ensureAppDataDir();
    const filePath = path.join(dataPath, 'bells.json');
    
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      const bells = JSON.parse(data);
      return { success: true, data: bells };
    }
    
    return { success: true, data: [] };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Export data
ipcMain.handle('export-data', async (event) => {
  try {
    const dataPath = ensureAppDataDir();
    const exportData = {
      settings: store.get('settings', {}),
      timetable: store.get('timetable', null),
      schools: store.get('schools', []),
      bells: store.get('bells', []),
      timestamp: new Date().toISOString()
    };
    
    const result = await dialog.showSaveDialog(mainWindow, {
      defaultPath: path.join(app.getPath('documents'), `ghana-bells-${Date.now()}.json`),
      filters: [{ name: 'JSON Files', extensions: ['json'] }]
    });
    
    if (!result.canceled) {
      fs.writeFileSync(result.filePath, JSON.stringify(exportData, null, 2), 'utf8');
      return { success: true, path: result.filePath };
    }
    
    return { success: false, error: 'Export cancelled' };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Import data
ipcMain.handle('import-data', async (event) => {
  try {
    const result = await dialog.showOpenDialog(mainWindow, {
      filters: [{ name: 'JSON Files', extensions: ['json'] }],
      properties: ['openFile']
    });
    
    if (!result.canceled && result.filePaths.length > 0) {
      const data = fs.readFileSync(result.filePaths[0], 'utf8');
      const importedData = JSON.parse(data);
      
      // Save imported data to store and files
      if (importedData.settings) store.set('settings', importedData.settings);
      if (importedData.timetable) store.set('timetable', importedData.timetable);
      if (importedData.schools) store.set('schools', importedData.schools);
      if (importedData.bells) store.set('bells', importedData.bells);
      
      const dataPath = ensureAppDataDir();
      if (importedData.timetable) {
        fs.writeFileSync(
          path.join(dataPath, 'timetable.json'),
          JSON.stringify(importedData.timetable, null, 2),
          'utf8'
        );
      }
      if (importedData.schools) {
        fs.writeFileSync(
          path.join(dataPath, 'schools.json'),
          JSON.stringify(importedData.schools, null, 2),
          'utf8'
        );
      }
      if (importedData.bells) {
        fs.writeFileSync(
          path.join(dataPath, 'bells.json'),
          JSON.stringify(importedData.bells, null, 2),
          'utf8'
        );
      }
      
      return { success: true, data: importedData };
    }
    
    return { success: false, error: 'Import cancelled' };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Get app data path
ipcMain.handle('get-app-data-path', async () => {
  return { success: true, path: getAppDataPath() };
});

// Get app version
ipcMain.handle('get-app-version', async () => {
  return { success: true, version: app.getVersion() };
});

// Get app info
ipcMain.handle('get-app-info', async () => {
  try {
    const dataPath = getAppDataPath();
    const stats = {
      dataPath,
      platform: process.platform,
      nodeVersion: process.version,
      electronVersion: process.versions.electron,
      appVersion: app.getVersion(),
      userDataPath: app.getPath('userData')
    };
    return { success: true, data: stats };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// Notification
ipcMain.handle('show-notification', async (event, { title, body }) => {
  try {
    new Notification({
      title,
      body,
      icon: path.join(__dirname, 'assets/icon.png')
    }).show();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
