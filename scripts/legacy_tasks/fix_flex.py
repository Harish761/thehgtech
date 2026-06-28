import sys

files = ['ui-enhancements.css', 'm-layout.css', 'm-layout.min.css']

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # In the minified file it might be "flex-direction:row-reverse" without spaces
    content = content.replace("flex-direction: row-reverse;", "")
    content = content.replace("flex-direction:row-reverse;", "")
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Removed flex-direction: row-reverse from CSS files.")
