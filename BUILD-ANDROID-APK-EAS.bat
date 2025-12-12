@echo off
echo ========================================
echo   BUILD ANDROID APK (EAS Cloud Build)
echo ========================================
echo.
echo This will build your Android APK using EAS Build (cloud)
echo Build time: 10-20 minutes
echo.
echo Prerequisites:
echo - EAS account (will prompt for login)
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
echo Starting Android APK build...
echo.
eas build -p android --profile production

echo.
echo ========================================
echo Build submitted! Check the link above to download your APK
echo ========================================
pause
