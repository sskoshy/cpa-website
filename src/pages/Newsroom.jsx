import { useState } from "react";

function Newsroom() {
  const allArticles = [
    { title: "CPA Firm Recognized as Top Accounting Leader", date: "Aug 1, 2025", summary: "Honored for excellence in client service and standards.", category: "Consulting" },
    { title: "Webinar Recap: Mid-Year Tax Planning Tips", date: "Jul 22, 2025", summary: "Deductions, estimated payments, and planning ahead for year-end.", category: "Tax" },
    { title: "Guide: Preparing for Your First Audit", date: "Jul 10, 2025", summary: "Checklist to get organized and reduce audit stress.", category: "Audit" },
    { title: "Article: Choosing a Business Entity", date: "Aug 05, 2025", summary: "LLC vs. S-Corp basics for founders.", category: "Consulting" },
    { title: "Tax Alert: Q3 Deadlines", date: "Aug 07, 2025", summary: "Key upcoming dates to track.", category: "Tax" },
  ];

  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = allArticles.filter((a) => {
    const matchesCat = cat === "All" || a.category === cat;
    const matchesQ =
      !q ||
      a.title.toLowerCase().includes(q.toLowerCase()) ||
      a.summary.toLowerCase().includes(q.toLowerCase());
    return matchesCat && matchesQ;
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Newsroom</h1>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            type="text"
            placeholder="Search..."
            className="border border-slate-200 rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="border border-slate-200 rounded p-2"
          >
            <option>All</option>
            <option>Tax</option>
            <option>Audit</option>
            <option>Consulting</option>
          </select>
        </div>

        {filtered.map((a, i) => (
          <div key={i} className="bg-white rounded border border-slate-200 shadow-sm p-5 mb-4 hover:shadow-md transition">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-semibold text-slate-900">{a.title}</h2>
              <span className="text-xs px-2 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">{a.category}</span>
            </div>
            <p className="text-sm text-slate-500 mt-1">{a.date}</p>
            <p className="mt-3 text-slate-700">{a.summary}</p>
            <button type="button" className="mt-2 text-sky-700 hover:underline">Read more</button>
          </div>
        ))}

        <div className="mt-10 flex justify-between">
          <a href="/clientportal" className="inline-flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">← Back</a>
          <a href="/contact" className="inline-flex items-center bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700">Next →</a>
        </div>
      </div>
    </div>
  );
}

export default Newsroom;
