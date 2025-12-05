# Netlify Deployment Guide for Ghana School Bell System

This guide will help you deploy your School Bell System to Netlify.

## Prerequisites

- A Netlify account (free tier works perfectly)
- Your GitHub repository: `https://github.com/Harun-Tech28/SAR-SCHOOL-BELL`
- Git installed and repository pushed to GitHub ✅ (Already done!)

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Go to Netlify**
   - Visit: https://app.netlify.com/
   - Sign up or log in (you can use your GitHub account)

2. **Import Your Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select your repository: `Harun-Tech28/SAR-SCHOOL-BELL`

3. **Configure Build Settings**
   Netlify should auto-detect these settings from `netlify.toml`, but verify:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
   - **Branch to deploy:** `main`

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your site (takes 2-5 minutes)
   - You'll get a random URL like: `https://random-name-123456.netlify.app`

5. **Custom Domain (Optional)**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Follow instructions to add your own domain

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Follow the prompts:
# - Create & configure a new site
# - Choose your team
# - Site name: (choose a unique name)
# - Build command: npm run build
# - Publish directory: out

# Deploy
netlify deploy --prod
```

## Configuration Files Created

### 1. `netlify.toml`
This file configures:
- Build command and output directory
- SPA routing redirects
- Security headers
- Caching strategies for optimal performance
- Service Worker configuration

### 2. `next.config.mjs` (Updated)
- Removed GitHub Pages basePath
- Configured for Netlify deployment at root domain

## Environment Variables (If Needed)

If your app uses API keys (for AI voice services), add them in Netlify:

1. Go to "Site settings" → "Environment variables"
2. Add your variables:
   - `NEXT_PUBLIC_OPENAI_API_KEY`
   - `NEXT_PUBLIC_ELEVENLABS_API_KEY`
   - `NEXT_PUBLIC_AZURE_API_KEY`
   - etc.

## Post-Deployment Checklist

After deployment, verify:

- ✅ Site loads correctly
- ✅ Navigation works (all pages accessible)
- ✅ PWA features work (install prompt, offline mode)
- ✅ Audio playback works
- ✅ Timetable creation and editing works
- ✅ Settings persist (localStorage)
- ✅ Service Worker registers correctly

## Continuous Deployment

Netlify automatically redeploys when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Your changes"
git push origin main

# Netlify will automatically rebuild and deploy!
```

## Troubleshooting

### Build Fails

**Check build logs in Netlify dashboard:**
- Look for TypeScript errors
- Check for missing dependencies
- Verify Node.js version (Netlify uses Node 18 by default)

**To specify Node version, add to `package.json`:**
```json
"engines": {
  "node": "18.x"
}
```

### 404 Errors on Page Refresh

This should be handled by the redirect rule in `netlify.toml`. If issues persist:
- Verify `netlify.toml` is in the root directory
- Check Netlify dashboard → "Redirects" to confirm rules are active

### Service Worker Issues

- Clear browser cache
- Check browser console for errors
- Verify `/sw.js` is accessible at your domain

### PWA Not Installing

- Ensure HTTPS is enabled (Netlify provides this automatically)
- Check manifest.json is accessible
- Verify all required PWA assets are present

## Performance Optimization

Netlify automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Asset optimization
- ✅ Brotli compression
- ✅ HTTP/2 support

## Monitoring

View deployment status and analytics:
- **Deploys:** See build history and logs
- **Analytics:** Track visitors (requires paid plan)
- **Functions:** Monitor serverless function usage (if added later)

## Custom Domain Setup

### Using Netlify DNS (Recommended)

1. In Netlify: "Domain settings" → "Add custom domain"
2. Enter your domain (e.g., `schoolbell.com`)
3. Follow instructions to update nameservers at your domain registrar
4. Netlify will automatically provision SSL certificate

### Using External DNS

1. Add custom domain in Netlify
2. Add DNS records at your registrar:
   - **A Record:** Point to Netlify's load balancer IP
   - **CNAME:** Point `www` to your Netlify URL

## Cost

- **Free tier includes:**
  - 100 GB bandwidth/month
  - 300 build minutes/month
  - Automatic HTTPS
  - Continuous deployment
  - Perfect for this project!

## Support

- **Netlify Docs:** https://docs.netlify.com/
- **Netlify Community:** https://answers.netlify.com/
- **Status Page:** https://www.netlifystatus.com/

## Next Steps

1. Deploy to Netlify using Option 1 above
2. Test all features on the live site
3. Share your live URL!
4. (Optional) Set up custom domain
5. (Optional) Enable Netlify Analytics

---

**Your site will be live at:** `https://your-site-name.netlify.app`

Enjoy your deployed School Bell System! 🔔
