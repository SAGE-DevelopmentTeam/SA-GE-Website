/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — Interactive Guide Controller & Search
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector(".guide-layout")) return;
  initGuideApp();
});

function initGuideApp() {
  const guideData = window.SAGE_GUIDE_DATA;
  if (!guideData) return;

  renderGuideSidebar(guideData);
  initGuideRouter(guideData);
  initNaturalSearch(guideData);
  initMobileSidebar();
}

/**
 * 1. Render Categories & Articles in Sidebar Navigation
 */
function renderGuideSidebar(guideData) {
  const sidebarNavContainer = document.getElementById("guide-sidebar-nav");
  if (!sidebarNavContainer) return;

  let html = "";
  guideData.categories.forEach(cat => {
    const catArticles = guideData.articles
      .filter(a => a.categoryId === cat.id)
      .sort((a, b) => a.order - b.order);

    html += `
      <div class="guide-nav-section" data-category="${cat.id}">
        <div class="guide-category-header">
          <span class="guide-category-icon">${cat.icon}</span>
          <span>${escapeHtml(cat.name)}</span>
        </div>
        <ul class="guide-article-links">
          ${catArticles.map(art => `
            <li>
              <a href="#${cat.id}/${art.id}" class="guide-article-link" data-article-id="${art.id}">
                ${escapeHtml(art.title)}
              </a>
            </li>
          `).join("")}
        </ul>
      </div>
    `;
  });

  sidebarNavContainer.innerHTML = html;
}

/**
 * 2. Hash-based Router for Deep Linking & Smooth Article Switching
 */
