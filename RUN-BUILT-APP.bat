@echo off
REM ==============================================================================
REM Ghana School Bell System - Run Production App
REM ==============================================================================
REM This script runs the built Electron app from the build-output directory
REM ==============================================================================

setlocal enabledelayedexpansion

echo.
echo ============================================================
echo Ghana School Bell System - Production App Launcher
echo ============================================================
echo.

REM Check if build output exists
if not exist "build-output" (
    echo ERROR: Build output not found
    echo Please run BUILD-ELECTRON-APP.bat first to create the app
    pause
    exit /b 1
)

REM Look for the executable
set FOUND_EXE=0

REM First, look for portable version
for /r "build-output" %%f in (*portable*.exe) do (
    set FOUND_EXE=1
    set APP_PATH=%%f
    goto :found_exe
)

REM If no portable, look for any installer
for /r "build-output" %%f in (*.exe) do (
    set FOUND_EXE=1
    set APP_PATH=%%f
    goto :found_exe
)

:found_exe
if %FOUND_EXE% equ 1 (
    echo Found app: %APP_PATH%
    echo.
    echo Launching application...
    echo.
    
    start "" "%APP_PATH%"
    
    echo Application started!
    echo You can close this window.
    
) else (
    echo ERROR: No executable found in build-output directory
    echo Please run BUILD-ELECTRON-APP.bat first
    pause
    exit /b 1
)

pause
