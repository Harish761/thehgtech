#!/usr/bin/env python3
"""
Production Article Migration Script:
Transforms all 128 standalone articles in articles/*.html into the new unified
editorial design system (Obsidian Dark & Daylight Paper Light) with:
  - 3-zone monograph workspace (desktop) & focused editorial stream (mobile)
  - Sticky table of contents & scroll progress bar
  - A- / A / A+ reader font scale controls
  - Persistent dark code blocks with Copy & Wrap buttons
  - Responsive @container stackable tables with --label-N accessible names
  - Diagram lightbox (<dialog closedby="any">)
  - The Daily Intel newsletter subscribe bar & GraphComment comments section
  - 3 contextual Related Research cards (strictly excluding current article)
  - Canonical 5-column footer with live cyber threat intelligence platform strip
  - Verbatim preservation of all SEO meta tags, canonical URLs, and JSON-LD scripts
"""

import html
import json
import os
import re
from html.parser import HTMLParser
from pathlib import Path

WORKSPACE = Path("/Volumes/Data-Personal/Webpage/thehgtech")
ARTICLES_DIR = WORKSPACE / "articles"
ARTICLES_JSON_PATH = WORKSPACE / "ioc-data" / "articles.json"

VOID_TAGS = {
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
}


class Node:
    def __init__(self, tag=None, attrs=None, text=None):
        self.tag = tag
        self.attrs = dict(attrs or [])
        self.text = text
        self.raw_html = None
        self.children = []
        self.parent = None

    def append(self, child):
        child.parent = self
        self.children.append(child)

    def classes(self):
        return self.attrs.get("class", "").split()

    def has_class(self, cls_name):
        return cls_name in self.classes()

    def set_classes(self, cls_list):
        if cls_list:
            self.attrs["class"] = " ".join(cls_list)
        elif "class" in self.attrs:
            del self.attrs["class"]

    def get_text(self):
        if self.raw_html is not None:
            return re.sub(r"<[^>]+>", "", self.raw_html)
        if self.tag is None:
            return self.text or ""
        return "".join(c.get_text() for c in self.children)

    def inner_html(self):
        return "".join(c.to_html() for c in self.children)

    def to_html(self):
        if self.raw_html is not None:
            return self.raw_html
        if self.tag is None:
            return html.escape(self.text or "", quote=False)
        attr_str = ""
        for k, v in self.attrs.items():
            if v is None:
                attr_str += f" {k}"
            else:
                attr_str += f' {k}="{html.escape(str(v), quote=True)}"'
        if self.tag in VOID_TAGS:
            return f"<{self.tag}{attr_str}>"
        if self.tag in ("script", "style"):
            raw_inner = "".join(c.text or "" for c in self.children if c.tag is None)
            return f"<{self.tag}{attr_str}>{raw_inner}</{self.tag}>"
        return f"<{self.tag}{attr_str}>{self.inner_html()}</{self.tag}>"

    def remove(self):
        if self.parent and self in self.parent.children:
            self.parent.children.remove(self)
            self.parent = None

    def replace_with(self, new_node):
        if self.parent and self in self.parent.children:
            idx = self.parent.children.index(self)
            new_node.parent = self.parent
            self.parent.children[idx] = new_node
            self.parent = None

    def find_all(self, tag=None, cls=None, recursive=True):
        out = []
        for c in list(self.children):
            if c.tag is not None:
                tag_ok = (tag is None) or (tag is True) or (
                    isinstance(tag, (list, tuple, set)) and c.tag in tag
                ) or (c.tag == tag)
                cls_ok = (cls is None) or (
                    isinstance(cls, (list, tuple, set)) and any(c.has_class(x) for x in cls)
                ) or (isinstance(cls, str) and c.has_class(cls))
                if tag_ok and cls_ok:
                    out.append(c)
                if recursive:
                    out.extend(c.find_all(tag=tag, cls=cls, recursive=True))
        return out

    def find_first(self, tag=None, cls=None, recursive=True):
        matches = self.find_all(tag=tag, cls=cls, recursive=recursive)
        return matches[0] if matches else None


class TreeBuilder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("root")
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        node = Node(tag, attrs)
        self.stack[-1].append(node)
        if tag not in VOID_TAGS:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        tag = tag.lower()
        node = Node(tag, attrs)
        self.stack[-1].append(node)

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in VOID_TAGS:
            return
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        if data:
            self.stack[-1].append(Node(None, text=data))


def parse_html(fragment: str) -> Node:
    tb = TreeBuilder()
    tb.feed(fragment)
    tb.close()
    return tb.root


def raw_node(snippet: str) -> Node:
    n = Node("raw")
    n.raw_html = snippet
    return n


# Load articles metadata from central articles.json
with open(ARTICLES_JSON_PATH, "r", encoding="utf-8") as f:
    json_data = json.load(f)
articles_db = json_data.get("articles", [])

# Lookup maps
by_slug = {}
by_url = {}
for a in articles_db:
    if a.get("id"):
        by_slug[a["id"]] = a
    if a.get("externalUrl"):
        clean_u = a["externalUrl"].strip("/")
        by_url[clean_u] = a
        by_url[Path(clean_u).name] = a


