# 📱 Mobile Build Commands Reference

## Quick Command Reference

### 🔐 Login to EAS
```bash
eas login
```

### 📱 Android Builds

#### Production APK (Recommended)
```bash
cd mobile
eas build -p android --profile production
```

#### Preview APK (Testing)
```bash
cd mobile
eas build -p android --profile preview
```

#### Development APK (Debug)
```bash
cd mobile
eas build -p android --profile development
```

### 🍎 iOS Builds

#### Production IPA
```bash
cd mobile
eas build -p ios --profile production
```

#### Preview IPA (Testing)
```bash
cd mobile
eas build -p ios --profile preview
```

### 🚀 Build Both Platforms
```bash
cd mobile
eas build --platform all --profile production
```

---

## 📊 Build Management

### Check Build Status
```bash
eas build:list
```

### View Specific Build
```bash
eas build:view [BUILD_ID]
```

### Cancel Build
```bash
eas build:cancel [BUILD_ID]
```

---

## 🔧 Advanced Options

### Clear Cache Before Build
```bash
eas build -p android --profile production --clear-cache
```

### Non-Interactive Build
```bash
eas build -p android --profile production --non-interactive
```

### Auto-Submit to Store
```bash
eas build -p android --profile production --auto-submit
```

---

## 🏗️ Local Android Build

### Prerequisites
- Java JDK 17
- Android SDK
- Gradle

### Build Debug APK
```bash
cd mobile
npm run build:android:debug:local
```

### Build Release APK
```bash
cd mobile
npm run build:android:local
```

### Clean Build
```bash
cd mobile
npm run clean:android
```

---

## 📦 Output Locations

### EAS Build (Cloud)
- Download link provided in terminal
- Also available at: https://expo.dev/accounts/[your-account]/projects/ghana-school-bell/builds

### Local Build
```
mobile/android/app/build/outputs/apk/release/app-release.apk
mobile/android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 🐛 Troubleshooting Commands

### Check EAS Account
```bash
eas whoami
```

### Logout and Re-login
```bash
eas logout
eas login
```

### Update EAS CLI
```bash
npm install -g eas-cli
```

### Check Project Configuration
```bash
cd mobile
eas build:configure
```

---

## 📱 Testing Commands

### Run on Android Device
```bash
cd mobile
npm run android
```

### Run on iOS Device
```bash
cd mobile
npm run ios
```

### Start Development Server
```bash
cd mobile
npm start
```

---

## 🔍 Diagnostic Commands

### Check Dependencies
```bash
cd mobile
npm list
```

### Verify Expo Configuration
```bash
cd mobile
expo doctor
```

### Check Android Setup
```bash
cd mobile
npx expo prebuild --platform android --clean
```

---

## 💾 Submission Commands

### Submit to Google Play
```bash
cd mobile
eas submit -p android
```

### Submit to App Store
```bash
cd mobile
eas submit -p ios
```

---

## 🎯 Common Workflows

### First Time Build
```bash
# 1. Login
eas login

# 2. Build Android
cd mobile
eas build -p android --profile production

# 3. Wait for completion and download APK
```

### Update Existing App
```bash
# 1. Update version in app.json
# 2. Build new version
cd mobile
eas build -p android --profile production

# 3. Download and distribute
```

### Test Before Production
```bash
# 1. Build preview version
cd mobile
eas build -p android --profile preview

# 2. Test on devices
# 3. If good, build production
eas build -p android --profile production
```

---

## 📝 Configuration Files

### Update Build Settings
Edit: `mobile/eas.json`

### Update App Configuration
Edit: `mobile/app.json`

### Update Dependencies
Edit: `mobile/package.json`

---

## 🔗 Useful Links

- EAS Build Docs: https://docs.expo.dev/build/introduction/
- EAS Dashboard: https://expo.dev/accounts/[your-account]/projects
- Build Status: https://expo.dev/accounts/[your-account]/projects/ghana-school-bell/builds

---

## 💡 Pro Tips

1. **Save Time**: Use `--profile preview` for testing
2. **Parallel Builds**: Build both platforms simultaneously
3. **Cache**: Don't use `--clear-cache` unless necessary
4. **Monitoring**: Keep terminal open to see progress
5. **Download**: Builds are available for 30 days

---

**Most Common Command:**
```bash
cd mobile && eas build -p android --profile production
```

That's the one you'll use most! 🚀
