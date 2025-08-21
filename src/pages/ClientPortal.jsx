// src/pages/ClientPortal.jsx
import { useState } from "react";
import PageNav from "../components/PageNav";

function ClientPortal() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200); // mock loading
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-700 pt-16 pb-28 relative text-white">
      {/* subtle glows */}
      <div className="pointer-events-none absolute -top-40 -left-24 w-[28rem] h-[28rem] bg-white/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 w-[32rem] h-[32rem] bg-white/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 flex items-center justify-center">
        <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-2xl border border-white/60 shadow-lg p-8 text-center text-slate-900 animate-[fadeIn_400ms_ease-out]">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-2">Client Portal</h1>
          <p className="text-slate-700 mb-6">
            Securely access your documents and reports.
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="text-left">
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 pr-20"
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
              type="button"
              onClick={onLogin}
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

          {/* Divider + reports CTA */}
          <div className="mt-8 pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Need a specific document?</p>
            <button type="button" className="text-sky-700 hover:underline text-sm font-medium">
              Access your reports
            </button>
          </div>
        </div>
      </div>

      {/* Navigation with clear labels */}
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
