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
    description: "Visual map editor and authoring tool for Stardew Valley.",
    copyrightYear: new Date().getFullYear(),
  },

  // --------------------------------------------------------------------------
  // 2. Official GitHub Integration & Issue Templates
  // --------------------------------------------------------------------------
  github: {
    // Official GitHub organization
    org: "SAGE-DevelopmentTeam",

    // Desktop Application Repository (Private — source code)
    repoName: "SA-GE",
    repoReleasesUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE/releases",

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

    // Public GitHub API base
    apiBase: "https://api.github.com",

    // Repository for main project / stargazers
    apiRepo: "SAGE-DevelopmentTeam/SA-GE",

    // Public releases repository for asset download counts
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

    // Current official release metadata (v1.1.0)
    fallback: {
      version: "1.1.0",
      displayVersion: "v1.1.0",
      releaseDate: "August 28, 2026",
      title: "SA:GE v1.1.0 — Smart Tiles",
      summary: "V1.1.0 introduces the redesigned manual Smart Tile configuration system, universal topology, tile variations, configurable variation frequency, and expanded Smart Tile painting controls.",
      downloadUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE/releases/download/v1.1.0/SAGE-v1.1.0-Portable.zip",
      releasePageUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE/releases/tag/v1.1.0",
      installerUrl: null,
      fileSizeBytes: null,
      formattedSize: null,
      sha256: null,
      platform: "Windows x64",
      distribution: "Portable ZIP",
      isPreRelease: false,
      highlights: [
        "Smart Tiles — manual terrain configuration for Stardew Valley tile families",
        "Universal 3×3 topology with L-shaped inner corners",
        "Multiple tile variations per Smart Tile position",
        "Per-variation frequency controls for natural-looking terrain",
        "1×, 2×, and 3× Smart Tile brush sizes",
        "Improved blob painting for correct variation distribution",
        "Improved Smart Tile configuration UI",
        "Self-contained portable distribution — no separate .NET installation required"
      ]
    },

    // Changelog history archive (reverse chronological order)
    history: [
      {
        version: "1.1.0",
        displayVersion: "v1.1.0",
        date: "August 28, 2026",
        isLatest: true,
        tag: "v1.1.0",
        title: "SA:GE v1.1.0 — Smart Tiles",
        summary: "V1.1.0 introduces the redesigned manual Smart Tile configuration system, universal topology, tile variations, configurable variation frequency, and expanded Smart Tile painting controls.",
        changes: {
          features: [
            "Smart Tile system with manual tile assignment — choose exactly which tiles belong to each rule",
            "Universal 3×3 topology: center, outer edges, outer corners, and L-shaped inner corners",
            "Multiple tile variations per Smart Tile position (e.g. several visually distinct center tiles)",
            "Per-variation frequency controls for natural-looking, non-repetitive terrain",
            "1×, 2×, and 3× Smart Tile brush sizes",
            "Improved blob painting — larger strokes correctly distribute variations instead of producing incorrect patterns"
          ],
          improvements: [
            "Redesigned Smart Tile configuration UI focused on a single topology editor",
            "Larger Smart Tile windows and clearer controls",
            "Taller brush-size controls",
            "Improved Paint / Configure buttons and trash-can delete icon",
            "Clearer tile-selection visualization"
          ],
          fixes: []
        },
        downloadUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE/releases/download/v1.1.0/SAGE-v1.1.0-Portable.zip",
        releasePageUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE/releases/tag/v1.1.0",
        sha256: null
      },
      {
        version: "1.0.0",
        displayVersion: "v1.0.0",
        date: "August 27, 2026",
        isLatest: false,
        tag: "v1.0.0",
        title: "SA:GE v1.0.0 Official Release",
        summary: "The official public release of SA:GE with Map Editor capabilities for Windows x64.",
        changes: {
          features: [
            "Self-contained portable package for 64-bit Windows",
            "Visual Map Editor for Stardew Valley maps",
            "Tileset management for map textures",
            "Map layer visibility and editing tools",
            "Tile editing tools (Brush, Box Fill, Bucket, Eraser, Eyedropper)",
            "Warp creation and editing",
            "Object and property editing",
            "NPC spawn point placement",
            "Project management system",
            "Built-in guide with search",
            "Automatic update system"
          ],
          improvements: [
            "Visual interface designed for Stardew Valley map authoring",
            "Dark mode desktop interface"
          ],
          fixes: [
            "Official v1.0.0 release"
          ]
        },
        downloadUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE/releases/download/v1.0.0/SAGE-v1.0.0-Portable.zip",
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
