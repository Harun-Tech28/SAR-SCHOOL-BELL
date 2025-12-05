# Electron Auto-Updates Implementation Guide

## Overview

This guide covers implementing automatic updates for the Ghana School Bell System Electron desktop application using electron-updater.

## Current Status

✅ electron-updater is already installed in package.json
⚠️ Update functionality needs to be implemented in main.js
⚠️ UI components for update notifications need to be created

## Implementation Steps

### Step 1: Configure Update Server

**Option A: GitHub Releases (Recommended)**

Already configured in package.json:
```json
{
  "publish": {
    "provider": "github",
    "owner": "your-github-username",
    "repo": "ghana-school-bell"
  }
}
```

Update with your actual GitHub details.

**Option B: Custom Server**

```json
{
  "publish": {
    "provider": "generic",
    "url": "https://your-server.com/updates"
  }
}
```

### Step 2: Implement Auto-Updater in Main Process

Add to `main.js`:

```javascript
const { autoUpdater } = require('electron-updater');

// Configure auto-updater
autoUpdater.autoDownload = false; // Don't auto-download, ask user first
autoUpdater.autoInstallOnAppQuit = true;

// Check for updates on app start
app.whenReady().then(() => {
  // ... existing code ...
  
  // Check for updates after 5 seconds
  setTimeout(() => {
    if (process.env.NODE_ENV !== 'development') {
      autoUpdater.checkForUpdates();
    }
  }, 5000);
});

// Auto-updater events
autoUpdater.on('checking-for-update', () => {
  console.log('[AutoUpdater] Checking for updates...');
});

autoUpdater.on('update-available', (info) => {
  console.log('[AutoUpdater] Update available:', info.version);
  
  // Send to renderer
  if (mainWindow) {
    mainWindow.webContents.send('app-update-available', {
      version: info.version,
      releaseNotes: info.releaseNotes,
      releaseDate: info.releaseDate
    });
  }
});

autoUpdater.on('update-not-available', (info) => {
  console.log('[AutoUpdater] No updates available');
});

autoUpdater.on('error', (err) => {
  console.error('[AutoUpdater] Error:', err);
  
  if (mainWindow) {
    mainWindow.webContents.send('app-update-error', err.message);
  }
});

autoUpdater.on('download-progress', (progressObj) => {
  console.log(`[AutoUpdater] Download progress: ${progressObj.percent}%`);
  
  if (mainWindow) {
    mainWindow.webContents.send('app-update-progress', {
      percent: progressObj.percent,
      transferred: progressObj.transferred,
      total: progressObj.total
    });
  }
});

autoUpdater.on('update-downloaded', (info) => {
  console.log('[AutoUpdater] Update downloaded');
  
  if (mainWindow) {
    mainWindow.webContents.send('app-update-downloaded', {
      version: info.version
    });
  }
});

// IPC handlers for update operations
ipcMain.handle('check-for-updates', async () => {
  try {
    const result = await autoUpdater.checkForUpdates();
    return { success: true, updateInfo: result.updateInfo };
  } catch (error) {
    console.error('[IPC] Check for updates failed:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('download-update', async () => {
  try {
    await autoUpdater.downloadUpdate();
    return { success: true };
  } catch (error) {
    console.error('[IPC] Download update failed:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('install-update', () => {
  // This will quit the app and install the update
  autoUpdater.quitAndInstall(false, true);
  return { success: true };
});
```

### Step 3: Update Preload Script

Add to `preload.js`:

```javascript
// Update operations
checkForUpdates: () => ipcRenderer.invoke('check-for-updates'),
downloadUpdate: () => ipcRenderer.invoke('download-update'),
installUpdate: () => ipcRenderer.invoke('install-update'),

// Update event listeners
onUpdateAvailable: (callback) => {
  ipcRenderer.on('app-update-available', (event, info) => callback(info));
},
onUpdateProgress: (callback) => {
  ipcRenderer.on('app-update-progress', (event, progress) => callback(progress));
},
onUpdateDownloaded: (callback) => {
  ipcRenderer.on('app-update-downloaded', (event, info) => callback(info));
},
onUpdateError: (callback) => {
  ipcRenderer.on('app-update-error', (event, error) => callback(error));
},
```

