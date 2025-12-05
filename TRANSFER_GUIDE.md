# How to Transfer the Electron Desktop Application

## Overview

This guide explains how to transfer the Ghana School Bell System Electron desktop application to another person, whether for development, distribution, or deployment.

## Option 1: Transfer Source Code (For Developers)

### Method A: Via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   # Initialize git if not already done
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Complete Electron desktop application"
   
   # Add remote repository
   git remote add origin https://github.com/YOUR-USERNAME/ghana-school-bell.git
   
   # Push to GitHub
   git push -u origin main
   ```

2. **Share Repository:**
   - Share the GitHub repository URL with the other person
   - They can clone it:
     ```bash
     git clone https://github.com/YOUR-USERNAME/ghana-school-bell.git
     cd ghana-school-bell
     npm install
     ```

### Method B: Via ZIP File

1. **Create ZIP Archive:**
   ```bash
   # Exclude node_modules and build artifacts
   # On Windows (PowerShell):
   Compress-Archive -Path * -DestinationPath ghana-school-bell.zip -Exclude node_modules,dist-electron,out,.next
   
   # On macOS/Linux:
   zip -r ghana-school-bell.zip . -x "node_modules/*" "dist-electron/*" "out/*" ".next/*"
   ```

2. **Transfer ZIP:**
   - Send via email (if under 25MB)
   - Use cloud storage (Google Drive, Dropbox, OneDrive)
   - Use file transfer services (WeTransfer, Send)

3. **Recipient Setup:**
   ```bash
   # Extract ZIP
   # Navigate to folder
   cd ghana-school-bell
   
   # Install dependencies
   npm install
   
   # Run in development
   npm run electron:dev
   ```

### Method C: Via USB Drive

1. **Copy Project Folder:**
   - Copy entire project folder to USB drive
   - Exclude: `node_modules/`, `dist-electron/`, `out/`, `.next/`

2. **On Recipient's Computer:**
   ```bash
   # Copy from USB to computer
   # Navigate to folder
   cd ghana-school-bell
   
   # Install dependencies
   npm install
   ```

## Option 2: Transfer Built Application (For End Users)

### Step 1: Build the Installers

```bash
# Build Next.js static export
npm run export

# Build for all platforms (or specific platform)
npm run electron:build           # All platforms
npm run electron:build:win       # Windows only
npm run electron:build:mac       # macOS only
npm run electron:build:linux     # Linux only
```

### Step 2: Locate Built Files

Built installers are in `dist-electron/`:

**Windows:**
- `Ghana School Bell System Setup X.X.X.exe` (~250-400 MB)

**macOS:**
- `Ghana School Bell System-X.X.X.dmg` (~250-400 MB)
- `Ghana School Bell System-X.X.X-mac.zip` (alternative)

**Linux:**
- `Ghana School Bell System-X.X.X.AppImage` (~250-400 MB)
- `ghana-school-bell-system_X.X.X_amd64.deb` (~250-400 MB)

### Step 3: Transfer Installers

**Option A: Cloud Storage**
- Upload to Google Drive, Dropbox, or OneDrive
- Share download link with recipient
- Recipient downloads and installs

**Option B: USB Drive**
- Copy installer file to USB drive
- Give USB to recipient
- Recipient copies to their computer and runs installer

**Option C: File Transfer Service**
- Use WeTransfer (up to 2GB free)
- Use Send by Firefox (up to 2.5GB)
- Use Dropbox Transfer

**Option D: GitHub Releases**
1. Create a release on GitHub
2. Upload installers as release assets
3. Share release URL
4. Recipients download from GitHub

### Step 4: Installation Instructions

Provide recipient with `ELECTRON_INSTALLATION_GUIDE.md` which includes:
- System requirements
- Installation steps for each platform
- First-time setup
- Troubleshooting

## Option 3: Transfer via Network

### Using Local Network (Same WiFi)

1. **Start Simple HTTP Server:**
   ```bash
   # In dist-electron folder
   cd dist-electron
   npx http-server -p 8080
   ```

2. **Share Your IP Address:**
   ```bash
   # Find your IP
   # Windows:
   ipconfig
   
   # macOS/Linux:
   ifconfig
   ```

3. **Recipient Downloads:**
   - Open browser: `http://YOUR-IP:8080`
   - Download installer file

## What to Include in Transfer

### For Developers (Source Code Transfer)

**Essential Files:**
- ✅ All source code files
- ✅ `package.json` and `package-lock.json`
- ✅ Configuration files (`main.js`, `preload.js`, etc.)
- ✅ Documentation (all `.md` files)
- ✅ `electron/` directory (voice engines)
- ✅ `build/` directory (icons)

**Exclude:**
- ❌ `node_modules/` (recipient will run `npm install`)
- ❌ `dist-electron/` (recipient will build)
- ❌ `out/` (recipient will build)
- ❌ `.next/` (build artifact)

**Include Documentation:**
- `ELECTRON_SETUP.md` - Setup instructions
- `ELECTRON_PACKAGING_GUIDE.md` - How to build
- `ELECTRON_INSTALLATION_GUIDE.md` - User installation
- `README.md` - Project overview

### For End Users (Installer Transfer)

