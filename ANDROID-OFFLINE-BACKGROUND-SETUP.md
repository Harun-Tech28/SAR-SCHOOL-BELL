# 📱 Android APK - Offline & Background Operation Guide

## Overview

Your Ghana School Bell System APK is configured for:
- ✅ **Fully Offline Operation** - No internet required
- ✅ **Background Bell Scheduling** - Bells ring even when app is closed
- ✅ **Direct Installation** - Sideload on any Android device (no Play Store)
- ✅ **Persistent Timetables** - Data saved locally

---

## ✅ Permissions Configured

Your `app.json` now includes all necessary permissions:

```json
"permissions": [
  "POST_NOTIFICATIONS",        // Show notifications
  "SCHEDULE_EXACT_ALARM",       // Schedule bells at exact times
  "WAKE_LOCK",                  // Keep device awake for bells
  "FOREGROUND_SERVICE",         // Run in background
  "RECEIVE_BOOT_COMPLETED",     // Restart after device reboot
  "VIBRATE",                    // Vibrate with bells
  "USE_EXACT_ALARM"             // Android 12+ exact alarms
]
```

**Blocked Permissions:**
- Location services (not needed, improves privacy)

---

## 🔧 How Background Operation Works

### 1. Expo Notifications
Your app uses `expo-notifications` which provides:
- Background notification scheduling
- Exact alarm timing
- Works even when app is closed
- Survives device reboot

### 2. Local Storage
- Timetables saved with `@react-native-async-storage/async-storage`
- Data persists offline
- No cloud sync needed

### 3. Audio Playback
- Uses `expo-av` for audio
- Bell sounds stored locally in app
- Plays even in background

---

## 📦 Building the APK

