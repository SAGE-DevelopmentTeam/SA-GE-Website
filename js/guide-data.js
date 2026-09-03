/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — Official V2.0.0 Guide Documentation Database
 * ============================================================================
 * Contains complete structured articles, categories, and natural search indices.
 * Fully verified and aligned with the SA:GE V2.0.0 desktop application codebase.
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
      "id": "character-map-integration",
      "name": "Character & Map Linking",
      "icon": "🔗",
      "description": "NPC spawn placement on maps, home map synchronization, and companion data."
    },
    {
      "id": "map-editor",
      "name": "Visual Map Editor",
      "icon": "🗺️",
      "description": "Map discovery, layer depth sorting, canvas tools, warps, and TMX structure."
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
      "summary": "An introduction to SA:GE, its purpose, and visual modding workflow for Stardew Valley.",
      "keywords": [
        "intro",
        "overview",
        "what is sage",
        "about",
        "features",
        "stardew modding",
        "v2"
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
      "content": "\n        <p class=\"article-lead\"><strong>SA:GE (Stardew Authoring : Game Editor)</strong> is a visual modding application designed to make Stardew Valley mod creation accessible without requiring code or manual JSON file editing.</p>\n        \n        <div class=\"callout callout-tip\">\n          <div class=\"callout-title\">💡 Complete Visual Modding Suite</div>\n          <p>SA:GE V2 provides a cohesive workspace for authoring <strong>Items</strong>, <strong>Characters (NPCs)</strong>, <strong>Maps</strong>, and <strong>Assets</strong>, with built-in <strong>Project Validation</strong> and one-click <strong>Mod Deployment</strong>.</p>\n        </div>\n\n        <h2>Core Capabilities</h2>\n        <ul>\n          <li><strong>Item Editor:</strong> Create custom objects with custom categories, sell prices, edibility, context tags, and PNG textures.</li>\n          <li><strong>Character Editor:</strong> Design custom NPCs complete with portraits, sprite sheets, daily schedules, dialogue trees, gift preferences, and social settings.</li>\n          <li><strong>Visual Map Editor:</strong> Author custom locations and edit map layers, tilesets, warps, and Smart Tile terrain rules.</li>\n          <li><strong>Asset Browser:</strong> Organize your mod's textures, portraits, sprites, and tilesheets with automated project-relative path normalization.</li>\n          <li><strong>Project Validation:</strong> Detect missing textures, map reference errors, and ID conflicts before launching the game.</li>\n          <li><strong>Direct Deployment:</strong> Package and deploy your mod directly to the Stardew Valley <code>Mods</code> directory formatted for Content Patcher.</li>\n        </ul>\n\n        <h2>What SA:GE Does Not Require</h2>\n        <p>SA:GE is designed to be self-contained and friendly for modders of all skill levels:</p>\n        <ul>\n          <li><strong>No Coding Required:</strong> You do not need to write C# or understand programming.</li>\n          <li><strong>No Manual JSON Editing:</strong> SA:GE automatically generates standard <code>manifest.json</code> and <code>content.json</code> files.</li>\n          <li><strong>Self-Contained Runtime:</strong> Distributed as a portable Windows x64 package with the .NET runtime included.</li>\n          <li><strong>Offline-First:</strong> Works completely offline with zero telemetry, zero accounts, and zero cloud tracking.</li>\n        </ul>\n      "
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
      "content": "\n        <p class=\"article-lead\">SA:GE is distributed as a self-contained portable application for 64-bit Windows. No installer or administrative setup is required.</p>\n\n        <h2>System Requirements</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 30%;\">Component</th>\n                <th style=\"width: 40%;\">Specification</th>\n                <th style=\"width: 30%;\">Notes</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Operating System</strong></td>\n                <td>Windows 10 or Windows 11 (64-bit)</td>\n                <td>x64 architecture required</td>\n              </tr>\n              <tr>\n                <td><strong>Runtime</strong></td>\n                <td>Self-Contained (Included in ZIP)</td>\n                <td>No separate .NET installation needed</td>\n              </tr>\n              <tr>\n                <td><strong>Stardew Valley</strong></td>\n                <td>Version 1.6+ (Steam or GOG)</td>\n                <td>Required when testing and deploying mods</td>\n              </tr>\n              <tr>\n                <td><strong>Mod Loader</strong></td>\n                <td>SMAPI 4.0+ &amp; Content Patcher</td>\n                <td>Required for in-game mod execution</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <h2>Installation Steps</h2>\n        <ol>\n          <li>Download the official <code>SA-GE-2.0.0-win-x64.zip</code> from the <a href=\"download.html\">Download Page</a>.</li>\n          <li>Extract the archive into a folder of your choice (for example: <code>C:\\Tools\\SAGE</code> or <code>D:\\Modding\\SAGE</code>).</li>\n          <li>Double-click <code>SA:GE.exe</code> (or <code>SAGE.exe</code>) to launch the application.</li>\n        </ol>\n\n        <div class=\"callout callout-note\">\n          <div class=\"callout-title\">ℹ️ Game Folder Detection</div>\n          <p>On first launch, SA:GE automatically detects standard Steam and GOG Stardew Valley installations. If your game is installed in a custom location, you can set your path in <strong>Settings ➔ Projects</strong>.</p>\n        </div>\n      "
    },
    {
      "id": "workspace-overview",
      "categoryId": "getting-started",
      "title": "Understanding the Workspace",
      "order": 3,
      "summary": "A tour of the Home Dashboard, navigation sidebar, and editor workspaces.",
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
      "content": "\n        <p class=\"article-lead\">SA:GE features a unified single-window interface organized around a central navigation sidebar and a contextual workspace area.</p>\n\n        <h2>Navigation Sidebar</h2>\n        <p>The sidebar on the left lets you quickly switch between major modding systems:</p>\n        <ul>\n          <li><strong>🏠 Home:</strong> Dashboard with project overview, quick actions (New, Open, Validate, Deploy), and recent project history.</li>\n          <li><strong>📦 Items:</strong> Item Editor for creating and configuring custom objects, pricing, edibility, and textures.</li>\n          <li><strong>👥 Characters:</strong> Character Editor for authoring NPCs, portraits, sprites, schedules, dialogue, and gifts.</li>\n          <li><strong>🗺️ Maps:</strong> Visual Map Editor with multi-directory map discovery, layers, tilesets, warps, and Smart Tiles.</li>\n          <li><strong>📁 Assets:</strong> Centralized Asset Browser for organizing textures, portraits, sprites, and tilesheets.</li>\n          <li><strong>📖 User Guide:</strong> Integrated in-app documentation and reference guides.</li>\n          <li><strong>⚙️ Settings:</strong> Preferences for themes, accent colors, window modes, and Stardew Valley directories.</li>\n        </ul>\n\n        <h2>Home Dashboard</h2>\n        <p>When you open a project, the Home screen displays:</p>\n        <ul>\n          <li><strong>Project Summary:</strong> Displays project name, unique ID, version, and author.</li>\n          <li><strong>Content Stats:</strong> Live count of custom items, characters, maps, and assets in the project.</li>\n          <li><strong>Quick Actions:</strong> One-click buttons to <em>Validate Project</em> (<code>F6</code>) and <em>Deploy Mod</em>.</li>\n          <li><strong>System Status:</strong> Displays detected Stardew Valley and Mods folder status.</li>\n        </ul>\n      "
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
      "content": "\n        <p class=\"article-lead\">The Map Editor provides a complete set of precision tools for tile placement and object inspection.</p>\n\n        <h2>Toolbar Tools &amp; Keyboard Shortcuts</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 20%;\">Tool</th>\n                <th style=\"width: 15%;\">Shortcut</th>\n                <th style=\"width: 65%;\">Usage &amp; Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Brush / Pencil</strong></td>\n                <td><kbd>B</kbd></td>\n                <td>Paints single tiles or multi-tile rectangular stamps onto the active layer.</td>\n              </tr>\n              <tr>\n                <td><strong>Box Tool</strong></td>\n                <td><kbd>U</kbd></td>\n                <td>Draws filled rectangles of tiles across an area.</td>\n              </tr>\n              <tr>\n                <td><strong>Bucket Fill</strong></td>\n                <td><kbd>F</kbd></td>\n                <td>Flood-fills contiguous matching tiles with the selected tile.</td>\n              </tr>\n              <tr>\n                <td><strong>Eraser</strong></td>\n                <td><kbd>E</kbd></td>\n                <td>Erases tiles from the active layer.</td>\n              </tr>\n              <tr>\n                <td><strong>Eyedropper</strong></td>\n                <td><kbd>I</kbd></td>\n                <td>Picks the clicked tile from the canvas and selects it in the active tileset.</td>\n              </tr>\n              <tr>\n                <td><strong>Marquee Select</strong></td>\n                <td><kbd>S</kbd></td>\n                <td>Selects rectangular regions of tiles for copying, cutting, or moving.</td>\n              </tr>\n              <tr>\n                <td><strong>Smart Tiles</strong></td>\n                <td><kbd>T</kbd></td>\n                <td>Paints terrain automatically using configured topology rules.</td>\n              </tr>\n              <tr>\n                <td><strong>Warp Tool</strong></td>\n                <td><kbd>W</kbd></td>\n                <td>Places and edits step-on map warps and transition coordinates.</td>\n              </tr>\n              <tr>\n                <td><strong>NPC Spawn Tool</strong></td>\n                <td><kbd>N</kbd></td>\n                <td>Places character spawn pins and configures initial facing directions.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      "
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
      "content": "\n        <p class=\"article-lead\">SA:GE acts as a visual compiler for Content Patcher, automatically synchronizing your project items, NPCs, and maps into clean <code>content.json</code> patch files.</p>\n\n        <h2>Generated Patch Categories</h2>\n        <div class=\"data-table-container\">\n          <table class=\"data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 25%;\">Target</th>\n                <th style=\"width: 25%;\">Action</th>\n                <th style=\"width: 50%;\">Generated Content</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><code>Data/Objects</code></td>\n                <td><code>EditData</code></td>\n                <td>Custom item definitions, pricing, categories, edibility, and texture targets.</td>\n              </tr>\n              <tr>\n                <td><code>Data/Characters</code></td>\n                <td><code>EditData</code></td>\n                <td>NPC identity, appearance traits, home map, and default spawn coordinates.</td>\n              </tr>\n              <tr>\n                <td><code>Data/NPCGiftTastes</code></td>\n                <td><code>EditData</code></td>\n                <td>NPC gift preferences and reaction dialogues for Love, Like, Neutral, Dislike, Hate.</td>\n              </tr>\n              <tr>\n                <td><code>Characters/Dialogue/{Id}</code></td>\n                <td><code>EditData</code></td>\n                <td>Character dialogue lines (Introduction, weekdays, seasons, events).</td>\n              </tr>\n              <tr>\n                <td><code>Characters/schedules/{Id}</code></td>\n                <td><code>EditData</code></td>\n                <td>Character daily routines and waypoint checkpoints.</td>\n              </tr>\n              <tr>\n                <td><code>Portraits/{Id}</code></td>\n                <td><code>Load</code></td>\n                <td>Maps custom portrait PNGs to the game's portrait asset path.</td>\n              </tr>\n              <tr>\n                <td><code>Characters/{Id}</code></td>\n                <td><code>Load</code></td>\n                <td>Maps custom sprite PNGs to the game's character sprite asset path.</td>\n              </tr>\n              <tr>\n                <td><code>Maps/{MapName}</code></td>\n                <td><code>Load</code></td>\n                <td>Loads custom TMX map files into the game's location registry.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      "
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
        "error checking"
      ],
      "synonyms": [
        "diagnostic",
        "project checker",
        "linter"
      ],
      "related": [
        "mod-deployment",
        "troubleshooting",
        "project-structure"
      ],
      "content": "\n        <p class=\"article-lead\">The Project Validation Engine audits your entire project to catch broken textures, missing maps, duplicate IDs, and syntax issues before launching the game.</p>\n\n        <h2>Running Validation</h2>\n        <ul>\n          <li>Click <strong>Validate Project</strong> on the Home dashboard.</li>\n          <li>Choose <strong>File ➔ Validate Project</strong> from the top menu.</li>\n          <li>Press shortcut key <kbd>F6</kbd>.</li>\n        </ul>\n\n        <h2>What Validation Checks</h2>\n        <ul>\n          <li><strong>Manifest Integrity:</strong> Confirms required fields (Name, UniqueID, Author, Version) in <code>manifest.json</code>.</li>\n          <li><strong>Content Patcher Syntax:</strong> Verifies format version and patch action structures.</li>\n          <li><strong>Texture Assets:</strong> Confirms that all referenced item PNGs, character portraits, and sprites exist on disk.</li>\n          <li><strong>Unique Identifiers:</strong> Detects duplicate Item IDs or Character IDs that could conflict.</li>\n          <li><strong>Map &amp; Tileset References:</strong> Checks TMX file existence, referenced TSX tilesets, and valid dimensions.</li>\n          <li><strong>NPC Spawns &amp; Warps:</strong> Validates destination map names, coordinate bounds, and character bindings.</li>\n        </ul>\n      "
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
      "summary": "Answers to frequently asked questions about SA:GE V2 capabilities and workflows.",
      "keywords": [
        "faq",
        "questions",
        "frequently asked questions",
        "stardew modding faq"
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
      "content": "\n        <p class=\"article-lead\">Common questions and answers regarding SA:GE V2 features, mod compatibility, and workflows.</p>\n\n        <h2>General Questions</h2>\n\n        <h3>Do I need to know programming or C# to use SA:GE?</h3>\n        <p>No. SA:GE is entirely visual and generates standard Content Patcher JSON and TMX maps. No coding is required.</p>\n\n        <h3>Do I need Stardew Valley installed just to create mods in SA:GE?</h3>\n        <p>No. You can author Items, Characters, and Maps on any Windows x64 computer without Stardew Valley installed. The game is only required when testing or deploying your mod.</p>\n\n        <h3>Can I create custom NPCs with their own portraits and schedules?</h3>\n        <p>Yes. The Character Editor lets you author complete custom villagers with portraits, walking sprite sheets, daily schedules, dialogue, and gift preferences.</p>\n\n        <h3>Can I place NPC spawn points directly on custom maps?</h3>\n        <p>Yes. The Map Editor's NPC Spawn Tool lets you place character spawn pins on any map tile, automatically syncing the character's home map and starting coordinates.</p>\n\n        <h3>Does SA:GE work offline?</h3>\n        <p>Yes. SA:GE is 100% offline-first. It starts instantly and operates completely without an internet connection.</p>\n\n        <h3>Where are project files stored?</h3>\n        <p>Projects are stored in standard folders on your local hard drive. SA:GE keeps your development source files completely separate from deployed mod builds.</p>\n      "
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
