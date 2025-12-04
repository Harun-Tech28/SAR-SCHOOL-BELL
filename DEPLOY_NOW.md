# 🚀 Deploy to GitHub Pages NOW!

## Copy and Paste These Commands

### 1. Initialize Git (if not already done)
```bash
git init
```

### 2. Add All Files
```bash
git add .
```

### 3. Commit Your Code
```bash
git commit -m "Ready to deploy SAR Bell System"
```

### 4. Create GitHub Repository

Go to: https://github.com/new

- Repository name: `sar-bell-system` (or any name you want)
- Make it **Public** (required for free GitHub Pages)
- Click **Create repository**

### 5. Push to GitHub

**Replace `YOUR-USERNAME` with your GitHub username:**

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sar-bell-system.git
git push -u origin main
```

### 6. Enable GitHub Pages

1. Go to your repository: `https://github.com/YOUR-USERNAME/sar-bell-system`
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment" → Source: Select **GitHub Actions**
5. Done!

### 7. Configure Base Path

**IMPORTANT:** If your repo is NOT named exactly `YOUR-USERNAME.github.io`, do this:

1. Open `.github/workflows/deploy.yml` in your editor
2. Find line 38 (around there):
   ```yaml
   # NEXT_PUBLIC_BASE_PATH: /repo-name
   ```
3. Change it to (remove the `#` and use your repo name):
   ```yaml
   NEXT_PUBLIC_BASE_PATH: /sar-bell-system
   ```
4. Save, commit, and push:
   ```bash
   git add .
   git commit -m "Configure base path"
   git push
   ```

### 8. Watch Deployment

1. Go to **Actions** tab: `https://github.com/YOUR-USERNAME/sar-bell-system/actions`
2. Watch the deployment (takes 2-3 minutes)
3. When complete, your app is live!

### 9. Access Your App

Your app will be at:
```
https://YOUR-USERNAME.github.io/sar-bell-system/
```

---

## That's It! 🎉

Your SAR Educational Complex Bell System is now deployed and accessible from anywhere!

### Next Steps:

- Share the URL with your school
- Install it as a PWA on devices
- Test offline functionality
- Customize with your school logo

### To Update Later:

```bash
git add .
git commit -m "Your update message"
git push
```

GitHub will automatically redeploy!

---

**Need help?** Check `GITHUB_PAGES_DEPLOYMENT.md` for detailed instructions.
