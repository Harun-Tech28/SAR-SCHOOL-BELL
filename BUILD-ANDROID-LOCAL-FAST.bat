@echo off
echo ========================================
echo   FAST LOCAL ANDROID BUILD (5-10 min)
echo ========================================
echo.
echo This builds APK locally on your computer
echo Much faster than cloud build!
echo.
echo Requirements:
echo - Java JDK 17
echo - Android SDK
echo.
pause

echo.
echo Checking Java...
java -version
if errorlevel 1 (
    echo.
    echo ❌ Java not found!
    echo Please install Java 17 first.
    echo See: INSTALL-JAVA-17-FOR-ANDROID.md
    pause
    exit /b 1
)

echo.
echo ✅ Java found!
echo.
echo Starting local build...
echo This will take 5-10 minutes...
echo.

cd mobile

echo [1/3] Installing dependencies...
call npm install

echo.
echo [2/3] Generating Android project...
call npx expo prebuild --platform android --clean

echo.
echo [3/3] Building APK...
cd android
call gradlew assembleRelease

echo.
echo ========================================
echo   BUILD COMPLETE!
echo ========================================
echo.
echo Your APK is here:
echo mobile\android\app\build\outputs\apk\release\app-release.apk
echo.
pause
