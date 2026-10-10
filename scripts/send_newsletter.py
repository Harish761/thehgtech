import os
import json
import re
import sys
import datetime
import urllib.request
from bs4 import BeautifulSoup
import argparse
import hashlib

BREVO_API_KEY = os.environ.get("BREVO_API_KEY", "")

def get_brevo_headers():
    key = os.environ.get("BREVO_API_KEY")
    if not key:
        print("Error: BREVO_API_KEY environment variable not set.")
        sys.exit(1)
    return {
        "accept": "application/json",
        "api-key": key,
        "content-type": "application/json"
    }

HEADERS = {
    "accept": "application/json",
    "api-key": BREVO_API_KEY,
    "content-type": "application/json"
}

def call_brevo_api(endpoint, method="GET", data=None, exit_on_error=True):
    url = f"https://api.brevo.com/v3/{endpoint}"
    req = urllib.request.Request(url, method=method, headers=get_brevo_headers())
    if data:
        req.data = json.dumps(data).encode("utf-8")
    try:
        with urllib.request.urlopen(req) as response:
            response_text = response.read().decode()
            return json.loads(response_text) if response_text else {}
    except urllib.error.HTTPError as e:
        print(f"Brevo API Error: {e.read().decode()}")
        if exit_on_error:
            sys.exit(1)
        raise

def get_newsletter_list_id():
    response = call_brevo_api("contacts/lists")
    lists = response.get("lists", [])
    if not lists:
        print("Error: No contact lists found in Brevo.")
        sys.exit(1)
    
    # Try to find a list named "Newsletter" or something similar
    for lst in lists:
        if "newsletter" in lst.get("name", "").lower():
            return lst["id"]
    
    # Fallback to the first list
    print(f"Warning: 'Newsletter' list not found. Falling back to list ID {lists[0]['id']}")
    return lists[0]["id"]

def create_and_send_campaign(subject, html_content, campaign_name=None):
    list_id = get_newsletter_list_id()
    
    if not campaign_name:
        campaign_name = f"Automated Campaign - {datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}"
        
    # Create the campaign
    campaign_data = {
        "name": campaign_name,
        "sender": {
            "name": "TheHGTech",
            "email": "harish@thehgtech.com" # Updated to match your verified Brevo sender
        },
        "subject": subject,
        "htmlContent": html_content,
        "recipients": {
            "listIds": [list_id]
        }
    }
    
    print("Creating email campaign...")
    campaign = call_brevo_api("emailCampaigns", method="POST", data=campaign_data)
    campaign_id = campaign.get("id")
    print(f"Created campaign ID: {campaign_id}")
    
    # Send the campaign immediately
    print(f"Sending campaign ID {campaign_id}...")
    call_brevo_api(f"emailCampaigns/{campaign_id}/sendNow", method="POST")
    print("Campaign sent successfully!")
    return campaign_id

# ---------------------------------------------------------------------------
# Shorts Deduplication & Safety State Helpers
# ---------------------------------------------------------------------------

SHORTS_STATE_PATH = "data/newsletter-shorts-state.json"


def get_shorts_content_digest(content_file="content.js"):
    """
    Calculate SHA-256 fingerprint of the top shorts in content.js for deduplication.
    Returns (digest, cyber_shorts, ai_shorts).
    """
    if not os.path.exists(content_file):
        return None, [], []
    try:
        with open(content_file, "r", encoding="utf-8") as f:
            content = f.read()
        match = re.search(r'const\s+websiteContent\s*=\s*(\{.*?\});\s*$', content, re.DOTALL)
        if not match:
            return None, [], []
        data = json.loads(match.group(1))
        cyber_shorts = data.get("cyberShorts", [])[:10]
        ai_shorts = data.get("aiShorts", [])[:10]
        if not cyber_shorts and not ai_shorts:
            return None, [], []

        normalized = []
        for s in cyber_shorts + ai_shorts:
            normalized.append({
                "title": s.get("title", ""),
                "headline": s.get("headline", ""),
                "url": s.get("sourceUrl", ""),
                "date": s.get("date", "")
            })
        raw = json.dumps(normalized, sort_keys=True).encode("utf-8")
        digest = hashlib.sha256(raw).hexdigest()
        return digest, cyber_shorts, ai_shorts
    except Exception as e:
        print(f"Warning: Could not compute shorts fingerprint: {e}")
        return None, [], []


