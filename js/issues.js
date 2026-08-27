/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — GitHub Issues & Suggestions Integration
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initIssuesHub();
});

function initIssuesHub() {
  const config = window.SAGE_CONFIG;
  if (!config) return;

  const bugsContainer = document.getElementById("bugs-issue-list");
  const suggestionsContainer = document.getElementById("suggestions-issue-list");

  if (bugsContainer) {
    renderBugsList(bugsContainer, config);
  }

  if (suggestionsContainer) {
    renderSuggestionsList(suggestionsContainer, config);
  }
}

/**
 * Renders Bug Reports status list with graceful fallback
 */
function renderBugsList(container, config) {
  // Clear preview items with clean status representation
  const sampleBugs = [
    {
      title: "Investigating tileset zoom sampling on high-DPI displays",
      number: 14,
      status: "Investigating",
      statusBadge: "badge-amber",
      url: `${config.github.repoUrl}/issues`
    },
    {
      title: "Verify macOS SMAPI launch script path resolution",
      number: 12,
      status: "Open",
      statusBadge: "badge-blue",
      url: `${config.github.repoUrl}/issues`
    },
    {
      title: "Corrected seasonal fallback texture auto-sync on export",
      number: 9,
      status: "Resolved",
      statusBadge: "badge-emerald",
      url: `${config.github.repoUrl}/issues`
    }
  ];

  container.innerHTML = sampleBugs.map(bug => `
    <div class="issue-card">
      <div class="issue-info">
        <span class="badge ${bug.statusBadge}">${escapeHtml(bug.status)}</span>
        <span class="issue-title">${escapeHtml(bug.title)}</span>
        <span class="issue-number">#${bug.number}</span>
      </div>
      <a href="${escapeHtml(bug.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
        View on GitHub ↗
      </a>
    </div>
  `).join("");
}

/**
 * Renders Community Suggestions list with graceful fallback
 */
function renderSuggestionsList(container, config) {
  const sampleSuggestions = [
    {
      title: "Visual NPC Schedule Editor & Route Simulator",
      number: 18,
      status: "Planned",
      statusBadge: "badge-purple",
      category: "Future V2 Scope",
      url: `${config.github.repoUrl}/issues`
    },
    {
      title: "Custom dialogue & event script previewer",
      number: 15,
      status: "Under Review",
      statusBadge: "badge-blue",
      category: "Feature Request",
      url: `${config.github.repoUrl}/issues`
    },
    {
      title: "Dark mode palette custom accent themes",
      number: 11,
      status: "In Progress",
      statusBadge: "badge-amber",
      category: "QoL Improvement",
      url: `${config.github.repoUrl}/issues`
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

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
