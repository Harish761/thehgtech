import os

with open('ui-enhancements.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

coffee_css = "".join(lines[892:990]) # lines 893 to 990

with open('m-layout.css', 'a', encoding='utf-8') as f:
    f.write("\n" + coffee_css)

with open('m-layout.min.css', 'a', encoding='utf-8') as f:
    # simple minify just for this chunk
    min_css = coffee_css.replace("\n", "").replace("    ", "").replace("  ", "")
    f.write(min_css)

print("CSS appended to m-layout.css and m-layout.min.css")
