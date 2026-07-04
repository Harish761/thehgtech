import glob
import re
import ast
import json

def fix_json_ld(html_content):
    def replacer(match):
        pre = match.group(1)
        content = match.group(2)
        post = match.group(3)
        
        # Only process if it looks like the python-dict we injected
        if "'@type':" in content or "'@context':" in content or "'NewsArticle'" in content or "'headline':" in content:
            try:
                parsed = ast.literal_eval(content.strip())
                
                # Fix mainEntityOfPage string -> WebPage object
                if 'mainEntityOfPage' in parsed and isinstance(parsed['mainEntityOfPage'], str):
                    parsed['mainEntityOfPage'] = {
                        "@type": "WebPage",
                        "@id": parsed['mainEntityOfPage']
                    }
                    
                # Ensure it's pretty-printed valid JSON
                new_content = "\n" + json.dumps(parsed, indent=2) + "\n"
                return pre + new_content + post
            except Exception as e:
                # If parsing fails, just leave it as is
                pass
        return match.group(0)

    # Find all <script type="application/ld+json"> blocks
    new_html = re.sub(r'(<script type="application/ld\+json">\s*)(.*?)(\s*</script>)', replacer, html_content, flags=re.DOTALL)
    return new_html

files = []
for directory in ['articles', 'guides', 'comparisons']:
    files.extend(glob.glob(f'{directory}/**/*.html', recursive=True))

fixed_count = 0
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    new_content = fix_json_ld(content)
    
    if new_content != content:
        with open(f, 'w') as file:
            file.write(new_content)
        fixed_count += 1

print(f"Fixed JSON-LD in {fixed_count} files out of {len(files)} files checked.")
