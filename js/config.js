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
    description: "Visual modding suite and authoring tool for Stardew Valley.",
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
    repoReleasesUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases",

    // Official Public Releases Repository
    releasesRepoName: "SA-GE-Releases",
    releasesRepoUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases",

    // Official Public Website Repository
    websiteRepoName: "SA-GE-Website",
    websiteRepoUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Website",

    // Issues & Feedback Hub
    issuesUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/issues",

    // Direct Bug Report Issue Template URL (used on bugs.html and global CTAs)
    bugReportUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/issues/new?template=bug_report.md&labels=bug",

    // Direct Feature Suggestion Issue Template URL (used on suggestions.html)
    suggestionUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/issues/new?template=feature_request.md&labels=enhancement",

    // Public GitHub API base
    apiBase: "https://api.github.com",

    // Repository for main project / issues / stargazers
    apiRepo: "SAGE-DevelopmentTeam/SA-GE-Releases",

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

    // Current official release metadata (v3.0.0)
    fallback: {
      version: "3.0.0",
      displayVersion: "v3.0.0",
      releaseDate: "September 7, 2026",
      title: "SA:GE V3.0.0",
      summary: "SA:GE V3 unifies mod authoring into an end-to-end mod development workspace with the Event Studio, advanced Stardew Object Action engineering, full Property Catalogs, Localization (i18n) Engine, Global Deep Search, and safe cross-system refactoring.",
      downloadUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/download/v3.0.0/SA-GE-3.0.0-win-x64.zip",
      releasePageUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/tag/v3.0.0",
      installerUrl: null,
      fileSizeBytes: 70446860,
      formattedSize: "67.2 MB",
      sha256: "53ea1099e05f27d259357cb24ebaff8aaf5e3a9c89b4a743a7e85cd11fe24d7b",
      platform: "Windows x64",
      distribution: "Portable ZIP",
      isPreRelease: false,
      highlights: [
        "End-to-end mod development pipeline unifying Maps, Characters, Items, Events, Assets, and Content Patcher",
        "Visual Event Studio with timeline cutscene scripting, dialogue authoring, branch conditions, and coordinate picking",
        "Interactive Stardew Object Action and TouchAction editors with full syntax and schema validation",
        "Complete Stardew Map, Layer, and Tile Property Catalogs with vanilla documentation and auto-completion",
        "Localization (i18n) Engine with multi-language side-by-side editing and Content Patcher token synchronization",
        "Global Deep Search (Ctrl+Shift+F) across maps, tiles, characters, items, events, actions, and raw JSON",
        "Multi-File Safe Refactoring and real-time namespace collision / duplicate ID prevention",
        "Comprehensive Semantic Project Diagnostics and integrated SMAPI test session orchestration",
        "Smart Tile auto-tiling, tile variations, frequency weighting, and replace tile tools",
        "Automatic update system with SHA-256 package verification and offline-first startup"
      ]
    },

    // Changelog history archive (reverse chronological order)
    history: [
      {
        version: "3.0.0",
        displayVersion: "v3.0.0",
        date: "September 7, 2026",
        isLatest: true,
        tag: "v3.0.0",
        title: "SA:GE V3.0.0 — End-to-End Mod Development Workspace & Pipeline",
        summary: "SA:GE V3 unifies mod authoring into an end-to-end mod development workspace with the Event Studio, advanced Stardew Object Action engineering, full Property Catalogs, Localization (i18n) Engine, Global Deep Search, and safe cross-system refactoring.",
        changes: {
          features: [
            "Event Studio — visual cutscene editor, character dialogue scripting, timeline events, branch conditions, coordinate picking, and CP export",
            "Stardew Object Action & TouchAction engineering — dedicated visual dialogs with syntax validation for 7 distinct warp schemas, shops, and emotes",
            "Map, Layer, and Tile Property Catalogs — complete vanilla documentation and auto-completion for Stardew Valley properties",
            "Localization (i18n) Engine — side-by-side multi-language translation editor with Content Patcher token generation",
            "Global Deep Search (Ctrl+Shift+F) — instant project-wide search across maps, tiles, characters, items, events, actions, and JSON",
            "Multi-File Safe Refactoring — safe entity renaming propagating across maps, warps, events, and schedules with collision guards",
            "Integrated SMAPI Test Runner & Mod Build Pipeline — automated build verification, clean zip packaging, and live test sessions",
            "Replace Tile tool — search and replace specific tiles across selected layers or entire maps",
            "Semantic Project Diagnostics — real-time validation engine catching missing assets, broken references, and syntax mistakes"
          ],
          improvements: [
            "Unified end-to-end project orchestration connecting all editors seamlessly",
            "Enhanced Smart Tile rule system with preview support and frequency weighting",
            "Optimized map renderer caching and layer opacity controls",
            "Robust background auto-updater feed verification with detailed error reporting"
          ],
          fixes: [
            "Fixed coordinate parsing inconsistencies in multi-token Stardew warps",
            "Fixed Content Patcher patch ordering for character dialogue and event dependencies",
            "Resolved touch action serialization edge cases with custom parameters"
          ]
        },
        downloadUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/download/v3.0.0/SA-GE-3.0.0-win-x64.zip",
        releasePageUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/tag/v3.0.0",
        sha256: "53ea1099e05f27d259357cb24ebaff8aaf5e3a9c89b4a743a7e85cd11fe24d7b"
      },
      {
        version: "2.0.0",
        displayVersion: "v2.0.0",
        date: "September 3, 2026",
        isLatest: false,
        tag: "v2.0.0",
        title: "SA:GE V2.0.0",
        summary: "SA:GE V2 introduces a complete visual workflow for creating and managing Stardew Valley mod content without requiring users to manually edit raw files.",
        changes: {
          features: [
            "Complete Item workflow — create and edit custom items, properties, categories, prices, and sprite textures",
            "Complete Character workflow — author custom NPCs with portraits, sprites, dialogues, schedules, and gift preferences",
            "Complete Map workflow — visual map authoring, multi-directory map discovery, warps, and Smart Tile painting",
            "Asset management — visual asset organization with automatic path resolution and live previews",
            "Project workflow — create, open, save, and reload projects with dirty/unsaved-change protection",
            "Project validation — pre-deployment integrity engine checking textures, map files, and entity IDs",
            "Direct deployment — one-click deployment directly to the Stardew Valley Mods directory",
            "Content Patcher synchronization — automatic standard Content Patcher (1.29+ / 2.0+) format generation",
            "Character and Map integration — NPC spawn point synchronization and companion spawns.json extraction",
            "Integrated Guide & Settings — searchable in-app documentation and customized preferences",
            "Automatic update system — offline-first startup, semantic version checking, and integrity checks"
          ],
          improvements: [
            "Cohesive single-window workspace with unified navigation across Items, Characters, Maps, Assets, Guide, and Settings",
            "Robust unsaved-changes protection with Save, Discard, and Cancel prompts across all editors",
            "Pre-deployment validation gating preventing broken mods from being deployed",
            "Automatic asset path sanitization and canonical relative path normalization",
            "Standardized Content Patcher format generation preserving user project sources"
          ],
          fixes: [
            "Fixed validation crash on null/empty project paths",
            "Fixed legacy build-output paths in asset references",
            "Safeguarded UI resource lookups against missing brush keys",
            "Fixed stale patch cleanup in Content Patcher synchronization on entity deletion"
          ]
        },
        downloadUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/download/v2.0.0/SA-GE-2.0.0-win-x64.zip",
        releasePageUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/tag/v2.0.0",
        sha256: "d40500bda97b897ae1fbdc2d1141bf7a31ec01ed74187f8775aa7d4e709da49f"
      },
      {
        version: "1.1.0",
        displayVersion: "v1.1.0",
        date: "August 28, 2026",
        isLatest: false,
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
        downloadUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/download/v1.1.0/SAGE-v1.1.0-Portable.zip",
        releasePageUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/tag/v1.1.0",
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
        downloadUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/download/v1.0.0/SAGE-v1.0.0-Portable.zip",
        releasePageUrl: "https://github.com/SAGE-DevelopmentTeam/SA-GE-Releases/releases/tag/v1.0.0",
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
