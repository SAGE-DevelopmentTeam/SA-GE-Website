/**
 * SA:GE (Stardew Authoring : Game Editor) — Active Users Statistics Backend
 * 
 * Minimal, zero-dependency Node.js HTTP server.
 * Receives anonymous heartbeats from SA:GE desktop installations and calculates
 * the rolling 30-day active installation count for the official website.
 * 
 * Usage:
 *   node server.js [port]
 * Default port: 3000
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = parseInt(process.env.PORT || process.argv[2] || "3000", 10);
const DATA_FILE = path.join(__dirname, "heartbeats.json");
const ROLLING_WINDOW_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const RATE_LIMIT_MS = 5 * 60 * 1000; // 5 minutes per installation ID

// Map<installationId, { lastSeen: number, appVersion: string }>
const heartbeats = new Map();

// Load existing data from disk if present
function loadHeartbeats() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf8");
      const entries = JSON.parse(raw);
      if (typeof entries === "object" && entries !== null) {
        const now = Date.now();
        for (const [id, record] of Object.entries(entries)) {
          if (record && typeof record.lastSeen === "number") {
            // Keep entries within rolling window
            if (now - record.lastSeen <= ROLLING_WINDOW_MS) {
              heartbeats.set(id, record);
            }
          }
        }
      }
    }
  } catch (err) {
    console.warn("[SAGE Server] Could not load heartbeats from disk:", err.message);
  }
}

// Persist active heartbeats to disk
function saveHeartbeats() {
  try {
    const entries = {};
    const now = Date.now();
    for (const [id, record] of heartbeats.entries()) {
      if (now - record.lastSeen <= ROLLING_WINDOW_MS) {
        entries[id] = record;
      }
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2), "utf8");
  } catch (err) {
    console.warn("[SAGE Server] Could not save heartbeats to disk:", err.message);
  }
}

loadHeartbeats();

// Clean up expired entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [id, record] of heartbeats.entries()) {
    if (now - record.lastSeen > ROLLING_WINDOW_MS) {
      heartbeats.delete(id);
    }
  }
  saveHeartbeats();
}, 60 * 60 * 1000);

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);

  // 1. GET /api/stats -> Return 30-day active installation count
  if (req.method === "GET" && (url.pathname === "/api/stats" || url.pathname === "/api/statistics")) {
    const now = Date.now();
    let activeCount = 0;
    const versionCounts = {};

    for (const record of heartbeats.values()) {
      if (now - record.lastSeen <= ROLLING_WINDOW_MS) {
        activeCount++;
        const ver = record.appVersion || "unknown";
        versionCounts[ver] = (versionCounts[ver] || 0) + 1;
      }
    }

    const payload = {
      status: "ok",
      activeUsers: activeCount,
      activeInstallations: activeCount,
      rollingWindowDays: 30,
      versions: versionCounts,
      generatedAt: new Date().toISOString()
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(payload, null, 2));
    return;
  }

  // 2. POST /api/heartbeat -> Record anonymous heartbeat ping
  if (req.method === "POST" && (url.pathname === "/api/heartbeat" || url.pathname === "/api/ping")) {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 10240) { // Max 10KB payload limit
        req.destroy();
      }
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body || "{}");
        const installationId = typeof data.installationId === "string" ? data.installationId.trim() : "";
        const appVersion = typeof data.appVersion === "string" ? data.appVersion.trim() : "4.1.0";

        // Validate installationId (must be a valid UUID format or alphanumeric/hyphen string of 16-64 chars)
        if (!installationId || installationId.length < 16 || installationId.length > 64 || !/^[A-Za-z0-9\-_]+$/.test(installationId)) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Invalid installationId format" }));
          return;
        }

        const now = Date.now();
        const existing = heartbeats.get(installationId);

        // Rate limit frequent pings from the same ID (store but avoid write thrashing)
        if (!existing || (now - existing.lastSeen) > RATE_LIMIT_MS) {
          heartbeats.set(installationId, {
            lastSeen: now,
            appVersion: appVersion
          });
          saveHeartbeats();
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "ok" }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON payload" }));
      }
    });
    return;
  }

  // 3. Health check
  if (req.method === "GET" && (url.pathname === "/health" || url.pathname === "/")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      service: "SA:GE Statistics Server",
      status: "online",
      activeInstallations30d: heartbeats.size
    }));
    return;
  }

  // 404 Not Found
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not Found" }));
});

server.listen(PORT, () => {
  console.log(`[SAGE Statistics Server] Listening on http://localhost:${PORT}`);
  console.log(`[SAGE Statistics Server] Active 30-day installations loaded: ${heartbeats.size}`);
});
