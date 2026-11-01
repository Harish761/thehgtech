/* ==========================================================================
   THEHGTECH — UNIFIED EDITORIAL ARTICLE READER ENGINE (PILOT v1.0)
   Local-only isolated script for Individual Article UX/UI Redesign Pilot.
   ========================================================================== */

(function () {
    'use strict';

    /* ----------------------------------------------------------------------
       1. READER FONT SCALE & THEME SURFACE CONTROLS
       ---------------------------------------------------------------------- */
    window.setArticleReaderScale = function (scale) {
        if (scale === 'default') {
            document.body.removeAttribute('data-reader-scale');
            try { localStorage.removeItem('hg_reader_scale'); } catch (e) {}
        } else {
            document.body.setAttribute('data-reader-scale', scale);
            try { localStorage.setItem('hg_reader_scale', scale); } catch (e) {}
        }
        document.querySelectorAll('.ap-reader-btn[data-scale]').forEach(function (btn) {
            var active = btn.getAttribute('data-scale') === scale;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    };

    window.togglePilotTheme = function () {
        if (typeof window.toggleTheme === 'function') {
            window.toggleTheme();
        } else {
            var isLight = document.documentElement.getAttribute('data-theme') === 'light' ||
                          document.body.classList.contains('light-mode');
            if (isLight) {
                document.documentElement.removeAttribute('data-theme');
                document.body.classList.remove('light-mode');
                try { localStorage.setItem('theme', 'dark'); } catch (e) {}
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                document.body.classList.add('light-mode');
                try { localStorage.setItem('theme', 'light'); } catch (e) {}
            }
        }
        syncThemeLabel();
    };

    function syncThemeLabel() {
        var isLight = document.documentElement.getAttribute('data-theme') === 'light' ||
                      document.body.classList.contains('light-mode');
        var lbl = document.getElementById('apThemeLabel');
        if (lbl) {
            lbl.textContent = isLight ? 'Obsidian' : 'Paper';
        }
    }

    /* ----------------------------------------------------------------------
       2. SCROLL PROGRESS FALLBACK & TOC PERCENTAGE
       ---------------------------------------------------------------------- */
    function initReadingProgress() {
        var progress = document.getElementById('progress');
        var tocPct = document.getElementById('apTocPct');
        var jumpPill = document.getElementById('apMobileJumpPill');
        var supportsScrollTimeline = typeof CSS !== 'undefined' &&
                                     CSS.supports &&
                                     CSS.supports('animation-timeline', 'scroll()');

        function onScroll() {
            var scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
            var scrolled = Math.min(Math.max(0, window.scrollY), scrollable);
            var ratio = scrolled / scrollable;

            if (!supportsScrollTimeline && progress) {
                progress.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
            }
            if (tocPct) {
                tocPct.textContent = Math.round(ratio * 100) + '%';
            }
            if (jumpPill) {
                jumpPill.classList.toggle('visible', window.scrollY > 420);
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ----------------------------------------------------------------------
       3. NATIVE CSS SCROLLSPY + ARIA-CURRENT SYNC + IO FALLBACK
       ---------------------------------------------------------------------- */
    var activeScrollObserver = null;

    function initScrollspy() {
        var navLinks = document.querySelectorAll('.ap-toc-nav a');
        var sections = document.querySelectorAll('.ap-prose section[id]');
        if (!navLinks.length || !sections.length) return;

        if (activeScrollObserver) {
            activeScrollObserver.disconnect();
            activeScrollObserver = null;
        }

        var supportsScrollTargetGroup = typeof CSS !== 'undefined' &&
                                        CSS.supports &&
                                        CSS.supports('scroll-target-group: auto');

        if (supportsScrollTargetGroup) {
            var syncAriaCurrent = function () {
                var currentLink = null;
                try {
                    currentLink = document.querySelector('.ap-toc-nav a:target-current');
                } catch (e) {}
                navLinks.forEach(function (link) {
                    link.setAttribute('aria-current', link === currentLink ? 'true' : 'false');
                });
            };
            syncAriaCurrent();
            document.addEventListener('scrollend', syncAriaCurrent, { passive: true });
        } else {
            activeScrollObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var id = entry.target.getAttribute('id');
                        navLinks.forEach(function (link) {
                            var isActive = link.getAttribute('href') === '#' + id;
                            link.classList.toggle('\\:target-current', isActive);
                            link.setAttribute('aria-current', isActive ? 'true' : 'false');
                        });
                    }
                });
            }, { rootMargin: '-22% 0px -65% 0px', threshold: 0 });

            sections.forEach(function (sec) {
                activeScrollObserver.observe(sec);
            });
            // Set initial first link active
            navLinks[0].classList.add('\\:target-current');
            navLinks[0].setAttribute('aria-current', 'true');
        }

        // Auto-close mobile <details> TOC when user selects a section
        var mobileToc = document.querySelector('.ap-mobile-toc');
        if (mobileToc) {
            mobileToc.querySelectorAll('a').forEach(function (a) {
                a.addEventListener('click', function () {
                    mobileToc.removeAttribute('open');
                });
            });
        }
    }

    /* ----------------------------------------------------------------------
       4. TOC SCROLLABILITY AFFORDANCE HINTS FALLBACK
       ---------------------------------------------------------------------- */
    function initScrollStateHints() {
        var supportsScrollState = typeof CSS !== 'undefined' &&
                                  CSS.supports &&
                                  CSS.supports('container-type', 'scroll-state');
        if (supportsScrollState) return;

        var scroller = document.querySelector('.ap-toc-scroller');
        var topSentinel = document.querySelector('.ap-sentinel-top');
        var bottomSentinel = document.querySelector('.ap-sentinel-bottom');
        if (!scroller || !topSentinel || !bottomSentinel) return;

        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.target === topSentinel) {
                    scroller.classList.toggle('scrolled-down', !entry.isIntersecting);
                }
                if (entry.target === bottomSentinel) {
                    scroller.classList.toggle('can-scroll-down', !entry.isIntersecting);
                }
            });
        }, { root: scroller });

        obs.observe(topSentinel);
        obs.observe(bottomSentinel);
    }

    /* ----------------------------------------------------------------------
       5. CODE COPY & LINE WRAP CONTROLS
       ---------------------------------------------------------------------- */
    function copyTextToClipboard(text, onDone) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(onDone).catch(function () {
                fallbackCopy(text, onDone);
            });
        } else {
            fallbackCopy(text, onDone);
        }
    }

    function fallbackCopy(text, onDone) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        if (onDone) onDone();
    }

    function wireCodeBlocks(root) {
        var scope = root || document;
        scope.querySelectorAll('.ap-code-block').forEach(function (block) {
            var copyBtn = block.querySelector('[data-action="copy-code"]');
            var wrapBtn = block.querySelector('[data-action="wrap-code"]');
            var codeEl = block.querySelector('pre code') || block.querySelector('pre');

            if (copyBtn && codeEl && !copyBtn._apWired) {
                copyBtn._apWired = true;
                var origHtml = copyBtn.innerHTML;
                copyBtn.addEventListener('click', function () {
                    var raw = codeEl.textContent || '';
                    copyTextToClipboard(raw, function () {
                        copyBtn.classList.add('copied');
                        copyBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Copied</span>';
                        announce('Code copied to clipboard');
                        setTimeout(function () {
                            copyBtn.classList.remove('copied');
                            copyBtn.innerHTML = origHtml;
                        }, 2000);
                    });
                });
            }

            if (wrapBtn && !wrapBtn._apWired) {
                wrapBtn._apWired = true;
                wrapBtn.addEventListener('click', function () {
                    var wrapped = block.classList.toggle('wrap-lines');
                    wrapBtn.setAttribute('aria-pressed', wrapped ? 'true' : 'false');
                    wrapBtn.textContent = wrapped ? 'Unwrap' : 'Wrap';
                });
            }
        });
    }

    /* ----------------------------------------------------------------------
       6. RESPONSIVE TABLE COLUMN LABEL INJECTION (--label-N)
       ---------------------------------------------------------------------- */
    function initResponsiveTables(root) {
        var scope = root || document;
        scope.querySelectorAll('.table-wrapper.ap-stackable table').forEach(function (table) {
            var headers = table.querySelectorAll('thead th');
            headers.forEach(function (th, idx) {
                var label = (th.textContent || '').trim().replace(/"/g, "'");
                if (label) {
                    table.style.setProperty('--label-' + (idx + 1), '"' + label + '"');
                }
            });
        });
    }

    /* ----------------------------------------------------------------------
       7. DIAGRAM LIGHTBOX (<dialog closedby="any"> + Safari Fallback)
       ---------------------------------------------------------------------- */
    function initDiagramLightbox(root) {
        var dialog = document.getElementById('apLightbox');
        if (!dialog) return;

        var lbImg = document.getElementById('apLightboxImg');
        var lbCap = document.getElementById('apLightboxCaption');

        if (!dialog._apBackdropWired && !('closedBy' in HTMLDialogElement.prototype)) {
            dialog._apBackdropWired = true;
            dialog.addEventListener('click', function (event) {
                if (event.target !== dialog) return;
                var rect = dialog.getBoundingClientRect();
                var isDialogContent = (
                    rect.top <= event.clientY &&
                    event.clientY <= rect.top + rect.height &&
                    rect.left <= event.clientX &&
                    event.clientX <= rect.left + rect.width
                );
                if (isDialogContent) return;
                dialog.close();
            });
        }

        var scope = root || document;
        scope.querySelectorAll('.ap-tech-img-btn').forEach(function (btn) {
            if (btn._apWired) return;
            btn._apWired = true;
            btn.addEventListener('click', function () {
                var img = btn.querySelector('img');
                if (!img) return;
                var fig = btn.closest('figure');
                var cap = fig ? fig.querySelector('figcaption') : null;
                if (lbImg) {
                    lbImg.src = img.getAttribute('src');
                    lbImg.alt = img.getAttribute('alt') || '';
                }
                if (lbCap) {
                    lbCap.textContent = cap ? cap.textContent.trim() : (img.getAttribute('alt') || 'Technical Diagram');
                }
                dialog.showModal();
            });
        });
    }

    /* ----------------------------------------------------------------------
       8. CANONICAL SHARE & LINK COPY CONTROLS
       ---------------------------------------------------------------------- */
    function getCanonicalShareUrl() {
        var link = document.querySelector('link[rel="canonical"]');
        return (link && link.getAttribute('href')) ? link.getAttribute('href') : window.location.href;
    }

    window.sharePilotX = function (e) {
        if (e) e.preventDefault();
        var url = encodeURIComponent(getCanonicalShareUrl());
        var title = encodeURIComponent(document.title);
        window.open('https://x.com/intent/tweet?url=' + url + '&text=' + title, '_blank', 'noopener,noreferrer,width=600,height=420');
    };

    window.sharePilotLinkedIn = function (e) {
        if (e) e.preventDefault();
        var url = encodeURIComponent(getCanonicalShareUrl());
        window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + url, '_blank', 'noopener,noreferrer,width=600,height=600');
    };

    window.copyPilotCanonicalLink = function (btn) {
        var url = getCanonicalShareUrl();
        copyTextToClipboard(url, function () {
            if (btn) {
                btn.classList.add('copied');
                setTimeout(function () { btn.classList.remove('copied'); }, 2000);
            }
            announce('Canonical article link copied');
        });
    };

    window.jumpToMobileToc = function () {
        var mobileToc = document.querySelector('.ap-mobile-toc');
        if (mobileToc) {
            mobileToc.setAttribute('open', '');
            mobileToc.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    function announce(msg) {
        var live = document.getElementById('apLiveStatus');
        if (live) live.textContent = msg;
    }

    /* ----------------------------------------------------------------------
       9. DYNAMIC CONTENT-ONLY / WEEKLY THREAT REPORT JSON READER ENGINE
       ---------------------------------------------------------------------- */
    async function initJsonArticleReader() {
        var readerRoot = document.querySelector('[data-json-reader="true"]');
        if (!readerRoot) return;

        var params = new URLSearchParams(window.location.search);
        var requestedId = params.get('id');
        var switcher = document.getElementById('apJsonIssueSelect');

        try {
            var payload = null;
            try {
                var res = await fetch('/ioc-data/articles.json');
                if (!res.ok) res = await fetch('ioc-data/articles.json');
                if (res.ok) payload = await res.json();
            } catch (fetchErr) {}
            if (!payload) {
                var emb = document.getElementById('embeddedJsonArticles');
                if (emb) payload = JSON.parse(emb.textContent);
            }
            if (!payload) return;
            var list = Array.isArray(payload) ? payload : (payload.articles || []);
            var jsonArticles = list.filter(function (a) { return !a.externalUrl && a.content; });

            if (switcher && switcher.options.length <= 4) {
                switcher.innerHTML = '';
                var weeklyGroup = document.createElement('optgroup');
                weeklyGroup.label = 'Weekly Threat Reports (48 Automated Briefs)';
                var editorialGroup = document.createElement('optgroup');
                editorialGroup.label = 'Content-Only Editorial Analyses (26 Archive Articles)';

                jsonArticles.forEach(function (item) {
                    var opt = document.createElement('option');
                    opt.value = item.id;
                    opt.textContent = item.date + ' — ' + item.title;
                    if (String(item.id).indexOf('report-') === 0) {
                        weeklyGroup.appendChild(opt);
                    } else {
                        editorialGroup.appendChild(opt);
                    }
                });
                switcher.appendChild(weeklyGroup);
                switcher.appendChild(editorialGroup);
            }

            if (switcher && !switcher._apWired) {
                switcher._apWired = true;
                switcher.addEventListener('change', function () {
                    var nextId = switcher.value;
                    var match = jsonArticles.find(function (a) { return a.id === nextId; });
                    if (match) {
                        var nextUrl = window.location.pathname + '?id=' + encodeURIComponent(nextId);
                        window.history.replaceState({}, '', nextUrl);
                        renderJsonArticleIntoPage(match, list);
                    }
                });
            }

            if (requestedId) {
                var target = jsonArticles.find(function (a) { return a.id === requestedId; });
                if (target) {
                    if (switcher) switcher.value = target.id;
                    renderJsonArticleIntoPage(target, list);
                }
            } else if (switcher) {
                switcher.value = readerRoot.getAttribute('data-default-id') || 'report-20261026';
            }
        } catch (err) {
            // Pre-rendered static report-20261026 remains cleanly visible offline
        }
    }

    function escapeHtml(s) {
        return String(s || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function renderJsonArticleIntoPage(article, allArticles) {
        document.title = article.title + ' | TheHGTech';
        var canonicalUrl = 'https://thehgtech.com/articles.html?id=' + encodeURIComponent(article.id);
        var canonEl = document.querySelector('link[rel="canonical"]');
        if (canonEl) canonEl.setAttribute('href', canonicalUrl);

        var isWeekly = String(article.id).indexOf('report-') === 0 || article.author === 'TheHGTech Bot';

        // Update header elements
        var catEl = document.getElementById('apDynamicCategory');
        if (catEl) catEl.textContent = (article.category || 'Threat Intelligence').split(',')[0].trim();

        var badgeEl = document.getElementById('apDynamicBadge');
        if (badgeEl) {
            badgeEl.textContent = isWeekly ? 'AUTOMATED THREAT TELEMETRY' : 'ARCHIVE ANALYSIS';
            badgeEl.className = 'ap-pill ' + (isWeekly ? 'ap-pill-amber' : 'ap-pill-emerald');
        }

        var idEl = document.getElementById('apDynamicDocId');
        if (idEl) idEl.textContent = 'ID // ' + String(article.id).toUpperCase();

        var titleEl = document.getElementById('apDynamicTitle');
        if (titleEl) titleEl.textContent = article.title;

        var deckEl = document.getElementById('apDynamicStandfirst');
        if (deckEl) deckEl.textContent = article.excerpt || '';

        var authorEl = document.getElementById('apDynamicAuthor');
        if (authorEl) authorEl.textContent = article.author || 'TheHGTech Security Research';

        var avatarEl = document.getElementById('apDynamicAvatar');
        if (avatarEl) avatarEl.textContent = isWeekly ? 'TI' : 'HG';

        var roleEl = document.getElementById('apDynamicRole');
        if (roleEl) roleEl.textContent = isWeekly ? 'Automated Feed Aggregator (URLhaus · ThreatFox · Feodo · SSLBL)' : 'Founder & Principal Security Researcher';

        var dateEl = document.getElementById('apDynamicDate');
        if (dateEl) dateEl.textContent = article.date || '';

        // Parse & normalize JSON HTML content cleanly
        var temp = document.createElement('div');
        temp.innerHTML = article.content || '';

        // Unwrap outer <article> if present
        var innerArt = temp.querySelector('article');
        var container = innerArt || temp;

        // Remove duplicate embedded <header>, <h1>, leading duplicate hero <img>, and inline Published/Author <p> metadata
        container.querySelectorAll('header, h1').forEach(function (n) { n.remove(); });
        Array.from(temp.querySelectorAll(':scope > img')).forEach(function (img) {
            if (!article.image) article.image = img.getAttribute('src');
            img.remove();
        });
        Array.from(container.querySelectorAll('p')).slice(0, 4).forEach(function (p) {
            var txt = (p.textContent || '').trim();
            if (/^(Published|Author|Incident Date|Threat Actor)\s*:/i.test(txt) && txt.length < 140) {
                p.remove();
            }
        });

        // Update hero image
        var heroImg = document.getElementById('apDynamicHeroImg');
        if (heroImg && article.image) {
            heroImg.src = article.image.replace(/^\//, '');
            heroImg.alt = article.title;
        }

        // Convert empty <ul></ul> into transparent empty-feed telemetry notices
        container.querySelectorAll('ul').forEach(function (ul) {
            if (!ul.querySelector('li')) {
                var note = document.createElement('div');
                note.className = 'ap-empty-feed-note';
                note.textContent = 'Feed telemetry status: 0 active entries reported by upstream feed during this 7-day collection window.';
                ul.replaceWith(note);
                return;
            }
            // Detect Weekly Threat Report detection lists (e.g., "github: 15426 detections")
            var items = Array.from(ul.querySelectorAll('li'));
            var parsed = items.map(function (li) {
                var m = (li.textContent || '').trim().match(/^([^:]+):\s*([\d,]+)\s+detections?/i);
                return m ? { name: m[1].trim(), count: parseInt(m[2].replace(/,/g, ''), 10) } : null;
            });
            if (parsed.length >= 3 && parsed.every(Boolean)) {
                var maxCount = Math.max.apply(null, parsed.map(function (d) { return d.count; })) || 1;
                var chart = document.createElement('div');
                chart.className = 'ap-telemetry-bars';
                chart.setAttribute('role', 'list');
                chart.setAttribute('aria-label', 'Top active malware family detection volumes');
                parsed.forEach(function (d) {
                    var pct = Math.max(4, Math.round((d.count / maxCount) * 100));
                    var row = document.createElement('div');
                    row.className = 'ap-tele-row';
                    row.setAttribute('role', 'listitem');
                    row.innerHTML =
                        '<span class="ap-tele-name" title="' + escapeHtml(d.name) + '">' + escapeHtml(d.name) + '</span>' +
                        '<div class="ap-tele-track" aria-hidden="true"><div class="ap-tele-fill" style="width:' + pct + '%"></div></div>' +
                        '<span class="ap-tele-count">' + d.count.toLocaleString('en-US') + ' IOCs</span>';
                    chart.appendChild(row);
                });
                ul.replaceWith(chart);
            }
        });

        // Wrap tables and pre blocks
        container.querySelectorAll('table').forEach(function (tbl) {
            if (!tbl.closest('.table-wrapper')) {
                var w = document.createElement('div');
                w.className = 'table-wrapper';
                tbl.parentNode.insertBefore(w, tbl);
                w.appendChild(tbl);
            }
        });
        container.querySelectorAll('pre').forEach(function (pre) {
            if (!pre.closest('.ap-code-block')) {
                var cb = document.createElement('div');
                cb.className = 'ap-code-block';
                cb.innerHTML = '<div class="ap-code-header"><div class="ap-code-meta"><span class="ap-code-lang">CODE</span></div><div class="ap-code-actions"><button type="button" class="ap-code-btn" data-action="copy-code"><span>Copy</span></button></div></div>';
                pre.parentNode.insertBefore(cb, pre);
                cb.appendChild(pre);
            }
        });

        // Group children by <h2> into semantic <section id="sec-N"> for TOC & Scrollspy
        var proseEl = document.getElementById('apDynamicProse');
        var desktopToc = document.getElementById('apDesktopTocNav');
        var mobileTocList = document.getElementById('apMobileTocList');
        var mobileTocCount = document.getElementById('apMobileTocCount');

        if (proseEl) {
            proseEl.innerHTML = '';
            var tocItems = [];
            var currentSection = document.createElement('section');
            currentSection.id = 'sec-overview';
            proseEl.appendChild(currentSection);
            var secIdx = 0;

            Array.from(container.childNodes).forEach(function (node) {
                if (node.nodeType === 1 && node.tagName.toLowerCase() === 'h2') {
                    secIdx += 1;
                    var secId = 'sec-' + secIdx;
                    currentSection = document.createElement('section');
                    currentSection.id = secId;
                    // Strip leading emoji from TOC label while keeping clean heading text
                    var cleanHeading = (node.textContent || '').replace(/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\s]+/u, '').trim();
                    node.textContent = secIdx + '. ' + cleanHeading;
                    currentSection.appendChild(node.cloneNode(true));
                    proseEl.appendChild(currentSection);
                    tocItems.push({ id: secId, label: secIdx + '. ' + cleanHeading });
                } else {
                    currentSection.appendChild(node.cloneNode(true));
                }
            });

            // Estimate word count & reading time
            var words = (proseEl.textContent || '').trim().split(/\s+/).filter(Boolean).length;
            var mins = Math.max(2, Math.round(words / 210));
            var readEl = document.getElementById('apDynamicReadTime');
            if (readEl) readEl.textContent = mins + ' min read · ~' + words.toLocaleString('en-US') + ' words';

            if (desktopToc) {
                desktopToc.innerHTML = tocItems.map(function (t) {
                    return '<a href="#' + t.id + '">' + escapeHtml(t.label) + '</a>';
                }).join('');
            }
            if (mobileTocList) {
                mobileTocList.innerHTML = tocItems.map(function (t) {
                    return '<li><a href="#' + t.id + '">' + escapeHtml(t.label) + '</a></li>';
                }).join('');
            }
            if (mobileTocCount) {
                mobileTocCount.textContent = 'On This Page (' + tocItems.length + ' Sections)';
            }

            wireCodeBlocks(proseEl);
            initResponsiveTables(proseEl);
            initDiagramLightbox(proseEl);
            initScrollspy();
        }
    }

    /* ----------------------------------------------------------------------
       INITIALIZATION
       ---------------------------------------------------------------------- */
    document.addEventListener('DOMContentLoaded', function () {
        try {
            var savedScale = localStorage.getItem('hg_reader_scale');
            if (savedScale === 'compact' || savedScale === 'large') {
                window.setArticleReaderScale(savedScale);
            }
        } catch (e) {}

        syncThemeLabel();
        initReadingProgress();
        wireCodeBlocks(document);
        initResponsiveTables(document);
        initDiagramLightbox(document);
        initScrollspy();
        initScrollStateHints();
        initJsonArticleReader();
    });
})();
