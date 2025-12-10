#!/usr/bin/env python3
"""
TheHGTech Weekly Newsletter Automation
Generates and sends weekly threat intelligence newsletter via Beehiiv API
"""

import os
import json
import requests
from datetime import datetime, timedelta
from typing import List, Dict, Optional

# Configuration from environment variables
BEEHIIV_API_KEY = os.getenv('BEEHIIV_API_KEY')
BEEHIIV_PUB_ID = os.getenv('BEEHIIV_PUB_ID')
BEEHIIV_API_URL = f"https://api.beehiiv.com/v2/publications/{BEEHIIV_PUB_ID}/posts"

# File paths
THREAT_INTEL_FILE = 'threat-intel-history.json'
CVE_DATA_FILE = 'cve-data.json'
RANSOMWARE_DATA_FILE = 'ransomware-data.json'
ARTICLES_FILE = 'articles.json'


def load_json_file(filepath: str) -> Dict:
    """Load and parse JSON file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"⚠️  Warning: {filepath} not found")
        return {}
    except json.JSONDecodeError:
        print(f"⚠️  Warning: {filepath} is not valid JSON")
        return {}


def get_threat_intel_stats() -> Dict:
    """Get latest threat intelligence statistics"""
    data = load_json_file(THREAT_INTEL_FILE)
    
    if not data or 'dailySnapshots' not in data or not data['dailySnapshots']:
        return {
            'totalIOCs': 0,
            'newIOCs': 0,
            'topAttackVector': 'Unknown',
            'timestamp': datetime.now().strftime('%Y-%m-%d')
        }
    
    latest = data['dailySnapshots'][0]
    metrics = latest.get('metrics', {})
    
    return {
        'totalIOCs': metrics.get('totalIOCs', 0),
        'newIOCs': metrics.get('newIOCs', 0),
        'topAttackVector': metrics.get('topAttackVector', 'Unknown'),
        'timestamp': latest.get('date', datetime.now().strftime('%Y-%m-%d'))
    }


def get_top_cves(limit: int = 5) -> List[Dict]:
    """Get top critical CVEs"""
    data = load_json_file(CVE_DATA_FILE)
    
    if not data or 'cves' not in data:
        return []
    
    cves = data['cves'][:limit]
    return cves


def get_ransomware_activity() -> Dict:
    """Get ransomware activity summary"""
    data = load_json_file(RANSOMWARE_DATA_FILE)
    
    if not data or 'victims' not in data:
        return {'groups': [], 'totalVictims': 0}
    
    victims = data['victims']
    
    # Count victims by group
    group_counts = {}
    for victim in victims:
        group = victim.get('group', 'Unknown')
        if group not in group_counts:
            group_counts[group] = {
                'name': group,
                'count': 0,
                'industries': []
            }
        group_counts[group]['count'] += 1
        industry = victim.get('activity', 'Unknown')
        if industry not in group_counts[group]['industries']:
            group_counts[group]['industries'].append(industry)
    
    # Sort by count and get top 5
    top_groups = sorted(group_counts.values(), key=lambda x: x['count'], reverse=True)[:5]
    
    return {
        'groups': top_groups,
        'totalVictims': len(victims)
    }


def get_new_content() -> List[Dict]:
    """Get new articles/guides/comparisons from last 7 days"""
    data = load_json_file(ARTICLES_FILE)
    
    if not data or 'articles' not in data:
        return []
    
    one_week_ago = datetime.now() - timedelta(days=7)
    new_content = []
    
    for article in data['articles']:
        # Parse date (format: "December 10, 2025")
        try:
            article_date = datetime.strptime(article.get('date', ''), '%B %d, %Y')
            if article_date >= one_week_ago:
                new_content.append(article)
        except (ValueError, TypeError):
            continue
    
    return new_content[:3]  # Limit to 3 items


def generate_newsletter_html() -> str:
    """Generate newsletter HTML content"""
    
    # Get data
    threat_stats = get_threat_intel_stats()
    top_cves = get_top_cves(5)
    ransomware = get_ransomware_activity()
    new_content = get_new_content()
    
    # Current date
    current_date = datetime.now().strftime('%B %d, %Y')
    
    # Start HTML
    html = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {{
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background-color: #0a0a0a;
            color: #ffffff;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }}
        .container {{
            max-width: 600px;
            margin: 0 auto;
            background-color: #1a1a1a;
            border-radius: 8px;
            overflow: hidden;
        }}
        .header {{
            background: linear-gradient(135deg, #00D9FF, #FF4C4C);
            padding: 30px 20px;
            text-align: center;
        }}
        .header h1 {{
            margin: 0;
            font-size: 28px;
            font-weight: 800;
            color: #ffffff;
        }}
        .header p {{
            margin: 5px 0 0;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.9);
        }}
        .content {{
            padding: 30px 20px;
        }}
        .section {{
            margin-bottom: 30px;
        }}
        .section-title {{
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 15px;
            color: #00D9FF;
        }}
        .stats-grid {{
            background: rgba(255, 255, 255, 0.05);
            border-left: 3px solid #00D9FF;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 15px;
        }}
        .stat-item {{
            margin: 8px 0;
            font-size: 15px;
        }}
        .cve-item {{
            background: rgba(255, 76, 76, 0.1);
            border-left: 3px solid #FF4C4C;
            padding: 15px;
            margin-bottom: 12px;
            border-radius: 4px;
        }}
        .cve-title {{
            font-weight: 600;
            color: #FF4C4C;
            margin-bottom: 5px;
        }}
        .cve-details {{
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
            margin: 3px 0;
        }}
        .ransomware-item {{
            background: rgba(255, 255, 255, 0.05);
            padding: 12px;
            margin-bottom: 10px;
            border-radius: 4px;
        }}
        .ransomware-group {{
            font-weight: 600;
            color: #00D9FF;
        }}
        .content-card {{
            background: rgba(255, 255, 255, 0.05);
            border-left: 3px solid #00D9FF;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 4px;
        }}
        .content-type {{
            font-size: 12px;
            font-weight: 600;
            color: #00D9FF;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }}
        .content-title {{
            font-size: 18px;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 10px 0;
        }}
        .content-excerpt {{
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            margin-bottom: 12px;
        }}
        .button {{
            display: inline-block;
            padding: 12px 24px;
            background: linear-gradient(135deg, #00D9FF, #0099CC);
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin-top: 10px;
        }}
        .footer {{
            background: rgba(255, 255, 255, 0.03);
            padding: 20px;
            text-align: center;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.6);
        }}
        .footer a {{
            color: #00D9FF;
            text-decoration: none;
        }}
        a {{
            color: #00D9FF;
            text-decoration: none;
        }}
        a:hover {{
            text-decoration: underline;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛡️ TheHGTech Weekly Threat Intel</h1>
            <p>{current_date}</p>
        </div>

        <div class="content">
            <!-- Quick Stats -->
            <div class="section">
                <div class="section-title">📊 THIS WEEK AT A GLANCE</div>
                <div class="stats-grid">
                    <div class="stat-item">• <strong>{threat_stats['totalIOCs']:,}</strong> IOCs tracked across 9 vendors</div>
                    <div class="stat-item">• <strong>{threat_stats['newIOCs']}</strong> new IOCs in the last 24 hours</div>
                    <div class="stat-item">• Top threat: <strong>{threat_stats['topAttackVector']}</strong></div>
                    <div class="stat-item">• <strong>{len(top_cves)}</strong> critical CVEs this week</div>
                    <div class="stat-item">• <strong>{ransomware['totalVictims']}</strong> ransomware victims reported</div>
                </div>
            </div>
"""

    # New Content Section (if any)
    if new_content:
        html += """
            <div class="section">
                <div class="section-title">📚 NEW ON THEHGTECH THIS WEEK</div>
"""
        for item in new_content:
            content_type = "📰 NEW ARTICLE"
            if '/guides/' in item.get('id', ''):
                content_type = "📖 NEW GUIDE"
            elif '/comparisons/' in item.get('id', ''):
                content_type = "🔍 NEW COMPARISON"
            
            html += f"""
                <div class="content-card">
                    <div class="content-type">{content_type}</div>
                    <h3 class="content-title">{item.get('title', 'Untitled')}</h3>
                    <p class="content-excerpt">{item.get('excerpt', '')[:200]}...</p>
                    <a href="https://thehgtech.com/articles.html?id={item.get('id', '')}" style="color: #00D9FF; font-weight: 600;">
                        Read more →
                    </a>
                </div>
"""
        html += """
            </div>
"""

    # CVEs Section
    html += """
            <div class="section">
                <div class="section-title">🔴 CRITICAL CVEs THIS WEEK</div>
"""
    
    if top_cves:
        for cve in top_cves:
            html += f"""
                <div class="cve-item">
                    <div class="cve-title">{cve.get('cveId', 'Unknown')} - {cve.get('vendor', 'Unknown')}</div>
                    <div class="cve-details">Severity: <strong>{cve.get('score', 'Unknown')}</strong></div>
                    <div class="cve-details">Status: {cve.get('status', 'Unknown')}</div>
                    <div class="cve-details">Source: {cve.get('source', 'Unknown')}</div>
                </div>
"""
    else:
        html += """
                <p>No critical CVEs this week.</p>
"""
    
    html += """
                <a href="https://thehgtech.com/cve-tracker.html" class="button">View All CVEs →</a>
            </div>
"""

    # Ransomware Section
    html += """
            <div class="section">
                <div class="section-title">🔐 RANSOMWARE ROUNDUP</div>
                <p>This week's most active groups:</p>
"""
    
    if ransomware['groups']:
        for group in ransomware['groups']:
            industries = ', '.join(group['industries'][:3])
            html += f"""
                <div class="ransomware-item">
                    <div class="ransomware-group">• {group['name']}: {group['count']} victims</div>
                    <div style="margin-left: 20px; font-size: 14px; color: rgba(255,255,255,0.7);">
                        Industries: {industries}
                    </div>
                </div>
"""
    else:
        html += """
                <p>No ransomware activity data available.</p>
"""
    
    html += f"""
                <p style="margin-top: 15px;">
                    <strong>Total victims this week: {ransomware['totalVictims']}</strong>
                </p>
                <a href="https://thehgtech.com/ransomware-tracker.html" class="button">View All Victims →</a>
            </div>

            <!-- Quick Links -->
            <div class="section">
                <div class="section-title">🔗 QUICK LINKS</div>
                <p>
                    <a href="https://thehgtech.com/cve-tracker.html">CVE Tracker</a> | 
                    <a href="https://thehgtech.com/ransomware-tracker.html">Ransomware Tracker</a> | 
                    <a href="https://thehgtech.com/threat-intel.html">Threat Intel Dashboard</a> | 
                    <a href="https://thehgtech.com/guides/">All Guides</a>
                </p>
            </div>
        </div>

        <div class="footer">
            <p>
                Follow us: 
                <a href="https://twitter.com/thehgtech">Twitter</a> | 
                <a href="https://linkedin.com/company/thehgtech">LinkedIn</a> | 
                <a href="https://thehgtech.com">Website</a>
            </p>
            <p style="margin-top: 15px;">
                You're receiving this because you subscribed to TheHGTech Weekly Threat Intel.<br>
                Powered by <a href="https://beehiiv.com">Beehiiv</a>
            </p>
        </div>
    </div>
</body>
</html>
"""
    
    return html


