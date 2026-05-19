import os
import json
import shutil
from datetime import datetime

# Paths
ROOT_DIR = "/Volumes/Data-Personal/Webpage/thehgtech"
ARTICLE_FILENAME = "shinyhunters-711-salesforce-breach-2026.html"
ARTICLE_PATH = os.path.join(ROOT_DIR, "articles", ARTICLE_FILENAME)
IMAGE_FILENAME = "shinyhunters-711-salesforce-breach-2026.png"
IMAGE_DEST = os.path.join(ROOT_DIR, "images", "articles", IMAGE_FILENAME)
ARTICLES_JSON_PATH = os.path.join(ROOT_DIR, "data", "extracted_articles.json")
SITEMAP_PATH = os.path.join(ROOT_DIR, "sitemap.xml")

# Generated Image Path (from tool)
SOURCE_IMAGE = "/Users/harish/.gemini/antigravity/brain/cf80961a-2830-4432-8afc-10b9fbcf7d2e/shinyhunters_711_salesforce_breach_2026_1779195254204.png"

# HTML Content
HTML_CONTENT = """<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deep Dive: Supply Chain Shattered - 7-Eleven Salesforce Breach | TheHGTech</title>
    <meta name="description" content="Technical analysis of the 7-Eleven data breach by ShinyHunters via Salesforce Experience Cloud, including IOCs, AuraInspector abuse, and SaaS supply chain mitigation. Research-grade intel.">
    <link rel="canonical" href="https://thehgtech.com/articles/shinyhunters-711-salesforce-breach-2026.html">

    <!-- Open Graph -->
    <meta property="og:site_name" content="TheHGTech">
    <meta property="og:title" content="Supply Chain Shattered: The 7-Eleven Salesforce Breach">
    <meta property="og:description" content="Technical analysis of the 7-Eleven data breach by ShinyHunters via Salesforce Experience Cloud, including IOCs and AuraInspector abuse.">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://thehgtech.com/articles/shinyhunters-711-salesforce-breach-2026.html">
    <meta property="og:image" content="https://thehgtech.com/images/articles/shinyhunters-711-salesforce-breach-2026.png">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Supply Chain Shattered: The 7-Eleven Salesforce Breach">
    <meta name="twitter:description" content="Technical analysis of the 7-Eleven data breach by ShinyHunters via Salesforce Experience Cloud.">
    <meta name="twitter:image" content="https://thehgtech.com/images/articles/shinyhunters-711-salesforce-breach-2026.png">

    <!-- Article Meta -->
    <meta property="article:published_time" content="2026-05-19T10:00:00Z">
    <meta property="article:author" content="Harish G">
    <meta property="article:section" content="Threat Intelligence">

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "Supply Chain Shattered: The 7-Eleven Salesforce Breach",
      "description": "Technical analysis of the 7-Eleven data breach by ShinyHunters via Salesforce Experience Cloud.",
      "author": {
        "@type": "Person",
        "name": "Harish G"
      },
      "publisher": {
        "@type": "Organization",
        "name": "TheHGTech",
        "url": "https://thehgtech.com"
      },
      "datePublished": "2026-05-19",
      "dateModified": "2026-05-19",
      "mainEntityOfPage": "https://thehgtech.com/articles/shinyhunters-711-salesforce-breach-2026.html"
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thehgtech.com"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Articles",
        "item": "https://thehgtech.com/articles.html"
      }, {
        "@type": "ListItem",
        "position": 3,
        "name": "7-Eleven Salesforce Breach",
        "item": "https://thehgtech.com/articles/shinyhunters-711-salesforce-breach-2026.html"
      }]
    }
    </script>

    <link rel="stylesheet" href="/header.css">
    <link rel="stylesheet" href="/header-dropdown.css?v=1">
    <link rel="stylesheet" href="/light-mode.css">
    <link rel="stylesheet" href="/print.css">
    <link rel="stylesheet" href="/interaction-bar.css?v=20251207-0041">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">

    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --bg-primary: #0a0a0a;
            --bg-secondary: #111111;
            --bg-card: rgba(255, 255, 255, 0.03);
            --accent-cyan: #00D9FF;
            --accent-red: #FF3D3D;
            --accent-blue: #3B82F6;
            --accent-green: #10B981;
            --accent-orange: #FF9500;
            --accent-purple: #8B5CF6;
            --text-primary: #ffffff;
            --text-secondary: #a0a0a0;
            --text-muted: #666666;
            --border: rgba(255, 255, 255, 0.1);
            --code-bg: #111;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.7;
            font-size: 18px;
        }

        .article-container {
            max-width: 800px;
            margin: 80px auto 0;
            padding: 2rem;
        }

        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--accent-cyan);
            text-decoration: none;
            margin-bottom: 2rem;
            font-size: 0.9rem;
            transition: color 0.3s;
        }

        .back-link:hover { color: var(--text-primary); }

        .article-header {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--border);
        }

        .article-category {
            display: inline-block;
            background: linear-gradient(135deg, rgba(255,61,61,0.2), rgba(0,217,255,0.2));
            border: 1px solid var(--border);
            color: var(--accent-cyan);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        h1 {
            font-size: 2.5rem;
            line-height: 1.2;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .article-excerpt {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }

        .article-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        .article-meta span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .featured-image {
            width: 100%;
            border-radius: 12px;
            margin: 2rem 0;
            border: 1px solid var(--border);
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        h2 { color: var(--accent-cyan); margin: 2.5rem 0 1rem; font-size: 1.6rem; padding-top: 1rem; border-top: 1px solid var(--border); }
        h3 { color: var(--text-primary); margin: 1.5rem 0 1rem; font-size: 1.3rem; }
        p { margin-bottom: 1.5rem; color: var(--text-secondary); }
        
        ul, ol { margin-left: 2rem; margin-bottom: 1.5rem; color: var(--text-secondary); }
        li { margin-bottom: 0.5rem; }
        
        a { color: var(--accent-cyan); text-decoration: none; }
        a:hover { text-decoration: underline; }

        .info-box { background: rgba(59, 130, 246, 0.08); border-left: 4px solid var(--accent-blue); padding: 1.5rem; margin: 2rem 0; border-radius: 8px; }
        .warning-box { background: rgba(255, 61, 61, 0.1); border-left: 4px solid var(--accent-red); padding: 1.5rem; margin: 2rem 0; border-radius: 8px; }
        .success-box { background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--accent-green); padding: 1.5rem; margin: 2rem 0; border-radius: 8px; }
        .technical-box { background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 8px; padding: 1.5rem; margin: 1.5rem 0; }
        .technical-box h3 { margin-top: 0; color: var(--accent-purple); }

        pre { background: var(--code-bg); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem; overflow-x: auto; margin: 1.5rem 0; }
        code { font-family: 'Menlo', 'Monaco', 'Courier New', monospace; font-size: 0.9em; }
        p code, li code { background: rgba(255,255,255,0.1); padding: 0.2rem 0.4rem; border-radius: 4px; color: var(--accent-cyan); }

        table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: var(--bg-card); border-radius: 8px; overflow: hidden; }
        th, td { padding: 1rem; text-align: left; border-bottom: 1px solid var(--border); }
        th { background: rgba(0, 217, 255, 0.1); color: var(--accent-cyan); font-weight: 600; }
        td { color: var(--text-secondary); }

        @media (max-width: 768px) {
            h1 { font-size: 1.8rem; }
            .article-container { padding: 1rem; margin-top: 60px; }
            .article-meta { flex-direction: column; gap: 0.75rem; }
        }
    </style>

    <link rel="stylesheet" href="/m-core.css?v=4.2">
    <link rel="stylesheet" href="/m-layout.css?v=3.2">
    <link rel="stylesheet" href="/m-components.css?v=3.0">
    <script src="/m-app.js?v=4.3" defer></script>
    <link rel="stylesheet" href="../ui-enhancements.css?v=20260517">
    <script>
        (function() {
            var savedTheme = localStorage.getItem("theme");
            if (savedTheme === "light" || (!savedTheme && window.matchMedia("(prefers-color-scheme: light)").matches)) {
                document.documentElement.setAttribute("data-theme", "light");
                document.body.classList.add("light-mode");
            }
        })();
    </script>
</head>

<body>
    <!-- Mobile Header -->
    <header class="m-header m-only">
        <div class="m-header__logo">
            <a href="/" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none;">
                <img src="/logo-dark.png" alt="TheHGTech" class="m-logo-img logo-dark" style="height: 28px; width: auto; margin: 0;">
                <img src="/logo-light.png" alt="TheHGTech" class="m-logo-img logo-light" style="height: 28px; width: auto; margin: 0; display: none;">
                <span style="font-size: 1.2rem; font-weight: 700; background: linear-gradient(135deg, #FF3D3D, #ff8c8c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">TheHGTech</span>
            </a>
        </div>
        <div class="m-header__actions">
            <button class="m-header__btn" id="m-theme-toggle-top" aria-label="Toggle Theme"><i class="fas fa-moon"></i></button>
            <button class="m-header__btn" data-action="command-palette" aria-label="Search"><i class="fas fa-search"></i></button>
            <button class="m-header__btn" id="m-hamburger-btn" aria-label="Menu"><i class="fas fa-bars"></i></button>
        </div>
    </header>

    <!-- Desktop Header -->
    <header class="header" role="banner">
        <div class="header-content">
            <div class="logo">
                <a href="/index.html" style="text-decoration: none; display: flex; align-items: center; gap: 0.75rem;">
                    <img src="/logo-dark.png" alt="TheHGTech Logo" class="logo-img logo-dark">
                    <img src="/logo-light.png" alt="TheHGTech Logo" class="logo-img logo-light">
                    <span class="logo-text">TheHGTech</span>
                </a>
            </div>
            <nav class="nav nav-modern" role="navigation">
                <a href="/index.html#news">News</a>
                <div class="nav-dropdown">
                    <span class="nav-dropdown-trigger">Intelligence <span class="nav-live-badge">LIVE</span><i class="fas fa-chevron-down dropdown-arrow"></i></span>
                    <div class="nav-dropdown-panel">
                        <a href="/threat-intel.html" class="dropdown-item"><div class="dropdown-item-icon intel"><i class="fas fa-satellite-dish"></i></div><div class="dropdown-item-content"><div class="dropdown-item-title">Threat Intelligence <span class="dropdown-badge live">LIVE</span></div></div></a>
                        <a href="/cve-tracker.html" class="dropdown-item"><div class="dropdown-item-icon cve"><i class="fas fa-bug"></i></div><div class="dropdown-item-content"><div class="dropdown-item-title">CVE Tracker</div></div></a>
                        <a href="/ransomware-tracker.html" class="dropdown-item"><div class="dropdown-item-icon ransomware"><i class="fas fa-skull-crossbones"></i></div><div class="dropdown-item-content"><div class="dropdown-item-title">Ransomware Tracker</div></div></a>
                    </div>
                </div>
                <div class="nav-dropdown">
                    <span class="nav-dropdown-trigger">Resources <i class="fas fa-chevron-down dropdown-arrow"></i></span>
                    <div class="nav-dropdown-panel">
                        <a href="/guides/" class="dropdown-item"><div class="dropdown-item-icon guides"><i class="fas fa-book"></i></div><div class="dropdown-item-content"><div class="dropdown-item-title">Security Guides</div></div></a>
                        <a href="/comparisons/" class="dropdown-item"><div class="dropdown-item-icon comparisons"><i class="fas fa-balance-scale"></i></div><div class="dropdown-item-content"><div class="dropdown-item-title">Tool Comparisons</div></div></a>
                        <div class="dropdown-divider"></div>
                        <a href="/articles.html" class="dropdown-item"><div class="dropdown-item-icon articles"><i class="fas fa-newspaper"></i></div><div class="dropdown-item-content"><div class="dropdown-item-title">Articles</div></div></a>
                    </div>
                </div>
                <button class="m-theme-toggle" id="themeToggle" onclick="toggleTheme()" aria-label="Toggle Theme" style="margin-left: 20px; display: inline-flex; position: relative; width: 56px; height: 28px; background: linear-gradient(135deg, #1a1a2e, #16213e); border: 1.5px solid rgba(255, 255, 255, 0.15); border-radius: 50px; cursor: pointer; transform: scale(0.9);">
                    <span class="m-theme-toggle__thumb" style="position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: linear-gradient(135deg, #c0c0c0, #e8e8e8); border-radius: 50%; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); transition: all 0.3s ease;"></span>
                </button>
            </nav>
            <button class="mobile-menu-btn" aria-label="Toggle menu"><span></span><span></span><span></span></button>
        </div>
    </header>

    <main class="article-container">
        <a href="/articles.html" class="back-link"><i class="fas fa-arrow-left"></i> Back to Articles</a>

        <article>
            <header class="article-header">
                <div class="article-category"><i class="fas fa-shield-alt"></i> Threat Intelligence</div>
                <h1>Supply Chain Shattered: The 7-Eleven Salesforce Breach</h1>
                <p class="article-excerpt">How the ShinyHunters extortion group bypassed 7-Eleven's corporate perimeter by exploiting misconfigured Salesforce Experience Cloud portals, compromising over 600,000 franchisee records.</p>
                <div class="article-meta">
                    <span><i class="far fa-calendar"></i> May 19, 2026</span>
                    <span><i class="far fa-user"></i> Harish G</span>
                    <span><i class="far fa-clock"></i> 8 min read</span>
                </div>
            </header>

            <img src="/images/articles/shinyhunters-711-salesforce-breach-2026.png" alt="Supply Chain Shattered - 7-Eleven Breach" class="featured-image">

            <div class="info-box">
                <strong><i class="fas fa-bolt"></i> EXECUTIVE SUMMARY</strong>
                <ul style="margin-top: 0.5rem; margin-bottom: 0;">
                    <li><strong>Who:</strong> 7-Eleven (Franchisee Portals) targeted by <strong>ShinyHunters</strong>.</li>
                    <li><strong>What:</strong> Unauthorized access to over 600,000 Salesforce records containing PII of franchise applicants.</li>
                    <li><strong>When:</strong> Discovered April 8, 2026; ransom deadline expired April 21, 2026.</li>
                    <li><strong>How:</strong> "Living off the Land" techniques, exploiting overly permissive guest user settings in Salesforce Experience Cloud, rather than deploying traditional malware.</li>
                </ul>
                <p style="font-size: 0.85rem; margin-top: 1rem; font-style: italic;">This analysis is based on verified security reports and threat intelligence as of May 2026; details may evolve.</p>
            </div>

            <h2>The Anatomy of the Attack</h2>
            
            <p>On April 8, 2026, convenience store giant 7-Eleven confirmed a significant data breach affecting systems used to manage their franchise operations. The notorious cybercrime syndicate <strong>ShinyHunters</strong> claimed responsibility, alleging the theft of over 600,000 records from the company's Salesforce environment.</p>

            <p>Unlike traditional ransomware attacks that rely on encrypting endpoints to halt operations, ShinyHunters executed a sophisticated "Living off the Land" (LotL) data extortion campaign. They completely bypassed 7-Eleven's heavily fortified corporate network by targeting a blind spot common to modern enterprises: the SaaS supply chain.</p>

            <h3>The SaaS Blind Spot</h3>

            <p>Modern enterprises rely heavily on SaaS platforms like Salesforce for CRM, partner portals, and customer experiences. While the underlying platforms are secure, the <strong>configurations</strong> deployed by the enterprise often are not.</p>

            <p>In this incident, the attackers targeted the <strong>Salesforce Experience Cloud</strong> (formerly Community Cloud). Experience Cloud allows organizations to create portals for external users—in this case, prospective and current 7-Eleven franchisees.</p>

            <div class="warning-box">
                <strong><i class="fas fa-exclamation-triangle"></i> The Misconfiguration:</strong>
                The root cause wasn't a zero-day vulnerability in Salesforce code. It was the exploitation of <strong>overly permissive guest user profiles</strong> and misconfigured Aura endpoints. When guest access is not strictly locked down, unauthenticated users can query objects and fields that were unintentionally exposed to the public.
            </div>

            <h2>Technical Analysis: AuraInspector Abuse</h2>

            <p>Threat intelligence indicates that ShinyHunters and related threat clusters have been actively scanning for exposed Salesforce instances using automated tooling. A key component in their arsenal is the abuse of the Lightning Aura framework.</p>

            <p>Salesforce uses the Aura framework to handle dynamic requests. When an Experience Cloud site is misconfigured, attackers can craft specific API calls to the <code>/aura</code> endpoint to extract data—even data that shouldn't be visible to a guest user.</p>

            <div class="technical-box">
                <h3><i class="fas fa-code"></i> Exploit Primitive: Aura Payload Extraction</h3>
                <p>Attackers often repurpose defensive audit tools, such as the open-source <strong>AuraInspector</strong>, to map exposed objects. A typical malicious extraction request looks like this:</p>
                <pre><code class="language-http">POST /s/sfsites/aura?r=1&aura.context={"mode":"PROD","fwuid":"[REDACTED]","app":"siteforce:communityApp"} HTTP/1.1
Host: franchisee.7-eleven.com
Content-Type: application/x-www-form-urlencoded

message={"actions":[{"id":"1","descriptor":"aura://RecordUiController/ACTION$getRecord","callingDescriptor":"UNKNOWN","params":{"recordId":"001[REDACTED]","layoutTypes":["Full"],"modes":["View"]}}]}</code></pre>
                <p>If the guest profile has read access to the <code>Account</code> or <code>Contact</code> objects, the server responds with the full JSON payload containing the franchisee's PII.</p>
            </div>

            <h2>Indicators of Compromise (IOCs) & Behavioral Forensics</h2>

            <p>Because the attackers "lived off the land" using legitimate API calls, traditional endpoint detection (EDR) won't flag this activity. Security teams must rely on <strong>Salesforce Event Monitoring</strong> and audit logs to detect the breach.</p>

            <h3>Behavioral Indicators to Monitor:</h3>
            <ul>
                <li><strong>Anomalous API Volume:</strong> Spikes in <code>ApiEvent</code> or <code>UriEvent</code> logs associated with the Guest User profile, specifically targeting the <code>/aura</code> endpoint.</li>
                <li><strong>Unusual User Agents:</strong> Look for user agent strings containing references to automated scraping scripts or modified `AuraInspector` extensions originating from unusual geographic locations.</li>
                <li><strong>Rogue Connected Apps:</strong> ShinyHunters occasionally uses social engineering (vishing) to trick employees into authorizing malicious OAuth applications. Audit your `OauthToken` events for newly authorized apps requesting high-privilege scopes (like <code>api</code> or <code>refresh_token</code>), especially if they mimic legitimate tools (e.g., "Salesforce Data Loader Backup").</li>
            </ul>

            <h2>Impact and Extortion Tactics</h2>

            <p>ShinyHunters is a well-known extortion group. They set a ransom deadline of April 21, 2026. When their demands were not met, they claimed to have leaked the 600,000+ records—which included names, addresses, and sensitive application data of prospective franchisees.</p>

            <p>7-Eleven responded quickly, launching a forensic investigation, notifying affected individuals, and offering 24 months of complimentary identity theft protection. Crucially, they confirmed that <strong>general store customer data was not affected</strong>, highlighting the siloed nature of the breached franchisee portal.</p>

            <div class="success-box">
                <strong><i class="fas fa-shield-alt"></i> IMMEDIATE ACTION PLAN: Securing Salesforce</strong>
                <p>If your organization uses Salesforce Experience Cloud, execute the following steps immediately:</p>
                <ol>
                    <li><strong>Audit Guest User Profiles:</strong> Navigate to Setup > Sites > Public Access Settings. Ensure that Read, Create, Edit, and Delete permissions are completely removed for sensitive objects (Accounts, Contacts, Custom PII Objects).</li>
                    <li><strong>Enable Secure Guest User Record Access:</strong> Enforce the "Secure guest user record access" setting in Sharing Settings to ensure guest users can only access records shared via strict criteria-based rules.</li>
                    <li><strong>Review Connected Apps:</strong> Audit all authorized OAuth apps. Revoke access for any unrecognized applications immediately.</li>
                    <li><strong>Implement Shield / Event Monitoring:</strong> Set up Transaction Security Policies to block or alert on users downloading massive amounts of data in a short timeframe.</li>
                </ol>
            </div>

            <h2>Conclusion: The Perimeter is Dead</h2>

            <p>The 7-Eleven breach is a stark reminder that the traditional corporate perimeter no longer exists. Your attack surface extends to every SaaS platform, partner portal, and API endpoint your organization deploys. Threat actors like ShinyHunters have adapted; they no longer need to hack your firewall if they can simply log in to your misconfigured cloud services.</p>

            <p>Security teams must extend their zero-trust principles and continuous auditing practices to their SaaS supply chain before they become the next headline.</p>

        </article>

        <div class="article-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border);">
            <p><strong>Author:</strong> Harish G</p>
            <p><strong>Published:</strong> May 19, 2026</p>
            <p><strong>Last Updated:</strong> May 19, 2026</p>
        </div>

        <div class="interaction-bar">
            <div class="like-section">
                <button class="like-btn" id="likeBtn" onclick="toggleLike()">
                    <i class="far fa-heart"></i> <span id="likeText">Like this article</span>
                </button>
            </div>
            <div class="action-buttons">
                <div class="share-buttons">
                    <a href="#" onclick="shareTwitter(event)" class="share-btn" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" onclick="shareLinkedIn(event)" class="share-btn" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <button onclick="copyLink()" class="share-btn" title="Copy Link"><i class="fas fa-link"></i></button>
                </div>
                <div class="button-separator"></div>
                <button onclick="window.print()" class="print-btn" title="Print Article"><i class="fas fa-print"></i></button>
            </div>
        </div>

    </main>

    <footer>
        <p style="text-align: center; color: var(--text-muted); padding: 2rem;">&copy; 2026 TheHGTech. All rights reserved.</p>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-http.min.js"></script>
    <script src="/interaction-bar.js?v=20260220"></script>
</body>
</html>
"""

