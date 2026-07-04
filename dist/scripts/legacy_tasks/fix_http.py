import os

count = 0
for root, _, files in os.walk('.'):
    if '.git' in root or '.agent' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith(('.html', '.md')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content.replace('http://evil', 'hxxp://evil').replace('https://evil', 'hxxps://evil')
            new_content = new_content.replace('http://attacker', 'hxxp://attacker').replace('https://attacker', 'hxxps://attacker')
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1

print(f"Fixed http protocols in {count} files")
