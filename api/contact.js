// api/contact.js
import { forward, requireBase } from "./_utils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const base = requireBase(res);
  if (!base) return;

  try {
    const upstream = await fetch(`${base}/api/contact`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(req.body || {})
    });
    await forward(upstream, res);
  } catch (e) {
    console.error("Proxy /api/contact error:", e);
    res.status(502).json({ error: "Upstream fetch failed", details: String(e) });
  }
}
