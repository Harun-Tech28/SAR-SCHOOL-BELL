# Push to GitHub - Copy These Commands

## Your Repository
```
https://github.com/Harun-Tech28/SAR-BELL-SYSTEM.git
```

## Commands to Run

### 1. Initialize Git (if not done)
```bash
git init
```

### 2. Add All Files
```bash
git add .
```

### 3. Commit
```bash
git commit -m "Deploy SAR Bell System to GitHub Pages"
```

### 4. Set Main Branch
```bash
git branch -M main
```

### 5. Add Remote (if not done)
```bash
git remote add origin https://github.com/Harun-Tech28/SAR-BELL-SYSTEM.git
```

### 6. Push to GitHub
```bash
git push -u origin main
```

---

## After Pushing

### Enable GitHub Pages:

1. Go to: https://github.com/Harun-Tech28/SAR-BELL-SYSTEM/settings/pages

2. Under "Build and deployment":
   - **Source**: Select **GitHub Actions**

3. Click **Save**

### Watch Deployment:

1. Go to: https://github.com/Harun-Tech28/SAR-BELL-SYSTEM/actions

2. Wait 2-3 minutes for deployment to complete

### Access Your App:

Your app will be live at:
```
https://harun-tech28.github.io/SAR-BELL-SYSTEM/
```

---

## If You Get Errors

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Harun-Tech28/SAR-BELL-SYSTEM.git
git push -u origin main
```

### Error: "failed to push some refs"
```bash
git pull origin main --rebase
git push -u origin main
```

### Error: "Permission denied"
Make sure you're logged into GitHub:
```bash
git config --global user.name "Harun-Tech28"
git config --global user.email "your-email@example.com"
```

---

## ✅ That's It!

Once pushed, GitHub Actions will automatically:
1. Build your app
2. Deploy to GitHub Pages
3. Make it live at: https://harun-tech28.github.io/SAR-BELL-SYSTEM/

**The base path is already configured for your repository!**
