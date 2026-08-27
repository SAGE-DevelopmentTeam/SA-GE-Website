/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — Releases & Auto-Update Hydration
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initReleasesData();
});

async function initReleasesData() {
  const config = window.SAGE_CONFIG;
  if (!config) return;

  let latestRelease = config.releases.fallback;

  // Try fetching official update manifest for live release metadata
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
    // Graceful fallback to config values if offline or local file protocol
  }

  // Hydrate Download Page if present
  hydrateDownloadPage(latestRelease, config);

  // Hydrate Homepage Latest Release Section if present
  hydrateHomepageRelease(latestRelease, config);

  // Hydrate Releases Archive Page if present
  hydrateReleasesArchive(latestRelease, config);
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
    primaryDlBtn.href = release.downloadUrl;
    primaryDlBtn.setAttribute("title", `Download SA:GE ${release.displayVersion}`);
  }
  if (shaChecksumEl) shaChecksumEl.textContent = release.sha256;
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
  if (homeDlBtn) homeDlBtn.href = release.downloadUrl;

  if (homeHighlightsList && release.highlights) {
    homeHighlightsList.innerHTML = release.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join("");
  }
}

/**
 * Hydrates releases.html with full release timeline
 */
function hydrateReleasesArchive(latestRelease, config) {
  const container = document.getElementById("releases-timeline");
  if (!container) return;

  const history = config.releases.history || [];

  let html = "";
  history.forEach((rel, idx) => {
    const isLatest = idx === 0;
    const versionDisplay = rel.displayVersion || `v${rel.version}`;
    const dlUrl = rel.downloadUrl || config.github.releasesUrl;

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
            <div class="release-date">Published on ${escapeHtml(rel.date)}</div>
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
        ` : ""}

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
          <a href="${escapeHtml(config.github.releasesUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-github btn-sm">
            View on GitHub
          </a>
        </footer>
      </article>
    `;
  });

  container.innerHTML = html;
}

function formatDate(isoStr) {
  try {
    const d = new Date(isoStr);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch (e) {
    return isoStr;
  }
}

function formatBytes(bytes) {
  if (bytes <= 0) return "Unknown size";
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