def check_shorts_newsletter_eligibility(
    force=False,
    upstream_run_id=None,
    upstream_conclusion=None,
    event_name=None,
    state_file=SHORTS_STATE_PATH,
    content_file="content.js"
):
    """
    Verify whether the shorts newsletter should be dispatched.
    
    Guarantees:
    1. Upstream safety: If triggered by workflow_run, upstream run conclusion must be 'success'.
       Failed, cancelled, or timed-out runs are aborted immediately.
    2. Direct manual safety: If triggered directly by workflow_dispatch, verifies that un-sent
       successful shorts content exists. If content was already delivered, direct dispatch is rejected.
    3. Idempotency & Deduplication: Upstream run IDs or content digests already recorded as sent
       are skipped to prevent duplicate subscriber emails.
    """
    # 1. Upstream conclusion check
    if event_name == "workflow_run":
        if upstream_conclusion != "success":
            print(f"❌ Safety Abort: Upstream shorts run concluded with '{upstream_conclusion}'. Newsletter will NOT be sent.")
            return False, "upstream_not_successful"

    # 2. Content validity check
    digest, cyber, ai = get_shorts_content_digest(content_file)
    if not digest or (not cyber and not ai):
        print("❌ Safety Abort: content.js does not contain valid shorts to deliver.")
        return False, "no_content"

    # 3. State-based deduplication check
    state = {}
    if os.path.exists(state_file):
        try:
            with open(state_file, "r", encoding="utf-8") as f:
                state = json.load(f)
        except Exception:
            state = {}

    last_digest = state.get("lastSentDigest")
    last_run_id = state.get("lastSentRunId")

    if not force:
        # Upstream run ID deduplication
        if upstream_run_id and str(last_run_id) == str(upstream_run_id):
            print(f"ℹ️ Deduplication: Upstream run ID {upstream_run_id} was already delivered at {state.get('lastSentTime')}. Skipping duplicate.")
            return False, "duplicate_run"

        # Content digest deduplication
        if last_digest == digest:
            if event_name == "workflow_dispatch":
                print(f"❌ Manual Dispatch Rejected: No new successful shorts run since last newsletter. Content digest ({digest[:12]}) was already delivered at {state.get('lastSentTime')}.")
                return False, "no_new_shorts_for_dispatch"
            else:
                print(f"ℹ️ Deduplication: Content digest ({digest[:12]}) was already delivered at {state.get('lastSentTime')}. Skipping duplicate.")
                return False, "duplicate_content"

    return True, digest


def record_shorts_newsletter_sent(digest, campaign_id, upstream_run_id=None, state_file=SHORTS_STATE_PATH):
    """Record state of successfully sent shorts newsletter for idempotency."""
    os.makedirs(os.path.dirname(state_file) or ".", exist_ok=True)
    state = {
        "lastSentDigest": digest,
        "lastSentTime": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "lastCampaignId": campaign_id,
        "lastSentRunId": str(upstream_run_id) if upstream_run_id else None
    }
    with open(state_file, "w", encoding="utf-8") as f:
        json.dump(state, f, indent=2)
    print(f"✅ Recorded newsletter delivery state (Digest: {digest[:12]}, Run ID: {upstream_run_id})")


def check_brevo_campaign_duplicate(digest, limit=50, max_pages=3):
    """
    Check Brevo API to see if a campaign with this content digest was already created.
    Acts as a defense-in-depth safeguard in case git push of state failed.

    Paginates through recent campaigns (newest first) up to max_pages * limit campaigns.
    Fails closed: returns ("error", error_message) on any failure.
    Returns:
      - ("duplicate", campaign_dict) if matching sent/queued/inProcess campaign exists
      - ("clear", None) if Brevo was checked and no matching campaign exists
      - ("error", str) if Brevo API call failed
    """
    if not digest:
        return "clear", None

    needle = f"[{digest[:12]}]"
    offset = 0

    try:
        for _ in range(max_pages):
            endpoint = f"emailCampaigns?limit={limit}&offset={offset}&sort=desc"
            response = call_brevo_api(endpoint, exit_on_error=False)
            campaigns = response.get("campaigns", [])
            if not campaigns:
                break

            for c in campaigns:
                name = c.get("name", "")
                status = c.get("status", "")
                if needle in name and status in ("sent", "queued", "inProcess"):
                    return "duplicate", c

            total_count = response.get("count", 0)
            offset += len(campaigns)
            if offset >= total_count or len(campaigns) < limit:
                break

        return "clear", None
    except Exception as e:
        error_msg = f"Brevo API error during duplicate check: {e}"
        print(f"❌ {error_msg}")
        return "error", error_msg


