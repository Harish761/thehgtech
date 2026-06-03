import glob
import re

files = glob.glob('articles/*.html') + glob.glob('guides/*.html')

def unescape_newlines(match):
    return match.group(0).replace('\\n', '\n')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Unescape FAQPage schema
    content = re.sub(r'\\n\s*<!-- ========== STRUCTURED DATA - FAQPAGE ========== -->\\n.*?\\n\s*</script>\\n', unescape_newlines, content, flags=re.DOTALL)
    
    # Unescape alert-box
    content = re.sub(r'\\n<div class="alert-box".*?</div>\\n', unescape_newlines, content, flags=re.DOTALL)
    
    # Unescape faq-section
    content = re.sub(r'\\n<div class="faq-section".*?</div>\\n', unescape_newlines, content, flags=re.DOTALL)
    
    # Remove duplicates of alert-box
    # After unescaping, it looks like: \n<div class="alert-box"...</div>\n\n<div class="alert-box"...</div>\n
    # We can match two identical blocks.
    
    # Since the block might have variable content, let's match the alert-box block and if the next block is identical, remove it.
    alert_pattern = re.compile(r'(\n<div class="alert-box".*?</div>\n)\s*\1', re.DOTALL)
    content = alert_pattern.sub(r'\1', content)
    
    # Also handle the literal \n case before unescaping just in case it didn't unescape perfectly due to some space differences?
    alert_pattern_literal = re.compile(r'(\\n<div class="alert-box".*?</div>\\n)\\n\1', re.DOTALL)
    content = alert_pattern_literal.sub(r'\1', content)

    # Remove duplicates of faq-section
    faq_pattern = re.compile(r'(\n<div class="faq-section".*?</div>\n)\s*\1', re.DOTALL)
    content = faq_pattern.sub(r'\1', content)
    
    faq_pattern_literal = re.compile(r'(\\n<div class="faq-section".*?</div>\\n)\\n\1', re.DOTALL)
    content = faq_pattern_literal.sub(r'\1', content)

    # Note: there is also an issue where literal \n\n<div class="alert-box" ...
    # Might have multiple literal \n between duplicates
    alert_pattern_multiple = re.compile(r'(\n<div class="alert-box".*?</div>\n)(?:\n|<br>|\s)*\1', re.DOTALL)
    content = alert_pattern_multiple.sub(r'\1', content)

    faq_pattern_multiple = re.compile(r'(\n<div class="faq-section".*?</div>\n)(?:\n|<br>|\s)*\1', re.DOTALL)
    content = faq_pattern_multiple.sub(r'\1', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")

# Also fix the generator script itself!
with open('bulk_geo_optimizer.py', 'r', encoding='utf-8') as f:
    script_content = f.read()

if "\\n<div class=" in script_content:
    script_content = script_content.replace("\\n<div", "\\n<div".replace("\\n", "\n"))
    script_content = script_content.replace("</div>\\n", "</div>\n")
    script_content = script_content.replace("\\n    <!--", "\n    <!--")
    script_content = script_content.replace("</script>\\n", "</script>\n")
    # Actually just replace all literal '\\n' with '\n' in the script where it's used for HTML injection
    script_content = script_content.replace("\\n", "\n")
    with open('bulk_geo_optimizer.py', 'w', encoding='utf-8') as f:
        f.write(script_content)
    print("Fixed bulk_geo_optimizer.py")

