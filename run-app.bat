@echo off
REM Ghana School Bell System Electron Launcher
REM This script runs your app with the Electron executable

setlocal enabledelayedexpansion

REM Check if Electron is extracted in dist_manual
if exist "dist_manual\electron.exe" (
    echo Starting Ghana School Bell System...
    cd /d "%~dp0"
    start "" "dist_manual\electron.exe" "dist_manual\Ghana School Bell System"
    exit /b 0
)

REM Check if Electron is in Desktop (from download)
if exist "%USERPROFILE%\Desktop\electron-v30.5.1-win32-x64\electron.exe" (
    echo Starting Ghana School Bell System...
    cd /d "%~dp0"
    start "" "%USERPROFILE%\Desktop\electron-v30.5.1-win32-x64\electron.exe" "dist_manual\Ghana School Bell System"
    exit /b 0
)

REM If not found, show instructions
echo.
echo ERROR: Electron not found!
echo.
echo Please download Electron v30.5.1:
echo https://github.com/electron/electron/releases/download/v30.5.1/electron-v30.5.1-win32-x64.zip
echo.
echo Extract it to: dist_manual\
echo.
echo Then run this script again.
echo.
pause
exit /b 1
