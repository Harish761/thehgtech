#!/usr/bin/env python3
"""
TheHGTech Automated Technical SEO Validator (CI Gate)

Validates the published site corpus (filtered by _config.yml Jekyll rules) for:
  1. Broken internal <a href> links
  2. Missing or duplicate <title> tags (and redirect titles on indexable pages)
  3. Missing, duplicate, malformed, or apostrophe-truncated <meta name="description">
  4. Invalid canonical <link rel="canonical"> references
  5. Sitemap (sitemap.xml) and robots.txt validity, consistency, and target resolution
  6. Broken local asset references (preloads, stylesheets, scripts, body <img>, OG/Twitter images)
  7. Malformed JSON-LD syntax
  8. Unsupported/misleading structured data (hidden/boilerplate FAQPage, stub HowTo, dead SearchAction, broken author URLs)
  9. Placeholder publication dates (2025-01-01, 2026-06-30T17:12:27, unverified 2026-01-01)
 10. Invalid resource preload hints (missing as=, missing crossorigin on font preloads, missing targets)

Distinguishes ERRORS (fail CI, exit 1) from WARNINGS (reported cleanly, exit 0 unless --strict).
Respects intentional exclusions (_config.yml), noindex archives/controls, pagination, and external links.

Usage:
  python3 scripts/seo_validator.py                  # Validate current repository
  python3 scripts/seo_validator.py --root /path     # Validate custom directory/fixture
  python3 scripts/seo_validator.py --strict         # Treat warnings as failures
  python3 scripts/seo_validator.py --json           # Emit JSON report
"""

import argparse
import html as html_mod
import json
import os
import posixpath
import re
import shutil
import subprocess
import sys
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from pathlib import Path
from urllib.parse import unquote, urlsplit


SITE_HOSTS = {"thehgtech.com", "www.thehgtech.com"}

# Documented intentional exceptions (existing noindex/redirect/embed/error pages)
INTENTIONAL_NO_DESC_PATHS = {"404.html", "offline.html"}
INTENTIONAL_EMBED_PREFIXES = ("embed/",)
INTENTIONAL_REDIRECT_STUBS = {
    "articles/windows-vs-macos-endpoint-security-2026.html",
    "guides/incident-response-plan.html",
    "tools/zero-day-checker.html",
}
VERIFIED_2026_01_01_PATHS = {
    "guides/iso-27001-certification-roadmap.html",
    "guides/iso-27001-gap-analysis.html",
}
BOT_OVERRIDE_GROUPS = {
    "googlebot",
    "googlebot-image",
    "googlebot-news",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandexbot",
    "applebot",
    "gptbot",
    "ccbot",
    "anthropic-ai",
    "claude-web",
}
BOILERPLATE_FAQ_SIGNATURES = {
    "what is the latest threat intelligence on this topic?",
    "what are the main security risks with ai systems?",
    "what is a cve and why does it matter?",
    "what is ransomware and how does it work?",
    "how do data breaches and cyber attacks typically occur?",
    "how do data breaches typically occur?",
    "what is the difference between siem and soar?",
}


def norm_text(s: str) -> str:
    s = html_mod.unescape(str(s or ""))
    s = s.replace("\u2019", "'").replace("\u2018", "'").replace("\u201c", '"').replace("\u201d", '"')
    s = s.replace("\u2013", "-").replace("\u2014", "-")
    return re.sub(r"\s+", " ", s).strip().lower()


def line_number_at(content: str, offset: int) -> int:
    return content.count("\n", 0, max(0, offset)) + 1


