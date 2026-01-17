#!/bin/bash
# ================================================
# TheHGTech Image Optimizer
# Converts PNG/JPG to WebP for faster loading
# ================================================

# Configuration
QUALITY=85
SOURCE_DIR="images"
EXTENSIONS="png jpg jpeg"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp not found. Install with:"
    echo "   macOS: brew install webp"
    echo "   Ubuntu: sudo apt install webp"
    exit 1
fi

echo "🖼️  TheHGTech Image Optimizer"
echo "=============================="
echo "Source: $SOURCE_DIR"
echo "Quality: $QUALITY"
echo ""

# Count files
total=0
converted=0
skipped=0

for ext in $EXTENSIONS; do
    for file in $(find "$SOURCE_DIR" -name "*.$ext" 2>/dev/null); do
        total=$((total + 1))
        webp_file="${file%.*}.webp"
        
        if [ -f "$webp_file" ]; then
            echo "⏭️  Skipped (exists): $webp_file"
            skipped=$((skipped + 1))
        else
            echo "🔄 Converting: $file"
            cwebp -q $QUALITY "$file" -o "$webp_file" 2>/dev/null
            if [ $? -eq 0 ]; then
                converted=$((converted + 1))
                
                # Show size comparison
                orig_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
                webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
                savings=$(echo "scale=1; (1 - $webp_size / $orig_size) * 100" | bc)
                echo "   ✓ Saved ${savings}% (${orig_size} → ${webp_size} bytes)"
            else
                echo "   ✗ Failed to convert"
            fi
        fi
    done
done

echo ""
echo "=============================="
echo "📊 Summary"
echo "   Total files: $total"
echo "   Converted: $converted"
echo "   Skipped: $skipped"
echo ""
echo "✅ Done! Remember to update HTML to use .webp images."
echo "   Tip: Use <picture> element for fallback support:"
echo ""
echo '   <picture>'
echo '     <source srcset="image.webp" type="image/webp">'
echo '     <img src="image.png" alt="Description" loading="lazy">'
echo '   </picture>'
