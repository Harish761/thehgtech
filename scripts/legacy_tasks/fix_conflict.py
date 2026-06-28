import json
import re

with open('ioc-data/articles.json', 'r') as f:
    content = f.read()

# The content has conflict markers. We can parse them out or just use regex.
head_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [a-f0-9]+ \(feat: Publish Trellix source code breach technical analysis article\)'
match = re.search(head_pattern, content, re.DOTALL)
if match:
    report_json = match.group(1)
    trellix_json = match.group(2)
    # the trellix_json doesn't have a trailing comma, report_json doesn't either inside the marker?
    # Actually, they are inside the array.
    # The original structure:
    # {
    # <<<<<<< HEAD
    #   report_json
    # =======
    #   trellix_json
    # >>>>>>> hash
    # },
    # Let's just fix it properly by replacing the block.
    
    fixed_block = trellix_json + ",\n    {\n" + report_json
    new_content = content[:match.start()] + fixed_block + content[match.end():]
    
    with open('ioc-data/articles.json', 'w') as f:
        f.write(new_content)
    print("Conflict fixed!")
else:
    print("No conflict found!")
