/**
 * ============================================================================
 * SA:GE (Stardew Authoring : Game Editor) — Guide Documentation Database
 * ============================================================================
 * Contains complete structured articles, categories, and natural search indices.
 */

const SAGE_GUIDE_DATA = {
  categories: [
    {
      id: "getting-started",
      name: "Getting Started",
      icon: "🚀",
      description: "Learn the fundamentals of SA:GE, installation, and project creation."
    },
    {
      id: "map-editor",
      name: "Map Editor",
      icon: "🗺️",
      description: "Complete guide to visual tile painting, layer systems, warps, and NPC spawns."
    },
    {
      id: "playtesting",
      name: "Playtesting",
      icon: "🧪",
      description: "Testing and debugging custom maps in Stardew Valley with SMAPI."
    },
    {
      id: "troubleshooting",
      name: "Troubleshooting",
      icon: "⚠️",
      description: "Diagnosing and fixing common map loading, tileset, and spawn errors."
    }
  ],

  articles: [
    // ------------------------------------------------------------------------
    // 1. Getting Started
    // ------------------------------------------------------------------------
    {
      id: "what-is-sage",
      categoryId: "getting-started",
      title: "What is SA:GE?",
      order: 1,
      summary: "An introduction to SA:GE, its purpose, architecture, and visual workflow for Stardew Valley.",
      keywords: ["intro", "overview", "what is sage", "about", "philosophy", "features", "stardew modding"],
      synonyms: ["introduction", "basics", "purpose", "concept", "faq"],
      related: ["installing-sage", "creating-a-project", "map-editor-overview"],
      content: `
        <p class="article-lead"><strong>SA:GE (Stardew Authoring : Game Editor)</strong> is a specialized desktop application built from the ground up for creating, modifying, and packaging mods and maps for <em>Stardew Valley</em>.</p>
        
        <div class="callout callout-tip">
          <div class="callout-title">💡 Core Philosophy</div>
          <p>“Tiled is the inspiration. Stardew Valley is the specification.” SA:GE presents modding through intuitive Stardew-native concepts (Warps, NPC Spawns, Passable flags, Seasonal Tilesheets) while maintaining 100% standard TMX interchange compatibility.</p>
        </div>

        <h2>Why SA:GE Exists</h2>
        <p>Historically, Stardew Valley map modding required generic third-party tile tools like Tiled, combined with manual text editing of Content Patcher <code>content.json</code> files, manual XNB texture extractions, and memorizing cryptic property strings like <code>Action Warp 12 54 Town</code>.</p>
        <p>SA:GE unifies this entire workflow into a cohesive visual authoring suite:</p>
        <ul>
          <li><strong>Visual First:</strong> Configure warps, NPCs, water tiles, and lighting using visual point-and-click inspectors.</li>
          <li><strong>Content Patcher Ready:</strong> Projects are automatically structured as valid Content Patcher mods ready for immediate in-game loading.</li>
          <li><strong>Safe Synchronization:</strong> Non-destructive TMX serialization preserves custom properties, XML structures, and third-party mod metadata.</li>
        </ul>
      `
    },
    {
      id: "installing-sage",
      categoryId: "getting-started",
      title: "Installing SA:GE",
      order: 2,
      summary: "System requirements, downloading the application, and running SA:GE on Windows.",
      keywords: ["install", "setup", "download", "requirements", "dotnet", "windows", "prerequisites"],
      synonyms: ["how to install", "run sage", "executable", "getting started"],
      related: ["what-is-sage", "creating-a-project"],
      content: `
        <p class="article-lead">SA:GE is distributed as a standalone desktop application for 64-bit Windows systems.</p>

        <h2>System Requirements</h2>
        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operating System</td>
                <td>Windows 10 or Windows 11 (64-bit)</td>
              </tr>
              <tr>
                <td>Runtime</td>
                <td>Microsoft .NET Desktop Runtime 8.0 (x64)</td>
              </tr>
              <tr>
                <td>Stardew Valley</td>
                <td>Version 1.6+ (Steam or GOG edition)</td>
              </tr>
              <tr>
                <td>Mod Loader</td>
                <td>SMAPI 4.0+ (Required for playtesting)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Installation Steps</h2>
        <ol>
          <li>Navigate to the <a href="download.html">Download Page</a> and download the latest release ZIP or Installer.</li>
          <li>Extract the archive to your preferred location (e.g. <code>C:\\Tools\\SAGE</code>) or run the setup wizard.</li>
          <li>Launch <code>SA:GE.exe</code>. Upon first launch, SA:GE automatically attempts to detect your Stardew Valley game directory via the Steam registry.</li>
        </ol>

        <div class="callout callout-note">
          <div class="callout-title">ℹ️ Manual Game Path Selection</div>
          <p>If your game is installed in a custom directory or GOG library, open <strong>Settings</strong> (<kbd>Ctrl+,</kbd>) and choose your Stardew Valley folder manually.</p>
        </div>
      `
    },
    {
      id: "creating-a-project",
      categoryId: "getting-started",
      title: "Creating a Project",
      order: 3,
      summary: "How to initialize a new Content Patcher mod project with automated manifest generation.",
      keywords: ["new project", "create project", "mod creation", "manifest.json", "wizard", "init"],
      synonyms: ["start mod", "new mod", "project wizard"],
      related: ["opening-a-project", "understanding-projects", "map-editor-overview"],
      content: `
        <p class="article-lead">Every map created in SA:GE resides inside a standard Content Patcher mod project structure.</p>

        <h2>New Project Wizard</h2>
        <ol>
          <li>On the SA:GE launcher home screen, click <strong>Create New Project</strong>.</li>
          <li>Enter your <strong>Mod Name</strong> (e.g. <em>Hidden Spring Grove</em>).</li>
          <li>Enter a unique <strong>Mod Unique ID</strong> in reverse domain notation (e.g. <code>AuthorName.HiddenSpringGrove</code>).</li>
          <li>Specify the Author Name, Version (<code>1.0.0</code>), and an optional description.</li>
          <li>Select a destination folder. SA:GE creates the project directory containing <code>manifest.json</code>, <code>content.json</code>, and an <code>assets/</code> folder.</li>
        </ol>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Mod Location Tip</div>
          <p>You can create projects directly inside your Stardew Valley <code>Mods/</code> folder to instantly test changes in-game with SMAPI without manual copying.</p>
        </div>
      `
    },
    {
      id: "opening-a-project",
      categoryId: "getting-started",
      title: "Opening a Project",
      order: 4,
      summary: "Opening existing Content Patcher mods, recent projects list, and asset scanning.",
      keywords: ["open project", "recent projects", "load mod", "browse", "existing project"],
      synonyms: ["open mod", "load map", "resume work"],
      related: ["creating-a-project", "understanding-projects"],
      content: `
        <p class="article-lead">You can open any existing SA:GE project or compatible Content Patcher mod folder at any time.</p>

        <h2>Ways to Open a Project</h2>
        <ul>
          <li><strong>Recent Projects List:</strong> Click any project from the launcher's recent list for instant loading.</li>
          <li><strong>Open Project Folder:</strong> Click <strong>Open Existing Project</strong> (<kbd>Ctrl+O</kbd>) and select any directory containing a <code>manifest.json</code> file.</li>
          <li><strong>File Menu:</strong> When inside an active workspace, use <code>File → Open Project...</code> to switch workspaces.</li>
        </ul>

        <p>When opening a project, SA:GE validates all referenced tilesheets, synchronizes TMX files, and verifies Content Patcher definitions automatically.</p>
      `
    },
    {
      id: "understanding-projects",
      categoryId: "getting-started",
      title: "Understanding Projects",
      order: 5,
      summary: "Folder structure, locked asset paths, manifest.json, and content.json generation.",
      keywords: ["project structure", "folder layout", "locked paths", "content.json", "manifest.json", "assets"],
      synonyms: ["files", "directory layout", "mod structure", "assets folder"],
      related: ["creating-a-project", "tilesets", "testing-with-smapi"],
      content: `
        <p class="article-lead">SA:GE enforces a clean, predictable project structure designed to guarantee 100% compatibility across Content Patcher, SMAPI, and standard TMX parsers.</p>

        <h2>Standard Project File Layout</h2>
        <pre><code>&lt;ModFolder&gt;/
├── manifest.json                  # SMAPI mod metadata
├── content.json                   # Content Patcher load/edit rules
└── assets/
    ├── spawns.json                # NPC runtime spawn data
    └── Maps/
        ├── MyCustomMap.tmx        # Visual map file
        ├── Tilesets PNG/          # 16x16 PNG tilesheets
        │   ├── spring_outdoorsTileSheet.png
        │   ├── summer_outdoorsTileSheet.png
        │   ├── fall_outdoorsTileSheet.png
        │   ├── winter_outdoorsTileSheet.png
        │   └── paths.png
        └── Tilesets TSX/          # TSX tileset definitions
            └── paths.tsx</code></pre>

        <div class="callout callout-important">
          <div class="callout-title">⚠️ Relative Path Rules</div>
          <p>SA:GE maps strictly reference tilesheets relative to <code>assets/Maps/</code> without <code>../</code> traversal prefixes. This prevents runtime path resolution crashes in Content Patcher on macOS, Linux, and Windows.</p>
        </div>
      `
    },

    // ------------------------------------------------------------------------
    // 2. Map Editor
    // ------------------------------------------------------------------------
    {
      id: "map-editor-overview",
      categoryId: "map-editor",
      title: "Map Editor Overview",
      order: 1,
      summary: "Workspace layout, toolbars, palettes, canvas viewport, and inspector panels.",
      keywords: ["map editor", "workspace", "layout", "toolbar", "palette", "canvas", "inspector", "ui"],
      synonyms: ["interface", "editor layout", "panels", "overview"],
      related: ["tile-editing", "layers", "tilesets", "warps"],
      content: `
        <p class="article-lead">The SA:GE Map Editor provides a comprehensive visual workspace for crafting 16×16 tile maps for Stardew Valley.</p>

        <h2>Four Primary Workspace Zones</h2>
        <ul>
          <li><strong>1. Top Toolbar:</strong> File actions (Save, Undo, Redo), drawing tools (Brush, Box Fill, Bucket, Eraser, Eyedropper), visual overlay toggles (Warps, NPCs, Grid), Zoom dropdown, and the SMAPI Playtest launcher.</li>
          <li><strong>2. Left Sidebar (Tileset Palette):</strong> Switch active tilesheets, select single tiles or multi-tile rectangular stamps, and zoom palette textures.</li>
          <li><strong>3. Central Canvas:</strong> Interactive hardware-accelerated tile painting viewport with live coordinate readouts and overlay visualizers.</li>
          <li><strong>4. Right Sidebar (Layers & Properties):</strong> Manage map layers, configure Map Properties, edit Tile Attributes & Actions, and inspect NPC spawns.</li>
        </ul>
      `
    },
    {
      id: "tilesets",
      categoryId: "map-editor",
      title: "Tilesets",
      order: 2,
      summary: "Managing tilesheets, vanilla XNB extraction, 4-season dynamic textures, and TSX files.",
      keywords: ["tileset", "tilesheet", "textures", "xnb extraction", "seasonal", "spring", "summer", "fall", "winter", "tsx"],
      synonyms: ["spritesheet", "tiles", "palette", "winter tiles", "seasonal tilesets", "asset"],
      related: ["map-editor-overview", "layers", "tile-editing", "tileset-problems"],
      content: `
        <p class="article-lead">Tilesets provide the visual textures for your map. SA:GE handles tilesheet management, vanilla game extraction, and dynamic seasonal swapping automatically.</p>

        <h2>Seasonal Tilesheet Swapping</h2>
        <p>In Stardew Valley, outdoor maps automatically swap tilesheet textures based on the in-game season:</p>
        <p><code>spring_outdoorsTileSheet</code> → <code>summer_outdoorsTileSheet</code> → <code>fall_outdoorsTileSheet</code> → <code>winter_outdoorsTileSheet</code></p>

        <div class="callout callout-tip">
          <div class="callout-title">💡 4-Season Protection</div>
          <p>Whenever you add a seasonal tilesheet to a map, SA:GE automatically extracts all 4 seasonal variants to <code>assets/Maps/Tilesets PNG/</code> to prevent crashes during in-game season transitions.</p>
        </div>

        <h2>Automatic XNB Extraction</h2>
        <p>SA:GE includes a built-in XNB texture extractor. When you add a vanilla tilesheet (such as <code>townInterior</code>, <code>paths</code>, or <code>spring_beach</code>), SA:GE extracts the raw texture from your game installation and formats it as an optimized PNG.</p>
      `
    },
    {
      id: "layers",
      categoryId: "map-editor",
      title: "Layers",
      order: 3,
      summary: "Stardew Valley layer hierarchy (Back, Buildings, Paths, Front, AlwaysFront) and depth sorting.",
      keywords: ["layers", "back", "buildings", "paths", "front", "alwaysfront", "depth sorting", "collision", "z-index"],
      synonyms: ["layer stack", "tile layers", "order", "draw priority"],
      related: ["map-editor-overview", "tile-editing", "tile-attributes"],
      content: `
        <p class="article-lead">Stardew Valley relies on an established 5-layer hierarchy to manage draw order, character collision, and gameplay triggers.</p>

        <h2>Standard Stardew Valley Layers</h2>
        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Role & In-Game Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Back</strong></td>
                <td>Ground layer (grass, dirt, floors, water). Rendered beneath the player. Passable by default.</td>
              </tr>
              <tr>
                <td><strong>Buildings</strong></td>
                <td>Physical structures, walls, fences, counters. Drawn behind the farmer. Solid / blocks player movement by default.</td>
              </tr>
              <tr>
                <td><strong>Paths</strong></td>
                <td>Invisible logic layer. Used for tree spawners, sconce lighting, debris markers, and NPC waypoints. Never rendered in-game.</td>
              </tr>
              <tr>
                <td><strong>Front</strong></td>
                <td>Foreground scenery (roofs, tree canopies, archways). Rendered in front of the player with Y-sorting depth.</td>
              </tr>
              <tr>
                <td><strong>AlwaysFront</strong></td>
                <td>Overhead atmosphere, weather covers, and cave ceilings. Always drawn on top of the entire screen.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-note">
          <div class="callout-title">ℹ️ Layer Locking</div>
          <p>Click the 🔒 icon next to any layer in the Layers list to lock it, preventing accidental painting or erasing on that layer.</p>
        </div>
      `
    },
    {
      id: "tile-editing",
      categoryId: "map-editor",
      title: "Tile Editing",
      order: 4,
      summary: "Brush, Box Fill, Bucket, Eraser, Eyedropper, marquee selection, and clipboard tools.",
      keywords: ["tile editing", "brush", "box fill", "bucket", "eraser", "eyedropper", "select", "copy", "paste", "clipboard"],
      synonyms: ["draw", "paint", "fill", "marquee", "cut", "shortcuts"],
      related: ["map-editor-overview", "layers", "tile-attributes"],
      content: `
        <p class="article-lead">SA:GE provides intuitive drawing tools designed for rapid map construction.</p>

        <h2>Editing Tools & Keyboard Shortcuts</h2>
        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Tool</th>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Brush</strong></td>
                <td><kbd>B</kbd></td>
                <td>Paints single tiles or multi-tile rectangular stamps. Click or drag to paint continuously.</td>
              </tr>
              <tr>
                <td><strong>Box Fill</strong></td>
                <td><kbd>U</kbd></td>
                <td>Click and drag across a rectangular region to fill the entire area with the selected tile.</td>
              </tr>
              <tr>
                <td><strong>Bucket</strong></td>
                <td><kbd>G</kbd></td>
                <td>Flood-fills contiguous matching tiles on the active layer with the selected tile.</td>
              </tr>
              <tr>
                <td><strong>Eraser</strong></td>
                <td><kbd>E</kbd></td>
                <td>Clears tiles on the active layer to empty (transparent).</td>
              </tr>
              <tr>
                <td><strong>Eyedropper</strong></td>
                <td><kbd>I</kbd></td>
                <td>Samples tile ID from canvas, selects it in the palette, and loads its tile properties.</td>
              </tr>
              <tr>
                <td><strong>Marquee Select</strong></td>
                <td><kbd>S</kbd></td>
                <td>Select rectangular tile blocks to Copy (<kbd>Ctrl+C</kbd>), Cut (<kbd>Ctrl+X</kbd>), or Clear (<kbd>Del</kbd>).</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "map-properties",
      categoryId: "map-editor",
      title: "Map Properties",
      order: 5,
      summary: "Configuring ambient lighting, background music, outdoors flag, weather, and custom metadata.",
      keywords: ["map properties", "outdoors", "music", "ambientlight", "weather", "defaultposition", "viewport"],
      synonyms: ["settings", "lighting", "ambient", "properties tab", "audio"],
      related: ["tile-attributes", "warps", "map-editor-overview"],
      content: `
        <p class="article-lead">Map Properties control environment settings, lighting rules, background audio, and world behavior.</p>

        <h2>Common Map Properties</h2>
        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Value Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>Outdoors</code></td>
                <td><code>T</code> / <code>F</code></td>
                <td>When <code>T</code>, enables seasonal tileset swapping, day/night lighting cycles, and weather.</td>
              </tr>
              <tr>
                <td><code>Music</code></td>
                <td>Song ID string</td>
                <td>Background music track to play (e.g. <code>spring_day_ambient</code>, <code>woodsTheme</code>).</td>
              </tr>
              <tr>
                <td><code>AmbientLight</code></td>
                <td><code>R G B A</code></td>
                <td>Base ambient lighting color (e.g. <code>255 255 255</code> for bright indoor illumination).</td>
              </tr>
              <tr>
                <td><code>DefaultPosition</code></td>
                <td><code>X Y</code></td>
                <td>Fallback spawn coordinates if a warp does not specify exact target coordinates.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "tile-attributes",
      categoryId: "map-editor",
      title: "Tile Attributes",
      order: 6,
      summary: "Passable collision flags, Water tiles, Diggable soil, Action, and TouchAction triggers.",
      keywords: ["tile attributes", "passable", "water", "diggable", "action", "touchaction", "properties", "collision"],
      synonyms: ["solid tile", "walkable", "tile properties", "inspect tile"],
      related: ["tile-editing", "layers", "warps"],
      content: `
        <p class="article-lead">Tile Attributes dictate gameplay interactions for specific tiles: collision, fishing, tilling, and interaction triggers.</p>

        <h2>Standard Tile Attributes</h2>
        <ul>
          <li><strong>Passable:</strong> Set to <code>F</code> on the <em>Back</em> layer to make ground impassable (solid obstacle), or set to <code>T</code> on <em>Buildings</em> to allow the player to walk through a doorway.</li>
          <li><strong>Water:</strong> Set to <code>T</code> to enable water ripple animations, fishing, and watering can refilling.</li>
          <li><strong>Diggable:</strong> Set to <code>T</code> to allow the player to till the tile with a hoe.</li>
          <li><strong>Action:</strong> Triggered when the player faces the tile and presses the action key (e.g. <code>Action Door</code> or <code>Action Message "Sign text"</code>).</li>
          <li><strong>TouchAction:</strong> Triggered instantly when the player steps onto the tile.</li>
        </ul>
      `
    },
    {
      id: "warps",
      categoryId: "map-editor",
      title: "Warps",
      order: 7,
      summary: "Step-on transitions, map linking, warp visualizers, and destination coordinates.",
      keywords: ["warps", "teleport", "transition", "travel", "warp visualizer", "map linking", "destination coordinates"],
      synonyms: ["how do i teleport the player", "teleport", "portal", "exit", "door warp", "entrance", "move player"],
      related: ["map-properties", "npc-spawns", "testing-with-smapi"],
      content: `
        <p class="article-lead">Warps seamlessly transition the player from one map to another when walking onto a tile.</p>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Visual Warp Tool</div>
          <p>In SA:GE, you do not need to manually format string coordinates. Select the <strong>Warp Tool</strong> on the toolbar, click any tile, and choose your destination map and (X, Y) coordinates visually.</p>
        </div>

        <h2>How Warps Work in Stardew Valley</h2>
        <p>Under the hood, warps are stored in the Map Property <code>Warp</code> as space-delimited quadruplets:</p>
        <pre><code>Warp = SourceX SourceY TargetMap TargetX TargetY [SourceX2 SourceY2 TargetMap2 TargetX2 TargetY2...]</code></pre>
        <p>Example: <code>12 30 Town 45 10</code> warps the farmer from tile (12, 30) on the current map to tile (45, 10) in <code>Town.tmx</code>.</p>

        <h2>Warp Overlay Visualizer</h2>
        <p>Click <strong>🌀 Warps</strong> on the top toolbar to toggle the purple warp overlay. Every warp source tile is highlighted on the canvas with destination labels (e.g. <code>➔ Farm (64, 15)</code>).</p>
      `
    },
    {
      id: "objects",
      categoryId: "map-editor",
      title: "Objects",
      order: 8,
      summary: "TMX object groups, bounding boxes, spawn zones, and custom metadata.",
      keywords: ["objects", "tmx objects", "objectgroup", "bounding box", "spawners", "rectangles"],
      synonyms: ["object layer", "collision boxes", "zones"],
      related: ["map-editor-overview", "npc-spawns", "warps"],
      content: `
        <p class="article-lead">TMX Object Groups allow placing geometric zones, custom collision rectangles, and dynamic trigger boxes on your map.</p>

        <h2>Using the Object Inspector</h2>
        <ol>
          <li>Switch to the <strong>Objects</strong> tool on the top toolbar or select the <code>📦 Objects</code> tab in the right sidebar.</li>
          <li>Click and drag on the map canvas to draw an object bounding box.</li>
          <li>Assign an Object Name (e.g. <code>ForageSpawnArea</code>), Object Type, and custom string/boolean properties.</li>
        </ol>
        <p>SA:GE preserves all standard TMX object group XML definitions non-destructively.</p>
      `
    },
    {
      id: "npc-spawns",
      categoryId: "map-editor",
      title: "NPC Spawns",
      order: 9,
      summary: "Placing NPC spawn pins, directional facing, and spawns.json synchronization.",
      keywords: ["npc", "npc spawns", "characters", "facing direction", "villagers", "spawns.json"],
      synonyms: ["spawn villager", "npc placement", "place npc", "character position"],
      related: ["npcs-not-appearing", "warps", "testing-with-smapi"],
      content: `
        <p class="article-lead">Place characters and villagers on custom maps with visual spawn pins and facing direction indicators.</p>

        <h2>Adding an NPC Spawn Point</h2>
        <ol>
          <li>Click the <strong>👤 NPC Tool</strong> on the top toolbar.</li>
          <li>Click any tile on the map canvas to place an NPC spawn pin.</li>
          <li>In the Right Sidebar, enter the NPC's internal name (e.g. <code>Robin</code>, <code>Abigail</code>, <code>CustomNPC</code>).</li>
          <li>Select the default <strong>Facing Direction</strong>: <code>Up (0)</code>, <code>Right (1)</code>, <code>Down (2)</code>, or <code>Left (3)</code>.</li>
        </ol>

        <div class="callout callout-note">
          <div class="callout-title">ℹ️ Automatic spawns.json Generation</div>
          <p>When saving (<kbd>Ctrl+S</kbd>), SA:GE automatically generates and updates <code>assets/spawns.json</code> and wires the data into Content Patcher's <code>Data/Locations</code> entry.</p>
        </div>
      `
    },

    // ------------------------------------------------------------------------
    // 3. Playtesting
    // ------------------------------------------------------------------------
    {
      id: "testing-with-smapi",
      categoryId: "playtesting",
      title: "Testing With SMAPI",
      order: 1,
      summary: "Launching Stardew Valley, live SMAPI console logs, and in-game map verification.",
      keywords: ["playtesting", "smapi", "test map", "launch game", "debugging", "console log", "verification"],
      synonyms: ["how to test", "run game", "test mod", "in-game test"],
      related: ["common-problems", "maps-not-loading", "tileset-problems"],
      content: `
        <p class="article-lead">Test your map mods directly from SA:GE with one-click SMAPI integration.</p>

        <h2>One-Click Playtesting</h2>
        <ol>
          <li>Ensure your project resides inside or is linked to your Stardew Valley <code>Mods/</code> folder.</li>
          <li>Click the green <strong>▶ Playtest with SMAPI</strong> button on the top toolbar.</li>
          <li>SA:GE launches <code>StardewModdingAPI.exe</code> in the background.</li>
        </ol>

        <h2>In-Game Debugging Console Commands</h2>
        <p>In the SMAPI console window, use these handy vanilla commands to quickly inspect your map:</p>
        <ul>
          <li><code>debug warp &lt;MapName&gt; &lt;X&gt; &lt;Y&gt;</code> — Instantly warps your farmer to any coordinate on your custom map.</li>
          <li><code>patch summary</code> — Lists all active Content Patcher patches and checks for load warnings.</li>
        </ul>
      `
    },

    // ------------------------------------------------------------------------
    // 4. Troubleshooting
    // ------------------------------------------------------------------------
    {
      id: "common-problems",
      categoryId: "troubleshooting",
      title: "Common Problems",
      order: 1,
      summary: "Quick diagnostic checklist for typical Stardew Valley modding errors.",
      keywords: ["troubleshooting", "problems", "errors", "checklist", "faq", "fixes"],
      synonyms: ["bugs", "issues", "why doesn't it work", "help"],
      related: ["maps-not-loading", "tileset-problems", "npcs-not-appearing"],
      content: `
        <p class="article-lead">If something isn't working as expected in-game, check these common diagnostic items:</p>

        <h2>Quick Diagnostic Checklist</h2>
        <ul>
          <li><strong>SMAPI Red Errors:</strong> Always check the SMAPI console terminal for red error messages.</li>
          <li><strong>Unique Mod ID:</strong> Ensure your <code>manifest.json</code> UniqueID does not conflict with another installed mod.</li>
          <li><strong>Stardew Version:</strong> Ensure you are running Stardew Valley 1.6+ and SMAPI 4.0+.</li>
          <li><strong>Tileset PNG Extensions:</strong> Ensure all tilesheets have explicit <code>.png</code> extensions.</li>
        </ul>
      `
    },
    {
      id: "maps-not-loading",
      categoryId: "troubleshooting",
      title: "Maps Not Loading",
      order: 2,
      summary: "Diagnosing black screens, missing map errors, and Content Patcher load failures.",
      keywords: ["maps not loading", "black screen", "crash on warp", "content patcher error", "missing map"],
      synonyms: ["map won't load", "black map", "freeze", "crash"],
      related: ["common-problems", "understanding-projects", "tileset-problems"],
      content: `
        <p class="article-lead">When a map fails to load or shows a black screen upon warping, the issue is typically caused by a Content Patcher path mismatch or missing base layer.</p>

        <h2>Common Causes & Solutions</h2>
        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Symptom</th>
                <th>Root Cause</th>
                <th>Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Black screen on warp</td>
                <td>Missing <code>Back</code> or <code>Buildings</code> layer</td>
                <td>Every map must contain standard <code>Back</code> and <code>Buildings</code> layers. Add them via the Layers panel.</td>
              </tr>
              <tr>
                <td>Content Patcher: "Target file not found"</td>
                <td>Mismatched map file name in <code>content.json</code></td>
                <td>Re-save the project in SA:GE (<kbd>Ctrl+S</kbd>) to automatically resynchronize <code>content.json</code>.</td>
              </tr>
              <tr>
                <td>Warp loops infinitely</td>
                <td>Warp destination placed on source warp tile</td>
                <td>Ensure target coordinates are at least 1 tile away from the return warp tile.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "tileset-problems",
      categoryId: "troubleshooting",
      title: "Tileset Problems",
      order: 3,
      summary: "Fixing missing texture boxes, winter crash bugs, and unknown file extension errors.",
      keywords: ["tileset problems", "missing textures", "winter crash", "unknown file extension", "pink tiles", "texture error"],
      synonyms: ["winter tiles", "broken tiles", "pink texture", "missing png", "season crash"],
      related: ["tilesets", "avoiding-texture-errors", "common-problems"],
      content: `
        <p class="article-lead">Resolving missing textures, pink checkerboard tiles, and season change crashes.</p>

        <h2>1. Game Crashes When Entering in Winter</h2>
        <p>If an outdoor map references <code>spring_outdoorsTileSheet.png</code> but <code>winter_outdoorsTileSheet.png</code> is missing from <code>assets/Maps/Tilesets PNG/</code>, the game engine crashes upon season transition.</p>
        <p><strong>Fix:</strong> Open your map in SA:GE and press <kbd>Ctrl+S</kbd>. SA:GE automatically extracts all 4 seasonal texture variants.</p>

        <h2>2. Content Patcher: "Unknown file extension"</h2>
        <p>Occurs when a TMX file references a tilesheet without an extension (e.g. <code>source="spring_outdoors"</code>). Content Patcher requires explicit <code>.png</code> suffixes.</p>
        <p><strong>Fix:</strong> SA:GE automatically corrects extensionless tileset sources upon saving.</p>
      `
    },
    {
      id: "npcs-not-appearing",
      categoryId: "troubleshooting",
      title: "NPCs Not Appearing",
      order: 4,
      summary: "Diagnosing missing, displaced, or duplicate NPCs on custom maps.",
      keywords: ["npc not showing", "npc missing", "npcs not appearing", "character invisible", "npc spawn error"],
      synonyms: ["npc not showing", "villager missing", "can't find npc", "npc not spawning", "npc invisible"],
      related: ["npc-spawns", "common-problems", "testing-with-smapi"],
      content: `
        <p class="article-lead">If an NPC placed on your map does not appear in-game, use this guide to identify and resolve the issue.</p>

        <h2>Troubleshooting NPC Spawns</h2>
        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Possible Reason</th>
                <th>Explanation & Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>NPC Schedule Override</strong></td>
                <td>Stardew Valley schedules override static spawn coordinates during active daytime hours. The NPC may be walking their schedule in town. Test at 6:00 AM or check their schedule file.</td>
              </tr>
              <tr>
                <td><strong>Solid Collision Obstacle</strong></td>
                <td>If the NPC spawn coordinate is placed directly on a solid <code>Buildings</code> tile, the game physics engine may fail to spawn the character. Move the spawn pin to an open <code>Back</code> layer tile.</td>
              </tr>
              <tr>
                <td><strong>Spelling / Case Sensitivity</strong></td>
                <td>Internal NPC names are case-sensitive (e.g. <code>Robin</code>, not <code>robin</code>). Verify the exact character name in the NPC properties tab.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
};

if (typeof window !== "undefined") {
  window.SAGE_GUIDE_DATA = SAGE_GUIDE_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = SAGE_GUIDE_DATA;
}