# ---------------------------------------------------------------------------
# CVE Section Helpers
# ---------------------------------------------------------------------------

CVE_STATE_PATH = "data/newsletter-cve-state.json"
EPSS_THRESHOLD = 0.80  # 80% and above
ZERO_DAY_WINDOW_DAYS = 7


def load_cve_data():
    """Load CVE records from cve-data.json. Returns empty list if unavailable."""
    if not os.path.exists("cve-data.json"):
        print("Warning: cve-data.json not found. CVE section will be skipped.")
        return []
    with open("cve-data.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return data.get("cves", [])


def get_zero_day_cves(cves):
    """
    Return zero-day CVEs whose dateAdded is within the last ZERO_DAY_WINDOW_DAYS days.
    Sorted newest-first.
    """
    today = datetime.datetime.utcnow().date()
    cutoff = today - datetime.timedelta(days=ZERO_DAY_WINDOW_DAYS)

    result = []
    for c in cves:
        if not c.get("isZeroDay"):
            continue
        try:
            date_added = datetime.datetime.strptime(c.get("dateAdded", ""), "%Y-%m-%d").date()
        except ValueError:
            continue
        if date_added >= cutoff:
            result.append(c)

    result.sort(key=lambda x: x.get("dateAdded", ""), reverse=True)
    return result


def get_high_epss_locked(cves):
    """
    Return the daily-locked high-EPSS CVE list (score >= EPSS_THRESHOLD).
    On the first call of each UTC day the list is generated and saved to
    CVE_STATE_PATH. Subsequent calls within the same day read from the lock.
    """
    today_str = datetime.datetime.utcnow().strftime("%Y-%m-%d")

    # Load existing state
    state = {}
    if os.path.exists(CVE_STATE_PATH):
        try:
            with open(CVE_STATE_PATH, "r", encoding="utf-8") as f:
                state = json.load(f)
        except (json.JSONDecodeError, IOError):
            pass

    high_epss_state = state.get("highEpss", {})

    # If today's lock already exists, return those CVEs
    if high_epss_state.get("lockDate") == today_str:
        locked_ids = set(high_epss_state.get("cveIds", []))
        locked = [c for c in cves if c["cveId"] in locked_ids]
        # Preserve descending EPSS order
        locked.sort(key=lambda x: (x.get("epss") or {}).get("score", 0), reverse=True)
        print(f"CVE state: using existing daily lock ({len(locked)} high-EPSS CVEs).")
        return locked

    # Generate a fresh lock for today
    high_epss = [
        c for c in cves
        if (c.get("epss") or {}).get("score", 0) >= EPSS_THRESHOLD
    ]
    high_epss.sort(key=lambda x: (x.get("epss") or {}).get("score", 0), reverse=True)

    state["highEpss"] = {
        "lockDate": today_str,
        "cveIds": [c["cveId"] for c in high_epss]
    }

    os.makedirs(os.path.dirname(CVE_STATE_PATH), exist_ok=True)
    with open(CVE_STATE_PATH, "w", encoding="utf-8") as f:
        json.dump(state, f, indent=2)

    print(f"CVE state: generated new daily lock with {len(high_epss)} high-EPSS CVEs.")
    return high_epss


def _fmt_date(date_str):
    """Format YYYY-MM-DD to 'Mon DD, YYYY'. Returns original string on failure."""
    try:
        return datetime.datetime.strptime(date_str, "%Y-%m-%d").strftime("%b %d, %Y")
    except (ValueError, TypeError):
        return date_str or "N/A"


def _vendor_product(c):
    """Return a readable 'Vendor · Product' string, avoiding redundancy."""
    vendor = c.get("vendor", "Unknown")
    product = c.get("product", "")
    if product and product.lower() != vendor.lower():
        return f"{vendor} &middot; {product}"
    return vendor


def _short_desc(c, max_len=130):
    """Return a truncated short description suitable for an email row."""
    text = c.get("shortDescription") or c.get("description") or ""
    return text[:max_len].rstrip() + "..." if len(text) > max_len else text


def generate_cve_section_html(cves):
    """
    Build the HTML for the CVE section of the digest:
      - Zero-Day Watch   (red,    7-day window from dateAdded)
      - High Exploit Risk (orange, daily-locked, EPSS >= 80%)

    Returns an empty string if there is nothing to show.
    Uses inline CSS only for maximum email-client compatibility.
    """
    zero_days = get_zero_day_cves(cves)
    high_epss = get_high_epss_locked(cves)

    if not zero_days and not high_epss:
        print("CVE section: no qualifying CVEs — section omitted.")
        return ""

    html = ""

    # ── Zero-Day Watch ───────────────────────────────────────────────────────
    if zero_days:
        html += """
            <h2 style="color:#ff3d3d;font-size:15px;border-left:4px solid #ff3d3d;
                        padding-left:12px;margin:40px 0 4px 0;letter-spacing:1px;
                        text-transform:uppercase;font-weight:700;">
                Zero-Day Watch
            </h2>
            <p style="color:#8b949e;font-size:12px;margin:0 0 14px 16px;">
                Active exploitation confirmed by CISA KEV. Remediate before the due date.
            </p>
        """
        for c in zero_days:
            cve_id     = c.get("cveId", "N/A")
            vp         = _vendor_product(c)
            detected   = _fmt_date(c.get("dateAdded"))
            due        = _fmt_date(c.get("dueDate"))
            desc       = _short_desc(c)
            nvd_url    = c.get("nvdUrl") or f"https://nvd.nist.gov/vuln/detail/{cve_id}"

            html += f"""
            <table width="100%" cellpadding="0" cellspacing="0"
                   style="border:1px solid #30363d;border-radius:6px;
                          margin-bottom:8px;border-collapse:separate;">
              <tr>
                <td style="padding:10px 14px;background:#0d1117;
                           border-radius:6px 6px 0 0;width:60%;vertical-align:top;">
                  <span style="color:#ff3d3d;font-weight:700;font-size:13px;
                               font-family:'Courier New',Courier,monospace;">{cve_id}</span><br>
                  <span style="color:#c9d1d9;font-size:12px;">{vp}</span>
                </td>
                <td style="padding:10px 14px;background:#0d1117;
                           border-radius:6px 6px 0 0;text-align:right;vertical-align:top;">
                  <span style="font-size:11px;color:#8b949e;display:block;">
                    Detected: {detected}
                  </span>
                  <span style="font-size:11px;color:#ff3d3d;font-weight:600;display:block;">
                    Due: {due}
                  </span>
                </td>
              </tr>
              <tr>
                <td colspan="2"
                    style="padding:8px 14px;background:#161b22;
                           border-top:1px solid #30363d;border-radius:0 0 6px 6px;">
                  <span style="font-size:12px;color:#8b949e;line-height:1.6;">{desc}</span>
                  <a href="{nvd_url}"
                     style="color:#58a6ff;font-size:12px;text-decoration:none;
                            margin-left:12px;font-weight:600;white-space:nowrap;">
                    View on NVD &rarr;
                  </a>
                </td>
              </tr>
            </table>
            """

    # ── High Exploit Risk ────────────────────────────────────────────────────
    if high_epss:
        html += """
            <h2 style="color:#FF8C42;font-size:15px;border-left:4px solid #FF8C42;
                        padding-left:12px;margin:36px 0 4px 0;letter-spacing:1px;
                        text-transform:uppercase;font-weight:700;">
                High Exploit Risk
            </h2>
            <p style="color:#8b949e;font-size:12px;margin:0 0 14px 16px;">
                EPSS &ge; 80% &mdash; high probability of exploitation in the next 30 days.
                List locked at today&apos;s morning run.
            </p>
        """
        for c in high_epss:
            cve_id    = c.get("cveId", "N/A")
            vp        = _vendor_product(c)
            epss_pct  = f"{(c.get('epss') or {}).get('score', 0) * 100:.0f}%"
            source    = c.get("source", "")
            desc      = _short_desc(c)
            nvd_url   = c.get("nvdUrl") or f"https://nvd.nist.gov/vuln/detail/{cve_id}"

            html += f"""
            <table width="100%" cellpadding="0" cellspacing="0"
                   style="border:1px solid #30363d;border-radius:6px;
                          margin-bottom:8px;border-collapse:separate;">
              <tr>
                <td style="padding:10px 14px;background:#0d1117;
                           border-radius:6px 6px 0 0;width:60%;vertical-align:top;">
                  <span style="color:#FF8C42;font-weight:700;font-size:13px;
                               font-family:'Courier New',Courier,monospace;">{cve_id}</span><br>
                  <span style="color:#c9d1d9;font-size:12px;">{vp}</span>
                </td>
                <td style="padding:10px 14px;background:#0d1117;
                           border-radius:6px 6px 0 0;text-align:right;vertical-align:top;">
                  <span style="font-size:15px;color:#FF8C42;font-weight:700;display:block;">
                    EPSS {epss_pct}
                  </span>
                  <span style="font-size:11px;color:#8b949e;display:block;">{source}</span>
                </td>
              </tr>
              <tr>
                <td colspan="2"
                    style="padding:8px 14px;background:#161b22;
                           border-top:1px solid #30363d;border-radius:0 0 6px 6px;">
                  <span style="font-size:12px;color:#8b949e;line-height:1.6;">{desc}</span>
                  <a href="{nvd_url}"
                     style="color:#58a6ff;font-size:12px;text-decoration:none;
                            margin-left:12px;font-weight:600;white-space:nowrap;">
                    View on NVD &rarr;
                  </a>
                </td>
              </tr>
            </table>
            """

    return html


# ---------------------------------------------------------------------------
# Email generators
# ---------------------------------------------------------------------------

def generate_shorts_html():
    with open("content.js", "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract JSON part from `const websiteContent = { ... };`
    match = re.search(r'const\s+websiteContent\s*=\s*(\{.*?\});\s*$', content, re.DOTALL)
    if not match:
        print("Error: Could not parse content.js")
        sys.exit(1)
        
    data = json.loads(match.group(1))
    
    today_str = datetime.datetime.utcnow().strftime("%B %-d %Y")
    # For testing/demo, we'll take the first 10 cyber and 10 AI shorts
    cyber_shorts = data.get("cyberShorts", [])[:10]
    ai_shorts = data.get("aiShorts", [])[:10]
    
    # Basic HTML Structure
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
    <style>
        body {{ font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #0d1117; color: #c9d1d9; margin: 0; padding: 20px; }}
        .container {{ max-width: 600px; margin: 0 auto; background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 40px; }}
        .header {{ text-align: center; border-bottom: 1px solid #30363d; padding-bottom: 25px; margin-bottom: 35px; }}
        .header h1 {{ color: #ffffff; margin: 0; font-size: 26px; font-weight: 600; letter-spacing: 0.5px; }}
        .header span {{ color: #00d9ff; font-weight: 700; }}
        .date {{ color: #8b949e; font-size: 13px; font-weight: 500; margin-top: 8px; text-transform: uppercase; letter-spacing: 1px; }}
        .section-title {{ color: #ff3d3d; font-size: 18px; border-left: 4px solid #ff3d3d; padding-left: 12px; margin-top: 40px; margin-bottom: 25px; letter-spacing: 0.5px; text-transform: uppercase; }}
        .ai-title {{ color: #00d9ff; border-color: #00d9ff; }}
        .item {{ margin-bottom: 30px; }}
        .item h3 {{ color: #58a6ff; margin: 0 0 12px 0; font-size: 18px; line-height: 1.4; font-weight: 600; }}
        .ai-item h3 {{ color: #00d9ff; }}
        .item p {{ font-size: 15px; line-height: 1.6; color: #8b949e; margin: 0 0 12px 0; }}
        .item a {{ color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 600; background: #21262d; padding: 6px 12px; border-radius: 4px; border: 1px solid #30363d; display: inline-block; }}
        .tagline {{ text-align: center; color: #58a6ff; font-size: 16px; font-weight: 600; margin-top: 50px; padding-top: 30px; border-top: 1px solid #30363d; }}
        .footer {{ text-align: center; font-size: 12px; color: #8b949e; margin-top: 20px; }}
    </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>The<span>HG</span>Tech Daily Digest</h1>
                <div class="date">{today_str}</div>
            </div>
            
            <h2 class="section-title">CyberShorts</h2>
    """
    
    for short in cyber_shorts:
        content_text = short['content']
        # Strip the "Entities: ..." text that sometimes bleeds from the AI output
        if "Entities:" in content_text:
            content_text = content_text.split("Entities:")[0].strip()
            
        html += f"""
            <div class="item">
                <h3>{short.get('headline', short['title'])}</h3>
                <p>{content_text}</p>
                <a href="{short['sourceUrl']}">Read Full Story &rarr;</a>
            </div>
        """
        
    html += """
            <h2 class="section-title ai-title">AIShorts</h2>
    """
    
    for short in ai_shorts:
        content_text = short['content']
        # Strip the "Entities: ..." text
        if "Entities:" in content_text:
            content_text = content_text.split("Entities:")[0].strip()
            
        html += f"""
            <div class="item ai-item">
                <h3>{short.get('headline', short['title'])}</h3>
                <p>{content_text}</p>
                <a href="{short['sourceUrl']}">Read Full Story &rarr;</a>
            </div>
        """

    # ── CVE Section ──────────────────────────────────────────────────────────
    cves = load_cve_data()
    cve_html = generate_cve_section_html(cves)
    html += cve_html
    # ─────────────────────────────────────────────────────────────────────────

    html += """
            <div class="tagline">Stay secure. Stay informed. Stay ahead.</div>
            <div class="footer">
                <p>You received this because you subscribed to TheHGTech intelligence feed.</p>
                <p><a href="{{ unsubscribe }}" style="color: #8b949e; text-decoration: underline;">Unsubscribe</a></p>
            </div>
        </div>
    </body>
    </html>
    """
    
    return f"TheHGTech Daily Digest: {today_str}", html

def generate_article_html(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")
        
    title = soup.find("h1").get_text(strip=True) if soup.find("h1") else "New Analysis Published"
    
    # Try to find a hero image
    image_url = "https://thehgtech.com/images/og-image.jpg"
    img_tag = soup.find("img", class_=lambda x: x and ("hero" in x or "featured-image" in x))
    if img_tag and img_tag.get("src"):
        src = img_tag["src"]
        if not src.startswith("http"):
            src = "https://thehgtech.com" + (src if src.startswith("/") else "/" + src)
        image_url = src
        
    # Get first couple of paragraphs
    paragraphs = soup.find_all("p")
    excerpt = ""
    for p in paragraphs[:3]:
        text = p.get_text(strip=True)
        if len(text) > 50:
            excerpt += f"<p>{text}</p>"
            if len(excerpt) > 300:
                break
                
    article_url = "https://thehgtech.com/" + file_path
    # Brevo unsubscribe placeholder — must NOT be inside an f-string or Python will try to evaluate it
    unsubscribe_tag = "{{ unsubscribe }}"
    
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
    <style>
        body {{ font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #0d1117; color: #c9d1d9; margin: 0; padding: 20px; }}
        .container {{ max-width: 600px; margin: 0 auto; background: #161b22; border: 1px solid #30363d; border-radius: 8px; overflow: hidden; }}
        .header {{ text-align: center; padding: 30px 20px; background: #0d1117; border-bottom: 1px solid #30363d; }}
        .header h2 {{ color: #ffffff; margin: 0; font-size: 26px; font-weight: 600; letter-spacing: 0.5px; }}
        .header span {{ color: #00d9ff; font-weight: 700; }}
        .hero {{ width: 100%; max-height: 320px; object-fit: cover; border-bottom: 1px solid #30363d; display: block; }}
        .content {{ padding: 40px; }}
        .content h1 {{ color: #58a6ff; font-size: 22px; margin-top: 0; margin-bottom: 20px; line-height: 1.4; }}
        .content p {{ font-size: 15px; line-height: 1.6; color: #8b949e; margin-bottom: 16px; }}
        .cta-container {{ text-align: center; margin-top: 35px; }}
        .cta-btn {{ display: inline-block; background: #21262d; border: 1px solid #30363d; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: 600; font-size: 14px; letter-spacing: 0.5px; }}
        .tagline {{ text-align: center; color: #58a6ff; font-size: 16px; font-weight: 600; margin-top: 40px; padding-top: 30px; border-top: 1px solid #30363d; }}
        .footer {{ text-align: center; font-size: 12px; color: #8b949e; margin-top: 20px; padding-bottom: 30px; }}
    </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>The<span>HG</span>Tech &#9889; New Analysis</h2>
            </div>
            
            <img class="hero" src="{image_url}" alt="Hero Image">
            
            <div class="content">
                <h1>{title}</h1>
                {excerpt}
                
                <div class="cta-container">
                    <a href="{article_url}" class="cta-btn">Read Full Article &rarr;</a>
                </div>
                
                <div class="tagline">Stay secure. Stay informed. Stay ahead.</div>
                
                <div class="footer">
                    <p>You received this because you subscribed to TheHGTech intelligence feed.</p>
                    <p><a href="{unsubscribe_tag}" style="color: #8b949e; text-decoration: underline;">Unsubscribe</a></p>
                </div>
            </div>
        </div>
    </body>
    </html>
    """
    
    return title, html


def process_shorts_newsletter(
    force=False,
    upstream_run_id=None,
    upstream_conclusion=None,
    event_name=None,
    state_file=SHORTS_STATE_PATH,
    content_file="content.js"
):
    """
    Execute end-to-end shorts newsletter processing with multi-tiered safeguards.
    Returns (success: bool, info: str, exit_code: int).
    """
    eligible, info = check_shorts_newsletter_eligibility(
        force=force,
        upstream_run_id=upstream_run_id,
        upstream_conclusion=upstream_conclusion,
        event_name=event_name,
        state_file=state_file,
        content_file=content_file
    )

    if not eligible:
        print(f"⏹️ Newsletter dispatch halted: {info}")
        if info == "no_new_shorts_for_dispatch":
            return False, info, 1
        return False, info, 0

    digest = info

    # Defense-in-depth: Check Brevo API directly if not forced
    if not force:
        status, result = check_brevo_campaign_duplicate(digest)
        if status == "duplicate":
            print(f"ℹ️ Brevo Deduplication: Campaign '{result.get('name')}' (ID: {result.get('id')}) with digest {digest[:12]} was already created in Brevo. Skipping duplicate send.")
            record_shorts_newsletter_sent(digest=digest, campaign_id=result.get("id"), upstream_run_id=upstream_run_id, state_file=state_file)
            return False, "brevo_duplicate_synchronized", 0
        elif status == "error":
            print(f"❌ Safety Abort: Failed to verify duplicate status against Brevo API ({result}). Failing closed to prevent accidental duplicate email delivery.")
            return False, f"brevo_check_failed: {result}", 1

    subject, html = generate_shorts_html()
    now_str = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%d %H:%M UTC')
    campaign_name = f"TheHGTech Shorts [{digest[:12]}] - {now_str}"
    campaign_id = create_and_send_campaign(subject, html, campaign_name=campaign_name)
    record_shorts_newsletter_sent(digest=digest, campaign_id=campaign_id, upstream_run_id=upstream_run_id, state_file=state_file)
    return True, str(campaign_id), 0


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Send TheHGTech Newsletter via Brevo API")
    parser.add_argument("--type", choices=["shorts", "article"], required=True, help="Type of newsletter to send")
    parser.add_argument("--path", help="Path to the HTML file (required if type is article)")
    parser.add_argument("--force", action="store_true", help="Force send even if content digest matches previous delivery")

    args = parser.parse_args()

    if args.type == "shorts":
        upstream_run_id = os.environ.get("UPSTREAM_RUN_ID")
        upstream_conclusion = os.environ.get("UPSTREAM_RUN_CONCLUSION")
        event_name = os.environ.get("GITHUB_EVENT_NAME")

        success, info, code = process_shorts_newsletter(
            force=args.force,
            upstream_run_id=upstream_run_id,
            upstream_conclusion=upstream_conclusion,
            event_name=event_name
        )
        sys.exit(code)

    elif args.type == "article":
        if not args.path:
            print("Error: --path is required when type is article")
            sys.exit(1)
        subject, html = generate_article_html(args.path)
        create_and_send_campaign(subject, html)
