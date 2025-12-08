const { app, BrowserWindow, ipcMain, Tray, Menu, nativeImage, Notification } = require('electron');
const path = require('path');
const fs = require('fs').promises;
let store;

const { getStorageManager } = require('./electron/storage-manager');
const { getAudioScheduler } = require('./electron/audio-scheduler');
const { getAudioPlayer } = require('./electron/audio-player');

async function initStore() {
    const { default: Store } = await import('electron-store');
    store = new Store();
}

// Initialize storage manager
const storageManager = getStorageManager();

// Initialize audio scheduler
const audioScheduler = getAudioScheduler();

// Audio player will be initialized after window is created
let audioPlayer = null;

// Serve static files in production
let loadURL;
if (process.env.NODE_ENV !== 'development') {
    let serve = require('electron-serve');
    // Handle ESM default export if present
    if (typeof serve !== 'function' && serve.default) {
        serve = serve.default;
    }
    loadURL = serve({ directory: 'out' });
}

// Global references
let mainWindow = null;
let tray = null;

// Get user data path
const userDataPath = app.getPath('userData');
const dataPath = path.join(userDataPath, 'data');

// Ensure data directory exists
async function ensureDataDirectory() {
    try {
        await fs.mkdir(dataPath, { recursive: true });
    } catch (error) {
        console.error('Failed to create data directory:', error);
    }
}

function createWindow() {
    // Get saved window bounds or use defaults
    const windowBounds = store.get('windowBounds', {
        width: 1280,
        height: 800
    });

    mainWindow = new BrowserWindow({
        ...windowBounds,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
        icon: path.join(__dirname, 'build/icon.png'),
        show: true // Force show immediately for debugging
    });

    // Force Open DevTools even in production for debugging
    mainWindow.webContents.openDevTools();

    // Show window when ready
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();

        // Initialize audio player with window reference
        audioPlayer = getAudioPlayer(mainWindow);
    });

    // Save window bounds on resize/move
    mainWindow.on('resize', () => {
        if (!mainWindow.isMaximized() && !mainWindow.isMinimized()) {
            store.set('windowBounds', mainWindow.getBounds());
        }
    });

    mainWindow.on('move', () => {
        if (!mainWindow.isMaximized() && !mainWindow.isMinimized()) {
            store.set('windowBounds', mainWindow.getBounds());
        }
    });

    // Handle minimize to tray
    mainWindow.on('minimize', (event) => {
        if (store.get('minimizeToTray', true)) {
            event.preventDefault();
            mainWindow.hide();
        }
    });

    mainWindow.on('close', (event) => {
        // Keep app running in background on ALL platforms (not just macOS)
        // This allows bells to play even when the window is closed
        if (!app.isQuitting && store.get('runInBackground', true)) {
            event.preventDefault();
            mainWindow.hide();

            // Show notification that app is running in background
            if (Notification.isSupported()) {
                new Notification({
                    title: 'Ghana School Bell',
                    body: 'App is running in the background. Bells will continue to play on schedule.',
                    icon: path.join(__dirname, 'build/icon.png')
                }).show();
            }
        }
    });

    // Load the app
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:3000');
        mainWindow.webContents.openDevTools();
    } else {
        loadURL(mainWindow);
    }

    // Create application menu
    createApplicationMenu();
}

function createApplicationMenu() {
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Settings',
                    accelerator: 'CmdOrCtrl+,',
                    click: () => {
                        mainWindow.webContents.send('navigate-to', '/settings');
                    }
                },
                { type: 'separator' },
                {
                    label: 'Export Data',
                    click: async () => {
                        // Will be implemented in storage manager
                        mainWindow.webContents.send('export-data-request');
                    }
                },
                {
                    label: 'Import Data',
                    click: async () => {
                        // Will be implemented in storage manager
                        mainWindow.webContents.send('import-data-request');
                    }
                },
                { type: 'separator' },
                {
                    label: 'Quit',
                    accelerator: 'CmdOrCtrl+Q',
                    click: () => {
                        app.isQuitting = true;
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'selectAll' }
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'About',
                    click: () => {
                        mainWindow.webContents.send('show-about');
                    }
                },
                {
                    label: 'Check for Updates',
                    click: () => {
                        // Will be implemented with electron-updater
                        mainWindow.webContents.send('check-updates');
                    }
                }
            ]
        }
    ];

    // Add developer tools in development
    if (process.env.NODE_ENV === 'development') {
        template.push({
            label: 'Developer',
            submenu: [
                { role: 'toggleDevTools' }
            ]
        });
    }

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

