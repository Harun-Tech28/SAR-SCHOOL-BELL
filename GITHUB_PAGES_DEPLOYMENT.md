# GitHub Pages Deployment Guide

## Quick Start - Deploy in 5 Minutes!

### Step 1: Push Your Code to GitHub

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it something like `sar-bell-system`
   - Make it Public (required for free GitHub Pages)
   - Don't initialize with README (you already have one)

2. **Push your code** (run these commands in your terminal):

```bash
git init
git add .
git commit -m "Initial commit - SAR Bell System"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name.

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. That's it! GitHub will automatically deploy your app

### Step 3: Configure Base Path (If Needed)

**Option A: Deploy to `username.github.io/repo-name`** (Most Common)

1. Open `.github/workflows/deploy.yml`
2. Find this line (around line 38):
   ```yaml
   # NEXT_PUBLIC_BASE_PATH: /repo-name
   ```
3. Uncomment it and change to your repo name:
   ```yaml
   NEXT_PUBLIC_BASE_PATH: /sar-bell-system
   ```
4. Commit and push:
   ```bash
   git add .
   git commit -m "Configure base path for GitHub Pages"
   git push
   ```

**Option B: Deploy to custom domain or `username.github.io`**

No changes needed! The default configuration works.

### Step 4: Wait for Deployment

1. Go to **Actions** tab in your GitHub repository
2. Watch the deployment progress (takes 2-3 minutes)
3. Once complete, your app will be live!

### Step 5: Access Your App

Your app will be available at:
- **With repo name**: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
- **Custom domain**: `https://your-custom-domain.com/`
- **Username site**: `https://YOUR-USERNAME.github.io/`

## Custom Domain Setup (Optional)

### Add Your Own Domain

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In your GitHub repo, go to **Settings → Pages**
3. Under "Custom domain", enter your domain: `bellsystem.yourschool.com`
4. Click **Save**
5. Create a file `public/CNAME` with your domain:
   ```
   bellsystem.yourschool.com
   ```
6. In your domain registrar, add these DNS records:

**For subdomain (bellsystem.yourschool.com):**
```
Type: CNAME
Name: bellsystem
Value: YOUR-USERNAME.github.io
```

**For apex domain (yourschool.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

7. Wait 24-48 hours for DNS propagation
8. Enable HTTPS in GitHub Pages settings

## Automatic Deployment

Every time you push to the `main` branch, GitHub Actions will:
1. ✅ Install dependencies
2. ✅ Build your Next.js app
3. ✅ Deploy to GitHub Pages
4. ✅ Your site updates automatically!

## Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select branch and click **Run workflow**

## Troubleshooting

### Build Fails

**Check the Actions tab** for error messages:
1. Go to **Actions** tab
2. Click on the failed workflow
3. Click on the failed job
4. Read the error message

Common fixes:
- Make sure all dependencies are in `package.json`
- Run `npm run build` locally to test
- Check for TypeScript errors

### 404 Error on Deployment

If you see 404 errors:

1. **Check base path configuration**:
   - If deploying to `username.github.io/repo-name`, you MUST set `NEXT_PUBLIC_BASE_PATH`
   - Edit `.github/workflows/deploy.yml` and uncomment the base path line

2. **Verify GitHub Pages is enabled**:
   - Go to Settings → Pages
   - Source should be "GitHub Actions"

3. **Check deployment status**:
   - Go to Actions tab
   - Make sure deployment completed successfully

### Assets Not Loading

If CSS/JS files don't load:

1. **Set base path** in `.github/workflows/deploy.yml`:
   ```yaml
   NEXT_PUBLIC_BASE_PATH: /your-repo-name
   ```

2. **Rebuild and deploy**:
   ```bash
   git add .
   git commit -m "Fix asset paths"
   git push
   ```

### PWA Not Working

GitHub Pages serves over HTTPS by default, so PWA features should work. If not:

1. **Check service worker registration** in browser console
2. **Clear browser cache** and reload
3. **Check manifest.json** is accessible at your deployed URL

## Local Testing

Test the production build locally before deploying:

```bash
# Build the app
npm run build

# Serve the static files
npm run serve

# Open http://localhost:3000
```

## Update Your App

To update your deployed app:

```bash
# Make your changes
# Then commit and push

git add .
git commit -m "Update: describe your changes"
git push
```

GitHub Actions will automatically rebuild and deploy!

## Environment Variables

If you need environment variables:

1. Go to **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Add your secrets (e.g., API keys)
4. Reference them in `.github/workflows/deploy.yml`:
   ```yaml
   env:
     NEXT_PUBLIC_API_KEY: ${{ secrets.API_KEY }}
   ```

## Cost

**GitHub Pages is FREE** for public repositories!
- ✅ Unlimited bandwidth
- ✅ Automatic HTTPS
- ✅ Custom domains supported
- ✅ Automatic deployments

## Support

If you need help:
1. Check the **Actions** tab for build logs
2. Read error messages carefully
3. Search GitHub Issues for similar problems
4. Ask in GitHub Discussions

---

## Quick Reference

### Repository URLs
- **Code**: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`
- **Actions**: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/actions`
- **Settings**: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/settings/pages`

### Deployment Commands
```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main

# Updates
git add .
git commit -m "Your update message"
git push
```

### Local Build
```bash
npm run build    # Build for production
npm run serve    # Test locally
```

---

**Your SAR Educational Complex Bell System is ready to deploy! 🎉**
