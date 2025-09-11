// api/articles.js
// api/articles.js
import { toRender } from "./_utils.js";

export default async function handler(req, res) {
  try {
    const upstream = await toRender("/api/articles");
    const ct = upstream.headers.get("content-type") || "";
    const body = ct.includes("application/json") ? await upstream.json() : await upstream.text();
    res.status(upstream.status);
    return typeof body === "string" ? res.send(body) : res.json(body);
  } catch (e) {
    res.status(502).json({ error: "Upstream fetch failed", details: String(e) });
  }
}
