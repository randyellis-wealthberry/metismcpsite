# Image Generation Guide for Metis Design Tools

This directory contains scripts and tools for generating OG images, Twitter cards, and favicons for the Metis website.

## Generated Files

### SVG Source Files (Already Generated)
Located in `public/`:
- `og-image.svg` (1200x630) - Open Graph image
- `twitter-image.svg` (1200x600) - Twitter card image
- `icon.svg` (512x512) - Favicon source

### PNG Files (Need to be Generated)
These need to be created from the SVG sources:

#### Social Media Images
- `og-image.png` (1200x630) - For Facebook, LinkedIn, Slack previews
- `twitter-image.png` (1200x600) - For Twitter card

#### Favicon Suite
- `icon-512.png` (512x512) - Android Chrome, PWA
- `icon-192.png` (192x192) - Android Chrome, PWA
- `apple-touch-icon.png` (180x180) - iOS home screen
- `favicon-32x32.png` (32x32) - Browser tabs (desktop)
- `favicon-16x16.png` (16x16) - Browser tabs (small)
- `favicon.ico` - Multi-resolution ICO (16x16 + 32x32)

### Manifest Files (Already Generated)
- `manifest.json` - Web app manifest
- `site.webmanifest` - Alternate manifest name

## Conversion Methods

### Method 1: Browser-based Converter (Recommended, No Installation Required)

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open in browser:
   ```
   http://localhost:3000/scripts/svg-to-png-converter.html
   ```

3. Click each download button to convert and save:
   - OG Image (1200x630)
   - Twitter Card (1200x600)
   - Icon 512x512
   - Icon 192x192
   - Apple Touch Icon (180x180)
   - Favicon 32x32
   - Favicon 16x16

4. Move downloaded files from your Downloads folder to `public/`

### Method 2: ImageMagick CLI (If Installed)

1. Install ImageMagick:
   ```bash
   brew install imagemagick
   ```

2. Run the conversion script:
   ```bash
   cd scripts
   chmod +x convert-svg-to-png.sh
   ./convert-svg-to-png.sh
   ```

3. All PNG files will be generated automatically in `public/`

### Method 3: Online Converter

1. Go to https://cloudconvert.com/svg-to-png

2. Upload each SVG file:
   - `public/og-image.svg`
   - `public/twitter-image.svg`
   - `public/icon.svg` (convert multiple times with different sizes)

3. Set output dimensions for each:
   - OG: 1200x630
   - Twitter: 1200x600
   - Icons: 512x512, 192x192, 180x180, 32x32, 16x16

4. Download and save to `public/` with correct filenames

## Design Specifications

### Visual Design
- **Background**: Dark gradient (slate-900 → indigo-900 → indigo-800)
- **Primary Color**: Indigo (#6366f1)
- **Secondary Color**: Purple (#8b5cf6)
- **Accent Color**: Green (#22c55e) for "FREE TIER" badge
- **Glowing Orbs**: Radial gradients for depth
- **Typography**: System fonts (system-ui, -apple-system)

### Content Layout
1. **Header Section**:
   - "METIS" wordmark (72px, bold, white)
   - "Design Tools for Claude" tagline (32px, indigo-200)

2. **Value Proposition**:
   - "Professional Design Systems" (48px, bold)
   - "via Model Context Protocol" (48px, bold)

3. **Six Design Tools Grid**:
   - Typography (T)
   - Color (C)
   - Depth (D)
   - Layout (L)
   - Theme (Th)
   - Accessibility (A)
   - Each with icon box and label

4. **Footer Section**:
   - "FREE TIER" badge (green)
   - "Free 50 cycles/day • Pro $5/mo" pricing
   - "metis-mcp.dev" URL

### Icon Design (Favicon)
- **Background**: Indigo-to-purple gradient
- **Icon**: Large white "M" letter
- **Details**: Two small dots (design elements)
- **Border Radius**: 64px (rounded corners)

## File Size Guidelines

Target file sizes for optimal performance:
- OG Image: < 500 KB (ideally < 300 KB)
- Twitter Card: < 500 KB (ideally < 300 KB)
- Icon 512: < 100 KB
- Icon 192: < 50 KB
- Apple Touch: < 50 KB
- Favicon 32: < 10 KB
- Favicon 16: < 5 KB
- Favicon ICO: < 20 KB

## Verification Checklist

After generating all images, verify:

- [ ] All PNG files exist in `public/` directory
- [ ] File dimensions are correct (use `file` command or image viewer)
- [ ] File sizes are optimized (< 500 KB for social, < 100 KB for icons)
- [ ] Images display correctly in browser (test locally)
- [ ] Social media preview works (use Facebook Debugger, Twitter Card Validator)
- [ ] Favicons appear in browser tabs
- [ ] Apple Touch Icon works on iOS devices
- [ ] Manifest file is valid JSON
- [ ] All paths in metadata.ts are correct

## Testing Tools

### Social Media Preview
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: Post link and check preview

### Favicon Testing
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile (iOS Safari, Android Chrome)
- Use browser DevTools to inspect loaded icons

### Manifest Validation
- Chrome DevTools → Application → Manifest
- Lighthouse PWA audit

## Metadata Configuration

All image paths are configured in `/src/app/metadata.ts`:

```typescript
export const OG_METADATA = {
  images: [
    {
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: "Metis Design Tools for Claude - Professional Design Systems",
      type: "image/png",
    },
  ],
};

export const ICONS_CONFIG = [
  { rel: "icon", url: "/favicon.ico" },
  { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
  { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
];
```

## Troubleshooting

### Issue: SVG files not loading in converter
**Solution**: Make sure dev server is running and SVG files are in `public/`

### Issue: PNG files are too large
**Solution**: Use image optimization tools:
```bash
# Install pngquant
brew install pngquant

# Optimize images
pngquant --quality=65-80 public/og-image.png
pngquant --quality=65-80 public/twitter-image.png
```

### Issue: Favicons not showing
**Solution**:
1. Clear browser cache (Cmd+Shift+R)
2. Check file paths in DevTools → Network tab
3. Verify files exist in `public/` directory

### Issue: OG image not showing on social media
**Solution**:
1. Verify image is publicly accessible
2. Use social media debugger tools to refresh cache
3. Check image dimensions and file size
4. Verify metadata in page source

## Scripts Reference

### generate-images.js
Generates SVG source files from code

### generate-og-image.html
Browser-based canvas generator with live preview

### svg-to-png-converter.html
Browser-based SVG-to-PNG converter with download buttons

### convert-svg-to-png.sh
Shell script for automated conversion using ImageMagick

### create-placeholder-pngs.js
Helper script that documents conversion requirements

## Next Steps After Generation

1. ✅ Generate all PNG files using preferred method
2. ✅ Verify file sizes and dimensions
3. ✅ Test locally in browser
4. ✅ Test social media previews
5. ✅ Commit files to repository
6. ✅ Deploy to production
7. ✅ Verify in production environment
8. ✅ Test social sharing with production URLs

## Notes

- SVG files can be kept as fallbacks
- PNG files should be optimized for web
- Favicon ICO should include multiple resolutions
- Social images should use proper aspect ratios
- All images should have descriptive alt text
- Consider adding robots.txt rules for image crawling
