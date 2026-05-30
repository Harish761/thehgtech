import os
import re

base_path = '/Volumes/Data-Personal/Webpage/thehgtech/guides'
files_to_fix = [
    'security-metrics-kpis-dashboard.html',
    'openphish-integration.html',
    'owasp-llm-top-10.html',
    'insider-threat-detection.html',
    'incident-response-plan.html'
]

# We will just run the injection again, but this time using regex to find injection points
from bulk_geo_optimizer import content_map, generate_takeaways_html, generate_faqs_html

for filename in files_to_fix:
    full_path = os.path.join(base_path, filename)
    key = f"guides/{filename}"
    if key not in content_map:
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    takeaways_html = generate_takeaways_html(content_map[key]['takeaways'])
    faqs_html = generate_faqs_html(content_map[key]['faqs'])
    
    # Inject takeaways after the first <p> following <article
    # Or just replace <article class="content"> if it exists but maybe it's <article>
    html = re.sub(r'(<article[^>]*>)', r'\1\n' + takeaways_html, html, count=1)
    
    # Inject faqs right before </article>
    html = html.replace('</article>', faqs_html + '\n</article>')
    
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(html)
        
    print(f"Fixed {filename}")
