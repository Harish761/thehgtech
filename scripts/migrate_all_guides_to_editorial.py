#!/usr/bin/env python3
"""
TheHGTech — Guides Bulk Migration to Editorial Design System
Transforms legacy guide HTML files into the approved 3-zone Editorial Monograph layout.
Preserves all technical content, examples, tables, diagrams, code blocks, metadata, and structured data.
"""

import os
import re
import json
import glob
from html import unescape

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GUIDES_DIR = os.path.join(REPO_ROOT, "guides")
COMPONENTS_DIR = os.path.join(REPO_ROOT, "components")
HEADER_PATH = os.path.join(COMPONENTS_DIR, "site-header.html")
GUIDES_JSON_PATH = os.path.join(GUIDES_DIR, "guides.json")

# Load Canonical Header
with open(HEADER_PATH, "r", encoding="utf-8") as f:
    CANONICAL_HEADER_INNER = f.read().strip()
CANONICAL_HEADER = f"<!-- SITE-HEADER-START -->\n{CANONICAL_HEADER_INNER}\n<!-- SITE-HEADER-END -->"

# Load Guides Datastore
with open(GUIDES_JSON_PATH, "r", encoding="utf-8") as f:
    GUIDES_DATA = json.load(f)
GUIDES_BY_ID = {g["id"]: g for g in GUIDES_DATA.get("guides", [])}

CANONICAL_FOOTER = """<!-- ========== APPROVED BRAND FOOTER ========== -->
    <footer class="footer" role="contentinfo">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <a href="/index.html" class="footer-brand-logo-link" aria-label="TheHGTech Home">
                        <img src="/assets/brand/svg/logo-horizontal-tagline-dark.svg" alt="TheHGTech — Cybersecurity Insights | Tools | Intelligence" class="footer-logo-img logo-dark" width="280" height="55" loading="lazy">
                        <img src="/assets/brand/svg/logo-horizontal-tagline-light.svg" alt="TheHGTech — Cybersecurity Insights | Tools | Intelligence" class="footer-logo-img logo-light" width="280" height="55" loading="lazy">
                    </a>
                    <p class="footer-desc">Independent security research, practitioner field manuals, and live vulnerability intelligence.</p>
                    <div class="social-links">
                        <a href="https://twitter.com/thehgtech" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Follow TheHGTech on X">
                            <i class="fab fa-x-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/harish-g-2216955b/" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Follow on LinkedIn">
                            <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61582408623186" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook">
                            <i class="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>
                        <a href="https://youtube.com/@thehgtech" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Subscribe on YouTube">
                            <i class="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h4>Navigation</h4>
                    <ul class="footer-links">
                        <li><a href="/index.html#news">News</a></li>
                        <li><a href="/cve-tracker.html">CVE Alerts</a></li>
                        <li><a href="/articles.html">Articles</a></li>
                        <li><a href="/guides/">Security Guides</a></li>
                        <li><a href="/comparisons/">Tool Comparisons</a></li>
                        <li><a href="/about.html">About</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Security Tools</h4>
                    <ul class="footer-links">
                        <li><a href="/threat-intel.html">Threat Intelligence</a></li>
                        <li><a href="/cve-tracker.html">CVE Triage Workbench</a></li>
                        <li><a href="/ransomware-tracker.html">Ransomware Tracker</a></li>
                        <li><a href="/hacker-chatter.html">Hacker Chatter</a></li>
                        <li><a href="/tools/grc-assessment/">ISO 27001 GRC Tool</a></li>
                        <li><a href="/workflows/">n8n Workflows</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Publication</h4>
                    <ul class="footer-links">
                        <li><a href="/about.html#harish">Editorial Standards</a></li>
                        <li><a href="/rss.xml">RSS Feed</a></li>
                        <li><a href="/newsletter.html">Newsletter</a></li>
                        <li><a href="mailto:harish@thehgtech.com">Contact Editorial</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                &copy; 2026 TheHGTech. All rights reserved. Independent Cybersecurity Research &amp; Field Manuals.
            </div>
        </div>
    </footer>"""

AUTHOR_CARD = """                <aside class="ed-author-card" aria-label="Author Profile">
                    <img src="/images/about-harish-hero.webp" alt="Harish G" class="ed-author-avatar" width="72" height="72" loading="lazy">
                    <div class="ed-author-details">
                        <h3><a href="/about.html#harish">Harish G</a></h3>
                        <span class="ed-author-role">Founder &amp; Principal Security Architect · TheHGTech</span>
                        <p>Security practitioner specializing in enterprise architecture, detection engineering, endpoint telemetry optimization, and AI-driven security operations.</p>
                    </div>
                </aside>"""

