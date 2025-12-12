# ✅ Fixed: Project ID Error

## Problem

The error `Experience with id '00000000-0000-0000-0000-000000000000' does not exist` occurred because the `app.json` had a placeholder project ID.

## Solution Applied

I removed the placeholder project ID from `app.json`. Now EAS will automatically create a project for you when you run the build command.

---

## Next Steps

### Step 1: Initialize EAS Project

Run this command to create your Expo project:

```bash
eas build:configure
```

This will:
- Create a project on Expo
- Generate a real project ID
- Update your `app.json` automatically

### Step 2: Build Your APK

After configuration, run:

```bash
eas build --platform android --profile preview
```

---

## Alternative: Manual Project Creation

If you prefer to create the project manually:

1. Go to https://expo.dev
2. Sign in or create account
3. Click "Create a project"
4. Name it "Ghana School Bell"
5. Copy the project ID
6. Add it to `app.json`:

```json
"extra": {
  "eas": {
    "projectId": "your-real-project-id-here"
  }
}
```

---

## Complete Build Process

### Option 1: Automated (Recommended)

```bash
# Configure EAS (creates project)
eas build:configure

# Build APK
eas build --platform android --profile preview
```

### Option 2: Using Build Script

```bash
# Run the build script
BUILD-ANDROID-APK.bat
```

The script will handle the configuration automatically.

---

## What Happens Now

When you run `eas build:configure` or start a build:

1. **EAS creates project** - Automatically on Expo servers
2. **Generates project ID** - Real UUID assigned
3. **Updates app.json** - Project ID added automatically
4. **Ready to build** - Can now build APK

---

## Verification

After running `eas build:configure`, check `app.json`:

```json
"extra": {
  "eas": {
    "projectId": "abc12345-1234-5678-9abc-def123456789"
  }
}
```

You should see a real UUID instead of all zeros.

---

## Build Command

Once configured, build with:

```bash
eas build --platform android --profile preview
```

This will:
- Upload your code
- Build APK in cloud
- Provide download link
- Take 10-15 minutes

---

## ✅ Status

**Issue:** Fixed - Placeholder project ID removed  
**Next:** Run `eas build:configure` to create project  
**Then:** Run `eas build --platform android --profile preview`

You're ready to build! 🚀
