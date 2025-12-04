# SAR Educational Complex Bell System - Deployment Guide

## 📦 Building for Production

### 1. Build the Application

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### 2. Test Locally

```bash
npm run serve
```

Or use any static file server:

```bash
npx serve out
```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`

3. **Deploy**
   - Click "Deploy site"
   - Your app will be live at `https://your-site.netlify.app`

### Option 2: Vercel

1. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your repository

2. **Configure**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`

3. **Deploy**
   - Click "Deploy"
   - Live at `https://your-project.vercel.app`

### Option 3: GitHub Pages

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Configure Base Path** (if using a project page)
   Update `next.config.mjs`:
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name',
     assetPrefix: '/your-repo-name',
     // ... rest of config
   }
   ```

3. **Deploy**
   ```bash
   # Install gh-pages
   npm install -D gh-pages
   
   # Deploy
   npx gh-pages -d out
   ```

### Option 4: Self-Hosted (Nginx)

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Copy Files to Server**
   ```bash
   scp -r out/* user@your-server:/var/www/sar-bell-system/
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/sar-bell-system;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # Service worker should not be cached
       location = /sw.js {
           add_header Cache-Control "no-cache";
           expires 0;
       }

       # Manifest should not be cached
       location = /manifest.json {
           add_header Cache-Control "no-cache";
           expires 0;
       }
   }
   ```

4. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

### Option 5: Offline Distribution Package

For schools without internet access:

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Create Distribution Package**
   ```bash
   # Create a zip file
   cd out
   zip -r ../sar-bell-system-offline.zip .
   cd ..
   ```

3. **Distribute**
   - Share the zip file via USB drive or local network
   - Users extract and open `index.html` in a browser
   - Or run a local server:
     ```bash
     # On the user's computer
     npx serve sar-bell-system-offline
     ```

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```env
# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# Optional: Custom domain
NEXT_PUBLIC_DOMAIN=https://your-domain.com
```

### Custom Branding

1. **Replace Logo**
   - Add your school logo as `public/sar-logo.png`
   - Update `public/manifest.json` with your school name

2. **Update Colors**
   - Edit `app/globals.css` to change theme colors
   - Update `public/manifest.json` theme colors

3. **Update Icons**
   - Replace icon files in `public/` directory
   - Or use the icon generator: `node scripts/generate-icons.js`

## 📱 PWA Features

### Installation

Users can install the app:
- **Desktop**: Click install button or browser install icon
- **Android**: Tap "Add to Home Screen" from browser menu
- **iOS**: Tap Share → "Add to Home Screen"

### Offline Functionality

The app works completely offline:
- ✅ All UI components
- ✅ Timetable management
- ✅ Bell sounds
- ✅ Voice announcements (browser TTS)
- ✅ Student management
- ✅ Settings

### Storage

Data is stored locally:
- **IndexedDB**: Timetables, students, announcements
- **LocalStorage**: Settings, preferences
- **Cache Storage**: Static assets, audio files

## 🔄 Updates

### Automatic Updates

The service worker automatically checks for updates:
- Checks every hour when online
- Downloads updates in background
- Notifies user when update is ready
- User can refresh to apply update

### Manual Update

To force an update:
1. Clear browser cache
2. Unregister service worker (DevTools → Application → Service Workers)
3. Refresh the page

### Version Management

Update version in:
- `package.json` → `version`
- `public/sw.js` → `CACHE_VERSION`
- `public/manifest.json` → `version` (optional)

## 🧪 Testing

### Test PWA Features

1. **Lighthouse Audit**
   ```bash
   # Install Lighthouse
   npm install -g lighthouse
   
   # Run audit
   lighthouse http://localhost:3000 --view
   ```
   Target score: 100 for PWA

2. **Test Offline**
   - Open DevTools → Network
   - Select "Offline"
   - Navigate the app
   - All features should work

3. **Test Installation**
   - Desktop: Look for install icon in address bar
   - Mobile: Check "Add to Home Screen" option
   - Verify app opens in standalone mode

### Browser Testing

Test on:
- ✅ Chrome (Desktop & Mobile)
- ✅ Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (iOS & macOS)
- ✅ Samsung Internet

## 📊 Monitoring

### Check PWA Status

In browser DevTools:
- **Application** → Service Workers (check status)
- **Application** → Cache Storage (check cached files)
- **Application** → IndexedDB (check stored data)
- **Application** → Manifest (verify manifest)

### Storage Usage

Check storage in Settings panel:
- Shows cache size
- Shows storage quota
- Allows clearing cache

## 🐛 Troubleshooting

### Service Worker Not Registering

1. Check HTTPS (required for PWA)
2. Check browser console for errors
3. Verify `sw.js` is accessible
4. Clear browser cache and retry

### App Not Installing

1. Check manifest.json is valid
2. Verify icons are accessible
3. Ensure HTTPS is enabled
4. Check browser compatibility

### Offline Features Not Working

1. Verify service worker is active
2. Check cache storage in DevTools
3. Ensure IndexedDB is enabled
4. Clear and re-cache assets

### Updates Not Applying

1. Close all app tabs
2. Unregister old service worker
3. Clear cache
4. Refresh page

## 📝 Deployment Checklist

Before deploying:

- [ ] Update version numbers
- [ ] Replace placeholder logo with school logo
- [ ] Update school name in manifest
- [ ] Test on multiple browsers
- [ ] Test offline functionality
- [ ] Run Lighthouse audit (target: 100)
- [ ] Test installation on mobile
- [ ] Verify all bell sounds work
- [ ] Test timetable persistence
- [ ] Check storage limits
- [ ] Review security headers
- [ ] Set up analytics (optional)
- [ ] Create backup of data
- [ ] Document admin credentials
- [ ] Train staff on usage

## 🎯 Post-Deployment

### User Training

Provide users with:
1. Installation instructions
2. Offline usage guide
3. Troubleshooting tips
4. Contact for support

### Maintenance

Regular tasks:
- Monitor storage usage
- Check for browser updates
- Update app version
- Backup user data
- Review error logs

## 📞 Support

For issues or questions:
- Check documentation in `/docs`
- Review troubleshooting guides
- Check browser console for errors
- Test in incognito mode

---

**Your SAR Educational Complex Bell System is now ready for deployment!** 🎉

The app is fully offline-capable, installable, and works on all devices.
