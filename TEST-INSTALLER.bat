@echo off
echo ========================================
echo GHANA SCHOOL BELL SYSTEM
echo Installer Test Tool
echo ========================================
echo.

REM Check if installer exists
if not exist "installer-final\Ghana School Bell System Setup 0.1.3.exe" (
    echo ERROR: Installer not found!
    echo Expected location: installer-final\Ghana School Bell System Setup 0.1.3.exe
    echo.
    pause
    exit /b 1
)

echo Installer found!
echo Location: installer-final\Ghana School Bell System Setup 0.1.3.exe
echo.

REM Get file size
for %%A in ("installer-final\Ghana School Bell System Setup 0.1.3.exe") do (
    set size=%%~zA
)
echo Size: %size% bytes (approximately 91.5 MB)
echo.

echo ========================================
echo WHAT WOULD YOU LIKE TO DO?
echo ========================================
echo.
echo 1. Run the installer (test installation)
echo 2. Open installer folder in Explorer
echo 3. Check if app is already installed
echo 4. Open installation guide
echo 5. Exit
echo.

choice /c 12345 /n /m "Enter your choice (1-5): "

if errorlevel 5 goto :end
if errorlevel 4 goto :guide
if errorlevel 3 goto :check
if errorlevel 2 goto :explorer
if errorlevel 1 goto :install

:install
echo.
echo ========================================
echo RUNNING INSTALLER...
echo ========================================
echo.
echo The installer will open in a new window.
echo Follow the installation wizard.
echo.
echo NOTE: Windows may show a security warning.
echo If so, click "More info" then "Run anyway"
echo.
pause
start "" "installer-final\Ghana School Bell System Setup 0.1.3.exe"
echo.
echo Installer launched!
echo.
pause
goto :end

:explorer
echo.
echo Opening installer folder...
explorer "installer-final"
goto :end

:check
echo.
echo ========================================
echo CHECKING FOR INSTALLED APP...
echo ========================================
echo.

REM Check Program Files
if exist "C:\Program Files\Ghana School Bell System\Ghana School Bell System.exe" (
    echo [FOUND] App is installed in Program Files
    echo Location: C:\Program Files\Ghana School Bell System\
    echo.
    
    REM Check user data
    if exist "%APPDATA%\ghana-school-bell-system" (
        echo [FOUND] User data folder exists
        echo Location: %APPDATA%\ghana-school-bell-system\
        echo.
        
        if exist "%APPDATA%\ghana-school-bell-system\timetables.json" (
            echo [FOUND] Timetables file exists
        ) else (
            echo [NOT FOUND] No timetables saved yet
        )
    ) else (
        echo [NOT FOUND] User data folder not created yet
    )
) else (
    echo [NOT FOUND] App is not installed
    echo.
    echo To install, choose option 1 from the menu
)
echo.
pause
goto :end

:guide
echo.
echo Opening installation guide...
if exist "INSTALLER_WORKING_GUIDE.md" (
    start "" "INSTALLER_WORKING_GUIDE.md"
) else (
    echo ERROR: Guide not found!
    echo Expected: INSTALLER_WORKING_GUIDE.md
)
goto :end

:end
echo.
echo ========================================
echo Done!
echo ========================================
