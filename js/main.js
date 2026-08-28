/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — Global UI & Client Architecture
 * ============================================================================
 */

function onReady(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

onReady(() => {
  initNavigation();
  initDynamicConfigLinks();
  initStatsLoader();
  initGlobalCopyButtons();
});

/**
 * 1. Initialize Navigation Bar, Mobile Drawer, and Active Link State
 */
function initNavigation() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  
  // Highlight active desktop & mobile navigation links
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Mobile menu drawer toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileDrawer = document.querySelector(".mobile-drawer");

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      mobileMenuBtn.innerHTML = isOpen ? "✕" : "☰";
    });

    // Close mobile menu on link click
    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileMenuBtn.innerHTML = "☰";
      });
    });
  }
}

/**
 * 2. Hydrate External URLs & GitHub Links from Central SAGE_CONFIG
 */
function initDynamicConfigLinks() {
  if (typeof SAGE_CONFIG === "undefined") return;

  // Hydrate all elements with data-config-link attributes
  document.querySelectorAll("[data-config-link]").forEach(el => {
    const key = el.getAttribute("data-config-link");
    const val = getNestedConfigValue(SAGE_CONFIG, key);
    if (val && typeof val === "string") {
      el.setAttribute("href", val);
    }
  });

  // Hydrate elements with data-config-text attributes
  document.querySelectorAll("[data-config-text]").forEach(el => {
    const key = el.getAttribute("data-config-text");
    const val = getNestedConfigValue(SAGE_CONFIG, key);
    if (val !== undefined && val !== null) {
      el.textContent = String(val);
    }
  });
}

function getNestedConfigValue(obj, path) {
  return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
}

/**
 * 3. Dynamic Statistics Loader
 * - Downloads: real total download count across all SA-GE-Releases assets (GitHub API)
 * - GitHub Stars: star count on the SA-GE repository (with SA-GE-Releases fallback if private)
 * - Releases: total number of published SA:GE releases (GitHub API)
 *
 * Uses localStorage caching + dynamic config fallbacks to guarantee smooth,
 * instant rendering without rate-limit issues on GitHub Pages.
 */
