@echo off
echo ========================================
echo Ghana School Bell - Android APK Builder
echo ========================================
echo.

REM Check if Java 17 is available
echo Checking Java version...
java -version 2>&1 | findstr /C:"17." >nul
if %errorlevel% equ 0 (
    echo ✓ Java 17 detected
    goto :build
)

java -version 2>&1 | findstr /C:"21." >nul
if %errorlevel% equ 0 (
    echo ✓ Java 21 detected
    goto :build
)

echo.
echo ✗ ERROR: Java 17 or 21 is required for Android builds
echo   Your current Java version:
java -version
echo.
echo Please install Java 17 first:
echo   See INSTALL-JAVA-17-FOR-ANDROID.md for instructions
echo.
pause
exit /b 1

:build
echo.
echo Building Android APK...
echo This may take 5-10 minutes on first build...
echo.

cd mobile\android
call gradlew.bat clean assembleDebug

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✓ BUILD SUCCESSFUL!
    echo ========================================
    echo.
    echo Your APK is ready at:
    echo mobile\android\app\build\outputs\apk\debug\app-debug.apk
    echo.
    echo You can now:
    echo 1. Copy this APK to your Android device
    echo 2. Enable "Install from Unknown Sources" in Android settings
    echo 3. Install the APK
    echo.
) else (
    echo.
    echo ========================================
    echo ✗ BUILD FAILED
    echo ========================================
    echo.
    echo Check the error messages above
    echo.
)

cd ..\..
pause