### Step 4: Update TypeScript Definitions

Add to `electron.d.ts`:

```typescript
// Update operations
checkForUpdates: () => Promise<{ success: boolean; updateInfo?: any; error?: string }>;
downloadUpdate: () => Promise<{ success: boolean; error?: string }>;
installUpdate: () => Promise<{ success: boolean }>;

// Update event listeners
onUpdateAvailable: (callback: (info: { version: string; releaseNotes: string; releaseDate: string }) => void) => void;
onUpdateProgress: (callback: (progress: { percent: number; transferred: number; total: number }) => void) => void;
onUpdateDownloaded: (callback: (info: { version: string }) => void) => void;
onUpdateError: (callback: (error: string) => void) => void;
```

### Step 5: Create Update Notification Component

Create `components/update-notification.tsx`:

```typescript
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { isElectron } from '@/lib/electron-utils';

export function UpdateNotification() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updateInfo, setUpdateInfo] = useState<any>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [updateReady, setUpdateReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isElectron() || !window.electronAPI) return;

    // Listen for update available
    window.electronAPI.onUpdateAvailable((info) => {
      setUpdateAvailable(true);
      setUpdateInfo(info);
    });

    // Listen for download progress
    window.electronAPI.onUpdateProgress((progress) => {
      setDownloadProgress(progress.percent);
    });

    // Listen for update downloaded
    window.electronAPI.onUpdateDownloaded((info) => {
      setDownloading(false);
      setUpdateReady(true);
    });

    // Listen for errors
    window.electronAPI.onUpdateError((error) => {
      setError(error);
      setDownloading(false);
    });
  }, []);

  const handleDownload = async () => {
    if (!window.electronAPI) return;
    
    setDownloading(true);
    setError(null);
    
    const result = await window.electronAPI.downloadUpdate();
    if (!result.success) {
      setError(result.error || 'Failed to download update');
      setDownloading(false);
    }
  };

  const handleInstall = async () => {
    if (!window.electronAPI) return;
    await window.electronAPI.installUpdate();
  };

  const handleCheckForUpdates = async () => {
    if (!window.electronAPI) return;
    
    const result = await window.electronAPI.checkForUpdates();
    if (!result.success) {
      setError(result.error || 'Failed to check for updates');
    }
  };

  if (!isElectron()) return null;

  // Update ready to install
  if (updateReady) {
    return (
      <Card className="mb-6 border-green-200 bg-green-50 dark:bg-green-900/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
            <CheckCircle className="w-5 h-5" />
            Update Ready to Install
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-green-600 dark:text-green-400 mb-4">
            Version {updateInfo?.version} has been downloaded and is ready to install.
            The application will restart to complete the installation.
          </p>
          <Button onClick={handleInstall} className="bg-green-600 hover:bg-green-700">
            <RefreshCw className="w-4 h-4 mr-2" />
            Restart and Install
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Downloading update
  if (downloading) {
    return (
      <Card className="mb-6 border-blue-200 bg-blue-50 dark:bg-blue-900/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
            <Download className="w-5 h-5 animate-bounce" />
            Downloading Update
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Downloading version {updateInfo?.version}...
            </p>
            <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${downloadProgress}%` }}
              />
            </div>
            <p className="text-xs text-blue-500 dark:text-blue-400">
              {Math.round(downloadProgress)}% complete
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Update available
  if (updateAvailable) {
    return (
      <Card className="mb-6 border-purple-200 bg-purple-50 dark:bg-purple-900/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
            <Download className="w-5 h-5" />
            Update Available
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Version {updateInfo?.version} is available for download.
            </p>
            {updateInfo?.releaseNotes && (
              <div className="text-xs text-purple-500 dark:text-purple-400 bg-white/50 dark:bg-black/20 p-2 rounded">
                <strong>What's new:</strong>
                <div className="mt-1">{updateInfo.releaseNotes}</div>
              </div>
            )}
            <div className="flex gap-2">
              <Button onClick={handleDownload} className="bg-purple-600 hover:bg-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Download Update
              </Button>
              <Button variant="outline" onClick={() => setUpdateAvailable(false)}>
                Later
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Error state
  if (error) {
    return (
      <Card className="mb-6 border-red-200 bg-red-50 dark:bg-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
            <AlertCircle className="w-5 h-5" />
            Update Error
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-red-600 dark:text-red-400 mb-3">{error}</p>
          <Button variant="outline" onClick={() => setError(null)}>
            Dismiss
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Default: Show check for updates button
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCheckForUpdates}
      className="flex items-center gap-2"
    >
      <RefreshCw className="w-4 h-4" />
      Check for Updates
    </Button>
  );
}
```

### Step 6: Add to Dashboard

Update `components/dashboard.tsx`:

```typescript
import { UpdateNotification } from '@/components/update-notification';

// In the render:
<div className="p-4 md:p-6 lg:p-8">
  <UpdateNotification />
  {/* ... rest of dashboard ... */}
</div>
```

## Publishing Updates

### Step 1: Update Version

Update `package.json`:
```json
{
  "version": "1.0.1"
}
```

### Step 2: Build Installers

```bash
npm run export
npm run electron:build
```

### Step 3: Create GitHub Release

```bash
git tag v1.0.1
git push origin v1.0.1
```

Then on GitHub:
1. Go to Releases → Create new release
2. Choose tag v1.0.1
3. Upload installers from `dist-electron/`
4. Add release notes
5. Publish release

### Step 4: Auto-Updater Detects Update

- App checks for updates on startup
- Compares current version with latest release
- Notifies user if update available
- Downloads and installs with user approval

## Update Flow

```
1. App starts → Check for updates (after 5 seconds)
2. Update found → Notify user
3. User clicks "Download" → Download in background
4. Download complete → Notify user
5. User clicks "Install" → Quit and install
6. App restarts with new version
```

## Testing Updates

### Local Testing

1. Build version 1.0.0
2. Install it
3. Update version to 1.0.1 in package.json
4. Build again
5. Create local update server or use GitHub release
6. Test update flow

### Production Testing

1. Release v1.0.0 to GitHub
2. Install on test machine
3. Release v1.0.1 to GitHub
4. Wait for update notification
5. Test download and install

## Rollback Strategy

If update fails:

1. **Automatic Rollback:**
   - electron-updater keeps previous version
   - If new version crashes, user can reinstall old version

2. **Manual Rollback:**
   - Keep previous installers available
   - Users can download and install older version

3. **Emergency Fix:**
   - Release new version with fix
   - Mark broken version as draft on GitHub

## Best Practices

1. **Test thoroughly before releasing**
2. **Use semantic versioning** (MAJOR.MINOR.PATCH)
3. **Write clear release notes**
4. **Keep update sizes reasonable**
5. **Don't force updates** - let users choose when
6. **Backup user data** before major updates
7. **Monitor update success rates**
8. **Have rollback plan ready**

## Troubleshooting

**Updates not detected:**
- Check GitHub release is published (not draft)
- Verify publish configuration in package.json
- Check network connectivity
- Review auto-updater logs

**Download fails:**
- Check file permissions
- Verify sufficient disk space
- Check antivirus/firewall settings
- Try manual download

**Install fails:**
- Check app is not running
- Verify write permissions
- Review error logs
- Try clean install

## Security

- Updates are verified with code signatures
- HTTPS only for downloads
- Checksums validated automatically
- User approval required before install

## Monitoring

Track update metrics:
- Update check frequency
- Download success rate
- Install success rate
- Version distribution
- Error rates

## Future Enhancements

- Delta updates (smaller downloads)
- Background downloads
- Scheduled update checks
- Update channels (stable/beta)
- Automatic rollback on crash
- Update analytics