def main():
    # 1. Write HTML
    with open(ARTICLE_PATH, "w", encoding="utf-8") as f:
        f.write(HTML_CONTENT)
    print(f"Created article at {ARTICLE_PATH}")

    # 2. Copy Image
    shutil.copyfile(SOURCE_IMAGE, IMAGE_DEST)
    print(f"Copied image to {IMAGE_DEST}")

    # 3. Update articles.json (prepend new article)
    if os.path.exists(ARTICLES_JSON_PATH):
        with open(ARTICLES_JSON_PATH, "r", encoding="utf-8") as f:
            articles = json.load(f)
        
        new_entry = {
            "title": "Supply Chain Shattered: The 7-Eleven Salesforce Breach",
            "url": f"/articles/{ARTICLE_FILENAME}",
            "date": "2026-05-19",
            "category": "Threat Intelligence",
            "excerpt": "How the ShinyHunters extortion group bypassed 7-Eleven's corporate perimeter by exploiting misconfigured Salesforce Experience Cloud portals.",
            "image": f"/images/articles/{IMAGE_FILENAME}"
        }
        
        articles.insert(0, new_entry)
        
        with open(ARTICLES_JSON_PATH, "w", encoding="utf-8") as f:
            json.dump(articles, f, indent=4)
        print(f"Updated {ARTICLES_JSON_PATH}")

    # 4. Update Sitemap
    if os.path.exists(SITEMAP_PATH):
        with open(SITEMAP_PATH, "r", encoding="utf-8") as f:
            sitemap_content = f.read()
            
        new_url_entry = f"""
    <url>
        <loc>https://thehgtech.com/articles/{ARTICLE_FILENAME}</loc>
        <lastmod>2026-05-19</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>"""
        
        # Insert after <urlset ...>
        insert_idx = sitemap_content.find("<urlset")
        if insert_idx != -1:
            end_idx = sitemap_content.find(">", insert_idx) + 1
            updated_sitemap = sitemap_content[:end_idx] + new_url_entry + sitemap_content[end_idx:]
            with open(SITEMAP_PATH, "w", encoding="utf-8") as f:
                f.write(updated_sitemap)
            print(f"Updated {SITEMAP_PATH}")

if __name__ == "__main__":
    main()
