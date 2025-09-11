// api/applications.js
import { forward, requireBase } from "./_utils";
export const config = { api: { bodyParser: false } };

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const base = requireBase(res);
  if (!base) return;

  try {
    const raw = await readRawBody(req);
    const headers = {};
    for (const [k, v] of Object.entries(req.headers)) {
      const key = k.toLowerCase();
      if (key === "host" || key === "content-length") continue;
      headers[key] = v;
    }
    const upstream = await fetch(`${base}/api/applications`, { method: "POST", headers, body: raw });
    await forward(upstream, res);
  } catch (e) {
    console.error("Proxy /api/applications error:", e);
    res.status(502).json({ error: "Upstream upload failed", details: String(e) });
  }
}
