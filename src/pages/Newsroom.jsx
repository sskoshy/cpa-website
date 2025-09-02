// src/pages/Newsroom.jsx — your original look, now loading from backend (ESLint deps fixed)
import { useEffect, useMemo, useState } from "react";
import PageNav from "../components/PageNav";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5001";
// Move constant outside component
const DEFAULT_CATS = ["All", "Tax", "Audit", "Consulting"];

function Newsroom() {
  const [articles, setArticles] = useState([]);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState({});

  // Load from backend
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/articles`);
        const data = await res.json();
        const arr = Array.isArray(data?.items) ? data.items : Array.isArray(data) ? data : [];
        const norm = arr.map(a => ({
          ...a,
          category: a.category || (Array.isArray(a.tags) && a.tags[0]) || "General",
        }));
        setArticles(norm);
      } catch {
        setArticles([
          { _id: "d1", title: "CPA Firm Recognized as Top Accounting Leader", date: "2025-08-01", summary: "Honored for excellence in client service and standards.", category: "Consulting" },
          { _id: "d2", title: "Webinar Recap: Mid-Year Tax Planning Tips", date: "2025-07-22", summary: "Deductions, estimated payments, and planning ahead for year-end.", category: "Tax" },
          { _id: "d3", title: "Guide: Preparing for Your First Audit", date: "2025-07-10", summary: "Checklist to get organized and reduce audit stress.", category: "Audit" },
          { _id: "d4", title: "Article: Choosing a Business Entity", date: "2025-08-05", summary: "LLC vs. S-Corp basics for founders.", category: "Consulting" },
          { _id: "d5", title: "Tax Alert: Q3 Deadlines", date: "2025-08-07", summary: "Key upcoming dates to track.", category: "Tax" },
        ]);
      }
    })();
  }, []);

  // Categories: dynamic from articles; DEFAULT_CATS is stable at module scope
  const CATS = useMemo(() => {
    const set = new Set(DEFAULT_CATS);
    articles.forEach(a => a.category && set.add(a.category));
    return Array.from(set);
  }, [articles]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return articles.filter(a => {
      const matchesCat = cat === "All" || a.category === cat;
      const matchesQ = !term || a.title?.toLowerCase().includes(term) || a.summary?.toLowerCase().includes(term);
      return matchesCat && matchesQ;
    });
  }, [articles, q, cat]);

  const toggle = (i) => setOpen((o) => ({ ...o, [i]: !o[i] }));

  return (
    <div className="relative min-h-screen pt-16 pb-28 text-white overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-700" />

      {/* Soft background image under the gradient */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop')" }}
        aria-hidden="true"
      />

      {/* subtle glows */}
      <div className="pointer-events-none absolute -top-40 -left-24 w-[28rem] h-[28rem] bg-white/10 blur-3xl rounded-full -z-10" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 w-[32rem] h-[32rem] bg-white/10 blur-3xl rounded-full -z-10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="text-center mt-6 mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Newsroom</h1>
          <div className="w-20 h-1 bg-white/70 mx-auto mt-3 rounded" />
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">Insights, updates, and practical guides from the BlueOak team.</p>
        </header>

        {/* Search + category pills */}
        <div className="flex flex-col items-stretch sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            type="text"
            placeholder="Search articles…"
            className="border border-white/30 bg-white/15 text-white placeholder-white/70 backdrop-blur rounded-lg p-2.5 flex-1 focus:outline-none focus:ring-2 focus:ring-sky-300"
          />

          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 py-1.5 rounded-full text-sm transition ${cat === c ? "bg-white text-indigo-900 font-semibold" : "bg-white/10 border border-white/30 hover:bg-white/20"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results info */}
        <div className="mb-4 text-white/80 text-sm">
          Showing <span className="font-semibold">{filtered.length}</span> {filtered.length === 1 ? "result" : "results"}
          {cat !== "All" && <> in <span className="font-semibold">{cat}</span></>}
          {q && <> for “<span className="font-semibold">{q}</span>”</>}
        </div>

        {/* Article cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((a, i) => (
            <article key={a._id || i} className="bg-white rounded-2xl border border-slate-200 shadow hover:shadow-md transition text-slate-900">
              <div className="h-1.5 rounded-t-2xl bg-gradient-to-r from-sky-600 to-indigo-800" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-900">{a.title}</h2>
                  <span className="shrink-0 text-[11px] px-2 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">{a.category}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{a.date ? new Date(a.date).toLocaleDateString() : ""}</p>
                {a.summary && <p className="mt-3 text-slate-800">{a.summary}</p>}
                {a.body && open[i] && <p className="mt-3 text-slate-700 text-sm whitespace-pre-wrap">{a.body}</p>}

                <div className="mt-4 flex items-center justify-between">
                  {a.body ? (
                    <button type="button" onClick={() => toggle(i)} className="text-sky-800 hover:underline text-sm font-medium">
                      {open[i] ? "Read less" : "Read more"}
                    </button>
                  ) : <span />}
                  <button type="button" className="text-slate-600 hover:text-slate-800 text-xs" title="Copy link (demo)" onClick={() => navigator.clipboard?.writeText(window.location.href)}>
                    Copy link
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 bg-white rounded-2xl border border-slate-200 shadow p-8 text-center text-slate-900">
            <p className="font-semibold">No articles found.</p>
            <p className="text-slate-600 text-sm mt-1">Try a different search term or choose another category.</p>
          </div>
        )}
      </div>

      <PageNav back="/careers" backLabel="Back: Careers" next="/clientportal" nextLabel="Next: Client Portal" always />
    </div>
  );
}

export default Newsroom;
