# Development Workflow

## 🔄 Daily Development Cycle

### 1. Make Edits in Cursor
```bash
# Edit any file in the project
# Changes are automatically tracked
```

### 2. Test Locally (Optional)
```bash
npm run dev
# Visit http://localhost:3000 to test
```

### 3. Push to GitHub
```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

### 4. Automatic Deployment
- **DeployHQ** automatically detects the push
- **Builds** the project (`npm run build`)
- **Deploys** to SiteGround
- **Website** is live within 2-5 minutes

## ✅ Verification Checklist

After each deployment, quickly verify:
- [ ] Homepage loads with video
- [ ] Navigation works
- [ ] Images display correctly
- [ ] Mobile version looks good

## 🚨 If Something Goes Wrong

### Build Fails
1. Check DeployHQ build logs
2. Test build locally: `npm run build`
3. Fix errors and push again

### Deployment Succeeds But Site Broken
1. Check if `images/` folder exists in SiteGround `public_html/`
2. If missing, verify DeployHQ "Local Path" is set to `out/*`
3. Re-run deployment

### Emergency Manual Deploy
```bash
npm run build
# Upload contents of `out/` to SiteGround public_html/
```

## 📁 File Structure (What Gets Deployed)
```
public_html/
├── _next/           # CSS, JS assets
├── images/          # All photos, videos
├── about/           # About page
├── services/        # Service pages
├── service-areas/   # Local SEO pages
├── our-work/        # Gallery page
├── index.html       # Homepage
└── sitemap.xml      # SEO sitemap
```

---

**Perfect workflow**: Edit in Cursor → `git push` → Live website ✨