# How to Build and Find Your Electron Installer

## Quick Answer: Where to Find the Installer

After building, your installer will be located in:
```
📁 dist-electron/
   └── Ghana School Bell System Setup 0.1.0.exe  (Windows installer)
```

## Step-by-Step: Build the Installer

### 1. Build the Electron Package

Run this command in your terminal:

```bash
npm run electron:build:win
```

This will:
- Build the Next.js static export
- Package it with Electron
- Create a Windows installer (.exe)

### 2. Wait for Build to Complete

The build process takes 2-5 minutes and will:
- ✅ Export Next.js app to `out/` folder
- ✅ Package with Electron
- ✅ Create installer in `dist-electron/` folder

### 3. Find Your Installer

After successful build, open File Explorer and navigate to:
```
C:\Users\user\Downloads\school-bell-system\dist-electron\
```

You'll find:
- **`Ghana School Bell System Setup 0.1.0.exe`** - The installer file
- Other build artifacts

### 4. Install the Application

Double-click the `.exe` file to install:
1. Choose installation location
2. Create desktop shortcut (optional)
3. Click Install
4. Launch the app!

## Alternative: Build for Other Platforms

### For Mac (if you have a Mac):
```bash
npm run electron:build:mac
```
Creates: `Ghana School Bell System-0.1.0.dmg`

### For Linux:
```bash
npm run electron:build:linux
```
Creates: `Ghana School Bell System-0.1.0.AppImage`

## Troubleshooting

### Build Fails?

**Check Node.js version:**
```bash
node --version
```
Should be v18 or higher

**Clear cache and rebuild:**
```bash
npm run build
npm run electron:build:win
```

### Can't Find dist-electron Folder?

Make sure the build completed successfully. Look for:
```
✓ Built successfully
```

If you see errors, check the console output.

### Installer Won't Run?

- Windows may show "Unknown Publisher" warning
- Click "More info" → "Run anyway"
- This is normal for unsigned applications

## File Sizes

Expect these approximate sizes:
- **Installer (.exe):** 150-200 MB
- **Installed app:** 250-300 MB

The size includes:
- Electron runtime
- Chromium browser
- Your app code
- Node.js modules

## Sharing the Installer

To share with others:

1. **Upload to cloud storage:**
   - Google Drive
   - Dropbox
   - OneDrive

2. **Or use GitHub Releases:**
   - Go to your GitHub repository
   - Click "Releases" → "Create new release"
   - Upload the `.exe` file
   - Share the download link

## Quick Build Command Reference

```bash
# Build for Windows (current platform)
npm run electron:build:win

# Just build Next.js (no Electron)
npm run build

# Test Electron locally (no installer)
npm run electron

# Build for all platforms (requires setup)
npm run electron:build
```

## What Gets Packaged?

The installer includes:
- ✅ Your web app (from `out/` folder)
- ✅ Electron runtime
- ✅ Offline voice files (if added)
- ✅ All dependencies
- ✅ Auto-start capability
- ✅ System tray integration

## After Installation

The app will be installed to:
```
C:\Users\[YourName]\AppData\Local\Programs\ghana-school-bell\
```

And accessible from:
- Start Menu → "Ghana School Bell System"
- Desktop shortcut (if created)
- System tray icon (when running)

---

**Ready to build?** Run: `npm run electron:build:win`

**Need help?** Check `ELECTRON_PACKAGING_GUIDE.md` for detailed instructions.
