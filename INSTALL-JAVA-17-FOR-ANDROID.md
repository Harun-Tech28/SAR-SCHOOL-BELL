# Install Java 17 for Android Build

## Problem
Your system has Java 24, which is too new for Android/Gradle builds. You need Java 17 or Java 21.

## Solution: Install Java 17

### Option 1: Download from Oracle (Recommended)
1. Go to: https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
2. Download "Windows x64 Installer" for Java 17
3. Run the installer
4. After installation, set JAVA_HOME:

```powershell
# Set JAVA_HOME for current session
$env:JAVA_HOME = "C:\Program Files\Java\jdk-17"
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"

# Verify
java -version
```

### Option 2: Use Chocolatey (if installed)
```powershell
choco install openjdk17
```

### Option 3: Use Scoop (if installed)
```powershell
scoop install openjdk17
```

## After Installing Java 17

### Build the APK locally:
```powershell
cd mobile/android
./gradlew clean assembleDebug
```

The APK will be at:
```
mobile/android/app/build/outputs/apk/debug/app-debug.apk
```

### Or use EAS Build (cloud build - no Java needed):
```powershell
cd mobile
eas build --platform android --profile preview
```

## Quick Test
After installing Java 17, verify:
```powershell
java -version
# Should show: java version "17.x.x"
```

Then try the build again!
