# Deployment Guide

## 🚀 Automated Deployment Setup

### Prerequisites
- [x] GitHub repository configured
- [x] DeployHQ account created
- [ ] SiteGround hosting credentials ready
- [ ] DeployHQ project configured

### DeployHQ Configuration

#### Configuration Summary
```
Local Build Output:  out/*
                      ↓ (DeployHQ copies)
Remote Destination:  yoderconstructioninc.com/public_html/
```

#### 1. Repository Settings
- **Repository URL**: `https://github.com/pinpointdigital/yoderconstructioninc.git`
- **Branch**: `main`
- **Build Commands**: 
  ```bash
  npm install
  npm run build
  cd out
  find . -name ".*" -not -name ".well-known" -delete
  ```
- **Output Directory**: `.` (current directory, since we cd into out/)

#### 2. Server Settings (SiteGround)
- **Protocol**: SFTP (recommended) or FTP
- **Host**: `gtxml251.siteground.biz` ✅
- **Username**: `pinpoint@yoderconstructioninc.com` ✅
- **Password**: `[your-siteground-password]` ✅
- **Port**: `22` (SFTP recommended) or `21` (FTP - current)
- **Remote Path**: `yoderconstructioninc.com/public_html` ✅

#### 3. Deploy Settings  
- **Local Path (Source)**: `.` (current directory - build commands cd into out/)
- **Remote Path (Destination)**: `yoderconstructioninc.com/public_html/` ✅ 
- **Subdirectory to deploy from**: **LEAVE EMPTY** ⚠️ 
- **Deployment Method**: Sync/Mirror (recommended)
- **Excluded Files**: 
  - `.DS_Store`
  - `*.log` 
  - `node_modules/`

### Deployment Process

1. **Make Changes** - Edit files locally
2. **Test Locally** - Run `npm run dev` to test
3. **Build Test** - Run `npm run build` to verify build works
4. **Commit Changes** - `git add . && git commit -m "Your message"`
5. **Push to GitHub** - `git push origin main`
6. **Automatic Deploy** - DeployHQ builds and deploys automatically

### Testing Your Deployment

#### Test URLs (after deployment)
- **Homepage**: `https://yourdomain.com`
- **About**: `https://yourdomain.com/about/`
- **Services**: `https://yourdomain.com/services/custom-decks/`
- **Carlsbad Local SEO**: `https://yourdomain.com/service-areas/carlsbad/`
- **Contact Form**: `https://yourdomain.com/request-consultation/`

#### Verification Checklist
- [ ] Homepage video plays automatically
- [ ] Navigation menus work correctly
- [ ] Contact form submits successfully
- [ ] All images load properly
- [ ] Mobile responsiveness works
- [ ] Carlsbad local SEO page displays
- [ ] Sitemap accessible at `/sitemap.xml`

### Troubleshooting

#### Build Fails
- Check Node.js version (should be 18.x or 20.x)
- Verify all dependencies install correctly
- Review build logs in DeployHQ

#### Deployment Fails  
- Verify SiteGround credentials
- Check file permissions
- Ensure `/public_html/` directory exists

#### Site Not Loading
- Clear browser cache
- Check SiteGround file manager for deployed files
- Verify domain DNS settings

#### Images Missing / Site Unstyled
- **Cause**: DeployHQ `Local Path` set to `out/` instead of `out/*`
- **Fix**: Change DeployHQ Local Path to `out/*` in deploy settings
- **Verify**: Check `public_html/images/` folder exists on SiteGround
- **Manual Fix**: Upload `out/images/` folder manually via SiteGround File Manager

### Manual Deployment (Backup Method)

If automated deployment fails:
1. Run `npm run build` locally
2. Upload contents of `out/` folder to SiteGround `/public_html/`
3. Test the site

---

**Need Help?** Check DeployHQ documentation or contact support.