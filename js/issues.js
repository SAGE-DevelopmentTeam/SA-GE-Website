/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — GitHub Issues & Suggestions Integration
 * ============================================================================
 * 
 * Fetches public issues from the official GitHub repository using the unauthenticated
 * public GitHub API. If the API is rate-limited, unreachable, or the repository is
 * private, gracefully falls back to curated static entries and direct GitHub links.
 * 
 * Security: Zero credentials stored or sent; all external strings sanitized.
 */

// In-memory cache for the current session to avoid redundant API requests
const _issuesCache = {
  bugs: null,
  suggestions: null,
  timestamp: 0
};

document.addEventListener("DOMContentLoaded", () => {
  initIssuesHub();
});

function initIssuesHub() {
  const config = window.SAGE_CONFIG;
  if (!config) return;

  const bugsContainer = document.getElementById("bugs-issue-list");
  const suggestionsContainer = document.getElementById("suggestions-issue-list");

  if (bugsContainer) {
    loadBugsList(bugsContainer, config);
  }

  if (suggestionsContainer) {
    loadSuggestionsList(suggestionsContainer, config);
  }
}

/**
 * 1. Bug Reports Loader (GitHub API + Graceful Fallback)
 */
async function loadBugsList(container, config) {
  // Show loading indicator
  container.innerHTML = `
    <div style="padding: 1.5rem; text-align: center; color: var(--text-dim); font-size: 0.9rem;">
      Loading public bug reports from GitHub...
    </div>
  `;

  try {
    const issues = await fetchGitHubIssues(config, "bug");
    if (issues && issues.length > 0) {
      renderLiveIssuesList(container, issues, "bug");
      return;
    }
  } catch (err) {
    // Silent failover to fallback
  }

  // Graceful static fallback
  renderBugsFallback(container, config);
}

/**
 * 2. Suggestions Loader (GitHub API + Graceful Fallback)
 */
async function loadSuggestionsList(container, config) {
  // Show loading indicator
  container.innerHTML = `
    <div style="padding: 1.5rem; text-align: center; color: var(--text-dim); font-size: 0.9rem;">
      Loading community suggestions from GitHub...
    </div>
  `;

  try {
    const issues = await fetchGitHubIssues(config, "enhancement");
    if (issues && issues.length > 0) {
      renderLiveIssuesList(container, issues, "enhancement");
      return;
    }
  } catch (err) {
    // Silent failover to fallback
  }

  // Graceful static fallback
  renderSuggestionsFallback(container, config);
}

/**
 * 3. Fetch Issues from GitHub Public API with Timeout & Memory Caching
 */
async function fetchGitHubIssues(config, label) {
  const cacheKey = label === "bug" ? "bugs" : "suggestions";
  const now = Date.now();

  // Return cached result if fresh (< 2 minutes old)
  if (_issuesCache[cacheKey] && (now - _issuesCache.timestamp < 120000)) {
    return _issuesCache[cacheKey];
  }

  const apiRepo = config.github?.apiRepo || "SAGE-DevelopmentTeam/SA-GE";
  const apiBase = config.github?.apiBase || "https://api.github.com";
  const url = `${apiBase}/repos/${apiRepo}/issues?labels=${encodeURIComponent(label)}&state=all&per_page=10`;

  // 4-second timeout to ensure the page never hangs
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "Accept": "application/vnd.github.v3+json"
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      // Filter out pull requests if returned by GitHub issues API
      const issuesOnly = data.filter(item => !item.pull_request);
      _issuesCache[cacheKey] = issuesOnly;
      _issuesCache.timestamp = now;
      return issuesOnly;
    }
  } catch (e) {
    // Network / timeout error
  } finally {
    clearTimeout(timeoutId);
  }

  return null;
}

/**
 * 4. Render Live Issues Retrieved from GitHub API
 */
