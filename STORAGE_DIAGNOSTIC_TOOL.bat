@echo off
echo ============================================
echo STORAGE DIAGNOSTIC TOOL
echo ============================================
echo.
echo This tool will help diagnose storage issues
echo.
echo 1. Checking data directory...
set DATA_DIR=%APPDATA%\Ghana School Bell System\data
echo Data directory: %DATA_DIR%
echo.

if exist "%DATA_DIR%" (
    echo [OK] Data directory exists
    echo.
    echo 2. Listing files in data directory:
    dir "%DATA_DIR%" /b
    echo.
    echo 3. Checking file sizes:
    dir "%DATA_DIR%\*.json" 2>nul
    echo.
    echo 4. Checking file contents:
    echo.
    if exist "%DATA_DIR%\school-bell-storage.json" (
        echo === school-bell-storage.json ===
        type "%DATA_DIR%\school-bell-storage.json"
        echo.
    ) else (
        echo [WARNING] school-bell-storage.json NOT FOUND
    )
    echo.
    echo 5. Testing write permissions...
    echo test > "%DATA_DIR%\write-test.txt" 2>nul
    if exist "%DATA_DIR%\write-test.txt" (
        echo [OK] Write permissions working
        del "%DATA_DIR%\write-test.txt"
    ) else (
        echo [ERROR] Cannot write to data directory!
    )
) else (
    echo [ERROR] Data directory does not exist!
    echo Creating directory...
    mkdir "%DATA_DIR%" 2>nul
    if exist "%DATA_DIR%" (
        echo [OK] Directory created successfully
    ) else (
        echo [ERROR] Failed to create directory
    )
)

echo.
echo 6. Checking localStorage (browser storage):
echo Opening test page to check localStorage...
start "" "%~dp0TEST-STORAGE.html"

echo.
echo ============================================
echo Diagnostic complete. Press any key to exit.
pause >nul
