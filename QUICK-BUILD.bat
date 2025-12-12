@echo off
REM Quick build - just run the npm command directly
cd /d "%~dp0"
echo Building Electron app...
echo.
npm run electron:build:win
echo.
if exist "build-output" (
    echo ✓ Build complete! Opening build-output folder...
    start explorer build-output
) else (
    echo ✗ Build failed. Check error messages above.
)
pause
