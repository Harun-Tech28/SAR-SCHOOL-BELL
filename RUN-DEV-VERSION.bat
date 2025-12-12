@echo off
echo ========================================
echo  Running Development Version (FIXED)
echo  This version has all the save fixes!
echo ========================================
echo.
echo Closing any running instances...
taskkill /F /IM "Ghana School Bell System.exe" 2>nul
taskkill /F /IM electron.exe 2>nul
timeout /t 2 /nobreak >nul
echo.
echo Building latest version...
call npm run build
echo.
echo Starting Electron app...
echo.
echo ========================================
echo  App is starting...
echo  
echo  This version includes:
echo  ✓ Immediate file system saves
echo  ✓ Success notifications
echo  ✓ Error handling
echo  ✓ Save verification
echo ========================================
echo.
start /B npm run electron
echo.
echo App started! Window should appear shortly...
echo.
pause
