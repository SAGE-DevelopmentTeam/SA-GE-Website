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
      id: "smart-tiles",
      name: "Smart Tiles",
      icon: "🌿",
      description: "Configuring and painting terrain with the Smart Tile system. New in V1.1.0."
    },
    {
      id: "playtesting",
      name: "Playtesting",
      icon: "🧪",
      description: "Testing and verifying custom maps in Stardew Valley."
    },
    {
      id: "troubleshooting",
      name: "Troubleshooting",
      icon: "⚠️",
      description: "Diagnosing and fixing common map loading, tileset, and spawn questions."
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
      summary: "An introduction to SA:GE, its purpose, and visual workflow for Stardew Valley.",
      keywords: ["intro", "overview", "what is sage", "about", "philosophy", "features", "stardew modding"],
      synonyms: ["introduction", "basics", "purpose", "concept", "faq"],
      related: ["installing-sage", "creating-a-project", "map-editor-overview"],
      content: `
        <p class="article-lead"><strong>SA:GE (Stardew Authoring : Game Editor)</strong> is a Stardew Valley modding tool. It is a visual authoring tool designed to make mod creation more accessible without requiring code. The current release is primarily focused on visual map editing.</p>
        
        <div class="callout callout-tip">
          <div class="callout-title">💡 Map Editor & Smart Tiles</div>
          <p>SA:GE is tailored directly to Stardew Valley map editing, providing dedicated tools for layers, warps, properties, tilesets, and Smart Tiles.</p>
        </div>

        <h2>Why SA:GE Exists</h2>
        <p>Creating and editing Stardew Valley maps can be complex when working directly with raw files. SA:GE provides a visual editor designed around Stardew Valley's map structure.</p>
        <ul>
          <li><strong>Visual Map Editor:</strong> Create and edit maps visually instead of working directly with map files.</li>
          <li><strong>Layers & Tilesets:</strong> Manage map layers, tilesets, and tile attributes with dedicated tools.</li>
          <li><strong>Warps & NPC Spawns:</strong> Place and configure warps, map objects, and NPC spawn locations directly on map tiles.</li>
        </ul>
      `
    },
    {
      id: "installing-sage",
      categoryId: "getting-started",
      title: "Installing SA:GE",
      order: 2,
      summary: "System requirements, downloading the application, and running SA:GE on Windows.",
      keywords: ["install", "setup", "download", "requirements", "windows", "prerequisites"],
      synonyms: ["how to install", "run sage", "executable", "getting started"],
      related: ["what-is-sage", "creating-a-project"],
      content: `
        <p class="article-lead">SA:GE is distributed as a self-contained standalone application for 64-bit Windows.</p>

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
                <td>Self-Contained (Included in Portable ZIP)</td>
              </tr>
              <tr>
                <td>Stardew Valley</td>
                <td>Version 1.6+ (Steam or GOG edition)</td>
              </tr>
              <tr>
                <td>Mod Loader</td>
                <td>SMAPI 4.0+ (Required for in-game playtesting)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Installation Steps</h2>
        <ol>
          <li>Navigate to the <a href="download.html">Download Page</a> and download the official Portable ZIP.</li>
          <li>Extract the archive to your preferred location (e.g. <code>C:\\Tools\\SAGE</code>).</li>
          <li>Launch <code>SA:GE.exe</code> to begin using the editor.</li>
        </ol>

        <div class="callout callout-note">
          <div class="callout-title">ℹ️ Game Path Selection</div>
          <p>If your game is installed in a custom directory, open <strong>Settings</strong> to select your Stardew Valley folder.</p>
        </div>
      `
    },
    {
      id: "creating-a-project",
      categoryId: "getting-started",
      title: "Creating a Project",
      order: 3,
      summary: "How to initialize a new project in SA:GE.",
      keywords: ["new project", "create project", "wizard", "init"],
      synonyms: ["start project", "new map", "project wizard"],
      related: ["opening-a-project", "understanding-projects", "map-editor-overview"],
      content: `
        <p class="article-lead">Projects in SA:GE allow you to organize and manage your custom maps and assets.</p>

        <h2>Creating a New Project</h2>
        <ol>
          <li>On the SA:GE home screen, click <strong>Create New Project</strong>.</li>
          <li>Enter your project details such as name and author.</li>
          <li>Select a destination folder for your project files.</li>
          <li>Click Create to initialize your workspace.</li>
        </ol>
      `
    },
    {
      id: "opening-a-project",
      categoryId: "getting-started",
      title: "Opening a Project",
      order: 4,
      summary: "Opening existing projects and using the recent projects list.",
      keywords: ["open project", "recent projects", "load project", "browse", "existing project"],
      synonyms: ["open map", "load project", "resume work"],
      related: ["creating-a-project", "understanding-projects"],
      content: `
        <p class="article-lead">You can open any existing SA:GE project at any time.</p>

        <h2>Ways to Open a Project</h2>
        <ul>
          <li><strong>Recent Projects List:</strong> Click any project from the home screen recent list for fast loading.</li>
          <li><strong>Open Project Folder:</strong> Click <strong>Open Existing Project</strong> (<kbd>Ctrl+O</kbd>) and select your project directory.</li>
          <li><strong>File Menu:</strong> When inside an active workspace, use <code>File → Open Project...</code> to switch projects.</li>
        </ul>
      `
    },
    {
      id: "understanding-projects",
      categoryId: "getting-started",
      title: "Understanding Projects",
      order: 5,
      summary: "Project structure and file organization in SA:GE.",
      keywords: ["project structure", "folder layout", "files", "assets"],
      synonyms: ["files", "directory layout", "project layout"],
      related: ["creating-a-project", "tilesets", "testing-with-smapi"],
      content: `
        <p class="article-lead">SA:GE organizes your maps and related tileset assets within your project directory.</p>

        <h2>Project Organization</h2>
        <p>A SA:GE project contains your map files along with the tilesets and textures referenced by your maps. Keeping assets organized ensures clean referencing when editing and testing.</p>
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
        <p class="article-lead">The SA:GE Map Editor provides a visual workspace for creating and editing Stardew Valley maps.</p>

        <h2>Workspace Areas</h2>
        <ul>
          <li><strong>Top Toolbar:</strong> File actions (Save, Undo, Redo), drawing tools (Brush, Box Fill, Bucket, Eraser, Eyedropper), visual overlay toggles, and Zoom controls.</li>
          <li><strong>Left Sidebar (Tileset Palette):</strong> Switch active tilesets and select single tiles or multi-tile rectangular regions.</li>
          <li><strong>Central Canvas:</strong> Interactive map viewport for placing and editing tiles.</li>
          <li><strong>Right Sidebar (Layers & Properties):</strong> Manage map layers, configure Map Properties, edit Tile Attributes, and inspect NPC spawn points.</li>
        </ul>
      `
    },
    {
      id: "tilesets",
      categoryId: "map-editor",
      title: "Tilesets",
      order: 2,
      summary: "Managing tilesets and textures used by your maps.",
      keywords: ["tileset", "tilesheet", "textures", "palette", "asset"],
      synonyms: ["spritesheet", "tiles", "palette", "textures"],
      related: ["map-editor-overview", "layers", "tile-editing", "tileset-problems"],
      content: `
        <p class="article-lead">Tilesets provide the visual textures for your map. SA:GE allows you to manage and organize the tilesets used by your maps.</p>

        <h2>Managing Tilesets</h2>
        <p>You can add tilesets to your map project and view them in the left palette sidebar. Selecting tiles from the palette enables you to place them onto the active map layer using the drawing tools.</p>
      `
    },
    {
      id: "layers",
      categoryId: "map-editor",
      title: "Layers",
      order: 3,
      summary: "Stardew Valley layer hierarchy (Back, Buildings, Paths, Front, AlwaysFront) and layer controls.",
      keywords: ["layers", "back", "buildings", "paths", "front", "alwaysfront", "depth sorting", "collision"],
      synonyms: ["layer stack", "tile layers", "order", "draw priority"],
      related: ["map-editor-overview", "tile-editing", "tile-attributes"],
      content: `
        <p class="article-lead">Stardew Valley maps utilize standard layers to manage draw order, character collision, and gameplay elements.</p>

        <h2>Standard Stardew Valley Layers</h2>
        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Role & Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Back</strong></td>
                <td>Ground layer (grass, dirt, floors, water). Rendered beneath characters. Passable by default.</td>
              </tr>
              <tr>
                <td><strong>Buildings</strong></td>
                <td>Structures, walls, fences, counters. Solid / blocks player movement by default.</td>
              </tr>
              <tr>
                <td><strong>Paths</strong></td>
                <td>Logic layer used for markers, spawners, and lighting points.</td>
              </tr>
              <tr>
                <td><strong>Front</strong></td>
                <td>Foreground scenery (roofs, tree canopies). Rendered in front of characters with depth sorting.</td>
              </tr>
              <tr>
                <td><strong>AlwaysFront</strong></td>
                <td>Overhead scenery and ceilings. Drawn on top of all other layers.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-note">
          <div class="callout-title">ℹ️ Layer Visibility & Locking</div>
          <p>You can toggle layer visibility and lock layers in the Layers panel to avoid unintended edits on inactive layers.</p>
        </div>
      `
    },
    {
      id: "tile-editing",
      categoryId: "map-editor",
      title: "Tile Editing",
      order: 4,
      summary: "Brush, Box Fill, Bucket, Eraser, Eyedropper, and selection tools.",
      keywords: ["tile editing", "brush", "box fill", "bucket", "eraser", "eyedropper", "select", "shortcuts"],
      synonyms: ["draw", "paint", "fill", "marquee", "tools"],
      related: ["map-editor-overview", "layers", "tile-attributes"],
      content: `
        <p class="article-lead">SA:GE includes dedicated drawing tools for placing and modifying tiles on your maps.</p>

        <h2>Editing Tools</h2>
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
                <td>Paints single tiles or selected tile stamps onto the active layer.</td>
              </tr>
              <tr>
                <td><strong>Box Fill</strong></td>
                <td><kbd>U</kbd></td>
                <td>Fills a rectangular region with the currently selected tile.</td>
              </tr>
              <tr>
                <td><strong>Bucket</strong></td>
                <td><kbd>G</kbd></td>
                <td>Flood-fills contiguous matching tiles on the active layer.</td>
              </tr>
              <tr>
                <td><strong>Eraser</strong></td>
                <td><kbd>E</kbd></td>
                <td>Erases tiles from the active layer.</td>
              </tr>
              <tr>
                <td><strong>Eyedropper</strong></td>
                <td><kbd>I</kbd></td>
                <td>Samples a tile directly from the canvas to select it in the palette.</td>
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
      summary: "Configuring ambient lighting, background music, outdoors flag, and map properties.",
      keywords: ["map properties", "outdoors", "music", "ambientlight", "weather", "defaultposition"],
      synonyms: ["settings", "lighting", "ambient", "properties tab", "audio"],
      related: ["tile-attributes", "warps", "map-editor-overview"],
      content: `
        <p class="article-lead">Map Properties allow you to configure environment settings, lighting, and audio for your map.</p>

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
                <td>Indicates whether the map is treated as an outdoor location.</td>
              </tr>
              <tr>
                <td><code>Music</code></td>
                <td>Song ID string</td>
                <td>Background music track to play in this location.</td>
              </tr>
              <tr>
                <td><code>AmbientLight</code></td>
                <td><code>R G B A</code></td>
                <td>Base ambient lighting color for the map.</td>
              </tr>
              <tr>
                <td><code>DefaultPosition</code></td>
                <td><code>X Y</code></td>
                <td>Default spawn coordinates for incoming map transitions.</td>
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
        <p class="article-lead">Tile Attributes determine how characters and game mechanics interact with specific tiles.</p>

        <h2>Standard Tile Attributes</h2>
        <ul>
          <li><strong>Passable:</strong> Controls whether the tile allows character movement.</li>
          <li><strong>Water:</strong> Marks the tile as a water body for fishing and watering can refilling.</li>
          <li><strong>Diggable:</strong> Determines whether the tile can be tilled.</li>
          <li><strong>Action:</strong> Interaction triggered when a player faces the tile and presses the action key.</li>
          <li><strong>TouchAction:</strong> Interaction triggered when a player walks onto the tile.</li>
        </ul>
      `
    },
    {
      id: "warps",
      categoryId: "map-editor",
      title: "Warps",
      order: 7,
      summary: "Creating and editing map warps, destination coordinates, and overlay visualizers.",
      keywords: ["warps", "teleport", "transition", "travel", "map linking", "destination coordinates"],
      synonyms: ["how do i teleport the player", "teleport", "portal", "exit", "door warp", "entrance", "move player"],
      related: ["map-properties", "npc-spawns", "testing-with-smapi"],
      content: `
        <p class="article-lead">Warps allow players to transition between maps when walking onto specific tiles.</p>

        <h2>Creating and Editing Warps</h2>
        <p>You can create and edit warps directly in SA:GE. Select a tile to configure its destination map and target coordinates, and use the visual overlay to view configured warps on your map.</p>
      `
    },
    {
      id: "objects",
      categoryId: "map-editor",
      title: "Objects",
      order: 8,
      summary: "Creating and editing map objects, bounding boxes, and properties.",
      keywords: ["objects", "map objects", "objectgroup", "bounding box", "properties"],
      synonyms: ["object layer", "collision boxes", "zones"],
      related: ["map-editor-overview", "npc-spawns", "warps"],
      content: `
        <p class="article-lead">SA:GE supports creating and editing map objects and their custom properties.</p>

        <h2>Working with Objects</h2>
        <p>Using the objects tools, you can create object bounding boxes on your map and assign custom properties and attributes to them.</p>
      `
    },
    {
      id: "npc-spawns",
      categoryId: "map-editor",
      title: "NPC Spawns",
      order: 9,
      summary: "Placing and editing NPC spawn points on maps.",
      keywords: ["npc", "npc spawns", "characters", "facing direction", "villagers"],
      synonyms: ["spawn villager", "npc placement", "place npc", "character position"],
      related: ["npcs-not-appearing", "warps", "testing-with-smapi"],
      content: `
        <p class="article-lead">SA:GE allows you to place and edit NPC spawn points directly on your maps.</p>

        <h2>Adding an NPC Spawn Point</h2>
        <ol>
          <li>Select the NPC tool in the editor.</li>
          <li>Click a tile on the map canvas to place a spawn point.</li>
          <li>Specify the NPC name and facing direction in the properties panel.</li>
        </ol>
      `
    },

    // ------------------------------------------------------------------------
    // 3. Smart Tiles (V1.1.0)
    // ------------------------------------------------------------------------
    {
      id: "smart-tiles-overview",
      categoryId: "smart-tiles",
      title: "Smart Tiles Overview",
      order: 1,
      summary: "What Smart Tiles are, when to use them, and the manual configuration workflow.",
      keywords: ["smart tiles", "terrain", "auto tile", "manual configuration", "topology", "v1.1.0"],
      synonyms: ["smart tile", "terrain tiles", "auto terrain", "tile family"],
      related: ["smart-tiles-topology", "smart-tiles-variations", "smart-tiles-brush", "tile-editing", "tilesets"],
      content: `
        <p class="article-lead"><strong>Smart Tiles</strong> (added in V1.1.0) let you define a reusable terrain configuration — once configured, painting with the Smart Tile tool automatically places the correct tile for each position in your terrain shape.</p>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Manual Configuration</div>
          <p>Smart Tiles use a <strong>manual</strong> workflow. You explicitly assign which tiles from your tileset belong to each position. SA:GE does not attempt to automatically discover tile families or analyse the tilesheet — you are always in full control of which tiles are used.</p>
        </div>

        <h2>When to Use Smart Tiles</h2>
        <p>Smart Tiles are well-suited for terrain that needs connected edges and corners, such as:</p>
        <ul>
          <li>Grass borders and terrain edges</li>
          <li>Dirt paths and ground surfaces</li>
          <li>Water edges and shorelines</li>
          <li>Cliff or wall outlines</li>
          <li>Any terrain that uses corner, edge, and inner-corner tiles</li>
          <li>Terrain where visual variety (multiple tile variations) is desirable</li>
        </ul>
        <p>For simple, non-connected tile placement, the standard Brush tool is usually sufficient. Smart Tiles are most useful when your terrain requires automatic topology handling across edges and corners.</p>

        <h2>Smart Tile Configuration Workflow</h2>
        <ol>
          <li>Open the Map Editor with a project and tileset loaded.</li>
          <li>Open or create a Smart Tile from the Smart Tiles panel.</li>
          <li>The Smart Tile configuration window opens, showing the topology editor.</li>
          <li>Select a position in the topology (e.g. <strong>Center</strong>, <strong>Top Edge</strong>, <strong>Top-Left Corner</strong>).</li>
          <li>Click tiles in the tileset palette to assign them to that position. You can assign multiple tile variations to any single position.</li>
          <li>Optionally adjust the <strong>frequency</strong> (weight) of each variation to control how often it appears when painting.</li>
          <li>Repeat for all relevant positions in the topology.</li>
          <li>Save the Smart Tile configuration.</li>
          <li>Select the <strong>Smart Tile Paint</strong> tool and choose a brush size (1×, 2×, or 3×).</li>
          <li>Paint terrain on the map. SA:GE automatically places the correct tile for each position based on neighboring terrain.</li>
        </ol>

        <div class="callout callout-note">
          <div class="callout-title">ℹ️ Not All Positions Are Required</div>
          <p>You do not need to configure every position in the topology. Positions left empty will simply not be painted for that topology slot. Configure the positions relevant to your terrain type.</p>
        </div>
      `
    },
    {
      id: "smart-tiles-topology",
      categoryId: "smart-tiles",
      title: "Smart Tile Topology",
      order: 2,
      summary: "The universal 3×3 grid topology and the four L-shaped inner-corner configurations.",
      keywords: ["topology", "3x3 grid", "corners", "edges", "inner corners", "l-shape", "center"],
      synonyms: ["tile layout", "grid positions", "corner types", "terrain topology"],
      related: ["smart-tiles-overview", "smart-tiles-variations", "smart-tiles-brush"],
      content: `
        <p class="article-lead">All Smart Tiles in SA:GE share a <strong>universal topology</strong> — a single set of positions that covers every terrain configuration you are likely to need.</p>

        <h2>The 3×3 Main Grid</h2>
        <p>The primary topology is a 3×3 grid representing exterior positions:</p>

        <div class="data-table-container" style="max-width: 380px;">
          <table class="data-table" style="text-align: center; font-size: 0.9rem;">
            <tbody>
              <tr>
                <td style="padding: 0.6rem 1rem; background: rgba(52,211,153,0.15); border: 1px solid rgba(52,211,153,0.3);">Top-Left<br><small>Corner</small></td>
                <td style="padding: 0.6rem 1rem; background: rgba(52,211,153,0.15); border: 1px solid rgba(52,211,153,0.3);">Top<br><small>Edge</small></td>
                <td style="padding: 0.6rem 1rem; background: rgba(52,211,153,0.15); border: 1px solid rgba(52,211,153,0.3);">Top-Right<br><small>Corner</small></td>
              </tr>
              <tr>
                <td style="padding: 0.6rem 1rem; background: rgba(52,211,153,0.15); border: 1px solid rgba(52,211,153,0.3);">Left<br><small>Edge</small></td>
                <td style="padding: 0.6rem 1rem; background: rgba(96,165,250,0.2); border: 1px solid rgba(96,165,250,0.4);"><strong>Center</strong></td>
                <td style="padding: 0.6rem 1rem; background: rgba(52,211,153,0.15); border: 1px solid rgba(52,211,153,0.3);">Right<br><small>Edge</small></td>
              </tr>
              <tr>
                <td style="padding: 0.6rem 1rem; background: rgba(52,211,153,0.15); border: 1px solid rgba(52,211,153,0.3);">Bottom-Left<br><small>Corner</small></td>
                <td style="padding: 0.6rem 1rem; background: rgba(52,211,153,0.15); border: 1px solid rgba(52,211,153,0.3);">Bottom<br><small>Edge</small></td>
                <td style="padding: 0.6rem 1rem; background: rgba(52,211,153,0.15); border: 1px solid rgba(52,211,153,0.3);">Bottom-Right<br><small>Corner</small></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style="margin-top: 1rem;">Each cell in the grid represents a distinct terrain position:</p>
        <ul>
          <li><strong>Center:</strong> Interior tiles fully surrounded by the same terrain.</li>
          <li><strong>Edges (Top, Bottom, Left, Right):</strong> Tiles along a straight outer edge of the terrain.</li>
          <li><strong>Outer Corners (four positions):</strong> Tiles at the outer corner of a terrain region, where two straight edges meet at a right angle.</li>
        </ul>

        <h2>Inner Corner Configurations</h2>
        <p>In addition to the 3×3 exterior grid, four <strong>inner corner</strong> (L-shaped) configurations handle the inside corners of terrain — where two terrain edges curve inward around an enclosed area.</p>
        <p>Inner corners appear when a terrain blob has a concave indentation. There are four rotations:</p>
        <ul>
          <li><strong>Inner Corner — Top-Left:</strong> Used where terrain curves inward at the top-left inside of the blob.</li>
          <li><strong>Inner Corner — Top-Right:</strong> Inward curve at the top-right inside.</li>
          <li><strong>Inner Corner — Bottom-Left:</strong> Inward curve at the bottom-left inside.</li>
          <li><strong>Inner Corner — Bottom-Right:</strong> Inward curve at the bottom-right inside.</li>
        </ul>

        <div class="callout callout-note">
          <div class="callout-title">ℹ️ Why Inner Corners Matter</div>
          <p>Without inner corners, concave terrain shapes would show visually incorrect tiles. Configuring inner corners ensures your terrain looks correct even when you paint complex blob shapes or irregular outlines.</p>
        </div>

        <h2>Positioning in Stardew Valley Tilesets</h2>
        <p>Stardew Valley tilesets typically arrange terrain tiles in a way that maps directly to this topology. The outer-corner and edge positions generally appear in an expected rectangular region of the tilesheet, and the inner-corner tiles are usually nearby. You assign the correct tiles from your palette to each topology position manually.</p>
      `
    },
    {
      id: "smart-tiles-variations",
      categoryId: "smart-tiles",
      title: "Tile Variations & Frequency",
      order: 3,
      summary: "Assigning multiple tile variations to a single position and controlling how often each appears.",
      keywords: ["variations", "frequency", "weight", "randomness", "multiple tiles", "variation"],
      synonyms: ["random tiles", "probability", "varied terrain", "tile weight", "variation frequency"],
      related: ["smart-tiles-overview", "smart-tiles-topology", "smart-tiles-brush"],
      content: `
        <p class="article-lead">Any position in the Smart Tile topology can hold <strong>multiple tile variations</strong>. When painting, SA:GE selects from these variations based on their configured frequency, resulting in more natural-looking terrain.</p>

        <h2>Adding Variations</h2>
        <p>To add variations to a topology position:</p>
        <ol>
          <li>Select the position (e.g. <strong>Center</strong>) in the topology editor.</li>
          <li>Click tiles in the tileset palette. Each clicked tile is added as a variation for that position.</li>
          <li>A list of assigned variations appears for the selected position.</li>
          <li>Adjust the <strong>frequency</strong> slider for each variation to control its selection weight.</li>
        </ol>

        <h2>Understanding Frequency</h2>
        <p>The frequency value is a <strong>relative weight</strong>, not a guaranteed percentage. For example:</p>
        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr><th>Variation</th><th>Frequency</th><th>Approximate likelihood</th></tr>
            </thead>
            <tbody>
              <tr><td>Grass Variant A</td><td>60</td><td>Most common</td></tr>
              <tr><td>Grass Variant B</td><td>25</td><td>Occasional</td></tr>
              <tr><td>Grass Variant C</td><td>15</td><td>Rare</td></tr>
            </tbody>
          </table>
        </div>
        <p>Higher-frequency tiles appear more often while painting. This allows a Center position to produce a mix of subtle tile variants, making large terrain areas look more natural and less repetitive.</p>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Practical Tip</div>
          <p>Use a high-frequency plain tile as the base variation and add lower-frequency detail tiles (small rocks, flowers, grass tufts) to create terrain that feels lively without being distracting.</p>
        </div>
      `
    },
    {
      id: "smart-tiles-brush",
      categoryId: "smart-tiles",
      title: "Smart Tile Brush Sizes",
      order: 4,
      summary: "Painting terrain with 1×, 2×, and 3× Smart Tile brush sizes.",
      keywords: ["brush size", "1x", "2x", "3x", "painting", "blob painting"],
      synonyms: ["brush", "paint size", "stroke size", "smart tile paint"],
      related: ["smart-tiles-overview", "smart-tiles-topology", "smart-tiles-variations"],
      content: `
        <p class="article-lead">The Smart Tile Paint tool supports three brush sizes: <strong>1×</strong>, <strong>2×</strong>, and <strong>3×</strong>. Larger brush sizes let you cover more area per stroke while the Smart Tile system still handles topology automatically.</p>

        <h2>Brush Size Comparison</h2>
        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr><th>Brush Size</th><th>Footprint</th><th>Best For</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1×</strong></td>
                <td>Single tile</td>
                <td>Precise placement, fine detail work, small terrain patches</td>
              </tr>
              <tr>
                <td><strong>2×</strong></td>
                <td>2×2 tile area</td>
                <td>Medium terrain shapes, moderate-sized blobs</td>
              </tr>
              <tr>
                <td><strong>3×</strong></td>
                <td>3×3 tile area</td>
                <td>Large terrain blobs, filling broad areas quickly</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Topology Remains Accurate at All Sizes</h2>
        <p>Regardless of brush size, the Smart Tile system evaluates each painted tile's position relative to the terrain blob and assigns the correct topology tile (edge, corner, inner corner, center). Larger brushes do not break or distort the topology.</p>

        <h2>Blob Painting</h2>
        <p>V1.1.0 includes improvements to blob painting behaviour. When painting larger strokes, tile variations are distributed naturally across the painted area rather than appearing in unnatural straight lines. This ensures large terrain regions look consistent with the frequency weighting you configured.</p>

        <div class="callout callout-tip">
          <div class="callout-title">💡 Workflow Suggestion</div>
          <p>Use the <strong>3× brush</strong> to lay down the bulk of your terrain quickly, then switch to <strong>1×</strong> for precise edge cleanup and detail adjustments.</p>
        </div>
      `
    },

    // ------------------------------------------------------------------------
    // 4. Playtesting
    // ------------------------------------------------------------------------
    {
      id: "testing-with-smapi",
      categoryId: "playtesting",
      title: "Testing Custom Maps",
      order: 1,
      summary: "Testing and verifying custom maps in Stardew Valley.",
      keywords: ["playtesting", "smapi", "test map", "debugging", "verification"],
      synonyms: ["how to test", "run game", "test mod", "in-game test"],
      related: ["common-problems", "maps-not-loading", "tileset-problems"],
      content: `
        <p class="article-lead">Test and verify your custom maps in Stardew Valley to check layouts, warps, and tile placement.</p>

        <h2>Playtesting Workflow</h2>
        <ol>
          <li>Save your map project in SA:GE.</li>
          <li>Ensure your mod files are located in your Stardew Valley <code>Mods/</code> directory.</li>
          <li>Launch Stardew Valley with SMAPI to test your map in-game.</li>
        </ol>

        <h2>In-Game Testing Commands</h2>
        <p>In the SMAPI console, you can use standard debug commands to quickly reach your custom map:</p>
        <ul>
          <li><code>debug warp &lt;MapName&gt; &lt;X&gt; &lt;Y&gt;</code> — Warps your character to specific coordinates on a map.</li>
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
      summary: "Quick diagnostic checklist for common map and layout questions.",
      keywords: ["troubleshooting", "problems", "errors", "checklist", "faq", "fixes"],
      synonyms: ["bugs", "issues", "why doesn't it work", "help"],
      related: ["maps-not-loading", "tileset-problems", "npcs-not-appearing"],
      content: `
        <p class="article-lead">If something is not working as expected during testing, check these common items:</p>

        <h2>Diagnostic Checklist</h2>
        <ul>
          <li><strong>SMAPI Console:</strong> Check the SMAPI terminal for error messages or missing asset notices.</li>
          <li><strong>Layer Setup:</strong> Ensure your map contains the required standard layers (such as <code>Back</code> and <code>Buildings</code>).</li>
          <li><strong>Tileset References:</strong> Ensure all referenced tileset images exist in your project.</li>
          <li><strong>Warp Coordinates:</strong> Verify that warp destination coordinates point to valid, walkable tiles.</li>
        </ul>
      `
    },
    {
      id: "maps-not-loading",
      categoryId: "troubleshooting",
      title: "Maps Not Loading",
      order: 2,
      summary: "Diagnosing map loading and warp transition questions.",
      keywords: ["maps not loading", "black screen", "crash on warp", "missing map"],
      synonyms: ["map won't load", "black map", "freeze", "crash"],
      related: ["common-problems", "understanding-projects", "tileset-problems"],
      content: `
        <p class="article-lead">If a map does not load or appears black upon warping, check the following common causes:</p>

        <h2>Common Causes & Solutions</h2>
        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Symptom</th>
                <th>Possible Cause</th>
                <th>Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Black screen on warp</td>
                <td>Missing <code>Back</code> or <code>Buildings</code> layer</td>
                <td>Ensure standard <code>Back</code> and <code>Buildings</code> layers exist on the map.</td>
              </tr>
              <tr>
                <td>Warp loops continuously</td>
                <td>Warp destination placed on the return warp tile</td>
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
      summary: "Resolving missing textures and tileset file path issues.",
      keywords: ["tileset problems", "missing textures", "texture error"],
      synonyms: ["broken tiles", "missing png"],
      related: ["tilesets", "common-problems"],
      content: `
        <p class="article-lead">Resolving missing textures and tileset reference issues.</p>

        <h2>Missing Tileset Textures</h2>
        <p>If tiles appear missing or blank, verify that the referenced tileset image files exist in your project folder and match the filenames used in the map.</p>
      `
    },
    {
      id: "npcs-not-appearing",
      categoryId: "troubleshooting",
      title: "NPCs Not Appearing",
      order: 4,
      summary: "Diagnosing NPC spawn placement questions.",
      keywords: ["npc not showing", "npc missing", "npcs not appearing", "character invisible"],
      synonyms: ["npc not showing", "villager missing", "can't find npc", "npc not spawning"],
      related: ["npc-spawns", "common-problems", "testing-with-smapi"],
      content: `
        <p class="article-lead">If an NPC placed on your map does not appear during testing, check these common items:</p>

        <h2>Troubleshooting NPC Spawns</h2>
        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Possible Reason</th>
                <th>Explanation & Check</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>NPC Schedule</strong></td>
                <td>In-game schedules dictate character locations throughout the day. Check the NPC's daily schedule or test at 6:00 AM.</td>
              </tr>
              <tr>
                <td><strong>Solid Collision Tile</strong></td>
                <td>If the spawn point is on a solid obstacle, move the spawn point to an open, passable tile on the <code>Back</code> layer.</td>
              </tr>
              <tr>
                <td><strong>Name Spelling</strong></td>
                <td>Ensure the character's internal name matches the exact in-game identifier.</td>
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
