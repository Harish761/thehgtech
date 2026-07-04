import glob
import re
import ast
import json

def fix_json_ld(html_content, filepath):
    def replacer(match):
        pre = match.group(1)
        content = match.group(2)
        post = match.group(3)
        
        # Only process if we find NewsArticle or Article (or we could try all)
        if '"NewsArticle"' in content or "'NewsArticle'" in content:
            # Prepare for ast.literal_eval
            # Python expects True, False, None instead of true, false, null
            # But we must be careful not to replace them inside strings.
            # As a simple heuristic, replace them globally (might be risky, but usually safe for schema)
            # Actually, ast.literal_eval isn't safe if it's already perfectly valid JSON that happens to have true/false.
            # Let's try json.loads first. If it succeeds, the JSON is ALREADY valid!
            try:
                json.loads(content)
                # If it loads perfectly, we just need to fix mainEntityOfPage
                parsed = json.loads(content)
                if 'mainEntityOfPage' in parsed and isinstance(parsed['mainEntityOfPage'], str):
                    parsed['mainEntityOfPage'] = {
                        "@type": "WebPage",
                        "@id": parsed['mainEntityOfPage']
                    }
                    return pre + "\n" + json.dumps(parsed, indent=2) + "\n" + post
                return match.group(0) # Already valid and correct format
            except json.JSONDecodeError:
                pass # Proceed to AST fix
            
            # If JSON failed, it might be due to single quotes.
            try:
                # Replace true/false/null ONLY if not quoted
                py_content = re.sub(r'\btrue\b', 'True', content)
                py_content = re.sub(r'\bfalse\b', 'False', py_content)
                py_content = re.sub(r'\bnull\b', 'None', py_content)
                
                parsed = ast.literal_eval(py_content.strip())
                
                if 'mainEntityOfPage' in parsed and isinstance(parsed['mainEntityOfPage'], str):
                    parsed['mainEntityOfPage'] = {
                        "@type": "WebPage",
                        "@id": parsed['mainEntityOfPage']
                    }
                
                new_content = "\n" + json.dumps(parsed, indent=2) + "\n"
                return pre + new_content + post
            except Exception as e:
                print(f"Failed to fix JSON-LD in {filepath}: {e}")
                
        return match.group(0)

    return re.sub(r'(<script type="application/ld\+json">\s*)(.*?)(\s*</script>)', replacer, html_content, flags=re.DOTALL)

files = []
for directory in ['articles', 'guides', 'comparisons']:
    files.extend(glob.glob(f'{directory}/**/*.html', recursive=True))

fixed_count = 0
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    new_content = fix_json_ld(content, f)
    
    if new_content != content:
        with open(f, 'w') as file:
            file.write(new_content)
        fixed_count += 1

print(f"Fixed JSON-LD in {fixed_count} files out of {len(files)} files checked.")
