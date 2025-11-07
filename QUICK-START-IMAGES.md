# Quick Start: Generate PNG Images

## 🚀 Fast Track (5 Minutes)

### Step 1: Start Dev Server
```bash
npm run dev
```

### Step 2: Open Converter
Open in your browser:
```
http://localhost:3000/scripts/svg-to-png-converter.html
```

### Step 3: Download All Images
Click these buttons in order:
1. Download OG Image (1200×630)
2. Download Twitter Card (1200×600)
3. Download Icon 512×512
4. Download Icon 192×192
5. Download Apple Touch Icon (180×180)
6. Download Favicon 32×32
7. Download Favicon 16×16

### Step 4: Move Files to Public
From Terminal:
```bash
mv ~/Downloads/*.png public/
```

Or manually drag files from Downloads to `public/` folder.

### Step 5: Verify
```bash
ls -lh public/*.png
```

You should see 7 PNG files.

### Step 6: Test Locally
1. Refresh your browser at http://localhost:3000
2. Check browser tab for favicon
3. View page source and look for `og:image` meta tags

### Step 7: Commit & Deploy
```bash
git add public/*.png public/*.json public/site.webmanifest src/app/layout.tsx
git commit -m "Add OG images, Twitter cards, and favicon suite for SEO optimization"
git push
```

## ✅ Done!

Your site now has:
- Professional OG images for social sharing
- Twitter card optimization
- Complete favicon suite (all sizes)
- PWA manifest files
- Apple Touch Icon for iOS

## 📊 Test Your Images

### Social Media Previews
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: Share your URL and check preview

### Browser Testing
- Open your site in Chrome, Firefox, Safari
- Check browser tab for favicon
- Check mobile (iOS Safari, Android Chrome)

## 🎨 Visual Design

Your images feature:
- **METIS** wordmark with "Design Tools for Claude" tagline
- Dark gradient background (slate → indigo → purple)
- Six design tool icons: Typography, Color, Depth, Layout, Theme, A11y
- "FREE TIER" badge with pricing
- Professional, modern aesthetic

## 📝 Files Generated

### SVG Sources (Already Created)
- `public/og-image.svg` (8 KB)
- `public/twitter-image.svg` (8 KB)
- `public/icon.svg` (4 KB)

### PNG Targets (You Generate These)
- `public/og-image.png` (~250 KB)
- `public/twitter-image.png` (~240 KB)
- `public/icon-512.png` (~80 KB)
- `public/icon-192.png` (~35 KB)
- `public/apple-touch-icon.png` (~30 KB)
- `public/favicon-32x32.png` (~8 KB)
- `public/favicon-16x16.png` (~3 KB)

### Manifests (Already Created)
- `public/manifest.json` (4 KB)
- `public/site.webmanifest` (4 KB)

## ❓ Troubleshooting

**Q: Converter page not loading?**
- Make sure dev server is running: `npm run dev`
- Check URL: `http://localhost:3000/scripts/svg-to-png-converter.html`

**Q: Download not working?**
- Try different browser (Chrome recommended)
- Check browser console for errors
- Disable browser extensions that block downloads

**Q: Files too large?**
- They'll be automatically optimized by the converter
- If needed, use pngquant: `brew install pngquant && pngquant *.png`

**Q: Need help?**
- See full guide: `scripts/README-IMAGE-GENERATION.md`
- See summary: `SEO-IMAGES-SUMMARY.md`

## 🎯 Success Criteria

After completing these steps, verify:
- ✅ 7 PNG files in `public/` directory
- ✅ Favicon appears in browser tab
- ✅ Social media preview shows your OG image
- ✅ No 404 errors in DevTools Network tab
- ✅ Lighthouse SEO score improved

---

**Total time**: ~5 minutes | **Difficulty**: Easy | **Tools needed**: Web browser
