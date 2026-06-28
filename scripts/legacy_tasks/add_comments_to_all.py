#!/usr/bin/env python3
"""
Bulk-inject the interaction bar (and GraphComment comment section) into all
articles and guides that are missing it.

The interaction-bar.min.js script automatically:
1. Transforms the Like button → "Join Discussion" button
2. Injects the GraphComment widget below the interaction bar
3. Injects the newsletter form

So all we need to ensure is that every page has:
- <div class="interaction-bar"> ... </div>
- <script src="/interaction-bar.min.js"> tag

Run from the repo root:
    python3 add_comments_to_all.py
"""

import os
import re
from pathlib import Path

INTERACTION_BAR_HTML = '''
    <div class="interaction-bar">
        <div class="like-section">
            <button class="like-btn" id="likeBtn" onclick="toggleLike()">
                <i class="far fa-heart"></i> <span id="likeText">Like this article</span>
            </button>
        </div>
        <div class="action-buttons">
            <div class="share-buttons">
                <a href="#" onclick="shareTwitter(event)" class="share-btn" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" onclick="shareLinkedIn(event)" class="share-btn" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <button onclick="copyLink()" class="share-btn" title="Copy Link"><i class="fas fa-link"></i></button>
            </div>
            <div class="button-separator"></div>
            <button onclick="window.print()" class="print-btn" title="Print Article"><i class="fas fa-print"></i></button>
        </div>
    </div>'''

SCRIPT_TAG = '    <script src="/interaction-bar.min.js"></script>'

# Directories to process
DIRS = ['articles', 'guides']

# Files to skip (index files, etc.)
SKIP_FILES = {'index.html'}


def has_interaction_bar(content: str) -> bool:
    return 'interaction-bar' in content and 'interaction-bar.min.js' in content


def has_interaction_bar_html(content: str) -> bool:
    return 'class="interaction-bar"' in content


def has_interaction_bar_script(content: str) -> bool:
    # Check for the actual script tag, not just a CSS reference like interaction-bar.css
    return bool(re.search(r'<script[^>]+interaction-bar[^>]*>', content))


def inject_interaction_bar(filepath: Path) -> bool:
    """
    Inject the interaction bar HTML before </article> or before </main>,
    and add the script tag before </body>.
    Returns True if file was modified.
    """
    content = filepath.read_text(encoding='utf-8')

    # Skip if already has both components
    if has_interaction_bar_html(content) and has_interaction_bar_script(content):
        return False

    modified = False

    # --- Inject the HTML block ---
    if not has_interaction_bar_html(content):
        # Try to insert before </article>, then before </main>, then before </footer>
        inserted = False
        for marker in ['</article>', '</main>', '</footer>']:
            if marker in content:
                content = content.replace(marker, INTERACTION_BAR_HTML + '\n' + marker, 1)
                inserted = True
                modified = True
                break
        if not inserted:
            # Fallback: insert before </body>
            if '</body>' in content:
                content = content.replace('</body>', INTERACTION_BAR_HTML + '\n</body>', 1)
                modified = True

    # --- Inject the script tag ---
    if not has_interaction_bar_script(content):
        if '</body>' in content:
            content = content.replace('</body>', SCRIPT_TAG + '\n</body>', 1)
            modified = True

    if modified:
        filepath.write_text(content, encoding='utf-8')
        return True
    return False


def main():
    root = Path(__file__).parent
    updated = []
    skipped = []

    for dir_name in DIRS:
        dir_path = root / dir_name
        if not dir_path.exists():
            print(f"  [WARN] Directory not found: {dir_path}")
            continue

        for html_file in sorted(dir_path.glob('*.html')):
            if html_file.name in SKIP_FILES:
                skipped.append(str(html_file.relative_to(root)))
                continue

            if inject_interaction_bar(html_file):
                updated.append(str(html_file.relative_to(root)))
                print(f"  [UPDATED] {html_file.relative_to(root)}")
            else:
                skipped.append(str(html_file.relative_to(root)))

    print(f"\n{'='*60}")
    print(f"DONE: {len(updated)} files updated, {len(skipped)} files skipped (already OK or skipped).")
    if updated:
        print("\nUpdated files:")
        for f in updated:
            print(f"  - {f}")


if __name__ == '__main__':
    main()