INTERACTION_BAR = """                <div class="interaction-bar" style="margin-top: 2rem;">
                    <div class="like-section">
                        <button class="like-btn" id="likeBtn" onclick="toggleLike()">
                            <i class="far fa-heart" aria-hidden="true"></i> <span id="likeText">Like this guide</span>
                        </button>
                    </div>
                    <div class="action-buttons">
                        <div class="share-buttons">
                            <a href="#" onclick="shareTwitter(event)" class="share-btn" title="Share on X/Twitter" aria-label="Share on X/Twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                            <a href="#" onclick="shareLinkedIn(event)" class="share-btn" title="Share on LinkedIn" aria-label="Share on LinkedIn"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
                            <button onclick="copyLink()" class="share-btn" title="Copy Link" aria-label="Copy Link"><i class="fas fa-link" aria-hidden="true"></i></button>
                        </div>
                        <div class="button-separator"></div>
                        <button onclick="window.print()" class="print-btn" title="Print Guide" aria-label="Print Guide"><i class="fas fa-print" aria-hidden="true"></i></button>
                    </div>
                </div>"""

CLIENT_SCRIPTS = """    <script>
        // Reader Font Size Comfort Controls
        function setReaderScale(scale) {
            if (scale === "default") {
                document.body.removeAttribute("data-reader-scale");
                localStorage.removeItem("hg_reader_scale");
            } else {
                document.body.setAttribute("data-reader-scale", scale);
                localStorage.setItem("hg_reader_scale", scale);
            }
            document.querySelectorAll(".ed-reader-btn[data-scale]").forEach(function(btn) {
                btn.classList.toggle("active", btn.getAttribute("data-scale") === scale);
            });
        }

        (function initMonographReader() {
            var savedScale = localStorage.getItem("hg_reader_scale");
            if (savedScale === "compact" || savedScale === "large") {
                setReaderScale(savedScale);
            }

            var article = document.getElementById("edMonographArticle");
            var progressBar = document.getElementById("edReadingProgress");
            var tocPercent = document.getElementById("edTocPercent");
            var tocLinks = Array.from(document.querySelectorAll("#edDesktopToc a"));
            var headings = tocLinks.map(function(link) {
                var id = link.getAttribute("href").replace("#", "");
                return document.getElementById(id);
            }).filter(Boolean);

            function updateReadingProgress() {
                if (!article) return;
                var rect = article.getBoundingClientRect();
                var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                var totalScrollable = Math.max(1, article.offsetHeight - viewportHeight * 0.5);
                var scrolled = Math.min(Math.max(0, -rect.top + viewportHeight * 0.2), totalScrollable);
                var pct = Math.round((scrolled / totalScrollable) * 100);
                if (progressBar) progressBar.style.width = pct + "%";
                if (tocPercent) tocPercent.textContent = pct + "%";

                var activeHeading = headings[0];
                for (var i = 0; i < headings.length; i++) {
                    if (headings[i].getBoundingClientRect().top <= 140) {
                        activeHeading = headings[i];
                    }
                }
                if (activeHeading) {
                    var activeId = "#" + activeHeading.id;
                    tocLinks.forEach(function(link) {
                        if (link.getAttribute("href") === activeId) {
                            link.setAttribute("aria-current", "true");
                        } else {
                            link.removeAttribute("aria-current");
                        }
                    });
                }
            }

            window.addEventListener("scroll", updateReadingProgress, { passive: true });
            updateReadingProgress();
        })();
    </script>
    <script src="/interaction-bar.min.js?v=20260623"></script>
    <script src="/ui-enhancements.js?v=20260517" defer></script>
    <script src="/command-palette.js" defer></script>
    <script src="/mobile-nav.js" defer></script>"""

MERMAID_SCRIPT = """    <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var isLight = document.body.classList.contains("light-mode") || document.documentElement.getAttribute("data-theme") === "light";
            if (typeof mermaid !== "undefined") {
                mermaid.initialize({ startOnLoad: true, theme: isLight ? "default" : "dark" });
            }
        });
    </script>"""

