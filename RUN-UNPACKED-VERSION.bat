@echo off
echo ========================================
echo  Ghana School Bell System
echo  Running UNPACKED version (Most Reliable)
echo ========================================
echo.
echo Closing any running instances...
taskkill /F /IM "Ghana School Bell System.exe" 2>nul
timeout /t 2 /nobreak >nul
echo.
echo Starting app from win-unpacked folder...
echo.
cd build-output\win-unpacked
start "" "Ghana School Bell System.exe"
cd ..\..
echo.
echo ========================================
echo  App started!
echo  
echo  If you don't see the window:
echo  1. Check Task Manager (Ctrl+Shift+Esc)
echo  2. Look for "Ghana School Bell System"
echo  3. Check if Windows Defender blocked it
echo ========================================
echo.
pause
