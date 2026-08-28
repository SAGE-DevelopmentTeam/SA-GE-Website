/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — Releases & Update Hydration
 * ============================================================================
 *
 * Hydrates release-related page sections using the authoritative data in
 * js/config.js. No external API calls for release metadata — the official
 * SA:GE releases are tagged in the SA-GE repository (private), so any
 * unauthenticated GitHub API call would fail silently. config.js is the
 * single source of truth for current and historical release information.
 *
 * The update manifest (update/manifest.json) is checked as a secondary
 * signal only when it declares a genuinely newer version than config.js.
 */

document.addEventListener("DOMContentLoaded", () => {
  initReleasesData();
});

async function initReleasesData() {
  const config = window.SAGE_CONFIG;
  if (!config) return;

  // config.releases.fallback is the authoritative current release.
  // config.releases.history is the complete ordered archive.
  // No GitHub API call is made for release metadata — the repo is private.
  let latestRelease = config.releases.fallback;
  let allReleases   = config.releases.history || [];

  // Optional: check the hosted update manifest for a newer version signal.
  // Only accepts it if it declares a version strictly newer than config.
  try {
    const manifestResponse = await fetch(config.releases.manifestUrl, { cache: "no-cache" });
    if (manifestResponse.ok) {
      const manifest = await manifestResponse.json();
      if (manifest.version && isVersionNewer(manifest.version, config.releases.fallback.version)) {
        latestRelease = {
          version:        manifest.version,
          displayVersion: `v${manifest.version}`,
          releaseDate:    manifest.pubDate ? formatDate(manifest.pubDate) : config.releases.fallback.releaseDate,
          title:          manifest.name || `SA:GE v${manifest.version}`,
          summary:        config.releases.fallback.summary,
          downloadUrl:    manifest.downloadUrl || config.releases.fallback.downloadUrl,
          releasePageUrl: manifest.releasePageUrl || config.releases.fallback.releasePageUrl || null,
          installerUrl:   null,
          fileSizeBytes:  manifest.size || null,
          formattedSize:  manifest.size ? formatBytes(manifest.size) : null,
          sha256:         manifest.sha256 || null,
          isPreRelease:   /preview|beta/.test(manifest.version),
          highlights:     config.releases.fallback.highlights
        };
      }
    }
  } catch (_) {
    // Manifest unreachable (local file:// protocol, offline, etc.) — keep config.fallback.
  }

  // Hydrate page sections — each function is a no-op if its container is absent.
  hydrateDownloadPage(latestRelease, config);
  hydrateHomepageRelease(latestRelease, config);
  hydrateReleasesArchive(latestRelease, allReleases, config);
}

/**
 * Returns true if versionA is strictly newer than versionB (semver comparison).
 */
function isVersionNewer(versionA, versionB) {
  if (!versionA || !versionB) return false;
  const parse = v => v.replace(/^v/, "").split(".").map(n => parseInt(n, 10) || 0);
  const [aMaj, aMin, aPat] = parse(versionA);
  const [bMaj, bMin, bPat] = parse(versionB);
  if (aMaj !== bMaj) return aMaj > bMaj;
  if (aMin !== bMin) return aMin > bMin;
  return aPat > bPat;
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
  const shaBoxEl = document.getElementById("dl-sha256-box");

  if (versionBadge) versionBadge.textContent = release.displayVersion;
  if (releaseDateEl) releaseDateEl.textContent = release.releaseDate;
  if (fileSizeEl) {
    if (release.formattedSize) {
      fileSizeEl.textContent = release.formattedSize;
    } else {
      // Hide the file size portion gracefully when unknown
      const sizeParent = fileSizeEl.closest
        ? fileSizeEl.parentElement
        : null;
      fileSizeEl.textContent = "—";
    }
  }

  if (primaryDlBtn) {
    const downloadUrl = release.downloadUrl || config.releases.fallback.downloadUrl;
    primaryDlBtn.href = downloadUrl;
    primaryDlBtn.setAttribute("title", `Download SA:GE ${release.displayVersion} (Portable ZIP)`);
    primaryDlBtn.textContent = `⬇ Download SA:GE (Portable ZIP)`;
  }

  if (shaChecksumEl) {
    const sha = release.sha256 || null;
    if (sha) {
      shaChecksumEl.textContent = sha;
    } else {
      // Hide the entire checksum section when no SHA is available for this release
      const shaSection = document.getElementById("dl-sha256-section");
      if (shaSection) shaSection.style.display = "none";
    }
  }
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
  if (homeDlBtn) {
    homeDlBtn.href = release.downloadUrl || config.releases.fallback.downloadUrl;
    homeDlBtn.textContent = `⬇ Download SA:GE ${release.displayVersion}`;
  }

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
    const dlUrl = rel.downloadUrl || config.releases.fallback.downloadUrl;
    const dateStr = rel.releaseDate || rel.date || "August 28, 2026";
    const shaChecksum = rel.sha256 || null; // Only show SHA if explicitly provided; null = omit
    const releasePageUrl = rel.releasePageUrl || null;

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
            <div class="release-date">Published on ${escapeHtml(dateStr)} &bull; Windows x64 &bull; Portable ZIP</div>
          </div>
        </header>

        <p class="release-summary">${escapeHtml(rel.summary)}</p>

        ${rel.changes ? `
          <div class="release-changelog">
            ${rel.changes.features && rel.changes.features.length > 0 ? `
              <h4 style="margin: 1rem 0 0.5rem; color: #34D399;">✨ Features &amp; Capabilities</h4>
              <ul class="release-highlights">
                ${rel.changes.features.map(f => `<li>${escapeHtml(f)}</li>`).join("")}
              </ul>
            ` : ""}

            ${rel.changes.improvements && rel.changes.improvements.length > 0 ? `
              <h4 style="margin: 1.25rem 0 0.5rem; color: #60A5FA;">⚡ Improvements &amp; Architecture</h4>
              <ul class="release-highlights">
                ${rel.changes.improvements.map(i => `<li>${escapeHtml(i)}</li>`).join("")}
              </ul>
            ` : ""}

            ${rel.changes.fixes && rel.changes.fixes.length > 0 ? `
              <h4 style="margin: 1.25rem 0 0.5rem; color: #A78BFA;">🛠️ Build &amp; Stability</h4>
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

        ${shaChecksum ? `
          <div style="margin: 1.5rem 0 1rem;">
            <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-dim); margin-bottom: 0.35rem;">SHA-256 Checksum:</div>
            <div class="copy-box">
              <span id="sha-${idx}">${escapeHtml(shaChecksum)}</span>
              <button class="btn-copy" data-copy-target="sha-${idx}">Copy Checksum</button>
            </div>
          </div>
        ` : ""}

        <footer class="release-actions">
          <a href="${escapeHtml(dlUrl)}" class="btn btn-primary btn-sm">
            ⬇ Download ${escapeHtml(versionDisplay)} (Portable ZIP)
          </a>
          ${releasePageUrl ? `
          <a href="${escapeHtml(releasePageUrl)}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
            View Release on GitHub ↗
          </a>
          ` : ""}
          <a href="./guide.html" class="btn btn-secondary btn-sm">
            Getting Started Guide →
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
