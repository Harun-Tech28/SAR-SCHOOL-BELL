# Electron Desktop Package - Packaging & Distribution Guide

## Overview

This guide covers building, packaging, and distributing the Ghana School Bell System as an Electron desktop application for Windows, macOS, and Linux.

## Prerequisites

### Required Tools

**All Platforms:**
- Node.js 18+ and npm
- Git

**Windows:**
- No additional tools required (NSIS bundled with electron-builder)

**macOS:**
- Xcode Command Line Tools
- Apple Developer account (for code signing and notarization)

**Linux:**
- Standard build tools (`build-essential` on Ubuntu/Debian)

### Required Assets

Ensure these icon files exist in the `build/` directory:
- `icon.png` - 512x512 PNG (Linux)
- `icon.ico` - Multi-size ICO (Windows)
- `icon.icns` - Multi-size ICNS (macOS)
- `tray-icon.png` - 16x16 or 32x32 PNG (System tray)

## Building the Application

### Step 1: Export Next.js Application

```bash
npm run export
```

This creates a static export in the `out/` directory that Electron will serve.

### Step 2: Build for Specific Platform

**Windows:**
```bash
npm run electron:build:win
```

**macOS:**
```bash
npm run electron:build:mac
```

**Linux:**
```bash
npm run electron:build:linux
```

**All Platforms:**
```bash
npm run electron:build
```

## Platform-Specific Configuration

### Windows (NSIS Installer)

**Configuration** (already in package.json):
```json
{
  "win": {
    "target": [{ "target": "nsis", "arch": ["x64"] }],
    "icon": "build/icon.ico",
    "publisherName": "Ghana School Bell System"
  },
  "nsis": {
    "oneClick": false,
    "perMachine": false,
    "allowToChangeInstallationDirectory": true,
    "createDesktopShortcut": true,
    "createStartMenuShortcut": true,
    "shortcutName": "Ghana School Bell"
  }
}
```

**Features:**
- Per-user installation (no admin required)
- Custom installation directory
- Desktop and Start Menu shortcuts
- Uninstaller included automatically

**Output:**
- `dist-electron/Ghana School Bell System Setup X.X.X.exe`

**Code Signing (Optional):**
```json
{
  "win": {
    "certificateFile": "path/to/certificate.pfx",
    "certificatePassword": "password"
  }
}
```

### macOS (DMG Installer)

**Configuration** (already in package.json):
```json
{
  "mac": {
    "target": ["dmg", "zip"],
    "icon": "build/icon.icns",
    "category": "public.app-category.education",
    "hardenedRuntime": true,
    "gatekeeperAssess": false,
    "entitlements": "build/entitlements.mac.plist",
    "entitlementsInherit": "build/entitlements.mac.plist"
  }
}
```

**Output:**
- `dist-electron/Ghana School Bell System-X.X.X.dmg`
- `dist-electron/Ghana School Bell System-X.X.X-mac.zip`

**Code Signing (Required for Distribution):**

1. Get Apple Developer certificate
2. Set environment variables:
```bash
export APPLE_ID="your@email.com"
export APPLE_ID_PASSWORD="app-specific-password"
export APPLE_TEAM_ID="your-team-id"
```

3. Add to package.json:
```json
{
  "mac": {
    "identity": "Developer ID Application: Your Name (TEAM_ID)"
  },
  "afterSign": "scripts/notarize.js"
}
```

**Notarization:**
Create `scripts/notarize.js`:
```javascript
const { notarize } = require('@electron/notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;
  if (electronPlatformName !== 'darwin') return;

  const appName = context.packager.appInfo.productFilename;
  return await notarize({
    appBundleId: 'com.ghana.schoolbell',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_ID_PASSWORD,
    teamId: process.env.APPLE_TEAM_ID
  });
};
```

### Linux (AppImage & DEB)

**Configuration** (already in package.json):
```json
{
  "linux": {
    "target": ["AppImage", "deb"],
    "icon": "build/icon.png",
    "category": "Education",
    "maintainer": "Ghana School Bell System",
    "vendor": "Ghana School Bell System"
  }
}
```

**Output:**
- `dist-electron/Ghana School Bell System-X.X.X.AppImage` (Universal)
- `dist-electron/ghana-school-bell-system_X.X.X_amd64.deb` (Debian/Ubuntu)

**AppImage:**
- No installation required
- Portable, runs on most Linux distributions
- Just make executable and run: `chmod +x *.AppImage && ./Ghana*.AppImage`

**DEB Package:**
- For Debian/Ubuntu systems
- Install with: `sudo dpkg -i ghana-school-bell-system_*.deb`

## Voice Engine Bundling

Voice engines are automatically included via `extraResources`:

