#!/bin/bash

# SVG to PNG conversion script for Metis Design Tools
# This script converts SVG files to PNG format for OG images and favicons

PUBLIC_DIR="../public"

echo "========================================="
echo "Metis Image Conversion Script"
echo "========================================="
echo ""

# Check if we're in the scripts directory
if [ ! -d "$PUBLIC_DIR" ]; then
    echo "Error: public directory not found. Please run this script from the scripts directory."
    exit 1
fi

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check for available conversion tools
if command_exists magick; then
    CONVERTER="magick"
    echo "Using ImageMagick (magick)"
elif command_exists convert; then
    CONVERTER="convert"
    echo "Using ImageMagick (convert)"
elif command_exists inkscape; then
    CONVERTER="inkscape"
    echo "Using Inkscape"
else
    echo "Error: No conversion tool found!"
    echo ""
    echo "Please install one of the following:"
    echo "  - ImageMagick: brew install imagemagick"
    echo "  - Inkscape: brew install inkscape"
    echo ""
    echo "Alternatively, you can:"
    echo "  1. Open scripts/generate-og-image.html in a browser"
    echo "  2. Click the download buttons to save PNG files"
    echo "  3. Move the downloaded files to the public directory"
    echo ""
    exit 1
fi

echo "Converting SVG files to PNG..."
echo ""

# Convert OG Image
if [ -f "$PUBLIC_DIR/og-image.svg" ]; then
    if [ "$CONVERTER" = "inkscape" ]; then
        inkscape "$PUBLIC_DIR/og-image.svg" --export-filename="$PUBLIC_DIR/og-image.png" --export-width=1200 --export-height=630
    else
        $CONVERTER "$PUBLIC_DIR/og-image.svg" -resize 1200x630 "$PUBLIC_DIR/og-image.png"
    fi
    echo "✓ Created og-image.png (1200x630)"
fi

# Convert Twitter Image
if [ -f "$PUBLIC_DIR/twitter-image.svg" ]; then
    if [ "$CONVERTER" = "inkscape" ]; then
        inkscape "$PUBLIC_DIR/twitter-image.svg" --export-filename="$PUBLIC_DIR/twitter-image.png" --export-width=1200 --export-height=600
    else
        $CONVERTER "$PUBLIC_DIR/twitter-image.svg" -resize 1200x600 "$PUBLIC_DIR/twitter-image.png"
    fi
    echo "✓ Created twitter-image.png (1200x600)"
fi

# Convert Favicon sizes
if [ -f "$PUBLIC_DIR/icon.svg" ]; then
    if [ "$CONVERTER" = "inkscape" ]; then
        inkscape "$PUBLIC_DIR/icon.svg" --export-filename="$PUBLIC_DIR/icon-512.png" --export-width=512 --export-height=512
        inkscape "$PUBLIC_DIR/icon.svg" --export-filename="$PUBLIC_DIR/icon-192.png" --export-width=192 --export-height=192
        inkscape "$PUBLIC_DIR/icon.svg" --export-filename="$PUBLIC_DIR/apple-touch-icon.png" --export-width=180 --export-height=180
        inkscape "$PUBLIC_DIR/icon.svg" --export-filename="$PUBLIC_DIR/favicon-32x32.png" --export-width=32 --export-height=32
        inkscape "$PUBLIC_DIR/icon.svg" --export-filename="$PUBLIC_DIR/favicon-16x16.png" --export-width=16 --export-height=16
    else
        $CONVERTER "$PUBLIC_DIR/icon.svg" -resize 512x512 "$PUBLIC_DIR/icon-512.png"
        $CONVERTER "$PUBLIC_DIR/icon.svg" -resize 192x192 "$PUBLIC_DIR/icon-192.png"
        $CONVERTER "$PUBLIC_DIR/icon.svg" -resize 180x180 "$PUBLIC_DIR/apple-touch-icon.png"
        $CONVERTER "$PUBLIC_DIR/icon.svg" -resize 32x32 "$PUBLIC_DIR/favicon-32x32.png"
        $CONVERTER "$PUBLIC_DIR/icon.svg" -resize 16x16 "$PUBLIC_DIR/favicon-16x16.png"
    fi
    echo "✓ Created icon-512.png (512x512)"
    echo "✓ Created icon-192.png (192x192)"
    echo "✓ Created apple-touch-icon.png (180x180)"
    echo "✓ Created favicon-32x32.png (32x32)"
    echo "✓ Created favicon-16x16.png (16x16)"
fi

# Create multi-resolution ICO file
if [ -f "$PUBLIC_DIR/favicon-16x16.png" ] && [ -f "$PUBLIC_DIR/favicon-32x32.png" ]; then
    if command_exists magick; then
        magick "$PUBLIC_DIR/favicon-16x16.png" "$PUBLIC_DIR/favicon-32x32.png" "$PUBLIC_DIR/favicon.ico"
        echo "✓ Created favicon.ico (16x16, 32x32)"
    elif command_exists convert; then
        convert "$PUBLIC_DIR/favicon-16x16.png" "$PUBLIC_DIR/favicon-32x32.png" "$PUBLIC_DIR/favicon.ico"
        echo "✓ Created favicon.ico (16x16, 32x32)"
    else
        echo "! Warning: Could not create favicon.ico (ImageMagick required)"
    fi
fi

echo ""
echo "========================================="
echo "Conversion complete!"
echo "========================================="
echo ""
echo "File sizes:"
ls -lh "$PUBLIC_DIR"/*.png "$PUBLIC_DIR"/*.ico 2>/dev/null | awk '{print $9, $5}'
echo ""