def build_common_head_assets(use_mermaid: bool = False) -> str:
    mermaid_tag = '    <script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.0/mermaid.min.js" defer></script>\n' if use_mermaid else ''
    return f"""    <!-- Approved Brand Identity Favicon & App Icons -->
    <link rel="icon" href="/assets/brand/favicon/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/brand/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/brand/favicon/favicon-16x16.png">
    <link rel="apple-touch-icon" href="/assets/brand/favicon/apple-touch-icon.png">

    <!-- Preload Critical Fonts -->
    <link rel="preload" href="/fonts/inter-v18-latin-regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/inter-v18-latin-600.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/inter-v18-latin-700.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/jetbrains-mono-v21-latin-regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="/fonts.css">

    <!-- Canonical Site Chrome & Unified Editorial Article Stylesheet -->
    <link rel="stylesheet" href="/header.css">
    <link rel="stylesheet" href="/header-dropdown.min.css?v=1">
    <link rel="stylesheet" href="/light-mode.css">
    <link rel="stylesheet" href="/theme-toggle.css">
    <link rel="stylesheet" href="/command-palette.css">
    <link rel="stylesheet" href="/m-core.min.css?v=4.4">
    <link rel="stylesheet" href="/m-layout.min.css?v=3.4">
    <link rel="stylesheet" href="/m-components.min.css?v=3.0">
    <link rel="stylesheet" href="/mobile-nav.css">
    <link rel="stylesheet" href="/print.css">
    <link rel="stylesheet" href="/css/article-editorial.css?v=1.0">

    <!-- Non-blocking FontAwesome & Interaction Bar Stylesheet -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="/interaction-bar.css?v=20251207-0041">
{mermaid_tag}
    <!-- Pre-render Theme Initialization -->
    <script>
        (function () {{
            try {{
                var params = new URLSearchParams(window.location.search);
                var forced = params.get("theme");
                var saved = localStorage.getItem("theme");
                var mode = (forced === "light" || forced === "dark") ? forced : saved;
                if (mode === "light") {{
                    document.documentElement.setAttribute("data-theme", "light");
                    document.addEventListener("DOMContentLoaded", function () {{
                        document.body.classList.add("light-mode");
                    }});
                }} else if (forced === "dark") {{
                    document.documentElement.removeAttribute("data-theme");
                }}
            }} catch (e) {{}}
        }})();
    </script>"""


