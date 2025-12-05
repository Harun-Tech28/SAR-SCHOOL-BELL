# Electron Build Troubleshooting - "Access Denied" Error

## Problem
When running `npm run electron:build:win`, you get an "Access is denied" error for `d3dcompiler_47.dll`.

## Root Cause
Windows Defender or antivirus software is blocking electron-builder from creating files in the `dist-electron` folder.

## Solutions (Try in Order)

### Solution 1: Temporarily Disable Windows Defender (Recommended)

1. **Open Windows Security:**
   - Press `Windows + I` to open Settings
   - Go to "Privacy & Security" → "Windows Security"
   - Click "Virus & threat protection"

2. **Disable Real-time Protection:**
   - Click "Manage settings" under "Virus & threat protection settings"
   - Turn OFF "Real-time protection"
   - Confirm the action

3. **Run the Build:**
   ```bash
   npm run electron:build:win
   ```

4. **Re-enable Protection:**
   - After build completes, turn Real-time protection back ON

### Solution 2: Add Folder Exclusion

1. **Open Windows Security:**
   - Windows Security → Virus & threat protection
   - Scroll down to "Virus & threat protection settings"
   - Click "Manage settings"

2. **Add Exclusion:**
   - Scroll to "Exclusions"
   - Click "Add or remove exclusions"
   - Click "Add an exclusion" → "Folder"
   - Browse to: `C:\Users\user\Downloads\school-bell-system`
   - Click "Select Folder"

3. **Run the Build:**
   ```bash
   npm run electron:build:win
   ```

### Solution 3: Run as Administrator

1. **Open PowerShell as Administrator:**
   - Press `Windows + X`
   - Select "Windows PowerShell (Admin)" or "Terminal (Admin)"

2. **Navigate to Project:**
   ```bash
   cd C:\Users\user\Downloads\school-bell-system
   ```

3. **Run Build:**
   ```bash
   npm run electron:build:win
   ```

### Solution 4: Use Different Output Directory

1. **Create a new folder outside Downloads:**
   ```bash
   mkdir C:\BuildTemp
   ```

2. **Copy project there:**
   ```bash
   xcopy /E /I C:\Users\user\Downloads\school-bell-system C:\BuildTemp\school-bell-system
   ```

3. **Build from new location:**
   ```bash
   cd C:\BuildTemp\school-bell-system
   npm run electron:build:win
   ```

### Solution 5: Clean Build

1. **Delete node_modules and reinstall:**
   ```bash
   rmdir /s /q node_modules
   rmdir /s /q dist-electron
   npm install
   ```

2. **Try building again:**
   ```bash
   npm run electron:build:win
   ```

## After Successful Build

Once the build completes successfully, you'll find your installer at:

```
📁 dist-electron/
   └── Ghana School Bell System Setup 0.1.0.exe
```

## Alternative: Use Web Version

If Electron build continues to fail, you can:

1. **Deploy to Netlify** (web version works everywhere)
2. **Use the web app** in a browser
3. **Try building on a different computer**

## Common Issues

### "Cannot find module 'electron'"
```bash
npm install electron --save-dev
```

### "Out of memory"
```bash
set NODE_OPTIONS=--max-old-space-size=4096
npm run electron:build:win
```

### Build takes too long
- Close other applications
- Disable antivirus temporarily
- Use SSD instead of HDD

## Need Help?

If none of these solutions work:

1. Check Windows Event Viewer for detailed errors
2. Try building on a different Windows machine
3. Use the web version (Netlify deployment)
4. Contact your IT administrator if on a managed computer

---

**Most Common Fix:** Temporarily disable Windows Defender Real-time Protection during build.
