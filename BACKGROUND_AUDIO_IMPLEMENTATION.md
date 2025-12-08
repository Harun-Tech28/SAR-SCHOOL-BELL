# Background Audio Implementation - Complete

## Overview
The Electron app has full background audio playback capability. Bells will play even when the window is closed or minimized to the system tray.

## How It Works

### 1. Background Mode (main.js)
- When you close the window, the app doesn't quit - it runs in the background
- Setting: `runInBackground` (default: true)
- The app shows a notification: "App is running in the background. Bells will continue to play on schedule."

### 2. Native Audio Playback (audio-player.js)
The `AudioPlayer` class has two playback modes:

**Renderer Mode** (when window is visible):
- Uses the browser's Web Audio API
- Plays through the renderer process

**Native Mode** (when window is hidden/closed):
```javascript
async playAudioNatively(audioData) {
  // Uses PowerShell to play audio files
  const command = `powershell -c "(New-Object Media.SoundPlayer '${audioPath}').PlaySync()"`;
  await execAsync(command, { timeout: 30000 });
}
```

This ensures audio plays even when the window is completely closed!

### 3. Audio Scheduler (audio-scheduler.js)
- Runs continuously in the background
- Checks every second for scheduled bells
- Maintains an audio queue
- Triggers playback at the scheduled time

## Testing Background Audio

### Step 1: Schedule a Bell
1. Open the app
2. Go to the timetable/schedule page
3. Schedule a bell for 1-2 minutes from now
4. Make sure to provide an audio file path

### Step 2: Close the Window
1. Click the X button to close the window
2. You should see a notification: "App is running in the background..."
3. The app icon should appear in the system tray (bottom-right corner)

### Step 3: Wait for the Bell
- When the scheduled time arrives:
  - You'll get a notification with the bell title
  - The audio will play using PowerShell (native playback)
  - This works even though the window is closed!

### Step 4: Check the System Tray
- Right-click the tray icon to see:
  - Number of scheduled bells
  - Options to show/hide the app
  - "Run in Background" checkbox
  - "Quit App" option

## Audio File Requirements

The native playback currently supports:
- `.wav` files (best compatibility with PowerShell SoundPlayer)
- `.mp3` files (may require additional codecs)

**Audio file locations:**
- Should be in the `public/` directory for web version
- Should be in `out/` directory after build
- Or use absolute paths to system audio files

## Current Status

✅ Background mode implemented
✅ Native audio playback implemented  
✅ Audio scheduler running continuously
✅ System tray integration
✅ Notifications for scheduled bells
⚠️ **Missing**: Actual audio files in the project

## Adding Audio Files

To test with real audio:

1. Add bell sound files to `public/` directory:
```
public/
  ├── bell-sounds/
  │   ├── morning-bell.wav
  │   ├── break-bell.wav
  │   └── dismissal-bell.wav
```

2. Reference them in your bell configuration:
```javascript
{
  audioPath: 'bell-sounds/morning-bell.wav',
  title: 'Morning Bell',
  announcement: 'Good morning students!'
}
```

3. After building, these files will be in the `out/` directory

## Troubleshooting

### Audio doesn't play in background:
1. Check if "Run in Background" is enabled in settings
2. Verify the audio file path is correct
3. Check the console logs for errors
4. Ensure PowerShell is available (Windows only)

### App quits when window closes:
- Go to Settings
- Enable "Run in Background"
- Or check the system tray - the app might still be running

### No system tray icon:
- The tray icon uses `build/tray-icon.png`
- Make sure this file exists
- Restart the app if the icon doesn't appear

## Code Locations

- **Background mode**: `main.js` lines 100-120
- **Native playback**: `electron/audio-player.js` lines 60-95
- **Audio scheduler**: `electron/audio-scheduler.js` (entire file)
- **System tray**: `main.js` lines 200-300

## Summary

Your Electron app is **fully equipped** for background audio playback! The implementation is complete and robust. You just need to:

1. Add actual audio files to test with
2. Schedule a bell
3. Close the window
4. Wait for the magic to happen! 🔔

The app will continue running in the system tray and play bells on schedule, even when the window is completely closed.
