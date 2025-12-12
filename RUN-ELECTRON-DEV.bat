@echo off
REM ==============================================================================
REM Ghana School Bell System - Electron App Developer Mode
REM ==============================================================================
REM This script starts the Electron app in development mode with hot reload
REM ==============================================================================

setlocal enabledelayedexpansion

echo.
echo ============================================================
echo Ghana School Bell System - Development Mode
echo ============================================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo.
echo Starting development environment...
echo.
echo - Next.js dev server will start at http://localhost:3000
echo - Electron will launch in a few moments
echo - Changes to the code will auto-reload
echo.
echo Press Ctrl+C to stop both servers
echo.

REM Start Next.js dev server and Electron in parallel
REM Note: We'll need to start them sequentially for simplicity on Windows

REM First, start the Next.js dev server in a new terminal window
start "Ghana School Bell - Next.js Dev Server" cmd /k "npm run dev"

REM Wait a moment for the server to start
timeout /t 5 /nobreak

REM Then start Electron
echo Starting Electron app...
call npm run electron:dev

pause