def discover_published_files(root: Path):
    """Return the set of repo-relative paths published by GitHub Pages (_config.yml)."""
    git_dir = root / ".git"
    all_paths = []
    if git_dir.exists() and shutil.which("git"):
        try:
            tracked = subprocess.check_output(
                ["git", "-c", "core.fsmonitor=false", "ls-files"],
                cwd=root,
                text=True,
                stderr=subprocess.DEVNULL,
            ).splitlines()
            # Include existing files only
            all_paths = sorted(p for p in tracked if (root / p).is_file())
        except Exception:
            all_paths = []
    if not all_paths:
        all_paths = sorted(
            p.relative_to(root).as_posix()
            for p in root.rglob("*")
            if p.is_file() and ".git" not in p.parts
        )

    cfg_path = root / "_config.yml"
    if not cfg_path.exists():
        return set(all_paths)

    include_cfg = []
    exclude_cfg = []
    if shutil.which("ruby"):
        try:
            cfg_json = subprocess.check_output(
                [
                    "ruby",
                    "-ryaml",
                    "-rjson",
                    "-e",
                    "puts JSON.generate(YAML.safe_load(File.read(ARGV[0])) || {})",
                    str(cfg_path),
                ],
                text=True,
            )
            cfg = json.loads(cfg_json)
            include_cfg = cfg.get("include") or []
            exclude_cfg = cfg.get("exclude") or []
            ruby_sim = r"""
require 'json'
payload = JSON.parse(STDIN.read)
inc = payload['include'] || []
exc = payload['exclude'] || []
def m?(list, r)
  list.any? do |e|
    pat = e.sub(%r{\A/}, '').chomp('/')
    File.fnmatch?(pat, r) || r == pat || r.start_with?("#{pat}/")
  end
end
pub = payload['paths'].select do |r|
  parts = r.split('/')
  dot = parts.any? { |s| s.start_with?('.') || s.start_with?('_') }
  if dot
    next false unless inc.any? { |i| r == i || r.start_with?("#{i}/") }
  end
  !m?(exc, r)
end
puts JSON.generate(pub)
"""
            out = subprocess.check_output(
                ["ruby", "-e", ruby_sim],
                input=json.dumps({"paths": all_paths, "include": include_cfg, "exclude": exclude_cfg}),
                text=True,
            )
            return set(json.loads(out))
        except Exception:
            pass

    # Pure-Python fallback parser for _config.yml
    txt = cfg_path.read_text(encoding="utf-8", errors="ignore")
    section = None
    for line in txt.splitlines():
        s = line.strip()
        if not s or s.startswith("#"):
            continue
        if s.startswith("include:"):
            section = "include"
        elif s.startswith("exclude:"):
            section = "exclude"
        elif s.startswith("- "):
            val = s[2:].strip().strip("\"'")
            if section == "include":
                include_cfg.append(val)
            elif section == "exclude":
                exclude_cfg.append(val)

    pub = set()
    for rel in all_paths:
        parts = rel.split("/")
        if any(p.startswith(".") or p.startswith("_") for p in parts):
            if not any(rel == inc or rel.startswith(inc.rstrip("/") + "/") for inc in include_cfg):
                continue
        excluded = False
        for raw_pat in exclude_cfg:
            pat = raw_pat.lstrip("/").rstrip("/")
            if not pat:
                continue
            if rel == pat or rel.startswith(pat + "/"):
                excluded = True
                break
            if "*" in pat:
                rgx = "^" + re.escape(pat).replace(r"\*\*", ".*").replace(r"\*", "[^/]*") + "$"
                if re.match(rgx, rel) or re.match(rgx, parts[-1]):
                    excluded = True
                    break
        if not excluded:
            pub.add(rel)
    return pub


