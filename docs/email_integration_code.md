# Email Integration Code Backup (EmailOctopus)

This document preserves the frontend and backend code for the newsletter subscription widget and the Python automation script. These features were temporarily redacted until a suitable ESP (Email Service Provider) with full API automation is selected (e.g., Resend, SendGrid, Brevo).

## 1. Frontend: Newsletter Widget HTML

This HTML was originally injected into `index.html` (homepage) and inside article containers.

```html
<div class="newsletter-widget">
    <h3>Stay Ahead of the Threat Curve</h3>
    <p class="newsletter-desc">Get expert cybersecurity insights, zero-day alerts, and critical threat intelligence delivered straight to your inbox.</p>
    <form action="https://emailoctopus.com/lists/08258300-62ea-11f1-9abd-43fc2d9c895b/members/embedded/1.3/add" method="post" class="newsletter-form">
        <div class="newsletter-input-group">
            <input type="email" name="field_0" placeholder="Your email address..." required>
            <button type="submit" class="newsletter-submit">Subscribe <i class="fas fa-shield-check"></i></button>
        </div>
        <div class="newsletter-privacy">
            <input type="checkbox" id="newsletter-consent" name="consent" required>
            <label for="newsletter-consent">I consent to receiving security updates and agree to the <a href="#" onclick="openModal('privacy'); return false;" style="color: #00D9FF; text-decoration: none;">Privacy Policy</a>. Emails are serviced by <a href="https://emailoctopus.com/legal/privacy" target="_blank" style="color: #00D9FF; text-decoration: none;">EmailOctopus</a>.</label>
        </div>
        <!-- Anti-bot honeypot -->
        <div aria-hidden="true" style="position: absolute; left: -5000px;">
            <input type="text" name="hp1.3" tabindex="-1" autocomplete="nope">
        </div>
    </form>
</div>
```

## 2. Frontend: CSS Styling (ui-enhancements.css)

```css
/* ================================================
   NEWSLETTER WIDGET
   ================================================ */
.newsletter-widget {
    background: rgba(20, 20, 22, 0.6);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2.5rem;
    margin: 3rem auto;
    max-width: 800px;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

/* Subtle Glowing Border Effect */
.newsletter-widget::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #00D9FF, #FF3D3D);
    opacity: 0.8;
}

/* Typography */
.newsletter-widget h3 {
    font-size: clamp(1.5rem, 4vw + 1rem, 2rem);
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.newsletter-widget p.newsletter-desc {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* Form Layout */
.newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.newsletter-input-group {
    display: flex;
    width: 100%;
    max-width: 500px;
    gap: 0.5rem;
}

.newsletter-input-group input[type="email"] {
    flex: 1;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(0, 0, 0, 0.4);
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.3s ease;
}

.newsletter-input-group input[type="email"]:focus {
    outline: none;
    border-color: #00D9FF;
    box-shadow: 0 0 15px rgba(0, 217, 255, 0.2);
}

.newsletter-submit {
    padding: 1rem 2rem;
    border-radius: 12px;
    border: none;
    background: #00D9FF;
    color: #000;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3);
}

.newsletter-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 217, 255, 0.5);
    background: #00e6ff;
}

/* Privacy Checkbox */
.newsletter-privacy {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-top: 0.5rem;
    max-width: 500px;
    text-align: left;
}

.newsletter-privacy input[type="checkbox"] {
    accent-color: #00D9FF;
    width: 16px;
    height: 16px;
    cursor: pointer;
}

/* Responsive */
@media (max-width: 600px) {
    .newsletter-widget {
        padding: 2rem 1.5rem;
        margin: 2rem auto;
    }
    
    .newsletter-input-group {
        flex-direction: column;
    }
    
    .newsletter-submit {
        width: 100%;
        justify-content: center;
    }
}

/* Light Mode Overrides */
body.light-mode .newsletter-widget {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
}

body.light-mode .newsletter-input-group input[type="email"] {
    background: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.1);
}

body.light-mode .newsletter-input-group input[type="email"]:focus {
    background: #fff;
    border-color: #00D9FF;
}
```

## 3. Frontend: JS Dynamic Injection (interaction-bar.js)

```javascript
// ================================================
// NEWSLETTER INJECTION
// ================================================
function injectNewsletterWidget() {
    // Only inject on article/guide pages. 
    // We detect this if there is an article or interaction bar on the page.
    const articleContainer = document.querySelector(".article-container, article");
    const interactionBar = document.querySelector(".interaction-bar");
    
    // If not an article page, do not inject dynamically (e.g. homepage handles it manually)
    if (!articleContainer || !interactionBar) return;
    
    // Prevent duplicate injection
    if (document.querySelector(".newsletter-widget")) return;

    const widgetHTML = `
        <div class="newsletter-widget" style="margin: 3rem auto; max-width: 800px;">
            <h3>Stay Ahead of the Threat Curve</h3>
            <p class="newsletter-desc">Get expert cybersecurity insights, zero-day alerts, and critical threat intelligence delivered straight to your inbox.</p>
            <form action="https://emailoctopus.com/lists/08258300-62ea-11f1-9abd-43fc2d9c895b/members/embedded/1.3/add" method="post" class="newsletter-form">
                <div class="newsletter-input-group">
                    <input type="email" name="field_0" placeholder="Your email address..." required>
                    <button type="submit" class="newsletter-submit">Subscribe <i class="fas fa-shield-check"></i></button>
                </div>
                <div class="newsletter-privacy">
                    <input type="checkbox" id="newsletter-consent" name="consent" required>
                    <label for="newsletter-consent">I consent to receiving security updates and agree to the <a href="/privacy.html" onclick="if(typeof openModal === 'function') { openModal('privacy'); return false; }" target="_blank" style="color: #00D9FF; text-decoration: none;">Privacy Policy</a>. Emails are serviced by <a href="https://emailoctopus.com/legal/privacy" target="_blank" style="color: #00D9FF; text-decoration: none;">EmailOctopus</a>.</label>
                </div>
                <!-- Anti-bot honeypot -->
                <div aria-hidden="true" style="position: absolute; left: -5000px;">
                    <input type="text" name="hp1.3" tabindex="-1" autocomplete="nope">
                </div>
            </form>
        </div>
    `;
    
    // Insert right before the interaction bar
    interactionBar.insertAdjacentHTML("beforebegin", widgetHTML);
}

// Ensure it loads with other DOM content
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectNewsletterWidget);
} else {
    injectNewsletterWidget();
}
```

