# 📱 Build Android APK Guide

## Overview

Your Ghana School Bell System has an Expo/React Native mobile app ready to build for Android!

**App Details:**
- Name: Ghana School Bell
- Package: com.ghanaschoolbell.app
- Version: 1.0.0
- Framework: Expo + React Native

---

## 🚀 Quick Build Options

### Option 1: EAS Build (Recommended - Cloud Build)

This is the easiest method - Expo builds the APK in the cloud.

#### Step 1: Install EAS CLI
```bash
npm install -g eas-cli
```

#### Step 2: Login to Expo
```bash
eas login
```

If you don't have an Expo account, create one at: https://expo.dev/signup

#### Step 3: Configure EAS
```bash
eas build:configure
```

This creates `eas.json` configuration file.

#### Step 4: Build APK
```bash
eas build --platform android --profile preview
```

This builds an APK (not AAB) that you can install directly on Android devices.

#### Step 5: Download APK
Once the build completes, EAS will provide a download link. Download the APK and you're done!

---

### Option 2: Local Build (Requires Android Studio)

Build the APK locally on your computer.

#### Prerequisites:
- Android Studio installed
- Android SDK configured
- Java JDK 17 installed

#### Step 1: Install Dependencies
```bash
npm install
```

#### Step 2: Build for Android
```bash
npx expo prebuild --platform android
```

This generates native Android code.

#### Step 3: Build APK
```bash
cd android
./gradlew assembleRelease
```

#### Step 4: Find Your APK
The APK will be at:
```
android/app/build/outputs/apk/release/app-release.apk
```

---

### Option 3: Expo Go (Testing Only)

For quick testing without building an APK:

#### Step 1: Install Expo Go
Install "Expo Go" app from Google Play Store on your Android device.

#### Step 2: Start Development Server
```bash
npm start
```

#### Step 3: Scan QR Code
Scan the QR code with Expo Go app to test your app.

**Note:** This is for testing only, not for distribution.

---

## 📋 Recommended: EAS Build Setup

Let me create the EAS configuration for you:

### eas.json Configuration:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "aab"
      }
    }
  }
}
```

**Build Profiles:**
- `development`: For development builds with Expo Go
- `preview`: Builds APK for testing (what you want!)
- `production`: Builds AAB for Google Play Store

---

## 🎯 Step-by-Step: Build Your First APK

### Using EAS Build (Easiest):

1. **Install EAS CLI:**
   ```bash
   npm install -g eas-cli
   ```

2. **Login:**
   ```bash
   eas login
   ```
   
   Create account if needed: https://expo.dev/signup

3. **Build APK:**
   ```bash
   eas build --platform android --profile preview
   ```

4. **Wait for Build:**
   - Build happens in the cloud
   - Takes 5-15 minutes
   - You'll get a link when done

5. **Download APK:**
   - Click the link EAS provides
   - Download the APK file
   - Transfer to Android device
   - Install and test!

---

## 📦 What Gets Built

Your APK will include:
- ✅ Full Ghana School Bell System app
- ✅ Bell scheduling functionality
- ✅ Timetable management
- ✅ Notifications support
- ✅ Audio playback
- ✅ Offline capability
- ✅ All your React Native components

**APK Size:** Approximately 30-50 MB

---

## 🔧 Troubleshooting

### Issue: "eas: command not found"
**Solution:**
```bash
npm install -g eas-cli
```

### Issue: "Not logged in"
**Solution:**
```bash
eas login
```

### Issue: "Project ID not configured"
**Solution:**
Update `app.json`:
```json
"extra": {
  "eas": {
    "projectId": "your-project-id-here"
  }
}
```

Get project ID from: https://expo.dev

### Issue: Build fails
**Solution:**
- Check `package.json` dependencies are installed
- Run `npm install`
- Try again

---

## 📱 Installing APK on Android Device

### Method 1: Direct Transfer

1. Connect Android device to computer via USB
2. Copy APK to device
3. On device, open Files app
4. Find the APK file
5. Tap to install
6. Allow "Install from unknown sources" if prompted

### Method 2: Cloud Link

1. Upload APK to Google Drive or Dropbox
2. Share link with yourself
3. Open link on Android device
4. Download and install

### Method 3: QR Code

1. Upload APK to cloud storage
2. Generate QR code for download link
3. Scan QR code with Android device
4. Download and install

---

## ✅ Testing Checklist

After installing APK, test:

- [ ] App opens successfully
- [ ] Can create timetable
- [ ] Can save timetable
- [ ] Notifications work
- [ ] Bell sounds play
- [ ] App runs in background
- [ ] Data persists after closing app
- [ ] All screens accessible

---

## 🚀 Next Steps

### For Testing:
```bash
eas build --platform android --profile preview
```

### For Production (Google Play):
```bash
eas build --platform android --profile production
```

This creates an AAB (Android App Bundle) for Play Store submission.

---

## 💡 Pro Tips

**Faster Builds:**
- Use `--profile preview` for APK (faster)
- Use `--profile production` only for Play Store

**Version Management:**
- Update version in `app.json` before each build
- Keep track of build numbers

**Testing:**
- Test on multiple Android devices if possible
- Test different Android versions (8.0+)

**Distribution:**
- APK: Direct installation (testing)
- AAB: Google Play Store (production)

---

## 📧 Sharing APK with Client

### Option 1: Google Drive
1. Upload APK to Google Drive
2. Set sharing to "Anyone with link"
3. Send link to client

### Option 2: Dropbox
1. Upload APK to Dropbox
2. Get shareable link
3. Send to client

### Option 3: USB Transfer
1. Copy APK to USB drive
2. Give USB to client
3. Client copies to Android device

---

## 🎉 Ready to Build!

**Recommended command:**
```bash
eas build --platform android --profile preview
```

This will:
1. Build your app in the cloud
2. Create an APK file
3. Provide download link
4. Take about 10-15 minutes

**No Android Studio required!** ✨

---

**Status:** Ready to build Android APK  
**Method:** EAS Build (cloud-based)  
**Output:** APK file for direct installation  
**Time:** ~10-15 minutes
