import os
import re

def fix_tabnabbing():
    count = 0
    for root, _, files in os.walk('.'):
        if '.git' in root or '.agent' in root or 'node_modules' in root: continue
        for file in files:
            if file.endswith('.html'):
                fpath = os.path.join(root, file)
                with open(fpath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # We need to find <a ... target="_blank" ...> and ensure rel="noopener noreferrer" exists
                # This is tricky with regex. A simpler approach is to find all target="_blank" and 
                # replace it with target="_blank" rel="noopener noreferrer", but first strip existing rels
                
                # Function to fix a single anchor tag
                def replacer(match):
                    tag = match.group(0)
                    if 'target="_blank"' in tag or "target='_blank'" in tag:
                        # If it already has the exact proper rel, skip
                        if 'rel="noopener noreferrer"' in tag:
                            return tag
                        if "rel='noopener noreferrer'" in tag:
                            return tag
                        
                        # Remove existing rel attributes entirely
                        tag = re.sub(r'\s+rel="[^"]*"', '', tag)
                        tag = re.sub(r"\s+rel='[^']*'", '', tag)
                        tag = re.sub(r'\s+rel=[^\s>]+', '', tag)
                        
                        # Add the correct rel right after target="_blank"
                        tag = tag.replace('target="_blank"', 'target="_blank" rel="noopener noreferrer"')
                        tag = tag.replace("target='_blank'", "target='_blank' rel=\"noopener noreferrer\"")
                        return tag
                    return tag

                new_content = re.sub(r'<a\s+[^>]*>', replacer, content, flags=re.IGNORECASE)
                
                if new_content != content:
                    count += 1
                    with open(fpath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
    print(f"Fixed tabnabbing in {count} HTML files.")

fix_tabnabbing()