function createTray() {
    // Create tray icon
    const iconPath = path.join(__dirname, 'build/tray-icon.png');
    const trayIcon = nativeImage.createFromPath(iconPath);

    tray = new Tray(trayIcon.resize({ width: 16, height: 16 }));

    // Update tray tooltip with next scheduled bell
    const updateTrayTooltip = () => {
        const scheduled = audioScheduler.getUpcomingSchedules();
        if (scheduled.length > 0) {
            const next = scheduled[0];
            const time = new Date(next.time).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            });
            tray.setToolTip(`Ghana School Bell System\nNext bell: ${next.config?.title || 'Scheduled'} at ${time}`);
        } else {
            tray.setToolTip('Ghana School Bell System\nNo bells scheduled');
        }
    };

    updateTrayTooltip();
    // Update tooltip every minute
    setInterval(updateTrayTooltip, 60000);

    // Function to rebuild menu (for checkbox state updates)
    const rebuildTrayMenu = () => {
        const runInBackground = store.get('runInBackground', true);
        const autoStart = store.get('autoStart', false);
        const scheduled = audioScheduler.getUpcomingSchedules();

        const contextMenu = Menu.buildFromTemplate([
            {
                label: '🔔 Ghana School Bell',
                enabled: false
            },
            { type: 'separator' },
            {
                label: 'Show App',
                click: () => {
                    mainWindow.show();
                }
            },
            {
                label: 'Hide App',
                click: () => {
                    mainWindow.hide();
                }
            },
            { type: 'separator' },
            {
                label: `📅 ${scheduled.length} Bell(s) Scheduled`,
                enabled: false
            },
            {
                label: 'View Upcoming Bells',
                click: () => {
                    mainWindow.show();
                    mainWindow.webContents.send('navigate-to', '/schedule');
                }
            },
            { type: 'separator' },
            {
                label: 'Run in Background',
                type: 'checkbox',
                checked: runInBackground,
                click: () => {
                    const newValue = !store.get('runInBackground', true);
                    store.set('runInBackground', newValue);
                    rebuildTrayMenu();
                }
            },
            {
                label: 'Start with Windows',
                type: 'checkbox',
                checked: autoStart,
                click: () => {
                    const newValue = !store.get('autoStart', false);
                    store.set('autoStart', newValue);
                    app.setLoginItemSettings({
                        openAtLogin: newValue,
                        openAsHidden: newValue
                    });
                    rebuildTrayMenu();
                }
            },
            { type: 'separator' },
            {
                label: 'Quit App',
                click: () => {
                    app.isQuitting = true;
                    app.quit();
                }
            }
        ]);

        tray.setContextMenu(contextMenu);
    };

    rebuildTrayMenu();

    // Handle tray click
    tray.on('click', () => {
        if (mainWindow.isVisible()) {
            mainWindow.hide();
        } else {
            mainWindow.show();
        }
    });
}

// IPC Handlers

// Settings operations
ipcMain.handle('save-settings', async (event, settings) => {
    return await storageManager.saveSettings(settings);
});

ipcMain.handle('load-settings', async () => {
    return await storageManager.loadSettings();
});

// Timetable operations
ipcMain.handle('save-timetable', async (event, timetable) => {
    return await storageManager.saveTimetable(timetable);
});

ipcMain.handle('load-timetable', async () => {
    return await storageManager.loadTimetable();
});

// Student data operations
ipcMain.handle('save-student-data', async (event, studentData) => {
    return await storageManager.saveStudentData(studentData);
});

ipcMain.handle('load-student-data', async () => {
    return await storageManager.loadStudentData();
});

// Data export/import operations
ipcMain.handle('export-data', async (event, exportPath) => {
    return await storageManager.exportData(exportPath);
});

ipcMain.handle('import-data', async (event, importPath) => {
    return await storageManager.importData(importPath);
});

