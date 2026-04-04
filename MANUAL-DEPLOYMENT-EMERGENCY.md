# EMERGENCY MANUAL DEPLOYMENT - BYPASS DEPLOYHQ

## 🚨 IMMEDIATE STEPS TO FIX LIVE SITE

### **The Problem:**
- DeployHQ keeps deploying mismatched HTML and JavaScript files
- This causes chunk loading errors and breaks the site
- Only solution: Manual deployment to ensure file synchronization

### **MANUAL DEPLOYMENT STEPS:**

#### **Step 1: Access SiteGround File Manager**
1. Login to SiteGround cPanel
2. Go to: Files → File Manager
3. Navigate to: `public_html/`

#### **Step 2: Backup Current Site** 
1. Select ALL files in `public_html/`
2. Right-click → "Compress" 
3. Name: `backup-before-manual-fix-$(date).zip`
4. Download backup to your computer

#### **Step 3: Clear Public HTML**
1. Select ALL files in `public_html/` EXCEPT `.well-known/`
2. Delete selected files
3. This ensures no mixed files remain

#### **Step 4: Upload Fresh Build**
1. On your computer: Navigate to `out/` folder (the one we just built)
2. Select ALL contents of `out/` folder
3. Upload to SiteGround `public_html/`
4. IMPORTANT: Upload the CONTENTS, not the `out/` folder itself

#### **Step 5: Verify File Structure**
After upload, `public_html/` should contain:
```
├── index.html
├── _next/
│   ├── static/
│   │   ├── chunks/
│   │   │   ├── 49-be6daeb0bb78da27.js  ← NEW CORRECT HASH
│   │   │   └── ... (other chunks)
├── images/
├── about/
└── ... (other pages)
```

#### **Step 6: Test Live Site**
- Visit: https://yoderconstructioninc.com
- Check browser console for errors
- Test navigation and functionality

---

## ⚡ QUICK UPLOAD METHOD

### **Create Deployment Zip:**
```bash
cd /Users/pinpoint/Downloads/Cursor/YODERCONSTRUCTIONINC.COM/yoder-construction/out
zip -r ../manual-deployment.zip .
```

### **Upload to SiteGround:**
1. Clear `public_html/` (keep `.well-known/`)
2. Upload `manual-deployment.zip`
3. Extract in SiteGround File Manager
4. Delete the zip file

---

## 🔧 WHY THIS WORKS

- **Fresh build** ensures all files match
- **Manual upload** bypasses DeployHQ sync issues  
- **Complete replacement** eliminates mixed file scenarios
- **Guaranteed synchronization** between HTML and JavaScript

This manual process is what we'll automate with Vercel later!