## 4. Backend: Python Automation Script

This script (`generate_newsletter.py`) parses HTML files to generate a styled newsletter output.

```python
import sys
import os
import re

def extract_meta_tag(html_content, property_name):
    # Match content="something" or content='something' correctly handling inner quotes
    match = re.search(r'<meta\s+(?:property|name)=["\'](?:og:)?' + re.escape(property_name) + r'["\']\s+content="([^"]+)"', html_content, re.IGNORECASE)
    if not match:
        match = re.search(r'<meta\s+(?:property|name)=["\'](?:og:)?' + re.escape(property_name) + r'["\']\s+content=\'([^\']+)\'', html_content, re.IGNORECASE)
    if not match:
        match = re.search(r'<meta\s+content="([^"]+)"\s+(?:property|name)=["\'](?:og:)?' + re.escape(property_name) + r'["\']', html_content, re.IGNORECASE)
    if not match:
        match = re.search(r'<meta\s+content=\'([^\']+)\'\s+(?:property|name)=["\'](?:og:)?' + re.escape(property_name) + r'["\']', html_content, re.IGNORECASE)
    return match.group(1) if match else None

def extract_title(html_content):
    match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE | re.DOTALL)
    if match:
        title = match.group(1).strip()
        # Remove site branding if present
        title = re.sub(r'\s*\|\s*TheHGTech\s*$', '', title)
        return title
    return "New Update from TheHGTech"

def generate_html_email(title, description, url, image_url):
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <style>
        body {{ margin: 0; padding: 0; background-color: #0A0F16; color: #E2E8F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }}
        .container {{ max-width: 600px; margin: 0 auto; background-color: #121A25; padding: 0; border-radius: 8px; overflow: hidden; border: 1px solid #1E293B; }}
        .header {{ background-color: #0A0F16; padding: 30px 20px; text-align: center; border-bottom: 2px solid #00D9FF; }}
        .header h1 {{ margin: 0; color: #FFFFFF; font-size: 24px; letter-spacing: 1px; }}
        .header span {{ color: #00D9FF; }}
        .content {{ padding: 40px 30px; }}
        .title {{ color: #FFFFFF; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 15px; line-height: 1.4; }}
        .description {{ color: #94A3B8; font-size: 16px; line-height: 1.6; margin-bottom: 30px; }}
        .button-container {{ text-align: center; margin-top: 30px; margin-bottom: 20px; }}
        .button {{ display: inline-block; background-color: #00D9FF; color: #0A0F16 !important; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px; }}
        .footer {{ background-color: #0A0F16; padding: 20px; text-align: center; font-size: 12px; color: #64748B; border-top: 1px solid #1E293B; }}
        .footer a {{ color: #00D9FF; text-decoration: none; }}
    </style>
</head>
<body>
    <div style="padding: 40px 20px; background-color: #0A0F16;">
        <table class="container" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td class="header"><h1>The<span>HG</span>Tech</h1></td></tr>
            <tr>
                <td class="content">
                    <p style="color: #00D9FF; font-size: 14px; font-weight: bold; text-transform: uppercase; margin-top: 0; margin-bottom: 10px;">New Post Published</p>
                    <h2 class="title">{{title}}</h2>
                    <p class="description">{{description}}</p>
                    <div class="button-container"><a href="{{url}}" class="button">Read Full Article</a></div>
                </td>
            </tr>
            <tr>
                <td class="footer">
                    <p>You are receiving this email because you subscribed to TheHGTech updates.</p>
                    <p>&copy; 2026 TheHGTech. All rights reserved.</p>
                    <p><a href="{{{{UnsubscribeURL}}}}">Unsubscribe from this list</a></p>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>"""
    return html

def main():
    if len(sys.argv) < 2:
        print("Usage: python generate_newsletter.py <path_to_html_file>")
        sys.exit(1)

    file_path = sys.argv[1]
    if not os.path.isfile(file_path):
        print(f"Error: File not found - {{file_path}}")
        sys.exit(1)

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    title = extract_title(content)
    description = extract_meta_tag(content, "description") or "Read our latest insights and analysis on TheHGTech."
    url = extract_meta_tag(content, "url")
    image_url = extract_meta_tag(content, "image")

    if not url:
        basename = os.path.basename(file_path)
        url = f"https://thehgtech.com/{{basename}}"

    email_html = generate_html_email(title, description, url, image_url)
    with open("newsletter_output.html", 'w', encoding='utf-8') as f:
        f.write(email_html)
    print("Success! Generated newsletter_output.html")

if __name__ == "__main__":
    main()
```
