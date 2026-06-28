import os
import re
import json

directories = ['articles', 'guides', 'comparisons']
base_path = '/Volumes/Data-Personal/Webpage/thehgtech'

results = {
    'good': [],
    'needs_work': []
}

def analyze_file(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # GEO Criteria checks
    has_schema = 'application/ld+json' in content
    has_table = '<table' in content
    has_h2 = '<h2' in content
    has_faq = re.search(r'<h[23][^>]*>(?i:.*faq.*|.*frequently asked questions.*)</h[23]>', content) is not None
    has_takeaways = re.search(r'(?i)(key takeaways|quick summary|tl;dr|tl;dr:)', content) is not None

    score = sum([has_schema, has_table, has_h2, has_faq, has_takeaways])
    
    filename = os.path.basename(filepath)
    category = os.path.basename(os.path.dirname(filepath))
    
    # If it meets 3 or more criteria, it's relatively good. Otherwise needs work.
    status = 'good' if score >= 3 else 'needs_work'
    
    return {
        'file': f"{category}/{filename}",
        'score': score,
        'has_schema': has_schema,
        'has_table': has_table,
        'has_h2': has_h2,
        'has_faq': has_faq,
        'has_takeaways': has_takeaways,
        'status': status
    }

for d in directories:
    dir_path = os.path.join(base_path, d)
    if not os.path.exists(dir_path):
        continue
    for filename in os.listdir(dir_path):
        if filename.endswith('.html') and filename != 'index.html' and filename != 'index-new.html':
            filepath = os.path.join(dir_path, filename)
            res = analyze_file(filepath)
            results[res['status']].append(res)

with open(os.path.join(base_path, 'geo_analysis_results.json'), 'w') as f:
    json.dump(results, f, indent=2)

print(f"Analyzed {len(results['good']) + len(results['needs_work'])} files.")
print(f"Good for GEO: {len(results['good'])}")
print(f"Needs Work: {len(results['needs_work'])}")
