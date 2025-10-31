# Deployment Guide

## Quick Deploy Options

### 🚀 Vercel (Recommended - 2 minutes)

1. Visit https://vercel.com
2. Sign up/login with GitHub
3. Click "Add New Project"
4. Import repository: `Ryheembon/enterprise-landing-page`
5. Settings (auto-detected):
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"
7. Done! Your site is live 🌐

### 🌐 Netlify

1. Visit https://netlify.com
2. Sign up/login with GitHub
3. "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### 📦 GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`
4. Enable GitHub Pages in repo settings (Settings → Pages)
5. Select source: `gh-pages` branch

## Post-Deployment

After deploying, update your README with the live URL!

Example:
```markdown
## 🌐 Live Demo

[View Live Site](https://your-project-name.vercel.app)
```

