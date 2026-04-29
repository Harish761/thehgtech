import json
import re
import os

def extract_json_from_js(js_path):
    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract the JSON part from const THEHGTECH_GRC_DATA = { ... };
    match = re.search(r'const THEHGTECH_GRC_DATA = (\{.*?\});', content, re.DOTALL)
    if match:
        json_str = match.group(1)
        # It's actually a JS object, but mostly valid JSON. We might need to handle trailing commas or comments.
        # But looking at grc-data.js, it's strictly formatted. Let's try json.loads.
        try:
            return json.loads(json_str)
        except json.JSONDecodeError as e:
            print(f"Error parsing JSON: {e}")
            return None
    return None

def generate_html(control, domain):
    control_id = control.get('control_id', '').replace(' ', '-').lower()
    control_title = control.get('control_title', '')
    
    # Clean up the ID for the filename
    safe_id = re.sub(r'[^a-z0-9\-]', '', control_id)
    filename = f"iso-27001-{safe_id}-guide.html"
    
    template = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ISO 27001 {control_title} | Gap Analysis & Evidence Guide</title>
    <meta name="description" content="Free expert guidance, evidence requirements, and remediation advice for ISO 27001 {control_title}. Part of TheHGTech's free GRC Engine.">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/header.css">
    <link rel="stylesheet" href="/m-core.css">
    <link rel="stylesheet" href="/m-layout.css">
    <style>
        body {{ background-color: #0a0a0a; color: #fff; font-family: 'Inter', sans-serif; }}
        .container {{ max-width: 800px; margin: 100px auto; padding: 20px; }}
        h1 {{ background: linear-gradient(90deg, #00d9ff, #0055ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }}
        .card {{ background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; margin-bottom: 24px; }}
        .card h3 {{ color: #00d9ff; margin-top: 0; }}
        .cta-btn {{ display: inline-block; background: #00d9ff; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px; }}
    </style>
</head>
<body>
    <div class="container">
        <a href="/tools/grc-assessment/" style="color: #888; text-decoration: none;">&larr; Back to GRC Engine</a>
        <h1 style="margin-top:20px;">ISO 27001 {control_title}</h1>
        <p><strong>Domain:</strong> {domain.get('name', '')}</p>
        
        <div class="card">
            <h3>Auditor Question</h3>
            <p>{control.get('auditor_question', '')}</p>
        </div>
        
        <div class="card">
            <h3>Objective</h3>
            <p>{control.get('objective', '')}</p>
        </div>
        
        <div class="card">
            <h3>Evidence Required</h3>
            <p>{control.get('evidence_required', '')}</p>
        </div>
        
        <div class="card">
            <h3>Expert Rationale</h3>
            <p>{control.get('expert_rationale', '').replace('|', '<br>')}</p>
        </div>
        
        <div class="card">
            <h3>Remediation Advice</h3>
            <p>{control.get('remediation_advice', '')}</p>
        </div>

        <div style="text-align: center; margin-top: 40px;">
            <h2>Ready to assess your entire ISMS?</h2>
            <p>Run a complete, 100% free gap analysis in your browser.</p>
            <a href="/tools/grc-assessment/" class="cta-btn">Start Free Gap Analysis</a>
        </div>
    </div>

    <!-- Carbon Ads via Fullres -->
    <script>
        (function () {{
            var fullres = document.createElement('script');
            fullres.async = true;
            fullres.src = 'https://t.fullres.net/thehgtech.js?' + (new Date() - new Date() % 43200000);
            document.head.appendChild(fullres);
        }})();
    </script>

    <!-- Google Analytics 4 -->
    <script>
        window.addEventListener('load', function () {{
            setTimeout(function () {{
                var gtmScript = document.createElement('script');
                gtmScript.async = true;
                gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XL6RCXZJE2';
                document.head.appendChild(gtmScript);

                gtmScript.onload = function () {{
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {{ dataLayer.push(arguments); }}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', 'G-XL6RCXZJE2');
                }};
            }}, 500); // Small delay to prioritize visual rendering
        }});
    </script>
</body>
</html>
"""
    return filename, template

def main():
    js_path = '/Volumes/Data-Personal/Webpage/thehgtech/tools/grc-assessment/grc-data.js'
    data = extract_json_from_js(js_path)
    
    if not data:
        print("Failed to load data")
        return
        
    out_dir = '/Volumes/Data-Personal/Webpage/thehgtech/tools/grc-assessment/controls'
    os.makedirs(out_dir, exist_ok=True)
    
    count = 0
    for domain in data.get('domains', []):
        for control in domain.get('controls', []):
            filename, html = generate_html(control, domain)
            filepath = os.path.join(out_dir, filename)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(html)
            count += 1
            
    print(f"Generated {count} PSEO pages in {out_dir}")
            
    # Generate Glossary Index
    glossary_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ISO 27001 Controls & Clauses Glossary | TheHGTech</title>
    <meta name="description" content="Complete glossary and evidence guide for all ISO 27001 clauses and Annex A controls.">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/header.css">
    <link rel="stylesheet" href="/m-core.css">
    <link rel="stylesheet" href="/m-layout.css">
    <style>
        body { background-color: #0a0a0a; color: #fff; font-family: 'Inter', sans-serif; }
        .container { max-width: 800px; margin: 100px auto; padding: 20px; }
        h1 { background: linear-gradient(90deg, #00d9ff, #0055ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .grid { display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 20px; }
        .grid a { color: #00d9ff; text-decoration: none; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; }
        .grid a:hover { background: rgba(255,255,255,0.1); }
    </style>
</head>
<body>
    <div class="container">
        <a href="/tools/grc-assessment/" style="color: #888; text-decoration: none;">&larr; Back to GRC Engine</a>
        <h1 style="margin-top:20px;">ISO 27001 Controls & Clauses Glossary</h1>
        <p>Expert rationale, evidence requirements, and remediation advice for every ISO 27001 requirement.</p>
        <div class="grid">
"""
    for domain in data.get('domains', []):
        glossary_html += f"<h2 style='margin-top:30px; color:#fff;'>{domain.get('name', '')}</h2>\n"
        for control in domain.get('controls', []):
            control_id = control.get('control_id', '').replace(' ', '-').lower()
            safe_id = re.sub(r'[^a-z0-9\-]', '', control_id)
            filename = f"iso-27001-{safe_id}-guide.html"
            control_title = control.get('control_title', '')
            glossary_html += f"            <a href='{filename}'>{control_title}</a>\n"
            
    glossary_html += """        </div>
    </div>

    <!-- Carbon Ads via Fullres -->
    <script>
        (function () {
            var fullres = document.createElement('script');
            fullres.async = true;
            fullres.src = 'https://t.fullres.net/thehgtech.js?' + (new Date() - new Date() % 43200000);
            document.head.appendChild(fullres);
        })();
    </script>

    <!-- Google Analytics 4 -->
    <script>
        window.addEventListener('load', function () {
            setTimeout(function () {
                var gtmScript = document.createElement('script');
                gtmScript.async = true;
                gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XL6RCXZJE2';
                document.head.appendChild(gtmScript);

                gtmScript.onload = function () {
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', 'G-XL6RCXZJE2');
                };
            }, 500);
        });
    </script>
</body>
</html>"""
    
    with open(os.path.join(out_dir, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(glossary_html)
    print("Generated glossary index.html")

if __name__ == '__main__':
    main()
