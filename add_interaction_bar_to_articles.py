#!/usr/bin/env python3
"""
Add interaction bar to all articles in articles.json
"""

import json

# Interaction bar HTML to add
INTERACTION_BAR_HTML = '''
        <!-- Interaction Bar -->
        <div class="interaction-bar">
            <div class="like-section">
                <button class="like-btn" id="likeBtn" onclick="toggleLike()">
                    <i class="far fa-heart"></i> <span id="likeText">Like this article</span>
                </button>
            </div>
            <div class="action-buttons">
                <div class="share-buttons">
                    <a href="#" onclick="shareTwitter(event)" class="share-btn" title="Share on Twitter" aria-label="Share on Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" onclick="shareLinkedIn(event)" class="share-btn" title="Share on LinkedIn" aria-label="Share on LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <button onclick="copyLink()" class="share-btn" title="Copy Link" aria-label="Copy Link">
                        <i class="fas fa-link"></i>
                    </button>
                </div>
                <div class="button-separator"></div>
                <button onclick="printArticle()" class="print-btn" title="Print Article" aria-label="Print Article">
                    <i class="fas fa-print"></i>
                </button>
            </div>
        </div>
'''

def main():
    print("📝 Adding interaction bar to all articles in articles.json...")
    
    # Read articles.json
    with open('articles.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    updated_count = 0
    skipped_count = 0
    
    for article in data['articles']:
        article_id = article.get('id', 'unknown')
        content = article.get('content', '')
        
        # Check if interaction bar already exists
        if 'interaction-bar' in content:
            print(f"⏭️  {article_id}: Already has interaction bar")
            skipped_count += 1
            continue
        
        # Add interaction bar before the end of content
        # Look for common ending patterns
        if '</article>' in content:
            # Add before </article>
            article['content'] = content.replace('</article>', INTERACTION_BAR_HTML + '\n        </article>')
            print(f"✅ {article_id}: Added interaction bar (before </article>)")
            updated_count += 1
        elif content.strip().endswith('</div>'):
            # Add at the end
            article['content'] = content + INTERACTION_BAR_HTML
            print(f"✅ {article_id}: Added interaction bar (at end)")
            updated_count += 1
        else:
            # Add at the end anyway
            article['content'] = content + INTERACTION_BAR_HTML
            print(f"✅ {article_id}: Added interaction bar (at end)")
            updated_count += 1
    
    # Write back to articles.json
    with open('articles.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"\n{'='*60}")
    print(f"✅ Updated: {updated_count} articles")
    print(f"⏭️  Skipped: {skipped_count} articles")
    print(f"📊 Total: {updated_count + skipped_count} articles")
    print(f"{'='*60}\n")
    print("✅ articles.json updated successfully!")

if __name__ == '__main__':
    main()
