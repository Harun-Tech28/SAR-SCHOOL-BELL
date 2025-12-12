@echo off
echo ========================================
echo BUILD ANDROID APK
echo Ghana School Bell System
echo ========================================
echo.

echo This script will help you build an Android APK.
echo.
echo REQUIREMENTS:
echo - Node.js installed
echo - Internet connection
echo - Expo account (free)
echo.

choice /c YN /n /m "Continue? (Y/N): "
if errorlevel 2 goto :cancel

echo.
echo ========================================
echo STEP 1: Check EAS CLI
echo ========================================
echo.

REM Check if EAS CLI is installed
where eas >nul 2>nul
if errorlevel 1 (
    echo EAS CLI not found. Installing...
    call npm install -g eas-cli
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install EAS CLI
        echo Please run manually: npm install -g eas-cli
        pause
        exit /b 1
    )
    echo ✓ EAS CLI installed
) else (
    echo ✓ EAS CLI already installed
)
echo.

echo ========================================
echo STEP 2: Login to Expo
echo ========================================
echo.

echo You need an Expo account to build.
echo If you don't have one, create at: https://expo.dev/signup
echo.

choice /c YN /n /m "Are you logged in to Expo? (Y/N): "
if errorlevel 2 (
    echo.
    echo Opening login...
    call eas login
    if errorlevel 1 (
        echo.
        echo ERROR: Login failed
        echo Please try: eas login
        pause
        exit /b 1
    )
)
echo ✓ Logged in
echo.

echo ========================================
echo STEP 3: Build APK
echo ========================================
echo.

echo Building Android APK...
echo This will take 10-15 minutes.
echo.
echo The build happens in the cloud, so you can:
echo - Close this window after build starts
echo - Check status at: https://expo.dev
echo.

choice /c YN /n /m "Start build now? (Y/N): "
if errorlevel 2 goto :cancel

echo.
echo Starting build...
echo.

call eas build --platform android --profile preview
if errorlevel 1 (
    echo.
    echo ERROR: Build failed
    echo Check the error messages above.
    echo.
    echo Common fixes:
    echo 1. Make sure you're logged in: eas login
    echo 2. Check internet connection
    echo 3. Try again
    pause
    exit /b 1
)

echo.
echo ========================================
echo BUILD STARTED!
echo ========================================
echo.
echo Your APK is being built in the cloud.
echo.
echo You will receive:
echo - Email notification when done
echo - Download link for APK
echo.
echo Check build status at: https://expo.dev
echo.
echo Once downloaded, you can:
echo 1. Transfer APK to Android device
echo 2. Install on device
echo 3. Test the app
echo.

goto :done

:cancel
echo.
echo Operation cancelled.

:done
echo.
pause
