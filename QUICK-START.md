# 🚀 Quick Start - Electron Fresh Build

## What You Have

✅ Complete Electron setup
✅ All data stored in app
✅ Storage system ready
✅ Next.js + React working
✅ IPC bridges configured

## Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

Wait for completion (2-3 minutes)

### Step 2: Add Icons (Optional but Recommended)

Create icon files and put in `assets/` folder:
- `icon.png` - 512x512 pixels
- `icon.ico` - For Windows
- `tray-icon.png` - Small icon for system tray

Or skip for now and use defaults.

### Step 3: Start Development

**Option A: Recommended (Auto-restart)**
```bash
npm run electron:dev
```

**Option B: Manual (Two terminals)**
```bash
# Terminal 1
npm run dev

# Terminal 2 (after localhost:3000 loads)
npm run electron
```

That's it! App opens and you can test everything.

## Development Workflow

### During Development
1. Edit React components normally
2. They auto-reload in the Electron app
3. Use browser dev tools (F12)
4. Test data saving

### Test Data Saving
```javascript
// In your React component
const testSave = async () => {
  await window.electronAPI.saveTimetable({
    name: 'Test Timetable',
    bells: [...]
  });
};
```

### Check Saved Data
```bash
# On Windows (PowerShell)
$env:APPDATA  # Shows your AppData path
# Navigate to: AppData/Roaming/GhanaBell/
# Check .json files there
```

## Build for Distribution

### For Windows Users
```bash
npm run electron:build:win
```

Output:
- `dist/Ghana School Bell System.exe` (Portable)
- `dist/Ghana School Bell System 0.1.3.exe` (Installer)

### For macOS Users
```bash
npm run electron:build:mac
```

### For Linux Users
```bash
npm run electron:build:linux
```

## File Structure Created

```
main.js              ← Electron main process (handles IPC)
preload.js           ← IPC bridge (secure communication)
electron/
  ├── storage.js     ← Manages file storage
  └── scheduler.js   ← Manages bell scheduling
assets/              ← Place your icons here
```

## Common Tasks

### Save Timetable from React
```javascript
const saveTimetable = async (data) => {
  const result = await window.electronAPI.saveTimetable(data);
  console.log(result); // { success: true }
};
```

### Load Timetable from Disk
```javascript
const loadTimetable = async () => {
  const result = await window.electronAPI.loadTimetable();
  if (result.success) {
    console.log(result.data); // Your timetable
  }
};
```

### Export All Data
```javascript
const exportData = async () => {
  const result = await window.electronAPI.exportData();
  // Opens save dialog
  // User picks location
  // All data exported as JSON
};
```

### Get App Info
```javascript
const info = await window.electronAPI.getAppInfo();
console.log(info.data.dataPath); // Where data is stored
```

## Environment Variables

### Development Mode Detection
```javascript
if (isDev) {
  // Load from localhost:3000
} else {
  // Load from packaged files
}
```

This is already configured in `main.js`

## Troubleshooting

### "Module not found: electron"
```bash
npm install electron --save-dev
```

### "Cannot find module 'electron-store'"
```bash
npm install
```

### App won't start
```bash
# Try fresh install
rm -r node_modules
npm install
npm run electron
```

### Data not saving
1. Check `~/GhanaBell/` folder exists
2. Check your React code calls API correctly
3. Check main process console for errors
4. Use dev tools to debug

## Next: Customize

Once working, customize:

1. **Icons** - Add real app icons in `assets/`
2. **App Name** - Change in `package.json`
3. **Tray Menu** - Modify tray code in `main.js`
4. **Storage Path** - Change in `main.js`
5. **Shortcuts** - Add keyboard shortcuts

## Commands Reference

```bash
npm run dev                    # Start dev server
npm run build                  # Build Next.js
npm run electron              # Launch Electron app
npm run electron:dev          # Dev server + Electron
npm run electron:build:win    # Build for Windows
npm run electron:build:mac    # Build for macOS
npm run electron:build:linux  # Build for Linux
```

## What Works Now

✅ Next.js with React - all components
✅ All UI components - Radix UI
✅ Styling - Tailwind CSS
✅ State management - Zustand
✅ Storage - All JSON-based
✅ IPC communication - Sandboxed
✅ Notifications - System notifications
✅ Tray icon - System tray
✅ Window management - Multi-window ready
✅ Build system - electron-builder

## Data Locations

**During Development & Testing:**
```
~/GhanaBell/
├── settings.json
├── timetable.json
├── schools.json
└── bells.json
```

**When Distributed:**
- Same location (user's app data)
- Portable version creates in same folder
- All data moves with app

## Ready to Go!

```bash
npm install
npm run electron:dev
```

That's all you need to start! 🎉

---

**Next Steps**:
1. Run the commands above
2. Test the app
3. Create data
4. Check ~/GhanaBell/ for saved files
5. Build and distribute!
