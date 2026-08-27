/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — Releases & Auto-Update Hydration
 * ============================================================================
 * 
 * Retrieves release data from the official GitHub Releases API or the authoritative
 * website update manifest (update/manifest.json). Gracefully falls back to configured
 * release data if the API is rate-limited, private, or unreachable.
 */

// In-memory cache for the current session
let _releasesCache = null;
let _releasesCacheTime = 0;

document.addEventListener("DOMContentLoaded", () => {
  initReleasesData();
});

async function initReleasesData() {
  const config = window.SAGE_CONFIG;
  if (!config) return;

  let latestRelease = config.releases.fallback;
  let allReleases = config.releases.history || [];

  // 1. Try fetching from GitHub Releases public API
  const ghReleases = await fetchGitHubReleases(config);
  if (ghReleases && ghReleases.length > 0) {
    const parsedReleases = ghReleases.map(gh => parseGitHubRelease(gh, config));
    latestRelease = parsedReleases[0];
    allReleases = parsedReleases;
  } else {
    // 2. Fallback: Try fetching official update manifest
    try {
      const manifestResponse = await fetch(config.releases.manifestUrl, { cache: "no-cache" });
      if (manifestResponse.ok) {
        const manifest = await manifestResponse.json();
        if (manifest.version) {
          latestRelease = {
            version: manifest.version,
            displayVersion: `v${manifest.version}`,
            releaseDate: manifest.pubDate ? formatDate(manifest.pubDate) : config.releases.fallback.releaseDate,
            title: manifest.name || `SA:GE ${manifest.version}`,
            summary: config.releases.fallback.summary,
            downloadUrl: manifest.downloadUrl || config.releases.fallback.downloadUrl,
            installerUrl: config.releases.fallback.installerUrl,
            fileSizeBytes: manifest.size || config.releases.fallback.fileSizeBytes,
            formattedSize: manifest.size ? formatBytes(manifest.size) : config.releases.fallback.formattedSize,
            sha256: manifest.sha256 || config.releases.fallback.sha256,
            isPreRelease: manifest.version.includes("preview") || manifest.version.includes("beta"),
            highlights: config.releases.fallback.highlights
          };
        }
      }
    } catch (e) {
      // Offline / local file protocol fallback
    }
  }

  // Hydrate Download Page if present
  hydrateDownloadPage(latestRelease, config);

  // Hydrate Homepage Latest Release Section if present
  hydrateHomepageRelease(latestRelease, config);

  // Hydrate Releases Archive Page if present
  hydrateReleasesArchive(latestRelease, allReleases, config);
}

/**
 * Fetch releases from GitHub API with 4-second timeout & session caching
 */
async function fetchGitHubReleases(config) {
  const now = Date.now();
  if (_releasesCache && (now - _releasesCacheTime < 120000)) {
    return _releasesCache;
  }

  const apiRepo = config.github?.apiRepo || "SAGE-DevelopmentTeam/SA-GE";
  const apiBase = config.github?.apiBase || "https://api.github.com";
  const url = `${apiBase}/repos/${apiRepo}/releases?per_page=10`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { "Accept": "application/vnd.github.v3+json" }
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        _releasesCache = data;
        _releasesCacheTime = now;
        return data;
      }
    }
  } catch (err) {
    // Graceful fallback
  } finally {
    clearTimeout(timeoutId);
  }

  return null;
}

/**
 * Parses a raw GitHub Release object into a normalized release model
 */
function parseGitHubRelease(gh, config) {
  const isPre = Boolean(gh.prerelease);
  const tag = gh.tag_name || "v1.0.0";
  const version = tag.replace(/^v/, "");
  
  let zipUrl = "";
  let zipSize = 0;
  let installerUrl = "";

  if (Array.isArray(gh.assets)) {
    for (const asset of gh.assets) {
      const name = asset.name ? asset.name.toLowerCase() : "";
      if (name.endsWith(".zip")) {
        zipUrl = asset.browser_download_url || "";
        zipSize = asset.size || 0;
      } else if (name.endsWith(".exe")) {
        installerUrl = asset.browser_download_url || "";
      }
    }
  }

  return {
    version: version,
    displayVersion: tag,
    releaseDate: gh.published_at ? formatDate(gh.published_at) : config.releases.fallback.releaseDate,
    title: gh.name || `SA:GE ${tag}`,
    summary: gh.body ? extractSummaryFromBody(gh.body) : config.releases.fallback.summary,
    body: gh.body || "",
    downloadUrl: zipUrl || gh.html_url || config.github.releasesUrl,
    installerUrl: installerUrl,
    fileSizeBytes: zipSize || config.releases.fallback.fileSizeBytes,
    formattedSize: zipSize > 0 ? formatBytes(zipSize) : config.releases.fallback.formattedSize,
    sha256: config.releases.fallback.sha256,
    isPreRelease: isPre,
    htmlUrl: gh.html_url || config.github.releasesUrl,
    highlights: config.releases.fallback.highlights
  };
}

function extractSummaryFromBody(body) {
  if (!body) return "";
  const lines = body.split("\n").map(l => l.trim()).filter(Boolean);
  const firstPara = lines.find(l => !l.startsWith("#") && !l.startsWith("*") && !l.startsWith("-"));
  return firstPara || lines[0] || "";
}

/**
 * Hydrates download.html with dynamic release metadata
 */