def slugify(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = unescape(text).lower()
    text = re.sub(r'[^a-z0-9]+', '-', text).strip('-')
    return text or 'section'

def clean_custom_css(css_text):
    """Filter out boilerplate resets and keep unique component styles."""
    if not css_text:
        return ""
    
    BOILERPLATE_SELECTORS = {
        "*", ":root", "html", "body", "h1", "h2", "h3", "h4", "h5", "h6",
        "p", "a", "a:hover", "a:focus", "ul", "ol", "li", "code", "pre", "pre code",
        "table", "th", "td", "tr", "tbody", "thead", "hr", "blockquote", "img",
        "strong", "em", ".container", ".content", ".header", ".nav", ".footer",
        "header", "footer", "nav",
        ".guide-header", ".ad-badge", ".badge", ".guide-badge", ".new-badge", ".ai-badge",
        ".back-link", ".back-link:hover", ".btn-back", ".btn-back:hover",
        ".toc", ".reading-progress",
        ".breadcrumb", ".meta", ".meta-item", ".page-meta", ".guide-meta",
        ".featured-image", ".hero-image",
        ".interaction-bar", ".share-buttons", ".share-btn", ".like-section", ".like-btn",
        ".info-box", ".warning-box", ".success-box", ".opinion-callout",
        ".related-guides"
    }

    cleaned_blocks = []
    for sel_str, body in re.findall(r"([^{}]+)\{([^}]+)\}", css_text):
        sel_str_clean = sel_str.strip()
        if sel_str_clean.startswith("@") or "keyframes" in sel_str_clean.lower():
            continue
        selectors = [s.strip() for s in sel_str_clean.split(",")]
        keep = []
        for s in selectors:
            base = re.sub(r"\s+", " ", s.strip())
            if base in BOILERPLATE_SELECTORS:
                continue
            if any(base.startswith(p + " ") or base.startswith(p + ":") or base == p for p in [
                ".toc", ".guide-header", ".content", ".breadcrumb", ".related-guides",
                ".guide-meta", ".interaction-bar", ".share-buttons", ".like-section",
                ".share-btn", ".like-btn"
            ]):
                continue
            keep.append(s.strip())
        if keep:
            sel_formatted = ", ".join(keep)
            body_formatted = body.strip()
            cleaned_blocks.append(f"        {sel_formatted} {{ {body_formatted} }}")

    return "\n".join(cleaned_blocks)

def extract_body_content(html_content):
    """Extract and clean the inner technical prose from the legacy page."""
    h_idx = html_content.rfind("</header>")
    if h_idx != -1:
        post_header = html_content[h_idx + len("</header>"):]
    else:
        post_header = html_content

    # Cut off at interaction bar
    ib_match = re.search(r"<!--\s*Interaction\s*Bar\s*-->|<div\s+class=[\x27\"]interaction-bar", post_header, flags=re.IGNORECASE)
    if ib_match:
        raw_body = post_header[:ib_match.start()]
    else:
        raw_body = post_header

    # Strip opening container tag
    body = re.sub(r"^\s*<(?:div|main|article)\s+class=[\x27\"][^\x27\"]*(?:container|content)[^\x27\"]*[\x27\"][^>]*>", "", raw_body, count=1, flags=re.IGNORECASE)

    # Strip back link (both class-based and content-based, strictly within <a>...</a>)
    body = re.sub(
        r"<a\s+[^>]*href=[\x27\"][^\x27\"]*guides/?[\x27\"][^>]*>(?:(?!</a>).)*?Back to(?:(?!</a>).)*?</a>",
        "", body, flags=re.DOTALL | re.IGNORECASE
    )
    body = re.sub(
        r"^\s*<a\s+href=[\x27\"][^\x27\"]*guides[^\x27\"]*[\x27\"]\s+class=[\x27\"][^\x27\"]*back[^\x27\"]*[\x27\"][^>]*>(?:(?!</a>).)*?</a>",
        "", body, count=1, flags=re.DOTALL | re.IGNORECASE
    )

    # Strip guide-header block using div depth matching
    gh_match = re.search(r"<div\s+class=[\x27\"][^\x27\"]*guide-header[^\x27\"]*[\x27\"][^>]*>", body, flags=re.IGNORECASE)
    if gh_match:
        start_pos = gh_match.start()
        depth = 0
        end_pos = len(body)
        for m in re.finditer(r"</?div\b[^>]*>", body[start_pos:], flags=re.IGNORECASE):
            tag = m.group(0).lower()
            if tag.startswith("</div>"):
                depth -= 1
                if depth == 0:
                    end_pos = start_pos + m.end()
                    break
            else:
                depth += 1
        body = body[:start_pos] + body[end_pos:]

    # Strip any standalone h1
    body = re.sub(r"<h1[^>]*>.*?</h1>", "", body, count=1, flags=re.DOTALL | re.IGNORECASE)

    # Strip featured images
    body = re.sub(r"<img[^>]+(?:class=[\x27\"][^\x27\"]*(?:featured-image|hero-image)[^\x27\"]*[\x27\"]|src=[\x27\"][^\x27\"]*images/guides/[^\x27\"]+[\x27\"])[^>]*>", "", body, count=1, flags=re.IGNORECASE)
    body = re.sub(r"<img[^>]+src=[\x27\"]images/[^/]+[\x27\"][^>]*>", "", body, count=1, flags=re.IGNORECASE)

    # Strip old inline TOC using div depth matching
    toc_match = re.search(r"<div\s+class=[\x27\"][^\x27\"]*\btoc\b[^\x27\"]*[\x27\"][^>]*>", body, flags=re.IGNORECASE)
    if toc_match:
        start_pos = toc_match.start()
        depth = 0
        end_pos = len(body)
        for m in re.finditer(r"</?div\b[^>]*>", body[start_pos:], flags=re.IGNORECASE):
            tag = m.group(0).lower()
            if tag.startswith("</div>"):
                depth -= 1
                if depth == 0:
                    end_pos = start_pos + m.end()
                    break
            else:
                depth += 1
        body = body[:start_pos] + body[end_pos:]

    # Strip old related-guides using div depth matching
    rel_match = re.search(r"<div\s+class=[\x27\"][^\x27\"]*related-guides[^\x27\"]*[\x27\"][^>]*>", body, flags=re.IGNORECASE)
    if rel_match:
        start_pos = rel_match.start()
        depth = 0
        end_pos = len(body)
        for m in re.finditer(r"</?div\b[^>]*>", body[start_pos:], flags=re.IGNORECASE):
            tag = m.group(0).lower()
            if tag.startswith("</div>"):
                depth -= 1
                if depth == 0:
                    end_pos = start_pos + m.end()
                    break
            else:
                depth += 1
        body = body[:start_pos] + body[end_pos:]

    # Strip heading-based related guides/resources without crossing headers
    body = re.sub(
        r"<h[2-4][^>]*>(?:<[^>]+>|\s)*(?:Related Guides|Related Resources|Further Reading)(?:<[^>]+>|\s)*</h[2-4]>\s*<(?:ul|ol)\b[^>]*>(?:(?!</(?:ul|ol)>).)*?</(?:ul|ol)>",
        "", body, flags=re.DOTALL | re.IGNORECASE
    )

    # Strip trailing author / date box
    body = re.sub(r"<div\s+style=[\x27\"][^\x27\"]*(?:margin-top:\s*4rem|padding-top:\s*2rem)[^\x27\"]*[\x27\"][^>]*>.*?</div>", "", body, flags=re.DOTALL | re.IGNORECASE)
    body = re.sub(r"<p\s+style=[\x27\"][^\x27\"]*margin-top:\s*3rem[^\x27\"]*[\x27\"][^>]*>\s*<strong>Author:</strong>.*?</p>", "", body, flags=re.DOTALL | re.IGNORECASE)

    # Strip trailing script tags in body
    body = re.sub(r"<script>.*?localStorage\.getItem\([\x27\"]theme[\x27\"]\).*?</script>", "", body, flags=re.DOTALL | re.IGNORECASE)

    # Clean outer trailing tags
    body = body.strip()
    while True:
        prev = body
        body = re.sub(r"</(?:div|main|article)>\s*$", "", body, flags=re.IGNORECASE).strip()
        if body == prev:
            break

    return body.strip()

def process_h2s(body_html):
    """Ensure all <h2> tags have clean IDs and return TOC items."""
    toc_items = []
    used_ids = set()

    def replace_h2(match):
        attrs = match.group(1)
        inner = match.group(2)
        
        # Check if ID already exists
        id_match = re.search(r'id=[\x27"]([^\x27"]+)[\x27"]', attrs)
        if id_match:
            h2_id = id_match.group(1)
        else:
            base_id = slugify(inner)
            h2_id = base_id
            counter = 2
            while h2_id in used_ids:
                h2_id = f"{base_id}-{counter}"
                counter += 1
            attrs = f'{attrs} id="{h2_id}"'.strip()

        used_ids.add(h2_id)
        
        # Clean title for TOC
        clean_title = re.sub(r'<[^>]+>', '', inner).strip()
        clean_title = unescape(clean_title)
        toc_items.append({"id": h2_id, "title": clean_title})
        
        return f'<h2 {attrs}>{inner}</h2>'

    processed_body = re.sub(r'<h2([^>]*)>(.*?)</h2>', replace_h2, body_html, flags=re.DOTALL | re.IGNORECASE)
    return processed_body, toc_items

def get_practitioner_dossier(body_html, meta):
    """Extract key takeaways or generate 3-4 high-value practitioner bullets."""
    bullets = []
    # Try finding an info-box or warning-box near the top
    top_box = re.search(r'<div\s+class=[\x27"](?:info|warning|critical|danger|threat|bluf)-box[^\x27"]*[\x27"][^>]*>(.*?)</div>', body_html, flags=re.DOTALL | re.IGNORECASE)
    if top_box:
        box_text = re.sub(r'<[^>]+>', ' ', top_box.group(1)).strip()
        box_text = re.sub(r'\s+', ' ', box_text)
        sentences = [s.strip() for s in box_text.split('.') if len(s.strip()) > 20]
        if len(sentences) >= 2:
            bullets = [f"<strong>Key Finding:</strong> {sentences[0]}.", f"<strong>Core Challenge:</strong> {sentences[1]}."]
    
    # Fallback to category & technical summary
    cat = meta.get("category", "Cybersecurity")
    if len(bullets) < 3:
        bullets.append(f"<strong>Architecture Focus:</strong> Hardened enterprise baseline implementation for {cat.lower()} workflows.")
    if len(bullets) < 3:
        bullets.append(f"<strong>Implementation:</strong> Apply phased rollouts, automated policy enforcement, and continuous telemetry monitoring.")
    if len(bullets) < 3:
        bullets.append(f"<strong>Governance &amp; Audit:</strong> Align configurations with CIS benchmarks, NIST CSF 2.0, and continuous compliance audits.")
    
    return bullets[:4]

def get_related_resources(current_id, meta):
    """Pick 4 contextual links: 2 companion guides, 1 comparison, 1 workbench tool."""
    cat = meta.get("category", "")
    all_guides = [g for g in GUIDES_DATA.get("guides", []) if g["id"] != current_id]
    
    # 1. Same or related category
    same_cat = [g for g in all_guides if g.get("category") == cat]
    other_cat = [g for g in all_guides if g.get("category") != cat]
    
    companion = same_cat[0] if same_cat else (other_cat[0] if other_cat else None)
    technical = same_cat[1] if len(same_cat) > 1 else (other_cat[1] if len(other_cat) > 1 else None)
    
    # Category comparison map
    comp_map = {
        "Endpoint Security": ("/comparisons/crowdstrike-vs-microsoft-defender-vs-cortex-xdr.html", "CrowdStrike Falcon vs. Microsoft Defender vs. Cortex XDR"),
        "Email Security": ("/comparisons/proofpoint-vs-mimecast-vs-microsoft-defender-o365.html", "Proofpoint vs. Mimecast vs. Defender for Office 365"),
        "Security Operations": ("/comparisons/splunk-vs-elastic-security-vs-logrhythm.html", "Splunk Enterprise vs. Elastic Security vs. LogRhythm"),
        "Detection Engineering": ("/comparisons/splunk-vs-elastic-security-vs-logrhythm.html", "Splunk Enterprise vs. Elastic Security vs. LogRhythm"),
        "SIEM": ("/comparisons/splunk-vs-elastic-security-vs-logrhythm.html", "Splunk Enterprise vs. Elastic Security vs. LogRhythm"),
        "Identity & Access Management": ("/comparisons/okta-vs-microsoft-entra-id-vs-ping-identity.html", "Okta vs. Microsoft Entra ID vs. Ping Identity"),
        "Identity Security": ("/comparisons/okta-vs-microsoft-entra-id-vs-ping-identity.html", "Okta vs. Microsoft Entra ID vs. Ping Identity")
    }
    comp_url, comp_title = comp_map.get(cat, ("/comparisons/", "Enterprise EDR, SIEM & Identity Platform Comparisons"))
    
    links = []
    if companion:
        links.append({
            "type": "Companion Guide // " + companion.get("category", "Architecture"),
            "url": f"/guides/{companion['id']}.html",
            "name": companion.get("title", "")
        })
    if technical:
        links.append({
            "type": "Technical Guide // " + technical.get("category", "Infrastructure"),
            "url": f"/guides/{technical['id']}.html",
            "name": technical.get("title", "")
        })
    links.append({
        "type": "Head-to-Head Matrix // Comparisons",
        "url": comp_url,
        "name": comp_title
    })
    links.append({
        "type": "Live Workbench // Intelligence",
        "url": "/cve-tracker.html",
        "name": "CISA KEV & Zero-Day Vulnerability Tracker"
    })
    return links

PAGE_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} | TheHGTech</title>
    <meta name="description" content="{{EXCERPT}}">
    <meta name="author" content="Harish G">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="{{CANONICAL_URL}}">

    <!-- Open Graph (Facebook, LinkedIn) -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="{{CANONICAL_URL}}">
    <meta property="og:title" content="{{TITLE}}">
    <meta property="og:description" content="{{EXCERPT}}">
    <meta property="og:image" content="https://thehgtech.com{{IMAGE}}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="TheHGTech">
    <meta property="og:locale" content="en_US">
    <meta property="article:published_time" content="2026-01-01T00:00:00+00:00">
    <meta property="article:modified_time" content="2026-05-01T00:00:00+00:00">
    <meta property="article:author" content="https://thehgtech.com/about.html#harish">
    <meta property="article:section" content="{{CATEGORY}}">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@TheHGTech">
    <meta name="twitter:creator" content="@TheHGTech">
    <meta name="twitter:title" content="{{TITLE}}">
    <meta name="twitter:description" content="{{EXCERPT}}">
    <meta name="twitter:image" content="https://thehgtech.com{{IMAGE}}">

    <!-- Approved Brand Identity Favicon & App Icons -->
    <link rel="icon" href="/assets/brand/favicon/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/brand/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/brand/favicon/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/brand/png/apple-touch-icon.png">
    <meta name="color-scheme" content="dark light">

    <link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="/fonts.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!-- Core Site Chrome & Navigation Stylesheets -->
    <link rel="stylesheet" href="/header.css">
    <link rel="stylesheet" href="/header-dropdown.min.css?v=1">
    <link rel="stylesheet" href="/print.css">
    <link rel="stylesheet" href="/m-core.min.css?v=4.4">
    <link rel="stylesheet" href="/m-layout.min.css?v=3.4">
    <link rel="stylesheet" href="/m-components.min.css?v=3.0">
    <link rel="stylesheet" href="/light-mode.css">
    <link rel="stylesheet" href="/theme-toggle.css">
    <link rel="stylesheet" href="/interaction-bar.css?v=20251207-0041">
    <link rel="stylesheet" href="/ui-enhancements.css?v=3.5_newsletter">
    <link rel="stylesheet" href="/mobile-nav.css">

    <!-- Isolated Guides Editorial Design System (Technical Monograph & Field Manuals) -->
    <link rel="stylesheet" href="/css/guides-editorial.css?v=1.0">

    <script src="/m-app.min.js?v=20260528_coffee" defer></script>
    <script src="/theme-toggle.js" defer></script>

    <!-- Global Theme Script -->
    <script>
        (function() {
            var savedTheme = localStorage.getItem("theme");
            if (savedTheme === "light") {
                document.documentElement.setAttribute("data-theme", "light");
            }
        })();
    </script>

    <!-- Google Analytics 4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XL6RCXZJE2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag("js", new Date());
        gtag("config", "G-XL6RCXZJE2");
    </script>
    <!-- Fullres Analytics -->
    <script>
        (function () {
            var fullres = document.createElement("script");
            fullres.async = true;
            fullres.src = "https://t.fullres.net/thehgtech.js?" + (new Date() - new Date() % 43200000);
            document.head.appendChild(fullres);
        })();
    </script>

