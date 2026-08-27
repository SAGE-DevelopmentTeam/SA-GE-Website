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
 * Displays "—" by default. If a real backend endpoint is configured in SAGE_CONFIG,
 * fetches live values safely and refreshes once per minute.
 */
function initStatsLoader() {
  const downloadsEl = document.getElementById("stat-downloads");
  const usersEl = document.getElementById("stat-users");
  const modsEl = document.getElementById("stat-mods");

  if (!downloadsEl || !usersEl || !modsEl) return;

  const statsConfig = (typeof SAGE_CONFIG !== "undefined" && SAGE_CONFIG.statistics) ? SAGE_CONFIG.statistics : null;

  // Set clean non-fabricated placeholder values initially
  downloadsEl.textContent = statsConfig?.initial?.downloads || "—";
  usersEl.textContent = statsConfig?.initial?.users || "—";
  modsEl.textContent = statsConfig?.initial?.modsCreated || "—";

  // If a real statistics endpoint is configured, fetch dynamically
  if (statsConfig && statsConfig.endpointUrl) {
    async function fetchLiveStats() {
      try {
        const response = await fetch(statsConfig.endpointUrl, { cache: "no-cache" });
        if (response.ok) {
          const data = await response.json();
          if (data.downloads !== undefined) downloadsEl.textContent = formatNumber(data.downloads);
          if (data.users !== undefined) usersEl.textContent = formatNumber(data.users);
          if (data.modsCreated !== undefined) modsEl.textContent = formatNumber(data.modsCreated);
        }
      } catch (err) {
        // Keep clean "—" state on error without disrupting user
      }
    }

    fetchLiveStats();
    // Poll approximately once per minute
    setInterval(fetchLiveStats, statsConfig.pollIntervalMs || 60000);
  }
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