def send_newsletter(html_content: str) -> bool:
    """Send newsletter via Beehiiv API"""
    
    if not BEEHIIV_API_KEY or not BEEHIIV_PUB_ID:
        print("❌ Error: BEEHIIV_API_KEY or BEEHIIV_PUB_ID not set")
        print("   Please add them to GitHub Secrets")
        return False
    
    current_date = datetime.now().strftime('%B %d, %Y')
    subject = f"Weekly Threat Intel - {current_date}"
    
    headers = {
        "Authorization": f"Bearer {BEEHIIV_API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "title": subject,
        "content_html": html_content,
        "status": "confirmed",  # Send immediately
        "platform": "both"  # Email + web
    }
    
    try:
        print(f"📧 Sending newsletter: {subject}")
        response = requests.post(BEEHIIV_API_URL, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        
        print("✅ Newsletter sent successfully!")
        print(f"   Response: {response.json()}")
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Error sending newsletter: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"   Response: {e.response.text}")
        return False


def main():
    """Main function"""
    print("🚀 TheHGTech Weekly Newsletter Generator")
    print("=" * 50)
    
    # Generate newsletter
    print("\n📝 Generating newsletter content...")
    html_content = generate_newsletter_html()
    
    # Send newsletter
    print("\n📧 Sending newsletter via Beehiiv...")
    success = send_newsletter(html_content)
    
    if success:
        print("\n✅ Newsletter automation complete!")
        return 0
    else:
        print("\n❌ Newsletter automation failed!")
        return 1


if __name__ == "__main__":
    exit(main())
