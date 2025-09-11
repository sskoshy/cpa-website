// api/_utils.js
export async function forward(upstreamResponse, res) {
    const ct = upstreamResponse.headers.get("content-type") || "";
    const status = upstreamResponse.status;
    try {
      if (ct.includes("application/json")) {
        const json = await upstreamResponse.json();
        res.status(status).json(json);
      } else {
        const text = await upstreamResponse.text();
        res.status(status).send(text);
      }
    } catch (e) {
      res.status(500).json({ error: "Proxy decode error", details: String(e) });
    }
  }
  export function requireBase(res) {
    const base = process.env.RENDER_API_BASE;
    if (!base) {
      res.status(500).json({ error: "RENDER_API_BASE not set" });
      return null;
    }
    return base.replace(/\/+$/, "");
  }
  
  // api/_utils.js
export async function toRender(path, init = {}) {
    const base = process.env.RENDER_API_BASE;
    if (!base) throw new Error("RENDER_API_BASE not set");
    const url = new URL(path, base).toString();
  
    const { headers, ...rest } = init;
    return fetch(url, {
      ...rest,
      // don't forward browser cookies; set minimal headers
      headers: { accept: "application/json", ...(headers || {}) },
    });
  }
  