# Copy audio assets from repository into mobile assets folder
$dest = Join-Path $PSScriptRoot 'assets\audio'
if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }
Get-ChildItem -Path (Join-Path $PSScriptRoot '..') -Recurse -Include *.mp3,*.wav,*.ogg,*.m4a -File | ForEach-Object {
    Copy-Item $_.FullName -Destination $dest -Force
}
Write-Output "Audio assets copied to $dest"
