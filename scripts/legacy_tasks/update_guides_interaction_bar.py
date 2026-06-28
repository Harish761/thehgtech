#!/usr/bin/env python3
"""
Batch update all guide pages with standardized interaction bar
"""

import re
import os

# List of guide files to update (excluding index.html and already-updated ones)
GUIDE_FILES = [
    'guides/api-security-best-practices.html',
    'guides/cisa-kev-tracker.html',
    'guides/container-security.html',
    'guides/incident-response-automation.html',
    'guides/insider-threat-detection.html',
    'guides/malware-hash-analysis.html',
    'guides/openphish-integration.html',
    'guides/ransomware-response-playbook.html',
    'guides/siem-log-analysis.html',
    'guides/threat-intelligence-feeds-comparison.html',
    'guides/threat-intelligence-soc.html',
    'guides/zero-day-detection.html',
]

# New interaction bar HTML
NEW_INTERACTION_BAR = '''        <!-- Interaction Bar -->
        <div class="interaction-bar">
            <div class="like-section">
                <button class="like-btn" id="likeBtn" onclick="toggleLike()">
                    <i class="far fa-heart"></i> <span id="likeText">Like this article</span>
                </button>
            </div>
            <div class="action-buttons">
                <div class="share-buttons">
                    <a href="#" onclick="shareTwitter(event)" class="share-btn" title="Share on Twitter" aria-label="Share on Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" onclick="shareLinkedIn(event)" class="share-btn" title="Share on LinkedIn" aria-label="Share on LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <button onclick="copyLink()" class="share-btn" title="Copy Link" aria-label="Copy Link">
                        <i class="fas fa-link"></i>
                    </button>
                </div>
                <div class="button-separator"></div>
                <button onclick="printArticle()" class="print-btn" title="Print Article" aria-label="Print Article">
                    <i class="fas fa-print"></i>
                </button>
            </div>
        </div>'''

def update_guide(filepath):
    """Update a single guide file"""
    print(f"\n📝 Processing: {filepath}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    changes = []
    
    # 1. Add interaction-bar.css link if not present
    if 'interaction-bar.css' not in content:
        # Find where to insert (after light-mode.css or font-awesome)
        if '<link rel="stylesheet" href="/light-mode.css">' in content:
            content = content.replace(
                '<link rel="stylesheet" href="/light-mode.css">',
                '<link rel="stylesheet" href="/light-mode.css">\n    <link rel="stylesheet" href="/interaction-bar.css?v=20251206">'
            )
            changes.append("✅ Added interaction-bar.css link")
        elif 'font-awesome' in content and '<link rel="stylesheet"' in content:
            # Insert after last stylesheet link in head
            pattern = r'(<link rel="stylesheet"[^>]*>)(\s*</head>)'
            replacement = r'\1\n    <link rel="stylesheet" href="/interaction-bar.css?v=20251206">\2'
            content = re.sub(pattern, replacement, content, count=1)
            changes.append("✅ Added interaction-bar.css link")
    
    # 2. Replace old interaction bar HTML with new one
    # Pattern to match existing interaction bar
    interaction_bar_pattern = r'<!-- Interaction Bar -->.*?</div>\s*</div>'
    
    if re.search(interaction_bar_pattern, content, re.DOTALL):
        # Check if it already has print button
        if 'print-btn' not in content:
            content = re.sub(
                interaction_bar_pattern,
                NEW_INTERACTION_BAR,
                content,
                flags=re.DOTALL,
                count=1
            )
            changes.append("✅ Updated interaction bar HTML (added print button)")
        else:
            changes.append("⏭️  Interaction bar already has print button")
    else:
        print("⚠️  Warning: Could not find interaction bar pattern")
    
    # 3. Replace inline JavaScript with external script
    if '<script src="/interaction-bar.js' not in content:
        # Find and remove inline interaction logic
        inline_script_pattern = r'<!-- Interaction Logic -->.*?</script>'
        if re.search(inline_script_pattern, content, re.DOTALL):
            content = re.sub(
                inline_script_pattern,
                '<!-- Interaction Bar Script -->\n    <script src="/interaction-bar.js?v=20251206"></script>',
                content,
                flags=re.DOTALL,
                count=1
            )
            changes.append("✅ Replaced inline JS with external script")
    
    # 4. Remove floating print button if exists
    floating_print_pattern = r'<!-- Print Button -->.*?</button>\s*(?=</body>|<script)'
    if re.search(floating_print_pattern, content, re.DOTALL):
        content = re.sub(floating_print_pattern, '', content, flags=re.DOTALL)
        changes.append("✅ Removed floating print button")
    
    # Write back if changes were made
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Updated {filepath}")
        for change in changes:
            print(f"   {change}")
        return True
    else:
        print(f"⏭️  No changes needed for {filepath}")
        return False

def main():
    """Main function to update all guides"""
    print("🚀 Starting batch update of guide pages...")
    print(f"📊 Total guides to process: {len(GUIDE_FILES)}\n")
    
    updated_count = 0
    skipped_count = 0
    
    for filepath in GUIDE_FILES:
        if os.path.exists(filepath):
            if update_guide(filepath):
                updated_count += 1
            else:
                skipped_count += 1
        else:
            print(f"❌ File not found: {filepath}")
    
    print(f"\n{'='*60}")
    print(f"✅ Updated: {updated_count} files")
    print(f"⏭️  Skipped: {skipped_count} files")
    print(f"📊 Total processed: {updated_count + skipped_count} files")
    print(f"{'='*60}\n")

if __name__ == '__main__':
    main()
