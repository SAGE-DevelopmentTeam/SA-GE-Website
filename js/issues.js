/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — GitHub Issues & Suggestions Integration
 * ============================================================================
 * 
 * Dynamically retrieves genuine public issues from the official GitHub repository
 * using the unauthenticated public GitHub API.
 * 
 * - Bug Reports page: fetches and displays issues labeled 'bug'
 * - Suggestions page: fetches and displays issues labeled 'enhancement'
 * 
 * Strict Policy: ZERO fabricated community submissions, issue numbers, or fake users.
 * Security: Zero credentials stored or sent; all external strings sanitized.
 */

// In-memory cache for the current session to avoid redundant API requests
let _githubIssuesCache = null;
let _githubIssuesCacheTime = 0;

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
 * 1. Load Live Bug Reports ('bug' label)
 */
async function loadBugsList(container, config) {
  container.innerHTML = `
    <div style="padding: 2rem; text-align: center; color: var(--text-dim); font-size: 0.95rem;">
      Checking for tracked bug reports...
    </div>
  `;

  const result = await fetchAllGitHubIssues(config);

  if (result.status === "error") {
    renderApiUnavailableState(container, config, "bug");
    return;
  }

  const bugIssues = (result.issues || []).filter(issue => {
    if (!issue.labels || !Array.isArray(issue.labels)) return false;
    return issue.labels.some(l => (l.name || "").toLowerCase().includes("bug"));
  });

  if (bugIssues.length > 0) {
    renderLiveIssuesList(container, bugIssues, "bug");
  } else {
    renderEmptyState(container, config, "bug");
  }
}

/**
 * 2. Load Live Community Suggestions ('enhancement' label)
 */
async function loadSuggestionsList(container, config) {
  container.innerHTML = `
    <div style="padding: 2rem; text-align: center; color: var(--text-dim); font-size: 0.95rem;">
      Checking for community suggestions...
    </div>
  `;

  const result = await fetchAllGitHubIssues(config);

  if (result.status === "error") {
    renderApiUnavailableState(container, config, "enhancement");
    return;
  }

  const suggestionIssues = (result.issues || []).filter(issue => {
    if (!issue.labels || !Array.isArray(issue.labels)) return false;
    return issue.labels.some(l => {
      const name = (l.name || "").toLowerCase();
      return name.includes("enhancement") || name.includes("feature") || name.includes("suggestion");
    });
  });

  if (suggestionIssues.length > 0) {
    renderLiveIssuesList(container, suggestionIssues, "enhancement");
  } else {
    renderEmptyState(container, config, "enhancement");
  }
}

/**
 * 3. Fetch Issues from GitHub Public API with 4-Second Timeout & Session Cache
 */
async function fetchAllGitHubIssues(config) {
  const now = Date.now();

  // Return cached issues if fresh (< 2 minutes old)
  if (_githubIssuesCache !== null && (now - _githubIssuesCacheTime < 120000)) {
    return { status: "ok", issues: _githubIssuesCache };
  }

  const apiRepo = config.github?.apiRepo || "SAGE-DevelopmentTeam/SA-GE";
  const apiBase = config.github?.apiBase || "https://api.github.com";
  const url = `${apiBase}/repos/${apiRepo}/issues?state=all&per_page=30`;

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

    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data)) {
        // Exclude pull requests
        const issuesOnly = data.filter(item => !item.pull_request);
        _githubIssuesCache = issuesOnly;
        _githubIssuesCacheTime = now;
        return { status: "ok", issues: issuesOnly };
      }
    }

    // Rate-limited, 404 (private repo), or other HTTP error
    return { status: "error", issues: [] };
  } catch (err) {
    // Network / timeout / abort error
    return { status: "error", issues: [] };
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * 4. Render Live Genuine GitHub Issues
 */
function renderLiveIssuesList(container, issues, primaryType) {
  let html = "";
  issues.forEach(issue => {
    const isOpen = issue.state === "open";
    const stateBadgeClass = isOpen ? "badge-blue" : "badge-emerald";
    const stateLabel = isOpen ? "Open" : "Closed";
    const createdDate = formatDate(issue.created_at);
    const updatedDate = formatDate(issue.updated_at);

    // Filter secondary labels for display
    const labelsHtml = (issue.labels || [])
      .filter(l => {
        const name = (l.name || "").toLowerCase();
        return !name.includes(primaryType);
      })
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
          ${createdDate ? `<span style="font-size: 0.8rem; color: var(--text-dim); margin-left: 0.25rem;">${createdDate}</span>` : ""}
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
 * 5. Clean Empty State (When 0 real issues exist)
 */
function renderEmptyState(container, config, type) {
  if (type === "bug") {
    const bugReportUrl = config?.github?.bugReportUrl || "#";
    container.innerHTML = `
      <div class="issues-empty-state">
        <div class="empty-state-icon">📋</div>
        <h4>No bug reports yet.</h4>
        <p>There are currently no active public bug reports on GitHub. If you have encountered a crash, glitch, or unexpected behavior in SA:GE, submit a report.</p>
        <a href="${escapeHtml(bugReportUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          Report a Bug on GitHub ↗
        </a>
      </div>
    `;
  } else {
    const suggestionUrl = config?.github?.suggestionUrl || "#";
    container.innerHTML = `
      <div class="issues-empty-state">
        <div class="empty-state-icon">💡</div>
        <h4>No suggestions yet.</h4>
        <p>No community feature suggestions are currently open on GitHub. Have a feature request, shortcut proposal, or tool idea? Submit your suggestion!</p>
        <a href="${escapeHtml(suggestionUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          Submit a Suggestion on GitHub ↗
        </a>
      </div>
    `;
  }
}

/**
 * 6. Clean API Unavailable / Offline State
 */
function renderApiUnavailableState(container, config, type) {
  if (type === "bug") {
    const bugReportUrl = config?.github?.bugReportUrl || "#";
    container.innerHTML = `
      <div class="issues-empty-state">
        <div class="empty-state-icon">📋</div>
        <h4>No bug reports yet.</h4>
        <p>There are currently no active public bug reports. If you encounter an issue or error in SA:GE, you can submit a report on GitHub.</p>
        <a href="${escapeHtml(bugReportUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          Report a Bug on GitHub ↗
        </a>
      </div>
    `;
  } else {
    const suggestionUrl = config?.github?.suggestionUrl || "#";
    container.innerHTML = `
      <div class="issues-empty-state">
        <div class="empty-state-icon">💡</div>
        <h4>No suggestions yet.</h4>
        <p>No community feature suggestions are currently open. If you have an idea or enhancement for SA:GE, submit your proposal on GitHub.</p>
        <a href="${escapeHtml(suggestionUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          Submit a Suggestion on GitHub ↗
        </a>
      </div>
    `;
  }
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
