# Interaction Bar - Implementation Guide

## Quick Copy-Paste Template

### 1. Add to `<head>` section:
```html
<!-- Interaction Bar Styles -->
<link rel="stylesheet" href="/interaction-bar.css">
```

### 2. Add before `<footer>` (after article content):
```html
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
```

### 3. Add before closing `</body>`:
```html
<!-- Interaction Bar Script -->
<script src="/interaction-bar.js"></script>
```

## Features

✅ **Like Button** - Persistent across page visits (localStorage)
✅ **Share on Twitter** - Opens Twitter share dialog
✅ **Share on LinkedIn** - Opens LinkedIn share dialog
✅ **Copy Link** - Copies URL to clipboard with visual feedback
✅ **Print Article** - Opens browser print dialog
✅ **Responsive** - Mobile-friendly layout
✅ **Light/Dark Mode** - Automatic theme support
✅ **Accessible** - ARIA labels and keyboard navigation

## Styling

The interaction bar matches your existing design:
- Dark theme with glassmorphism
- Smooth hover animations
- Consistent with other UI elements
- Print-friendly (hidden when printing)

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ✅ Fallback for older browsers (copy link)

## Dependencies

Requires Font Awesome for icons (already included in your pages):
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```