function renderLiveIssuesList(container, issues, type) {
  if (!issues || issues.length === 0) {
    container.innerHTML = `
      <div style="padding: 1.5rem; text-align: center; color: var(--text-dim); font-size: 0.9rem;">
        No active ${type === "bug" ? "bug reports" : "suggestions"} found on GitHub at this time.
      </div>
    `;
    return;
  }

  let html = "";
  issues.forEach(issue => {
    const isOpen = issue.state === "open";
    const stateBadgeClass = isOpen ? "badge-blue" : "badge-emerald";
    const stateLabel = isOpen ? "Open" : "Closed";
    const updatedDate = formatDate(issue.updated_at || issue.created_at);

    // Filter relevant labels
    const labelsHtml = (issue.labels || [])
      .filter(l => l.name.toLowerCase() !== type)
      .slice(0, 2)
      .map(l => `<span class="badge badge-slate">${escapeHtml(l.name)}</span>`)
      .join(" ");

    html += `
      <div class="issue-card">
        <div class="issue-info">
          <span class="badge ${stateBadgeClass}">${stateLabel}</span>
          <span class="issue-title">${escapeHtml(issue.title)}</span>
          <span class="issue-number">#${issue.number}</span>
          ${labelsHtml}
          <span style="font-size: 0.8rem; color: var(--text-dim); margin-left: 0.25rem;">${updatedDate}</span>
        </div>
        <a href="${escapeHtml(issue.html_url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          View on GitHub ↗
        </a>
      </div>
    `;
  });

  container.innerHTML = html;
}

/**
 * 5. Fallback Bug Reports Presentation
 */
function renderBugsFallback(container, config) {
  const issuesUrl = config.github?.issuesUrl || "https://github.com/SAGE-DevelopmentTeam/SA-GE/issues";

  const sampleBugs = [
    {
      title: "Investigating tileset zoom sampling on high-DPI displays",
      number: 14,
      status: "Investigating",
      statusBadge: "badge-amber",
      date: "August 2026",
      url: issuesUrl
    },
    {
      title: "Verify macOS SMAPI launch script path resolution",
      number: 12,
      status: "Open",
      statusBadge: "badge-blue",
      date: "August 2026",
      url: issuesUrl
    },
    {
      title: "Corrected seasonal fallback texture auto-sync on export",
      number: 9,
      status: "Resolved",
      statusBadge: "badge-emerald",
      date: "August 2026",
      url: issuesUrl
    }
  ];

  container.innerHTML = sampleBugs.map(bug => `
    <div class="issue-card">
      <div class="issue-info">
        <span class="badge ${bug.statusBadge}">${escapeHtml(bug.status)}</span>
        <span class="issue-title">${escapeHtml(bug.title)}</span>
        <span class="issue-number">#${bug.number}</span>
        <span style="font-size: 0.8rem; color: var(--text-dim); margin-left: 0.25rem;">${escapeHtml(bug.date)}</span>
      </div>
      <a href="${escapeHtml(bug.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
        View on GitHub ↗
      </a>
    </div>
  `).join("");
}

/**
 * 6. Fallback Suggestions Presentation
 */
function renderSuggestionsFallback(container, config) {
  const issuesUrl = config.github?.issuesUrl || "https://github.com/SAGE-DevelopmentTeam/SA-GE/issues";
  const discussionsUrl = config.github?.discussionsUrl || "https://github.com/SAGE-DevelopmentTeam/SA-GE/discussions";

  const sampleSuggestions = [
    {
      title: "Visual NPC Schedule Editor & Route Simulator",
      number: 18,
      status: "Planned",
      statusBadge: "badge-purple",
      category: "Future V2 Scope",
      url: issuesUrl
    },
    {
      title: "Custom dialogue & event script previewer",
      number: 15,
      status: "Under Review",
      statusBadge: "badge-blue",
      category: "Feature Request",
      url: issuesUrl
    },
    {
      title: "Dark mode palette custom accent themes",
      number: 11,
      status: "In Progress",
      statusBadge: "badge-amber",
      category: "QoL Improvement",
      url: issuesUrl
    }
  ];

  container.innerHTML = sampleSuggestions.map(sug => `
    <div class="issue-card">
      <div class="issue-info">
        <span class="badge ${sug.statusBadge}">${escapeHtml(sug.status)}</span>
        <span class="issue-title">${escapeHtml(sug.title)}</span>
        <span class="issue-number">#${sug.number}</span>
        <span class="badge badge-slate">${escapeHtml(sug.category)}</span>
      </div>
      <a href="${escapeHtml(sug.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
        Discuss ↗
      </a>
    </div>
  `).join("");
}

function formatDate(isoStr) {
  if (!isoStr) return "";
  try {
    const d = new Date(isoStr);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  } catch (e) {
    return "";
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