{{JSON_LD_RENDERED}}{{CUSTOM_STYLE_BLOCK}}
</head>

<body class="guides-editorial guide-monograph-page">
    <script>
        if (document.documentElement.getAttribute("data-theme") === "light") {
            document.body.classList.add("light-mode");
        }
    </script>

    <!-- Accessible Skip Link -->
    <a href="#edMonographArticle" class="ed-skip-link">Skip to guide content</a>

    <!-- Top Reading Progress Hairline -->
    <div class="ed-progress-track" aria-hidden="true">
        <div class="ed-progress-bar" id="edReadingProgress"></div>
    </div>

{{CANONICAL_HEADER}}

    <main class="ed-shell">
        <!-- MONOGRAPH HEADER & READER COMFORT CONTROLS -->
        <header class="ed-monograph-header">
            <div class="ed-breadcrumb-nav">
                <nav aria-label="Breadcrumb">
                    <ol class="ed-breadcrumbs">
                        <li><a href="/index.html">Home</a></li>
                        <li class="ed-bc-sep" aria-hidden="true">/</li>
                        <li><a href="/guides/">Security Guides</a></li>
                        <li class="ed-bc-sep" aria-hidden="true">/</li>
                        <li aria-current="page">{{CATEGORY}}</li>
                    </ol>
                </nav>

                <div class="ed-reader-controls" role="group" aria-label="Reading comfort settings">
                    <button type="button" class="ed-reader-btn" onclick="if(typeof toggleTheme === 'function') toggleTheme();" title="Switch Paper / Obsidian Theme" aria-label="Switch reading theme">
                        <i class="fas fa-adjust" aria-hidden="true"></i> <span>Surface</span>
                    </button>
                    <span class="ed-reader-divider" aria-hidden="true"></span>
                    <button type="button" class="ed-reader-btn" data-scale="compact" onclick="setReaderScale('compact')" title="Compact type size" aria-label="Compact font size">A-</button>
                    <button type="button" class="ed-reader-btn active" data-scale="default" onclick="setReaderScale('default')" title="Standard type size" aria-label="Default font size">A</button>
                    <button type="button" class="ed-reader-btn" data-scale="large" onclick="setReaderScale('large')" title="Large type size" aria-label="Large font size">A+</button>
                </div>
            </div>

            <div class="ed-monograph-kicker-row">
                <span class="ed-domain-tag">{{CATEGORY}}</span>
                <span class="ed-doc-id">MONOGRAPH // FIELD MANUAL · TLP:CLEAR · RESEARCH-GRADE</span>
            </div>

            <h1 class="ed-monograph-title">{{TITLE}}</h1>
            <p class="ed-monograph-standfirst">{{EXCERPT}}</p>

            <div class="ed-byline-ledger" role="region" aria-label="Document Metadata">
                <div class="ed-byline-cell">
                    <span class="ed-byline-label">Author</span>
                    <span class="ed-byline-val"><a href="/about.html#harish" rel="author">Harish G</a> · Principal Architect</span>
                </div>
                <div class="ed-byline-cell">
                    <span class="ed-byline-label">Published / Updated</span>
                    <span class="ed-byline-val"><time datetime="2026-05-01">{{DATE_HUMAN}}</time></span>
                </div>
                <div class="ed-byline-cell">
                    <span class="ed-byline-label">Reading Time</span>
                    <span class="ed-byline-val">{{READ_TIME}}</span>
                </div>
                <div class="ed-byline-cell">
                    <span class="ed-byline-label">Audience &amp; Depth</span>
                    <span class="ed-byline-val">{{LEVEL}} · Practice Playbook</span>
                </div>
            </div>
        </header>

        <!-- FEATURED TECHNICAL FIGURE -->
        <figure class="ed-monograph-figure">
            <img src="{{IMAGE}}"
                 alt="{{TITLE}} — Enterprise Security Architecture &amp; Implementation"
                 width="1200" height="630" loading="eager">
            <figcaption class="ed-monograph-figcaption">
                <span><strong>FIG. 01</strong> // Technical architecture &amp; security implementation: {{TITLE}}.</span>
                <span>SOURCE: THEHGTECH ARCHITECTURE LAB</span>
            </figcaption>
        </figure>

        <!-- MOBILE COLLAPSIBLE TABLE OF CONTENTS -->
        <details class="ed-mobile-toc">
            <summary>
                <span><i class="fas fa-list-ul" aria-hidden="true"></i> Monograph Contents ({{TOC_COUNT}} Sections)</span>
                <i class="fas fa-chevron-down" aria-hidden="true"></i>
            </summary>
            <div class="ed-mobile-toc-body">
                <ul class="ed-toc-list">
{{MOBILE_TOC_ITEMS}}
                </ul>
            </div>
        </details>

        <!-- 3-ZONE EDITORIAL MONOGRAPH WORKSPACE -->
        <div class="ed-monograph-grid">
            <!-- ZONE 1: STICKY TABLE OF CONTENTS RAIL -->
            <aside class="ed-toc-rail" aria-label="Table of Contents">
                <div class="ed-toc-heading">
                    <span>Contents</span>
                    <span id="edTocPercent">0%</span>
                </div>
                <nav aria-label="Guide sections">
                    <ul class="ed-toc-list" id="edDesktopToc">
{{DESKTOP_TOC_ITEMS}}
                    </ul>
                </nav>
            </aside>

            <!-- ZONE 2: OPTIMAL 68ch LONG-FORM TECHNICAL PROSE -->
            <article id="edMonographArticle" class="ed-prose-column">
{{PROCESSED_BODY}}