**Essential:**
- ✅ Installer file for their platform
- ✅ `ELECTRON_INSTALLATION_GUIDE.md`
- ✅ Release notes (what's new)

**Optional:**
- System requirements document
- Quick start guide
- Troubleshooting guide

## Transfer Checklist

### Before Transferring Source Code

- [ ] Commit all changes to git
- [ ] Remove sensitive data (API keys, passwords)
- [ ] Update `package.json` with correct details
- [ ] Test that `npm install` works on clean directory
- [ ] Include all documentation
- [ ] Update README with setup instructions

### Before Transferring Installers

- [ ] Test installer on clean system
- [ ] Verify all features work after installation
- [ ] Include installation guide
- [ ] Create checksums (SHA256) for verification
- [ ] Test on target platform if possible

## Recipient Setup Instructions

### For Developers

1. **Receive Files:**
   - Clone from GitHub, or
   - Extract ZIP file, or
   - Copy from USB drive

2. **Install Dependencies:**
   ```bash
   cd ghana-school-bell
   npm install
   ```

3. **Setup Voice Engines (if needed):**
   ```bash
   npm run setup-voices
   ```

4. **Run in Development:**
   ```bash
   npm run electron:dev
   ```

5. **Build for Production:**
   ```bash
   npm run export
   npm run electron:build
   ```

### For End Users

1. **Download Installer:**
   - From cloud storage link
   - From USB drive
   - From GitHub releases

2. **Run Installer:**
   - Windows: Double-click `.exe` file
   - macOS: Open `.dmg` and drag to Applications
   - Linux: Make `.AppImage` executable and run, or install `.deb`

3. **Follow Installation Guide:**
   - See `ELECTRON_INSTALLATION_GUIDE.md`

## Security Considerations

### When Transferring Source Code

- Remove any API keys or secrets
- Check `.gitignore` is properly configured
- Don't include personal data or test data
- Review all files before sharing

### When Transferring Installers

- Provide SHA256 checksums for verification
- Use secure transfer methods (HTTPS, encrypted)
- Sign installers if possible (prevents tampering)
- Scan with antivirus before sending

## Verification

### For Recipients to Verify Source Code

```bash
# Check all files are present
ls -la

# Install dependencies
npm install

# Test build
npm run export

# Test Electron
npm run electron:dev
```

### For Recipients to Verify Installers

1. **Check File Size:**
   - Should be 250-400 MB
   - Suspiciously small = incomplete download

2. **Verify Checksum (if provided):**
   ```bash
   # Windows (PowerShell):
   Get-FileHash "Ghana School Bell System Setup.exe" -Algorithm SHA256
   
   # macOS/Linux:
   shasum -a 256 "Ghana School Bell System.dmg"
   ```

3. **Scan with Antivirus:**
   - Run antivirus scan before installing

## Troubleshooting Transfer Issues

### Large File Size

**Problem:** Installer too large to email

**Solutions:**
- Use cloud storage (Google Drive, Dropbox)
- Use file transfer service (WeTransfer)
- Split into parts using file splitter
- Compress with 7-Zip (better compression)

### Slow Transfer

**Problem:** Transfer taking too long

**Solutions:**
- Use local network transfer if on same WiFi
- Use USB 3.0 drive (faster than USB 2.0)
- Compress files before transfer
- Use direct peer-to-peer transfer tools

### Recipient Can't Install Dependencies

**Problem:** `npm install` fails

**Solutions:**
- Ensure Node.js 18+ is installed
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, try again
- Check internet connection
- Try different npm registry: `npm config set registry https://registry.npmjs.org/`

### Installer Won't Run

**Problem:** Installer blocked by OS

**Solutions:**
- **Windows:** Click "More info" → "Run anyway"
- **macOS:** Right-click → Open, or disable Gatekeeper temporarily
- **Linux:** Make executable: `chmod +x *.AppImage`

## Best Practices

1. **Use Version Control:**
   - Always use Git for source code
   - Tag releases: `git tag v1.0.0`
   - Push to GitHub for easy sharing

2. **Document Everything:**
   - Include setup instructions
   - Provide troubleshooting guide
   - List system requirements

3. **Test Before Sharing:**
   - Test on clean system
   - Verify all features work
   - Check documentation is accurate

4. **Provide Support:**
   - Share contact information
   - Create FAQ document
   - Be available for questions

5. **Keep Backups:**
   - Keep copy of source code
   - Keep copy of installers
   - Document version numbers

## Quick Reference

### Transfer Source Code
```bash
# Via GitHub
git push origin main

# Via ZIP
zip -r project.zip . -x "node_modules/*" "dist-electron/*"

# Via USB
# Just copy folder (exclude node_modules)
```

### Transfer Installer
```bash
# Build first
npm run export
npm run electron:build

# Then share files from dist-electron/
```

### Recipient Setup
```bash
# For developers
npm install
npm run electron:dev

# For users
# Just run the installer
```

## Support Resources

After transfer, recipients can refer to:
- `ELECTRON_SETUP.md` - Development setup
- `ELECTRON_INSTALLATION_GUIDE.md` - User installation
- `ELECTRON_PACKAGING_GUIDE.md` - Building installers
- `README.md` - Project overview

## Contact

For questions about the transfer process:
- Check documentation first
- Review troubleshooting section
- Contact original developer

---

**Remember:** Always test the transfer process yourself before sending to ensure the recipient will have a smooth experience!
