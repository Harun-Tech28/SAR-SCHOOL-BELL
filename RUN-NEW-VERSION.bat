@echo off
echo ========================================
echo  Ghana School Bell System - NEW VERSION
echo  Version 0.1.3 with Save Fix
echo ========================================
echo.
echo Closing any running instances...
taskkill /F /IM "Ghana School Bell System.exe" 2>nul
timeout /t 2 /nobreak >nul
echo.
echo Starting new version...
echo.
start "" "build-output\Ghana School Bell System 0.1.3.exe"
echo.
echo ========================================
echo  App started!
echo  Look for the green success notification
echo  when you save a timetable.
echo ========================================
echo.
pause
