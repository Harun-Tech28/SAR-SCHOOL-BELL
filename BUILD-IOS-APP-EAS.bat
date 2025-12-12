@echo off
echo ========================================
echo   BUILD iOS APP (EAS Cloud Build)
echo ========================================
echo.
echo This will build your iOS app using EAS Build (cloud)
echo Build time: 15-25 minutes
echo.
echo Prerequisites:
echo - EAS account (will prompt for login)
echo - Apple Developer Account ($99/year)
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
echo Starting iOS app build...
echo.
echo NOTE: You will be prompted for Apple Developer credentials
echo.
eas build -p ios --profile production

echo.
echo ========================================
echo Build submitted! Check the link above to download your IPA
echo ========================================
pause
