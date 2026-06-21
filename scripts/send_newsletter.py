import os
import json
import re
import sys
import datetime
import urllib.request
from bs4 import BeautifulSoup
import argparse

BREVO_API_KEY = os.environ.get("BREVO_API_KEY")
if not BREVO_API_KEY:
    print("Error: BREVO_API_KEY environment variable not set.")
    sys.exit(1)

HEADERS = {
    "accept": "application/json",
    "api-key": BREVO_API_KEY,
    "content-type": "application/json"
}

def call_brevo_api(endpoint, method="GET", data=None):
    url = f"https://api.brevo.com/v3/{endpoint}"
    req = urllib.request.Request(url, method=method, headers=HEADERS)
    if data:
        req.data = json.dumps(data).encode("utf-8")
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except urllib.error.HTTPError as e:
        print(f"Brevo API Error: {e.read().decode()}")
        sys.exit(1)

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

def create_and_send_campaign(subject, html_content):
    list_id = get_newsletter_list_id()
    
    # Create the campaign
    campaign_data = {
        "name": f"Automated Campaign - {datetime.datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC')}",
        "sender": {
            "name": "TheHGTech",
            "email": "newsletter@thehgtech.com" # Ensure this email is verified in Brevo
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
    # For testing/demo, we'll take the first 3 cyber and 3 AI shorts if none match today
    cyber_shorts = data.get("cyberShorts", [])[:3]
    ai_shorts = data.get("aiShorts", [])[:3]
    
    # Basic HTML Structure
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
    <style>
        body {{ font-family: 'Inter', sans-serif; background-color: #0d1117; color: #c9d1d9; margin: 0; padding: 20px; }}
        .container {{ max-width: 600px; margin: 0 auto; background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 30px; }}
        .header {{ text-align: center; border-bottom: 1px solid #30363d; padding-bottom: 20px; margin-bottom: 30px; }}
        .header h1 {{ color: #ffffff; margin: 0; font-size: 24px; }}
        .header span {{ color: #00d9ff; font-weight: bold; }}
        .section-title {{ color: #ff3d3d; border-left: 4px solid #ff3d3d; padding-left: 10px; margin-top: 30px; }}
        .item {{ margin-bottom: 25px; }}
        .item h3 {{ color: #58a6ff; margin: 0 0 10px 0; font-size: 18px; }}
        .item p {{ font-size: 14px; line-height: 1.6; color: #8b949e; margin: 0 0 10px 0; }}
        .item a {{ color: #00d9ff; text-decoration: none; font-size: 13px; font-weight: bold; }}
        .footer {{ text-align: center; font-size: 12px; color: #8b949e; margin-top: 40px; padding-top: 20px; border-top: 1px solid #30363d; }}
    </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>The<span>HG</span>Tech ⚡ Daily Digest</h1>
                <p style="color:#8b949e; font-size: 14px;">{today_str}</p>
            </div>
            
            <h2 class="section-title">🛡️ CyberShorts</h2>
    """
    
    for short in cyber_shorts:
        html += f"""
            <div class="item">
                <h3>{short['title']}</h3>
                <p>{short['content']}</p>
                <a href="{short['sourceUrl']}">Read more on {short['source']} &rarr;</a>
            </div>
        """
        
    html += """
            <h2 class="section-title" style="color: #00d9ff; border-color: #00d9ff;">🧠 AIShorts</h2>
    """
    
    for short in ai_shorts:
        html += f"""
            <div class="item">
                <h3 style="color: #00d9ff;">{short['title']}</h3>
                <p>{short['content']}</p>
                <a href="{short['sourceUrl']}">Read more on {short['source']} &rarr;</a>
            </div>
        """
        
    html += """
            <div class="footer">
                <p>You received this because you subscribed to TheHGTech intelligence feed.</p>
                <p><a href="{{{unsubscribe}}}" style="color: #8b949e; text-decoration: underline;">Unsubscribe</a></p>
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
    img_tag = soup.find("img", class_=lambda x: x and "hero" in x)
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
    
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
    <style>
        body {{ font-family: 'Inter', sans-serif; background-color: #0d1117; color: #c9d1d9; margin: 0; padding: 20px; }}
        .container {{ max-width: 600px; margin: 0 auto; background: #161b22; border: 1px solid #30363d; border-radius: 8px; overflow: hidden; }}
        .header {{ text-align: center; padding: 20px; background: #0d1117; border-bottom: 1px solid #30363d; }}
        .header h2 {{ color: #ffffff; margin: 0; font-size: 20px; }}
        .header span {{ color: #00d9ff; font-weight: bold; }}
        .hero {{ width: 100%; max-height: 300px; object-fit: cover; border-bottom: 1px solid #30363d; }}
        .content {{ padding: 30px; }}
        .content h1 {{ color: #58a6ff; font-size: 24px; margin-top: 0; }}
        .content p {{ font-size: 15px; line-height: 1.6; color: #8b949e; }}
        .cta-btn {{ display: inline-block; background: #00d9ff; color: #0d1117; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; margin-top: 20px; }}
        .footer {{ text-align: center; font-size: 12px; color: #8b949e; margin-top: 40px; padding: 20px; border-top: 1px solid #30363d; background: #0d1117; }}
    </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>The<span>HG</span>Tech ⚡ New Analysis</h2>
            </div>
            
            <img class="hero" src="{image_url}" alt="Hero Image">
            
            <div class="content">
                <h1>{title}</h1>
                {excerpt}
                
                <div style="text-align: center;">
                    <a href="{article_url}" class="cta-btn">Read Full Article &rarr;</a>
                </div>
            </div>
            
            <div class="footer">
                <p>You received this because you subscribed to TheHGTech intelligence feed.</p>
                <p><a href="{{{unsubscribe}}}" style="color: #8b949e; text-decoration: underline;">Unsubscribe</a></p>
            </div>
        </div>
    </body>
    </html>
    """
    
    return title, html

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Send TheHGTech Newsletter via Brevo API")
    parser.add_argument("--type", choices=["shorts", "article"], required=True, help="Type of newsletter to send")
    parser.add_argument("--path", help="Path to the HTML file (required if type is article)")
    
    args = parser.parse_args()
    
    if args.type == "shorts":
        subject, html = generate_shorts_html()
        create_and_send_campaign(subject, html)
        
    elif args.type == "article":
        if not args.path:
            print("Error: --path is required when type is article")
            sys.exit(1)
        subject, html = generate_article_html(args.path)
        create_and_send_campaign(subject, html)
