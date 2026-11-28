import email.utils
import html
import json
import os
import re
import shutil
import subprocess
from datetime import datetime, timezone
from pathlib import Path

repo_root = Path(__file__).resolve().parent.parent
base_url = "https://thehgtech.com"

# Known bulk-migration placeholder timestamps that must never be trusted as real dates
PLACEHOLDER_DATES = {
    "2025-01-01",
    "2026-06-30T17:12:27+05:30",
    "2026-06-30T17:12:27Z",
}

# Verified guides that were genuinely committed on 2026-01-01 in Git history
VERIFIED_2026_01_01_PATHS = {
    "guides/iso-27001-certification-roadmap.html",
    "guides/iso-27001-gap-analysis.html",
}


def _load_jekyll_published_filter():
    """Load _config.yml exclusions so unpublished/excluded paths never enter sitemap.xml."""
    cfg_path = repo_root / "_config.yml"
    if not cfg_path.exists():
        return None
    if shutil.which("ruby"):
        try:
            out = subprocess.check_output(
                [
                    "ruby",
                    "-ryaml",
                    "-rjson",
                    "-e",
                    "puts JSON.generate(YAML.safe_load(File.read(ARGV[0])))",
                    str(cfg_path),
                ],
                text=True,
            )
            cfg = json.loads(out)
            return cfg.get("include") or [], cfg.get("exclude") or []
        except Exception:
            pass
    # Fallback regex parse of exclude list
    excludes = re.findall(r'^\s*-\s*["\']?([^"\'\n#]+)["\']?', cfg_path.read_text(encoding="utf-8"), re.M)
    return [".well-known"], [e.strip() for e in excludes if e.strip()]


def _is_published_by_jekyll(rel_path: str, jekyll_rules) -> bool:
    if jekyll_rules is None:
        return True
    include_list, exclude_list = jekyll_rules
    rel_posix = rel_path.replace(os.sep, "/").lstrip("/")
    parts = rel_posix.split("/")
    if any(p.startswith(".") or p.startswith("_") for p in parts):
        if not any(rel_posix == inc or rel_posix.startswith(inc.rstrip("/") + "/") for inc in include_list):
            return False
    for raw_pat in exclude_list:
        pat = raw_pat.lstrip("/").rstrip("/")
        if not pat:
            continue
        if rel_posix == pat or rel_posix.startswith(pat + "/"):
            return False
        if "*" in pat:
            regex_pat = "^" + re.escape(pat).replace(r"\*\*", ".*").replace(r"\*", "[^/]*") + "$"
            if re.match(regex_pat, rel_posix) or re.match(regex_pat, parts[-1]):
                return False
    return True


def _load_metadata_date_indexes():
    """Load verified publication dates from ioc-data/articles.json and guides/guides.json."""
    date_map = {}
    articles_json = repo_root / "ioc-data" / "articles.json"
    if articles_json.exists():
        try:
            for art in json.loads(articles_json.read_text(encoding="utf-8")).get("articles", []):
                ext = (art.get("externalUrl") or "").strip().lstrip("/")
                if ext and art.get("date"):
                    date_map[ext] = str(art["date"]).strip()
        except Exception:
            pass

    guides_json = repo_root / "guides" / "guides.json"
    if guides_json.exists():
        try:
            gdata = json.loads(guides_json.read_text(encoding="utf-8"))
            for g in gdata.get("guides", gdata if isinstance(gdata, list) else []):
                gid = (g.get("id") or "").strip()
                if gid and g.get("date"):
                    rel = gid.lstrip("/") if gid.startswith("/guides/") else f"guides/{gid}.html"
                    date_map[rel] = str(g["date"]).strip()
        except Exception:
            pass
    return date_map


def _parse_any_date(date_str: str):
    if not date_str:
        return None
    s = str(date_str).strip()
    if not s or s in PLACEHOLDER_DATES:
        return None
    # ISO 8601
    try:
        if len(s) == 10 and re.match(r"^\d{4}-\d{2}-\d{2}$", s):
            return datetime.strptime(s, "%Y-%m-%d").replace(tzinfo=timezone.utc)
        clean_iso = s.replace("Z", "+00:00")
        dt = datetime.fromisoformat(clean_iso)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        return dt.astimezone(timezone.utc)
    except Exception:
        pass
    # Human-readable formats from articles.json / guides.json
    for fmt in ("%B %d, %Y", "%b %d, %Y", "%B %Y", "%b %Y"):
        try:
            return datetime.strptime(s, fmt).replace(tzinfo=timezone.utc)
        except ValueError:
            continue
    return None


