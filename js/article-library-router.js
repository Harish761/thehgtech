/**
 * TheHGTech Shared Article Library Router
 * Unified query-parameter routing (?q=, ?category=, ?id=, ?page=),
 * filtering, sorting, pagination, and modal reader across:
 *   - /articles.html
 *   - /article-list.html
 *   - /articles-list.html
 *   - /articles/page/1..N/
 */
(function () {
    'use strict';

    const SVG_NS = 'http://www.w3.org/2000/svg';
    const PAGE_SIZE = 12;

    function slugifyCategory(value) {
        return String(value || '')
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    function hasValidExternalUrl(article) {
        if (!article || !article.externalUrl) return false;
        const val = String(article.externalUrl).trim();
        return Boolean(val) && val !== '#' && val !== 'None';
    }

    function normalizeAssetUrl(rawUrl) {
        const val = String(rawUrl || '').trim();
        if (!val) return '';
        if (/^https?:\/\//i.test(val) || val.startsWith('data:')) return val;
        return '/' + val.replace(/^\/+/, '');
    }

    function parseReadTime(str) {
        if (!str) return 5;
        const match = String(str).match(/\d+/);
        return match ? parseInt(match[0], 10) : 5;
    }

    function parseDate(str) {
        if (!str) return 0;
        const ts = Date.parse(str);
        return Number.isNaN(ts) ? 0 : ts;
    }

    function parsePathPage() {
        const match = window.location.pathname.match(/\/articles\/page\/(\d+)\/?$/);
        if (!match) return null;
        const n = parseInt(match[1], 10);
        return Number.isFinite(n) && n >= 1 ? n : null;
    }

    function parsePositiveInt(raw) {
        if (!raw) return null;
        const n = parseInt(String(raw).trim(), 10);
        return Number.isFinite(n) && n >= 1 ? n : null;
    }

    function createSvg(width, height, viewBox, shapes, extraStyle) {
        const svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttribute('width', String(width));
        svg.setAttribute('height', String(height));
        svg.setAttribute('viewBox', viewBox);
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('aria-hidden', 'true');
        if (extraStyle) svg.setAttribute('style', extraStyle);
        shapes.forEach(function (spec) {
            const el = document.createElementNS(SVG_NS, spec.tag);
            Object.keys(spec.attrs).forEach(function (k) {
                el.setAttribute(k, spec.attrs[k]);
            });
            svg.appendChild(el);
        });
        return svg;
    }

    function createPlaceholderElement(category) {
        const box = document.createElement('div');
        box.className = 'rl-card-placeholder';

        const icon = createSvg(
            34,
            34,
            '0 0 24 24',
            [{ tag: 'path', attrs: { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' } }],
            'margin-bottom:0.5rem;color:var(--cs-brand-red, #DA2228);stroke-width:1.75;'
        );
        const label = document.createElement('span');
        label.style.fontFamily = 'var(--ed-font-mono, "JetBrains Mono", monospace)';
        label.style.fontSize = '0.75rem';
        label.style.fontWeight = '700';
        label.style.textTransform = 'uppercase';
        label.style.letterSpacing = '0.06em';
        label.textContent = category || 'Threat Intelligence';

        box.appendChild(icon);
        box.appendChild(label);
        return box;
    }

    // Legacy inline onerror helper compatibility for pre-rendered static cards
    window.getPlaceholderSvg = function (category) {
        const wrapper = document.createElement('div');
        wrapper.appendChild(createPlaceholderElement(category));
        return wrapper.innerHTML;
    };

    window.initArticleLibraryRouter = function (options) {
        const config = options || {};
        const grid = document.getElementById('rlArticlesGrid');
        const pagination = document.getElementById('rlPagination');
        const searchInput = document.getElementById('rlSearchInput');
        const searchClear = document.getElementById('rlSearchClear');
        const sortSelect = document.getElementById('rlSortSelect');
        const categoryStrip = document.getElementById('rlCategoryStrip');
        const resultsCounter = document.getElementById('rlResultsCounter');
        const resetFiltersBtn = document.getElementById('rlResetFiltersBtn');
        const routeNotice = document.getElementById('rlRouteNotice');

        const modal = document.getElementById('rlModal');
        const modalCategory = document.getElementById('modalCategory');
        const modalTitle = document.getElementById('modalTitle');
        const modalAuthor = document.getElementById('modalAuthor');
        const modalDate = document.getElementById('modalDate');
        const modalReadTime = document.getElementById('modalReadTime');
        const modalBody = document.getElementById('modalBody');

        if (!grid || !searchInput || !sortSelect || !categoryStrip) {
            return;
        }

        let allArticles = [];
        let filteredArticles = [];
        let catMap = {};
        let activeCategory = 'all';
        let currentPage = 1;
        let openModalArticleId = null;
        let initialized = false;

        function resolveCategoryParam(rawCat) {
            if (!rawCat) return 'all';
            const trimmed = String(rawCat).trim();
            if (!trimmed || trimmed.toLowerCase() === 'all') return 'all';
            if (Object.prototype.hasOwnProperty.call(catMap, trimmed)) {
                return trimmed;
            }
            const lower = trimmed.toLowerCase();
            const slug = slugifyCategory(trimmed);
            const keys = Object.keys(catMap);
            for (let i = 0; i < keys.length; i += 1) {
                if (keys[i].toLowerCase() === lower) {
                    return keys[i];
                }
            }
            for (let i = 0; i < keys.length; i += 1) {
                if (slug && slugifyCategory(keys[i]) === slug) {
                    return keys[i];
                }
            }
            return trimmed;
        }

        function showRouteNotice(message) {
            if (!routeNotice) return;
            const textSpan = document.createElement('span');
            textSpan.textContent = message;

            const dismissBtn = document.createElement('button');
            dismissBtn.type = 'button';
            dismissBtn.className = 'rl-route-notice-dismiss';
            dismissBtn.textContent = 'Dismiss';
            dismissBtn.addEventListener('click', function () {
                clearRouteNotice();
                const params = new URLSearchParams(window.location.search);
                if (params.has('id')) {
                    params.delete('id');
                    writeParams(params);
                }
            });

            routeNotice.replaceChildren(textSpan, dismissBtn);
            routeNotice.classList.add('active');
        }

        function clearRouteNotice() {
            if (!routeNotice) return;
            routeNotice.replaceChildren();
            routeNotice.classList.remove('active');
        }

        function writeParams(params, usePush) {
            const qs = params.toString();
            const target = window.location.pathname + (qs ? '?' + qs : '') + window.location.hash;
            const current = window.location.pathname + window.location.search + window.location.hash;
            if (target !== current) {
                if (usePush) {
                    history.pushState(history.state, '', target);
                } else {
                    history.replaceState(history.state, '', target);
                }
            }
        }

        function syncUrlState() {
            const params = new URLSearchParams(window.location.search);
            const qVal = (searchInput.value || '').trim();
            const pathPage = parsePathPage();
            const hasFilters = Boolean(qVal) || activeCategory !== 'all';

            if (qVal) {
                params.set('q', qVal);
            } else {
                params.delete('q');
            }

            if (activeCategory && activeCategory !== 'all') {
                params.set('category', activeCategory);
            } else {
                params.delete('category');
            }

            if (pathPage !== null) {
                if (currentPage !== pathPage || (hasFilters && currentPage > 1)) {
                    params.set('page', String(currentPage));
                } else {
                    params.delete('page');
                }
            } else if (currentPage > 1) {
                params.set('page', String(currentPage));
            } else {
                params.delete('page');
            }

            if (openModalArticleId) {
                params.set('id', openModalArticleId);
            }

            writeParams(params, false);
        }

        function updateActiveChipUi() {
            const chips = categoryStrip.querySelectorAll('.rl-chip');
            let matchedChip = null;
            chips.forEach(function (chip) {
                const isActive = chip.getAttribute('data-cat') === activeCategory;
                chip.classList.toggle('active', isActive);
                chip.setAttribute('aria-selected', isActive ? 'true' : 'false');
                if (isActive) matchedChip = chip;
            });
            if (matchedChip && activeCategory !== 'all' && typeof matchedChip.scrollIntoView === 'function') {
                matchedChip.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
            }
        }

        function buildCategoryStrip() {
            const sortedCats = Object.keys(catMap).sort(function (a, b) {
                return catMap[b] - catMap[a];
            });
            const nodes = [];

            function makeChip(catKey, labelText, count) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'rl-chip' + (activeCategory === catKey ? ' active' : '');
                btn.setAttribute('data-cat', catKey);
                btn.setAttribute('role', 'tab');
                btn.setAttribute('aria-selected', activeCategory === catKey ? 'true' : 'false');
                btn.appendChild(document.createTextNode(labelText + ' '));

                const countSpan = document.createElement('span');
                countSpan.className = 'rl-chip-count';
                countSpan.textContent = String(count);
                btn.appendChild(countSpan);

                btn.addEventListener('click', function () {
                    window.selectCategory(catKey, btn);
                });
                return btn;
            }

            nodes.push(makeChip('all', 'All Articles', allArticles.length));
            sortedCats.forEach(function (c) {
                nodes.push(makeChip(c, c, catMap[c]));
            });

            categoryStrip.replaceChildren.apply(categoryStrip, nodes);
        }

        function updateResultsCounter() {
            if (!resultsCounter) return;
            const matchCount = filteredArticles.length;
            const query = (searchInput.value || '').trim();
            const isFiltered = activeCategory !== 'all' || query.length > 0;

            if (resetFiltersBtn) {
                resetFiltersBtn.style.display = isFiltered ? 'inline-flex' : 'none';
            }

            if (matchCount === 0) {
                let emptyMsg = 'No matching analyses found';
                if (activeCategory !== 'all') emptyMsg += ' in "' + activeCategory + '"';
                if (query) emptyMsg += ' matching "' + query + '"';
                resultsCounter.textContent = emptyMsg;
                return;
            }

            const start = (currentPage - 1) * PAGE_SIZE + 1;
            const end = Math.min(currentPage * PAGE_SIZE, matchCount);

            let text = 'Showing ' + start + '–' + end + ' of ' + matchCount + ' published analyses';
            if (activeCategory !== 'all') {
                text += ' in "' + activeCategory + '"';
            }
            if (query) {
                text += ' matching "' + query + '"';
            }
            resultsCounter.textContent = text;
        }

        function createArticleCard(item) {
            const hasExtUrl = hasValidExternalUrl(item);
            const cleanHref = hasExtUrl
                ? normalizeAssetUrl(item.externalUrl)
                : window.location.pathname + '?id=' + encodeURIComponent(item.id || '');
            const readTime = item.readTime || '6 min read';
            const category = item.category || 'Threat Intelligence';
            const author = item.author || 'TheHGTech';
            const dateStr = item.date || 'Recent';
            const titleText = item.title || 'Untitled Analysis';
            const isModal = !hasExtUrl && Boolean(item.content);
            const actionLabel = isModal ? 'Read In-Depth Brief' : 'Read Full Analysis';

            const card = document.createElement('a');
            card.href = cleanHref;
            card.className = 'rl-card';
            card.setAttribute('data-id', item.id || '');
            card.setAttribute('aria-label', titleText);

            if (!hasExtUrl) {
                card.addEventListener('click', function (evt) {
                    evt.preventDefault();
                    window.openModalById(item.id);
                });
            }

            const media = document.createElement('div');
            media.className = 'rl-card-media';

            if (item.image && !String(item.image).includes('default')) {
                const img = document.createElement('img');
                img.src = normalizeAssetUrl(item.image);
                img.alt = titleText;
                img.className = 'rl-card-img';
                img.loading = 'lazy';
                img.addEventListener('error', function () {
                    img.replaceWith(createPlaceholderElement(category));
                });
                media.appendChild(img);
            } else {
                media.appendChild(createPlaceholderElement(category));
            }

            const catPill = document.createElement('span');
            catPill.className = 'rl-card-category-pill';
            catPill.textContent = category;
            media.appendChild(catPill);

            const readBadge = document.createElement('span');
            readBadge.className = 'rl-card-read-badge';
            readBadge.textContent = readTime;
            media.appendChild(readBadge);

            const body = document.createElement('div');
            body.className = 'rl-card-body';

            const meta = document.createElement('div');
            meta.className = 'rl-card-meta';

            const dateSpan = document.createElement('span');
            dateSpan.className = 'rl-card-date';
            dateSpan.appendChild(
                createSvg(
                    12,
                    12,
                    '0 0 24 24',
                    [
                        { tag: 'rect', attrs: { width: '18', height: '18', x: '3', y: '4', rx: '2', ry: '2' } },
                        { tag: 'line', attrs: { x1: '16', x2: '16', y1: '2', y2: '6' } },
                        { tag: 'line', attrs: { x1: '8', x2: '8', y1: '2', y2: '6' } },
                        { tag: 'line', attrs: { x1: '3', x2: '21', y1: '10', y2: '10' } }
                    ],
                    'margin-right:3px;'
                )
            );
            dateSpan.appendChild(document.createTextNode(dateStr));
            meta.appendChild(dateSpan);

            const h3 = document.createElement('h3');
            h3.className = 'rl-card-title';
            h3.textContent = titleText;

            const excerpt = document.createElement('p');
            excerpt.className = 'rl-card-excerpt';
            excerpt.textContent = item.excerpt || '';

            const footer = document.createElement('div');
            footer.className = 'rl-card-footer';

            const authorSpan = document.createElement('span');
            authorSpan.className = 'rl-card-author';
            authorSpan.textContent = 'By ' + author;

            const actionSpan = document.createElement('span');
            actionSpan.className = 'rl-card-action';
            actionSpan.appendChild(document.createTextNode(actionLabel + ' '));
            actionSpan.appendChild(
                createSvg(13, 13, '0 0 24 24', [{ tag: 'path', attrs: { d: 'M5 12h14M12 5l7 7-7 7' } }])
            );

            footer.appendChild(authorSpan);
            footer.appendChild(actionSpan);

            body.appendChild(meta);
            body.appendChild(h3);
            body.appendChild(excerpt);
            body.appendChild(footer);

            card.appendChild(media);
            card.appendChild(body);
            return card;
        }

        function renderPagination() {
            if (!pagination) return;
            const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);
            if (totalPages <= 1) {
                pagination.replaceChildren();
                return;
            }

            const nodes = [];

            const prevBtn = document.createElement('button');
            prevBtn.type = 'button';
            prevBtn.className = 'rl-page-btn';
            prevBtn.setAttribute('aria-label', 'Previous Page');
            prevBtn.textContent = '← Prev';
            prevBtn.disabled = currentPage <= 1;
            prevBtn.addEventListener('click', function () {
                window.goToPage(currentPage - 1);
            });
            nodes.push(prevBtn);

            const pages = [];
            for (let i = 1; i <= totalPages; i += 1) {
                if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
                    pages.push(i);
                } else if (pages[pages.length - 1] !== '...') {
                    pages.push('...');
                }
            }

            pages.forEach(function (p) {
                if (p === '...') {
                    const ell = document.createElement('span');
                    ell.className = 'rl-page-ellipsis';
                    ell.textContent = '…';
                    nodes.push(ell);
                } else {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'rl-page-btn' + (p === currentPage ? ' active' : '');
                    btn.setAttribute('aria-label', 'Page ' + p);
                    if (p === currentPage) {
                        btn.setAttribute('aria-current', 'page');
                    }
                    btn.textContent = String(p);
                    btn.addEventListener('click', function () {
                        window.goToPage(p);
                    });
                    nodes.push(btn);
                }
            });

            const nextBtn = document.createElement('button');
            nextBtn.type = 'button';
            nextBtn.className = 'rl-page-btn';
            nextBtn.setAttribute('aria-label', 'Next Page');
            nextBtn.textContent = 'Next →';
            nextBtn.disabled = currentPage >= totalPages;
            nextBtn.addEventListener('click', function () {
                window.goToPage(currentPage + 1);
            });
            nodes.push(nextBtn);

            pagination.replaceChildren.apply(pagination, nodes);
        }

        function renderPage() {
            if (filteredArticles.length === 0) {
                const query = (searchInput.value || '').trim();
                const empty = document.createElement('div');
                empty.className = 'rl-empty-state';

                const icon = createSvg(
                    48,
                    48,
                    '0 0 24 24',
                    [
                        { tag: 'circle', attrs: { cx: '11', cy: '11', r: '8' } },
                        { tag: 'path', attrs: { d: 'm21 21-4.35-4.35M8 11h6' } }
                    ],
                    'stroke-width:1.75;'
                );
                icon.setAttribute('class', 'rl-empty-icon');

                const title = document.createElement('h3');
                title.className = 'rl-empty-title';
                title.textContent = 'No Research Analyses Found';

                const desc = document.createElement('p');
                desc.className = 'rl-empty-desc';
                let descText = 'We could not find any articles';
                if (query) descText += ' matching "' + query + '"';
                if (activeCategory !== 'all') descText += ' in ' + activeCategory;
                descText += '. Try adjusting your query or resetting filters.';
                desc.textContent = descText;

                const resetBtn = document.createElement('button');
                resetBtn.type = 'button';
                resetBtn.className = 'rl-empty-action';
                resetBtn.textContent = 'Reset All Filters';
                resetBtn.addEventListener('click', window.resetAllFilters);

                empty.appendChild(icon);
                empty.appendChild(title);
                empty.appendChild(desc);
                empty.appendChild(resetBtn);

                grid.replaceChildren(empty);
                if (pagination) pagination.replaceChildren();
                return;
            }

            const totalPages = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE));
            if (currentPage > totalPages) currentPage = totalPages;
            if (currentPage < 1) currentPage = 1;

            const startIndex = (currentPage - 1) * PAGE_SIZE;
            const pageItems = filteredArticles.slice(startIndex, startIndex + PAGE_SIZE);
            const cards = pageItems.map(createArticleCard);

            grid.replaceChildren.apply(grid, cards);
            renderPagination();
        }

        function applyFilters(opts) {
            const optionsArg = opts || {};
            const query = (searchInput.value || '').trim().toLowerCase();
            const sortBy = sortSelect.value || 'newest';

            filteredArticles = allArticles.filter(function (a) {
                if (activeCategory !== 'all' && (a.category || '').trim().toLowerCase() !== activeCategory.toLowerCase()) {
                    return false;
                }
                if (query) {
                    const titleMatch = (a.title || '').toLowerCase().includes(query);
                    const excerptMatch = (a.excerpt || '').toLowerCase().includes(query);
                    const catMatch = (a.category || '').toLowerCase().includes(query);
                    const authorMatch = (a.author || '').toLowerCase().includes(query);
                    let tagsMatch = false;
                    if (Array.isArray(a.tags)) {
                        tagsMatch = a.tags.some(function (t) {
                            return String(t).toLowerCase().includes(query);
                        });
                    } else if (typeof a.tags === 'string') {
                        tagsMatch = a.tags.toLowerCase().includes(query);
                    }
                    if (!titleMatch && !excerptMatch && !catMatch && !authorMatch && !tagsMatch) {
                        return false;
                    }
                }
                return true;
            });

            filteredArticles.sort(function (a, b) {
                if (sortBy === 'newest') return parseDate(b.date) - parseDate(a.date);
                if (sortBy === 'oldest') return parseDate(a.date) - parseDate(b.date);
                if (sortBy === 'title') return (a.title || '').localeCompare(b.title || '');
                if (sortBy === 'readtime') return parseReadTime(b.readTime) - parseReadTime(a.readTime);
                return 0;
            });

            const totalPages = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE));
            if (currentPage > totalPages) currentPage = totalPages;
            if (currentPage < 1) currentPage = 1;

            updateActiveChipUi();
            updateResultsCounter();
            renderPage();

            if (optionsArg.syncUrl !== false) {
                syncUrlState();
            }
        }

        function applyUrlParams(isInitialLoad) {
            const params = new URLSearchParams(window.location.search);
            const qId = params.get('id');
            const qCat = params.get('category');
            const qSearch = params.get('q');
            const qPage = parsePositiveInt(params.get('page'));
            const pathPage = parsePathPage();

            activeCategory = resolveCategoryParam(qCat);
            searchInput.value = qSearch ? qSearch : '';
            if (searchClear) {
                searchClear.classList.toggle('active', searchInput.value.length > 0);
            }
            currentPage = qPage !== null ? qPage : (pathPage !== null ? pathPage : 1);

            clearRouteNotice();
            applyFilters({ syncUrl: !isInitialLoad });

            if (qId) {
                const qIdTrim = qId.trim();
                const target = allArticles.find(function (a) {
                    return a.id === qIdTrim || (a.id && a.id.toLowerCase() === qIdTrim.toLowerCase());
                });
                if (target) {
                    if (hasValidExternalUrl(target)) {
                        window.location.replace(normalizeAssetUrl(target.externalUrl));
                        return;
                    }
                    if (target.content) {
                        window.openArticleModal(target, { updateHistory: false });
                        return;
                    }
                } else {
                    showRouteNotice('Article ID "' + qIdTrim + '" was not found in the archive. Showing published analyses below.');
                }
            } else if (openModalArticleId && modal && modal.style.display === 'flex') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                openModalArticleId = null;
            }

            if (isInitialLoad && config.scrollOnQueryLoad && (qSearch || qCat || qPage)) {
                const anchor = document.getElementById('rlGridAnchor');
                if (anchor) {
                    anchor.scrollIntoView({ behavior: 'auto', block: 'start' });
                }
            }
        }

        window.selectCategory = function (cat) {
            activeCategory = resolveCategoryParam(cat);
            currentPage = 1;
            applyFilters({ syncUrl: true });
        };

        window.goToPage = function (page) {
            const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);
            if (page < 1 || page > totalPages) return;
            currentPage = page;
            renderPage();
            updateResultsCounter();
            syncUrlState();

            const anchor = document.getElementById('rlGridAnchor');
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        window.resetAllFilters = function () {
            searchInput.value = '';
            if (searchClear) searchClear.classList.remove('active');
            activeCategory = 'all';
            sortSelect.value = 'newest';
            currentPage = 1;
            clearRouteNotice();
            applyFilters({ syncUrl: true });
        };

        window.openModalById = function (id) {
            const target = allArticles.find(function (a) {
                return a.id === id;
            });
            if (target) {
                window.openArticleModal(target, { updateHistory: true });
            }
        };

        window.openArticleModal = function (article, modalOpts) {
            if (!article || !modal) return;
            const optsArg = modalOpts || {};
            if (modalCategory) modalCategory.textContent = article.category || 'Threat Intelligence';
            if (modalTitle) modalTitle.textContent = article.title || 'Security Monograph';
            if (modalAuthor) modalAuthor.textContent = 'By ' + (article.author || 'TheHGTech');
            if (modalDate) modalDate.textContent = article.date || 'Published';
            if (modalReadTime) modalReadTime.textContent = article.readTime || '6 min read';
            if (modalBody) {
                if (article.content) {
                    modalBody.innerHTML = article.content;
                } else {
                    const p = document.createElement('p');
                    p.textContent = article.excerpt || '';
                    modalBody.replaceChildren(p);
                }
            }

            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            openModalArticleId = article.id || null;

            if (optsArg.updateHistory !== false && openModalArticleId) {
                const params = new URLSearchParams(window.location.search);
                params.set('id', openModalArticleId);
                writeParams(params, true);
            }
        };

        window.closeArticleModal = function () {
            if (modal) modal.style.display = 'none';
            document.body.style.overflow = '';
            openModalArticleId = null;

            const params = new URLSearchParams(window.location.search);
            if (params.has('id')) {
                params.delete('id');
                writeParams(params, false);
            }
        };

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
                window.closeArticleModal();
            }
        });

        let searchTimeout = null;
        searchInput.addEventListener('input', function () {
            const val = searchInput.value;
            if (searchClear) {
                searchClear.classList.toggle('active', val.length > 0);
            }
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(function () {
                currentPage = 1;
                applyFilters({ syncUrl: true });
            }, 150);
        });

        if (searchClear) {
            searchClear.addEventListener('click', function () {
                searchInput.value = '';
                searchClear.classList.remove('active');
                currentPage = 1;
                applyFilters({ syncUrl: true });
                searchInput.focus();
            });
        }

        sortSelect.addEventListener('change', function () {
            currentPage = 1;
            applyFilters({ syncUrl: true });
        });

        window.addEventListener('popstate', function () {
            if (initialized) {
                applyUrlParams(false);
            }
        });

        async function loadAndBoot() {
            try {
                let data = null;
                try {
                    const fetcher = typeof config.fetchArticles === 'function'
                        ? config.fetchArticles
                        : function () {
                            return fetch('/ioc-data/articles.json', { signal: AbortSignal.timeout(8000) });
                        };
                    const res = await fetcher();
                    if (res && res.ok) {
                        const json = await res.json();
                        data = json.articles;
                    }
                } catch (netErr) {
                    // Fallback to embedded JSON if available
                }

                if (!data) {
                    const embeddedEl = document.getElementById('embeddedArticlesData');
                    if (embeddedEl) {
                        data = JSON.parse(embeddedEl.textContent);
                    }
                }

                // Preserve pre-rendered static cards if network fetch fails and no embedded JSON exists
                if (!Array.isArray(data) || data.length === 0) {
                    return;
                }

                allArticles = data;

                const statTotal = document.getElementById('statTotalArticles');
                if (statTotal) statTotal.textContent = String(allArticles.length);

                catMap = {};
                allArticles.forEach(function (a) {
                    const c = (a.category || 'General').trim();
                    catMap[c] = (catMap[c] || 0) + 1;
                });

                const statCats = document.getElementById('statCategories');
                if (statCats) statCats.textContent = String(Object.keys(catMap).length);

                if (allArticles.length > 0 && allArticles[0].date) {
                    const statLatest = document.getElementById('statLatestDate');
                    if (statLatest) statLatest.textContent = allArticles[0].date.replace(/, \d{4}/, '');
                }

                buildCategoryStrip();
                initialized = true;
                applyUrlParams(true);
            } catch (err) {
                console.error('Failed to initialize article library router:', err);
            }
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadAndBoot);
        } else {
            loadAndBoot();
        }
    };
})();
