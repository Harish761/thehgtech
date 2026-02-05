#!/usr/bin/env python3
"""
CSS & JS Minification Script
Minifies CSS and JS files to reduce file sizes.
Uses Python's built-in capabilities for basic minification.
"""

import os
import re
import glob

def minify_css(content):
    """Basic CSS minification"""
    # Remove comments
    content = re.sub(r'/\*[\s\S]*?\*/', '', content)
    # Remove extra whitespace
    content = re.sub(r'\s+', ' ', content)
    # Remove spaces around certain characters
    content = re.sub(r'\s*([{}:;,>+~])\s*', r'\1', content)
    # Remove trailing semicolons before }
    content = re.sub(r';}', '}', content)
    return content.strip()

def minify_js(content):
    """Basic JS minification (preserves functionality)"""
    lines = content.split('\n')
    result = []
    for line in lines:
        # Remove single-line comments (but not URLs or regex)
        line = re.sub(r'(?<!:)//(?!["\']).*$', '', line)
        # Remove leading/trailing whitespace
        line = line.strip()
        if line:
            result.append(line)
    return ' '.join(result)

def process_file(filepath, minify_func, suffix='.min'):
    """Process a single file"""
    base, ext = os.path.splitext(filepath)
    
    # Skip already minified files
    if '.min' in filepath:
        return None
    
    output_path = f"{base}.min{ext}"
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_size = len(content)
    minified = minify_func(content)
    minified_size = len(minified)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(minified)
    
    savings = original_size - minified_size
    percent = (savings / original_size * 100) if original_size > 0 else 0
    
    return {
        'input': filepath,
        'output': output_path,
        'original': original_size,
        'minified': minified_size,
        'savings': savings,
        'percent': percent
    }

def main():
    print("=" * 60)
    print("CSS & JS Minification")
    print("=" * 60)
    
    # CSS files to minify
    css_files = [
        'design-system.css',
        'rotating-text.css',
        'cve-display.css',
        'ransomware-display.css',
        'article-links-fix.css',
        'header-dropdown.css',
        'news-timeline.css',
        'quick-wins.css',
        'm-core.css',
        'm-layout.css',
        'm-components.css',
    ]
    
    # JS files to minify
    js_files = [
        'content.js',
        'news-timeline.js',
        'article-loader.js',
        'article-modal.js',
        'interaction-bar.js',
        'visual-enhancements.js',
        'rotating-text.js',
        'cve-display.js',
        'm-app.js',
    ]
    
    total_savings = 0
    
    print("\n📄 CSS Files:")
    for filename in css_files:
        filepath = f"/Volumes/Data-Personal/Webpage/thehgtech/{filename}"
        if os.path.exists(filepath):
            result = process_file(filepath, minify_css)
            if result:
                print(f"  ✅ {filename}: {result['original']:,} → {result['minified']:,} bytes ({result['percent']:.1f}% saved)")
                total_savings += result['savings']
        else:
            print(f"  ❌ {filename}: Not found")
    
    print("\n📜 JS Files:")
    for filename in js_files:
        filepath = f"/Volumes/Data-Personal/Webpage/thehgtech/{filename}"
        if os.path.exists(filepath):
            result = process_file(filepath, minify_js)
            if result:
                print(f"  ✅ {filename}: {result['original']:,} → {result['minified']:,} bytes ({result['percent']:.1f}% saved)")
                total_savings += result['savings']
        else:
            print(f"  ❌ {filename}: Not found")
    
    print("\n" + "=" * 60)
    print(f"Total savings: {total_savings:,} bytes ({total_savings/1024:.1f} KiB)")
    print("=" * 60)

if __name__ == "__main__":
    main()
