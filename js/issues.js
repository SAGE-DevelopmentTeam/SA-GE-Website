/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — GitHub Issues & Suggestions Integration
 * ============================================================================
 * 
 * Fetches genuine public issues from the official GitHub repository using the
 * unauthenticated public GitHub API. If no issues exist, or if the API is
 * rate-limited, unreachable, or private, displays a polished empty state.
 * 
 * Strict Policy: Zero fabricated bugs, suggestions, numbers, or activity.
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
 * 1. Bug Reports Loader (GitHub API + Clean Empty State)
 */
async function loadBugsList(container, config) {
  container.innerHTML = `
    <div style="padding: 2rem; text-align: center; color: var(--text-dim); font-size: 0.95rem;">
      Checking for tracked bug reports...
    </div>
  `;

  try {
    const issues = await fetchGitHubIssues(config, "bug");
    if (issues && issues.length > 0) {
      renderLiveIssuesList(container, issues, "bug");
      return;
    }
  } catch (err) {
    // Graceful failover to empty state
  }

  renderBugsEmptyState(container, config);
}

/**
 * 2. Suggestions Loader (GitHub API + Clean Empty State)
 */
async function loadSuggestionsList(container, config) {
  container.innerHTML = `
    <div style="padding: 2rem; text-align: center; color: var(--text-dim); font-size: 0.95rem;">
      Checking for community suggestions...
    </div>
  `;

  try {
    const issues = await fetchGitHubIssues(config, "enhancement");
    if (issues && issues.length > 0) {
      renderLiveIssuesList(container, issues, "enhancement");
      return;
    }
  } catch (err) {
    // Graceful failover to empty state
  }

  renderSuggestionsEmptyState(container, config);
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
    // Network / timeout / abort error
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
    if (type === "bug") {
      renderBugsEmptyState(container, window.SAGE_CONFIG);
    } else {
      renderSuggestionsEmptyState(container, window.SAGE_CONFIG);
    }
    return;
  }

  let html = "";
  issues.forEach(issue => {
    const isOpen = issue.state === "open";
    const stateBadgeClass = isOpen ? "badge-blue" : "badge-emerald";
    const stateLabel = isOpen ? "Open" : "Closed";
    const updatedDate = formatDate(issue.updated_at || issue.created_at);

    // Filter relevant secondary labels
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
          ${updatedDate ? `<span style="font-size: 0.8rem; color: var(--text-dim); margin-left: 0.25rem;">${updatedDate}</span>` : ""}
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
 * 5. Polished Bug Reports Empty State (Zero Fabricated Content)
 */
function renderBugsEmptyState(container, config) {
  const bugReportUrl = config?.github?.bugReportUrl || "#";

  container.innerHTML = `
    <div class="issues-empty-state">
      <div class="empty-state-icon">📋</div>
      <h4>No Tracked Bug Reports</h4>
      <p>There are currently no active public bug reports. If you have encountered an unexpected error, crash, or visual glitch in SA:GE, please let us know.</p>
      <a href="${escapeHtml(bugReportUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        Report a Bug on GitHub ↗
      </a>
    </div>
  `;
}

/**
 * 6. Polished Suggestions Empty State (Zero Fabricated Content)
 */
function renderSuggestionsEmptyState(container, config) {
  const suggestionUrl = config?.github?.suggestionUrl || "#";

  container.innerHTML = `
    <div class="issues-empty-state">
      <div class="empty-state-icon">💡</div>
      <h4>No Suggestions Yet</h4>
      <p>No community feature suggestions are currently open. Have an idea, workflow improvement, or tool request for SA:GE? Share your proposal!</p>
      <a href="${escapeHtml(suggestionUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        Submit a Suggestion on GitHub ↗
      </a>
    </div>
  `;
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
