@echo off
echo ========================================
echo  Testing App - Will Show Any Errors
echo ========================================
echo.
echo Closing any running instances...
taskkill /F /IM "Ghana School Bell System.exe" 2>nul
timeout /t 2 /nobreak >nul
echo.
echo Starting app and capturing errors...
echo.
cd build-output\win-unpacked
echo Current directory: %CD%
echo.
echo Checking if EXE exists...
if exist "Ghana School Bell System.exe" (
    echo ✓ EXE file found!
    echo.
    echo File size:
    dir "Ghana School Bell System.exe" | find "Ghana"
    echo.
    echo Attempting to start...
    echo.
    start "" "Ghana School Bell System.exe"
    echo.
    echo Waiting 5 seconds to see if it starts...
    timeout /t 5 /nobreak >nul
    echo.
    echo Checking if process is running...
    tasklist | findstr /I "Ghana"
    if errorlevel 1 (
        echo.
        echo ❌ Process NOT running - app failed to start
        echo.
        echo Possible issues:
        echo 1. Antivirus blocked it
        echo 2. Missing dependencies
        echo 3. Corrupted files
        echo.
        echo Try running as Administrator:
        echo Right-click this batch file → Run as administrator
    ) else (
        echo.
        echo ✓ Process IS running!
        echo Check if window appeared on screen
    )
) else (
    echo ❌ EXE file NOT found!
    echo Expected location: %CD%\Ghana School Bell System.exe
)
cd ..\..
echo.
echo ========================================
pause
