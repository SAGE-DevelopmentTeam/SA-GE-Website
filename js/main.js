/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — Global UI & Client Architecture
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
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
 * Falls back to "—" gracefully on API failure or rate-limiting.
 */
function initStatsLoader() {
  const downloadsEl = document.getElementById("stat-downloads");
  const starsEl     = document.getElementById("stat-stars");
  const releasesEl  = document.getElementById("stat-releases");

  // Only run on pages that have the stats bar
  if (!downloadsEl && !starsEl && !releasesEl) return;

  const config       = (typeof SAGE_CONFIG !== "undefined") ? SAGE_CONFIG : null;
  
  // Set initial release count statistic from local config.js data
  if (releasesEl && config?.releases?.history) {
    releasesEl.textContent = config.releases.history.length;
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

    try {
      // Fetch releases (for downloads/release count) and main repo metadata (for stars)
      const [releasesRes, mainRepoRes] = await Promise.all([
        fetch(releasesUrl, { signal: controller.signal, headers: { "Accept": "application/vnd.github.v3+json" } }).catch(() => null),
        fetch(mainRepoUrl, { signal: controller.signal, headers: { "Accept": "application/vnd.github.v3+json" } }).catch(() => null),
      ]);

      clearTimeout(timeoutId);

      // Parse releases array from SA-GE-Releases for asset download counts & release count
      if (releasesRes && releasesRes.ok) {
        const releases = await releasesRes.json();
        if (Array.isArray(releases)) {
          if (downloadsEl) {
            let total = 0;
            for (const release of releases) {
              if (Array.isArray(release.assets)) {
                for (const asset of release.assets) {
                  total += asset.download_count || 0;
                }
              }
            }
            downloadsEl.textContent = formatNumber(total);
          }

          if (releasesEl) {
            releasesEl.textContent = formatNumber(releases.length);
          }
        }
      }

      // Stars from SA-GE main repo (or fallback to SA-GE-Releases if SA-GE is private / 404)
      if (starsEl) {
        let starsSet = false;
        if (mainRepoRes && mainRepoRes.ok) {
          const repoData = await mainRepoRes.json();
          if (typeof repoData.stargazers_count === "number") {
            starsEl.textContent = formatNumber(repoData.stargazers_count);
            starsSet = true;
          }
        }

        if (!starsSet) {
          try {
            const relRepoRes = await fetch(relRepoUrl, { headers: { "Accept": "application/vnd.github.v3+json" } });
            if (relRepoRes.ok) {
              const relRepoData = await relRepoRes.json();
              if (typeof relRepoData.stargazers_count === "number") {
                starsEl.textContent = formatNumber(relRepoData.stargazers_count);
              }
            }
          } catch (_) {}
        }
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