def _get_git_commit_datetime(filepath: Path, first_commit: bool = False):
    """Deterministic Git commit timestamp (never depends on checkout filesystem mtime)."""
    rel = filepath.relative_to(repo_root).as_posix()
    cmd = ["git", "-c", "core.fsmonitor=false", "log", "-1", "--format=%cI"]
    if first_commit:
        cmd = ["git", "-c", "core.fsmonitor=false", "log", "--diff-filter=A", "--follow", "-1", "--format=%cI"]
    cmd.extend(["--", rel])
    try:
        out = subprocess.check_output(cmd, cwd=repo_root, text=True, stderr=subprocess.DEVNULL).strip()
        if out:
            return _parse_any_date(out.splitlines()[0])
    except Exception:
        pass
    return None


def is_noindex_or_redirect(content: str, expected_url: str = "") -> bool:
    """Return True if page is noindex, meta-refresh redirect, redirect stub, or non-self-canonical."""
    head = content.split("</head>", 1)[0]
    if re.search(r'<meta\b[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex', head, re.IGNORECASE):
        return True
    if re.search(r'<meta\b[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\']', head, re.IGNORECASE):
        return True
    if re.search(r'<meta\b[^>]*http-equiv=["\']refresh["\']', head, re.IGNORECASE):
        return True
    if re.search(r"<title>\s*Redirecting\b", head, re.IGNORECASE):
        return True
    if expected_url:
        can_match = re.search(r'<link\b[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']', head, re.IGNORECASE)
        if not can_match:
            can_match = re.search(r'<link\b[^>]*href=["\']([^"\']+)["\'][^>]*rel=["\']canonical["\']', head, re.IGNORECASE)
        if can_match:
            canon = can_match.group(1).strip().rstrip("/")
            exp = expected_url.strip().rstrip("/")
            if canon != exp:
                return True
    return False


def _is_placeholder_date(raw: str, rel_path: str) -> bool:
    if not raw:
        return True
    s = str(raw).strip()
    if s in PLACEHOLDER_DATES or s.startswith("2025-01-01") or s.startswith("2026-06-30T17:12:27"):
        return True
    if s.startswith("2026-01-01") and rel_path not in VERIFIED_2026_01_01_PATHS:
        return True
    return False


def extract_metadata(filepath: Path, expected_url: str, date_index: dict):
    """Extract metadata and deterministic published/modified dates without filesystem mtime fallback."""
    try:
        content = filepath.read_text(encoding="utf-8")
    except Exception:
        return None

    if is_noindex_or_redirect(content, expected_url=expected_url):
        return None

    rel_path = filepath.relative_to(repo_root).as_posix()
    head = content.split("</head>", 1)[0]

    # Title
    title = ""
    title_match = re.search(r"<title>(.*?)</title>", head, re.IGNORECASE | re.DOTALL)
    if title_match:
        raw_title = html.unescape(title_match.group(1)).strip()
        title = raw_title.split(" | ")[0].split(" — ")[0].split(" - ")[0].strip()

    # Meta Description
    description = ""
    desc_match = re.search(r'<meta\b[^>]*name=["\']description["\'][^>]*content=(["\'])(.*?)\1', head, re.IGNORECASE | re.DOTALL)
    if desc_match:
        description = html.unescape(desc_match.group(2)).strip()
    else:
        og_desc = re.search(r'<meta\b[^>]*property=["\']og:description["\'][^>]*content=(["\'])(.*?)\1', head, re.IGNORECASE | re.DOTALL)
        if og_desc:
            description = html.unescape(og_desc.group(2)).strip()

    # Date extraction: JSON-LD -> article:* meta -> verified JSON index -> Git commit history (NEVER os.path.getmtime)
    date_published = None
    date_modified = None

    json_ld_blocks = re.findall(r'<script\b[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', content, re.IGNORECASE | re.DOTALL)
    for block in json_ld_blocks:
        try:
            data = json.loads(block.strip())
        except Exception:
            continue
        items = data if isinstance(data, list) else (data.get("@graph", [data]) if isinstance(data, dict) else [])
        for item in items:
            if not isinstance(item, dict):
                continue
            t = item.get("@type", "")
            types = t if isinstance(t, list) else [t]
            if any(x in types for x in ("Article", "NewsArticle", "TechArticle", "BlogPosting", "WebPage", "CollectionPage")):
                dp = item.get("datePublished")
                dm = item.get("dateModified")
                if dp and not _is_placeholder_date(str(dp), rel_path) and not date_published:
                    date_published = _parse_any_date(str(dp))
                if dm and not _is_placeholder_date(str(dm), rel_path) and not date_modified:
                    date_modified = _parse_any_date(str(dm))

    if not date_published:
        meta_date = re.search(r'<meta\b[^>]*property=["\']article:published_time["\'][^>]*content=["\']([^"\']+)["\']', head, re.IGNORECASE)
        if meta_date and not _is_placeholder_date(meta_date.group(1), rel_path):
            date_published = _parse_any_date(meta_date.group(1))

    if not date_published and rel_path in date_index:
        date_published = _parse_any_date(date_index[rel_path])

    # Fallback to deterministic Git commit history (never checkout mtime)
    git_modified = None
    if not date_published and not date_modified:
        git_modified = _get_git_commit_datetime(filepath, first_commit=False)

    published_dt = date_published or _get_git_commit_datetime(filepath, first_commit=True) or git_modified
    lastmod_dt = date_modified or date_published or git_modified

    return {
        "title": title or filepath.stem.replace("-", " ").title(),
        "description": description,
        "lastmod": lastmod_dt.strftime("%Y-%m-%d") if lastmod_dt else None,
        "published_dt": published_dt,
        "datetime": lastmod_dt or published_dt or datetime(2025, 1, 1, tzinfo=timezone.utc),
        "iso_published": published_dt.isoformat() if published_dt else None,
    }


