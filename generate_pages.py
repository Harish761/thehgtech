import os
import re

def main():
    repo_root = '/Volumes/Data-Personal/Webpage/thehgtech'
    index_path = os.path.join(repo_root, 'index.html')
    
    with open(index_path, 'r', encoding='utf-8') as f:
        index_content = f.read()
        
    # Extract everything up to the end of the mobile menu / desktop header
    # We will just split by a known boundary.
    header_end_match = re.search(r'(<main id="main-content"|</main>)', index_content)
    
    # Actually, let's just write the full HTML for newsletter.html and community.html
    # and then we'll run sync_headers.py to fix the headers.
    
    newsletter_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subscribe to The Daily Intel | TheHGTech Cybersecurity Newsletter</title>
    <meta name="description" content="Join thousands of security professionals getting the latest cyber threats, zero-days, and AI security analysis delivered straight to their inbox.">
    <meta name="keywords" content="Cybersecurity Newsletter, Threat Intel Subscription, TheHGTech Newsletter, InfoSec Email, Zero-Day Alerts">
    <link rel="canonical" href="https://thehgtech.com/newsletter.html">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Subscribe to The Daily Intel | TheHGTech Newsletter">
    <meta property="og:description" content="Get the latest cyber threats, zero-days, and AI security analysis.">
    
    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Is The Daily Intel newsletter free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, The Daily Intel is completely free. We are committed to sharing vital threat intelligence with the cybersecurity community without a paywall."
        }
      }, {
        "@type": "Question",
        "name": "How often will I receive emails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We send out newsletters on a weekly basis, or immediately when a critical zero-day vulnerability breaks."
        }
      }, {
        "@type": "Question",
        "name": "What topics are covered in the newsletter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover zero-day vulnerabilities, AI security risks, advanced persistent threats (APTs), ransomware updates, and actionable mitigation strategies."
        }
      }]
    }
    </script>

    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <link rel="stylesheet" href="/m-core.css">
    <link rel="stylesheet" href="/m-layout.css">
    <link rel="stylesheet" href="/m-components.css">
    <link rel="stylesheet" href="/light-mode.css">
    <script src="/m-app.js" defer></script>
    <script src="/theme-toggle.js" defer></script>

    <style>
        :root {
            --bg-primary: #0a0a0a;
            --text-primary: #fff;
            --text-secondary: #aaa;
            --accent-cyan: #00D9FF;
        }
        body { font-family: 'Inter', sans-serif; background: var(--bg-primary); color: var(--text-primary); line-height: 1.6; }
        .page-container { max-width: 800px; margin: 0 auto; padding: 120px 1.5rem 80px; text-align: center; }
        h1 { font-size: 2.5rem; background: linear-gradient(135deg, var(--accent-cyan), #FF3D3D); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem; }
        .subtitle { font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 3rem; }
        .faq-section { text-align: left; margin-top: 4rem; }
        .faq-item { margin-bottom: 2rem; }
        .faq-item h3 { color: var(--accent-cyan); margin-bottom: 0.5rem; }
        
        /* Light mode */
        .light-mode body { background: #fff; color: #1a1a1a; }
        .light-mode .subtitle { color: #555; }
        .light-mode h1 { background: linear-gradient(135deg, #0077aa, #c41e3a); -webkit-background-clip: text; }
    </style>
</head>
<body>
    <header class="header"></header>
    <header class="m-header m-only"></header>

    <div class="page-container">
        <h1>Stay Ahead of the Threat Landscape</h1>
        <p class="subtitle">Join the mission. Get critical threat intelligence, zero-day alerts, and AI security analysis delivered directly to your inbox.</p>
        
        <!-- Newsletter Form Injection Target -->
        <div id="newsletter-form-container">
            <!-- This will be populated by the interaction-bar.js logic if we invoke it, or we can just hardcode the sib-form -->
            <div id="hg-newsletter-global" class="container" style="max-width:800px; margin:0 auto;">
                <div class="hg-newsletter-wrapper" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 2.5rem 2rem; backdrop-filter: blur(12px); box-shadow: 0 12px 40px rgba(0,0,0,0.5);">
                    <div style="font-size:1.5rem; font-weight:800; margin-bottom:0.5rem;"><i class="fas fa-envelope-open-text" style="color: var(--accent-cyan);"></i> The Daily Intel</div>
                    <div style="color: rgba(255,255,255,0.6); margin-bottom:1.75rem;">No spam, ever. Just high-signal cybersecurity updates.</div>
                    
                    <div id="sib-form-container">
                        <form id="sib-form" method="POST" action="https://7dd4d3f2.sibforms.com/serve/MUIFAC5_9yENi4QKhYb_j3fo9r-Z5uOTFwmZNPeLVHikF5SvzjAErq6S9aoLZ-r5mr3wiw9NC8O6-kwDXR0J7lIoG8cvcOZky4sdiMFmuWALZb22o9lrh-g2XsAproAT6YppB29NmkFqNqAgsk_N9NvCnuFe2bioh2CBb-pY4pXt0pXCkOUWJyg55mDF6P5TjoDnqDfbrXCpSU1-7A==" data-type="subscription" style="display:flex; gap:0.6rem; justify-content:center; flex-wrap:wrap;">
                            <input type="email" id="EMAIL" name="EMAIL" required placeholder="Enter your email address..." style="flex:1; min-width:200px; max-width:320px; padding:0 1.2rem; height:48px; border-radius:8px; border:1px solid rgba(0,217,255,0.3); background:rgba(0,0,0,0.45); color:#fff;">
                            <button type="submit" style="height:48px; padding:0 1.75rem; background:linear-gradient(135deg, #00D9FF, #00b4cc); color:#000; font-weight:700; border:none; border-radius:8px; cursor:pointer;">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="faq-section">
            <h2 style="margin-bottom:2rem; text-align:center;">Frequently Asked Questions</h2>
            <div class="faq-item">
                <h3>Is The Daily Intel newsletter free?</h3>
                <p>Yes, The Daily Intel is completely free. We are committed to sharing vital threat intelligence with the cybersecurity community without a paywall.</p>
            </div>
            <div class="faq-item">
                <h3>How often will I receive emails?</h3>
                <p>We send out newsletters on a weekly basis, or immediately when a critical zero-day vulnerability breaks.</p>
            </div>
            <div class="faq-item">
                <h3>What topics are covered?</h3>
                <p>We cover zero-day vulnerabilities, AI security risks, advanced persistent threats (APTs), ransomware updates, and actionable mitigation strategies.</p>
            </div>
        </div>
    </div>
</body>
</html>"""

    with open(os.path.join(repo_root, 'newsletter.html'), 'w', encoding='utf-8') as f:
        f.write(newsletter_content)


    community_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TheHGTech Community Guidelines & Comment Policy</title>
    <meta name="description" content="Review TheHGTech's community guidelines. Learn how we foster high-quality cybersecurity discussions using the GraphComment platform.">
    <meta name="keywords" content="TheHGTech Community, Cybersecurity Forum, Threat Intel Discussions, Comment Policy">
    <link rel="canonical" href="https://thehgtech.com/community.html">
    <meta property="og:title" content="TheHGTech Community Guidelines">
    <meta property="og:description" content="Join our cybersecurity community discussions.">
    
    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How do I comment on articles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use GraphComment for our community discussions. Simply scroll to the bottom of any article or guide, click 'Join Discussion', and sign in or create a free profile."
        }
      }, {
        "@type": "Question",
        "name": "Are my comments private?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your comments are public, but you can control your profile visibility via GraphComment's privacy settings. We never sell your data."
        }
      }, {
        "@type": "Question",
        "name": "How does the reputation system work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As you post constructive comments and receive upvotes from peers, your GraphComment reputation score increases, unlocking special badges."
        }
      }]
    }
    </script>

    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <link rel="stylesheet" href="/m-core.css">
    <link rel="stylesheet" href="/m-layout.css">
    <link rel="stylesheet" href="/m-components.css">
    <link rel="stylesheet" href="/light-mode.css">
    <script src="/m-app.js" defer></script>
    <script src="/theme-toggle.js" defer></script>

    <style>
        :root {
            --bg-primary: #0a0a0a;
            --text-primary: #fff;
            --text-secondary: #aaa;
            --accent-cyan: #00D9FF;
        }
        body { font-family: 'Inter', sans-serif; background: var(--bg-primary); color: var(--text-primary); line-height: 1.6; }
        .page-container { max-width: 800px; margin: 0 auto; padding: 120px 1.5rem 80px; text-align: left; }
        h1 { font-size: 2.5rem; background: linear-gradient(135deg, var(--accent-cyan), #FF3D3D); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem; text-align: center;}
        .subtitle { font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 3rem; text-align: center;}
        
        h2 { color: var(--accent-cyan); margin-top: 2rem; margin-bottom: 1rem; }
        p, ul { color: var(--text-secondary); margin-bottom: 1.5rem; }
        ul { margin-left: 2rem; }
        li { margin-bottom: 0.5rem; }

        .faq-section { text-align: left; margin-top: 4rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; }
        .faq-item { margin-bottom: 2rem; }
        .faq-item h3 { color: #fff; margin-bottom: 0.5rem; }
        
        /* Light mode */
        .light-mode body { background: #fff; color: #1a1a1a; }
        .light-mode p, .light-mode ul { color: #555; }
        .light-mode h1 { background: linear-gradient(135deg, #0077aa, #c41e3a); -webkit-background-clip: text; }
        .light-mode .faq-item h3 { color: #1a1a1a; }
        .light-mode .faq-section { border-top: 1px solid rgba(0,0,0,0.1); }
    </style>
</head>
<body>
    <header class="header"></header>
    <header class="m-header m-only"></header>

    <div class="page-container">
        <h1>Community Guidelines</h1>
        <p class="subtitle">Join the discussion. Share intel. Elevate the industry.</p>
        
        <h2>Our Core Values</h2>
        <p>TheHGTech community is built for cybersecurity professionals, researchers, and enthusiasts. We use <strong>GraphComment</strong> to power our discussions at the bottom of every article. We expect all participants to adhere to these core values:</p>
        <ul>
            <li><strong>Be Constructive:</strong> Share actionable intelligence, debate technical merits respectfully, and help others learn.</li>
            <li><strong>No Spam or Self-Promotion:</strong> Do not post links to unrelated products, services, or personal blogs without providing immediate value to the context of the article.</li>
            <li><strong>Respect Privacy & Security:</strong> Do not post live malware, doxx individuals, or share sensitive/classified material that violates OPSEC.</li>
        </ul>

        <h2>How GraphComment Works</h2>
        <p>Instead of a standard flat comment section, GraphComment allows for threaded discussions, reputation building, and community moderation.</p>
        <ul>
            <li><strong>Reputation System:</strong> Gain badges and privileges as your peers upvote your technical insights.</li>
            <li><strong>Privacy First:</strong> You have full control over your public profile. Review the <a href="https://graphcomment.com/en/privacy-policy/" target="_blank" style="color:var(--accent-cyan);">GraphComment Privacy Policy</a>.</li>
        </ul>

        <div class="faq-section">
            <h2 style="text-align:center;">Frequently Asked Questions</h2>
            <div class="faq-item">
                <h3>How do I comment on articles?</h3>
                <p>Simply scroll to the bottom of any article or guide, click 'Join Discussion', and sign in or create a free profile.</p>
            </div>
            <div class="faq-item">
                <h3>Are my comments private?</h3>
                <p>Your comments are public, but you can control your profile visibility via GraphComment's privacy settings. We never sell your data.</p>
            </div>
            <div class="faq-item">
                <h3>How does the reputation system work?</h3>
                <p>As you post constructive comments and receive upvotes from peers, your GraphComment reputation score increases, unlocking special badges.</p>
            </div>
        </div>
    </div>
</body>
</html>"""

    with open(os.path.join(repo_root, 'community.html'), 'w', encoding='utf-8') as f:
        f.write(community_content)
        
    print("Created newsletter.html and community.html successfully.")

if __name__ == "__main__":
    main()
