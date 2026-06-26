import re
import os

file_path = '/Volumes/Data-Personal/Webpage/thehgtech/index.html'
with open(file_path, 'r') as f:
    content = f.read()

# Fix Duplicate H1 (mobile hero)
# Find: <h1 style="font-size: 2.8rem; font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; color: var(--text-primary); text-shadow: 0 4px 30px rgba(0,0,0,0.5);">
# Replace with <h2 class="h1" ...
content = content.replace(
    '<h1 style="font-size: 2.8rem; font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; color: var(--text-primary); text-shadow: 0 4px 30px rgba(0,0,0,0.5);">',
    '<h2 class="h1" style="font-size: 2.8rem; font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; color: var(--text-primary); text-shadow: 0 4px 30px rgba(0,0,0,0.5);">'
)
content = content.replace(
    'Threat Intel</span><br> & Analysis\n        </h1>',
    'Threat Intel</span><br> & Analysis\n        </h2>'
)

# Fix Dead CTAs in footer
# <li><a data-removed-broken-link="true">CVE Alerts</a></li>
content = content.replace(
    '<li><a data-removed-broken-link="true">CVE Alerts</a></li>',
    '<li><a href="/cve-tracker.html">CVE Alerts</a></li>'
)
content = content.replace(
    '<li><a data-removed-broken-link="true">Articles</a></li>',
    '<li><a href="/articles.html">Articles</a></li>'
)
content = content.replace(
    '<li><a data-removed-broken-link="true">Threat Intelligence</a></li>',
    '<li><a href="/threat-intel.html">Threat Intelligence</a></li>'
)
content = content.replace(
    '<li><a data-removed-broken-link="true">Cybersecurity</a></li>',
    '<li><a href="/articles.html">Cybersecurity</a></li>'
)
content = content.replace(
    '<li><a data-removed-broken-link="true">AI & Machine Learning</a></li>',
    '<li><a href="/articles.html">AI & Machine Learning</a></li>'
)
content = content.replace(
    '<li><a data-removed-broken-link="true">Vulnerabilities</a></li>',
    '<li><a href="/cve-tracker.html">Vulnerabilities</a></li>'
)
content = content.replace(
    '<li><a data-removed-broken-link="true">Analysis</a></li>',
    '<li><a href="/articles.html">Analysis</a></li>'
)

# Replace Privacy and Terms modals with links or buttons
content = content.replace(
    '<li><a href="#" onclick="openModal(\'privacy\'); return false;">Privacy Policy</a></li>',
    '<li><a href="/privacy.html">Privacy Policy</a></li>'
)
content = content.replace(
    '<li><a href="#" onclick="openModal(\'terms\'); return false;">Terms of Service</a></li>',
    '<li><a href="javascript:void(0)" onclick="openModal(\'terms\'); return false;">Terms of Service</a></li>'
)
content = content.replace(
    '<li><a href="#" onclick="openModal(\'advertise\'); return false;">Advertise</a></li>',
    '<li><a href="javascript:void(0)" onclick="openModal(\'advertise\'); return false;">Advertise</a></li>'
)
content = content.replace(
    '<p>For privacy concerns, contact us at: <a href="#"',
    '<p>For privacy concerns, contact us at: <a href="javascript:void(0)"'
)

# Fix IOC Intelligence card
content = content.replace(
    '<a data-removed-broken-link="true" class="solution-card"\n                        style="text-decoration: none; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; transition: all 0.3s ease; display: block;">',
    '<a href="/threat-intel.html" class="solution-card"\n                        style="text-decoration: none; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; transition: all 0.3s ease; display: block;">'
)

# Fix CVE Tracker card
content = content.replace(
    '<a data-removed-broken-link="true" class="solution-card"\n                        style="text-decoration: none; background: rgba(255, 61, 61, 0.03); border: 1px solid rgba(255, 61, 61, 0.2); border-radius: 16px; padding: 2rem; transition: all 0.3s ease; display: block;">',
    '<a href="/cve-tracker.html" class="solution-card"\n                        style="text-decoration: none; background: rgba(255, 61, 61, 0.03); border: 1px solid rgba(255, 61, 61, 0.2); border-radius: 16px; padding: 2rem; transition: all 0.3s ease; display: block;">'
)

# Fix News to point to articles.html instead of #news anchor
content = content.replace(
    '<a href="#news" class="solution-card"',
    '<a href="/articles.html" class="solution-card"'
)

with open(file_path, 'w') as f:
    f.write(content)

print("index.html fixed!")
