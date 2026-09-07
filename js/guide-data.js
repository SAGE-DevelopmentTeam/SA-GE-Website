/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — Official V3.0.0 Guide Documentation Database
 * ============================================================================
 * Contains complete structured articles, categories, and natural search indices.
 * Fully verified and aligned with the SA:GE V3.0.0 desktop application codebase.
 */

const SAGE_GUIDE_DATA = {
  "categories": [
    {
      "id": "getting-started",
      "name": "Getting Started",
      "icon": "🚀",
      "description": "Overview, installation, workspace navigation, and project save safety."
    },
    {
      "id": "projects",
      "name": "Project Management",
      "icon": "📁",
      "description": "Creating, opening, recent projects, and project folder structure."
    },
    {
      "id": "items",
      "name": "Item Editor",
      "icon": "📦",
      "description": "Authoring custom items, pricing, edibility, context tags, and textures."
    },
    {
      "id": "characters",
      "name": "Character Editor (NPCs)",
      "icon": "👥",
      "description": "Creating NPCs, appearance, portraits, sprites, schedules, dialogue, and gifts."
    },
    {
      "id": "events",
      "name": "Event Studio",
      "icon": "🎬",
      "description": "Scripting cutscenes, timeline command sequencing, character dialogue, forks, and map coordinate picking."
    },
    {
      "id": "character-map-integration",
      "name": "Character & Map Linking",
      "icon": "🔗",
      "description": "NPC spawn placement on maps, home map synchronization, and companion data."
    },
    {
      "id": "map-editor",
      "name": "Visual Map Editor",
      "icon": "🗺️",
      "description": "Map discovery, layer depth sorting, canvas tools, warps, actions, property catalogs, and TMX structure."
    },
    {
      "id": "smart-tiles",
      "name": "Smart Tiles",
      "icon": "🌿",
      "description": "Terrain configuration, universal 3×3 topology, variations, and blob painting."
    },
    {
      "id": "assets",
      "name": "Asset Management",
      "icon": "🎨",
      "description": "Visual Asset Browser, organizing textures, and canonical project-relative paths."
    },
    {
      "id": "project-tools",
      "name": "References & Search",
      "icon": "🔍",
      "description": "Multi-file dependency graph, safe refactoring, and global deep search across all mod assets."
    },
    {
      "id": "localization",
      "name": "Localization (i18n)",
      "icon": "🌐",
      "description": "Side-by-side multi-language translation tables and automated token generation."
    },
    {
      "id": "content-patcher",
      "name": "Content Patcher Sync",
      "icon": "📄",
      "description": "Automatic generation of content.json, standard patch targets, and Load actions."
    },
    {
      "id": "validation",
      "name": "Project Validation",
      "icon": "🛡️",
      "description": "Pre-deployment integrity engine, checking textures, maps, IDs, and error remediation."
    },
    {
      "id": "build-testing",
      "name": "Build & SMAPI Testing",
      "icon": "🛠️",
      "description": "Staged clean builds, distributable ZIP packaging, and live SMAPI playtest sessions with log streaming."
    },
    {
      "id": "deployment",
      "name": "Mod Deployment",
      "icon": "🚀",
      "description": "Deploying directly to Stardew Valley Mods, folder naming, and file exclusion."
    },
    {
      "id": "settings",
      "name": "Settings & Customization",
      "icon": "⚙️",
      "description": "Custom themes, accent colors, window modes, and Stardew path detection."
    },
    {
      "id": "updates-help",
      "name": "Updates & Guide System",
      "icon": "🔄",
      "description": "Offline-first automatic updates, SHA-256 verification, and in-app documentation."
    },
    {
      "id": "troubleshooting-faq",
      "name": "Troubleshooting & FAQ",
      "icon": "⚠️",
      "description": "Diagnosing common errors, validation issues, and frequently asked questions."
    }
  ],
  "articles": [
    {
      "id": "what-is-sage",
      "categoryId": "getting-started",
      "title": "What is SA:GE?",
      "order": 1,
      "summary": "An introduction to SA:GE, its purpose, and the complete end-to-end visual modding workflow for Stardew Valley.",
      "keywords": [
        "intro",
        "overview",
        "what is sage",
        "about",
        "features",
        "stardew modding",
        "v3",
        "workflow"
      ],
      "synonyms": [
        "introduction",
        "basics",
        "purpose",
        "concept",
        "faq"
      ],
      "related": [
        "installing-sage",
        "workspace-overview",
        "creating-projects"
      ],
      "content": "\n        <p class=\"article-lead\"><strong>SA:GE (Stardew Authoring : Game Editor)</strong> is an end-to-end visual mod development workspace designed to make Stardew Valley mod creation accessible, reliable, and expressive without writing C# code or manually editing JSON files.</p>\n        \n        <div class=\"callout callout-tip\">\n          <div class=\"callout-title\">💡 Complete End-to-End Modding Workspace</div>\n          <p>SA:GE V3 unifies <strong>Visual Map Editing</strong>, <strong>NPC &amp; Character Authoring</strong>, <strong>Custom Items</strong>, <strong>Cutscene Event Scripting</strong>, <strong>Tile Action Engineering</strong>, <strong>Localization (i18n)</strong>, <strong>Semantic Diagnostics</strong>, and <strong>Interactive SMAPI Testing</strong> into a single cohesive application.</p>\n        </div>\n\n        <h2>The 8-Step SA:GE Modding Workflow</h2>\n        <p>SA:GE guides you through the full mod development lifecycle from concept to playable release:</p>\n        <ol>\n          <li><strong>CREATE:</strong> Initialize clean Content Patcher mod projects with standard manifest metadata and directory layout.</li>\n          <li><strong>EDIT:</strong> Visually design maps, custom items, NPC personalities, portraits, sprites, schedules, cutscenes, and translations.</li>\n          <li><strong>REFERENCE:</strong> Cross-link maps with character spawns, warps, shop actions, and event triggers with real-time dependency tracking.</li>\n          <li><strong>VALIDATE:</strong> Run semantic diagnostics (<kbd>F6</kbd>) to detect missing textures, invalid warp coordinates, schema violations, and ID collisions before loading.</li>\n          <li><strong>BUILD:</strong> Compile a clean, staged runtime build (<kbd>F5</kbd>) stripping source metadata and temporary files.</li>\n          <li><strong>TEST:</strong> Launch interactive SMAPI test sessions (<kbd>F8</kbd>) with live console streaming and click-to-asset error navigation.</li>\n          <li><strong>EXPORT:</strong> Generate distributable release ZIP archives ready for Nexus Mods or CurseForge with one click.</li>\n          <li><strong>DEPLOY:</strong> Automatically stage and update your mod directly inside your local Stardew Valley <code>Mods</code> directory.</li>\n        </ol>\n\n        <h2>Core Capabilities</h2>\n        <ul>\n          <li><strong>Visual Map Editor:</strong> Multi-layer canvas editing (Back, Buildings, Paths, Front, AlwaysFront), tileset palettes, auto-tiling Smart Tiles, warp builders, and the batch Replace Tile tool.</li>\n          <li><strong>Event Studio:</strong> Visual cutscene timeline sequencer, character dialogue scripting with emotion portraits, branch forks, coordinate pickers, and Content Patcher patch compilation.</li>\n          <li><strong>Stardew Object Actions &amp; TouchActions:</strong> Dedicated visual builders with strict schema verification for 7 warp schemas (Map Warp, Action Warp, TouchAction Warp, MagicWarp, ObeliskWarp, LockedDoorWarp, Door), shops, emotes, and event triggers.</li>\n          <li><strong>Property Catalogs:</strong> Comprehensive vanilla documentation and auto-completion for Map, Layer, and Tile properties (Common, Specialized, Deprecated).</li>\n          <li><strong>Character Editor:</strong> Author full NPC villagers with walking sprite sheets, emotion portraits, daily schedule routines, dialogue trees, and 5-tier gift preferences.</li>\n          <li><strong>Item Editor:</strong> Create custom objects with categories, sell prices, edibility, context tags, and custom 16×16 PNG sprites.</li>\n          <li><strong>Localization (i18n) Studio:</strong> Side-by-side multi-language translation tables with automated <code>{{i18n:key}}</code> token synchronization.</li>\n          <li><strong>Global Deep Search (<kbd>Ctrl+Shift+F</kbd>):</strong> Fast project-wide search across maps, tiles, characters, items, events, actions, and raw JSON.</li>\n          <li><strong>Multi-File Safe Refactoring:</strong> Safe renaming of IDs and maps that automatically updates all references across your project with collision guards.</li>\n          <li><strong>Integrated SMAPI Test Runner:</strong> Real-time log streaming with instant navigation to broken assets when errors occur.</li>\n        </ul>\n\n        <h2>What SA:GE Does Not Require</h2>\n        <ul>\n          <li><strong>No Coding Required:</strong> You do not need to write C# or understand code compilation.</li>\n          <li><strong>No Manual JSON Editing:</strong> SA:GE automatically generates standard <code>manifest.json</code>, <code>content.json</code>, and <code>i18n</code> files.</li>\n          <li><strong>Self-Contained Runtime:</strong> Distributed as a portable Windows x64 package with the .NET runtime included.</li>\n          <li><strong>Offline-First:</strong> Operates 100% offline with zero telemetry, zero accounts, and zero cloud tracking.</li>\n        </ul>\n      "
    },
    {
      "id": "installing-sage",
      "categoryId": "getting-started",
      "title": "Installation & First Launch",
      "order": 2,
      "summary": "System requirements, extracting the portable ZIP, and running SA:GE on Windows.",
      "keywords": [
        "install",
        "setup",
        "download",
        "requirements",
        "windows",
        "portable zip",
        "first launch"
      ],
      "synonyms": [
        "how to install",
        "run sage",
        "executable",
        "getting started"
      ],
      "related": [
        "what-is-sage",
        "workspace-overview",
        "creating-projects"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE is distributed as a self-contained portable application for 64-bit Windows. No installer or administrative setup is required.</p>\n\n        <h2>System Requirements</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 30%;\">Component</th>\n                <th style=\"width: 40%;\">Specification</th>\n                <th style=\"width: 30%;\">Notes</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Operating System</strong></td>\n                <td>Windows 10 or Windows 11 (64-bit)</td>\n                <td>x64 architecture required</td>\n              </tr>\n              <tr>\n                <td><strong>Runtime</strong></td>\n                <td>Self-Contained (Included in ZIP)</td>\n                <td>No separate .NET installation needed</td>\n              </tr>\n              <tr>\n                <td><strong>Stardew Valley</strong></td>\n                <td>Version 1.6+ (Steam or GOG)</td>\n                <td>Required when testing and deploying mods</td>\n              </tr>\n              <tr>\n                <td><strong>Mod Loader</strong></td>\n                <td>SMAPI 4.0+ &amp; Content Patcher</td>\n                <td>Required for in-game mod execution</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <h2>Installation Steps</h2>\n        <ol>\n          <li>Download the official <code>SA-GE-3.0.0-win-x64.zip</code> from the <a href=\"download.html\">Download Page</a>.</li>\n          <li>Extract the archive into a folder of your choice (for example: <code>C:\\Tools\\SAGE</code> or <code>D:\\Modding\\SAGE</code>).</li>\n          <li>Double-click <code>SA:GE.exe</code> (or <code>SAGE.exe</code>) to launch the application.</li>\n        </ol>\n\n        <div class=\"callout callout-note\">\n          <div class=\"callout-title\">ℹ️ Game Folder Detection</div>\n          <p>On first launch, SA:GE automatically detects standard Steam and GOG Stardew Valley installations. If your game is installed in a custom location, you can set your path in <strong>Settings ➔ Projects</strong>.</p>\n        </div>\n      "
    },
    {
      "id": "workspace-overview",
      "categoryId": "getting-started",
      "title": "Understanding the Workspace",
      "order": 3,
      "summary": "A tour of the Home Dashboard, navigation sidebar, editors, and diagnostic tools.",
      "keywords": [
        "workspace",
        "layout",
        "sidebar",
        "navigation",
        "dashboard",
        "interface",
        "ui"
      ],
      "synonyms": [
        "panels",
        "screens",
        "main window"
      ],
      "related": [
        "what-is-sage",
        "project-lifecycle-safety",
        "creating-projects"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE features a unified single-window interface organized around a central navigation sidebar, contextual editing workspaces, and a live diagnostic status bar.</p>\n\n        <h2>Navigation Sidebar</h2>\n        <p>The sidebar on the left lets you quickly switch between major modding systems:</p>\n        <ul>\n          <li><strong>🏠 Home:</strong> Dashboard with project summary, entity statistics, quick build actions, and recent project history.</li>\n          <li><strong>📦 Items:</strong> Item Editor for authoring custom objects, categories, pricing, edibility, and textures.</li>\n          <li><strong>👥 Characters:</strong> Character Editor for designing custom NPCs, portraits, sprites, schedules, dialogue, and gift tastes.</li>\n          <li><strong>🎬 Events:</strong> Event Studio for visual cutscene timeline sequencing, character dialogue with emotion portraits, and branch conditions.</li>\n          <li><strong>🗺️ Maps:</strong> Visual Map Editor with layer depth sorting, tileset palettes, auto-tiling Smart Tiles, warps, and tile actions.</li>\n          <li><strong>🎨 Assets:</strong> Centralized Asset Browser for managing textures, portraits, sprites, and tilesheets.</li>\n          <li><strong>🌐 Localization:</strong> Multi-language translation tables with side-by-side editing and Content Patcher i18n token syncing.</li>\n          <li><strong>🔍 Search (<kbd>Ctrl+Shift+F</kbd>):</strong> Global Deep Search across all maps, tiles, characters, items, events, actions, and project files.</li>\n          <li><strong>📖 User Guide (<kbd>F1</kbd>):</strong> Integrated in-app documentation and reference guides.</li>\n          <li><strong>⚙️ Settings:</strong> Preferences for themes, accent colors, window display modes, and game directories.</li>\n        </ul>\n\n        <h2>Home Dashboard</h2>\n        <p>When you open a project, the Home screen displays:</p>\n        <ul>\n          <li><strong>Project Summary:</strong> Displays project name, unique ID, version, and author.</li>\n          <li><strong>Content Stats:</strong> Live count of custom items, characters, cutscenes, maps, and texture assets in the project.</li>\n          <li><strong>Quick Actions:</strong> One-click buttons to <em>Build Mod</em> (<kbd>F5</kbd>), <em>Validate Project</em> (<kbd>F6</kbd>), and <em>Test with SMAPI</em> (<kbd>F8</kbd>).</li>\n          <li><strong>System Status:</strong> Displays detected Stardew Valley installation and Mods directory status.</li>\n        </ul>\n      "
    },
    {
      "id": "project-lifecycle-safety",
      "categoryId": "getting-started",
      "title": "Project Lifecycle & Save Safety",
      "order": 4,
      "summary": "How SA:GE tracks modifications, protects unsaved changes, and safely saves your work.",
      "keywords": [
        "save",
        "unsaved changes",
        "dirty state",
        "safety",
        "lifecycle",
        "close project",
        "ctrl+s"
      ],
      "synonyms": [
        "saving",
        "data protection",
        "discard",
        "cancel"
      ],
      "related": [
        "workspace-overview",
        "creating-projects",
        "opening-recent-projects"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE includes automated unsaved-change protection across all editors to prevent accidental data loss.</p>\n\n        <h2>Saving Your Work</h2>\n        <ul>\n          <li>Press <kbd>Ctrl+S</kbd> or click <strong>Save</strong> at any time to save changes in the active editor.</li>\n          <li>Saving synchronizes your item definitions, character profiles, maps, and asset references into your project files and updates <code>content.json</code>.</li>\n        </ul>\n\n        <h2>Unsaved-Changes Protection</h2>\n        <p>Whenever you attempt to close an editor, switch to another project, or exit the application with unsaved modifications, SA:GE displays a confirmation dialog with three clear options:</p>\n        <ul>\n          <li><strong>Save &amp; Close:</strong> Automatically saves all pending changes and proceeds.</li>\n          <li><strong>Discard:</strong> Aborts pending changes and proceeds without saving.</li>\n          <li><strong>Cancel:</strong> Halts the closing action immediately, leaving your workspace exactly as you left it.</li>\n        </ul>\n\n        <div class=\"callout callout-tip\">\n          <div class=\"callout-title\">💡 Non-Destructive Operation</div>\n          <p>SA:GE never silently deletes or overwrites your source files without asking. Even during mod deployment, your project source folder remains completely untouched.</p>\n        </div>\n      "
    },
    {
      "id": "creating-projects",
      "categoryId": "projects",
      "title": "Creating a New Project",
      "order": 1,
      "summary": "How to initialize a new mod project with the Project Wizard.",
      "keywords": [
        "new project",
        "create project",
        "wizard",
        "init",
        "manifest",
        "unique id"
      ],
      "synonyms": [
        "start project",
        "project wizard"
      ],
      "related": [
        "opening-recent-projects",
        "project-structure",
        "workspace-overview"
      ],
      "content": "\n        <p class=\"article-lead\">Every mod in SA:GE is organized as a self-contained project folder containing both development metadata and Content Patcher mod assets.</p>\n\n        <h2>Creating a Project</h2>\n        <ol>\n          <li>On the <strong>Home</strong> screen, click <strong>Create New Project</strong> (or use <strong>File ➔ New Project</strong>).</li>\n          <li>Fill in your mod details:\n            <ul>\n              <li><strong>Project Name:</strong> The human-readable name of your mod (e.g. <em>My Valley Expansion</em>).</li>\n              <li><strong>Mod Unique ID:</strong> The reverse-domain identifier used by SMAPI (e.g. <code>AuthorName.MyValleyExpansion</code>).</li>\n              <li><strong>Author:</strong> Your name or creator tag.</li>\n              <li><strong>Version:</strong> Initial version string (e.g. <code>1.0.0</code>).</li>\n              <li><strong>Description:</strong> A short summary of what your mod adds.</li>\n              <li><strong>Destination Folder:</strong> Select an empty folder on your computer where project files will be stored.</li>\n            </ul>\n          </li>\n          <li>Click <strong>Create Project</strong>.</li>\n        </ol>\n\n        <div class=\"callout callout-note\">\n          <div class=\"callout-title\">ℹ️ Project Location Best Practice</div>\n          <p>Store your project folder in your personal Documents or Modding directory (e.g. <code>C:\\Users\\You\\Documents\\MyModProject</code>). Do not create projects directly inside the game's <code>Mods</code> folder—use SA:GE's <strong>Deploy Mod</strong> action to deploy cleanly.</p>\n        </div>\n      "
    },
    {
      "id": "opening-recent-projects",
      "categoryId": "projects",
      "title": "Opening & Recent Projects",
      "order": 2,
      "summary": "Opening existing project folders, standalone manifest imports, and recent project history.",
      "keywords": [
        "open project",
        "recent projects",
        "import manifest",
        "load project"
      ],
      "synonyms": [
        "reopen",
        "load",
        "history"
      ],
      "related": [
        "creating-projects",
        "project-structure",
        "workspace-overview"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE allows you to seamlessly reopen past projects or import standalone Content Patcher mod folders.</p>\n\n        <h2>Opening an Existing Project</h2>\n        <ul>\n          <li>Click <strong>Open Project</strong> on the Home dashboard or choose <strong>File ➔ Open Project</strong> (<kbd>Ctrl+O</kbd>).</li>\n          <li>Select the project folder containing <code>project.json</code> or <code>manifest.json</code>.</li>\n        </ul>\n\n        <h2>Recent Projects</h2>\n        <p>The Home dashboard maintains a list of recently opened projects with their paths, last modified dates, and quick-open buttons. You can click any recent project entry to open it instantly.</p>\n\n        <h2>Importing Standalone Manifest Mods</h2>\n        <p>If you open a standard Content Patcher mod folder that does not have a <code>project.json</code> file, SA:GE automatically inspects its <code>manifest.json</code>, discovers existing maps and assets, and constructs a compatible SA:GE project structure without modifying existing files.</p>\n      "
    },
    {
      "id": "project-structure",
      "categoryId": "projects",
      "title": "Project Folder Structure",
      "order": 3,
      "summary": "Detailed breakdown of files and folders inside an SA:GE project.",
      "keywords": [
        "project structure",
        "files",
        "folders",
        "project.json",
        "manifest.json",
        "content.json",
        "assets"
      ],
      "synonyms": [
        "file hierarchy",
        "directory layout"
      ],
      "related": [
        "creating-projects",
        "asset-manager",
        "content-patcher-sync"
      ],
      "content": "\n        <p class=\"article-lead\">Understanding the folder structure helps you organize your custom textures, maps, and mod assets effectively.</p>\n\n        <h2>Directory Layout</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 30%;\">File / Folder</th>\n                <th style=\"width: 25%;\">Type</th>\n                <th style=\"width: 45%;\">Purpose &amp; Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><code>project.json</code></td>\n                <td>Source Metadata</td>\n                <td>Internal SA:GE project configuration and entity links (excluded during deployment).</td>\n              </tr>\n              <tr>\n                <td><code>manifest.json</code></td>\n                <td>SMAPI Manifest</td>\n                <td>Official SMAPI mod manifest declaring Mod ID, Name, Author, and Version.</td>\n              </tr>\n              <tr>\n                <td><code>content.json</code></td>\n                <td>Content Patcher</td>\n                <td>Generated Content Patcher patch script containing all data edits and load actions.</td>\n              </tr>\n              <tr>\n                <td><code>assets/</code></td>\n                <td>Asset Storage</td>\n                <td>Central folder for your custom PNG textures, portraits, sprites, and tilesets.</td>\n              </tr>\n              <tr>\n                <td><code>assets/Portraits/</code></td>\n                <td>Portraits</td>\n                <td>Custom NPC dialogue portraits (64×64 per emotion frame).</td>\n              </tr>\n              <tr>\n                <td><code>assets/Characters/</code></td>\n                <td>Sprites</td>\n                <td>Custom NPC walking and character animation sprite sheets.</td>\n              </tr>\n              <tr>\n                <td><code>assets/Items/</code></td>\n                <td>Item Textures</td>\n                <td>Custom 16×16 item sprite textures.</td>\n              </tr>\n              <tr>\n                <td><code>Maps/</code> or <code>assets/Maps/</code></td>\n                <td>TMX Maps</td>\n                <td>Custom TMX map files authored in the Map Editor.</td>\n              </tr>\n              <tr>\n                <td><code>assets/spawns.json</code></td>\n                <td>Companion Data</td>\n                <td>Synchronized map NPC spawn coordinates for runtime integration.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"callout callout-tip\">\n          <div class=\"callout-title\">💡 Work Through SA:GE Editors</div>\n          <p>You do not need to manually edit <code>content.json</code> or <code>manifest.json</code>. SA:GE keeps these files synchronized automatically whenever you save in the Item, Character, or Map editors.</p>\n        </div>\n      "
    },
    {
      "id": "item-editor-overview",
      "categoryId": "items",
      "title": "Item Editor Overview",
      "order": 1,
      "summary": "How to create, edit, save, and manage custom items in SA:GE.",
      "keywords": [
        "items",
        "item editor",
        "create item",
        "custom items",
        "objects"
      ],
      "synonyms": [
        "object editor",
        "custom objects",
        "inventory items"
      ],
      "related": [
        "item-properties",
        "item-textures-sprites",
        "content-patcher-sync"
      ],
      "content": "\n        <p class=\"article-lead\">The Item Editor provides a visual workflow for authoring custom Stardew Valley 1.6+ objects, food, crafting materials, and weapons.</p>\n\n        <h2>Managing Items</h2>\n        <ul>\n          <li><strong>Creating an Item:</strong> Click <strong>Add Item</strong> to open the item creation form.</li>\n          <li><strong>Editing an Item:</strong> Select any item from the project item list to inspect and edit its properties.</li>\n          <li><strong>Saving an Item:</strong> Click <strong>Save Item</strong> or press <kbd>Ctrl+S</kbd> to persist changes.</li>\n          <li><strong>Deleting an Item:</strong> Click <strong>Delete Item</strong>. SA:GE purges the item definition and automatically removes its patches from <code>content.json</code>.</li>\n        </ul>\n\n        <div class=\"callout callout-note\">\n          <div class=\"callout-title\">ℹ️ Stardew 1.6+ Modern Item Architecture</div>\n          <p>SA:GE formats custom items directly for Stardew Valley 1.6's <code>Data/Objects</code> architecture, generating namespaced virtual texture targets (<code>Mods/{ModId}/Items/{ItemId}</code>) for maximum mod compatibility.</p>\n        </div>\n      "
    },
    {
      "id": "item-properties",
      "categoryId": "items",
      "title": "Item Properties & Economics",
      "order": 2,
      "summary": "Configuring item identity, categories, pricing, edibility, and context tags.",
      "keywords": [
        "item properties",
        "category",
        "price",
        "edibility",
        "isdrink",
        "context tags",
        "object type"
      ],
      "synonyms": [
        "item stats",
        "item economics",
        "edible items"
      ],
      "related": [
        "item-editor-overview",
        "item-textures-sprites",
        "project-validation"
      ],
      "content": "\n        <p class=\"article-lead\">Configure the gameplay and economic behavior of your custom items with dedicated property fields.</p>\n\n        <h2>Field Reference</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 25%;\">Field</th>\n                <th style=\"width: 25%;\">Type</th>\n                <th style=\"width: 50%;\">Description &amp; Behavior</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Item ID</strong></td>\n                <td>Identifier (alphanumeric)</td>\n                <td>Unique identifier for the item (e.g. <code>ruby_dagger</code> or <code>forest_herb</code>).</td>\n              </tr>\n              <tr>\n                <td><strong>Display Name</strong></td>\n                <td>Text</td>\n                <td>In-game name shown in player inventory and tooltips.</td>\n              </tr>\n              <tr>\n                <td><strong>Description</strong></td>\n                <td>Text</td>\n                <td>Flavor text and lore displayed on the item tooltip.</td>\n              </tr>\n              <tr>\n                <td><strong>Object Type</strong></td>\n                <td>Dropdown</td>\n                <td>Classification: <code>Basic</code>, <code>Minerals</code>, <code>Crafting</code>, <code>Fish</code>, <code>Cooking</code>, <code>Ring</code>, or <code>Quest</code>.</td>\n              </tr>\n              <tr>\n                <td><strong>Category</strong></td>\n                <td>Category Enum</td>\n                <td>Stardew Valley category (e.g. <code>Crafting (-8)</code>, <code>Forage (-81)</code>, <code>Cooking (-7)</code>, <code>Gem (-2)</code>).</td>\n              </tr>\n              <tr>\n                <td><strong>Price</strong></td>\n                <td>Integer (Gold)</td>\n                <td>Base sell price when shipped or sold to store merchants.</td>\n              </tr>\n              <tr>\n                <td><strong>Edibility</strong></td>\n                <td>Integer</td>\n                <td>Energy restored when eaten. Positive values restore health/energy; <code>-300</code> marks an item inedible.</td>\n              </tr>\n              <tr>\n                <td><strong>Is Drink</strong></td>\n                <td>Checkbox</td>\n                <td>When checked, the eating animation plays the drinking sound and gesture.</td>\n              </tr>\n              <tr>\n                <td><strong>Context Tags</strong></td>\n                <td>Tag List</td>\n                <td>Tags used for crafting, cooking recipes, and quest filtering (e.g. <code>weapon</code>, <code>ruby</code>, <code>color_red</code>).</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      "
    },
    {
      "id": "item-textures-sprites",
      "categoryId": "items",
      "title": "Item Textures & Sprites",
      "order": 3,
      "summary": "Using custom PNG textures versus referencing vanilla tilesheet sprite indices.",
      "keywords": [
        "item texture",
        "custom sprite",
        "sprite index",
        "texture asset",
        "png",
        "springobjects"
      ],
      "synonyms": [
        "item graphics",
        "item art",
        "custom textures"
      ],
      "related": [
        "item-editor-overview",
        "item-properties",
        "asset-manager"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE supports both custom dedicated PNG texture files and standard in-game sprite sheet indices.</p>\n\n        <h2>1. Custom PNG Texture (Recommended)</h2>\n        <p>To use custom pixel art for your item:</p>\n        <ul>\n          <li>Place your 16×16 PNG image into your project's <code>assets/Items/</code> folder (e.g. <code>assets/Items/ruby_dagger.png</code>).</li>\n          <li>In the Item Editor, select the texture file using the asset selector.</li>\n          <li>SA:GE automatically creates an <code>Action: Load</code> Content Patcher patch mapping your PNG to <code>Mods/{YourModId}/Items/{ItemId}</code>.</li>\n        </ul>\n\n        <h2>2. Vanilla Sprite Sheet Index</h2>\n        <p>If you prefer to reuse an existing in-game sprite from Stardew Valley's <code>Maps/springobjects</code> sheet:</p>\n        <ul>\n          <li>Leave the Custom Texture field empty.</li>\n          <li>Enter the numeric <strong>Sprite Index</strong> (e.g. <code>16</code> for Wild Horseradish or <code>74</code> for Prismatic Shard).</li>\n          <li>SA:GE links the item entry directly to the vanilla sprite index in <code>Data/Objects</code>.</li>\n        </ul>\n      "
    },
    {
      "id": "character-editor-overview",
      "categoryId": "characters",
      "title": "Character Editor Overview",
      "order": 1,
      "summary": "Overview of custom NPC creation, profile management, and Content Patcher sync.",
      "keywords": [
        "characters",
        "npcs",
        "character editor",
        "custom npc",
        "villagers"
      ],
      "synonyms": [
        "npc creator",
        "character studio",
        "custom characters"
      ],
      "related": [
        "character-identity-appearance",
        "character-schedules",
        "character-dialogue",
        "character-gift-tastes"
      ],
      "content": "\n        <p class=\"article-lead\">The Character Editor allows you to author complete Stardew Valley villagers—including personality, portraits, sprite sheets, daily schedules, dialogue, and gift tastes.</p>\n\n        <h2>Workflow Summary</h2>\n        <ol>\n          <li><strong>Identity &amp; Appearance:</strong> Set character name, gender, age, birth date, and select portrait and sprite PNG assets.</li>\n          <li><strong>Spawn &amp; Home Location:</strong> Specify their home map, default spawn coordinates (<kbd>X</kbd>, <kbd>Y</kbd>), and initial facing direction.</li>\n          <li><strong>Schedules:</strong> Add routine schedules for weekdays, rainy days, and seasonal events.</li>\n          <li><strong>Dialogue:</strong> Write introduction dialogue, daily conversations, and event responses.</li>\n          <li><strong>Gift Preferences:</strong> Assign item IDs and unique reaction dialogues for Love, Like, Neutral, Dislike, and Hate gifts.</li>\n          <li><strong>Save:</strong> Click <strong>Save Character</strong> (<kbd>Ctrl+S</kbd>) to compile all entries into <code>Data/Characters</code> and Content Patcher patches.</li>\n        </ol>\n      "
    },
    {
      "id": "character-identity-appearance",
      "categoryId": "characters",
      "title": "NPC Identity, Portraits & Sprites",
      "order": 2,
      "summary": "Configuring character identity attributes, birthday, home region, and visual assets.",
      "keywords": [
        "character identity",
        "portrait",
        "sprite",
        "gender",
        "age",
        "birthday",
        "manners",
        "social anxiety"
      ],
      "synonyms": [
        "npc appearance",
        "personality",
        "traits"
      ],
      "related": [
        "character-editor-overview",
        "character-social-relationships",
        "asset-manager"
      ],
      "content": "\n        <p class=\"article-lead\">Configure the core personal identity and visual assets for your custom character.</p>\n\n        <h2>Identity Properties</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 25%;\">Property</th>\n                <th style=\"width: 30%;\">Options / Format</th>\n                <th style=\"width: 45%;\">Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Character ID</strong></td>\n                <td>Alphanumeric (e.g. <code>Aria</code>)</td>\n                <td>Internal NPC identifier used across game data and scripts.</td>\n              </tr>\n              <tr>\n                <td><strong>Display Name</strong></td>\n                <td>Text</td>\n                <td>Name shown in dialogue boxes and social menus.</td>\n              </tr>\n              <tr>\n                <td><strong>Gender</strong></td>\n                <td><code>Male</code>, <code>Female</code>, <code>Undefined</code></td>\n                <td>Character gender for dialogue tokens and social systems.</td>\n              </tr>\n              <tr>\n                <td><strong>Age</strong></td>\n                <td><code>Child</code>, <code>Teen</code>, <code>Adult</code>, <code>Elder</code></td>\n                <td>Age group classification.</td>\n              </tr>\n              <tr>\n                <td><strong>Manners</strong></td>\n                <td><code>Neutral</code>, <code>Polite</code>, <code>Rude</code></td>\n                <td>Manners demeanor classification.</td>\n              </tr>\n              <tr>\n                <td><strong>Social Anxiety</strong></td>\n                <td><code>Neutral</code>, <code>Outgoing</code>, <code>Shy</code></td>\n                <td>Social behavior trait.</td>\n              </tr>\n              <tr>\n                <td><strong>Optimism</strong></td>\n                <td><code>Positive</code>, <code>Negative</code></td>\n                <td>General outlook trait.</td>\n              </tr>\n              <tr>\n                <td><strong>Birth Season &amp; Day</strong></td>\n                <td>Season + Day (1–28)</td>\n                <td>Villager birthday shown on the town calendar (e.g. <em>Spring 10</em>).</td>\n              </tr>\n              <tr>\n                <td><strong>Home Region</strong></td>\n                <td><code>Town</code>, <code>Desert</code>, <code>Other</code></td>\n                <td>Primary region classification.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <h2>Visual Assets</h2>\n        <ul>\n          <li><strong>Portrait Asset:</strong> 64×64 pixel portrait sheet placed in <code>assets/Portraits/{CharacterId}.png</code>. Automatically patched to <code>Portraits/{CharacterId}</code>.</li>\n          <li><strong>Sprite Asset:</strong> Character walking and animation sheet placed in <code>assets/Characters/{CharacterId}.png</code>. Automatically patched to <code>Characters/{CharacterId}</code>.</li>\n        </ul>\n      "
    },
    {
      "id": "character-schedules",
      "categoryId": "characters",
      "title": "NPC Schedules",
      "order": 3,
      "summary": "Creating and editing daily schedule routines and activity paths.",
      "keywords": [
        "schedules",
        "npc schedule",
        "routine",
        "time",
        "waypoints",
        "daily path"
      ],
      "synonyms": [
        "npc routine",
        "schedule editor",
        "movement schedule"
      ],
      "related": [
        "character-editor-overview",
        "character-map-linking",
        "content-patcher-sync"
      ],
      "content": "\n        <p class=\"article-lead\">Schedules determine where custom NPCs move, stand, and interact throughout the in-game day.</p>\n\n        <h2>How Schedules Work</h2>\n        <p>In Stardew Valley, schedule entries define time checkpoints (in 24-hour game time format, e.g. <code>610</code> for 6:10 AM, <code>1200</code> for 12:00 PM) paired with a target map name, coordinates (<kbd>X</kbd>, <kbd>Y</kbd>), and facing direction.</p>\n\n        <h2>Schedule Entry Format</h2>\n        <p>Each schedule rule specifies a schedule key and serialized waypoint string:</p>\n        <ul>\n          <li><strong>Schedule Keys:</strong> <code>default</code> (normal daily routine), <code>rain</code> (rainy day routine), <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thu</code>, <code>Fri</code>, <code>Sat</code>, <code>Sun</code>, or seasonal variants (e.g. <code>spring</code>, <code>summer</code>).</li>\n          <li><strong>Waypoint String:</strong> Checkpoints separated by slashes (e.g. <code>610 CustomGlade 14 22 2/900 Town 20 15 2/1800 CustomGlade 14 22 0</code>).</li>\n        </ul>\n\n        <h2>Facing Directions</h2>\n        <p>The last number in each schedule checkpoint specifies character facing direction:</p>\n        <ul>\n          <li><code>0</code> = Up (Facing North)</li>\n          <li><code>1</code> = Right (Facing East)</li>\n          <li><code>2</code> = Down (Facing South)</li>\n          <li><code>3</code> = Left (Facing West)</li>\n        </ul>\n      "
    },
    {
      "id": "character-dialogue",
      "categoryId": "characters",
      "title": "NPC Dialogue",
      "order": 4,
      "summary": "Writing introduction dialogue, daily conversations, and seasonal lines.",
      "keywords": [
        "dialogue",
        "conversation",
        "introduction",
        "speech",
        "dialogue entries"
      ],
      "synonyms": [
        "talking",
        "dialogue editor",
        "chat"
      ],
      "related": [
        "character-editor-overview",
        "character-gift-tastes",
        "content-patcher-sync"
      ],
      "content": "\n        <p class=\"article-lead\">Author rich dialogues for your NPC that change dynamically depending on day, season, and relationship level.</p>\n\n        <h2>Common Dialogue Keys</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 30%;\">Dialogue Key</th>\n                <th style=\"width: 70%;\">When Spoken</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><code>Introduction</code></td>\n                <td>First conversation when the player meets the character.</td>\n              </tr>\n              <tr>\n                <td><code>Mon</code>, <code>Tue</code>, <code>Wed</code>, ...</td>\n                <td>Standard weekly daily dialogue spoken on the matching day.</td>\n              </tr>\n              <tr>\n                <td><code>spring</code>, <code>summer</code>, ...</td>\n                <td>Seasonal general dialogue spoken throughout the respective season.</td>\n              </tr>\n              <tr>\n                <td><code>rain</code></td>\n                <td>Special dialogue spoken when it is raining outdoors.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <h2>Formatting Dialogue</h2>\n        <p>Dialogue text can be written in plain conversational English. SA:GE compiles all dialogue entries directly into <code>Characters/Dialogue/{CharacterId}</code> in your mod's <code>content.json</code>.</p>\n      "
    },
    {
      "id": "character-gift-tastes",
      "categoryId": "characters",
      "title": "Gift Preferences",
      "order": 5,
      "summary": "Configuring NPC gift reactions across 5 tiers and custom response dialogues.",
      "keywords": [
        "gifts",
        "gift preferences",
        "npc gift tastes",
        "love",
        "like",
        "dislike",
        "hate",
        "neutral"
      ],
      "synonyms": [
        "gift tastes",
        "favorite gifts",
        "presents"
      ],
      "related": [
        "character-editor-overview",
        "character-social-relationships",
        "content-patcher-sync"
      ],
      "content": "\n        <p class=\"article-lead\">Configure your NPC's favorite items, disliked gifts, and unique dialogue responses for each reaction tier.</p>\n\n        <h2>Gift Tiers</h2>\n        <p>Stardew Valley recognizes five distinct gift preference tiers:</p>\n        <ol>\n          <li><strong>Love:</strong> Favorite items that grant the highest friendship bonus.</li>\n          <li><strong>Like:</strong> Appreciated items that grant a moderate friendship bonus.</li>\n          <li><strong>Neutral:</strong> Average items that grant standard response.</li>\n          <li><strong>Dislike:</strong> Unfavorable items that reduce friendship points.</li>\n          <li><strong>Hate:</strong> Worst items that significantly reduce friendship.</li>\n        </ol>\n\n        <h2>Configuring Gift Entries</h2>\n        <p>For each tier in the Character Editor:</p>\n        <ul>\n          <li><strong>Item IDs:</strong> Space-separated list of numeric or string item IDs (e.g. <code>74 850</code> for Prismatic Shard and Treasure Chest).</li>\n          <li><strong>Response Dialogue:</strong> The custom dialogue spoken when receiving a gift in this category (e.g. <em>\"Incredible! I love this!\"</em>).</li>\n        </ul>\n\n        <div class=\"callout callout-note\">\n          <div class=\"callout-title\">ℹ️ Automatic Data Synchronization</div>\n          <p>SA:GE formats your gift configuration into standard <code>Data/NPCGiftTastes</code> entries in <code>content.json</code> without requiring manual formatting.</p>\n        </div>\n      "
    },
    {
      "id": "character-social-relationships",
      "categoryId": "characters",
      "title": "Social Settings & Relationships",
      "order": 6,
      "summary": "Configuring marriage eligibility, socialization permissions, and love interests.",
      "keywords": [
        "romance",
        "dating",
        "isdatable",
        "cansocialize",
        "canreceivegifts",
        "loveinterest"
      ],
      "synonyms": [
        "relationships",
        "social settings",
        "marriage"
      ],
      "related": [
        "character-editor-overview",
        "character-gift-tastes",
        "content-patcher-sync"
      ],
      "content": "\n        <p class=\"article-lead\">Control whether custom characters can be romanced, receive gifts, socialize, or have romantic rivals.</p>\n\n        <h2>Social Permissions</h2>\n        <ul>\n          <li><strong>Is Datable / Can Be Romanced:</strong> When checked, the character displays a bouquet slot in the social menu and can be romanced by the player.</li>\n          <li><strong>Can Socialize:</strong> When enabled, the player can talk with the NPC to build friendship.</li>\n          <li><strong>Can Receive Gifts:</strong> When enabled, the character accepts weekly and birthday gifts.</li>\n          <li><strong>Love Interest:</strong> Specifies the character ID of the NPC's romantic rival or partner in festivals and events.</li>\n        </ul>\n      "
    },
    {
      "id": "event-studio-overview",
      "categoryId": "events",
      "title": "Event Studio Overview",
      "order": 1,
      "summary": "Visual cutscene authoring with timeline sequencing, dialogue trees, emotion portraits, and map coordinate picking.",
      "keywords": [
        "events",
        "event studio",
        "cutscenes",
        "scripting",
        "timeline",
        "branching",
        "forks",
        "dialogue",
        "emotion portraits",
        "coordinate picker",
        "data/events"
      ],
      "synonyms": [
        "cutscene maker",
        "story scripting",
        "event creator",
        "cinematic editor"
      ],
      "related": [
        "event-scripting-commands",
        "character-editor-overview",
        "map-editor-overview",
        "content-patcher-sync"
      ],
      "content": "\n        <p class=\"article-lead\">The Event Studio is a dedicated visual environment for scripting Stardew Valley cutscenes, heart events, and story cinematic sequences without writing cryptic command strings by hand.</p>\n\n        <h2>Key Capabilities</h2>\n        <ul>\n          <li><strong>Timeline-Based Command Sequencer:</strong> Build event timelines step-by-step with visual command blocks (movement, speech, pauses, animations, emotes).</li>\n          <li><strong>Character Dialogue &amp; Emotion Portraits:</strong> Write NPC dialogue and select specific facial emotion portraits from character sheets with instant live preview.</li>\n          <li><strong>Interactive Map Coordinate Picking:</strong> Pick destination tiles (<kbd>X</kbd>, <kbd>Y</kbd>) directly from your map canvas for actor positioning and waypoint paths.</li>\n          <li><strong>Fork &amp; Condition Branching:</strong> Build conditional branches based on player dialogue choices, friendship heart thresholds, quest completion, or inventory items.</li>\n          <li><strong>Content Patcher Auto-Export:</strong> Automatically compiles your timeline into standard Stardew Valley event scripts and injects them into <code>Data/Events/{MapName}</code> in <code>content.json</code>.</li>\n        </ul>\n\n        <h2>Event Structure</h2>\n        <p>In Stardew Valley, each event is defined by three parts:</p>\n        <ol>\n          <li><strong>Target Map:</strong> The location where the event triggers (e.g. <code>Farm</code>, <code>Town</code>, <code>Saloon</code>, or your custom map).</li>\n          <li><strong>Preconditions:</strong> When the event can play (e.g. <code>friendship Aria 4/time 1800 2200/weather sunny</code>).</li>\n          <li><strong>Script Command Stream:</strong> The sequential chain of cutscene commands executed by the game engine.</li>\n        </ol>\n\n        <div class=\"callout callout-tip\">\n          <div class=\"callout-title\">💡 Zero Manual String Parsing</div>\n          <p>You never need to remember cryptic slash-delimited script syntax (e.g. <code>speak Aria \"Hello\"/pause 500/move farmer 0 2 2</code>). SA:GE provides dedicated parameter fields and validates every command before compiling.</p>\n        </div>\n      "
    },
    {
      "id": "event-scripting-commands",
      "categoryId": "events",
      "title": "Event Scripting Commands Reference",
      "order": 2,
      "summary": "Comprehensive reference of supported cutscene commands, actor controls, audio, and branching logic.",
      "keywords": [
        "commands",
        "event commands",
        "speak",
        "move",
        "pause",
        "emote",
        "animate",
        "playsound",
        "playmusic",
        "viewport",
        "fade",
        "fork",
        "end"
      ],
      "synonyms": [
        "script commands",
        "cutscene actions",
        "event reference"
      ],
      "related": [
        "event-studio-overview",
        "character-dialogue",
        "map-actions-touchactions"
      ],
      "content": "\n        <p class=\"article-lead\">The Event Studio provides visual block editors for all standard Stardew Valley cutscene scripting commands.</p>\n\n        <h2>Command Reference</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 25%;\">Command</th>\n                <th style=\"width: 30%;\">Parameters</th>\n                <th style=\"width: 45%;\">Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><code>speak</code></td>\n                <td>Actor, Dialogue, Portrait Index</td>\n                <td>Opens speech bubble with the character's emotion portrait and text line.</td>\n              </tr>\n              <tr>\n                <td><code>move</code></td>\n                <td>Actor, Delta X, Delta Y, Direction</td>\n                <td>Walks the farmer or NPC along the specified tile offset and faces a direction.</td>\n              </tr>\n              <tr>\n                <td><code>pause</code></td>\n                <td>Duration (milliseconds)</td>\n                <td>Halts the sequence for a specified time (e.g. <code>1000</code> ms = 1 second).</td>\n              </tr>\n              <tr>\n                <td><code>emote</code></td>\n                <td>Actor, Emote ID</td>\n                <td>Displays an emotion bubble above the actor (Heart, Exclamation, Question, Anger, etc.).</td>\n              </tr>\n              <tr>\n                <td><code>animate</code></td>\n                <td>Actor, Animation Frames, Loop Flag</td>\n                <td>Plays custom sprite frame cycles for actions like reading, sitting, or fishing.</td>\n              </tr>\n              <tr>\n                <td><code>faceDirection</code></td>\n                <td>Actor, Direction (0–3)</td>\n                <td>Immediately turns the actor: 0=Up, 1=Right, 2=Down, 3=Left.</td>\n              </tr>\n              <tr>\n                <td><code>warp</code></td>\n                <td>Actor, Tile X, Tile Y</td>\n                <td>Instantly positions an actor or farmer at specific map coordinates.</td>\n              </tr>\n              <tr>\n                <td><code>playSound</code> / <code>playMusic</code></td>\n                <td>Audio Cue Name</td>\n                <td>Plays in-game sound effects (e.g. <code>doorClose</code>) or background music tracks.</td>\n              </tr>\n              <tr>\n                <td><code>viewport</code></td>\n                <td>X, Y, Target Actor, Pan Speed</td>\n                <td>Controls camera positioning or smooth panning across the scene.</td>\n              </tr>\n              <tr>\n                <td><code>fade</code></td>\n                <td>Fade In / Fade Out, Speed</td>\n                <td>Fades screen to black or returns from black for smooth transitions.</td>\n              </tr>\n              <tr>\n                <td><code>fork</code></td>\n                <td>Condition, Alternate Event ID</td>\n                <td>Branches execution to a different event timeline based on player choices or stats.</td>\n              </tr>\n              <tr>\n                <td><code>end</code></td>\n                <td>Exit Location, Facing Direction</td>\n                <td>Cleanly finalizes the cutscene, restores player control, and saves progress.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      "
    },
    {
      "id": "character-map-linking",
      "categoryId": "character-map-integration",
      "title": "Character & Map Linking",
      "order": 1,
      "summary": "Placing NPC spawn pins on maps and synchronizing home coordinates.",
      "keywords": [
        "character map linking",
        "spawn pin",
        "npc spawn",
        "home map",
        "companion data",
        "spawns.json"
      ],
      "synonyms": [
        "npc placement",
        "spawn synchronization",
        "map character integration"
      ],
      "related": [
        "character-editor-overview",
        "map-editor-overview",
        "map-tools"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE seamlessly links the Character Editor and Map Editor, allowing you to visually position characters on maps and sync spawn coordinates automatically.</p>\n\n        <h2>Placing NPC Spawns in the Map Editor</h2>\n        <ol>\n          <li>Open any custom map in the <strong>Map Editor</strong>.</li>\n          <li>Select the <strong>NPC Spawn Tool</strong> (<code>N</code>) from the canvas toolbar.</li>\n          <li>Click on the map tile where you want the character to start their day.</li>\n          <li>In the Properties Inspector, select the NPC from the dropdown list.</li>\n          <li>Choose their initial <strong>Facing Direction</strong> (Up, Right, Down, Left).</li>\n        </ol>\n\n        <h2>Bi-Directional Synchronization</h2>\n        <p>When an NPC spawn point is placed or moved on a map:</p>\n        <ul>\n          <li>The character's <strong>Home Map</strong> is automatically updated to the current map name.</li>\n          <li>The character's <strong>Default Spawn X &amp; Y</strong> coordinates are synchronized to the exact tile position.</li>\n          <li>SA:GE extracts spawn points to the companion <code>assets/spawns.json</code> file for runtime mod compatibility.</li>\n        </ul>\n      "
    },
    {
      "id": "map-editor-overview",
      "categoryId": "map-editor",
      "title": "Map Editor Overview",
      "order": 1,
      "summary": "Opening, creating, and managing custom TMX maps with multi-directory discovery.",
      "keywords": [
        "map editor",
        "tmx maps",
        "custom maps",
        "map discovery",
        "layers"
      ],
      "synonyms": [
        "map maker",
        "world editor"
      ],
      "related": [
        "map-layers",
        "map-tools",
        "map-warps",
        "smart-tiles-overview"
      ],
      "content": "\n        <p class=\"article-lead\">The SA:GE Map Editor is a visual tile-based map authoring tool built specifically for Stardew Valley's TMX map format and Content Patcher load patching.</p>\n\n        <h2>Multi-Directory Map Discovery</h2>\n        <p>SA:GE automatically detects and indexes custom maps located across standard project directories:</p>\n        <ul>\n          <li><code>assets/Maps/</code> (Standard asset folder)</li>\n          <li><code>Maps/</code> or <code>maps/</code> (Dedicated map directory)</li>\n          <li>Project root (e.g. <code>Farm.tmx</code> or custom standalone maps)</li>\n        </ul>\n\n        <h2>Opening and Creating Maps</h2>\n        <ul>\n          <li><strong>Creating a Map:</strong> Click <strong>New Map</strong>, specify map dimensions (width and height in 16×16 tiles), and select initial tilesets.</li>\n          <li><strong>Switching Maps:</strong> Use the map selector dropdown to switch between custom maps in your project instantly.</li>\n          <li><strong>Saving:</strong> Press <kbd>Ctrl+S</kbd> to serialize standard TMX XML data, sync tile attributes, and update <code>content.json</code>.</li>\n        </ul>\n      "
    },
    {
      "id": "map-layers",
      "categoryId": "map-editor",
      "title": "Map Layers & Depth Sorting",
      "order": 2,
      "summary": "Understanding Stardew Valley's five standard map layers, visibility, and depth.",
      "keywords": [
        "layers",
        "back",
        "buildings",
        "paths",
        "front",
        "alwaysfront",
        "depth sorting"
      ],
      "synonyms": [
        "map depth",
        "layer visibility",
        "layer hierarchy"
      ],
      "related": [
        "map-editor-overview",
        "map-tools",
        "map-properties"
      ],
      "content": "\n        <p class=\"article-lead\">Stardew Valley organizes map rendering into five distinct layers that determine collision, depth sorting, and rendering order.</p>\n\n        <h2>The 5 Standard Layers</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 25%;\">Layer Name</th>\n                <th style=\"width: 30%;\">Render Order</th>\n                <th style=\"width: 45%;\">Purpose &amp; Game Behavior</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><code>Back</code></td>\n                <td>Bottom (Ground)</td>\n                <td>Terrain, grass, dirt, water, and flooring. Drawn underneath player and NPCs.</td>\n              </tr>\n              <tr>\n                <td><code>Buildings</code></td>\n                <td>Obstacle Layer</td>\n                <td>Walls, fences, trees, and solid structures. Blocks player and NPC movement by default unless marked <code>Passable</code>.</td>\n              </tr>\n              <tr>\n                <td><code>Paths</code></td>\n                <td>Pathing Layer</td>\n                <td>NPC path markers, spawn helpers, and seasonal markers (typically hidden at runtime).</td>\n              </tr>\n              <tr>\n                <td><code>Front</code></td>\n                <td>Y-Sorted Depth</td>\n                <td>Roofs, tree tops, and upper wall segments drawn in front of characters when standing above/behind them.</td>\n              </tr>\n              <tr>\n                <td><code>AlwaysFront</code></td>\n                <td>Topmost Overlay</td>\n                <td>Overhead canopies, atmospheric shadows, and upper archways drawn in front of everything.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <h2>Layer Controls</h2>\n        <ul>\n          <li><strong>Visibility Toggle (👁️):</strong> Show or hide individual layers while painting.</li>\n          <li><strong>Lock Toggle (🔒):</strong> Lock layers to prevent accidental edits while working on adjacent layers.</li>\n        </ul>\n      "
    },
    {
      "id": "map-tools",
      "categoryId": "map-editor",
      "title": "Canvas & Editing Tools",
      "order": 3,
      "summary": "Complete reference of painting, selection, fill, eraser, and inspection tools.",
      "keywords": [
        "tools",
        "brush",
        "box tool",
        "bucket fill",
        "eraser",
        "eyedropper",
        "select",
        "shortcuts"
      ],
      "synonyms": [
        "drawing tools",
        "palette tools",
        "toolbar"
      ],
      "related": [
        "map-editor-overview",
        "map-selection-clipboard",
        "map-zoom-navigation"
      ],
      "content": "\n        <p class=\"article-lead\">The Map Editor provides a complete set of precision tools for tile placement and object inspection.</p>\n\n        <h2>Toolbar Tools &amp; Keyboard Shortcuts</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 20%;\">Tool</th>\n                <th style=\"width: 15%;\">Shortcut</th>\n                <th style=\"width: 65%;\">Usage &amp; Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Brush / Pencil</strong></td>\n                <td><kbd>B</kbd></td>\n                <td>Paints single tiles or multi-tile rectangular stamps onto the active layer.</td>\n              </tr>\n              <tr>\n                <td><strong>Box Tool</strong></td>\n                <td><kbd>U</kbd></td>\n                <td>Draws filled rectangles of tiles across an area.</td>\n              </tr>\n              <tr>\n                <td><strong>Bucket Fill</strong></td>\n                <td><kbd>F</kbd></td>\n                <td>Flood-fills contiguous matching tiles with the selected tile.</td>\n              </tr>\n              <tr>\n                <td><strong>Eraser</strong></td>\n                <td><kbd>E</kbd></td>\n                <td>Erases tiles from the active layer.</td>\n              </tr>\n              <tr>\n                <td><strong>Eyedropper</strong></td>\n                <td><kbd>I</kbd></td>\n                <td>Picks the clicked tile from the canvas and selects it in the active tileset.</td>\n              </tr>\n              <tr>\n                <td><strong>Marquee Select</strong></td>\n                <td><kbd>S</kbd></td>\n                <td>Selects rectangular regions of tiles for copying, cutting, or moving.</td>\n              </tr>\n              <tr>\n                <td><strong>Smart Tiles</strong></td>\n                <td><kbd>T</kbd></td>\n                <td>Paints terrain automatically using configured topology rules.</td>\n              </tr>\n              <tr>\n                <td><strong>Warp Tool</strong></td>\n                <td><kbd>W</kbd></td>\n                <td>Places and edits step-on map warps and transition coordinates.</td>\n              </tr>\n              <tr>\n                <td><strong>NPC Spawn Tool</strong></td>\n                <td><kbd>N</kbd></td>\n                <td>Places character spawn pins and configures initial facing directions.</td>\n              </tr>\n              <tr>\n                <td><strong>Replace Tile Tool</strong></td>\n                <td><kbd>R</kbd></td>\n                <td>Batch replaces matching tiles on the active layer or across the entire map canvas.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      "
    },
    {
      "id": "map-selection-clipboard",
      "categoryId": "map-editor",
      "title": "Selection & Clipboard",
      "order": 4,
      "summary": "Selecting tile regions, copying, cutting, pasting, and moving tile blocks.",
      "keywords": [
        "selection",
        "clipboard",
        "copy",
        "cut",
        "paste",
        "marquee",
        "ctrl+c",
        "ctrl+v"
      ],
      "synonyms": [
        "tile selection",
        "copy tiles",
        "move tiles"
      ],
      "related": [
        "map-tools",
        "map-zoom-navigation",
        "map-editor-overview"
      ],
      "content": "\n        <p class=\"article-lead\">Manipulate large map regions quickly with marquee selection and standard clipboard shortcuts.</p>\n\n        <h2>Selection Actions</h2>\n        <ul>\n          <li><strong>Create Selection:</strong> Activate the <strong>Select Tool</strong> (<kbd>S</kbd>) and drag a rectangle over the desired tile area.</li>\n          <li><strong>Copy (<kbd>Ctrl+C</kbd>):</strong> Copies the selected tile block to the clipboard.</li>\n          <li><strong>Cut (<kbd>Ctrl+X</kbd>):</strong> Copies the selection and clears the tiles on the active layer.</li>\n          <li><strong>Paste (<kbd>Ctrl+V</kbd>):</strong> Pastes the clipboard stamp onto your cursor for placement anywhere on the canvas.</li>\n          <li><strong>Deselect (<kbd>Esc</kbd>):</strong> Clears the active selection box.</li>\n        </ul>\n      "
    },
    {
      "id": "map-zoom-navigation",
      "categoryId": "map-editor",
      "title": "Zoom, Pan & Navigation",
      "order": 5,
      "summary": "Viewport navigation, mouse-anchored zooming, and canvas panning.",
      "keywords": [
        "zoom",
        "pan",
        "navigation",
        "mouse wheel",
        "viewport",
        "fit map"
      ],
      "synonyms": [
        "canvas navigation",
        "scrolling",
        "view controls"
      ],
      "related": [
        "map-tools",
        "map-editor-overview"
      ],
      "content": "\n        <p class=\"article-lead\">Navigate large maps smoothly with mouse-anchored zoom and panning controls.</p>\n\n        <h2>Zooming</h2>\n        <ul>\n          <li><strong>Mouse Wheel:</strong> Scroll up to zoom in, scroll down to zoom out (anchored directly to your cursor position).</li>\n          <li><strong>Zoom Dropdown:</strong> Select preset zoom levels (50%, 100%, 200%, 400%).</li>\n          <li><strong>Fit to Window (<kbd>Ctrl+0</kbd>):</strong> Centers the entire map in the viewport.</li>\n        </ul>\n\n        <h2>Panning the Canvas</h2>\n        <ul>\n          <li><strong>Middle Mouse Drag:</strong> Click and hold the middle mouse wheel to pan smoothly in any direction.</li>\n          <li><strong>Spacebar Drag:</strong> Hold <kbd>Spacebar</kbd> and left-click drag to pan the viewport.</li>\n        </ul>\n      "
    },
    {
      "id": "map-properties",
      "categoryId": "map-editor",
      "title": "Map & Tile Properties",
      "order": 6,
      "summary": "Configuring environment lighting, music, Passable flags, and action triggers.",
      "keywords": [
        "map properties",
        "tile properties",
        "passable",
        "water",
        "diggable",
        "action",
        "touchaction",
        "lighting",
        "music"
      ],
      "synonyms": [
        "custom properties",
        "tile attributes",
        "map settings"
      ],
      "related": [
        "map-layers",
        "map-warps",
        "map-editor-overview"
      ],
      "content": "\n        <p class=\"article-lead\">Define map environment settings and interactive tile properties directly from the Properties Inspector.</p>\n\n        <h2>Map Environment Properties</h2>\n        <ul>\n          <li><strong>Music:</strong> Background ambient music track (e.g. <code>spring_day_ambient</code>, <code>woodsTheme</code>).</li>\n          <li><strong>Light:</strong> Default lighting level and outdoor light color.</li>\n          <li><strong>Weather:</strong> Controls whether rain and weather effects render in this location.</li>\n        </ul>\n\n        <h2>Tile Attributes &amp; Actions</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 25%;\">Property</th>\n                <th style=\"width: 25%;\">Layer</th>\n                <th style=\"width: 50%;\">Game Behavior</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><code>Passable</code></td>\n                <td><code>Buildings</code></td>\n                <td>Allows players to walk through solid building tiles (e.g. open doorways).</td>\n              </tr>\n              <tr>\n                <td><code>Water</code></td>\n                <td><code>Back</code></td>\n                <td>Enables fishing and watering can refilling on water tiles.</td>\n              </tr>\n              <tr>\n                <td><code>Diggable</code></td>\n                <td><code>Back</code></td>\n                <td>Allows hoeing and planting on dirt tiles.</td>\n              </tr>\n              <tr>\n                <td><code>Action</code></td>\n                <td><code>Buildings</code></td>\n                <td>Triggered when the player presses the action button (e.g. <code>Message \"Welcome\"</code>).</td>\n              </tr>\n              <tr>\n                <td><code>TouchAction</code></td>\n                <td><code>Back</code></td>\n                <td>Triggered automatically when stepping on the tile (e.g. <code>Warp 12 40 Town</code>).</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      "
    },
    {
      "id": "map-warps",
      "categoryId": "map-editor",
      "title": "Warps & Transitions",
      "order": 7,
      "summary": "Creating step-on warps between custom maps and vanilla Stardew locations.",
      "keywords": [
        "warps",
        "transitions",
        "teleport",
        "destination",
        "warp tool",
        "map linking"
      ],
      "synonyms": [
        "doors",
        "portals",
        "entrances"
      ],
      "related": [
        "map-tools",
        "map-properties",
        "map-editor-overview"
      ],
      "content": "\n        <p class=\"article-lead\">Step-on warps transition the player between locations when stepping on designated trigger tiles.</p>\n\n        <h2>Creating a Warp</h2>\n        <ol>\n          <li>Select the <strong>Warp Tool</strong> (<kbd>W</kbd>) from the toolbar.</li>\n          <li>Click the map tile where you want the warp trigger placed.</li>\n          <li>In the Properties Inspector, configure the destination:\n            <ul>\n              <li><strong>Destination Map:</strong> Target map name (e.g. <code>Town</code>, <code>Farm</code>, or your custom map name).</li>\n              <li><strong>Destination X:</strong> Target tile column on the destination map.</li>\n              <li><strong>Destination Y:</strong> Target tile row on the destination map.</li>\n            </ul>\n          </li>\n        </ol>\n\n        <div class=\"callout callout-tip\">\n          <div class=\"callout-title\">💡 Visual Warp Indicators</div>\n          <p>The Map Editor renders directional warp indicators directly on canvas trigger tiles, showing destination coordinates for easy verification.</p>\n        </div>\n      "
    },
    {
      "id": "map-tilesets",
      "categoryId": "map-editor",
      "title": "Tileset Management",
      "order": 8,
      "summary": "Managing tilesheets, TSX references, palette zooming, and tile stamps.",
      "keywords": [
        "tilesets",
        "tsx",
        "tilesheet",
        "palette",
        "multi-tile stamps",
        "spring_outdoorsTileSheet"
      ],
      "synonyms": [
        "textures",
        "tile palette",
        "tiles"
      ],
      "related": [
        "map-editor-overview",
        "map-tools",
        "smart-tiles-overview"
      ],
      "content": "\n        <p class=\"article-lead\">Manage multiple tilesheet images, select single tiles, and create rectangular multi-tile stamps in the Tileset Palette.</p>\n\n        <h2>Tileset Palette Features</h2>\n        <ul>\n          <li><strong>Tileset Selector:</strong> Switch between available tilesheets (e.g. <code>spring_outdoorsTileSheet</code>, <code>townInterior</code>, <code>paths</code>).</li>\n          <li><strong>Multi-Tile Stamps:</strong> Click and drag across the palette to select a multi-tile block (such as a 3×3 tree or 2×2 house door) to paint in a single click.</li>\n          <li><strong>Palette Zoom:</strong> Adjust palette zoom slider to inspect fine pixel details.</li>\n        </ul>\n      "
    },
    {
      "id": "map-actions-touchactions",
      "categoryId": "map-editor",
      "title": "Tile Actions & TouchActions",
      "order": 9,
      "summary": "Engineering interactive tile triggers with strict schema verification for 7 warp types and vanilla action schemas.",
      "keywords": [
        "actions",
        "touchactions",
        "warps",
        "map warp",
        "action warp",
        "touchaction warp",
        "magicwarp",
        "obeliskwarp",
        "lockeddoorwarp",
        "door",
        "openshop",
        "emote",
        "facedirection",
        "playevent"
      ],
      "synonyms": [
        "triggers",
        "interactive tiles",
        "tile actions",
        "door triggers"
      ],
      "related": [
        "map-warps",
        "map-properties",
        "map-property-catalogs"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE features specialized action engineering dialogs for building interactive <code>Action</code> and <code>TouchAction</code> properties with strict syntax verification across all Stardew Valley warp types and interaction triggers.</p>\n\n        <h2>The 7 Stardew Warp Schemas</h2>\n        <p>Stardew Valley uses different warp schemas depending on tile layer, trigger condition, and building mechanics. SA:GE validates parameter counts, data types, and map targets in real time:</p>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 25%;\">Warp Schema</th>\n                <th style=\"width: 25%;\">Syntax Format</th>\n                <th style=\"width: 50%;\">Layer &amp; Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Standard Map Warp</strong></td>\n                <td><code>Warp X Y MapName</code></td>\n                <td>Placed on the <code>Back</code> layer as a <code>TouchAction</code> or map property. Transitions player upon stepping on tile.</td>\n              </tr>\n              <tr>\n                <td><strong>Action Warp</strong></td>\n                <td><code>Action Warp X Y MapName</code></td>\n                <td>Placed on the <code>Buildings</code> layer. Transitions player when facing and interacting with the tile.</td>\n              </tr>\n              <tr>\n                <td><strong>TouchAction Warp</strong></td>\n                <td><code>TouchAction Warp X Y MapName</code></td>\n                <td>Placed on the <code>Back</code> layer as an explicit TouchAction property.</td>\n              </tr>\n              <tr>\n                <td><strong>MagicWarp</strong></td>\n                <td><code>MagicWarp X Y</code></td>\n                <td>Teleports the player to coordinates within the same location with warp animations.</td>\n              </tr>\n              <tr>\n                <td><strong>ObeliskWarp</strong></td>\n                <td><code>ObeliskWarp MapName</code></td>\n                <td>Specialized farm obelisk teleportation trigger to target regions (e.g. <code>IslandSouth</code>).</td>\n              </tr>\n              <tr>\n                <td><strong>LockedDoorWarp</strong></td>\n                <td><code>LockedDoorWarp X Y Map KeyID</code></td>\n                <td>Requires a specific key item or condition before the warp opens (e.g. Skull Key).</td>\n              </tr>\n              <tr>\n                <td><strong>Door</strong></td>\n                <td><code>Door [TileIndex]</code></td>\n                <td>Triggers standard interior door transitions and sound effects.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <h2>Common Interaction Actions</h2>\n        <p>In addition to warps, the Action builder provides dedicated schemas for gameplay interactions:</p>\n        <ul>\n          <li><strong>OpenShop &lt;ShopId&gt;:</strong> Opens any vanilla or custom shop menu (e.g. <code>SeedShop</code>, <code>FishShop</code>, <code>Saloon</code>).</li>\n          <li><strong>ConditionalDoor &lt;Conditions&gt;:</strong> Opens a door only when specific game conditions or festival states are met.</li>\n          <li><strong>Emote &lt;EmoteId&gt;:</strong> Triggers an emotional emote bubble over the farmer or NPC.</li>\n          <li><strong>FaceDirection &lt;Direction&gt;:</strong> Forces the player or actor to turn in a specific cardinal direction upon contact.</li>\n          <li><strong>PlayEvent &lt;EventId&gt;:</strong> Triggers an in-game cutscene event registered in <code>Data/Events</code>.</li>\n          <li><strong>Sleep:</strong> Prompts the player with the bedtime confirmation dialog.</li>\n          <li><strong>Message &quot;&lt;Text&gt;&quot;:</strong> Displays an in-game dialogue popup window with text or localization tokens.</li>\n        </ul>\n      "
    },
    {
      "id": "map-property-catalogs",
      "categoryId": "map-editor",
      "title": "Property Catalogs & Documentation",
      "order": 10,
      "summary": "Built-in vanilla Stardew Valley property catalogs for maps, layers, and tiles with auto-completion.",
      "keywords": [
        "property catalogs",
        "tile properties",
        "layer properties",
        "map properties",
        "vanilla properties",
        "auto-completion",
        "documentation",
        "passable",
        "music",
        "light",
        "viewport"
      ],
      "synonyms": [
        "attribute dictionary",
        "property list",
        "stardew attributes"
      ],
      "related": [
        "map-properties",
        "map-actions-touchactions",
        "map-layers"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE includes integrated Property Catalogs documenting every vanilla Stardew Valley map, layer, and tile property with parameter types and live auto-completion.</p>\n\n        <h2>Property Classification</h2>\n        <p>The Property Inspector organizes attributes into three clear tiers:</p>\n        <ul>\n          <li><strong>Common Properties:</strong> Everyday attributes used in nearly every map (e.g. <code>Passable</code>, <code>Water</code>, <code>Diggable</code>, <code>Music</code>, <code>Light</code>, <code>Action</code>, <code>TouchAction</code>).</li>\n          <li><strong>Specialized Properties:</strong> Advanced environmental controls (e.g. <code>AmbientLight</code>, <code>FishLocation</code>, <code>Outdoors</code>, <code>TreatAsOutdoors</code>, <code>Viewport</code>, <code>DrawOverhead</code>).</li>\n          <li><strong>Deprecated Properties:</strong> Legacy Stardew 1.5 and earlier properties preserved for backward compatibility, accompanied by migration notes to modern 1.6+ equivalents.</li>\n        </ul>\n\n        <h2>Supported Scopes &amp; Catalogs</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 25%;\">Scope</th>\n                <th style=\"width: 25%;\">Target Object</th>\n                <th style=\"width: 50%;\">Sample Properties &amp; Behavior</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Map Scope</strong></td>\n                <td>Root Map (TMX)</td>\n                <td><code>Music</code>, <code>Light</code>, <code>AmbientLight</code>, <code>Outdoors</code>, <code>Weather</code>, <code>FarmType</code>, <code>Warp</code>.</td>\n              </tr>\n              <tr>\n                <td><strong>Layer Scope</strong></td>\n                <td>Individual Layers</td>\n                <td><code>Draw</code>, <code>Opacity</code>, <code>Color</code>, <code>Parallax</code>, <code>ScrollRate</code>.</td>\n              </tr>\n              <tr>\n                <td><strong>Tile Scope</strong></td>\n                <td>Specific Tile Cells</td>\n                <td><code>Passable</code>, <code>Water</code>, <code>Diggable</code>, <code>Action</code>, <code>TouchAction</code>, <code>NoSpawn</code>, <code>Type</code>.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <h2>Auto-Completion &amp; Validation</h2>\n        <p>When typing in property keys or values in the inspector, SA:GE suggests valid attribute names, expected data types (String, Int, Boolean, Float), and warns you immediately if a property is placed on an invalid layer (e.g. <code>TouchAction</code> placed on <code>Front</code> instead of <code>Back</code>).</p>\n      "
    },
    {
      "id": "map-replace-tile",
      "categoryId": "map-editor",
      "title": "Batch Replace Tile Tool",
      "order": 11,
      "summary": "Search and replace specific tile indices across active layers or the entire map canvas in one click.",
      "keywords": [
        "replace tile",
        "batch replace",
        "search and replace",
        "tile index",
        "layer replacement",
        "map refactoring"
      ],
      "synonyms": [
        "tile swap",
        "substitute tile",
        "find replace tiles"
      ],
      "related": [
        "map-tools",
        "map-tilesets",
        "map-layers"
      ],
      "content": "\n        <p class=\"article-lead\">The Replace Tile tool (<kbd>R</kbd>) lets you instantly swap every occurrence of a source tile with a target tile across the current layer or your entire map.</p>\n\n        <h2>When to Use Replace Tile</h2>\n        <ul>\n          <li><strong>Seasonal Conversions:</strong> Switch outdoor grass and tree tiles from Spring to Summer or Fall variations.</li>\n          <li><strong>Tileset Refactoring:</strong> Migrate old tileset references to newly reorganized tilesheet textures without repainting by hand.</li>\n          <li><strong>Fixing Misplaced Tiles:</strong> Replace mistakenly placed wall or flooring tiles across a large location in a single operation.</li>\n        </ul>\n\n        <h2>How to Replace Tiles</h2>\n        <ol>\n          <li>Select the <strong>Replace Tile Tool</strong> (<kbd>R</kbd>) from the canvas toolbar or choose <strong>Edit ➔ Replace Tile...</strong></li>\n          <li>Use the <strong>Eyedropper</strong> or click on the canvas to pick the <strong>Source Tile</strong> you wish to replace.</li>\n          <li>Select the <strong>Target Tile</strong> from your active tileset palette.</li>\n          <li>Choose your replacement scope:\n            <ul>\n              <li><strong>Active Layer Only:</strong> Replaces occurrences only on the currently selected layer.</li>\n              <li><strong>All Layers:</strong> Replaces occurrences across every layer in the map.</li>\n            </ul>\n          </li>\n          <li>Click <strong>Replace All</strong>. A summary toast displays the exact count of modified tiles.</li>\n        </ol>\n      "
    },
    {
      "id": "smart-tiles-overview",
      "categoryId": "smart-tiles",
      "title": "Smart Tile System",
      "order": 1,
      "summary": "Automated terrain painting with universal 3×3 topology and manual tile rules.",
      "keywords": [
        "smart tiles",
        "terrain",
        "auto tile",
        "topology",
        "terrain painting"
      ],
      "synonyms": [
        "auto tiling",
        "smart brush",
        "terrain rules"
      ],
      "related": [
        "smart-tiles-rules",
        "map-editor-overview",
        "map-tools"
      ],
      "content": "\n        <p class=\"article-lead\">The Smart Tile system allows you to paint complex terrain (such as grass, dirt paths, water edges, and cliffs) automatically placing correct edge and corner tiles as you paint.</p>\n\n        <h2>Universal 3×3 Topology</h2>\n        <p>SA:GE uses a universal 3×3 topology model encompassing:</p>\n        <ul>\n          <li><strong>Center:</strong> Interior fill tiles.</li>\n          <li><strong>Edges:</strong> Top, Bottom, Left, and Right border tiles.</li>\n          <li><strong>Outer Corners:</strong> Top-Left, Top-Right, Bottom-Left, and Bottom-Right exterior corners.</li>\n          <li><strong>Inner Corners:</strong> Four L-shaped interior corner configurations for complex concave terrain shapes.</li>\n        </ul>\n      "
    },
    {
      "id": "smart-tiles-rules",
      "categoryId": "smart-tiles",
      "title": "Creating & Editing Smart Tile Rules",
      "order": 2,
      "summary": "Assigning tiles, variations, per-variation frequency weighting, and brush sizes.",
      "keywords": [
        "smart tile rules",
        "variations",
        "frequency",
        "brush size",
        "blob painting"
      ],
      "synonyms": [
        "terrain configuration",
        "variation frequency",
        "rule editor"
      ],
      "related": [
        "smart-tiles-overview",
        "map-editor-overview",
        "map-tools"
      ],
      "content": "\n        <p class=\"article-lead\">Configure custom terrain rules with tile variations and natural random frequency weighting.</p>\n\n        <h2>Rule Configuration</h2>\n        <ol>\n          <li>Open the <strong>Smart Tiles</strong> panel and click <strong>New Rule</strong>.</li>\n          <li>Assign tiles from your active tileset to each topology slot (Center, Edges, Corners).</li>\n          <li>Add <strong>Variations:</strong> Assign multiple alternate tiles to any position (e.g. several flower variations for center grass).</li>\n          <li>Set <strong>Frequency Weights:</strong> Adjust the percentage weight for each variation to ensure natural, non-repetitive terrain.</li>\n        </ol>\n\n        <h2>Brush Controls</h2>\n        <ul>\n          <li><strong>Brush Sizes:</strong> Choose <code>1×</code>, <code>2×</code>, or <code>3×</code> brush sizes for broad terrain strokes.</li>\n          <li><strong>Blob Painting:</strong> Smooth strokes naturally distribute variations without creating artificial lines or repetitive patterns.</li>\n        </ul>\n      "
    },
    {
      "id": "asset-manager",
      "categoryId": "assets",
      "title": "Asset Management & Paths",
      "order": 1,
      "summary": "Using the visual Asset Browser and maintaining canonical project-relative paths.",
      "keywords": [
        "assets",
        "asset browser",
        "textures",
        "png",
        "portraits",
        "sprites",
        "relative paths"
      ],
      "synonyms": [
        "asset manager",
        "file browser",
        "images"
      ],
      "related": [
        "project-structure",
        "item-textures-sprites",
        "project-validation"
      ],
      "content": "\n        <p class=\"article-lead\">The Asset Browser provides a visual catalog of all textures, portraits, sprites, and tilesheets used across your project.</p>\n\n        <h2>Asset Categories</h2>\n        <ul>\n          <li><strong>Portraits (<code>assets/Portraits/</code>):</strong> NPC dialogue portraits.</li>\n          <li><strong>Characters (<code>assets/Characters/</code>):</strong> NPC walking sprite sheets.</li>\n          <li><strong>Items (<code>assets/Items/</code>):</strong> 16×16 custom item icons.</li>\n          <li><strong>Tilesets (<code>assets/Tilesets/</code>):</strong> Map tilesheet images and TSX files.</li>\n        </ul>\n\n        <h2>Canonical Project-Relative Paths</h2>\n        <p>SA:GE automatically normalizes all asset paths to standard forward-slash project-relative paths (e.g. <code>assets/Portraits/Aria.png</code>). This ensures that your project remains 100% portable and never breaks if moved to another computer.</p>\n      "
    },
    {
      "id": "project-references-rename",
      "categoryId": "project-tools",
      "title": "References & Safe Rename",
      "order": 1,
      "summary": "Multi-file dependency graph tracking, Used By relationship inspector, and safe entity renaming.",
      "keywords": [
        "references",
        "safe rename",
        "refactoring",
        "used by",
        "dependency graph",
        "collision detection",
        "rename npc",
        "rename item",
        "rename map"
      ],
      "synonyms": [
        "entity references",
        "smart rename",
        "cross references",
        "usage finder"
      ],
      "related": [
        "project-global-search",
        "project-structure",
        "project-validation"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE maintains a live project-wide dependency graph that tracks every relationship between maps, items, characters, cutscene events, dialogues, and texture assets.</p>\n\n        <h2>The 'Used By' Relationship Inspector</h2>\n        <p>Before modifying or deleting any asset, you can inspect where it is referenced across your mod:</p>\n        <ul>\n          <li><strong>Characters:</strong> Shows which maps place their spawn pins, what schedules reference waypoint coordinates, and which events feature the villager.</li>\n          <li><strong>Custom Items:</strong> Shows which NPC gift taste tables include the item, shop inventories offering it, and event reward commands.</li>\n          <li><strong>Maps:</strong> Shows which warps lead into this map, character spawn pins placed inside, and event scripts set in this location.</li>\n          <li><strong>Tilesets &amp; Textures:</strong> Lists all maps referencing the tilesheet and items or NPCs using the texture file.</li>\n        </ul>\n\n        <h2>Safe Rename Refactoring</h2>\n        <p>Renaming an ID manually in JSON often breaks multiple files. With SA:GE Safe Rename:</p>\n        <ol>\n          <li>Right-click any entity (Item ID, Character ID, or Map Name) and select <strong>Safe Rename...</strong></li>\n          <li>Enter the new identifier. SA:GE runs real-time <strong>collision detection</strong> to ensure the new ID is unique.</li>\n          <li>Click <strong>Apply Rename</strong>. SA:GE automatically propagates the change across all TMX maps, warp destinations, character dialogue files, schedule strings, cutscene commands, and <code>content.json</code> patches in a single atomic operation.</li>\n        </ol>\n      "
    },
    {
      "id": "project-global-search",
      "categoryId": "project-tools",
      "title": "Global Deep Search (Ctrl+Shift+F)",
      "order": 2,
      "summary": "Instant multi-category project search across maps, tiles, characters, items, events, actions, and raw JSON.",
      "keywords": [
        "search",
        "global search",
        "ctrl+shift+f",
        "deep search",
        "find",
        "entity filter",
        "search maps",
        "search tiles"
      ],
      "synonyms": [
        "project search",
        "find in project",
        "quick find",
        "asset search"
      ],
      "related": [
        "project-references-rename",
        "workspace-overview",
        "map-tools"
      ],
      "content": "\n        <p class=\"article-lead\">Global Deep Search (<kbd>Ctrl+Shift+F</kbd>) indexes your entire mod project in real time, allowing you to locate any item, villager, cutscene command, tile action, or raw text string in milliseconds.</p>\n\n        <h2>Searchable Categories</h2>\n        <ul>\n          <li><strong>Maps &amp; Tiles:</strong> Search by map name, layer name, tilesheet source, or tile coordinate.</li>\n          <li><strong>Tile Actions &amp; Warps:</strong> Search for specific action triggers (e.g. <code>OpenShop SeedShop</code> or <code>Warp 12 40 Town</code>).</li>\n          <li><strong>Characters:</strong> Search character IDs, display names, dialogue lines, schedule entries, and gift reactions.</li>\n          <li><strong>Items:</strong> Search item names, categories, descriptions, and context tags.</li>\n          <li><strong>Events:</strong> Search cutscene IDs, speech lines, command parameters, and branch conditions.</li>\n          <li><strong>Raw JSON:</strong> Search underlying <code>manifest.json</code>, <code>content.json</code>, and translation dictionaries.</li>\n        </ul>\n\n        <h2>Interactive Navigation</h2>\n        <p>Every search result is clickable. Clicking any result card instantly opens the appropriate editor (Map, Character, Item, or Event Studio) and focuses directly on the matching entity or coordinate.</p>\n      "
    },
    {
      "id": "localization-manager",
      "categoryId": "localization",
      "title": "Localization Studio & i18n",
      "order": 1,
      "summary": "Multi-language side-by-side string authoring with automated Content Patcher token synchronization.",
      "keywords": [
        "localization",
        "i18n",
        "translations",
        "languages",
        "side by side",
        "translation tables",
        "tokens",
        "default.json",
        "content patcher i18n"
      ],
      "synonyms": [
        "translation manager",
        "multi-language",
        "string tables",
        "language editor"
      ],
      "related": [
        "content-patcher-sync",
        "character-dialogue",
        "item-properties"
      ],
      "content": "\n        <p class=\"article-lead\">The Localization Studio provides side-by-side multi-language translation tables, making your mod accessible to global Stardew Valley communities without managing fragmented JSON files.</p>\n\n        <h2>How i18n Works in Stardew Valley</h2>\n        <p>Content Patcher reads localized strings from an <code>i18n/</code> folder containing a base file (<code>default.json</code>) and language-specific translations (e.g. <code>es.json</code>, <code>de.json</code>, <code>fr.json</code>, <code>ja.json</code>, <code>ru.json</code>, <code>zh.json</code>). Mod files reference these strings using tokens like <code>{{i18n:item.ruby_dagger.name}}</code>.</p>\n\n        <h2>Localization Studio Features</h2>\n        <ul>\n          <li><strong>Side-by-Side Translation Grid:</strong> View your primary language next to any target translation language with missing-string indicators.</li>\n          <li><strong>Automated Token Generation:</strong> SA:GE automatically generates standard token identifiers for item names, descriptions, character dialogue, and event speech.</li>\n          <li><strong>Missing String Auditing:</strong> The Project Validator highlights any translation key defined in <code>default.json</code> that is missing in secondary language files.</li>\n          <li><strong>Automatic Content Patcher Export:</strong> Compiles clean, formatted JSON files into your project's <code>i18n/</code> directory upon saving.</li>\n        </ul>\n      "
    },
    {
      "id": "content-patcher-sync",
      "categoryId": "content-patcher",
      "title": "Content Patcher Synchronization",
      "order": 1,
      "summary": "How SA:GE compiles visual editor data into standard Content Patcher patches.",
      "keywords": [
        "content patcher",
        "content.json",
        "sync",
        "data/objects",
        "data/characters",
        "load patches",
        "editdata"
      ],
      "synonyms": [
        "cp sync",
        "patch generator",
        "json export"
      ],
      "related": [
        "project-structure",
        "item-editor-overview",
        "character-editor-overview",
        "mod-deployment"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE acts as a visual compiler for Content Patcher, automatically synchronizing your project items, NPCs, and maps into clean <code>content.json</code> patch files.</p>\n\n        <h2>Generated Patch Categories</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 25%;\">Target</th>\n                <th style=\"width: 25%;\">Action</th>\n                <th style=\"width: 50%;\">Generated Content</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><code>Data/Objects</code></td>\n                <td><code>EditData</code></td>\n                <td>Custom item definitions, pricing, categories, edibility, and texture targets.</td>\n              </tr>\n              <tr>\n                <td><code>Data/Characters</code></td>\n                <td><code>EditData</code></td>\n                <td>NPC identity, appearance traits, home map, and default spawn coordinates.</td>\n              </tr>\n              <tr>\n                <td><code>Data/NPCGiftTastes</code></td>\n                <td><code>EditData</code></td>\n                <td>NPC gift preferences and reaction dialogues for Love, Like, Neutral, Dislike, Hate.</td>\n              </tr>\n              <tr>\n                <td><code>Characters/Dialogue/{Id}</code></td>\n                <td><code>EditData</code></td>\n                <td>Character dialogue lines (Introduction, weekdays, seasons, events).</td>\n              </tr>\n              <tr>\n                <td><code>Characters/schedules/{Id}</code></td>\n                <td><code>EditData</code></td>\n                <td>Character daily routines and waypoint checkpoints.</td>\n              </tr>\n              <tr>\n                <td><code>Portraits/{Id}</code></td>\n                <td><code>Load</code></td>\n                <td>Maps custom portrait PNGs to the game's portrait asset path.</td>\n              </tr>\n              <tr>\n                <td><code>Characters/{Id}</code></td>\n                <td><code>Load</code></td>\n                <td>Maps custom sprite PNGs to the game's character sprite asset path.</td>\n              </tr>\n              <tr>\n                <td><code>Maps/{MapName}</code></td>\n                <td><code>Load</code></td>\n                <td>Loads custom TMX map files into the game's location registry.</td>\n              </tr>\n              <tr>\n                <td><code>Data/Events/{MapName}</code></td>\n                <td><code>EditData</code></td>\n                <td>Cutscene event scripts, dialogue branches, and preconditions authored in Event Studio.</td>\n              </tr>\n              <tr>\n                <td><code>i18n/{Language}</code></td>\n                <td><code>Include</code></td>\n                <td>Multi-language string tables and translation token definitions.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      "
    },
    {
      "id": "project-validation",
      "categoryId": "validation",
      "title": "Project Validation Engine",
      "order": 1,
      "summary": "Running pre-deployment validation, understanding integrity checks, and fixing errors.",
      "keywords": [
        "validation",
        "validate project",
        "f6",
        "integrity checks",
        "missing assets",
        "error checking",
        "diagnostics"
      ],
      "synonyms": [
        "diagnostic",
        "project checker",
        "linter"
      ],
      "related": [
        "mod-build-packaging",
        "smapi-test-session",
        "troubleshooting"
      ],
      "content": "\n        <p class=\"article-lead\">The Project Validation Engine audits your entire project to catch broken textures, missing maps, duplicate IDs, syntax issues, and action schema errors before launching the game.</p>\n\n        <h2>Running Validation</h2>\n        <ul>\n          <li>Click <strong>Validate Project</strong> on the Home dashboard.</li>\n          <li>Choose <strong>Project ➔ Validate Project</strong> from the top menu.</li>\n          <li>Press shortcut key <kbd>F6</kbd>.</li>\n        </ul>\n\n        <h2>What Validation Checks</h2>\n        <ul>\n          <li><strong>Manifest Integrity:</strong> Confirms required fields (Name, UniqueID, Author, Version) in <code>manifest.json</code>.</li>\n          <li><strong>Content Patcher Syntax:</strong> Verifies format version, patch targets, and patch action structures.</li>\n          <li><strong>Texture Assets:</strong> Confirms that all referenced item PNGs, character portraits, sprites, and tilesheets exist on disk.</li>\n          <li><strong>Unique Identifiers:</strong> Detects duplicate Item IDs, Character IDs, or Event IDs that could cause game conflicts.</li>\n          <li><strong>Map &amp; Tileset References:</strong> Checks TMX file existence, referenced TSX tilesets, and valid layer configurations.</li>\n          <li><strong>NPC Spawns &amp; Warps:</strong> Validates destination map names, coordinate bounds, and character bindings.</li>\n          <li><strong>Action &amp; TouchAction Schemas:</strong> Verifies parameter counts and syntax for all 7 warp types and shop triggers.</li>\n          <li><strong>Event Command Integrity:</strong> Audits cutscene scripts for missing actors, invalid emotion indices, or broken coordinate waypoints.</li>\n        </ul>\n      "
    },
    {
      "id": "mod-build-packaging",
      "categoryId": "build-testing",
      "title": "Mod Build & Packaging (F5)",
      "order": 1,
      "summary": "Staged clean builds, build artifact isolation, and distributable release ZIP creation.",
      "keywords": [
        "build",
        "packaging",
        "f5",
        "clean build",
        "build folder",
        "release zip",
        "distribution",
        "nexus mods"
      ],
      "synonyms": [
        "compiler",
        "export zip",
        "package mod",
        "staged build"
      ],
      "related": [
        "smapi-test-session",
        "project-validation",
        "mod-deployment"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE compiles your project into a clean, isolated runtime build directory (<code>build/[CP] {YourModName}</code>) and generates distributable release ZIP archives ready for upload to Nexus Mods or CurseForge.</p>\n\n        <h2>The Build Pipeline (<kbd>F5</kbd>)</h2>\n        <p>Pressing <kbd>F5</kbd> or selecting <strong>Project ➔ Build Mod</strong> initiates a 3-step staged packaging pipeline:</p>\n        <ol>\n          <li><strong>Pre-Build Integrity Validation:</strong> The diagnostic engine verifies that all referenced textures, maps, cutscenes, and action schemas are error-free.</li>\n          <li><strong>Staged File Compilation:</strong> SA:GE compiles <code>content.json</code>, <code>manifest.json</code>, <code>i18n/</code> dictionaries, TMX maps, and required PNG textures into the isolated <code>build/</code> directory.</li>\n          <li><strong>Exclusion Engine:</strong> Development metadata (e.g. <code>project.json</code>, <code>.git</code> directories, scratch folders, backup files) are cleanly stripped from the final package.</li>\n        </ol>\n\n        <h2>Distributable Release ZIP</h2>\n        <p>Clicking <strong>Package Distributable ZIP</strong> packages the clean build into a compressed archive named <code>[CP] {YourModName}-{Version}.zip</code>, ready for immediate sharing with players.</p>\n      "
    },
    {
      "id": "smapi-test-session",
      "categoryId": "build-testing",
      "title": "Interactive SMAPI Test Session (F8)",
      "order": 2,
      "summary": "Launch live playtest sessions with embedded SMAPI log streaming and click-to-asset error navigation.",
      "keywords": [
        "test session",
        "smapi test",
        "f8",
        "playtest",
        "live logs",
        "log streaming",
        "error navigation",
        "debugging"
      ],
      "synonyms": [
        "run mod",
        "debug mod",
        "launch stardew",
        "test runner"
      ],
      "related": [
        "mod-build-packaging",
        "project-validation",
        "mod-deployment"
      ],
      "content": "\n        <p class=\"article-lead\">Test your mod in-game with a single keystroke. The Interactive SMAPI Test Session (<kbd>F8</kbd>) builds, stages, launches the game, and streams SMAPI console output directly within SA:GE.</p>\n\n        <h2>The 4-Step Test Pipeline</h2>\n        <ol>\n          <li><strong>Build:</strong> SA:GE compiles a fresh, clean runtime build of your project.</li>\n          <li><strong>Deploy:</strong> The build is automatically mirrored into your local Stardew Valley <code>Mods</code> folder.</li>\n          <li><strong>Launch:</strong> SA:GE launches <code>StardewModdingAPI.exe</code> with active developer flags.</li>\n          <li><strong>Stream &amp; Monitor:</strong> Console output streams directly into SA:GE's embedded Terminal panel with color-coded severity filtering (Info, Warning, Error).</li>\n        </ol>\n\n        <h2>Error-to-Asset Navigation</h2>\n        <p>If SMAPI encounters a missing asset or patch error during game load, SA:GE parses the stack trace and renders a clickable badge. Clicking the error badge jumps directly to the offending map tile, character schedule, or item definition for instant remediation.</p>\n      "
    },
    {
      "id": "mod-deployment",
      "categoryId": "deployment",
      "title": "Deploying to Stardew Valley",
      "order": 1,
      "summary": "One-click deployment directly to the Stardew Valley Mods directory.",
      "keywords": [
        "deploy",
        "deployment",
        "mods folder",
        "publish",
        "install mod",
        "stardew mods"
      ],
      "synonyms": [
        "export mod",
        "install to game",
        "deploy mod"
      ],
      "related": [
        "project-validation",
        "content-patcher-sync",
        "troubleshooting"
      ],
      "content": "\n        <p class=\"article-lead\">Deploy your finished mod directly into Stardew Valley's <code>Mods</code> directory with a single click.</p>\n\n        <h2>Deployment Workflow</h2>\n        <ol>\n          <li>Click <strong>Deploy Mod</strong> on the Home dashboard (or <strong>File ➔ Deploy Mod</strong>).</li>\n          <li><strong>Pre-Deployment Validation Gate:</strong> SA:GE automatically runs the Project Validator. If any errors are found, deployment is paused so you can resolve them.</li>\n          <li><strong>Destination Confirmation:</strong> SA:GE confirms deployment to <code>Stardew Valley/Mods/[CP] {YourModName}</code>.</li>\n          <li><strong>File Copying &amp; Exclusion:</strong> SA:GE copies all runtime mod files (<code>manifest.json</code>, <code>content.json</code>, <code>assets/</code>, <code>Maps/</code>, <code>i18n/</code>) while cleanly excluding development metadata (<code>project.json</code>, <code>.git</code>, backup files).</li>\n          <li>Launch Stardew Valley with SMAPI to playtest your new content!</li>\n        </ol>\n\n        <div class=\"callout callout-tip\">\n          <div class=\"callout-title\">💡 Source Files Stay Protected</div>\n          <p>Deploying copies a clean runtime build to your <code>Mods</code> directory without modifying or moving your original project source files.</p>\n        </div>\n      "
    },
    {
      "id": "application-settings",
      "categoryId": "settings",
      "title": "Application Settings",
      "order": 1,
      "summary": "Configuring themes, accent colors, Stardew Valley directories, and update preferences.",
      "keywords": [
        "settings",
        "preferences",
        "themes",
        "accent color",
        "stardew path",
        "mods path"
      ],
      "synonyms": [
        "options",
        "configuration",
        "app settings"
      ],
      "related": [
        "window-modes",
        "automatic-updates",
        "workspace-overview"
      ],
      "content": "\n        <p class=\"article-lead\">Customize your workspace appearance and configure system paths in the Settings view.</p>\n\n        <h2>User Settings Reference</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 25%;\">Setting</th>\n                <th style=\"width: 25%;\">Category</th>\n                <th style=\"width: 50%;\">Description &amp; Effect</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Theme</strong></td>\n                <td>Appearance</td>\n                <td>Choose between <code>Dark</code>, <code>Light</code>, or <code>System</code> theme. Takes effect immediately.</td>\n              </tr>\n              <tr>\n                <td><strong>Accent Color</strong></td>\n                <td>Appearance</td>\n                <td>Select UI accent color (<code>Emerald</code>, <code>Indigo</code>, <code>Amber</code>, <code>Rose</code>, <code>Cyan</code>).</td>\n              </tr>\n              <tr>\n                <td><strong>Window Mode</strong></td>\n                <td>Appearance</td>\n                <td>Select <code>Windowed</code>, <code>Windowed Borderless</code>, or <code>Fullscreen</code>.</td>\n              </tr>\n              <tr>\n                <td><strong>Stardew Path</strong></td>\n                <td>Projects</td>\n                <td>Directory path to your Stardew Valley game executable.</td>\n              </tr>\n              <tr>\n                <td><strong>Mods Path</strong></td>\n                <td>Projects</td>\n                <td>Directory path to your game's <code>Mods</code> folder used for deployment.</td>\n              </tr>\n              <tr>\n                <td><strong>Check on Startup</strong></td>\n                <td>Updates</td>\n                <td>When enabled, SA:GE checks for new updates in the background on launch.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      "
    },
    {
      "id": "window-modes",
      "categoryId": "settings",
      "title": "Window Modes & Display",
      "order": 2,
      "summary": "Switching between Windowed, Windowed Borderless, and Fullscreen modes.",
      "keywords": [
        "window modes",
        "borderless",
        "fullscreen",
        "f11",
        "windowed",
        "display"
      ],
      "synonyms": [
        "screen modes",
        "maximize",
        "full screen"
      ],
      "related": [
        "application-settings",
        "workspace-overview"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE supports three versatile display modes to fit single or multi-monitor modding setups.</p>\n\n        <h2>Available Modes</h2>\n        <ul>\n          <li><strong>Windowed:</strong> Standard resizable desktop window with native OS borders.</li>\n          <li><strong>Windowed Borderless:</strong> Modern frameless window mode. You can drag the window from any header space, maximize to fill the monitor, and minimize cleanly.</li>\n          <li><strong>Fullscreen (<kbd>F11</kbd>):</strong> Maximizes the workspace to fill the entire monitor for an immersive, distraction-free editing environment. Press <kbd>F11</kbd> to toggle.</li>\n        </ul>\n      "
    },
    {
      "id": "automatic-updates",
      "categoryId": "updates-help",
      "title": "Automatic Update System",
      "order": 1,
      "summary": "How background update checking, SHA-256 integrity verification, and safe updates work.",
      "keywords": [
        "updates",
        "auto update",
        "update manager",
        "sha256",
        "uac",
        "offline first"
      ],
      "synonyms": [
        "updater",
        "new version",
        "upgrade"
      ],
      "related": [
        "built-in-guide",
        "application-settings",
        "troubleshooting"
      ],
      "content": "\n        <p class=\"article-lead\">SA:GE includes a safe, non-intrusive automatic update system that keeps your application up to date without interrupting your workflow.</p>\n\n        <h2>Offline-First Behavior</h2>\n        <ul>\n          <li>Update checks run quietly in the background without blocking application startup.</li>\n          <li>If you are offline or working without internet access, SA:GE starts instantly without errors.</li>\n        </ul>\n\n        <h2>Safe Update Process</h2>\n        <ol>\n          <li>When an update is found, an update notification dialog displays release notes and version highlights.</li>\n          <li>Clicking <strong>Update Now</strong> downloads the new release into a temporary staging area.</li>\n          <li>SA:GE verifies the package's <strong>SHA-256 cryptographic checksum</strong> to guarantee download integrity.</li>\n          <li>The application cleanly swaps the binaries and restarts seamlessly.</li>\n        </ol>\n\n        <div class=\"callout callout-note\">\n          <div class=\"callout-title\">ℹ️ Windows Protected Directories (UAC)</div>\n          <p>If SA:GE is installed in a protected location (such as <code>Program Files</code>), Windows will prompt for elevation (UAC) only during the update replacement step. SA:GE itself never requires administrator privileges during normal editing.</p>\n        </div>\n      "
    },
    {
      "id": "built-in-guide",
      "categoryId": "updates-help",
      "title": "Using the Built-in Guide",
      "order": 2,
      "summary": "Accessing documentation directly inside the application with categorized search.",
      "keywords": [
        "built-in guide",
        "help",
        "f1",
        "documentation",
        "in-app guide",
        "search"
      ],
      "synonyms": [
        "manual",
        "docs",
        "help system"
      ],
      "related": [
        "automatic-updates",
        "workspace-overview"
      ],
      "content": "\n        <p class=\"article-lead\">Access comprehensive modding documentation without leaving the desktop application.</p>\n\n        <h2>Features</h2>\n        <ul>\n          <li><strong>Keyboard Shortcut (<kbd>F1</kbd>):</strong> Press <kbd>F1</kbd> from anywhere in the application to open the Guide.</li>\n          <li><strong>Weighted Search:</strong> Type search terms (e.g. <em>warp</em>, <em>NPC spawn</em>, <em>Smart Tiles</em>, <em>edibility</em>) to find matching articles instantly.</li>\n          <li><strong>Categorized Browsing:</strong> Browse topics organized by feature area with breadcrumb navigation and related article links.</li>\n        </ul>\n      "
    },
    {
      "id": "troubleshooting",
      "categoryId": "troubleshooting-faq",
      "title": "Troubleshooting & Solutions",
      "order": 1,
      "summary": "Diagnosing and fixing common validation errors, missing textures, and deployment questions.",
      "keywords": [
        "troubleshooting",
        "errors",
        "fixes",
        "validation failed",
        "missing texture",
        "duplicate id",
        "deployment error"
      ],
      "synonyms": [
        "bug fixes",
        "problem solving",
        "diagnostics"
      ],
      "related": [
        "frequently-asked-questions",
        "project-validation",
        "mod-deployment"
      ],
      "content": "\n        <p class=\"article-lead\">Quick solutions for common mod authoring, validation, and deployment issues.</p>\n\n        <h2>Common Issues &amp; Solutions</h2>\n\n        <h3>1. Validation Error: Missing Texture Asset</h3>\n        <p><strong>Symptom:</strong> Validation reports <em>\"Texture asset file does not exist: assets/Items/my_item.png\"</em>.</p>\n        <p><strong>Solution:</strong> Verify that the PNG image is located inside your project's <code>assets/Items/</code> folder. Re-select the image in the Item Editor and press <kbd>Ctrl+S</kbd>.</p>\n\n        <h3>2. Validation Error: Duplicate Item ID or Character ID</h3>\n        <p><strong>Symptom:</strong> Validation reports <em>\"Duplicate item ID detected\"</em>.</p>\n        <p><strong>Solution:</strong> Each item and character in a project must have a unique identifier. Rename the duplicate entity in the editor and save.</p>\n\n        <h3>3. Deployment Error: Stardew Valley Mods Folder Not Found</h3>\n        <p><strong>Symptom:</strong> Deployment fails with <em>\"Mods directory could not be located\"</em>.</p>\n        <p><strong>Solution:</strong> Open <strong>Settings ➔ Projects</strong> and manually browse to your game's <code>Mods</code> folder (e.g. <code>C:\\Program Files (x86)\\Steam\\steamapps\\common\\Stardew Valley\\Mods</code>).</p>\n\n        <h3>4. Content Patcher Does Not Load the Deployed Mod</h3>\n        <p><strong>Symptom:</strong> The mod folder exists in <code>Mods</code>, but SMAPI does not load it.</p>\n        <p><strong>Solution:</strong> Ensure SMAPI 4.0+ and Content Patcher are installed. Check the SMAPI console for specific errors, and re-run SA:GE Project Validation (<kbd>F6</kbd>) to confirm your <code>manifest.json</code> is valid.</p>\n      "
    },
    {
      "id": "frequently-asked-questions",
      "categoryId": "troubleshooting-faq",
      "title": "Frequently Asked Questions (FAQ)",
      "order": 2,
      "summary": "Answers to frequently asked questions about SA:GE V3 capabilities, mod compatibility, workflows, and installation safety.",
      "keywords": [
        "faq",
        "questions",
        "frequently asked questions",
        "stardew modding faq",
        "offline",
        "coding",
        "maps",
        "characters",
        "events"
      ],
      "synonyms": [
        "common questions",
        "answers",
        "help faq"
      ],
      "related": [
        "troubleshooting",
        "what-is-sage",
        "installing-sage"
      ],
      "content": "\n        <p class=\"article-lead\">Clear answers to common questions about SA:GE features, project workflows, compatibility, and safety.</p>\n\n        <h2>General Questions</h2>\n\n        <h3>What is SA:GE?</h3>\n        <p><strong>SA:GE (Stardew Authoring : Game Editor)</strong> is an end-to-end visual mod development workspace for Stardew Valley. It unifies visual map editing, custom item creation, NPC villager authoring, cutscene event scripting, interactive tile actions, localization, and SMAPI testing into a single desktop application.</p>\n\n        <h3>What can I create with SA:GE?</h3>\n        <p>With SA:GE you can create:</p>\n        <ul>\n          <li><strong>Custom Maps:</strong> Design new exterior locations, farm types, interiors, and caves with multi-layer editing, auto-tiling Smart Tiles, and batch tile replacement.</li>\n          <li><strong>Custom Characters (NPCs):</strong> Design full villagers with custom emotion portraits, walking sprite sheets, daily schedules, dialogue trees, and gift preferences.</li>\n          <li><strong>Custom Items:</strong> Author objects, food, crops, and materials with custom categories, sell prices, edibility, context tags, and 16×16 pixel art sprites.</li>\n          <li><strong>Cutscenes &amp; Heart Events:</strong> Script cinematic sequences in the Event Studio with visual timelines, dialogue boxes with emotion portraits, and branch conditions.</li>\n          <li><strong>Interactive Triggers &amp; Warps:</strong> Build step-on warps, door transitions across 7 warp schemas, shop menus, and tile actions with schema validation.</li>\n          <li><strong>Multi-Language Translations:</strong> Localize your mod using side-by-side translation tables with Content Patcher <code>{{i18n:...}}</code> tokens.</li>\n        </ul>\n\n        <h3>Do I need to know how to code?</h3>\n        <p>No. SA:GE requires zero C# knowledge or programming experience. The application is completely visual and automatically generates standard Content Patcher JSON (<code>content.json</code>), SMAPI manifests (<code>manifest.json</code>), translation files (<code>i18n/</code>), and TMX maps.</p>\n\n        <h3>Where are my projects stored?</h3>\n        <p>Your projects are stored in standard folders of your choice on your local hard drive (for example, in your <code>Documents</code> folder). SA:GE keeps your development source files, assets, and project configurations completely separate from game installations and deployed mod builds.</p>\n\n        <h3>Does SA:GE modify my Stardew installation?</h3>\n        <p>No. SA:GE never modifies your base Stardew Valley game files or game executable. When you deploy or test your mod, SA:GE creates or updates an isolated subfolder inside your game's <code>Mods</code> directory (e.g. <code>Mods/[CP] YourModName</code>). Content Patcher loads this folder dynamically, and you can disable or delete the mod at any time without affecting your vanilla game.</p>\n\n        <h3>Can I use existing maps?</h3>\n        <p>Yes. SA:GE natively opens and edits standard TMX map files. You can import existing maps from your project's <code>assets/Maps/</code> or <code>Maps/</code> directory, edit layers, warps, and tile properties, and save them back cleanly.</p>\n\n        <h3>Can I edit characters and events?</h3>\n        <p>Yes. The Character Editor lets you design full NPC villagers with portraits, walking sprite sheets, daily schedules, dialogue, and gift tastes. The Event Studio allows you to visually script cutscene sequences, character speech with emotion portraits, camera panning, and player choice branching.</p>\n\n        <h3>Does SA:GE work offline?</h3>\n        <p>Yes. SA:GE is 100% offline-first. It launches instantly without an internet connection, requires no login or user account, and includes zero telemetry, zero analytics, and zero tracking. Internet access is only used if you check for updates.</p>\n\n        <h3>How do updates work?</h3>\n        <p>SA:GE includes a safe, quiet background update checker. When a new version is released, an update notification displays release highlights. If you choose to update, the new package is downloaded and cryptographically verified using an SHA-256 checksum before replacing binaries. Your project files and settings are always completely preserved.</p>\n      "
    }
  ]
};

// Support browser and Node/testing environments
if (typeof window !== "undefined") {
  window.SAGE_GUIDE_DATA = SAGE_GUIDE_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = SAGE_GUIDE_DATA;
}
