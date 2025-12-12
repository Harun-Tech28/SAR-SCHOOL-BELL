# Android APK - Quick Start Guide

## 🎯 Goal
Build an installable Android APK for the Ghana School Bell app that works offline with background bell scheduling.

## 📋 Current Status
- ✅ Mobile app code ready (`mobile/` directory)
- ✅ EAS configuration complete
- ✅ Android permissions configured
- ⚠️ Build blocked by Java version issue

## 🚀 Fastest Path to APK

### Method 1: Cloud Build (No Java Install Needed) ⭐ EASIEST

```powershell
cd mobile
eas build --platform android --profile preview --wait
```

**Time**: 10-15 minutes  
**Pros**: No setup needed, professional build  
**Cons**: Requires internet, uses build minutes

If this fails, check the build logs at the URL provided and share the error.

### Method 2: Local Build (Requires Java 17)

#### Step 1: Install Java 17
Download from: https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html

Or use Chocolatey:
```powershell
choco install openjdk17
```

#### Step 2: Set Java 17 as Active
```powershell
$env:JAVA_HOME = "C:\Program Files\Java\jdk-17"
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"
java -version  # Should show 17.x.x
```

#### Step 3: Build
```powershell
# Use the automated script
.\BUILD-ANDROID-SIMPLE.bat

# Or manually:
cd mobile\android
.\gradlew.bat clean assembleDebug
```

**Time**: 5-10 minutes first build, 2-3 minutes after  
**Pros**: Fast, full control, no internet needed  
**Cons**: Requires Java 17 installation

### Method 3: Test with Expo Go (No Build Needed)

```powershell
cd mobile
npm start
```

Then scan the QR code with Expo Go app on your Android device.

**Time**: 1 minute  
**Pros**: Instant, no build  
**Cons**: Requires internet, limited background features

## 📦 Where to Find Your APK

### After Local Build:
```
mobile/android/app/build/outputs/apk/debug/app-debug.apk
```

### After EAS Build:
Download from the URL provided in the terminal, or:
```powershell
eas build:list
```

## 📱 Installing on Android Device

1. Copy the APK to your Android device
2. Open the APK file
3. If prompted, enable "Install from Unknown Sources"
4. Tap "Install"
5. Open the app and set up your bell schedule

## 🔧 Troubleshooting

### "Java version too new" error
- Install Java 17 (see Method 2 above)

### "Gradle build failed" on EAS
- Check build logs at the provided URL
- Look for specific error in "Run gradlew" phase
- Share the error for help

### App won't install on Android
- Make sure "Install from Unknown Sources" is enabled
- Check Android version (requires Android 5.0+)

### Background bells not working
- Grant notification permissions
- Disable battery optimization for the app
- Check Android settings > Apps > Ghana School Bell > Battery

## 📞 Need Help?

1. Check `ANDROID-BUILD-STATUS.md` for detailed status
2. See `INSTALL-JAVA-17-FOR-ANDROID.md` for Java setup
3. Review build logs if EAS build fails

## ✅ Recommended Next Step

**Try Method 1 (Cloud Build) first** - it's the easiest and doesn't require any local setup:

```powershell
cd mobile
eas build --platform android --profile preview
```

If that fails, we'll debug the specific error together!