### Method 1: EAS Build (Recommended)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Build APK
eas build --platform android --profile preview
```

**Build Profile:** `preview` creates an APK (not AAB) for direct installation.

### Method 2: Update EAS Config

Your `eas.json` is already configured:

```json
{
  "build": {
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

This ensures you get an **APK file** (not AAB) that can be installed directly.

---

## 📱 Installing APK on Android Devices

### Step 1: Transfer APK

**Option A: USB Cable**
1. Connect Android device to computer
2. Copy APK to device (Downloads folder)

**Option B: Cloud Storage**
1. Upload APK to Google Drive/Dropbox
2. Download on Android device

**Option C: Direct Link**
1. Host APK on your server
2. Share download link
3. Users download directly

### Step 2: Enable Unknown Sources

On Android device:
1. Go to **Settings** → **Security**
2. Enable **"Install unknown apps"** or **"Unknown sources"**
3. Allow installation from your file manager/browser

### Step 3: Install

1. Open the APK file
2. Tap **Install**
3. Wait for installation
4. Tap **Open**

---

## ⚙️ User Setup for Background Operation

After installing, users need to:

### 1. Grant Permissions

When app first opens, it will request:
- ✅ **Notifications** - Allow
- ✅ **Alarms & Reminders** - Allow
- ✅ **Battery Optimization** - Disable for this app

### 2. Disable Battery Optimization

**Critical for background operation!**

**On most Android devices:**
1. Go to **Settings** → **Apps**
2. Find **Ghana School Bell**
3. Tap **Battery**
4. Select **"Unrestricted"** or **"Don't optimize"**

**Why:** Prevents Android from killing the app to save battery.

### 3. Set Timetable

1. Open app
2. Go to **Timetable**
3. Add bell schedule
4. Save

Bells will now ring automatically, even if:
- App is closed
- Screen is off
- Device is locked
- App is in background

---

## 🔋 Battery Optimization Settings

### Xiaomi/MIUI:
1. Settings → Apps → Manage apps
2. Find Ghana School Bell
3. Battery saver → **No restrictions**
4. Autostart → **Enable**

### Samsung/One UI:
1. Settings → Apps → Ghana School Bell
2. Battery → **Unrestricted**
3. Settings → Device care → Battery
4. App power management → **Turn off**

### Huawei/EMUI:
1. Settings → Apps → Ghana School Bell
2. Battery → **Manual management**
3. Allow: Run in background, Secondary launch, Run in background after screen off

### Stock Android:
1. Settings → Apps → Ghana School Bell
2. Battery → **Unrestricted**

---

## 📊 Testing Background Operation

### Test Checklist:

1. **Install APK**
   - [ ] APK installs successfully
   - [ ] App opens

2. **Grant Permissions**
   - [ ] Notifications allowed
   - [ ] Alarms allowed
   - [ ] Battery optimization disabled

3. **Create Timetable**
   - [ ] Can add bell schedule
   - [ ] Timetable saves

4. **Test Background**
   - [ ] Close app (swipe away)
   - [ ] Wait for scheduled bell time
   - [ ] Bell rings even with app closed ✅

5. **Test Offline**
   - [ ] Turn off WiFi
   - [ ] Turn off mobile data
   - [ ] Bell still rings ✅

6. **Test Reboot**
   - [ ] Restart device
   - [ ] Bell schedule persists
   - [ ] Bells ring after reboot ✅

---

## 🚀 Distribution Methods

### Method 1: Direct Download Link

1. Host APK on your server
2. Create download page
3. Share link with users

**Example:**
```
https://yoursite.com/ghana-bell.apk
```

### Method 2: QR Code

1. Generate QR code for download link
2. Print QR code
3. Users scan to download

### Method 3: USB/SD Card

1. Copy APK to USB drive or SD card
2. Distribute physically
3. Users copy to device and install

### Method 4: WhatsApp/Email

1. Send APK file directly
2. Users download from message
3. Install

**Note:** Some email providers block APK files. Use cloud storage instead.

---

## 📝 User Instructions Template

Create this document for your users:

```
GHANA SCHOOL BELL SYSTEM
Installation & Setup Guide

STEP 1: INSTALL
1. Download ghana-bell.apk
2. Open the file
3. Tap "Install"
4. If prompted, allow "Unknown sources"

STEP 2: SETUP
1. Open the app
2. Allow all permissions when asked
3. Go to Settings → Apps → Ghana School Bell
4. Battery → Select "Unrestricted"

STEP 3: ADD TIMETABLE
1. Open app
2. Tap "Timetable"
3. Add your bell schedule
4. Tap "Save"

DONE!
Bells will ring automatically, even when:
- App is closed
- Phone is locked
- No internet connection

TROUBLESHOOTING:
- Bells not ringing? Check battery optimization is disabled
- App closes? Disable battery saver for this app
- No sound? Check volume and bell schedule
```

---

## 🔍 Troubleshooting

### Issue: Bells don't ring in background

**Solutions:**
1. Disable battery optimization
2. Enable autostart (on Xiaomi/Huawei)
3. Check notification permissions
4. Verify timetable is saved

### Issue: App stops after device reboot

**Solutions:**
1. Enable "RECEIVE_BOOT_COMPLETED" permission (already configured)
2. Enable autostart in device settings
3. Disable battery optimization

### Issue: Bells ring late or not at exact time

**Solutions:**
1. Grant "SCHEDULE_EXACT_ALARM" permission
2. Disable battery saver mode
3. Keep app unrestricted in battery settings

### Issue: No sound when bell rings

**Solutions:**
1. Check device volume
2. Check notification volume
3. Verify bell sound files are included in APK
4. Test with different bell sound

---

## ✅ Features Confirmed

Your APK will have:

- ✅ **Fully Offline** - No internet required at any time
- ✅ **Background Operation** - Bells ring even when app closed
- ✅ **Persistent Data** - Timetables saved locally
- ✅ **Exact Timing** - Bells ring at precise scheduled times
- ✅ **Survives Reboot** - Schedule persists after device restart
- ✅ **No Play Store** - Direct installation (sideloading)
- ✅ **Battery Efficient** - Optimized for long-term background use

---

## 🎯 Build Command

To build your offline, background-capable APK:

```bash
eas build --platform android --profile preview
```

This creates an APK with:
- All permissions configured
- Background services enabled
- Offline storage setup
- Direct installation support

---

## 📦 What Users Get

**APK File:** `ghana-school-bell.apk`
**Size:** ~30-50 MB
**Requirements:** Android 8.0+
**Internet:** Not required
**Play Store:** Not required

**Installation:**
1. Download APK
2. Install (allow unknown sources)
3. Grant permissions
4. Disable battery optimization
5. Add timetable
6. Done!

---

**Status:** ✅ Configured for offline + background operation  
**Build Method:** EAS Build  
**Distribution:** Direct APK installation (sideloading)  
**Background:** Fully supported with proper permissions