def build_sitemaps():
    all_pages = []
    news_pages = []
    seen_urls = set()

    jekyll_rules = _load_jekyll_published_filter()
    date_index = _load_metadata_date_indexes()

    # 1. Verified indexable hub & core pages (noindex pages such as articles.html are skipped automatically)
    core_pages = [
        ("", "index.html", "1.0"),
        ("articles.html", "articles.html", "0.9"),
        ("cve-tracker.html", "cve-tracker.html", "0.9"),
        ("ransomware-tracker.html", "ransomware-tracker.html", "0.9"),
        ("threat-intel.html", "threat-intel.html", "0.9"),
        ("hacker-chatter.html", "hacker-chatter.html", "0.9"),
        ("guides/", "guides/index.html", "0.9"),
        ("comparisons/", "comparisons/index.html", "0.8"),
        ("workflows/", "workflows/index.html", "0.8"),
        ("tools/grc-assessment/", "tools/grc-assessment/index.html", "0.8"),
        ("tools/grc-assessment/iso27001-grc-guide.html", "tools/grc-assessment/iso27001-grc-guide.html", "0.8"),
        ("tools/grc-assessment/controls/", "tools/grc-assessment/controls/index.html", "0.7"),
        ("about.html", "about.html", "0.8"),
        ("editorial-standards.html", "editorial-standards.html", "0.7"),
        ("newsletter.html", "newsletter.html", "0.7"),
        ("community.html", "community.html", "0.6"),
        ("privacy.html", "privacy.html", "0.5"),
    ]

    for url_suffix, rel_path, priority in core_pages:
        full_path = repo_root / rel_path
        if not full_path.exists() or not _is_published_by_jekyll(rel_path, jekyll_rules):
            continue
        target_url = f"{base_url}/{url_suffix}" if url_suffix else f"{base_url}/"
        meta = extract_metadata(full_path, expected_url=target_url, date_index=date_index)
        if not meta or target_url in seen_urls:
            continue
        seen_urls.add(target_url)
        all_pages.append(
            {
                "url": target_url,
                "lastmod": meta["lastmod"],
                "priority": priority,
                "title": meta["title"],
                "description": meta["description"],
                "datetime": meta["datetime"],
                "published_dt": meta["published_dt"],
                "iso_published": meta["iso_published"],
                "is_news": False,
            }
        )

    # 2. Section content pages: articles, guides, comparisons, workflows
    sections = [
        ("articles", "/articles/", "0.8", True),
        ("guides", "/guides/", "0.8", False),
        ("comparisons", "/comparisons/", "0.8", False),
        ("workflows", "/workflows/", "0.7", False),
    ]

    for section_dir_name, url_prefix, priority, is_news_sec in sections:
        section_dir = repo_root / section_dir_name
        if not section_dir.exists():
            continue

        for html_file in sorted(section_dir.glob("*.html")):
            if html_file.name == "index.html":
                continue
            rel_path = f"{section_dir_name}/{html_file.name}"
            if not _is_published_by_jekyll(rel_path, jekyll_rules):
                continue
            url = f"{base_url}{url_prefix}{html_file.name}"
            if url in seen_urls:
                continue
            meta = extract_metadata(html_file, expected_url=url, date_index=date_index)
            if not meta:
                continue
            seen_urls.add(url)
            page_info = {
                "url": url,
                "lastmod": meta["lastmod"],
                "priority": priority,
                "title": meta["title"],
                "description": meta["description"],
                "datetime": meta["datetime"],
                "published_dt": meta["published_dt"],
                "iso_published": meta["iso_published"],
                "is_news": is_news_sec,
            }
            all_pages.append(page_info)
            if is_news_sec:
                news_pages.append(page_info)

    all_pages.sort(key=lambda x: x["url"])

    # 1. Generate sitemap.xml
    sitemap_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for page in all_pages:
        sitemap_lines.append("  <url>")
        sitemap_lines.append(f"    <loc>{html.escape(page['url'])}</loc>")
        if page["lastmod"]:
            sitemap_lines.append(f"    <lastmod>{page['lastmod']}</lastmod>")
        sitemap_lines.append(f"    <priority>{page['priority']}</priority>")
        sitemap_lines.append("  </url>")
    sitemap_lines.append("</urlset>")

    sitemap_path = repo_root / "sitemap.xml"
    sitemap_path.write_text("\n".join(sitemap_lines) + "\n", encoding="utf-8")
    print(f"Generated {sitemap_path} ({len(all_pages)} URLs)")

    # 2. Generate news-sitemap.xml using strictly verified datePublished (never mtime)
    now_utc = datetime.now(timezone.utc)
    recent_news = [
        p
        for p in news_pages
        if p["published_dt"] is not None
        and 0 <= (now_utc - p["published_dt"]).total_seconds() <= (48 * 3600)
    ]

    news_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">',
    ]
    for page in recent_news:
        news_lines.append("  <url>")
        news_lines.append(f"    <loc>{html.escape(page['url'])}</loc>")
        news_lines.append("    <news:news>")
        news_lines.append("      <news:publication>")
        news_lines.append("        <news:name>TheHGTech</news:name>")
        news_lines.append("        <news:language>en</news:language>")
        news_lines.append("      </news:publication>")
        news_lines.append(f"      <news:publication_date>{page['iso_published']}</news:publication_date>")
        news_lines.append(f"      <news:title>{html.escape(page['title'])}</news:title>")
        news_lines.append("    </news:news>")
        news_lines.append("  </url>")
    news_lines.append("</urlset>")

    news_sitemap_path = repo_root / "news-sitemap.xml"
    news_sitemap_path.write_text("\n".join(news_lines) + "\n", encoding="utf-8")
    print(f"Generated {news_sitemap_path} ({len(recent_news)} articles within 48h)")

    # 3. Generate rss.xml (latest 30 articles ordered by verified publication date)
    news_pages.sort(key=lambda x: x["published_dt"] or x["datetime"], reverse=True)
    latest_30 = news_pages[:30]

    rss_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">',
        "  <channel>",
        "    <title>TheHGTech - Cybersecurity &amp; AI Intelligence</title>",
        f"    <link>{base_url}</link>",
        "    <description>Expert cybersecurity analysis, threat intelligence briefings, ransomware forensics, and zero-day research.</description>",
        "    <language>en-us</language>",
        f"    <lastBuildDate>{email.utils.formatdate(usegmt=True)}</lastBuildDate>",
        f'    <atom:link href="{base_url}/rss.xml" rel="self" type="application/rss+xml" />',
    ]

    for page in latest_30:
        pub_dt = page["published_dt"] or page["datetime"]
        rfc_date = email.utils.format_datetime(pub_dt)
        escaped_title = html.escape(page["title"])
        escaped_desc = html.escape(page["description"])
        escaped_url = html.escape(page["url"])
        cdata_desc = page["description"].replace("]]>", "]]]]><![CDATA[>")

        rss_lines.append("    <item>")
        rss_lines.append(f"      <title>{escaped_title}</title>")
        rss_lines.append(f"      <link>{escaped_url}</link>")
        rss_lines.append(f'      <guid isPermaLink="true">{escaped_url}</guid>')
        rss_lines.append(f"      <pubDate>{rfc_date}</pubDate>")
        rss_lines.append(f"      <description>{escaped_desc}</description>")
        rss_lines.append(f'      <content:encoded><![CDATA[<p>{cdata_desc}</p><p><a href="{page["url"]}">Read the full analysis at TheHGTech</a></p>]]></content:encoded>')
        rss_lines.append("    </item>")

    rss_lines.append("  </channel>")
    rss_lines.append("</rss>")

    rss_path = repo_root / "rss.xml"
    rss_path.write_text("\n".join(rss_lines) + "\n", encoding="utf-8")
    print(f"Generated {rss_path} ({len(latest_30)} items)")


if __name__ == "__main__":
    build_sitemaps()
