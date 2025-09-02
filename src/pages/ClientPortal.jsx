// src/pages/ClientPortal.jsx
import { useState } from "react";
import PageNav from "../components/PageNav";

// Use CRA dev proxy locally: add "proxy": "http://localhost:5001" in frontend/package.json.
// If you deploy the API, set REACT_APP_API_BASE to the full URL.
const RAW_BASE = (process.env.REACT_APP_API_BASE || "").replace(/\/+$/, "");
const api = (p) => (RAW_BASE ? `${RAW_BASE}${p}` : p);

function ClientPortal() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  // added minimal state for portal logic
  const [email, setEmail] = useState("client@example.com"); // demo defaults
  const [password, setPassword] = useState("Passw0rd!");
  const [error, setError] = useState("");
  const [me, setMe] = useState(null);
  const [docs, setDocs] = useState([]);

  const onLogin = async (e) => {
    e?.preventDefault?.();
    setLoading(true);
    setError("");
    try {
      // 1) Login against your simple demo endpoint
      const res = await fetch(api("/api/portal/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Login failed");
      setMe(data.user);

      // 2) Fetch documents list (stubbed)
      const dRes = await fetch(api("/api/portal/documents"));
      const dData = await dRes.json();
      if (!dRes.ok) throw new Error(dData?.error || "Failed to load documents");
      setDocs(dData.items || []);
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setMe(null);
      setDocs([]);
    } finally {
      setLoading(false);
    }
  };

  const onLogout = () => {
    setMe(null);
    setDocs([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-700 pt-16 pb-28 relative text-white">
      {/* subtle glows */}
      <div className="pointer-events-none absolute -top-40 -left-24 w-[28rem] h-[28rem] bg-white/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 w-[32rem] h-[32rem] bg-white/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 flex items-center justify-center">
        <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-2xl border border-white/60 shadow-lg p-8 text-center text-slate-900">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-2">Client Portal</h1>
          <p className="text-slate-700 mb-6">Securely access your documents and reports.</p>

          {!me ? (
            <>
              {error && (
                <div className="mb-3 rounded border border-red-200 bg-red-100 text-red-800 px-3 py-2 text-sm">
                  {error}
                </div>
              )}

              {/* Form */}
              <form className="space-y-4" onSubmit={onLogin}>
                <div className="text-left">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    required
                  />
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                  <div className="relative">
                    <input
                      type={show ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 pr-20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShow((v) => !v)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-sky-700 hover:underline"
                    >
                      {show ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-700 text-white py-2.5 rounded-lg hover:bg-sky-800 transition disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>
              </form>

              {/* Helper links */}
              <div className="mt-6 grid gap-2">
                <button type="button" className="text-sm text-sky-700 hover:underline">
                  Forgot your password?
                </button>
                <button type="button" className="text-sm text-sky-700 hover:underline">
                  Request portal access
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Welcome, {me.email}</h2>
                <button onClick={onLogout} className="text-sm text-sky-700 hover:underline">
                  Log out
                </button>
              </div>

              <div className="bg-white rounded border border-slate-200 text-left">
                <div className="px-3 py-2 border-b border-slate-200 font-medium">Your documents</div>
                <ul className="divide-y divide-slate-200">
                  {docs.map((d) => (
                    <li key={d.id} className="px-3 py-2 text-sm flex items-center justify-between">
                      <span>{d.name}</span>
                      <span className="text-slate-500 text-xs">{d.size} • {d.uploadedAt}</span>
                    </li>
                  ))}
                  {docs.length === 0 && (
                    <li className="px-3 py-4 text-sm text-slate-500">No documents yet.</li>
                  )}
                </ul>
              </div>
            </>
          )}

          {/* Divider + reports CTA (unchanged) */}
          <div className="mt-8 pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Need a specific document?</p>
            <button type="button" className="text-sky-700 hover:underline text-sm font-medium">
              Access your reports
            </button>
          </div>
        </div>
      </div>

      {/* Navigation with clear labels — positions unchanged */}
      <PageNav
        back="/newsroom"
        backLabel="Back: Newsroom"
        next="/contact"
        nextLabel="Next: Contact"
        always
      />
    </div>
  );
}

export default ClientPortal;
