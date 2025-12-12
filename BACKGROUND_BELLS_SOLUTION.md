# 🔔 Solution: Bells Keep Ringing in Background

## The Problem
When you close the terminal, the app stops and bells won't ring. This is because you're using the **development version** which requires the terminal to stay open.

## The Solution
You need to use the **standalone packaged version** that runs independently in the background.

## 🚀 How to Create Standalone Version

### Step 1: Build the Standalone App
**Double-click:** `BUILD-STANDALONE-APP.bat`

This will:
1. Close all running instances
2. Clean old builds
3. Build the Next.js app
4. Package the Electron app
5. Create a standalone .exe file

### Step 2: Run the Standalone Version
After building, navigate to:
```
build-output\win-unpacked\Ghana School Bell System.exe
```

Double-click this file to run the app.

### Step 3: Minimize to System Tray
Instead of closing the window:
1. Click the **minimize** button (-)
2. The app will minimize to the system tray
3. Look for the bell icon in your system tray (bottom-right of screen)
4. The app keeps running in the background
5. Bells will ring on schedule!

---

## 📊 Two Versions Explained

### Development Version (`RUN-DEV-VERSION.bat`)
**Pros:**
- ✅ Always uses latest code
- ✅ Easy to debug
- ✅ Fast to test changes

**Cons:**
- ❌ Requires terminal to stay open
- ❌ Closes when you close terminal
- ❌ Won't run in background
- ❌ Bells stop when terminal closes

**Use for:** Testing and development

### Standalone Version (`build-output\win-unpacked\Ghana School Bell System.exe`)
**Pros:**
- ✅ Runs independently
- ✅ Works in background
- ✅ Minimizes to system tray
- ✅ Bells ring even when window is closed
- ✅ No terminal needed

**Cons:**
- ❌ Need to rebuild after code changes
- ❌ Takes longer to build

**Use for:** Daily use and production

---

## 🎯 Recommended Workflow

### For Testing/Development:
1. Use `RUN-DEV-VERSION.bat`
2. Keep terminal open
3. Test your changes
4. Close when done testing

### For Daily Use:
1. Build standalone version: `BUILD-STANDALONE-APP.bat`
2. Run: `build-output\win-unpacked\Ghana School Bell System.exe`
3. Minimize to tray (don't close!)
4. Bells will ring on schedule

---

## 💡 How to Keep App Running in Background

### Option 1: Minimize to Tray (Recommended)
1. Click the minimize button (-)
2. App goes to system tray
3. Bells keep ringing
4. Window is hidden but app is running

### Option 2: Close Window (App Stays in Tray)
1. Click the X button
2. App shows notification: "Running in background"
3. App stays in system tray
4. Bells keep ringing
5. Double-click tray icon to show window again

### Option 3: Create Desktop Shortcut
1. Navigate to: `build-output\win-unpacked\`
2. Right-click: `Ghana School Bell System.exe`
3. Click: "Create shortcut"
4. Drag shortcut to Desktop
5. Use this shortcut to start the app

---

## 🔍 System Tray Features

When the app is in the system tray, you can:

### Right-click the tray icon to:
- **Show App** - Bring window back
- **Hide App** - Hide window to tray
- **View Upcoming Bells** - See scheduled bells
- **Run in Background** - Toggle background mode
- **Start with Windows** - Auto-start on boot
- **Quit App** - Completely close the app

### Left-click the tray icon to:
- Toggle window visibility (show/hide)

---

## ⚙️ Settings for Background Operation

In the app settings, you can configure:

1. **Run in Background**
   - When enabled: App stays in tray when you close window
   - When disabled: App quits when you close window
   - Default: Enabled

2. **Start with Windows**
   - When enabled: App starts automatically on Windows boot
   - When disabled: You must start app manually
   - Default: Disabled

3. **Minimize to Tray**
   - When enabled: Minimize button sends app to tray
   - When disabled: Minimize button minimizes to taskbar
   - Default: Enabled

---

## 🐛 Troubleshooting

### Problem: "Bells stopped ringing"
**Check:**
1. Is the app still running? Look for tray icon
2. Did you close the terminal? (Development version only)
3. Are timetables saved? Open app and check

**Solution:**
- Use standalone version
- Keep app in system tray
- Don't close terminal if using dev version

### Problem: "Can't find tray icon"
**Solution:**
1. Click the up arrow (^) in system tray
2. Look for Ghana School Bell icon
3. Drag it to the main tray area

### Problem: "App closes when I close window"
**Solution:**
1. Open app settings
2. Enable "Run in Background"
3. Try closing window again
4. App should stay in tray

### Problem: "Need to rebuild after every change"
**Solution:**
- Use development version for testing
- Build standalone version only when ready for daily use
- Keep both versions available

---

## 📋 Quick Reference

### To Test Changes:
```
1. Run: RUN-DEV-VERSION.bat
2. Keep terminal open
3. Test in the app
4. Close terminal when done
```

### To Use Daily:
```
1. Build: BUILD-STANDALONE-APP.bat (once)
2. Run: build-output\win-unpacked\Ghana School Bell System.exe
3. Minimize to tray
4. Bells ring automatically
```

### To Check if Running:
```
1. Look for tray icon (bottom-right)
2. Or press Ctrl+Shift+Esc (Task Manager)
3. Look for "Ghana School Bell System"
```

---

## ✅ Summary

**The key difference:**
- **Development version** = Needs terminal open
- **Standalone version** = Runs independently in background

**For bells to keep ringing:**
1. Build standalone version
2. Run the .exe file
3. Minimize to tray (don't close terminal)
4. App keeps running
5. Bells ring on schedule!

**Your data is always saved** regardless of which version you use. The only difference is whether the app can run in the background.
