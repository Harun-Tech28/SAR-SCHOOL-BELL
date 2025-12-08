# Electron App Not Opening - Troubleshooting Guide

## Issue
The Ghana School Bell System Electron app is not displaying a window when launched.

## Diagnosis
- Multiple app instances are running in the background
- No MainWindowTitle is set (windows not visible)
- App processes are active but UI is not showing

## Possible Causes
1. App is starting minimized to system tray
2. Window is appearing off-screen
3. Next.js 16.0.7 update compatibility issue
4. Multiple instances causing conflicts

## Solutions to Try

### Solution 1: Check System Tray
Look for the Ghana School Bell icon in your system tray (bottom-right of taskbar). The app might be running there. Right-click the icon and select "Show Window" or "Open".

### Solution 2: Delete Configuration and Restart
1. Close all instances of the app
2. Delete the config file:
   ```
   C:\Users\user\AppData\Roaming\my-v0-project\config.json
   ```
3. Run the app again

### Solution 3: Run the Installer
Instead of the portable .exe, run the installer:
```
build-output\Ghana School Bell System Setup 0.1.3.exe
```

This will properly install the app and may fix configuration issues.

### Solution 4: Force Window to Show
The app might be configured to start hidden. Check the main.js file for:
- `runInBackground` setting
- `minimizeToTray` setting
- Window visibility settings

### Solution 5: Run in Development Mode with Dev Server
1. Start the Next.js dev server:
   ```
   npm run dev
   ```
2. In another terminal, run:
   ```
   npm run electron:dev
   ```

This will show any console errors that might be preventing the window from appearing.

## Quick Fix Command
Run this to clean up and restart:
```powershell
# Kill all instances
Stop-Process -Name "Ghana School Bell System*" -Force -ErrorAction SilentlyContinue

# Delete config
Remove-Item "C:\Users\user\AppData\Roaming\my-v0-project\config.json" -Force -ErrorAction SilentlyContinue

# Run installer
Start-Process "build-output\Ghana School Bell System Setup 0.1.3.exe"
```

## If Still Not Working
The app might need a code fix to ensure the window always shows on startup. Check the `createWindow()` function in main.js.
