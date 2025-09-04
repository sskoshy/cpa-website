// src/pages/ClientPortal.jsx
import { useState } from "react";
import PageNav from "../components/PageNav";

// API helper (works with dev proxy or prod env)
const API_BASE = (process.env.REACT_APP_API_BASE || "").replace(/\/+$/, "");
const withBase = (path) => (API_BASE ? `${API_BASE}${path}` : path);

function ClientPortal() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  // Auth + data
  const [email, setEmail] = useState("client@example.com"); // demo creds
  const [password, setPassword] = useState("Passw0rd!");
  const [error, setError] = useState("");
  const [me, setMe] = useState(null);
  const [docs, setDocs] = useState([]);

  // Reports
  const [reports, setReports] = useState([]);
  const [reportsError, setReportsError] = useState("");
  const [reportsLoading, setReportsLoading] = useState(false);
  const [showReports, setShowReports] = useState(false);

  // Forgot password
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMsg, setForgotMsg] = useState("");

  // Request access
  const [showAccessReq, setShowAccessReq] = useState(false);
  const [reqName, setReqName] = useState("");
  const [reqCompany, setReqCompany] = useState("");
  const [reqEmail, setReqEmail] = useState("");
  const [accessMsg, setAccessMsg] = useState("");

  const onLogin = async (e) => {
    e?.preventDefault?.();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(withBase("/api/portal/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
      setMe(data.user);

      const dRes = await fetch(withBase("/api/portal/documents"));
      const dData = await dRes.json().catch(() => ({}));
      if (!dRes.ok) throw new Error(dData?.error || `HTTP ${dRes.status}`);
      setDocs(Array.isArray(dData.items) ? dData.items : []);
    } catch (err) {
      setError(err.message || "Login failed");
      setMe(null);
      setDocs([]);
    } finally {
      setLoading(false);
    }
  };

  const onLogout = () => {
    setMe(null);
    setDocs([]);
    setReports([]);
    setShowReports(false);
    setReportsError("");
  };

  const submitForgot = async (e) => {
    e?.preventDefault?.();
    setForgotMsg("");
    try {
      const res = await fetch(withBase("/api/portal/forgot"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
      setForgotMsg("If that email exists, we’ve sent reset instructions.");
      setForgotEmail("");
    } catch (err) {
      setForgotMsg(err.message || "Failed to submit request.");
    }
  };

  const submitAccessReq = async (e) => {
    e?.preventDefault?.();
    setAccessMsg("");
    try {
      const res = await fetch(withBase("/api/portal/request-access"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: reqName.trim(),
          company: reqCompany.trim() || undefined,
          email: reqEmail.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
      setAccessMsg("Thanks! We’ll review and get you set up.");
      setReqName(""); setReqCompany(""); setReqEmail("");
    } catch (err) {
      setAccessMsg(err.message || "Failed to request access.");
    }
  };

  const onLoadReports = async () => {
    setReportsLoading(true);
    setReportsError("");
    setShowReports(true);
    try {
      const res = await fetch(withBase("/api/portal/reports"));
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
      setReports(Array.isArray(data.items) ? data.items : []);
    } catch (err) {
      setReports([]);
      setReportsError(err.message || "Failed to load reports");
    } finally {
      setReportsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-700 pt-16 pb-28 relative text-white">
      {/* subtle glows */}
      <div className="pointer-events-none absolute -top-40 -left-24 w-[28rem] h-[28rem] bg-white/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 w-[32rem] h-[32rem] bg-white/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 flex items-center justify-center">
        <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-2xl border border-white/60 shadow-lg p-8 text-center text-slate-900">
          <h1 className="text-3xl font-bold mb-2">Client Portal</h1>
          <p className="text-slate-700 mb-6">Securely access your documents and reports.</p>

          {!me ? (
            <>
              {error && (
                <div className="mb-3 rounded border border-red-200 bg-red-100 text-red-800 px-3 py-2 text-sm">
                  {error}
                </div>
              )}

              <form className="space-y-4" onSubmit={onLogin}>
                <div className="text-left">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300"
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
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 pr-20"
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

              {/* Helpers */}
              <div className="mt-6 grid gap-3 text-left">
                {/* Forgot password */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowForgot((v) => !v)}
                    className="text-sm text-sky-700 hover:underline"
                  >
                    Forgot your password?
                  </button>
                  {showForgot && (
                    <form onSubmit={submitForgot} className="mt-2 space-y-2">
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded border border-slate-300"
                        required
                      />
                      <button className="px-3 py-1.5 rounded bg-sky-700 text-white text-sm">
                        Send reset link
                      </button>
                      {forgotMsg && <div className="text-xs mt-1 text-slate-600">{forgotMsg}</div>}
                    </form>
                  )}
                </div>

                {/* Request portal access */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowAccessReq((v) => !v)}
                    className="text-sm text-sky-700 hover:underline"
                  >
                    Request portal access
                  </button>
                  {showAccessReq && (
                    <form onSubmit={submitAccessReq} className="mt-2 space-y-2">
                      <input
                        type="text"
                        placeholder="Full name"
                        value={reqName}
                        onChange={(e) => setReqName(e.target.value)}
                        className="w-full px-3 py-2 rounded border border-slate-300"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Company (optional)"
                        value={reqCompany}
                        onChange={(e) => setReqCompany(e.target.value)}
                        className="w-full px-3 py-2 rounded border border-slate-300"
                      />
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={reqEmail}
                        onChange={(e) => setReqEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded border border-slate-300"
                        required
                      />
                      <button className="px-3 py-1.5 rounded bg-sky-700 text-white text-sm">
                        Submit request
                      </button>
                      {accessMsg && <div className="text-xs mt-1 text-slate-600">{accessMsg}</div>}
                    </form>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* AFTER LOGIN */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Welcome, {me.email}</h2>
                <button onClick={onLogout} className="text-sm text-sky-700 hover:underline">
                  Log out
                </button>
              </div>

              <div className="bg-white rounded border border-slate-200 text-left mb-6">
                <div className="px-3 py-2 border-b border-slate-200 font-medium">Your documents</div>
                <ul className="divide-y divide-slate-200">
                  {docs.map((d) => (
                    <li key={d.id} className="px-3 py-2 text-sm flex justify-between">
                      <span>{d.name}</span>
                      <span className="text-slate-500 text-xs">{d.size} • {d.uploadedAt}</span>
                    </li>
                  ))}
                  {docs.length === 0 && (
                    <li className="px-3 py-4 text-sm text-slate-500">No documents yet.</li>
                  )}
                </ul>
              </div>

              {/* SINGLE reports link — only visible after login */}
              <div className="text-left">
                <button
                  type="button"
                  onClick={() => { setShowReports(true); onLoadReports(); }}
                  className="text-sky-700 hover:underline text-sm font-medium"
                >
                  Access your reports
                </button>

                {showReports && (
                  <div className="mt-2 bg-white rounded border border-slate-200">
                    <div className="px-3 py-2 border-b border-slate-200 font-medium">Reports</div>
                    {reportsLoading && <div className="px-3 py-3 text-sm">Loading…</div>}
                    {reportsError && (
                      <div className="px-3 py-2 text-sm text-red-700 bg-red-50">{reportsError}</div>
                    )}
                    <ul className="divide-y divide-slate-200">
                      {reports.map((r) => (
                        <li key={r.id} className="px-3 py-2 text-sm flex justify-between">
                          <span>{r.name}</span>
                          <span className="text-slate-500 text-xs">
                            {(r.size || "—")}{r.generatedAt ? ` • ${r.generatedAt}` : ""}
                          </span>
                        </li>
                      ))}
                      {reports.length === 0 && !reportsLoading && !reportsError && (
                        <li className="px-3 py-3 text-sm text-slate-500">No reports available.</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Back/Next stays put */}
      <PageNav back="/newsroom" backLabel="Back: Newsroom" next="/contact" nextLabel="Next: Contact" always />
    </div>
  );
}

export default ClientPortal;
