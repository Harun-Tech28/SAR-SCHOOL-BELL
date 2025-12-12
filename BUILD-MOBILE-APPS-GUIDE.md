# 📱 Build Android APK & iOS App - Complete Guide

## 🎯 Quick Overview

This guide will help you build:
- **Android APK** - Installable on any Android device
- **iOS IPA** - For iPhone/iPad (requires Apple Developer account)

---

## 📋 Prerequisites

### For Android Build:
✅ EAS CLI installed (already done)
✅ Expo account (free)
✅ Internet connection

### For iOS Build:
✅ All Android prerequisites
✅ Apple Developer Account ($99/year)
✅ Mac computer (for local builds) OR use EAS Build (cloud)

---

## 🚀 Method 1: EAS Build (Recommended - Cloud Build)

### Step 1: Login to EAS
```bash
eas login
```
Enter your Expo account credentials.

### Step 2: Build Android APK
```bash
cd mobile
eas build -p android --profile production
```

**What happens:**
- Build runs in the cloud (no local setup needed)
- Takes 10-20 minutes
- You'll get a download link when complete
- APK can be installed on any Android device

### Step 3: Build iOS App
```bash
cd mobile
eas build -p ios --profile production
```

**What you need:**
- Apple Developer account credentials
- EAS will guide you through certificate setup
- Takes 15-25 minutes
- You'll get an IPA file

---

## 🔧 Method 2: Local Android Build (No Cloud)

### Requirements:
- Java JDK 17 (see INSTALL-JAVA-17-FOR-ANDROID.md)
- Android SDK
- Gradle

### Build Commands:
```bash
cd mobile

# Debug APK (for testing)
npm run build:android:debug:local

# Release APK (for distribution)
npm run build:android:local
```

**Output Location:**
```
mobile/android/app/build/outputs/apk/release/app-release.apk
```

---

## 📦 Build Profiles Explained

### Development Profile
```bash
eas build -p android --profile development
```
- Internal testing only
- Includes debugging tools
- Larger file size

### Preview Profile
```bash
eas build -p android --profile preview
```
- Internal distribution
- Smaller than development
- Good for beta testing

### Production Profile
```bash
eas build -p android --profile production
```
- Final release version
- Optimized and minified
- Ready for app stores

---

## 🎯 Quick Build Commands

### Android APK (Production)
```bash
cd mobile
eas build -p android --profile production
```

### iOS IPA (Production)
```bash
cd mobile
eas build -p ios --profile production
```

### Both Platforms at Once
```bash
cd mobile
eas build --platform all --profile production
```

---

## 📱 After Build Completes

### Android APK:
1. Download the APK from the link provided
2. Transfer to Android device
3. Enable "Install from Unknown Sources"
4. Tap APK to install
5. Done! ✅

### iOS IPA:
1. Download the IPA file
2. Use TestFlight for distribution, OR
3. Use Apple Configurator for direct install, OR
4. Submit to App Store

---

## 🔍 Check Build Status

```bash
eas build:list
```

View all your builds and their status.

---

## 🐛 Troubleshooting

### Build Failed?
```bash
# Check build logs
eas build:view [BUILD_ID]

# Clear cache and retry
eas build -p android --profile production --clear-cache
```

### Android Build Issues:
- Ensure Java 17 is installed
- Check android/gradle.properties
- Verify package name is unique

### iOS Build Issues:
- Verify Apple Developer account is active
- Check bundle identifier is unique
- Ensure certificates are valid

---

## 📊 Build Configuration Files

- `mobile/eas.json` - EAS build settings
- `mobile/app.json` - App configuration
- `mobile/package.json` - Dependencies and scripts

---

## 🎉 Success Checklist

- [ ] EAS CLI installed and logged in
- [ ] Build command executed
- [ ] Build completed successfully
- [ ] APK/IPA downloaded
- [ ] App installed and tested on device
- [ ] All features working correctly

---

## 💡 Pro Tips

1. **First Build?** Use preview profile to test faster
2. **Multiple Builds?** Use `--auto-submit` flag
3. **Save Time:** Build overnight for large apps
4. **Testing:** Use development builds for debugging
5. **Production:** Always test preview before production

---

## 🔗 Useful Links

- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [Android Build Guide](https://docs.expo.dev/build-reference/apk/)
- [iOS Build Guide](https://docs.expo.dev/build-reference/ios-builds/)
- [Expo Forums](https://forums.expo.dev/)

---

## 📞 Need Help?

Check these files in your project:
- `ANDROID-QUICK-START-GUIDE.md`
- `ANDROID-APK-COMPLETE-SUMMARY.md`
- `BUILD-ANDROID-APK-GUIDE.md`

---

**Ready to build? Run this now:**

```bash
cd mobile
eas build -p android --profile production
```

Good luck! 🚀
