# Complete Electron App Setup Guide

## Overview

This guide will help you build and run a complete, production-ready Electron application for the Ghana School Bell System. The setup includes:

- ✅ **Electron Framework** - Cross-platform desktop application
- ✅ **Next.js Frontend** - Modern React-based UI
- ✅ **Auto-Update System** - Automatic app updates via electron-updater
- ✅ **Data Persistence** - Secure file-based storage with electron-store
- ✅ **System Tray Integration** - Background operation and notifications
- ✅ **Audio Scheduling** - Precise bell scheduling with playback
- ✅ **IPC Communication** - Secure main/renderer process communication
- ✅ **Windows Installer** - Professional NSIS installer + portable EXE
- ✅ **Production Build** - Optimized for deployment

## System Requirements

### For Building:
- **Windows 10/11** or later (this guide focuses on Windows)
- **Node.js 18.x or later** - [Download](https://nodejs.org/)
- **npm 9.x or later** - Comes with Node.js
- **At least 4GB RAM** for build process
- **At least 2GB free disk space** for dependencies and output

### For Running:
- **Windows 7 or later**
- **At least 200MB free disk space**
- **Audio device** for bell playback (optional, but recommended)

## Quick Start (3 Steps)

### Step 1: Verify Setup
```bash
VERIFY-SETUP.bat
```
This checks that all prerequisites are installed and configured correctly.

### Step 2: Build the App
```bash
BUILD-ELECTRON-APP.bat
```
This creates a production-ready Electron app with:
- Windows NSIS Installer
- Portable EXE (no installation needed)
- All dependencies bundled

**Expected time:** 5-15 minutes on first build

### Step 3: Run the App
```bash
RUN-BUILT-APP.bat
```
This launches the compiled application from the `build-output/` directory.

---

## Detailed Build Instructions

### Prerequisites Installation

1. **Install Node.js:**
   - Download from https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - Run the installer with default settings
   - Restart your computer

2. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

### Building Step by Step

#### Option A: Using Batch Scripts (Recommended for Windows)

**1. Verify Setup**
```bash
VERIFY-SETUP.bat
```

**2. Build Production App**
```bash
BUILD-ELECTRON-APP.bat
```

The script will:
- Check for Node.js and npm
- Install dependencies (if not already installed)
- Build the Next.js frontend
- Compile the Electron application
- Create Windows installer and portable versions
- Output files to `build-output/` directory

**3. Run the Built App**
```bash
RUN-BUILT-APP.bat
```

#### Option B: Using npm Commands (Manual)

If you prefer more control, run these commands in order:

```bash
# 1. Install dependencies (one-time only)
npm install

# 2. Build the Next.js app
npm run build

# 3. Build Electron app for Windows
npm run electron:build:win

# 4. Run the built app (from build-output directory)
# Navigate to build-output and double-click the .exe file
```

#### Option C: Development Mode

For development and testing with hot reload:

```bash
RUN-ELECTRON-DEV.bat
```

This will:
- Start the Next.js dev server on http://localhost:3000
- Launch Electron in development mode
- Enable DevTools for debugging
- Auto-reload on code changes

---

## Output and Deployment

### After Building

The `build-output/` directory will contain:

```
build-output/
├── Ghana School Bell System*.exe       (Installer - NSIS)
├── Ghana School Bell System*.exe       (Portable - No install needed)
└── ... (other files)
```

### Installation Options

**1. Installer (Recommended for End Users)**
- Double-click `Ghana School Bell System [version].exe`
- Allows installation to custom location
- Creates Start Menu shortcuts
- Creates Desktop shortcut
- Professional installation experience

**2. Portable (No Installation)**
- Double-click `Ghana School Bell System [version].exe`
- Runs immediately without installation
- Can be run from USB drive
- No registry changes
- Perfect for testing

### Distributing Your App

1. **Single User Installation:**
   - Send the installer EXE to the user
   - User runs it and follows prompts
   - App installs with all dependencies

2. **Multiple Users/Deployment:**
   - Create a shared network location
   - Copy the portable EXE for immediate use
   - Or use the installer for standard installations

3. **USB/External Drive:**
   - Copy the portable EXE to the drive
   - Can run on any Windows machine

---

## Troubleshooting

### Issue: "Node.js not found"
**Solution:** 
- Install Node.js from https://nodejs.org/
- Restart your terminal/command prompt
- Verify: `node --version`

### Issue: Build fails with "out directory not found"
**Solution:**
- Make sure Next.js built successfully first
- Run: `npm run build`
- Then run the Electron build again

### Issue: "electron-builder not found"
**Solution:**
- Delete `node_modules` folder
- Run: `npm install`
- Then build again

### Issue: App won't start after installation
**Solution:**
1. Check Windows Defender/Antivirus (may be blocking it)
2. Run the portable version to verify it works
3. Check for error messages in `%APPDATA%\Ghana School Bell System\`

### Issue: Build takes too long
**Solution:**
- First build is slowest (downloads dependencies)
- Subsequent builds are much faster
- Ensure you have good internet connection
- Close other applications to free up resources

### Issue: App crashes on startup
**Solution:**
1. Check the data directory: `%APPDATA%\Ghana School Bell System\`
2. Delete the data folder (will reset user data)
3. Try running the app again

---

## Advanced Configuration

### Changing App Name and Details

Edit `package.json`:
```json
{
  "name": "your-app-name",
  "version": "1.0.0",
  "build": {
    "appId": "com.yourcompany.app",
    "productName": "Your App Name",
    "nsis": {
      "shortcutName": "Your App Name"
    }
  }
}
```

### Custom Build Output

Edit the build output directory in `package.json`:
```json
"directories": {
  "output": "path/to/output"
}
```

### Adding Auto-Updates

Update URLs in `package.json` for GitHub updates:
```json
"publish": {
  "provider": "github",
  "owner": "your-username",
  "repo": "your-repo"
}
```

### Customizing App Icon

Replace these files in the `build/` directory:
- `icon.png` - App window icon (512x512)
- `tray-icon.png` - System tray icon (256x256)
- `icon.icns` - macOS icon (if building for Mac)

---

## Development Workflow

### During Development:

1. **Start dev environment:**
   ```bash
   RUN-ELECTRON-DEV.bat
   ```

2. **Make code changes** - Changes auto-reload

3. **Test features** - Use DevTools (F12)

4. **Check console** - Look for errors in DevTools

### For Production:

1. **Run full build:**
   ```bash
   BUILD-ELECTRON-APP.bat
   ```

2. **Test the built app:**
   - Run `RUN-BUILT-APP.bat` or double-click the EXE

3. **Deploy to users:**
   - Copy the EXE from `build-output/`

---

## Security Features

This Electron app includes:

- ✅ **Context Isolation** - Renderer process sandboxed
- ✅ **Preload Script** - Controlled API exposure
- ✅ **Node Integration Disabled** - Safer renderer process
- ✅ **IPC Validation** - All messages validated
- ✅ **Secure Storage** - User data stored safely

---

## Performance Optimization

The build includes:
- ✅ Code splitting
- ✅ Minification and compression
- ✅ Static export (no server needed)
- ✅ Optimized images
- ✅ Tree shaking for unused code

---

## Getting Help

If you encounter issues:

1. **Check the console output** - Look for error messages
2. **Review troubleshooting section** above
3. **Check logs** in `%APPDATA%\Ghana School Bell System\`
4. **Run VERIFY-SETUP.bat** to check prerequisites

---

## File Structure

```
project/
├── main.js                    # Electron main process
├── preload.js                 # IPC bridge (security)
├── package.json               # App configuration & build
├── BUILD-ELECTRON-APP.bat     # Build script
├── RUN-ELECTRON-DEV.bat       # Development runner
├── RUN-BUILT-APP.bat          # Production runner
├── VERIFY-SETUP.bat           # Setup checker
├── electron/                  # Electron modules
│   ├── storage-manager.js     # Data persistence
│   ├── audio-scheduler.js     # Bell scheduling
│   └── audio-player.js        # Audio playback
├── app/                       # Next.js app
├── build/                     # Icons and resources
├── public/                    # Static files
└── build-output/              # Generated app (after build)
    ├── Ghana School Bell System*.exe
    └── ...
```

---

## Next Steps

1. ✅ Run `VERIFY-SETUP.bat` to confirm all prerequisites
2. ✅ Run `BUILD-ELECTRON-APP.bat` to create the app
3. ✅ Test with `RUN-BUILT-APP.bat`
4. ✅ Deploy the EXE files to users
5. ✅ Monitor usage and gather feedback

---

## Version Information

- **Electron:** v39.2.5+
- **Next.js:** v16+
- **Node.js:** 18.0+
- **electron-builder:** v26+
- **electron-updater:** v6+
- **electron-store:** v11+

---

## Success Checklist

- [ ] Node.js 18+ is installed
- [ ] VERIFY-SETUP.bat passes all checks
- [ ] BUILD-ELECTRON-APP.bat completes without errors
- [ ] build-output/ contains .exe files
- [ ] App launches successfully
- [ ] App settings persist after restart
- [ ] Bells play on schedule
- [ ] System tray integration works
- [ ] Ready for deployment

---

**Congratulations!** Your complete Electron app is ready for production deployment! 🎉