{{AUTHOR_CARD}}

{{INTERACTION_BAR}}
            </article>

            <!-- ZONE 3: RIGHT MARGINALIA & CONTEXT RAIL -->
            <aside class="ed-marginalia-rail" aria-label="Key Takeaways and Related Resources">
                <div class="ed-rail-card">
                    <h2 class="ed-rail-title">Practitioner Dossier</h2>
                    <ul class="ed-rail-list">
{{DOSSIER_ITEMS}}
                    </ul>
                </div>

                <div class="ed-rail-card">
                    <h2 class="ed-rail-title">Related Monographs &amp; Tools</h2>
                    <nav aria-label="Related resources">
{{RELATED_LINKS}}
                    </nav>
                </div>
            </aside>
        </div>
    </main>

{{CANONICAL_FOOTER}}

{{CLIENT_SCRIPTS}}
{{MERMAID_SCRIPT}}
</body>
</html>
"""

def migrate_guide(file_path):
    """Migrate a single legacy guide to the approved editorial layout."""
    guide_id = os.path.basename(file_path)[:-5]
    meta = GUIDES_BY_ID.get(guide_id)
    if not meta:
        print(f"Skipping {file_path}: No entry in guides.json")
        return False

    with open(file_path, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Extract Head Metadata & Schemas
    title = meta.get("title", "")
    excerpt = meta.get("excerpt", "")
    category = meta.get("category", "Security Guides")
    read_time = meta.get("readTime", "20 min")
    level = meta.get("level", "Intermediate")
    date_human = meta.get("date", "2026")
    image = meta.get("image", f"/images/guides/{guide_id}.png")
    canonical_url = f"https://thehgtech.com/guides/{guide_id}.html"

    # Extract JSON-LD blocks
    json_ld_blocks = []
    for m in re.finditer(r'<script\s+type=[\x27"]application/ld\+json[\x27"][^>]*>(.*?)</script>', html, re.DOTALL | re.IGNORECASE):
        raw_json = m.group(1).strip()
        try:
            parsed = json.loads(raw_json)
            items = parsed if isinstance(parsed, list) else [parsed]
            for item in items:
                schema_type = item.get("@type")
                if schema_type in ("TechArticle", "HowTo", "FAQPage"):
                    json_ld_blocks.append(item)
        except Exception:
            pass

    # Ensure TechArticle exists
    tech_article_exists = any(b.get("@type") == "TechArticle" for b in json_ld_blocks)
    if not tech_article_exists:
        json_ld_blocks.insert(0, {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": title,
            "description": excerpt,
            "image": [f"https://thehgtech.com{image}"],
            "datePublished": "2026-01-01T00:00:00+00:00",
            "dateModified": "2026-05-01T00:00:00+00:00",
            "author": [{
                "@type": "Person",
                "name": "Harish G",
                "url": "https://thehgtech.com/about.html",
                "sameAs": ["https://www.linkedin.com/in/harish-g-2216955b/"],
                "@id": "https://thehgtech.com/about.html#harish-g"
            }],
            "publisher": {
                "@type": "Organization",
                "name": "TheHGTech",
                "url": "https://thehgtech.com",
                "@id": "https://thehgtech.com/#organization",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://thehgtech.com/logo-dark.png"
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonical_url
            },
            "articleSection": category,
            "keywords": [category, "Cybersecurity", "Hardening Guide"]
        })

    # Always append single clean BreadcrumbList
    json_ld_blocks.append({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thehgtech.com/"},
            {"@type": "ListItem", "position": 2, "name": "Guides", "item": "https://thehgtech.com/guides/"},
            {"@type": "ListItem", "position": 3, "name": title, "item": canonical_url}
        ]
    })

    # Extract custom styles
    custom_css = ""
    for sm in re.finditer(r'<style[^>]*>(.*?)</style>', html, re.DOTALL | re.IGNORECASE):
        cleaned_css = clean_custom_css(sm.group(1))
        if cleaned_css:
            custom_css += f"\n{cleaned_css}"
    custom_css = custom_css.strip()

    # 2. Extract and Process Technical Body
    raw_body = extract_body_content(html)
    processed_body, toc_items = process_h2s(raw_body)
    has_mermaid = "class=\"mermaid\"" in processed_body or "class='mermaid'" in processed_body

    # Format TOC HTML
    desktop_toc_items_html = "\n".join([
        f'                        <li><a href="#{item["id"]}">{item["title"]}</a></li>'
        for item in toc_items
    ])
    mobile_toc_items_html = "\n".join([
        f'                    <li><a href="#{item["id"]}">{item["title"]}</a></li>'
        for item in toc_items
    ])

    # Format Dossier & Related Resources
    dossier_bullets = get_practitioner_dossier(processed_body, meta)
    dossier_html = "\n".join([f'                        <li>{b}</li>' for b in dossier_bullets])

    related_links = get_related_resources(guide_id, meta)
    related_links_html = "\n".join([
        f'                        <a href="{rl["url"]}" class="ed-rail-link">\n'
        f'                            <span class="ed-rail-link-type">{rl["type"]}</span>\n'
        f'                            <span class="ed-rail-link-name">{rl["name"]}</span>\n'
        f'                        </a>'
        for rl in related_links
    ])

    # Format JSON-LD script blocks
    json_ld_rendered = "\n".join([
        f'    <script type="application/ld+json">\n{json.dumps(block, indent=2)}\n    </script>'
        for block in json_ld_blocks
    ])

    custom_style_block = f"\n    <style>\n{custom_css}\n    </style>" if custom_css else ""

    # Replace markers in template
    output = PAGE_TEMPLATE
    output = output.replace("{{TITLE}}", title)
    output = output.replace("{{EXCERPT}}", excerpt)
    output = output.replace("{{CATEGORY}}", category)
    output = output.replace("{{READ_TIME}}", read_time)
    output = output.replace("{{LEVEL}}", level)
    output = output.replace("{{DATE_HUMAN}}", date_human)
    output = output.replace("{{IMAGE}}", image)
    output = output.replace("{{CANONICAL_URL}}", canonical_url)
    output = output.replace("{{JSON_LD_RENDERED}}", json_ld_rendered)
    output = output.replace("{{CUSTOM_STYLE_BLOCK}}", custom_style_block)
    output = output.replace("{{CANONICAL_HEADER}}", CANONICAL_HEADER)
    output = output.replace("{{TOC_COUNT}}", str(len(toc_items)))
    output = output.replace("{{MOBILE_TOC_ITEMS}}", mobile_toc_items_html)
    output = output.replace("{{DESKTOP_TOC_ITEMS}}", desktop_toc_items_html)
    output = output.replace("{{PROCESSED_BODY}}", processed_body)
    output = output.replace("{{AUTHOR_CARD}}", AUTHOR_CARD)
    output = output.replace("{{INTERACTION_BAR}}", INTERACTION_BAR)
    output = output.replace("{{DOSSIER_ITEMS}}", dossier_html)
    output = output.replace("{{RELATED_LINKS}}", related_links_html)
    output = output.replace("{{CANONICAL_FOOTER}}", CANONICAL_FOOTER)
    output = output.replace("{{CLIENT_SCRIPTS}}", CLIENT_SCRIPTS)
    output = output.replace("{{MERMAID_SCRIPT}}", MERMAID_SCRIPT if has_mermaid else "")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(output)

    return True

if __name__ == "__main__":
    import sys
    targets = sys.argv[1:]
    if not targets:
        all_guides = sorted(glob.glob("guides/*.html"))
        targets = [
            g for g in all_guides
            if os.path.basename(g) not in (
                "index.html",
                "incident-response-plan.html",
                "the-agent-tax-corporate-laptop-performance-2026.html"
            )
        ]
    print(f"Starting migration for {len(targets)} guides...")
    success_count = 0
    for target in targets:
        if migrate_guide(target):
            success_count += 1
            print(f"✓ Migrated: {target}")
        else:
            print(f"✗ Failed/Skipped: {target}")
    print(f"\nMigration completed: {success_count}/{len(targets)} guides processed.")