def build_site_header_and_subnav(series_label: str) -> str:
    return f"""    <a href="#main-content" class="ap-skip-link">Skip to Article Content</a>

    <!-- Native CSS Scroll-Driven Reading Progress Indicator -->
    <div id="progress" class="ap-reading-progress" aria-hidden="true"></div>

    <!-- Mobile Canonical Header -->
    <header class="m-header m-only">
        <div class="m-header__logo">
            <a href="/" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none;">
                <img src="/assets/brand/svg/hg-symbol.svg" alt="TheHGTech" class="m-logo-img logo-dark" style="height: 28px; width: auto; margin: 0;">
                <img src="/assets/brand/svg/hg-symbol-light.svg" alt="TheHGTech" class="m-logo-img logo-light" style="height: 28px; width: auto; margin: 0; display: none;">
                <span class="logo-text" style="font-size: 1.25rem;"><span class="logo-text-base">The</span><span class="logo-text-red">HG</span><span class="logo-text-base">Tech</span></span>
            </a>
        </div>
        <div class="m-header__actions">
            <button class="m-header__btn" id="m-theme-toggle-top" onclick="window.togglePilotTheme();" aria-label="Toggle Theme">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <button class="m-header__btn" data-action="command-palette" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </button>
            <button class="m-header__btn" id="m-hamburger-btn" aria-label="Menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
        </div>
    </header>

    <!-- Fullscreen Mobile Menu Overlay -->
    <div class="m-menu-overlay m-only" id="m-menu-overlay">
        <div class="m-menu-header">
            <span style="font-size: 1.15rem; font-weight: 700;">Navigation</span>
            <button class="m-menu-close" id="m-menu-close-btn" aria-label="Close Menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
        </div>
        <div class="m-menu-content">
            <div class="m-menu-section">
                <div class="m-menu-title">Intelligence</div>
                <a href="/threat-intel.html" class="m-menu-link">Threat Intel</a>
                <a href="/cve-tracker.html" class="m-menu-link">CVE Tracker</a>
                <a href="/hacker-chatter.html" class="m-menu-link">Hacker Chatter</a>
                <a href="/ransomware-tracker.html" class="m-menu-link">Ransomware</a>
            </div>
            <div class="m-menu-section">
                <div class="m-menu-title">Resources</div>
                <a href="/articles.html" class="m-menu-link">Research Library (Articles)</a>
                <a href="/guides/" class="m-menu-link">Security Guides</a>
                <a href="/comparisons/" class="m-menu-link">Tool Comparisons</a>
            </div>
            <div class="m-menu-section">
                <div class="m-menu-title">Tools</div>
                <a href="/tools/grc-assessment/" class="m-menu-link">GRC Assessment</a>
                <a href="/workflows/" class="m-menu-link">n8n Workflows</a>
            </div>
            <div class="m-menu-section">
                <div class="m-menu-title">Settings</div>
                <button class="m-menu-theme-btn" onclick="window.togglePilotTheme(); if(typeof updateMenuThemeLabel === 'function') updateMenuThemeLabel();">
                    <span id="m-menu-theme-text">Toggle Reading Theme</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Search Overlay -->
    <div class="m-search-overlay m-only">
        <div class="m-search-overlay__header">
            <input type="text" class="m-search-overlay__input" placeholder="Search news, CVEs, guides..." aria-label="Search site">
            <button class="m-search-overlay__cancel">Cancel</button>
        </div>
        <div class="m-search-overlay__results"></div>
    </div>

    <!-- Desktop Canonical Header -->
    <header class="header" role="banner">
        <div class="header-content">
            <div class="logo">
                <a href="/" style="text-decoration: none; display: flex; align-items: center; gap: 0.75rem;">
                    <img src="/assets/brand/svg/hg-symbol.svg" alt="TheHGTech Logo" class="logo-img logo-dark" width="33" height="40">
                    <img src="/assets/brand/svg/hg-symbol-light.svg" alt="TheHGTech Logo" class="logo-img logo-light" width="33" height="40">
                    <span class="logo-text"><span class="logo-text-base">The</span><span class="logo-text-red">HG</span><span class="logo-text-base">Tech</span></span>
                </a>
            </div>

            <nav class="nav nav-modern" role="navigation" aria-label="Primary Navigation">
                <a href="/">Home</a>

                <div class="nav-dropdown">
                    <span class="nav-dropdown-trigger">
                        Intelligence
                        <span class="nav-live-badge">LIVE</span>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:3px;" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                    <div class="nav-dropdown-panel">
                        <a href="/threat-intel.html" class="dropdown-item">
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">Threat Intelligence <span class="dropdown-badge live">LIVE</span></div>
                                <div class="dropdown-item-desc">Live IOCs from 9 trusted feeds, updated every 4 hours</div>
                            </div>
                        </a>
                        <a href="/cve-tracker.html" class="dropdown-item">
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">CVE Tracker</div>
                                <div class="dropdown-item-desc">CISA KEV + NVD critical vulnerabilities with EPSS scores</div>
                            </div>
                        </a>
                        <a href="/ransomware-tracker.html" class="dropdown-item">
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">Ransomware Tracker</div>
                                <div class="dropdown-item-desc">Track active ransomware groups and victims</div>
                            </div>
                        </a>
                        <a href="/hacker-chatter.html" class="dropdown-item">
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">Hacker Chatter <span class="dropdown-badge">NEW</span></div>
                                <div class="dropdown-item-desc">Searchable data breach &amp; cyber incident database</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="nav-dropdown">
                    <span class="nav-dropdown-trigger">
                        Resources
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:3px;" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                    <div class="nav-dropdown-panel">
                        <a href="/articles.html" class="dropdown-item">
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">Research Library <span class="dropdown-badge popular">197+</span></div>
                                <div class="dropdown-item-desc">Security research, vulnerability investigations &amp; threat reports</div>
                            </div>
                        </a>
                        <a href="/guides/" class="dropdown-item">
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">Security Guides <span class="dropdown-badge popular">40+</span></div>
                                <div class="dropdown-item-desc">ISO 27001, NIST, SOC2, incident response &amp; detection manuals</div>
                            </div>
                        </a>
                        <a href="/workflows/" class="dropdown-item">
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">n8n Workflows</div>
                                <div class="dropdown-item-desc">Security automation templates</div>
                            </div>
                        </a>
                        <a href="/comparisons/" class="dropdown-item">
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">Tool Comparisons</div>
                                <div class="dropdown-item-desc">EDR, SIEM, and security tool head-to-head reviews</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="nav-dropdown">
                    <span class="nav-dropdown-trigger">
                        Tools
                        <span class="nav-live-badge" style="background: rgba(16, 185, 129, 0.2); color: #10B981; margin-left:4px;">NEW</span>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:3px;" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                    <div class="nav-dropdown-panel" style="min-width: 240px;">
                        <a href="/tools/grc-assessment/" class="dropdown-item">
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title" style="color: #10B981;">ISO 27001 GRC Tool</div>
                                <div class="dropdown-item-desc">Interactive scope builder &amp; gap assessment</div>
                            </div>
                        </a>
                    </div>
                </div>

                <a href="/about.html">About</a>

                <div style="display: flex; gap: 10px; margin-left: 12px; border-left: 1px solid rgba(148,163,184,0.25); padding-left: 14px; align-items: center;">
                    <a href="https://x.com/thehgtech" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X" style="color: var(--ap-ink-secondary); display:inline-flex;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://linkedin.com/company/thehgtech" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" style="color: var(--ap-ink-secondary); display:inline-flex;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                </div>

                <button class="desktop-search-btn" data-action="command-palette" aria-label="Search" title="Search (Cmd+K)" style="margin-left: 14px; display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 50%; color: inherit; cursor: pointer;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                </button>
                <button class="m-theme-toggle" id="themeToggle" onclick="window.togglePilotTheme()" aria-label="Toggle Theme" style="margin-left: 12px; display: inline-flex; position: relative; width: 54px; height: 28px; background: linear-gradient(135deg, #1a1a2e, #16213e); border: 1.5px solid rgba(255, 255, 255, 0.15); border-radius: 50px; cursor: pointer;">
                    <span class="m-theme-toggle__thumb" style="position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: linear-gradient(135deg, #c0c0c0, #e8e8e8); border-radius: 50%; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); transition: all 0.3s ease;"></span>
                </button>
            </nav>

            <button class="mobile-menu-btn" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <!-- Sticky Secondary Editorial Sub-Navigation & Reading Comfort Bar -->
    <div class="ap-subnav-shell" role="region" aria-label="Article Navigation and Reading Controls">
        <div class="ap-subnav-bar">
            <div class="ap-subnav-left">
                <a href="/articles.html" class="ap-back-library">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    <span>Research Library</span>
                </a>
                <span class="ap-series-tag">
                    <span class="ap-series-dot" aria-hidden="true"></span>
                    <span>{html.escape(series_label)}</span>
                </span>
            </div>
            <div class="ap-reader-toolbar" role="group" aria-label="Reading comfort controls">
                <button type="button" class="ap-reader-btn" data-scale="compact" onclick="window.setArticleReaderScale('compact')" aria-pressed="false" title="Compact font size">A-</button>
                <button type="button" class="ap-reader-btn active" data-scale="default" onclick="window.setArticleReaderScale('default')" aria-pressed="true" title="Default font size">A</button>
                <button type="button" class="ap-reader-btn" data-scale="large" onclick="window.setArticleReaderScale('large')" aria-pressed="false" title="Large font size">A+</button>
                <span class="ap-toolbar-sep" aria-hidden="true"></span>
                <button type="button" class="ap-reader-btn" onclick="window.togglePilotTheme()" aria-label="Switch reading surface theme">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>
                    <span id="apThemeLabel">Paper</span>
                </button>
            </div>
        </div>
    </div>"""


def build_share_cluster_html() -> str:
    return """<div class="ap-share-cluster" role="group" aria-label="Share or print article">
                        <button type="button" class="ap-icon-btn" onclick="window.sharePilotX(event)" aria-label="Share on X" title="Share on X">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </button>
                        <button type="button" class="ap-icon-btn" onclick="window.sharePilotLinkedIn(event)" aria-label="Share on LinkedIn" title="Share on LinkedIn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </button>
                        <button type="button" class="ap-icon-btn" onclick="window.copyPilotCanonicalLink(this)" aria-label="Copy canonical link" title="Copy canonical link">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                        </button>
                        <button type="button" class="ap-icon-btn" onclick="window.print()" aria-label="Print article" title="Print article">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
                        </button>
                    </div>"""


