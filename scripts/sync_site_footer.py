#!/usr/bin/env python3
"""
Synchronize the canonical 5-column footer (components/site-footer.html)
across applicable public HTML pages and ensure /css/footer.css is linked.

Usage:
  python3 scripts/sync_site_footer.py           # Sync all applicable pages
  python3 scripts/sync_site_footer.py --check   # Verify drift (exit 1 if out of sync)
"""

import argparse
import re
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
FOOTER_COMPONENT = REPO_ROOT / "components" / "site-footer.html"

# Pages intentionally excluded from canonical footer synchronization
SKIP_PREFIXES = (
    "tools/grc-assessment/",
    "embed/",
    "articles/page/",  # Regenerated automatically by scripts/generate_pagination.py
    "templates/",
    "components/",
    "mobile_backup/",
    "linkedin-",
    "docs/",
    "scripts/",
    "tests/",
)

SKIP_EXACT = {
    "404.html",
    "community.html",
    "ti-snapshot.html",
    "ti-hero-animation.html",
    "test_breach_output.html",
    "homepage-mockup.html",
    "homepage-experiment.html",
    "homepage-test.html",
    "m-nav-template.html",
    "template-nav.html",
    "assets/brand/preview.html",
    "tools/zero-day-checker.html",
    "guides/incident-response-plan.html",  # Redirect/noindex stub
}

MARKER_RE = re.compile(
    r"<!--\s*SITE-FOOTER-START\s*-->.*?<!--\s*SITE-FOOTER-END\s*-->",
    re.DOTALL,
)
SITE_FOOTER_TAG_RE = re.compile(
    r"<footer\b[^>]*(?:role=[\"']contentinfo[\"']|class=[\"'][^\"']*footer[^\"']*[\"'])[^>]*>.*?</footer>",
    re.IGNORECASE | re.DOTALL,
)
FOOTER_TAG_RE = re.compile(r"<footer\b[^>]*>.*?</footer>", re.IGNORECASE | re.DOTALL)
FOOTER_CSS_LINK = '    <link rel="stylesheet" href="/css/footer.css">'


def get_target_files():
    """Return all tracked HTML files eligible for canonical 5-column footer sync."""
    tracked = subprocess.check_output(
        ["git", "-c", "core.fsmonitor=false", "ls-files", "*.html"],
        cwd=REPO_ROOT,
        text=True,
    ).splitlines()
    # Also include editorial-standards.html if created before git add
    extra = ["editorial-standards.html"] if (REPO_ROOT / "editorial-standards.html").exists() else []
    candidates = sorted(set(tracked + extra))

    targets = []
    for rel in candidates:
        if rel in SKIP_EXACT or any(rel.startswith(p) for p in SKIP_PREFIXES):
            continue
        fp = REPO_ROOT / rel
        if not fp.exists():
            continue
        txt = fp.read_text(encoding="utf-8", errors="ignore")
        # Only sync pages that already contain a <footer> landmark
        if not FOOTER_TAG_RE.search(txt):
            continue
        targets.append(rel)
    return targets


def _replace_last_match(pattern: re.Pattern, text: str, replacement: str) -> str:
    matches = list(pattern.finditer(text))
    if not matches:
        return text
    m = matches[-1]
    return text[: m.start()] + replacement + text[m.end() :]


def sync_file(rel_path: str, canonical_footer: str, check_only: bool = False) -> bool:
    fp = REPO_ROOT / rel_path
    orig = fp.read_text(encoding="utf-8")
    updated = orig

    # 1. Replace marked footer or the final landmark <footer>...</footer> (never a <blockquote> citation footer)
    if MARKER_RE.search(updated):
        updated = MARKER_RE.sub(lambda _: canonical_footer, updated, count=1)
    elif SITE_FOOTER_TAG_RE.search(updated):
        updated = _replace_last_match(SITE_FOOTER_TAG_RE, updated, canonical_footer)
    else:
        updated = _replace_last_match(FOOTER_TAG_RE, updated, canonical_footer)

    # 2. Ensure /css/footer.css is linked in <head> (normalize relative href="css/footer.css" too)
    has_footer_css = bool(re.search(r'<link[^>]+href=["\'](?:/|\.\./)*css/footer\.css(?:\?[^"\']*)?["\']', updated, re.I))
    if not has_footer_css and "</head>" in updated:
        updated = updated.replace("</head>", f"{FOOTER_CSS_LINK}\n</head>", 1)

    if updated != orig:
        if not check_only:
            fp.write_text(updated, encoding="utf-8")
        return True
    return False


def main():
    parser = argparse.ArgumentParser(description="Sync canonical 5-column site footer.")
    parser.add_argument("--check", action="store_true", help="Exit 1 if any target file is out of sync.")
    parser.add_argument("files", nargs="*", help="Optional specific relative paths to sync/check.")
    args = parser.parse_args()

    canonical = FOOTER_COMPONENT.read_text(encoding="utf-8").strip()
    targets = args.files if args.files else get_target_files()

    changed = []
    for rel in targets:
        if sync_file(rel, canonical, check_only=args.check):
            changed.append(rel)

    if args.check:
        if changed:
            print(f"❌ {len(changed)} files out of sync with canonical footer:")
            for c in changed[:20]:
                print(f"  - {c}")
            sys.exit(1)
        print(f"✅ All {len(targets)} target HTML files match canonical 5-column footer.")
        return

    print(f"✅ Synced canonical 5-column footer across {len(changed)}/{len(targets)} HTML files.")


if __name__ == "__main__":
    main()
