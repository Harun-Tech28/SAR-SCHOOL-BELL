# PWA Icons Guide

## Current Icons

The following icon files have been generated for the SAR Educational Complex Bell System PWA:

### SVG Icons (Current)
- `icon-192x192.svg` - Standard app icon (192x192)
- `icon-512x512.svg` - Large app icon (512x512)
- `icon-maskable-192x192.svg` - Maskable icon for Android (192x192)
- `icon-maskable-512x512.svg` - Maskable icon for Android (512x512)
- `apple-icon.png` - Apple touch icon (180x180)

### Icon Design
- **Background Color:** SAR Red (#DC2626)
- **Bell Icon:** SAR Gold (#FCD34D)
- **Text:** White
- **Design:** Bell symbol with "SAR" text on larger icons

## Replacing with School Logo

To use the actual SAR Educational Complex logo:

### Option 1: PNG Icons (Recommended)

1. **Prepare your logo:**
   - Square format (same width and height)
   - Transparent or red background
   - High resolution (at least 1024x1024)

2. **Create PNG versions:**
   - Use an image editor (Photoshop, GIMP, Figma, etc.)
   - Or use online tools like:
     - https://realfavicongenerator.net/
     - https://www.pwabuilder.com/imageGenerator

3. **Generate these sizes:**
   - `icon-192x192.png` (192x192 pixels)
   - `icon-512x512.png` (512x512 pixels)
   - `icon-maskable-192x192.png` (192x192 with 10% padding)
   - `icon-maskable-512x512.png` (512x512 with 10% padding)

4. **Replace files:**
   - Delete the `.svg` versions
   - Add your `.png` files to the `public/` folder
   - Keep the same filenames

### Option 2: Convert SVG to PNG

If you want to keep the current design but need PNG:

1. **Open each SVG file** in a browser
2. **Take a screenshot** or use a converter:
   - https://cloudconvert.com/svg-to-png
   - https://svgtopng.com/
3. **Save as PNG** with the correct dimensions
4. **Replace the SVG files**

### Option 3: Use Your Own SVG

1. **Create/export your logo as SVG**
2. **Ensure it's square** (viewBox="0 0 512 512")
3. **Replace the generated SVG files**
4. **Keep the same filenames**

## Maskable Icons

Maskable icons are important for Android devices. They need:
- **Safe zone:** Keep important content in the center 80%
- **Padding:** 10% padding on all sides
- **Full bleed:** Background should extend to edges

Learn more: https://web.dev/maskable-icon/

## Testing Icons

After replacing icons:

1. **Clear browser cache**
2. **Rebuild the app:** `npm run build`
3. **Test installation** on different devices
4. **Check icon appearance** on home screen

## Icon Specifications

| Icon | Size | Purpose | Format |
|------|------|---------|--------|
| icon-192x192 | 192x192 | Standard app icon | PNG/SVG |
| icon-512x512 | 512x512 | Large app icon | PNG/SVG |
| icon-maskable-192x192 | 192x192 | Android adaptive | PNG/SVG |
| icon-maskable-512x512 | 512x512 | Android adaptive | PNG/SVG |
| apple-icon | 180x180 | iOS home screen | PNG |

## Colors Used

- **Primary Red:** #DC2626
- **Gold:** #FCD34D
- **White:** #FFFFFF

These match the SAR Educational Complex branding throughout the app.

## Need Help?

If you need assistance creating icons:
1. Provide your school logo in high resolution
2. Use online PWA icon generators
3. Hire a designer on Fiverr or Upwork
4. Use the current placeholder icons (they work fine!)

---

**Note:** The current SVG icons are functional placeholders. They will work for the PWA, but replacing them with your actual school logo will make the app look more professional and branded.