// Storage statistics
ipcMain.handle('get-storage-stats', async () => {
    return await storageManager.getStorageStats();
});

// Zustand store persistence
ipcMain.handle('save-zustand-state', async (event, key, value) => {
    try {
        const fs = require('fs');
        const filePath = path.join(dataPath, `${key}.json`);
        await fs.promises.writeFile(filePath, value, 'utf8');
        console.log('[Storage] Zustand state saved:', key);
        return { success: true };
    } catch (error) {
        console.error('[Storage] Failed to save Zustand state:', error);
        return { success: false, error: error.message };
    }
});

ipcMain.handle('load-zustand-state', async (event, key) => {
    try {
        const fs = require('fs');
        const filePath = path.join(dataPath, `${key}.json`);
        
        if (!fs.existsSync(filePath)) {
            return { success: true, data: null };
        }
        
        const data = await fs.promises.readFile(filePath, 'utf8');
        console.log('[Storage] Zustand state loaded:', key);
        return { success: true, data };
    } catch (error) {
        console.error('[Storage] Failed to load Zustand state:', error);
        return { success: false, error: error.message };
    }
});

// System operations
ipcMain.on('minimize-to-tray', () => {
    if (mainWindow) {
        mainWindow.hide();
    }
});

ipcMain.on('show-notification', (event, title, body) => {
    if (Notification.isSupported()) {
        new Notification({
            title,
            body,
            icon: path.join(__dirname, 'build/icon.png')
        }).show();
    }
});

ipcMain.handle('get-data-path', () => {
    return dataPath;
});

// Auto-start operations
ipcMain.handle('set-auto-start', async (event, enabled) => {
    try {
        store.set('autoStart', enabled);
        app.setLoginItemSettings({
            openAtLogin: enabled,
            openAsHidden: false
        });
        console.log('[AutoStart] Auto-start', enabled ? 'enabled' : 'disabled');
        return { success: true, enabled };
    } catch (error) {
        console.error('[AutoStart] Failed to set auto-start:', error);
        return { success: false, error: error.message };
    }
});

ipcMain.handle('get-auto-start', () => {
    const enabled = store.get('autoStart', false);
    return { success: true, enabled };
});

// Audio scheduling operations
ipcMain.handle('schedule-audio', async (event, time, config) => {
    try {
        const scheduledTime = new Date(time);
        const id = audioScheduler.scheduleAudio(scheduledTime, config);
        console.log(`[IPC] Scheduled audio ${id} for ${scheduledTime.toISOString()}`);
        return { success: true, id };
    } catch (error) {
        console.error('[IPC] Failed to schedule audio:', error);
        return { success: false, error: error.message };
    }
});

ipcMain.handle('cancel-audio', async (event, id) => {
    try {
        const cancelled = audioScheduler.cancelScheduledAudio(id);
        if (cancelled) {
            console.log(`[IPC] Cancelled audio ${id}`);
            return { success: true };
        } else {
            return { success: false, error: 'Audio not found' };
        }
    } catch (error) {
        console.error('[IPC] Failed to cancel audio:', error);
        return { success: false, error: error.message };
    }
});

ipcMain.handle('get-scheduled-audio', async () => {
    try {
        const scheduled = audioScheduler.getUpcomingSchedules();
        return { success: true, data: scheduled };
    } catch (error) {
        console.error('[IPC] Failed to get scheduled audio:', error);
        return { success: false, error: error.message };
    }
});

ipcMain.handle('play-audio-now', async (event, config) => {
    try {
        await audioScheduler.playAudioNow(config);
        console.log('[IPC] Playing audio immediately');
        return { success: true };
    } catch (error) {
        console.error('[IPC] Failed to play audio:', error);
        return { success: false, error: error.message };
    }
});

ipcMain.handle('get-audio-queue-status', async () => {
    try {
        const status = audioScheduler.getQueueStatus();
        return { success: true, data: status };
    } catch (error) {
        console.error('[IPC] Failed to get queue status:', error);
        return { success: false, error: error.message };
    }
});