function initStatsLoader() {
  const downloadsEl = document.getElementById("stat-downloads");
  const starsEl     = document.getElementById("stat-stars");
  const releasesEl  = document.getElementById("stat-releases");

  if (!downloadsEl && !starsEl && !releasesEl) return;

  const config       = (typeof SAGE_CONFIG !== "undefined") ? SAGE_CONFIG : null;
  const CACHE_KEY    = "sage_github_stats_cache";
  const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes cache window

  function updateDOM(downloadsVal, starsVal, releasesVal) {
    if (downloadsEl && downloadsVal !== undefined && downloadsVal !== null) {
      downloadsEl.textContent = formatNumber(downloadsVal);
    }
    if (starsEl && starsVal !== undefined && starsVal !== null) {
      starsEl.textContent = formatNumber(starsVal);
    }
    if (releasesEl && releasesVal !== undefined && releasesVal !== null) {
      releasesEl.textContent = formatNumber(releasesVal);
    }
  }

  // 1. Load from localStorage cache immediately if available
  let cachedData = null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      cachedData = JSON.parse(raw);
    }
  } catch (_) {}

  if (cachedData && typeof cachedData === "object") {
    updateDOM(cachedData.downloads, cachedData.stars, cachedData.releases);

    // If cache is fresh, skip network call to conserve rate-limit quota
    if (Date.now() - (cachedData.timestamp || 0) < CACHE_TTL_MS) {
      return;
    }
  } else {
    // Set initial baseline from local config history if no cache exists
    if (releasesEl && config?.releases?.history) {
      releasesEl.textContent = config.releases.history.length;
    }
  }

  const apiBase      = config?.github?.apiBase        || "https://api.github.com";
  const mainRepo     = config?.github?.apiRepo        || "SAGE-DevelopmentTeam/SA-GE";
  const releasesRepo = config?.github?.releasesApiRepo || "SAGE-DevelopmentTeam/SA-GE-Releases";

  async function fetchStats() {
    const releasesUrl = `${apiBase}/repos/${releasesRepo}/releases?per_page=100`;
    const mainRepoUrl = `${apiBase}/repos/${mainRepo}`;
    const relRepoUrl  = `${apiBase}/repos/${releasesRepo}`;

    const controller = new AbortController();
    const timeoutId  = setTimeout(() => controller.abort(), 6000);

    let freshDownloads = cachedData?.downloads ?? null;
    let freshReleases  = cachedData?.releases ?? (config?.releases?.history?.length || 2);
    let freshStars     = cachedData?.stars ?? 0;
    let updated        = false;

    try {
      // Use standard fetch without custom Accept headers to avoid CORS preflight issues
      const [releasesRes, mainRepoRes] = await Promise.all([
        fetch(releasesUrl, { signal: controller.signal }).catch(() => null),
        fetch(mainRepoUrl, { signal: controller.signal }).catch(() => null),
      ]);

      clearTimeout(timeoutId);

      // Parse releases array from SA-GE-Releases
      if (releasesRes && releasesRes.ok) {
        const releases = await releasesRes.json();
        if (Array.isArray(releases)) {
          let total = 0;
          for (const release of releases) {
            if (Array.isArray(release.assets)) {
              for (const asset of release.assets) {
                total += asset.download_count || 0;
              }
            }
          }
          freshDownloads = total;
          freshReleases = releases.length;
          updated = true;
        }
      }

      // Stars from SA-GE main repo (or fallback to SA-GE-Releases if SA-GE is private / 404)
      if (mainRepoRes && mainRepoRes.ok) {
        const repoData = await mainRepoRes.json();
        if (typeof repoData.stargazers_count === "number") {
          freshStars = repoData.stargazers_count;
          updated = true;
        }
      } else {
        // Fallback for stars if main repo returns 404/403
        try {
          const relRepoRes = await fetch(relRepoUrl).catch(() => null);
          if (relRepoRes && relRepoRes.ok) {
            const relRepoData = await relRepoRes.json();
            if (typeof relRepoData.stargazers_count === "number") {
              freshStars = relRepoData.stargazers_count;
              updated = true;
            }
          }
        } catch (_) {}
      }

      // Apply updated values and store in localStorage
      if (updated || freshDownloads !== null) {
        updateDOM(freshDownloads ?? 0, freshStars, freshReleases);

        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            downloads: freshDownloads ?? 0,
            stars: freshStars,
            releases: freshReleases,
            timestamp: Date.now()
          }));
        } catch (_) {}
      }

    } catch (err) {
      clearTimeout(timeoutId);
    }
  }

  fetchStats();
}


function formatNumber(num) {
  if (typeof num !== "number") return String(num);
  return new Intl.NumberFormat().format(num);
}

/**
 * 4. Global Copy to Clipboard Handler
 */
function initGlobalCopyButtons() {
  document.addEventListener("click", async (e) => {
    const copyBtn = e.target.closest(".btn-copy");
    if (!copyBtn) return;

    const targetId = copyBtn.getAttribute("data-copy-target");
    let textToCopy = "";

    if (targetId) {
      const targetEl = document.getElementById(targetId);
      textToCopy = targetEl ? targetEl.textContent.trim() : "";
    } else if (copyBtn.getAttribute("data-copy-text")) {
      textToCopy = copyBtn.getAttribute("data-copy-text");
    }

    if (!textToCopy) return;

    try {
      await navigator.clipboard.writeText(textToCopy);
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.classList.remove("copied");
      }, 2000);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      copyBtn.textContent = "Copied!";
      setTimeout(() => { copyBtn.textContent = "Copy"; }, 2000);
    }
  });
}