function hydrateDownloadPage(release, config) {
  const versionBadge = document.getElementById("dl-version-badge");
  const releaseDateEl = document.getElementById("dl-release-date");
  const fileSizeEl = document.getElementById("dl-file-size");
  const primaryDlBtn = document.getElementById("dl-primary-btn");
  const shaChecksumEl = document.getElementById("dl-sha256");

  if (versionBadge) versionBadge.textContent = release.displayVersion;
  if (releaseDateEl) releaseDateEl.textContent = release.releaseDate;
  if (fileSizeEl) fileSizeEl.textContent = release.formattedSize;

  if (primaryDlBtn) {
    if (release.downloadUrl) {
      primaryDlBtn.href = release.downloadUrl;
      primaryDlBtn.setAttribute("title", `Download SA:GE ${release.displayVersion}`);
      primaryDlBtn.textContent = `⬇ Download SA:GE (64-bit ZIP)`;
    } else {
      primaryDlBtn.href = config.github.releasesUrl;
      primaryDlBtn.textContent = `View Releases on GitHub ↗`;
    }
  }

  if (shaChecksumEl) shaChecksumEl.textContent = release.sha256 || "—";
}

/**
 * Hydrates index.html Latest Release section
 */
function hydrateHomepageRelease(release, config) {
  const homeVersionBadge = document.getElementById("home-release-version");
  const homeDateEl = document.getElementById("home-release-date");
  const homeTitleEl = document.getElementById("home-release-title");
  const homeSummaryEl = document.getElementById("home-release-summary");
  const homeDlBtn = document.getElementById("home-release-dl-btn");
  const homeHighlightsList = document.getElementById("home-release-highlights");

  if (homeVersionBadge) homeVersionBadge.textContent = release.displayVersion;
  if (homeDateEl) homeDateEl.textContent = release.releaseDate;
  if (homeTitleEl) homeTitleEl.textContent = release.title;
  if (homeSummaryEl) homeSummaryEl.textContent = release.summary;
  if (homeDlBtn) homeDlBtn.href = release.downloadUrl || config.github.releasesUrl;

  if (homeHighlightsList && release.highlights) {
    homeHighlightsList.innerHTML = release.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join("");
  }
}

/**
 * Hydrates releases.html with full release timeline
 */
function hydrateReleasesArchive(latestRelease, allReleases, config) {
  const container = document.getElementById("releases-timeline");
  if (!container) return;

  const listToRender = (allReleases && allReleases.length > 0) ? allReleases : (config.releases.history || []);

  let html = "";
  listToRender.forEach((rel, idx) => {
    const isLatest = idx === 0;
    const versionDisplay = rel.displayVersion || `v${rel.version}`;
    const dlUrl = rel.downloadUrl || config.github.releasesUrl;
    const dateStr = rel.releaseDate || rel.date || "August 2026";
    const githubLink = rel.htmlUrl || config.github.releasesUrl;

    html += `
      <article class="release-card ${isLatest ? 'latest-release' : ''}">
        <header class="release-header">
          <div class="release-title-area">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.35rem; flex-wrap: wrap;">
              <h3>${escapeHtml(rel.title)}</h3>
              <span class="badge ${isLatest ? 'badge-emerald' : 'badge-slate'}">
                ${isLatest ? '★ Latest Release' : 'Previous Release'}
              </span>
              <span class="badge badge-blue">${escapeHtml(versionDisplay)}</span>
            </div>
            <div class="release-date">Published on ${escapeHtml(dateStr)}</div>
          </div>
        </header>

        <p class="release-summary">${escapeHtml(rel.summary)}</p>

        ${rel.changes ? `
          <div class="release-changelog">
            ${rel.changes.features && rel.changes.features.length > 0 ? `
              <h4 style="margin: 1rem 0 0.5rem; color: #34D399;">✨ New Features & Capabilities</h4>
              <ul class="release-highlights">
                ${rel.changes.features.map(f => `<li>${escapeHtml(f)}</li>`).join("")}
              </ul>
            ` : ""}

            ${rel.changes.improvements && rel.changes.improvements.length > 0 ? `
              <h4 style="margin: 1.25rem 0 0.5rem; color: #60A5FA;">⚡ Improvements & Architecture</h4>
              <ul class="release-highlights">
                ${rel.changes.improvements.map(i => `<li>${escapeHtml(i)}</li>`).join("")}
              </ul>
            ` : ""}

            ${rel.changes.fixes && rel.changes.fixes.length > 0 ? `
              <h4 style="margin: 1.25rem 0 0.5rem; color: #A78BFA;">🛠️ Bug Fixes & Stability</h4>
              <ul class="release-highlights">
                ${rel.changes.fixes.map(fx => `<li>${escapeHtml(fx)}</li>`).join("")}
              </ul>
            ` : ""}
          </div>
        ` : (rel.body ? `
          <div class="release-changelog" style="white-space: pre-line; color: var(--text-muted); font-size: 0.95rem; margin: 1rem 0;">
            ${escapeHtml(rel.body)}
          </div>
        ` : "")}

        ${rel.sha256 ? `
          <div style="margin: 1.5rem 0 1rem;">
            <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-dim); margin-bottom: 0.35rem;">SHA-256 Checksum:</div>
            <div class="copy-box">
              <span id="sha-${idx}">${escapeHtml(rel.sha256)}</span>
              <button class="btn-copy" data-copy-target="sha-${idx}">Copy</button>
            </div>
          </div>
        ` : ""}

        <footer class="release-actions">
          <a href="${escapeHtml(dlUrl)}" class="btn btn-primary btn-sm">
            ⬇ Download ${escapeHtml(versionDisplay)}
          </a>
          <a href="${escapeHtml(githubLink)}" target="_blank" rel="noopener noreferrer" class="btn btn-github btn-sm">
            View on GitHub ↗
          </a>
        </footer>
      </article>
    `;
  });

  container.innerHTML = html;
}

function formatDate(isoStr) {
  if (!isoStr) return "";
  try {
    const d = new Date(isoStr);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch (e) {
    return isoStr;
  }
}

function formatBytes(bytes) {
  if (!bytes || bytes <= 0) return "Unknown size";
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
