@echo off
echo ========================================
echo  GHANA SCHOOL BELL SYSTEM
echo  ONE-TIME SETUP
echo ========================================
echo.
echo This will install the application dependencies.
echo This only needs to be done once.
echo.
pause
echo.
echo Installing dependencies...
echo This may take 5-10 minutes. Please wait...
echo.
cd /d "%~dp0"
call npm install
echo.
echo ========================================
echo  SETUP COMPLETE!
echo ========================================
echo.
echo The app is now ready to use!
echo.
echo To start the app, double-click:
echo "Start Ghana School Bell.bat"
echo.
echo Starting the app now...
echo.
pause
call npm run electron
