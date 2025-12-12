# Ghana School Bell — Mobile (Expo)

This folder contains a scaffolded Expo-managed React Native app for the Ghana School Bell System.

Quick start (first time):

1. Install Expo CLI and EAS (recommended):

```powershell
npm install -g expo-cli eas-cli
```

2. From `mobile/` install dependencies:

```powershell
cd mobile
npm install
```

3. Copy desktop audio assets into `mobile/assets/audio/` using the included PowerShell helper:

```powershell
cd mobile
./copy-assets.ps1
```

4. Run the app in development:

```powershell
npm start
# or
npm run android
```

Building release binaries:

- Android APK (EAS cloud recommended): `npm run build:android:eas`.
- iOS IPA (requires Apple Developer account, EAS recommended): `npm run build:ios:eas`.

EAS build notes
- Create an Expo account and login with `eas login`.
- For iOS builds you'll need an Apple Developer account. EAS can manage credentials for you interactively with `eas build`.
- To perform builds locally instead of EAS cloud, follow Expo docs for `expo run:android` and `expo run:ios` (mac required for iOS).

Custom notification sounds
- The app currently schedules local notifications and uses the system default sound. To use custom bundled notification sounds you must configure native notification sound files in the Android/iOS native projects and rebuild the app (requires a managed build with custom config or a bare workflow). I can add instructions to include custom notification sounds if you want that.

Notes:
- This scaffold includes `expo-av` for audio playback and `expo-notifications` + `expo-task-manager` placeholders for background scheduling.
- Next steps: implement timetable editor UI, scheduling logic, import/export, and background alarm handling. I will implement these after you confirm to proceed.
