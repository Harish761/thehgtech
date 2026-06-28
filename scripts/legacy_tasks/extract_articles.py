import json
from bs4 import BeautifulSoup
import glob
import re

files = [
    "delve-ai-compliance-scandal-2026.html",
    "ai-soc-analyst-future-2026.html",
    "semiconductor-ransomware-chips-act-2026.html",
    "totalenergies-data-breach-2026.html",
    "india-ai-summit-2026-wrapper-epidemic.html",
    "axios-supply-chain-attack-2026.html",
    "kimwolf-botnet-android-ddos-2025.html",
    "prompt-injection-physical-ai-2026.html",
    "claude-mythos-security-analysis-2026.html",
    "n8n-ni8mare-critical-vulnerability-2026.html",
    "lastpass-vault-cracks-2026.html",
    "oauth-worms-saas-attack-2026.html"
]

results = {}
for f in files:
    path = f"articles/{f}"
    try:
        with open(path, "r", encoding="utf-8") as file:
            html = file.read()
        soup = BeautifulSoup(html, "html.parser")
        
        # Title
        title_tag = soup.find("title")
        title = title_tag.text if title_tag else ""
        
        # Meta description
        meta_desc = soup.find("meta", {"name": "description"})
        desc = meta_desc["content"] if meta_desc and "content" in meta_desc.attrs else ""
        
        # h1
        h1_tag = soup.find("h1", class_="article-title") or soup.find("h1")
        h1 = h1_tag.text if h1_tag else ""
        
        # first 2 paragraphs inside article-content
        content_div = soup.find("div", class_="article-content")
        paragraphs = []
        if content_div:
            # get the direct paragraphs
            p_tags = content_div.find_all("p", recursive=False)
            # ignore empty paragraphs or very short ones
            p_tags = [p for p in p_tags if len(p.text.strip()) > 20]
            paragraphs = [p.text for p in p_tags[:2]]
        
        results[f] = {
            "title": title,
            "description": desc,
            "h1": h1,
            "paragraphs": paragraphs
        }
    except Exception as e:
        results[f] = {"error": str(e)}

with open("extracted_articles.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print("Extraction complete.")
