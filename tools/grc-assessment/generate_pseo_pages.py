import json
import re
from pathlib import Path


def extract_json_from_js(js_path: Path):
    content = js_path.read_text(encoding="utf-8")
    match = re.search(r"const THEHGTECH_GRC_DATA = (\{.*?\});", content, re.DOTALL)
    if match:
        json_str = match.group(1)
        try:
            return json.loads(json_str)
        except json.JSONDecodeError as e:
            print(f"Error parsing JSON: {e}")
            return None
    return None


def make_safe_id(control_id: str) -> str:
    return re.sub(r"[^a-z0-9\-]", "", control_id.replace(" ", "-").lower())


def generate_html(control, domain):
    safe_id = make_safe_id(control.get("control_id", ""))
    control_title = control.get("control_title", "")
    filename = f"iso-27001-{safe_id}-guide.html"
    canonical_url = f"https://thehgtech.com/tools/grc-assessment/controls/{filename}"
    page_title = f"ISO 27001 {control_title} | Gap Analysis & Evidence Guide"

    template = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="robots" content="noindex, follow">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="referrer" content="no-referrer">
    <title>{page_title}</title>
    <meta name="description" content="Free expert guidance, evidence requirements, and remediation advice for ISO 27001 {control_title}. Part of TheHGTech's free GRC Engine.">
    <link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="/fonts.css">
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

    <script src="/theme-toggle.js" defer></script>
    <link rel="canonical" href="{canonical_url}">
    <meta property="og:url" content="{canonical_url}">
    <meta property="og:title" content="{page_title}">
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
</body>
</html>
"""
    return filename, template


def generate_glossary_index(data) -> str:
    glossary_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="referrer" content="no-referrer">
    <title>ISO 27001 Controls & Clauses Glossary | TheHGTech</title>
    <meta name="description" content="Complete glossary and evidence guide for all ISO 27001 clauses and Annex A controls.">
    <link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="/fonts.css">
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

    <script src="/theme-toggle.js" defer></script>
    <link rel="canonical" href="https://thehgtech.com/tools/grc-assessment/controls/">
    <meta property="og:url" content="https://thehgtech.com/tools/grc-assessment/controls/">
    <meta property="og:title" content="ISO 27001 Controls & Clauses Glossary | TheHGTech">
</head>
<body>
    <div class="container">
        <a href="/tools/grc-assessment/" style="color: #888; text-decoration: none;">&larr; Back to GRC Engine</a>
        <h1 style="margin-top:20px;">ISO 27001 Controls & Clauses Glossary</h1>
        <p>Expert rationale, evidence requirements, and remediation advice for every ISO 27001 requirement.</p>
        <div class="grid">
"""
    for domain in data.get("domains", []):
        glossary_html += f"<h2 style='margin-top:30px; color:#fff;'>{domain.get('name', '')}</h2>\n"
        for control in domain.get("controls", []):
            safe_id = make_safe_id(control.get("control_id", ""))
            filename = f"iso-27001-{safe_id}-guide.html"
            control_title = control.get("control_title", "")
            glossary_html += f'            <a href="{filename}">{control_title}</a>\n'

    glossary_html += """        </div>
    </div>
</body>
</html>
"""
    return glossary_html


def main():
    base_dir = Path(__file__).resolve().parent
    js_path = base_dir / "grc-data.js"
    data = extract_json_from_js(js_path)

    if not data:
        print("Failed to load data")
        return

    out_dir = base_dir / "controls"
    out_dir.mkdir(parents=True, exist_ok=True)

    count = 0
    for domain in data.get("domains", []):
        for control in domain.get("controls", []):
            filename, html = generate_html(control, domain)
            (out_dir / filename).write_text(html, encoding="utf-8")
            count += 1

    print(f"Generated {count} PSEO pages in {out_dir}")

    glossary_html = generate_glossary_index(data)
    (out_dir / "index.html").write_text(glossary_html, encoding="utf-8")
    print("Generated glossary index.html")


if __name__ == "__main__":
    main()
