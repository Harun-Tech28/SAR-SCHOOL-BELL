# Mobile App Assets

## Current Status
The app is configured to build without custom icons or splash screens.
EAS Build will use default Expo assets during the build process.

## Optional: Add Custom Assets

If you want to add custom branding:

### 1. App Icon (icon.png)
- Size: 1024x1024 pixels
- Format: PNG with transparency
- Location: `mobile/assets/icon.png`

### 2. Adaptive Icon (Android)
- Foreground: 1024x1024 pixels
- Location: `mobile/assets/adaptive-icon.png`

### 3. Splash Screen
- Size: 1284x2778 pixels (or larger)
- Format: PNG
- Location: `mobile/assets/splash.png`

### 4. Update app.json
After adding assets, update `mobile/app.json`:

```json
{
  "expo": {
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#2E7D32"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#2E7D32"
      }
    }
  }
}
```

## Audio Files

Bell sound files should be placed in `mobile/assets/audio/`

Supported formats:
- MP3
- WAV
- M4A

Example:
- `mobile/assets/audio/bell1.mp3`
- `mobile/assets/audio/bell2.mp3`