def build_interaction_bar_html(slug: str) -> str:
    return f"""                    <!-- Interaction Bar (Triggers Newsletter & GraphComment Discussion) -->
                    <div class="interaction-bar" data-article-id="{slug}">
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
                            <button onclick="window.print()" class="print-btn" title="Print Article" aria-label="Print Article">
                                <i class="fas fa-print"></i>
                            </button>
                        </div>
                    </div>"""


def build_lightbox_and_footer() -> str:
    return """    <!-- Mobile Quick-Jump TOC Pill -->
    <button type="button" id="apMobileJumpPill" class="ap-mobile-jump-pill" onclick="window.jumpToMobileToc()" aria-label="Jump to Table of Contents">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        <span>Contents</span>
    </button>

    <!-- Native Light-Dismiss Technical Diagram Lightbox -->
    <dialog id="apLightbox" class="ap-lightbox" closedby="any" aria-label="Technical diagram viewer">
        <div class="ap-lightbox-inner">
            <div class="ap-lightbox-bar">
                <span id="apLightboxCaption">Technical Architecture Diagram</span>
                <form method="dialog" style="margin:0;">
                    <button type="submit" class="ap-lightbox-close" aria-label="Close diagram viewer">ESC · Close</button>
                </form>
            </div>
            <div class="ap-lightbox-body">
                <img id="apLightboxImg" alt="">
            </div>
        </div>
    </dialog>

    <!-- Screen Reader Live Status Region -->
    <div id="apLiveStatus" role="status" aria-live="polite" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);"></div>

    <!-- Canonical Multi-Column Footer -->
    <footer class="footer" role="contentinfo">
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="/" class="footer-brand-logo" aria-label="TheHGTech Home">
                        <img src="/assets/brand/svg/hg-symbol.svg" alt="" width="28" height="34" class="logo-dark">
                        <img src="/assets/brand/svg/hg-symbol-light.svg" alt="" width="28" height="34" class="logo-light">
                        <span class="logo-text" style="margin-left: 10px; font-weight: 800; font-size: 1.25rem;">
                            <span class="logo-text-base">The</span><span class="logo-text-red">HG</span><span class="logo-text-base">Tech</span>
                        </span>
                    </a>
                    <p class="footer-tagline">
                        Independent security research, practitioner field manuals, and live vulnerability intelligence.
                    </p>
                    <div class="footer-social-row">
                        <a href="https://x.com/thehgtech" class="footer-social-icon" target="_blank" rel="noopener noreferrer" aria-label="Follow TheHGTech on X">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://linkedin.com/company/thehgtech" class="footer-social-icon" target="_blank" rel="noopener noreferrer" aria-label="Follow TheHGTech on LinkedIn">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="https://facebook.com/thehgtech" class="footer-social-icon" target="_blank" rel="noopener noreferrer" aria-label="Follow TheHGTech on Facebook">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/></svg>
                        </a>
                        <a href="https://youtube.com/@thehgtech" class="footer-social-icon" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to TheHGTech on YouTube">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4>Navigation</h4>
                    <ul class="footer-links">
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/articles.html">Research Library</a></li>
                        <li><a href="/cve-tracker.html">CVE Alerts</a></li>
                        <li><a href="/guides/">Security Guides</a></li>
                        <li><a href="/comparisons/">Tool Comparisons</a></li>
                        <li><a href="/about.html">About</a></li>
                    </ul>
                </div>

                <div class="footer-col">
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

                <div class="footer-col">
                    <h4>Publication</h4>
                    <ul class="footer-links">
                        <li><a href="/about.html">Editorial Standards</a></li>
                        <li><a href="/rss.xml">RSS Feed</a></li>
                        <li><a href="/privacy.html">Privacy Policy</a></li>
                        <li><a href="/contact.html">Contact Editorial</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Recent Research</h4>
                    <ul class="footer-links">
                        <li><a href="/articles/beyond-the-headlines-cybersecurity-incident-readiness-2026.html">Incident Readiness Playbook</a></li>
                        <li><a href="/articles/forticlient-ems-zero-day-cve-2026-35616.html">FortiClient EMS Zero-Day CVE</a></li>
                        <li><a href="/articles/emudhra-ca-key-entropy-failure-2026.html">eMudhra WebPKI Entropy Failure</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-live-intel">
                <div class="footer-live-intel-info">
                    <span class="footer-live-badge">Live</span>
                    <strong>CYBER THREAT INTELLIGENCE PLATFORM</strong>
                    <span class="footer-live-text">Automated IoC aggregation updated every 4 hours across ThreatFox, URLhaus, and Feodo Tracker.</span>
                </div>
                <a href="/threat-intel.html" class="footer-live-link">View Live Dashboard &rarr;</a>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 TheHGTech. All rights reserved. Independent Cybersecurity Research &amp; Field Manuals.</p>
            </div>
        </div>
    </footer>

    <!-- Core Site & Article Reader Scripts -->
    <script src="/header-dropdown.min.js" defer></script>
    <script src="/command-palette.js" defer></script>
    <script src="/mobile-nav.js" defer></script>
    <script src="/theme-toggle.js" defer></script>
    <script src="/interaction-bar.min.js?v=20260623" defer></script>
    <script src="/js/article-editorial.js?v=1.0" defer></script>"""


def build_code_block_html(lang_label: str, lang_key: str, title: str, raw_code: str, note_html: str = "") -> str:
    escaped = html.escape(raw_code.strip("\n"))
    note_part = f'\n<div class="ap-code-note">{note_html}</div>' if note_html else ""
    return f"""<div class="ap-code-block">
    <div class="ap-code-header">
        <div class="ap-code-meta">
            <span class="ap-code-lang" data-lang="{html.escape(lang_key)}">{html.escape(lang_label)}</span>
            <span class="ap-code-title">{html.escape(title)}</span>
        </div>
        <div class="ap-code-actions">
            <button type="button" class="ap-code-btn" data-action="wrap-code" aria-pressed="false">Wrap</button>
            <button type="button" class="ap-code-btn" data-action="copy-code" aria-label="Copy code block">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                <span>Copy</span>
            </button>
        </div>
    </div>
    <pre><code>{escaped}</code></pre>{note_part}
</div>"""


