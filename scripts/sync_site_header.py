#!/usr/bin/env python3
# HG-THREAT-INTEL-V1: COMPONENT | CANONICAL_SITE_HEADER_SYNC | 2026-10-18
"""
Site Header Synchronization & Validation Utility
-------------------------------------------------
Maintains site-wide navigation consistency for TheHGTech static site architecture.
Uses components/site-header.html as the single source of truth.

Usage:
  python3 scripts/sync_site_header.py --check threat-intel.html
  python3 scripts/sync_site_header.py threat-intel.html
"""

import sys
import os
import re

MARKER_START = "<!-- SITE-HEADER-START -->"
MARKER_END = "<!-- SITE-HEADER-END -->"

COMPONENT_PATH = os.path.join(os.path.dirname(__file__), "..", "components", "site-header.html")

def get_canonical_header():
    """Load canonical header component from disk"""
    if not os.path.exists(COMPONENT_PATH):
        raise FileNotFoundError(f"Canonical header component not found at {COMPONENT_PATH}")
    with open(COMPONENT_PATH, "r", encoding="utf-8") as f:
        return f.read().strip()

def extract_header_from_page(html_content):
    """Extract header block from HTML page, either via markers or tag boundaries"""
    if MARKER_START in html_content and MARKER_END in html_content:
        pattern = re.compile(rf"{re.escape(MARKER_START)}(.*?){re.escape(MARKER_END)}", re.DOTALL)
        match = pattern.search(html_content)
        if match:
            return match.group(1).strip(), match.start(), match.end()
    
    # Fallback: Find from mobile header to closing desktop header
    m_header_match = re.search(r'<header class=["\']m-header', html_content)
    if m_header_match:
        start_idx = m_header_match.start()
        # Find desktop header after start_idx
        desktop_header_match = re.search(r'<header class=["\']header["\'][^>]*>.*?</header>', html_content[start_idx:], re.DOTALL)
        if desktop_header_match:
            end_idx = start_idx + desktop_header_match.end()
            return html_content[start_idx:end_idx].strip(), start_idx, end_idx
            
    return None, -1, -1

def check_file(filepath):
    """Check if file matches canonical header component"""
    if not os.path.exists(filepath):
        print(f"✗ File not found: {filepath}")
        return False
    
    canonical = get_canonical_header()
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    current_header, _, _ = extract_header_from_page(content)
    if not current_header:
        print(f"✗ No header found in {filepath}")
        return False
        
    # Normalize whitespace for comparison
    norm_canonical = re.sub(r'\s+', ' ', canonical).strip()
    norm_current = re.sub(r'\s+', ' ', current_header).strip()
    
    if norm_canonical == norm_current:
        print(f"✓ Header in {filepath} matches canonical component")
        return True
    else:
        print(f"✗ Header in {filepath} DRIFTED from canonical component")
        return False

def sync_file(filepath):
    """Sync canonical header into file with clean markers"""
    if not os.path.exists(filepath):
        print(f"✗ File not found: {filepath}")
        return False
        
    canonical = get_canonical_header()
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    current_header, start_idx, end_idx = extract_header_from_page(content)
    if start_idx == -1 or end_idx == -1:
        print(f"✗ Unable to locate header block to replace in {filepath}")
        return False
        
    replacement = f"{MARKER_START}\n{canonical}\n{MARKER_END}"
    new_content = content[:start_idx] + replacement + content[end_idx:]
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    print(f"✓ Synchronized canonical header into {filepath}")
    return True

import glob

DEFAULT_TARGETS = ['threat-intel.html']

def main():
    is_check = "--check" in sys.argv
    raw_files = [arg for arg in sys.argv[1:] if arg != "--check"]
    
    files = []
    if raw_files:
        for arg in raw_files:
            matched = glob.glob(arg)
            if matched:
                files.extend(matched)
            else:
                files.append(arg)
    else:
        files = DEFAULT_TARGETS
        
    print(f"Targeting {len(files)} file(s): {', '.join(files)}")
    
    success = True
    for f in files:
        if is_check:
            if not check_file(f):
                success = False
        else:
            if not sync_file(f):
                success = False
                
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