class SEOValidator:
    def __init__(self, root: Path):
        self.root = root.resolve()
        self.published = discover_published_files(self.root)
        self.published_html = sorted(p for p in self.published if p.endswith(".html"))
        self.errors = []
        self.warnings = []
        self.page_info = {}

    def add_error(self, code: str, file_path: str, line: int, message: str):
        self.errors.append({"severity": "ERROR", "code": code, "file": file_path, "line": line, "message": message})

    def add_warning(self, code: str, file_path: str, line: int, message: str):
        self.warnings.append({"severity": "WARNING", "code": code, "file": file_path, "line": line, "message": message})

    def _resolve_local_path(self, source_rel: str, raw_url: str, allow_dir_index: bool = True):
        url = html_mod.unescape(raw_url or "").strip()
        if not url or url.startswith(("#", "mailto:", "tel:", "javascript:", "data:", "blob:")):
            return None
        if "${" in url or "{{" in url:
            return None
        if re.match(r"^https?://", url, re.I):
            sp = urlsplit(url)
            if sp.netloc.lower() not in SITE_HOSTS:
                return None
            path = unquote(sp.path)
        elif url.startswith("//"):
            return None
        else:
            sp = urlsplit(url)
            path = unquote(sp.path)
            if not path:
                return None

        parent = posixpath.dirname(source_rel)
        if path.startswith("/"):
            resolved = posixpath.normpath(path.lstrip("/"))
        else:
            resolved = posixpath.normpath(posixpath.join(parent, path))
        if resolved in ("", "."):
            resolved = "index.html"

        candidates = [resolved]
        if allow_dir_index and (path.endswith("/") or not posixpath.splitext(resolved)[1]):
            candidates.append(posixpath.join(resolved, "index.html"))
        return candidates, resolved

    def _exists_published(self, candidates) -> bool:
        return any(c in self.published for c in candidates)

    def validate_all(self):
        title_map = defaultdict(list)

        for rel in self.published_html:
            self._validate_html_file(rel, title_map)

        # Duplicate <title> detection across indexable, non-paginated pages
        for norm_title, entries in title_map.items():
            if len(entries) > 1:
                files_str = ", ".join(f"{f}:{ln}" for f, ln in entries)
                for f, ln in entries:
                    self.add_error("DUPLICATE_TITLE", f, ln, f'Duplicate <title> across indexable pages: "{norm_title}" ({files_str})')

        self._validate_robots_txt()
        self._validate_sitemap_xml()
        return {
            "published_files": len(self.published),
            "published_html": len(self.published_html),
            "error_count": len(self.errors),
            "warning_count": len(self.warnings),
            "errors": self.errors,
            "warnings": self.warnings,
        }

    def _validate_html_file(self, rel: str, title_map: dict):
        fp = self.root / rel
        raw = fp.read_text(encoding="utf-8", errors="ignore")
        head_idx = raw.lower().find("</head>")
        head = raw[:head_idx] if head_idx != -1 else raw

        is_noindex = bool(
            re.search(r'<meta\b[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex', head, re.I)
            or re.search(r'<meta\b[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\']', head, re.I)
        )
        is_refresh = bool(re.search(r'<meta\b[^>]*http-equiv=["\']refresh["\']', head, re.I))
        is_redirect_stub = is_refresh or rel in INTENTIONAL_REDIRECT_STUBS or bool(re.search(r"<title>\s*Redirecting\b", head, re.I))
        is_embed = rel.startswith(INTENTIONAL_EMBED_PREFIXES)
        is_paginated = bool(re.match(r"^articles/page/\d+/index\.html$", rel))

        self.page_info[rel] = {
            "is_noindex": is_noindex,
            "is_redirect_stub": is_redirect_stub,
            "is_embed": is_embed,
            "is_paginated": is_paginated,
        }

        # 1. Title check
        title_matches = list(re.finditer(r"<title>(.*?)</title>", head, re.I | re.S))
        if not title_matches:
            self.add_error("MISSING_TITLE", rel, 1, "Page is missing a <title> tag")
        else:
            if len(title_matches) > 1:
                self.add_error("MULTIPLE_TITLES", rel, line_number_at(raw, title_matches[1].start()), f"Page contains {len(title_matches)} <title> tags")
            title_text = re.sub(r"\s+", " ", html_mod.unescape(title_matches[0].group(1))).strip()
            t_line = line_number_at(raw, title_matches[0].start())
            if not title_text:
                self.add_error("EMPTY_TITLE", rel, t_line, "<title> tag is empty")
            elif not is_noindex and not is_redirect_stub and not is_embed and not is_paginated and rel not in INTENTIONAL_NO_DESC_PATHS:
                if title_text.lower().startswith("redirecting"):
                    self.add_error("REDIRECT_TITLE_ON_INDEXABLE", rel, t_line, f'Indexable page has redirect title "{title_text}"')
                else:
                    title_map[title_text.lower()].append((rel, t_line))

        # 2. Meta description check (missing, duplicate, malformed, apostrophe-truncated)
        desc_matches = list(re.finditer(r'<meta\b[^>]*name=["\']description["\'][^>]*>', head, re.I | re.S))
        if not desc_matches:
            if not is_noindex and not is_redirect_stub and not is_embed and rel not in INTENTIONAL_NO_DESC_PATHS:
                self.add_error("MISSING_META_DESCRIPTION", rel, 1, "Indexable page is missing <meta name=\"description\">")
        else:
            if len(desc_matches) > 1:
                self.add_error("DUPLICATE_META_DESCRIPTION", rel, line_number_at(raw, desc_matches[1].start()), f"Page contains {len(desc_matches)} meta description tags")
            dtag = desc_matches[0].group(0)
            dline = line_number_at(raw, desc_matches[0].start())
            cm = re.search(r'content=(["\'])(.*?)\1', dtag, re.I | re.S)
            if not cm or not cm.group(2).strip():
                self.add_error("EMPTY_META_DESCRIPTION", rel, dline, "<meta name=\"description\"> has empty or unquoted content")
            else:
                raw_desc = cm.group(2)
                desc_text = re.sub(r"\s+", " ", html_mod.unescape(raw_desc)).strip()
                rest_after = dtag[cm.end() :].strip()
                if rest_after and rest_after not in (">", "/>") and not re.match(r"^(?:name|property|id|class)=", rest_after, re.I):
                    self.add_error("MALFORMED_META_DESCRIPTION", rel, dline, f"Malformed/unclosed quote in meta description tag: {dtag[:120]}")
                elif "\\u" in raw_desc:
                    self.add_error("ESCAPED_UNICODE_META_DESCRIPTION", rel, dline, f"Raw unicode escape in meta description: {desc_text[:80]}")
                elif not is_redirect_stub and not is_embed and len(desc_text) < 40:
                    self.add_error("TRUNCATED_META_DESCRIPTION", rel, dline, f'Suspiciously short/truncated meta description ({len(desc_text)} chars): "{desc_text}"')
                elif not is_redirect_stub and not is_embed and desc_text[-1] not in ".!?)":
                    last_word = desc_text.split()[-1].lower() if desc_text.split() else ""
                    if last_word in {
                        "a", "an", "the", "of", "to", "in", "for", "on", "at", "by", "with", "from", "as",
                        "and", "or", "that", "what", "here", "there", "apple", "google", "microsoft", "meta",
                        "anthropic", "openai", "korea", "iran", "taiwan", "harvard", "teams", "notepad++",
                        "shinyhunters", "vendor", "architect", "salesforce", "ibm", "uk", "year",
                    }:
                        self.add_error("TRUNCATED_META_DESCRIPTION", rel, dline, f'Meta description appears truncated mid-phrase: "{desc_text}"')

        # 3. Canonical check
        canon_matches = list(re.finditer(r'<link\b[^>]*rel=["\']canonical["\'][^>]*>', head, re.I))
        if len(canon_matches) > 1:
            self.add_error("MULTIPLE_CANONICALS", rel, line_number_at(raw, canon_matches[1].start()), f"Page has {len(canon_matches)} canonical links")
        elif canon_matches:
            ctag = canon_matches[0].group(0)
            cline = line_number_at(raw, canon_matches[0].start())
            hm = re.search(r'href=["\']([^"\']+)["\']', ctag, re.I)
            if not hm:
                self.add_error("INVALID_CANONICAL", rel, cline, "Canonical link is missing href")
            else:
                chref = hm.group(1).strip()
                if not chref.startswith("https://thehgtech.com/"):
                    self.add_error("INVALID_CANONICAL", rel, cline, f"Canonical URL must start with https://thehgtech.com/: {chref}")
                else:
                    res = self._resolve_local_path(rel, chref, allow_dir_index=True)
                    if res and not self._exists_published(res[0]):
                        self.add_error("BROKEN_CANONICAL", rel, cline, f"Canonical URL target does not exist in published site: {chref}")

        # 4. Broken internal <a href> links (outside <script>)
        # Mask scripts while keeping newline count intact for accurate line numbers
        masked = re.sub(
            r"<script\b[^>]*>.*?</script>",
            lambda m: "\n" * m.group(0).count("\n"),
            raw,
            flags=re.I | re.S,
        )
        for m in re.finditer(r'<a\b[^>]*?\bhref=(["\'])(.*?)\1', masked, re.I | re.S):
            href = m.group(2).strip()
            if "/cdn-cgi/l/email-protection" in href:
                self.add_error("CF_EMAIL_OBFUSCATION_LINK", rel, line_number_at(raw, m.start()), f"Cloudflare email-protection link found: {href}")
                continue
            res = self._resolve_local_path(rel, href, allow_dir_index=True)
            if res and not self._exists_published(res[0]):
                self.add_error("BROKEN_INTERNAL_LINK", rel, line_number_at(raw, m.start()), f"Broken internal link href={href!r} (resolved {res[1]!r})")

        # 5. Preloads, Stylesheets, Scripts, and Local Images
        for m in re.finditer(r'<link\b[^>]*rel=["\']preload["\'][^>]*>', head, re.I):
            tag = m.group(0)
            ln = line_number_at(raw, m.start())
            hm = re.search(r'href=["\']([^"\']+)["\']', tag, re.I)
            as_m = re.search(r'\bas=["\']([^"\']+)["\']', tag, re.I)
            if not as_m:
                self.add_error("INVALID_PRELOAD_HINT", rel, ln, f"Preload link missing required as= attribute: {tag[:100]}")
            elif as_m.group(1).lower() == "font" and "crossorigin" not in tag.lower():
                self.add_error("INVALID_PRELOAD_HINT", rel, ln, f"Font preload missing required crossorigin attribute: {tag[:100]}")
            if hm:
                res = self._resolve_local_path(rel, hm.group(1), allow_dir_index=False)
                if res and not self._exists_published(res[0]):
                    self.add_error("BROKEN_PRELOAD_ASSET", rel, ln, f"Broken local preload asset: {hm.group(1)}")

        for m in re.finditer(r'<link\b[^>]*rel=["\']stylesheet["\'][^>]*>', head, re.I):
            hm = re.search(r'href=["\']([^"\']+)["\']', m.group(0), re.I)
            if hm:
                res = self._resolve_local_path(rel, hm.group(1), allow_dir_index=False)
                if res and not self._exists_published(res[0]):
                    self.add_error("BROKEN_STYLESHEET", rel, line_number_at(raw, m.start()), f"Broken local stylesheet: {hm.group(1)}")

        for m in re.finditer(r'<script\b[^>]*\bsrc=["\']([^"\']+)["\']', raw, re.I):
            res = self._resolve_local_path(rel, m.group(1), allow_dir_index=False)
            if res and not self._exists_published(res[0]):
                self.add_error("BROKEN_SCRIPT_ASSET", rel, line_number_at(raw, m.start()), f"Broken local script asset: {m.group(1)}")

        for m in re.finditer(r'<img\b[^>]*\bsrc=["\']([^"\']+)["\']', masked, re.I):
            res = self._resolve_local_path(rel, m.group(1), allow_dir_index=False)
            if res and not self._exists_published(res[0]):
                self.add_error("BROKEN_IMAGE_ASSET", rel, line_number_at(raw, m.start()), f"Broken local <img> asset: {m.group(1)}")

        for m in re.finditer(r'<meta\b[^>]*(?:property=["\']og:image["\']|name=["\']twitter:image["\'])[^>]*content=["\']([^"\']+)["\']', head, re.I):
            val = m.group(1).strip()
            ln = line_number_at(raw, m.start())
            if val in ("https://thehgtech.com", "https://thehgtech.com/"):
                if not is_redirect_stub:
                    self.add_error("BROKEN_SOCIAL_IMAGE", rel, ln, f"OG/Twitter image points to bare domain instead of image file: {val}")
            else:
                res = self._resolve_local_path(rel, val, allow_dir_index=False)
                if res and not self._exists_published(res[0]):
                    self.add_error("BROKEN_SOCIAL_IMAGE", rel, ln, f"Broken local OG/Twitter image asset: {val}")

        # 6. Structured Data (JSON-LD) Validation
        body_part = raw[head_idx:] if head_idx != -1 else raw
        body_no_code = re.sub(r"<script\b[^>]*>.*?</script>|<style\b[^>]*>.*?</style>", " ", body_part, flags=re.I | re.S)
        body_norm = norm_text(re.sub(r"<[^>]+>", " ", body_no_code))

        faq_count = 0
        for m in re.finditer(r'<script\b[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', raw, re.I | re.S):
            ln = line_number_at(raw, m.start())
            try:
                obj = json.loads(m.group(1).strip())
            except Exception as exc:
                self.add_error("MALFORMED_JSON_LD", rel, ln, f"Invalid JSON-LD syntax: {exc}")
                continue

            nodes = obj if isinstance(obj, list) else (obj.get("@graph", [obj]) if isinstance(obj, dict) else [])
            for node in nodes:
                if not isinstance(node, dict):
                    continue
                nt = node.get("@type", "")
                ntypes = nt if isinstance(nt, list) else [nt]

                # Dead SearchAction
                pa = node.get("potentialAction")
                if isinstance(pa, dict) and pa.get("@type") == "SearchAction":
                    self.add_error("DEAD_SEARCH_ACTION", rel, ln, "Unsupported/retired SearchAction structured data found")

                # Deprecated/stub HowTo
                if "HowTo" in ntypes:
                    s_dump = json.dumps(node)
                    if "Refer to the section" in s_dump or rel.startswith("guides/"):
                        self.add_error("UNSUPPORTED_HOWTO_SCHEMA", rel, ln, "Deprecated or stub HowTo structured data found")

                # Hidden / boilerplate / duplicate FAQPage
                if "FAQPage" in ntypes:
                    faq_count += 1
                    if faq_count > 1:
                        self.add_error("DUPLICATE_FAQPAGE_SCHEMA", rel, ln, "Multiple FAQPage JSON-LD blocks on the same page")
                    entities = node.get("mainEntity") or []
                    if not isinstance(entities, list) or not entities:
                        self.add_error("EMPTY_FAQPAGE_SCHEMA", rel, ln, "FAQPage schema has no mainEntity questions")
                    else:
                        unmatched = []
                        for q_item in entities:
                            if not isinstance(q_item, dict):
                                continue
                            q_norm = norm_text(q_item.get("name", ""))
                            if q_norm in BOILERPLATE_FAQ_SIGNATURES:
                                self.add_error("BOILERPLATE_FAQPAGE_SCHEMA", rel, ln, f'Generic boilerplate FAQPage question: "{q_item.get("name")}"')
                                continue
                            if q_norm and not (q_norm in body_norm or (len(q_norm) > 28 and q_norm[:35] in body_norm)):
                                unmatched.append(q_item.get("name", ""))
                        if unmatched:
                            self.add_error(
                                "HIDDEN_FAQPAGE_SCHEMA",
                                rel,
                                ln,
                                f"{len(unmatched)}/{len(entities)} FAQPage questions are not visibly rendered on page (e.g. {unmatched[0]!r})",
                            )

                # Author consistency & broken author URLs
                auth = node.get("author")
                auth_list = auth if isinstance(auth, list) else ([auth] if isinstance(auth, dict) else [])
                for a in auth_list:
                    if not isinstance(a, dict):
                        continue
                    a_url = str(a.get("url") or "").strip()
                    if a_url:
                        ares = self._resolve_local_path(rel, a_url, allow_dir_index=True)
                        if ares and not self._exists_published(ares[0]):
                            self.add_error("BROKEN_AUTHOR_URL", rel, ln, f"Structured data author URL does not exist: {a_url}")
                    if str(a.get("name") or "").strip() == "Harish G":
                        if a.get("@id") != "https://thehgtech.com/about.html#harish-g":
                            self.add_warning("INCONSISTENT_AUTHOR_ID", rel, ln, f"Author Harish G missing canonical @id (got {a.get('@id')!r})")

                # Placeholder publication dates
                if any(t in ntypes for t in ("Article", "NewsArticle", "TechArticle", "BlogPosting")):
                    dp = str(node.get("datePublished") or "").strip()
                    dm = str(node.get("dateModified") or "").strip()
                    if dp.startswith("2025-01-01") or dp.startswith("2026-06-30T17:12:27"):
                        self.add_error("PLACEHOLDER_PUBLICATION_DATE", rel, ln, f"Placeholder datePublished detected: {dp}")
                    elif dp.startswith("2026-01-01") and rel not in VERIFIED_2026_01_01_PATHS:
                        self.add_error("PLACEHOLDER_PUBLICATION_DATE", rel, ln, f"Unverified placeholder datePublished=2026-01-01 detected: {dp}")
                    if dm.startswith("2026-06-30T17:12:27"):
                        self.add_error("PLACEHOLDER_MODIFIED_DATE", rel, ln, f"Placeholder dateModified detected: {dm}")

    def _validate_robots_txt(self):
        rp = self.root / "robots.txt"
        if not rp.exists():
            self.add_error("MISSING_ROBOTS_TXT", "robots.txt", 1, "robots.txt is missing")
            return
        lines = rp.read_text(encoding="utf-8", errors="ignore").splitlines()
        has_wildcard = False
        has_sitemap = False
        for idx, line in enumerate(lines, 1):
            stripped = line.split("#", 1)[0].strip()
            if not stripped:
                continue
            if re.match(r"^User-agent:\s*\*\s*$", stripped, re.I):
                has_wildcard = True
            ua_m = re.match(r"^User-agent:\s*(\S+)\s*$", stripped, re.I)
            if ua_m and ua_m.group(1).lower() in BOT_OVERRIDE_GROUPS:
                self.add_error(
                    "ROBOTS_BOT_OVERRIDE",
                    "robots.txt",
                    idx,
                    f"Separate User-agent: {ua_m.group(1)} block overrides User-agent: * disallow rules under RFC 9309",
                )
            sm_m = re.match(r"^Sitemap:\s*(\S+)\s*$", stripped, re.I)
            if sm_m:
                has_sitemap = True
                sm_url = sm_m.group(1)
                if sm_url.endswith("/news-sitemap.xml"):
                    self.add_error("INVALID_NEWS_SITEMAP_ADVERTISED", "robots.txt", idx, "robots.txt advertises retired/invalid news-sitemap.xml")
                res = self._resolve_local_path("robots.txt", sm_url, allow_dir_index=False)
                if res and not self._exists_published(res[0]):
                    self.add_error("BROKEN_ROBOTS_SITEMAP", "robots.txt", idx, f"Sitemap URL in robots.txt does not exist: {sm_url}")
        if not has_wildcard:
            self.add_error("MISSING_WILDCARD_USER_AGENT", "robots.txt", 1, "robots.txt missing User-agent: * group")
        if not has_sitemap:
            self.add_warning("MISSING_ROBOTS_SITEMAP", "robots.txt", 1, "robots.txt does not declare a Sitemap: directive")

    def _validate_sitemap_xml(self):
        sp = self.root / "sitemap.xml"
        if not sp.exists():
            self.add_error("MISSING_SITEMAP_XML", "sitemap.xml", 1, "sitemap.xml is missing")
            return
        try:
            tree = ET.parse(sp)
            root = tree.getroot()
        except Exception as exc:
            self.add_error("MALFORMED_SITEMAP_XML", "sitemap.xml", 1, f"sitemap.xml XML parse error: {exc}")
            return

        ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        url_nodes = root.findall("ns:url", ns)
        if not url_nodes:
            self.add_error("EMPTY_SITEMAP_XML", "sitemap.xml", 1, "sitemap.xml contains 0 <url> entries")
            return

        seen = set()
        for idx, node in enumerate(url_nodes, 1):
            loc_el = node.find("ns:loc", ns)
            if loc_el is None or not (loc_el.text or "").strip():
                self.add_error("INVALID_SITEMAP_LOC", "sitemap.xml", idx, "Sitemap <url> entry missing <loc>")
                continue
            loc = loc_el.text.strip()
            if loc in seen:
                self.add_error("DUPLICATE_SITEMAP_URL", "sitemap.xml", idx, f"Duplicate <loc> in sitemap.xml: {loc}")
            seen.add(loc)
            if not loc.startswith("https://thehgtech.com/"):
                self.add_error("INVALID_SITEMAP_HOST", "sitemap.xml", idx, f"Non-canonical host in sitemap.xml: {loc}")
                continue
            res = self._resolve_local_path("sitemap.xml", loc, allow_dir_index=True)
            if not res or not self._exists_published(res[0]):
                self.add_error("BROKEN_SITEMAP_TARGET", "sitemap.xml", idx, f"Sitemap <loc> does not resolve to a published file: {loc}")
                continue
            matched_rel = next(c for c in res[0] if c in self.published)
            pinfo = self.page_info.get(matched_rel, {})
            if pinfo.get("is_noindex"):
                self.add_error("NOINDEX_URL_IN_SITEMAP", "sitemap.xml", idx, f"Sitemap includes noindex page: {loc} ({matched_rel})")
            if pinfo.get("is_redirect_stub"):
                self.add_error("REDIRECT_URL_IN_SITEMAP", "sitemap.xml", idx, f"Sitemap includes redirect stub: {loc} ({matched_rel})")


def main(argv=None):
    parser = argparse.ArgumentParser(description="Validate technical SEO health of TheHGTech published corpus.")
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parent.parent, help="Repository or site root directory")
    parser.add_argument("--strict", action="store_true", help="Exit non-zero on warnings as well as errors")
    parser.add_argument("--json", action="store_true", dest="as_json", help="Emit JSON output")
    args = parser.parse_args(argv)

    validator = SEOValidator(args.root)
    report = validator.validate_all()

    if args.as_json:
        print(json.dumps(report, indent=2))
    else:
        print(
            f"SEO Validation Summary: {report['published_html']} published HTML pages "
            f"({report['published_files']} total published files) | "
            f"{report['error_count']} errors, {report['warning_count']} warnings"
        )
        if report["errors"]:
            print("\nERRORS:")
            for e in report["errors"]:
                print(f"  [ERROR] {e['code']} {e['file']}:{e['line']} — {e['message']}")
        if report["warnings"]:
            print("\nWARNINGS:")
            for w in report["warnings"]:
                print(f"  [WARN]  {w['code']} {w['file']}:{w['line']} — {w['message']}")

    if report["error_count"] > 0 or (args.strict and report["warning_count"] > 0):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