def build_related_section(current_slug: str, current_cat: str) -> str:
    candidates = [
        a for a in articles_db
        if a.get("externalUrl") and a.get("id") != current_slug and not a.get("externalUrl", "").endswith(f"/{current_slug}.html")
    ]
    # Prioritize matching category, then others
    same_cat = [a for a in candidates if (a.get("category") or "").lower() == current_cat.lower()]
    diff_cat = [a for a in candidates if (a.get("category") or "").lower() != current_cat.lower()]
    picked = (same_cat + diff_cat)[:3]

    cards_html = []
    for a in picked:
        url = a.get("externalUrl", "").strip("/")
        if not url.startswith("http"):
            url = "/" + url
        img = a.get("image", "").strip("/")
        if not img.startswith("http"):
            img = "/" + img
        cat = a.get("category", "Threat Research")
        date_str = a.get("date", "2026")
        title = a.get("title", "")
        excerpt = a.get("excerpt", "")
        author = a.get("author", "Harish G")
        read_time = a.get("readTime", "8 min read")

        cards_html.append(f"""            <a href="{html.escape(url)}" class="ap-related-card">
                <div class="ap-related-thumb">
                    <img src="{html.escape(img)}" alt="{html.escape(title)}" loading="lazy">
                </div>
                <div class="ap-related-content">
                    <div class="ap-related-meta">
                        <span class="ap-pill ap-pill-category">{html.escape(cat)}</span>
                        <span>{html.escape(date_str)}</span>
                    </div>
                    <h3 class="ap-related-title">{html.escape(title)}</h3>
                    <p class="ap-related-excerpt">{html.escape(excerpt)}</p>
                    <div class="ap-related-footer">
                        <span>By {html.escape(author)}</span>
                        <span>{html.escape(read_time)} &rarr;</span>
                    </div>
                </div>
            </a>""")

    joined_cards = "\n".join(cards_html)
    return f"""    <!-- Contextual Related Research Section -->
    <section class="ap-related-section" aria-label="Related Research & Field Manuals">
        <div class="ap-related-inner">
            <div class="ap-related-header">
                <div class="ap-related-kicker">Peer Analysis &amp; Investigation Manuals</div>
                <h2 class="ap-related-heading">Related Security Research</h2>
            </div>
            <div class="ap-related-grid">
{joined_cards}
            </div>
        </div>
    </section>"""


def detect_code_lang(code_text: str, classes: list) -> tuple:
    cls_str = " ".join(classes).lower()
    if "powershell" in cls_str or "ps1" in cls_str:
        return "POWERSHELL", "powershell"
    if "kql" in cls_str or "kusto" in cls_str:
        return "KQL", "kql"
    if "sigma" in cls_str:
        return "SIGMA", "sigma"
    if "yara" in cls_str:
        return "YARA", "yara"
    if "python" in cls_str:
        return "PYTHON", "python"
    if "bash" in cls_str or "sh" in cls_str:
        return "BASH", "bash"
    if "sql" in cls_str:
        return "SQL", "sql"
    if "json" in cls_str or (code_text.strip().startswith("{") and code_text.strip().endswith("}")):
        return "JSON", "json"
    if "title:" in code_text and "logsource:" in code_text:
        return "SIGMA", "sigma"
    if "rule " in code_text and "strings:" in code_text and "condition:" in code_text:
        return "YARA", "yara"
    if any(k in code_text for k in ["DeviceProcessEvents", "SecurityEvent", "SigninLogs", "| where "]):
        return "KQL", "kql"
    if any(k in code_text for k in ["Get-WinEvent", "$_", "Set-ItemProperty", "Invoke-"]):
        return "POWERSHELL", "powershell"
    return "CODE", "code"