function initGuideRouter(guideData) {
  function handleRoute() {
    let hash = window.location.hash.replace(/^#\/?/, "");
    let targetArticleId = null;

    if (hash) {
      const parts = hash.split("/");
      targetArticleId = parts.length > 1 ? parts[1] : parts[0];
    }

    // Default to first article if no hash or invalid hash
    let article = guideData.articles.find(a => a.id === targetArticleId);
    if (!article && guideData.articles.length > 0) {
      article = guideData.articles[0];
    }

    if (article) {
      renderArticle(article, guideData);
      updateActiveSidebarState(article.id);
    }
  }

  window.addEventListener("hashchange", handleRoute);
  handleRoute();
}

/**
 * 3. Render Article Content, Breadcrumbs, Callouts & Prev/Next Nav
 */
function renderArticle(article, guideData) {
  const contentArea = document.getElementById("guide-article-container");
  if (!contentArea) return;

  const category = guideData.categories.find(c => c.id === article.categoryId) || { name: "Guide", id: "" };

  // Calculate Previous and Next Articles across entire ordered series
  const allArticlesOrdered = [];
  guideData.categories.forEach(cat => {
    const catArts = guideData.articles.filter(a => a.categoryId === cat.id).sort((a, b) => a.order - b.order);
    allArticlesOrdered.push(...catArts);
  });

  const currentIndex = allArticlesOrdered.findIndex(a => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticlesOrdered[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticlesOrdered.length - 1 ? allArticlesOrdered[currentIndex + 1] : null;

  // Find related articles objects
  const relatedArticles = (article.related || [])
    .map(relId => guideData.articles.find(a => a.id === relId))
    .filter(Boolean);

  contentArea.innerHTML = `
    <nav class="guide-breadcrumbs" aria-label="Breadcrumbs">
      <a href="index.html">Home</a>
      <span class="sep">/</span>
      <a href="guide.html">Guide</a>
      <span class="sep">/</span>
      <span>${escapeHtml(category.name)}</span>
      <span class="sep">/</span>
      <span class="current">${escapeHtml(article.title)}</span>
    </nav>

    <header class="article-header">
      <h1>${escapeHtml(article.title)}</h1>
      <p class="article-lead">${escapeHtml(article.summary)}</p>
    </header>

    <div class="article-body">
      ${article.content}
    </div>

    ${relatedArticles.length > 0 ? `
      <section class="related-articles">
        <h3>Related Documentation</h3>
        <div class="related-cards-grid">
          ${relatedArticles.map(rel => `
            <a href="#${rel.categoryId}/${rel.id}" class="related-card">
              <strong>${escapeHtml(rel.title)}</strong>
              <span>${escapeHtml(rel.summary)}</span>
            </a>
          `).join("")}
        </div>
      </section>
    ` : ""}

    <footer class="article-nav-footer">
      ${prevArticle ? `
        <a href="#${prevArticle.categoryId}/${prevArticle.id}" class="article-nav-btn prev">
          <span class="dir">← Previous</span>
          <span class="title">${escapeHtml(prevArticle.title)}</span>
        </a>
      ` : `<div></div>`}

      ${nextArticle ? `
        <a href="#${nextArticle.categoryId}/${nextArticle.id}" class="article-nav-btn next">
          <span class="dir">Next →</span>
          <span class="title">${escapeHtml(nextArticle.title)}</span>
        </a>
      ` : ""}
    </footer>
  `;

  // Update Page Title
  document.title = `${article.title} — SA:GE Guide`;

  // Scroll to top of content
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateActiveSidebarState(activeArticleId) {
  document.querySelectorAll(".guide-article-link").forEach(link => {
    if (link.getAttribute("data-article-id") === activeArticleId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/**
 * 4. Natural Language Smart Search Engine
 * Searches article titles, headings, keywords, synonyms, summaries, and full text.
 */
function initNaturalSearch(guideData) {
  const searchInput = document.getElementById("guide-search-input");
  const resultsContainer = document.getElementById("guide-search-results");
  if (!searchInput || !resultsContainer) return;

  function performSearch(query) {
    const rawQuery = query.trim().toLowerCase();
    if (!rawQuery) {
      resultsContainer.classList.remove("active");
      resultsContainer.innerHTML = "";
      return;
    }

    // Split search into individual query terms for flexible multi-word matching
    const terms = rawQuery.split(/\s+/).filter(t => t.length > 1);

    const scoredResults = guideData.articles.map(article => {
      let score = 0;
      let matchedTerms = [];
      const titleLower = article.title.toLowerCase();
      const summaryLower = article.summary.toLowerCase();
      const contentLower = (article.content || "").toLowerCase();
      const keywords = (article.keywords || []).map(k => k.toLowerCase());
      const synonyms = (article.synonyms || []).map(s => s.toLowerCase());

      // Exact full query match bonus
      if (titleLower.includes(rawQuery)) score += 100;
      if (keywords.some(k => k.includes(rawQuery))) score += 80;
      if (synonyms.some(s => s.includes(rawQuery))) score += 70;
      if (summaryLower.includes(rawQuery)) score += 40;
      if (contentLower.includes(rawQuery)) score += 20;

      // Match individual terms
      terms.forEach(term => {
        if (titleLower.includes(term)) { score += 25; matchedTerms.push(term); }
        if (keywords.some(k => k.includes(term))) { score += 20; matchedTerms.push(term); }
        if (synonyms.some(s => s.includes(term))) { score += 15; matchedTerms.push(term); }
        if (summaryLower.includes(term)) { score += 10; matchedTerms.push(term); }
        if (contentLower.includes(term)) { score += 5; }
      });

      return { article, score, matchedTerms };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 7); // Top 7 relevant results

    if (scoredResults.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-empty">
          No articles found for "<strong>${escapeHtml(query)}</strong>".<br>
          <span style="font-size: 0.8rem; color: var(--text-dim);">Try searching for terms like <em>warps</em>, <em>npc not showing</em>, <em>layers</em>, or <em>winter tiles</em>.</span>
        </div>
      `;
    } else {
      resultsContainer.innerHTML = `
        <div class="search-results-header">Search Results (${scoredResults.length})</div>
        ${scoredResults.map(({ article }) => {
          const category = guideData.categories.find(c => c.id === article.categoryId);
          return `
            <a href="#${article.categoryId}/${article.id}" class="search-result-item" data-article-id="${article.id}">
              <div class="search-result-title">
                <span>${escapeHtml(article.title)}</span>
                <span class="search-result-category">${category ? escapeHtml(category.name) : ""}</span>
              </div>
              <div class="search-result-summary">${escapeHtml(article.summary)}</div>
            </a>
          `;
        }).join("")}
      `;
    }

    resultsContainer.classList.add("active");
  }

  // Live input listener
  searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value);
  });

  // Handle clicking search result
  resultsContainer.addEventListener("click", (e) => {
    const item = e.target.closest(".search-result-item");
    if (item) {
      resultsContainer.classList.remove("active");
      searchInput.value = "";
      // Close mobile sidebar if open
      const sidebar = document.querySelector(".guide-sidebar");
      if (sidebar) sidebar.classList.remove("mobile-open");
    }
  });

  // Dismiss search when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".guide-search-wrapper")) {
      resultsContainer.classList.remove("active");
    }
  });

  // Keyboard Shortcuts: '/' or 'Ctrl+K' to focus, 'Esc' to close
  document.addEventListener("keydown", (e) => {
    if ((e.key === "/" || (e.ctrlKey && e.key === "k")) && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if (e.key === "Escape" && resultsContainer.classList.contains("active")) {
      resultsContainer.classList.remove("active");
      searchInput.blur();
    }
  });
}

/**
 * 5. Mobile Sidebar Toggle
 */
function initMobileSidebar() {
  const toggleBtn = document.getElementById("guide-mobile-toggle");
  const sidebar = document.querySelector(".guide-sidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("mobile-open");
      const isOpen = sidebar.classList.contains("mobile-open");
      toggleBtn.textContent = isOpen ? "✕ Close Guide Menu" : "📖 Browse Topics";
    });
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
