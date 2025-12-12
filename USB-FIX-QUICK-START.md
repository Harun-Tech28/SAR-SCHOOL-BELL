# Quick Fix: App Won't Open on Different Computer

## The Problem
When you copy the `build-output` folder to USB and run it on another computer, it crashes or won't open.

## The Reason
- Missing or improperly packaged dependencies
- Paths are broken when moved
- Data folder permissions issue

## The Solution (3 Steps)

### Step 1: Build Properly
Run this file:
```
PREPARE-FOR-USB.bat
```

This creates a complete, standalone app in the `build-output` folder.

### Step 2: Copy to USB
1. Connect USB drive to this computer
2. Copy the entire **build-output** folder to USB
3. Important: Copy the WHOLE folder, not just the .exe

### Step 3: Run on Another Computer
On the other computer:
1. Plug in USB
2. Open the `build-output` folder
3. Double-click: **Ghana School Bell.exe**
4. Done! ✅

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "File not found" | Copy the ENTIRE build-output folder, not just .exe |
| "App won't start" | Make sure other computer has Windows 10+ |
| "Can't save settings" | USB might be write-protected, try different USB |
| "Missing files" | Rebuild: `PREPARE-FOR-USB.bat` |

## Quick Start

```powershell
# This command does everything:
.\PREPARE-FOR-USB.bat

# Then copy build-output to USB
# Then run Ghana School Bell.exe on another computer
```

## What You Get

A standalone executable that:
- ✅ Doesn't need to be installed
- ✅ Works on any USB drive
- ✅ Runs on any Windows 10+ computer
- ✅ Can save timetables and settings
- ✅ Plays school bells on schedule

## Need More Help?

See: **USB-SETUP-GUIDE.md** for detailed instructions
