@echo off
echo ========================================
echo  GHANA SCHOOL BELL SYSTEM
echo ========================================
echo.
echo Starting application...
echo.
cd /d "%~dp0"
start "" "dist_manual\electron.exe" "dist_manual\Ghana School Bell System"
exit