```json
{
  "extraResources": [
    {
      "from": "electron/voices",
      "to": "voices",
      "filter": ["**/*"]
    }
  ]
}
```

**Ensure voice engines are present:**
```bash
npm run setup-voices
```

This downloads and configures:
- eSpeak-NG binaries
- Piper TTS models
- Voice configuration files

## File Size Optimization

**Current Package Sizes:**
- Base application: ~150-200 MB
- With voice engines: ~250-400 MB

**Optimization Tips:**

1. **Exclude unnecessary files:**
```json
{
  "files": [
    "out/**/*",
    "main.js",
    "preload.js",
    "electron/**/*",
    "!node_modules/**/*",
    "node_modules/electron-store/**/*"
  ]
}
```

2. **Compress voice models:**
- Use compressed Piper models
- Include only essential languages

3. **Use asar archive:**
```json
{
  "asar": true
}
```

## Testing Installers

### Windows
1. Run installer on clean Windows 10/11 VM
2. Verify installation without admin rights
3. Test auto-start functionality
4. Check system tray integration
5. Verify offline voice synthesis
6. Test uninstaller

### macOS
1. Mount DMG on clean macOS 12+ VM
2. Drag to Applications
3. Verify Gatekeeper allows opening (if notarized)
4. Test auto-start via Login Items
5. Check menu bar integration
6. Verify offline voice synthesis

### Linux
1. Run AppImage on Ubuntu 22.04+
2. Test without installation
3. Install DEB package
4. Verify desktop entry created
5. Test auto-start via autostart directory
6. Check system tray (requires libappindicator)

## Distribution

### GitHub Releases

1. Create release tag:
```bash
git tag v1.0.0
git push origin v1.0.0
```

2. Upload installers to GitHub Releases
3. Include release notes
4. Provide checksums (SHA256)

### Direct Download

Host installers on your website:
- Windows: `.exe` installer
- macOS: `.dmg` disk image
- Linux: `.AppImage` and `.deb` packages

### Auto-Updates

Configure in package.json:
```json
{
  "publish": {
    "provider": "github",
    "owner": "your-github-username",
    "repo": "ghana-school-bell"
  }
}
```

## Troubleshooting

### Build Fails

**"Cannot find module 'electron'"**
```bash
npm install
```

**"Icon file not found"**
- Ensure `build/icon.png`, `build/icon.ico`, `build/icon.icns` exist
- Generate icons: `npm run generate-icons` (if script exists)

**"Out directory not found"**
```bash
npm run export
```

### Installer Issues

**Windows: "Windows protected your PC"**
- Expected without code signing
- Users can click "More info" → "Run anyway"
- Solution: Get code signing certificate

**macOS: "App is damaged and can't be opened"**
- Gatekeeper blocking unsigned app
- Solution: Code sign and notarize
- Workaround: `xattr -cr /Applications/Ghana\ School\ Bell\ System.app`

**Linux: "Permission denied"**
```bash
chmod +x Ghana-School-Bell-System-*.AppImage
```

### Voice Engine Issues

**Voices not working after installation:**
1. Check `electron/voices/` directory exists
2. Verify voice files copied to resources
3. Run `npm run setup-voices` before building

## Security Considerations

### Code Signing

**Why sign?**
- Prevents "Unknown Publisher" warnings
- Required for macOS distribution
- Builds user trust

**How to sign:**
- Windows: Authenticode certificate (~$100-300/year)
- macOS: Apple Developer Program ($99/year)
- Linux: Not required

### Permissions

**Requested Permissions:**
- File system access (for data storage)
- Notifications
- Auto-start
- System tray

**Not Requested:**
- Camera
- Microphone
- Location
- Network (except for updates)

## Continuous Integration

### GitHub Actions Example

```yaml
name: Build Electron App

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [windows-latest, macos-latest, ubuntu-latest]
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - run: npm install
      - run: npm run export
      - run: npm run setup-voices
      - run: npm run electron:build
      
      - uses: actions/upload-artifact@v3
        with:
          name: installers-${{ matrix.os }}
          path: dist-electron/*
```

## Checklist Before Release

- [ ] All features tested in development mode
- [ ] Voice engines bundled and working
- [ ] Icons created for all platforms
- [ ] Version number updated in package.json
- [ ] Release notes prepared
- [ ] Installers built for all platforms
- [ ] Installers tested on clean systems
- [ ] Code signed (if applicable)
- [ ] Checksums generated
- [ ] Documentation updated
- [ ] GitHub release created

## Support

For build issues:
- Check electron-builder docs: https://www.electron.build/
- Review build logs in `dist-electron/`
- Test in development mode first: `npm run electron:dev`

For distribution issues:
- Verify file permissions
- Check antivirus/firewall settings
- Test on multiple systems
- Review platform-specific requirements
