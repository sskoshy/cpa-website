// api/jobs.js
import { forward, requireBase } from "./_utils";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const base = requireBase(res);
  if (!base) return;

  try {
    const upstream = await fetch(`${base}/api/jobs`, { headers: { accept: "application/json" } });
    await forward(upstream, res);
  } catch (e) {
    console.error("Proxy /api/jobs error:", e);
    res.status(502).json({ error: "Upstream fetch failed", details: String(e) });
  }
}