def process_single_article(file_path: Path) -> dict:
    slug = file_path.stem
    with open(file_path, "r", encoding="utf-8") as f:
        raw_html = f.read()

    # Match in DB
    meta_db = by_slug.get(slug) or by_url.get(file_path.name) or {}

    # Extract Title
    title_match = re.search(r"<title>(.*?)</title>", raw_html, re.IGNORECASE | re.DOTALL)
    title_raw = title_match.group(1).strip() if title_match else meta_db.get("title", slug)
    clean_title = re.sub(r"\s*\|\s*TheHGTech.*$", "", title_raw).strip()

    # Extract Meta Description
    desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', raw_html, re.IGNORECASE)
    meta_desc = desc_match.group(1).strip() if desc_match else meta_db.get("excerpt", "")

    # Extract Keywords
    kw_match = re.search(r'<meta\s+name=["\']keywords["\']\s+content=["\'](.*?)["\']', raw_html, re.IGNORECASE)
    meta_kw = kw_match.group(1).strip() if kw_match else (", ".join(meta_db.get("tags", [])) if meta_db.get("tags") else "cybersecurity, threat intelligence, security research")

    # Extract Canonical URL
    canon_match = re.search(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', raw_html, re.IGNORECASE)
    canonical_url = canon_match.group(1).strip() if canon_match else f"https://thehgtech.com/articles/{file_path.name}"

    # Extract all JSON-LD blocks
    ld_blocks = re.findall(r'<script\s+type=["\']application/ld\+json["\']\s*>.*?</script>', raw_html, re.DOTALL | re.IGNORECASE)
    ld_scripts_html = "\n    ".join(ld_blocks)

    # Check for Mermaid / Prism
    has_mermaid = "mermaid.min.js" in raw_html or 'class="mermaid"' in raw_html
    has_prism = "prism.min.js" in raw_html or "prism.js" in raw_html

    # Parse DOM
    root = parse_html(raw_html)

    # Find the article body container: <article>, or <div class="article-content">, or <main>
    article_node = root.find_first(tag="article")
    if not article_node:
        article_node = root.find_first(cls="article-content")
    if not article_node:
        article_node = root.find_first(tag="main")
    if not article_node:
        article_node = root.find_first(tag="body")

    # Extract H1 if present
    h1_node = article_node.find_first(tag="h1")
    article_h1 = h1_node.get_text().strip() if h1_node else clean_title

    # Extract Standfirst / Subtitle / Excerpt
    subtitle_node = article_node.find_first(cls="article-subtitle") or article_node.find_first(cls="standfirst") or article_node.find_first(cls="subtitle")
    if subtitle_node:
        standfirst_text = subtitle_node.get_text().strip()
        subtitle_node.remove()
    else:
        standfirst_text = meta_desc or meta_db.get("excerpt", "")

    # Extract Hero Image
    hero_img_src = ""
    featured_img_node = article_node.find_first(cls="featured-image")
    if featured_img_node:
        img_inside = featured_img_node.find_first(tag="img")
        if img_inside and img_inside.attrs.get("src"):
            hero_img_src = img_inside.attrs["src"]
        featured_img_node.remove()

    if not hero_img_src:
        # Fallback to metadata
        hero_img_src = meta_db.get("image", "")

    if not hero_img_src:
        # Fallback to first img inside article
        first_img = article_node.find_first(tag="img")
        if first_img and first_img.attrs.get("src"):
            hero_img_src = first_img.attrs["src"]

    # Normalize image path to root-relative
    if hero_img_src and not hero_img_src.startswith("http") and not hero_img_src.startswith("/"):
        hero_img_src = "/" + hero_img_src

    # Category & Tags
    category = meta_db.get("category", "")
    if not category:
        cat_badge = article_node.find_first(cls="category") or article_node.find_first(cls="article-category") or article_node.find_first(cls="badge")
        if cat_badge:
            category = cat_badge.get_text().strip()
    if not category:
        category = "Cybersecurity Analysis"

    # Date
    date_str = meta_db.get("date", "")
    if not date_str:
        time_node = article_node.find_first(tag="time")
        if time_node:
            date_str = time_node.get_text().strip()
    if not date_str:
        date_str = "Recent Research"

    # Author
    author = meta_db.get("author", "Harish G")
    read_time = meta_db.get("readTime", "8 min read")

    # Clean the article tree
    # 1. Remove all inline <style> tags
    for s in article_node.find_all(tag="style"):
        s.remove()

    # 2. Remove any existing header/nav elements inside <article>
    for h in article_node.find_all(tag=["header", "nav"]):
        h.remove()

    # 3. Remove existing back links, duplicate author bylines, and breadcrumbs
    for n in article_node.find_all(tag=True):
        if n.has_class("back-link") or n.has_class("back-btn") or n.has_class("breadcrumbs") or n.has_class("breadcrumb") or n.has_class("article-meta") or n.has_class("author-bio"):
            n.remove()
        elif n.has_class("interaction-bar") or n.has_class("graphcomment-wrapper") or n.attrs.get("id") == "graphcomment" or n.attrs.get("id") == "hg-newsletter-global":
            n.remove()
        elif n.has_class("related-articles") or n.has_class("related-section") or n.has_class("toc-container") or n.has_class("table-of-contents"):
            n.remove()

    # 4. Remove H1 tag if still inside
    if h1_node and h1_node in article_node.children:
        h1_node.remove()
    for extra_h1 in article_node.find_all(tag="h1"):
        extra_h1.remove()

    # 5. Remove font-awesome <i> outside code
    for i_tag in article_node.find_all(tag="i"):
        i_tag.remove()

    # 6. Normalize relative links
    for a_tag in article_node.find_all(tag="a"):
        href = a_tag.attrs.get("href", "")
        if href in ("/", "/index.html", "index.html", "homepage-experiment.html"):
            a_tag.attrs["href"] = "/"
        elif href in ("/articles.html", "articles.html", "articles-experiment.html"):
            a_tag.attrs["href"] = "/articles.html"

    # 7. Strip hardcoded inline styles
    for elem in article_node.find_all(tag=True):
        if "style" in elem.attrs:
            del elem.attrs["style"]

    # 8. Transform code blocks (<pre>)
    for pre in article_node.find_all(tag="pre"):
        code_el = pre.find_first(tag="code")
        raw_code = code_el.get_text() if code_el else pre.get_text()
        classes = pre.classes() + (code_el.classes() if code_el else [])
        lang_label, lang_key = detect_code_lang(raw_code, classes)
        code_block_html = build_code_block_html(lang_label, lang_key, f"{lang_label} Artifact", raw_code)
        pre.replace_with(raw_node(code_block_html))

    # 9. Transform tables (Wrap in .table-wrapper.ap-stackable)
    for table in article_node.find_all(tag="table"):
        thead = table.find_first(tag="thead")
        th_list = thead.find_all(tag="th") if thead else []
        col_count = len(th_list)
        is_stackable = 2 <= col_count <= 5

        if is_stackable:
            tbody = table.find_first(tag="tbody")
            if tbody:
                for tr in tbody.find_all(tag="tr", recursive=False):
                    cells = [c for c in tr.children if c.tag in ("td", "th")]
                    if cells and cells[0].tag == "td":
                        cells[0].tag = "th"

        tbl_classes = ["table-wrapper"]
        if is_stackable:
            tbl_classes.append("ap-stackable")
        tbl_html = f'<div class="{" ".join(tbl_classes)}">\n{table.to_html()}\n</div>'
        table.replace_with(raw_node(tbl_html))

    # 10. Transform technical diagram images (<figure> with zoom lightbox)
    for img in article_node.find_all(tag="img"):
        src = img.attrs.get("src", "")
        alt = img.attrs.get("alt", "Technical Architecture Diagram")
        if not src.startswith("http") and not src.startswith("/"):
            src = "/" + src
        if any(ext in src.lower() for ext in [".svg", ".png", ".jpg", ".webp"]):
            caption_text = alt
            fig_html = f"""<figure class="ap-diagram-figure">
                <button type="button" class="ap-tech-img-btn" aria-label="Expand diagram {html.escape(alt)}">
                    <img src="{html.escape(src)}" alt="{html.escape(alt)}" loading="lazy">
                    <span class="ap-diagram-badge">Click to Inspect &rarr;</span>
                </button>
                <figcaption>{html.escape(caption_text)}</figcaption>
            </figure>"""
            img.replace_with(raw_node(fig_html))

    # 11. Group content by <h2> into semantic <section id="sec-N">
    prose_children = list(article_node.children)
    sections = []
    current_sec_id = "sec-overview"
    current_sec_title = "Overview"
    current_sec_nodes = []
    toc_entries = []

    sec_idx = 0
    for child in prose_children:
        if child.tag == "h2":
            # Save previous section if it had content
            if current_sec_nodes:
                sections.append((current_sec_id, current_sec_title, current_sec_nodes))
                current_sec_nodes = []
            sec_idx += 1
            current_sec_id = f"sec-{sec_idx}"
            heading_txt = child.get_text().strip()
            # Clean heading: strip emojis or numbers if present
            clean_heading = re.sub(r"^[\u2600-\u27BF\U0001f300-\U0001faff\d\.\s]+", "", heading_txt).strip()
            current_sec_title = f"{sec_idx}. {clean_heading}"
            child.raw_html = f"<h2>{html.escape(current_sec_title)}</h2>"
            toc_entries.append((current_sec_id, current_sec_title))
            current_sec_nodes.append(child)
        else:
            current_sec_nodes.append(child)

    if current_sec_nodes:
        sections.append((current_sec_id, current_sec_title, current_sec_nodes))

    # Build sections HTML
    sections_html = []
    for sid, stitle, snodes in sections:
        inner = "".join(n.to_html() for n in snodes)
        sections_html.append(f'<section id="{sid}">\n{inner}\n</section>')
    prose_body_html = "\n\n".join(sections_html)

    # Build TOC navigation links
    if not toc_entries:
        toc_entries = [("sec-overview", "1. Detailed Analysis")]
        prose_body_html = f'<section id="sec-overview">\n{prose_body_html}\n</section>'

    desktop_toc_links = "\n                            ".join(
        f'<a href="#{sid}">{html.escape(label)}</a>' for sid, label in toc_entries
    )
    mobile_toc_links = "\n                    ".join(
        f'<li><a href="#{sid}">{html.escape(label)}</a></li>' for sid, label in toc_entries
    )

    # Byline and Kicker Pills
    author_initials = "".join([part[0] for part in author.split() if part])[:2].upper() or "HG"

    # Assemble Full Article Page
    page_html = f"""<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

    <!-- Preserved Production SEO Meta Tags & Canonical URL -->
    <title>{html.escape(clean_title)} | TheHGTech</title>
    <meta name="description" content="{html.escape(meta_desc)}">
    <meta name="keywords" content="{html.escape(meta_kw)}">
    <meta name="author" content="{html.escape(author)}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="{html.escape(canonical_url)}">

    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="{html.escape(canonical_url)}">
    <meta property="og:title" content="{html.escape(clean_title)}">
    <meta property="og:description" content="{html.escape(meta_desc)}">
    <meta property="og:image" content="https://thehgtech.com{html.escape(hero_img_src)}">
    <meta property="og:site_name" content="TheHGTech">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{html.escape(clean_title)}">
    <meta name="twitter:description" content="{html.escape(meta_desc)}">
    <meta name="twitter:image" content="https://thehgtech.com{html.escape(hero_img_src)}">

    <!-- Preserved Structured Data (TechArticle, NewsArticle, Breadcrumbs, etc.) -->
    {ld_scripts_html}

{build_common_head_assets(has_mermaid)}
</head>

<body class="article-pilot">
{build_site_header_and_subnav("THEHGTECH // SECURITY RESEARCH MONOGRAPH")}

    <main id="main-content" class="ap-main">
        <article itemscope itemtype="https://schema.org/NewsArticle">
            <!-- Article Header & Metadata Ledger -->
            <header class="ap-article-header">
                <nav aria-label="Breadcrumb">
                    <ol class="ap-breadcrumbs">
                        <li><a href="/">Home</a></li>
                        <li aria-hidden="true">/</li>
                        <li><a href="/articles.html">Research Library</a></li>
                        <li aria-hidden="true">/</li>
                        <li aria-current="page">{html.escape(category)}</li>
                    </ol>
                </nav>

                <div class="ap-kicker-row">
                    <span class="ap-pill ap-pill-category">{html.escape(category)}</span>
                    <span class="ap-pill">Independent Research</span>
                    <span class="ap-pill ap-pill-emerald">Verified Analysis</span>
                </div>

                <h1 class="ap-title" itemprop="headline">{html.escape(article_h1)}</h1>

                <p class="ap-standfirst" itemprop="description">
                    {html.escape(standfirst_text)}
                </p>

                <div class="ap-byline-ledger">
                    <div class="ap-byline-author">
                        <div class="ap-author-avatar" aria-hidden="true">{html.escape(author_initials)}</div>
                        <div class="ap-byline-cell">
                            <span class="ap-byline-label">Lead Author</span>
                            <span class="ap-byline-val"><a href="/about.html" rel="author">{html.escape(author)}</a></span>
                            <span class="ap-byline-sub">TheHGTech Security Research Team</span>
                        </div>
                    </div>
                    <div class="ap-byline-cell">
                        <span class="ap-byline-label">Published</span>
                        <time class="ap-byline-val" datetime="{html.escape(date_str)}" itemprop="datePublished">{html.escape(date_str)}</time>
                        <span class="ap-byline-sub">Peer Reviewed &amp; Field Verified</span>
                    </div>
                    <div class="ap-byline-cell">
                        <span class="ap-byline-label">Reading Scope</span>
                        <span class="ap-byline-val">{html.escape(read_time)}</span>
                        <span class="ap-byline-sub">{len(toc_entries)} Technical Sections</span>
                    </div>
                    {build_share_cluster_html()}
                </div>
            </header>

            <!-- LCP-Optimized 16:9 Featured Hero Figure -->
            <figure class="ap-hero-figure">
                <div class="ap-hero-img-wrap">
                    <img src="{html.escape(hero_img_src)}"
                         alt="{html.escape(clean_title)}"
                         width="1200"
                         height="675"
                         fetchpriority="high"
                         decoding="async">
                </div>
                <figcaption class="ap-hero-caption">
                    <span>FIG // Technical investigation &amp; adversary telemetry breakdown.</span>
                    <span>THEHGTECH RESEARCH ARCHIVE</span>
                </figcaption>
            </figure>

            <!-- Mobile & Tablet Collapsible Table of Contents -->
            <details class="ap-mobile-toc">
                <summary>
                    <span>On This Page ({len(toc_entries)} Sections)</span>
                    <svg class="ap-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                </summary>
                <ol class="ap-mobile-toc-list">
                    {mobile_toc_links}
                </ol>
            </details>

            <!-- 3-Zone Monograph Workspace (Sticky TOC + 70ch Prose + Dossier Rail) -->
            <div class="ap-workspace">
                <aside class="ap-toc-rail" aria-label="Article Table of Contents">
                    <div class="ap-toc-header">
                        <span>On This Page</span>
                        <span id="apTocPct" class="ap-toc-pct">0%</span>
                    </div>
                    <div class="ap-toc-scroller">
                        <div class="ap-sentinel-top" aria-hidden="true"></div>
                        <div class="ap-scroll-hint-top" aria-hidden="true"></div>
                        <nav class="ap-toc-nav" aria-label="Section links">
                            {desktop_toc_links}
                        </nav>
                        <div class="ap-scroll-hint-bottom" aria-hidden="true"></div>
                        <div class="ap-sentinel-bottom" aria-hidden="true"></div>
                    </div>
                </aside>

                <div class="ap-prose" itemprop="articleBody">
{prose_body_html}

                    <div class="ap-article-footer-bar">
                        <div>
                            <div class="ap-byline-label">Canonical Reference</div>
                            <div class="ap-byline-sub">{html.escape(canonical_url.replace("https://", ""))}</div>
                        </div>
                        {build_share_cluster_html()}
                    </div>

                    <div class="ap-author-card">
                        <div class="ap-author-avatar" aria-hidden="true">{html.escape(author_initials)}</div>
                        <div>
                            <div class="ap-byline-label">About the Author</div>
                            <div class="ap-byline-val" style="margin:0.15rem 0 0.35rem;"><a href="/about.html">{html.escape(author)}</a> — Independent Security Researcher</div>
                            <p style="margin:0;font-size:0.88rem;line-height:1.6;color:var(--ap-ink-secondary);">
                                Independent vulnerability researcher and defensive architect focusing on enterprise detection engineering, WebPKI trust infrastructure, CISA KEV triage, and practitioner field manuals at TheHGTech.
                            </p>
                        </div>
                    </div>

{build_interaction_bar_html(slug)}
                </div>

                <!-- Right Sticky Technical Dossier Rail -->
                <aside class="ap-dossier-rail" aria-label="Technical Dossier and Research Navigation">
                    <div class="ap-rail-card">
                        <h2 class="ap-rail-title">Research Dossier</h2>
                        <dl class="ap-rail-kv">
                            <div><dt>Category</dt><dd>{html.escape(category)}</dd></div>
                            <div><dt>Publication</dt><dd>{html.escape(date_str)}</dd></div>
                            <div><dt>Sections</dt><dd>{len(toc_entries)} Technical Parts</dd></div>
                            <div><dt>Verification</dt><dd>Primary Sources</dd></div>
                            <div><dt>TLP Classification</dt><dd>TLP:CLEAR</dd></div>
                        </dl>
                    </div>

                    <div class="ap-rail-card">
                        <h2 class="ap-rail-title">Live Security Tools</h2>
                        <div class="ap-rail-links">
                            <a href="/threat-intel.html" class="ap-rail-link">
                                <span class="ap-rail-link-kicker">Live Feed</span>
                                <span class="ap-rail-link-title">Threat Intelligence Platform (4h Updates)</span>
                            </a>
                            <a href="/cve-tracker.html" class="ap-rail-link">
                                <span class="ap-rail-link-kicker">Advisory Feed</span>
                                <span class="ap-rail-link-title">CISA KEV + EPSS Exploited Vulnerabilities</span>
                            </a>
                            <a href="/tools/grc-assessment/" class="ap-rail-link">
                                <span class="ap-rail-link-kicker">Compliance</span>
                                <span class="ap-rail-link-title">ISO 27001 GRC Assessment Tool</span>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    </main>

{build_related_section(slug, category)}

{build_lightbox_and_footer()}
</body>

</html>"""

    # Write back to file
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(page_html)

    return {
        "slug": slug,
        "title": clean_title,
        "toc_count": len(toc_entries),
        "category": category,
        "has_mermaid": has_mermaid,
        "has_prism": has_prism,
    }


def main():
    html_files = sorted(ARTICLES_DIR.glob("*.html"))
    print(f"Found {len(html_files)} standalone article HTML files to migrate.")

    success_count = 0
    errors = []

    for idx, fpath in enumerate(html_files, 1):
        try:
            res = process_single_article(fpath)
            success_count += 1
            print(f"[{idx:3d}/{len(html_files)}] Migrated {fpath.name} ({res['toc_count']} TOC sections, {res['category']})")
        except Exception as e:
            errors.append((fpath.name, str(e)))
            print(f"[{idx:3d}/{len(html_files)}] ERROR on {fpath.name}: {e}")

    print(f"\nMigration completed: {success_count} succeeded, {len(errors)} failed.")
    if errors:
        for fname, err in errors:
            print(f"  !! {fname}: {err}")


if __name__ == "__main__":
    main()
