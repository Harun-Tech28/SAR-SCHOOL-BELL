@echo off
echo ========================================
echo   MOBILE BUILD READINESS CHECK
echo ========================================
echo.

cd mobile

echo [1/7] Checking Node.js...
node --version
if errorlevel 1 (
    echo ❌ Node.js not found!
    pause
    exit /b 1
)
echo ✅ Node.js installed
echo.

echo [2/7] Checking npm...
npm --version
if errorlevel 1 (
    echo ❌ npm not found!
    pause
    exit /b 1
)
echo ✅ npm installed
echo.

echo [3/7] Checking EAS CLI...
eas --version
if errorlevel 1 (
    echo ❌ EAS CLI not found!
    echo Install with: npm install -g eas-cli
    pause
    exit /b 1
)
echo ✅ EAS CLI installed
echo.

echo [4/7] Checking EAS login...
eas whoami
if errorlevel 1 (
    echo ❌ Not logged into EAS!
    echo Run: eas login
    pause
    exit /b 1
)
echo ✅ Logged into EAS
echo.

echo [5/7] Checking babel.config.js...
if exist "babel.config.js" (
    echo ✅ babel.config.js exists
) else (
    echo ❌ babel.config.js missing!
    pause
    exit /b 1
)
echo.

echo [6/7] Checking package.json...
if exist "package.json" (
    echo ✅ package.json exists
) else (
    echo ❌ package.json missing!
    pause
    exit /b 1
)
echo.

echo [7/7] Checking app.json...
if exist "app.json" (
    echo ✅ app.json exists
) else (
    echo ❌ app.json missing!
    pause
    exit /b 1
)
echo.

echo ========================================
echo   ✅ ALL CHECKS PASSED!
echo ========================================
echo.
echo Your mobile app is ready to build!
echo.
echo To build Android APK:
echo   eas build -p android --profile production
echo.
echo Or double-click: BUILD-ANDROID-APK-EAS.bat
echo.
pause
