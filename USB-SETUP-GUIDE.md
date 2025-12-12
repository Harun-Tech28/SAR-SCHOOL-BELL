# USB Distribution & Portable Setup Guide

## Problem: App Won't Open on Different Computer

When you copy the built Electron app to a USB and try to run it on another computer, it fails because:

1. **Missing dependencies** - The `node_modules` folder is too large and not properly packaged
2. **Incorrect path references** - The app looks for files in the wrong locations
3. **Data folder permissions** - The app can't write to restricted directories

## Solution: Use the Build System

### Step 1: Build the App Properly

Run this batch file to create a standalone, portable app:

```batch
PREPARE-FOR-USB.bat
```

This will:
- ✅ Build the Next.js app
- ✅ Package all dependencies correctly
- ✅ Create an executable file
- ✅ Prepare it for USB/portable use

### Step 2: What Gets Created

In the `build-output` folder, you'll find:

```
build-output/
├── Ghana School Bell.exe          ← THIS IS THE APP (portable version)
├── other files (internal dependencies)
└── ...
```

### Step 3: Transfer to USB

1. Connect your USB drive
2. Copy **ENTIRE** `build-output` folder to USB
3. Important: Copy the whole folder, not just the .exe file

### Step 4: Run on Another Computer

On the target computer:

1. Insert USB drive
2. Navigate into: `USB:\build-output\`
3. Double-click: `Ghana School Bell.exe`
4. App will start ✅

## Troubleshooting

### Issue: "App won't open" or "Missing files"

**Solution:**
```
✅ Make sure you copied the ENTIRE build-output folder
❌ Don't just copy Ghana School Bell.exe alone
❌ Don't try to move just the out/ folder
```

### Issue: "Permission denied" or "Can't save settings"

**Solution:**
- Make sure the USB drive is not write-protected
- The app needs to create: `app-data/school-bell-storage.json`
- Try copying to a different USB drive if current one has restrictions

### Issue: "App crashes on startup"

**Solution:**
1. Make sure the other computer has Windows 10 or higher
2. Try rebuilding on this computer:
   ```batch
   PREPARE-FOR-USB.bat
   ```
3. Copy fresh `build-output` folder to new USB drive

## What's Inside `build-output`

The `build-output` folder contains:

- **Executable files**: The actual app that runs
- **Application code**: All the UI, logic, and assets
- **Packaged dependencies**: Everything the app needs (no node_modules)
- **Resources**: Audio files, icons, and data files

Everything is **self-contained** and **portable** - the app doesn't need to be installed.

## Manual Build (Advanced)

If PREPARE-FOR-USB.bat doesn't work:

```powershell
# 1. Install dependencies
npm install

# 2. Build Next.js app
npm run build

# 3. Build Electron app
npm run electron:build:win

# 4. Copy build-output to USB
```

## Distribution Checklist

Before giving USB to someone else:

- [ ] `PREPARE-FOR-USB.bat` completed successfully
- [ ] `build-output` folder exists and contains `.exe` file
- [ ] USB drive tested on another computer
- [ ] App opens and runs without errors
- [ ] Can save timetables and settings
- [ ] Audio bells play correctly

## Quick Build for USB

```batch
npm install
npm run build
npm run electron:build:win
REM Now copy build-output to USB
```

## Need Help?

If the app still won't run:

1. Check that `out/` folder exists (built Next.js app)
2. Check that `node_modules/` is present
3. Try rebuilding completely:
   ```batch
   rmdir /s /q build-output
   rmdir /s /q out
   PREPARE-FOR-USB.bat
   ```
4. Make sure target computer has Windows 10 or higher
