import os

sitemap_path = '/Volumes/Data-Personal/Webpage/thehgtech/sitemap.xml'
controls_dir = '/Volumes/Data-Personal/Webpage/thehgtech/tools/grc-assessment/controls'

with open(sitemap_path, 'r', encoding='utf-8') as f:
    content = f.read()

urls_to_add = []

# Add the glossary index
urls_to_add.append("""  <url>
    <loc>https://thehgtech.com/tools/grc-assessment/controls/index.html</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>""")

# Add all generated control pages
for filename in os.listdir(controls_dir):
    if filename.endswith('.html') and filename != 'index.html':
        urls_to_add.append(f"""  <url>
    <loc>https://thehgtech.com/tools/grc-assessment/controls/{filename}</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>""")

urls_string = "\n".join(urls_to_add) + "\n</urlset>"

if "</urlset>" in content:
    new_content = content.replace("</urlset>", urls_string)
    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Added {len(urls_to_add)} URLs to sitemap.xml")
else:
    print("Could not find </urlset> in sitemap.xml")