// Handle audio trigger events from scheduler
audioScheduler.on('audio-trigger', (audioData) => {
    console.log(`[AudioScheduler] Audio triggered: ${audioData.id}`);

    // Send notification
    if (Notification.isSupported()) {
        const notificationTitle = audioData.config.title || 'School Bell';
        const notificationBody = audioData.config.announcement || 'Bell is ringing';

        new Notification({
            title: notificationTitle,
            body: notificationBody,
            icon: path.join(__dirname, 'build/icon.png')
        }).show();
    }

    // Send event to renderer process to trigger audio playback
    if (mainWindow) {
        mainWindow.webContents.send('scheduled-audio-trigger', audioData);
    }
});

// Handle audio playback events
audioScheduler.on('play-audio', async (audioData) => {
    console.log(`[AudioScheduler] Play audio: ${audioData.id}`);

    try {
        // Use audio player to handle playback
        if (audioPlayer) {
            await audioPlayer.playAudio(audioData);
        } else {
            console.error('[AudioScheduler] Audio player not initialized');
        }
    } catch (error) {
        console.error('[AudioScheduler] Audio playback failed:', error);
        // Notify scheduler that audio finished (with error)
        audioScheduler.audioFinished();
    }
});

// Audio playback completion handler
ipcMain.on('audio-playback-complete', (event, audioId, success, error) => {
    console.log(`[IPC] Audio playback complete: ${audioId}, success: ${success}`);

    // Notify audio player
    if (audioPlayer) {
        audioPlayer.audioCompleted(audioId, success, error);
    }

    // Notify scheduler to process next in queue
    audioScheduler.audioFinished();
});

// Audio player info handlers
ipcMain.handle('get-audio-history', async (event, limit) => {
    try {
        if (!audioPlayer) {
            return { success: false, error: 'Audio player not initialized' };
        }
        const history = audioPlayer.getHistory(limit);
        return { success: true, data: history };
    } catch (error) {
        console.error('[IPC] Failed to get audio history:', error);
        return { success: false, error: error.message };
    }
});

ipcMain.handle('get-audio-statistics', async () => {
    try {
        if (!audioPlayer) {
            return { success: false, error: 'Audio player not initialized' };
        }
        const stats = audioPlayer.getStatistics();
        return { success: true, data: stats };
    } catch (error) {
        console.error('[IPC] Failed to get audio statistics:', error);
        return { success: false, error: error.message };
    }
});

ipcMain.handle('get-default-audio-device', async () => {
    try {
        if (!audioPlayer) {
            return { success: false, error: 'Audio player not initialized' };
        }
        const device = audioPlayer.getDefaultAudioDevice();
        return { success: true, data: device };
    } catch (error) {
        console.error('[IPC] Failed to get default audio device:', error);
        return { success: false, error: error.message };
    }
});

// Background mode settings
ipcMain.handle('get-run-in-background', () => {
    const enabled = store.get('runInBackground', true);
    return { success: true, enabled };
});

ipcMain.handle('set-run-in-background', async (event, enabled) => {
    try {
        store.set('runInBackground', enabled);
        console.log('[Background] Run in background', enabled ? 'enabled' : 'disabled');
        return { success: true, enabled };
    } catch (error) {
        console.error('[Background] Failed to set run in background:', error);
        return { success: false, error: error.message };
    }
});

// App lifecycle
app.whenReady().then(async () => {
    await initStore();
    await ensureDataDirectory();
    createWindow();
    createTray();

    // Set up auto-start if enabled
    const autoStart = store.get('autoStart', false);
    app.setLoginItemSettings({
        openAtLogin: autoStart,
        openAsHidden: false
    });
});

app.on('window-all-closed', () => {
    // Don't quit when running in background mode
    // The app continues running in the system tray
    const runInBackground = store ? store.get('runInBackground', true) : true;
    if (!runInBackground) {
        app.quit();
    }
    // If running in background, do nothing - app stays in tray
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    } else if (mainWindow) {
        mainWindow.show();
    }
});

// Graceful shutdown - ensure all data is written
app.on('before-quit', async (event) => {
    if (!app.isQuitting) {
        event.preventDefault();
        app.isQuitting = true;

        // Give time for any pending writes to complete
        await new Promise(resolve => setTimeout(resolve, 1000));

        app.quit();
    }
});
