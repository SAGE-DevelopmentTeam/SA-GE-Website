/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — Centralized Site Configuration
 * ============================================================================
 * 
 * Single source of truth for external links, GitHub issue templates,
 * download URLs, auto-updater manifests, and future backend endpoints.
 * 
 * Every page and script on the website references this central configuration object.
 */

const SAGE_CONFIG = {
  // --------------------------------------------------------------------------
  // 1. Branding & Metadata
  // --------------------------------------------------------------------------
  brand: {
    name: "SA:GE",
    fullName: "Stardew Authoring : Game Editor",
    slogan: "Stardew Valley modding, made visual.",
    description: "The dedicated visual authoring tool and map editor built specifically for Stardew Valley modding and Content Patcher.",
    copyrightYear: new Date().getFullYear(),
  },

  // --------------------------------------------------------------------------
  // 2. Official GitHub Integration & Issue Templates
  // --------------------------------------------------------------------------
  github: {
    // Official GitHub organization
    org: "SAGE-DevelopmentTeam",

    // Desktop Application Repository (Private codebase - not linked directly to public)
    repoName: "SA-GE",

    // Official Public Releases Repository
    releasesRepoName: "SA-GE-Releases",
    releasesRepoUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases",

    // Official Public Website Repository
    websiteRepoName: "SA-GE-Website",
    websiteRepoUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Website",

    // Issues & Feedback Hub
    issuesUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE/issues",

    // Direct Bug Report Issue Template URL (used on bugs.html and global CTAs)
    bugReportUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE/issues/new?template=bug_report.md&labels=bug",

    // Direct Feature Suggestion Issue Template URL (used on suggestions.html)
    suggestionUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE/issues/new?template=feature_request.md&labels=enhancement",

    // Public GitHub API base and repository identifier (owner/repo)
    apiBase: "https://api.github.com",
    apiRepo: "SAGE-DevelopmentTeam/SA-GE",
    releasesApiRepo: "SAGE-DevelopmentTeam/SA-GE-Releases",
  },

  // --------------------------------------------------------------------------
  // 3. Desktop Application & Official Release Information
  // --------------------------------------------------------------------------
  releases: {
    // Relative URL to the authoritative auto-updater manifest
    manifestUrl: "./update/manifest.json",

    // Production manifest URL for external updater consumers
    productionManifestUrl: "https://sage-editor.com/update/manifest.json",

    // Current official release metadata (v1.0.0)
    fallback: {
      version: "1.0.0",
      displayVersion: "v1.0.0",
      releaseDate: "August 27, 2026",
      title: "SA:GE v1.0.0",
      summary: "Official public release featuring the Visual Map Editor, Stardew layer stack, seasonal tileset manager, warp visualizer, and Content Patcher / SMAPI workflow in a self-contained portable package.",
      downloadUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/download/v1.0.0/SAGE-v1.0.0-Portable.zip",
      installerUrl: null,
      fileSizeBytes: 65813166,
      formattedSize: "62.8 MB",
      sha256: "7F9D938A743884FD4D98CE8A7F81E8B408FD0140D8258C68F482D055943CC930",
      platform: "Windows x64",
      distribution: "Portable ZIP",
      isPreRelease: false,
      highlights: [
        "Self-contained portable distribution — no separate .NET Runtime required",
        "Hardware-accelerated 2D tile canvas with 16x16 grid and marquee selection",
        "Full Stardew Valley layer system (Back, Buildings, Paths, Front, AlwaysFront)",
        "Automatic 4-season tilesheet extraction & missing asset safeguards",
        "Interactive Step-on Warp, Object, and NPC spawn location visualizers",
        "Instant Content Patcher manifest and content.json generation",
        "Built-in documentation guide with smart natural language search"
      ]
    },

    // Changelog history archive (reverse chronological order)
    history: [
      {
        version: "1.0.0",
        displayVersion: "v1.0.0",
        date: "August 27, 2026",
        isLatest: true,
        tag: "v1.0.0",
        title: "SA:GE v1.0.0 Official Release",
        summary: "The official public release of SA:GE with complete Map Editor capabilities and Content Patcher workflow for Windows x64.",
        changes: {
          features: [
            "Self-contained portable packaging (64-bit Windows)",
            "Visual Map Editor with Brush, Box Fill, Bucket, Eraser, and Eyedropper tools",
            "Multi-tileset manager supporting vanilla Stardew XNB and PNG tilesheets",
            "Dynamic 4-season tilesheet swapping (Spring, Summer, Fall, Winter)",
            "Visual step-on warps inspector and destination coordinate markers",
            "NPC spawn placement pins with facing direction indicator",
            "Paths layer marker inspector (debris, tree spawners, lighting sconces)",
            "Content Patcher & SMAPI mod compatibility",
            "Auto-updater system querying official website manifest"
          ],
          improvements: [
            "Non-destructive TMX serialization preserving custom properties and object groups",
            "Automatic relative path sanitation for Content Patcher (zero ../ prefixes)",
            "Dark-mode desktop user interface with customizable canvas grid colors"
          ],
          fixes: [
            "Official v1.0.0 production build"
          ]
        },
        downloadUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/download/v1.0.0/SAGE-v1.0.0-Portable.zip",
        sha256: "7F9D938A743884FD4D98CE8A7F81E8B408FD0140D8258C68F482D055943CC930"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. Runtime & System Requirements (Accurately matching SA:GE build)
  // --------------------------------------------------------------------------
  requirements: {
    os: "Windows 10 / Windows 11 (64-bit)",
    runtime: "Self-Contained (Included in Portable ZIP — No separate .NET installation required)",
    gameRequirement: "Stardew Valley 1.6+ (Steam or GOG edition)",
    smapiRequirement: "SMAPI 4.0+ (Required for in-game mod execution)",
    smapiUrl: "https://smapi.io",
    hardware: "Any standard x64 PC with 4 GB RAM and DirectX 9 / OpenGL capable graphics",
  },

  // --------------------------------------------------------------------------
  // 5. Dynamic Statistics Endpoint Configuration
  // --------------------------------------------------------------------------
  statistics: {
    // URL to future statistics backend (Set to null or valid URL when live)
    // When null or unreachable, the UI displays the clean "—" placeholder state.
    endpointUrl: null,

    // How often to poll the statistics endpoint in milliseconds (60 seconds = 60000ms)
    pollIntervalMs: 60000,

    // Initial placeholder values (Display "—" to ensure NO fabricated data is shown)
    initial: {
      downloads: "—",
      users: "—",
      modsCreated: "—"
    }
  },

  // --------------------------------------------------------------------------
  // 6. Navigation Links (Centralized across Header & Footer)
  // --------------------------------------------------------------------------
  nav: [
    { label: "Home", href: "index.html" },
    { label: "Download", href: "download.html" },
    { label: "Guide", href: "guide.html" },
    { label: "Releases", href: "releases.html" },
    { label: "Bug Reports", href: "bugs.html" },
    { label: "Suggestions", href: "suggestions.html" },
    { label: "About", href: "about.html" }
  ]
};

// Make globally accessible in browser environments
if (typeof window !== "undefined") {
  window.SAGE_CONFIG = SAGE_CONFIG;
}

// Support CommonJS/module exports if imported in Node/tests
if (typeof module !== "undefined" && module.exports) {
  module.exports = SAGE_CONFIG;
}
