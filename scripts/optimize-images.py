#!/usr/bin/env python3
"""
Image Optimization Script
Converts images to WebP format for 50-80% size reduction.
Requires: pip install Pillow
"""

import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    os.system("pip3 install Pillow")
    from PIL import Image

IMAGES_DIR = "/Volumes/Data-Personal/Webpage/thehgtech/images"
QUALITY = 85  # WebP quality (80-90 is good balance)
MAX_WIDTH = 1200  # Max width for article images

def convert_to_webp(input_path, output_path, quality=85, max_width=None):
    """Convert image to WebP format"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for PNG with transparency)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGBA')
            else:
                img = img.convert('RGB')
            
            # Resize if too large
            if max_width and img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.LANCZOS)
            
            # Save as WebP
            img.save(output_path, 'WEBP', quality=quality, method=6)
            return True
    except Exception as e:
        print(f"Error converting {input_path}: {e}")
        return False

def process_directory(directory):
    """Process all images in directory"""
    total_original = 0
    total_webp = 0
    converted = 0
    
    for root, dirs, files in os.walk(directory):
        for filename in files:
            ext = filename.lower().split('.')[-1]
            if ext in ('jpg', 'jpeg', 'png'):
                input_path = os.path.join(root, filename)
                output_path = os.path.splitext(input_path)[0] + '.webp'
                
                # Skip if WebP already exists and is newer
                if os.path.exists(output_path):
                    if os.path.getmtime(output_path) > os.path.getmtime(input_path):
                        continue
                
                original_size = os.path.getsize(input_path)
                
                if convert_to_webp(input_path, output_path, QUALITY, MAX_WIDTH):
                    webp_size = os.path.getsize(output_path)
                    savings = (1 - webp_size / original_size) * 100
                    
                    print(f"✅ {filename}: {original_size//1024}KB → {webp_size//1024}KB ({savings:.0f}% saved)")
                    
                    total_original += original_size
                    total_webp += webp_size
                    converted += 1
    
    if converted > 0:
        print(f"\n{'='*50}")
        print(f"Converted: {converted} images")
        print(f"Original: {total_original//1024//1024}MB → WebP: {total_webp//1024//1024}MB")
        print(f"Saved: {(total_original - total_webp)//1024//1024}MB ({(1-total_webp/total_original)*100:.0f}%)")
    else:
        print("No images to convert")

if __name__ == "__main__":
    directory = sys.argv[1] if len(sys.argv) > 1 else IMAGES_DIR
    print(f"Converting images in: {directory}")
    print("="*50)
    process_directory(directory)
