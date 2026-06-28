import os
import re

def defang_content(content):
    # Defang specific domains
    content = content.replace('evil.com', 'evil[.]com')
    content = content.replace('attacker.com', 'attacker[.]com')
    content = content.replace('fake-bank-login.com', 'fake-bank-login[.]com')
    content = content.replace('maliciouscorgi.net', 'maliciouscorgi[.]net')
    content = content.replace('malicious-phishing-site.com', 'malicious-phishing-site[.]com')
    
    # Defang specific payloads
    content = content.replace('payload.exe', 'payload[.]exe')
    content = content.replace('malware.exe', 'malware[.]exe')
    content = content.replace('file.sct', 'file[.]sct')
    
    # Optional: replace http:// with hxxp:// if followed by defanged domain
    content = re.sub(r'http://(evil\[\.\]com|attacker\[\.\]com|fake-bank-login\[\.\]com|maliciouscorgi\[\.\]net|malicious-phishing-site\[\.\]com)', r'hxxp://\1', content)
    content = re.sub(r'https://(evil\[\.\]com|attacker\[\.\]com|fake-bank-login\[\.\]com|maliciouscorgi\[\.\]net|malicious-phishing-site\[\.\]com)', r'hxxps://\1', content)
    
    return content

count = 0
for root, _, files in os.walk('.'):
    if '.git' in root or '.agent' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith(('.html', '.md')):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    original = f.read()
                
                defanged = defang_content(original)
                
                if defanged != original:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(defanged)
                    count += 1
                    print(f"Defanged: {filepath}")
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Total files defanged: {count}")
