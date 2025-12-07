# Background Audio - FIXED ✅

## What Was Fixed

The app now plays bells in the background even when closed!

## How It Works

1. **Window Open**: Audio plays through the web interface
2. **Window Closed**: Audio plays using Windows native audio player (PowerShell)

## Key Changes

- Modified `electron/audio-player.js` to detect if window is available
- If window closed, uses PowerShell command to play audio natively
- App already configured to run in background (system tray)

## To Test

1. Set a timetable with a bell in 1-2 minutes
2. Close the app window (it stays in system tray)
3. Bell will still play at scheduled time!

## System Tray

- App runs in system tray when closed
- Right-click tray icon to:
  - Show/Hide window
  - Enable "Run in Background" (default: ON)
  - Enable "Start with Windows"
  - Quit app

## Done!

Your bells will now play even when the app is closed. The app runs silently in the background.
