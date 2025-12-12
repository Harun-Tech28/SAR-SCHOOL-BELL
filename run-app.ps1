# Ghana School Bell System Electron Launcher (PowerShell)
# This script runs your app with the Electron executable

$appPath = "$PSScriptRoot\dist_manual\Ghana School Bell System"
$electronPath = "$PSScriptRoot\dist_manual\electron.exe"
$desktopElectron = "$env:USERPROFILE\Desktop\electron-v30.5.1-win32-x64\electron.exe"

if (Test-Path $electronPath) {
    Write-Host "Starting Ghana School Bell System..." -ForegroundColor Green
    & $electronPath $appPath
    exit 0
}

if (Test-Path $desktopElectron) {
    Write-Host "Starting Ghana School Bell System..." -ForegroundColor Green
    & $desktopElectron $appPath
    exit 0
}

Write-Host "ERROR: Electron not found!" -ForegroundColor Red
Write-Host ""
Write-Host "Please download Electron v30.5.1:" -ForegroundColor Yellow
Write-Host "https://github.com/electron/electron/releases/download/v30.5.1/electron-v30.5.1-win32-x64.zip"
Write-Host ""
Write-Host "Extract it to: dist_manual\" -ForegroundColor Yellow
Write-Host ""
Write-Host "Then run this script again." -ForegroundColor Yellow
exit 1
