# Electron Desktop Application Setup

This document describes the Electron setup for the Ghana School Bell System desktop application.

## Overview

The application is built using:
- **Electron** - Desktop application framework
- **Next.js** - React framework (static export mode)
- **electron-builder** - Packaging and distribution
- **electron-updater** - Auto-update functionality
- **electron-store** - Configuration persistence

## Project Structure

```
├── main.js                 # Electron main process
├── preload.js             # Secure IPC bridge
├── electron.d.ts          # TypeScript definitions
├── lib/electron-utils.ts  # Electron helper utilities
├── electron/              # Electron-specific resources
│   └── voices/           # Bundled offline voice engines
├── build/                # Build resources (icons, etc.)
│   ├── icon.png          # Application icon
│   ├── icon.ico          # Windows icon
│   ├── icon.icns         # macOS icon
│   └── tray-icon.png     # System tray icon
└── out/                  # Next.js static export (generated)
```

## Development

### Running in Development Mode

1. Start the Next.js development server:
```bash
npm run dev
```

2. In another terminal, start Electron:
```bash
npm run electron:dev
```

The Electron window will load from `http://localhost:3000` and include DevTools.

### Building for Production

1. Build the Next.js static export:
```bash
npm run export
```

2. Build the Electron application:
```bash
# Build for current platform
npm run electron:build

# Or build for specific platforms
npm run electron:build:win    # Windows
npm run electron:build:mac    # macOS
npm run electron:build:linux  # Linux
```

The built applications will be in the `dist-electron` directory.

## Features Implemented

### ✅ Window Management
- Persistent window size and position
- Minimize to system tray
- Restore from tray
- Native application menu

### ✅ IPC Communication
- Secure preload script with contextBridge
- Settings save/load
- Timetable save/load
- Audio scheduling
- System notifications

### ✅ File System Storage
- User data stored in platform-specific locations:
  - Windows: `%APPDATA%/ghana-school-bell/data`
  - macOS: `~/Library/Application Support/ghana-school-bell/data`
  - Linux: `~/.config/ghana-school-bell/data`
- Secure file permissions (0600)
- Automatic directory creation

### ✅ System Integration
- System tray icon with menu
- Native notifications
- Auto-start configuration (ready for implementation)
- Platform detection utilities

### ✅ Packaging Configuration
- Windows: NSIS installer with per-user installation
- macOS: DMG with drag-to-Applications
- Linux: AppImage and .deb packages
- Voice engines bundled in extraResources

## Next Steps

The following features are ready to be implemented in subsequent tasks:

1. **Offline Voice Engines** (Task 2-4)
   - Bundle eSpeak-NG and Piper TTS
   - Implement offline voice service
   - Replace AI voice providers

2. **Audio Scheduling** (Task 9-10)
   - Implement audio scheduler in main process
   - Add timer-based triggering
   - Audio queue management

3. **Auto-Updates** (Task 13)
   - Configure electron-updater
   - Update notification UI
   - Rollback functionality

4. **Data Migration** (Task 15)
   - Import from PWA IndexedDB
   - Convert to file system storage

## Testing

### Manual Testing

1. **Installation Test**
   - Run the installer
   - Verify all files are installed
   - Check application launches

2. **Offline Test**
   - Disable network
   - Launch application
   - Verify all features work

3. **System Integration Test**
   - Minimize to tray
   - Click tray icon to restore
   - Test notifications
   - Check auto-start setting

### Automated Testing

Property-based tests will be added in later tasks to verify:
- Offline launch capability
- Data persistence
- Settings round-trip
- Network isolation

## Troubleshooting

### Application won't start
- Check console for errors: `npm run electron:dev`
- Verify Next.js build completed: check `out/` directory
- Ensure all dependencies installed: `npm install`

### Icons not showing
- Verify icon files exist in `build/` directory
- Check icon paths in `main.js` and `package.json`
- Rebuild application after adding icons

### IPC not working
- Check preload script is loaded: look for `window.electronAPI`
- Verify contextIsolation is enabled in webPreferences
- Check IPC handler names match between preload and main

### Build fails
- Ensure `out/` directory exists and contains Next.js export
- Check electron-builder configuration in package.json
- Verify all required files are included in `files` array

## Security Considerations

- ✅ Context isolation enabled
- ✅ Node integration disabled in renderer
- ✅ Secure IPC via preload script
- ✅ File permissions set to user-only (0600)
- ✅ No network access in normal operation
- ⏳ Code signing (to be configured)

## Platform-Specific Notes

### Windows
- NSIS installer allows per-user installation (no admin required)
- System tray icon appears in notification area
- Auto-start via registry entry

### macOS
- DMG provides drag-to-Applications installation
- Menu bar icon (not system tray)
- Auto-start via Login Items
- Code signing required for distribution
- Notarization required for macOS 10.15+

### Linux
- AppImage requires no installation (portable)
- .deb package for Debian/Ubuntu
- System tray uses libappindicator
- Auto-start via .desktop file in autostart directory

## Resources

- [Electron Documentation](https://www.electronjs.org/docs)
- [electron-builder Documentation](https://www.electron.build/)
- [electron-updater Documentation](https://www.electron.build/auto-update)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
