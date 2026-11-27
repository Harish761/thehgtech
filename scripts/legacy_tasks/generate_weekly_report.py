import datetime
import html as html_lib
import json
import os
from collections import Counter

# Configuration
IOC_SOURCE_DIR = 'data/ioc-source'
IOC_DATA_DIR = 'ioc-data'
ARTICLES_FILE = os.path.join(IOC_DATA_DIR, 'articles.json')
AUTHOR = "TheHGTech Bot"

GENERIC_NOISE_TAGS = {
    'malware', 'url', 'exe', 'elf', 'zip', 'dll', 'doc', 'docx', 'xls', 'xlsx',
    'apk', 'unknown', 'hash', 'botnet', 'c2', 'banking-trojan', 'ssl',
    'certificate', 'ip-address', 'verified', 'github', 'ua-wget', '32-bit',
    '64-bit', 'mips', 'arm', 'x86', 'sh', 'bin', 'php', 'cheatsheet', 'opendir',
    'malware_download', 'general threat', 'unassigned malware', 'none', 'n/a',
    'text/plain', 'http', 'https', 'rar', 'tar', 'gz', 'msi', 'ps1', 'bat',
    'vbs', 'js', 'pdf', 'iso', 'lnk', 'scr', 'cab', '7z', 'ascii', 'unicode',
}


def _resolve_ioc_file(filename):
    """Prefer full 7-day source directory when present, falling back to ioc-data/."""
    for base in (IOC_SOURCE_DIR, IOC_DATA_DIR):
        candidate = os.path.join(base, filename)
        if os.path.exists(candidate):
            return candidate
    return os.path.join(IOC_DATA_DIR, filename)


def load_json_file(filepath):
    """Load JSON data from file."""
    if not os.path.exists(filepath):
        return []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading {filepath}: {e}")
        return []


def _extract_iocs(raw):
    if isinstance(raw, dict) and isinstance(raw.get('iocs'), list):
        return raw['iocs']
    if isinstance(raw, list):
        return raw
    return []


def _is_clean_family_label(label):
    if not label or not isinstance(label, str):
        return False
    cleaned = label.strip(' "\'\t\r\n')
    lower = cleaned.lower()
    if len(cleaned) <= 2 or lower in GENERIC_NOISE_TAGS:
        return False
    if lower.startswith(('http://', 'https://', 'hxxp://', 'hxxps://', 'dropped-by-')):
        return False
    return True


def get_top_malware_families(limit=10):
    """Get top malware families from ThreatFox and URLhaus using current IOC schema."""
    families = []

    threatfox_data = _extract_iocs(load_json_file(_resolve_ioc_file('threatfox.json')))
    for item in threatfox_data:
        for key in ('malware_printable', 'campaign'):
            val = item.get(key)
            if _is_clean_family_label(val):
                families.append(val.strip())
                break
        else:
            for tag in item.get('tags', []) or []:
                if _is_clean_family_label(tag):
                    families.append(tag.strip())

    urlhaus_data = _extract_iocs(load_json_file(_resolve_ioc_file('urlhaus.json')))
    for item in urlhaus_data:
        camp = item.get('campaign')
        if _is_clean_family_label(camp):
            families.append(camp.strip())
        for tag in item.get('tags', []) or []:
            if _is_clean_family_label(tag):
                families.append(tag.strip())

    return Counter(families).most_common(limit)


def get_botnet_c2_stats():
    """Get Botnet C2 stats from Feodo Tracker using current IOC schema."""
    feodo_data = _extract_iocs(load_json_file(_resolve_ioc_file('feodo-tracker.json')))

    families = []
    for item in feodo_data:
        label = item.get('malware') or item.get('campaign') or ''
        if label and label.strip().lower() not in ('unknown', 'none', 'n/a'):
            families.append(label.strip())
        else:
            for tag in item.get('tags', []) or []:
                if _is_clean_family_label(tag):
                    families.append(tag.strip())

    return Counter(families).most_common(5)


def get_ssl_stats():
    """Get SSL Blacklist stats using current IOC schema (`campaign` / `listing_reason`)."""
    ssl_data = _extract_iocs(load_json_file(_resolve_ioc_file('ssl-blacklist.json')))

    reasons = []
    for item in ssl_data:
        label = item.get('listing_reason') or item.get('campaign') or ''
        if label and label.strip().lower() not in ('unknown', 'none', 'n/a', 'ssl c2 infrastructure'):
            reasons.append(label.strip())
        else:
            for tag in item.get('tags', []) or []:
                if _is_clean_family_label(tag):
                    reasons.append(tag.strip())

    return len(ssl_data), Counter(reasons).most_common(5)


