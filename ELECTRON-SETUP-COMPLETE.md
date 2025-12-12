# Ghana School Bell - Electron Setup Complete ✅

## Fresh Start - Full Electron Package

Your project is now ready with a complete Electron setup that stores everything in the Electron app.

## Project Structure

```
school-bell-system/
├── main.js                    # Electron main process
├── preload.js                 # IPC bridge (secure)
├── package.json               # Updated with Electron config
├── electron/
│   ├── storage.js            # Storage manager
│   └── scheduler.js          # Audio scheduler
├── assets/                    # App icons and resources
├── app/                       # Next.js app (React components)
├── components/               # Shared components
├── out/                       # Built Next.js app
└── dist/                      # Built Electron app (after build)
```

## What's Included

### ✅ Main Process (main.js)
- Window management
- Tray icon support
- IPC handlers for data operations
- Settings persistence
- Timetable management
- Audio bells system
- Import/Export functionality

### ✅ Preload Script (preload.js)
- Safe IPC communication
- Context isolation enabled
- No direct node access from renderer
- All methods are sandboxed

### ✅ Storage System
- Everything stored in app directory
- `~/GhanaBell/` folder for all data
- JSON file storage (timetable.json, schools.json, bells.json)
- Electron-store for settings
- Automatic backup on export

### ✅ Scheduler
- Schedule audio bells
- Check every 10 seconds
- Trigger events when time matches
- Manage multiple schedules
- Get upcoming schedules

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

This will install:
- Electron
- electron-builder
- electron-store
- electron-is-dev
- concurrently
- wait-on

### 2. Create App Icons

Place these in the `assets/` folder:
- `icon.png` - App icon (512x512)
- `icon.ico` - Windows icon
- `tray-icon.png` - Tray icon (16x16 or 32x32)

### 3. Development Mode

#### Option A: Run Electron with dev server
```bash
npm run electron:dev
```
This will:
1. Start Next.js dev server on http://localhost:3000
2. Wait for it to be ready
3. Launch Electron app pointing to localhost

#### Option B: Manual development
```bash
# Terminal 1
npm run dev

# Terminal 2 (wait for localhost:3000)
npm run electron
```

### 4. Build for Production

```bash
# Build Next.js
npm run build

# Build Electron app
npm run electron:build:win    # Windows
npm run electron:build:mac    # macOS
npm run electron:build:linux  # Linux
```

Built apps will be in `dist/` folder.

## Data Storage

### Automatically Stored In
- **Location**: `~/GhanaBell/` (User's app data directory)
- **Settings**: `settings.json`
- **Timetables**: `timetable.json`
- **Schools**: `schools.json`
- **Bells**: `bells.json`

### Each file persisted in:
1. Electron-store (for settings)
2. JSON files (for timetables, schools, bells)
3. Both locations = redundancy

### Portable Mode
- All data stays within app
- Can be moved to USB
- Transfer entire `dist/` folder
- Data travels with app

## Using Storage from React

### In Your React Components
```jsx
// Save settings
await window.electronAPI.saveSettings({ theme: 'dark' });

// Load settings
const result = await window.electronAPI.loadSettings();
const settings = result.data;

// Save timetable
await window.electronAPI.saveTimetable(timetableData);

// Load timetable
const timetableResult = await window.electronAPI.loadTimetable();
const timetable = timetableResult.data;

// Export all data
await window.electronAPI.exportData();

// Import data
const imported = await window.electronAPI.importData();
```

## Available IPC Methods

### Settings
- `saveSettings(settings)` - Save app settings
- `loadSettings()` - Load app settings

### Timetable
- `saveTimetable(timetable)` - Save timetable
- `loadTimetable()` - Load timetable

### Schools
- `saveSchools(schools)` - Save school list
- `loadSchools()` - Load school list

### Bells
- `saveBells(bells)` - Save bell sounds
- `loadBells()` - Load bell sounds

### Import/Export
- `exportData()` - Export all data as JSON
- `importData()` - Import from JSON file

### App Info
- `getAppDataPath()` - Get app data directory path
- `getAppVersion()` - Get app version
- `getAppInfo()` - Get system info

### Notifications
- `showNotification({ title, body })` - Show notification

## File Outputs After Build

### Windows Build
- `dist/Ghana School Bell System.exe` - Portable version
- `dist/Ghana School Bell System 0.1.3.exe` - Portable installer
- `dist/NSIS/Ghana School Bell System.nsis` - Installer

### All Versions
- Automatic code signing options available
- Auto-update ready (configure in main.js)

## Testing

### Test Development Build
```bash
npm run electron:dev
# App opens with dev tools
# Test save/load functionality
# Check data in ~/GhanaBell/
```

### Test Production Build
```bash
npm run electron:build:win
# Run dist/Ghana School Bell System.exe
# Verify all data saves
# Check data in ~/GhanaBell/
```

## Configuration

### Change App Name
Update in `package.json`:
```json
"productName": "Your App Name"
```

### Change Icons
Replace files in `assets/`:
- `icon.png` - 512x512 PNG
- `icon.ico` - Windows ICO file
- `tray-icon.png` - 16x16 or 32x32 PNG

### Change Data Folder
In `main.js`, update:
```javascript
const store = new Store({
  cwd: path.join(app.getPath('userData'), 'YourAppName')
});
```

## Troubleshooting

### App won't start
```bash
# Clear cache and reinstall
rm -r node_modules
npm install
npm run electron
```

### Data not saving
- Check `~/GhanaBell/` folder exists
- Verify file permissions
- Check browser console for errors
- Check Electron dev tools console

### Dev server connection fails
```bash
# Make sure ports are free
# localhost:3000 (dev server)
# Try killing existing processes
```

### Build fails
```bash
# Clean and rebuild
rm -r out dist
npm run build
npm run electron:build:win
```

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Create icon files in `assets/`
3. ✅ Start development: `npm run electron:dev`
4. ✅ Build when ready: `npm run electron:build:win`
5. ✅ Distribute `dist/` folder

## Important Notes

- All data stored locally in app
- No internet required (offline-first)
- Data portable with app
- Can backup/restore by copying `~/GhanaBell/`
- Settings persist between sessions
- Tray icon support on Windows/Linux/Mac

## Support

For issues:
1. Check Electron main process console
2. Check React dev tools console
3. Check `~/GhanaBell/` folder for data
4. Verify file paths are correct
5. Check IPC method names match exactly

---

**Status**: ✅ Ready for development
**Build Type**: Full Electron Package
**Storage**: All in-app with JSON files
**Data Location**: ~/GhanaBell/
**Portable**: Yes (can run from USB)
