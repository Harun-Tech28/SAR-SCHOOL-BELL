@echo off
echo ========================================
echo   BUILD ANDROID + iOS (Both Platforms)
echo ========================================
echo.
echo This will build BOTH Android APK and iOS app
echo Total build time: 25-45 minutes
echo.
echo Prerequisites:
echo - EAS account (will prompt for login)
echo - Apple Developer Account (for iOS)
echo - Internet connection
echo.
pause

cd mobile

echo.
echo Checking EAS login status...
eas whoami

if errorlevel 1 (
    echo.
    echo You need to login to EAS first...
    eas login
)

echo.
echo Starting builds for both platforms...
echo.
eas build --platform all --profile production

echo.
echo ========================================
echo Builds submitted! Check the links above to download
echo ========================================
pause
