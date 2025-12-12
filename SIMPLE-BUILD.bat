@echo off
REM ==============================================================================
REM Ghana School Bell System - Build Electron App (SIMPLIFIED VERSION)
REM ==============================================================================
REM This script is a step-by-step build helper
REM ==============================================================================

setlocal enabledelayedexpansion

cls
echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                                                              ║
echo ║  Ghana School Bell System - Electron App Builder            ║
echo ║                                                              ║
echo ║  Status: Building...                                         ║
echo ║                                                              ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.

REM Step 1: Verify Node.js
echo [STEP 1/3] Verifying Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ✗ ERROR: Node.js not found. Install from https://nodejs.org/
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VER=%%i
echo ✓ Node.js !NODE_VER! found
echo.

REM Step 2: Check Next.js build exists
echo [STEP 2/3] Checking Next.js build...
if not exist "out" (
    echo ⚠ 'out' folder not found. Building Next.js app first...
    call npm run build
    if errorlevel 1 (
        echo ✗ ERROR: Next.js build failed
        pause
        exit /b 1
    )
    echo ✓ Next.js build completed
) else (
    echo ✓ Next.js build found
)
echo.

REM Step 3: Build Electron app
echo [STEP 3/3] Building Electron app...
echo This will create build-output folder with your .exe files...
echo.
echo Running: npm run electron:build:win
echo.

call npm run electron:build:win

if errorlevel 1 (
    echo.
    echo ✗ ERROR: Electron build failed
    echo.
    echo Try these solutions:
    echo 1. Delete node_modules and run: npm install
    echo 2. Delete build-output folder and try again
    echo 3. Check that electron-builder is installed: npm install electron-builder
    echo.
    pause
    exit /b 1
)

echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                                                              ║
echo ║              ✓ BUILD COMPLETED SUCCESSFULLY!                ║
echo ║                                                              ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.

REM Step 4: Verify build output
if exist "build-output" (
    echo [STEP 4/4] Verifying build output...
    echo.
    echo Your app location:
    echo   📁 Full Path: !CD!\build-output\
    echo.
    echo Opening build-output folder...
    echo.
    
    REM Show what's in build-output
    echo Files created:
    dir "build-output" /b | find ".exe"
    
    echo.
    echo ╔══════════════════════════════════════════════════════════════╗
    echo ║  ✓ YOUR APP IS READY!                                       ║
    echo ╠══════════════════════════════════════════════════════════════╣
    echo ║                                                              ║
    echo ║  Location: build-output folder                              ║
    echo ║  Look for: Ghana School Bell System.exe files               ║
    echo ║                                                              ║
    echo ║  Next Steps:                                                ║
    echo ║  1. Open File Explorer                                      ║
    echo ║  2. Go to: Downloads\school-bell-system\build-output\      ║
    echo ║  3. Double-click Ghana School Bell System.exe to test      ║
    echo ║  4. Share the .exe file with users                          ║
    echo ║                                                              ║
    echo ╚══════════════════════════════════════════════════════════════╝
    echo.
    
    REM Open the folder
    start explorer "!CD!\build-output"
    
) else (
    echo ✗ ERROR: build-output folder not created
    echo Check error messages above for details
    echo.
)

pause