def generate_html_content(date_str, top_families, botnet_stats, ssl_count, ssl_reasons):
    """Generate HTML content for the weekly threat summary."""
    family_items = (
        "\n".join(
            f"    <li><strong>{html_lib.escape(str(family))}:</strong> {count} detections</li>"
            for family, count in top_families
        )
        if top_families
        else "\n    <li>No dominant malware family signatures exceeded reporting thresholds this period.</li>"
    )

    botnet_items = (
        "\n".join(
            f"    <li><strong>{html_lib.escape(str(family))}:</strong> {count} active C2s</li>"
            for family, count in botnet_stats
        )
        if botnet_stats
        else "\n    <li>No active Feodo Tracker botnet C2 classifications reported in this window.</li>"
    )

    ssl_items = (
        "\n".join(
            f"    <li><strong>{html_lib.escape(str(reason))}:</strong> {count} certificates</li>"
            for reason, count in ssl_reasons
        )
        if ssl_reasons
        else "\n    <li>No dominant SSL threat family classifications reported in this window.</li>"
    )

    return f"""<article>
  <header>
    <h1>Weekly Threat Intelligence Report: {html_lib.escape(date_str)}</h1>
    <p><strong>Author:</strong> {html_lib.escape(AUTHOR)}</p>
    <p><strong>Published:</strong> {html_lib.escape(date_str)}</p>
  </header>

  <p>Welcome to TheHGTech's weekly threat intelligence summary. This report analyzes data from our automated threat feeds, including URLhaus, ThreatFox, Feodo Tracker, and SSL Blacklist, to highlight the most active threats in the wild over the past week.</p>

  <h2>🚨 Top Active Malware Families</h2>
  <p>Based on our analysis of thousands of IOCs, these are the most active malware families currently being distributed:</p>
  <ul>
{family_items}
  </ul>
  <p>Organizations should prioritize detection logic for these families, as they represent the highest volume of current attacks.</p>

  <h2>🤖 Botnet C2 Infrastructure</h2>
  <p>Feodo Tracker has identified active Command &amp; Control (C2) servers for the following botnets:</p>
  <ul>
{botnet_items}
  </ul>
  <p>Blocking these IPs at the perimeter is a critical defense against botnet command execution.</p>

  <h2>🔒 Malicious SSL Certificates</h2>
  <p>We are currently tracking <strong>{ssl_count}</strong> malicious SSL certificates. These certificates are often used to encrypt C2 traffic or host phishing sites.</p>
  <p>Top associated threats:</p>
  <ul>
{ssl_items}
  </ul>

  <h2>🛡️ Recommendations</h2>
  <ol>
    <li><strong>Update Blocklists:</strong> Ensure your firewalls and proxies are ingesting the latest IOCs from our feeds.</li>
    <li><strong>Patch Priority:</strong> Focus on vulnerabilities exploited by the top malware families listed above.</li>
    <li><strong>User Awareness:</strong> Warn employees about the current phishing themes associated with these campaigns.</li>
  </ol>

  <p><em>Data generated automatically by TheHGTech Threat Intel Platform.</em></p>
</article>"""


def update_articles_json(article_obj, articles_file=ARTICLES_FILE):
    """Idempotently upsert the weekly report entry in articles.json by article ID."""
    if os.path.exists(articles_file):
        with open(articles_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
    else:
        print(f"File {articles_file} not found. Creating new one.")
        data = {"articles": []}

    if 'articles' not in data or not isinstance(data['articles'], list):
        data['articles'] = []

    target_id = article_obj.get('id')
    existing_idx = next((i for i, a in enumerate(data['articles']) if a.get('id') == target_id), None)
    if existing_idx is not None:
        data['articles'][existing_idx] = article_obj
        action = "Updated existing"
    else:
        data['articles'].insert(0, article_obj)
        action = "Added new"

    os.makedirs(os.path.dirname(articles_file) or ".", exist_ok=True)
    with open(articles_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"{action} article: {article_obj['title']}")
    return True


def main():
    today = datetime.date.today()
    date_str = today.strftime("%B %d, %Y")

    print("Generating Weekly Threat Report...")

    top_families = get_top_malware_families()
    botnet_stats = get_botnet_c2_stats()
    ssl_count, ssl_reasons = get_ssl_stats()

    html_content = generate_html_content(date_str, top_families, botnet_stats, ssl_count, ssl_reasons)

    article_id = f"report-{today.strftime('%Y%m%d')}"
    article = {
        "id": article_id,
        "title": f"Weekly Threat Report: {date_str}",
        "date": date_str,
        "category": "Threat Intelligence",
        "badge": "WEEKLY",
        "image": "images/articles/weekly-threat-report-generic.png",
        "excerpt": f"Weekly analysis of top malware families, botnets, and SSL threats. Top threat: {top_families[0][0] if top_families else 'Active Threats'}.",
        "content": html_content,
        "tags": ["Threat Report", "Malware", "Botnet", "Statistics", "Automated"],
        "author": AUTHOR
    }

    update_articles_json(article)


if __name__ == "__main__":
    main()
