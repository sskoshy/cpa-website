import { useState } from "react";

const TEAM_MEMBERS = [
  { name: "Alex Chen", title: "Partner", role: "Leadership", bio: "...", image: "...", linkedin: "..." },
  { name: "Priya Patel", title: "Senior Manager", role: "Leadership", bio: "...", image: "...", linkedin: "..." },
  { name: "Jordan Smith", title: "Staff Accountant", role: "Staff", bio: "...", image: "...", linkedin: "..." },
  { name: "Taylor Nguyen", title: "Tax Associate", role: "Staff", bio: "...", image: "...", linkedin: "..." },
];

function Team() {
  const [filter, setFilter] = useState("All");

  const list =
    filter === "All" ? TEAM_MEMBERS : TEAM_MEMBERS.filter((m) => m.role === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">Our Team</h1>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-6">
          Meet the professionals driving our commitment to excellence.
        </p>

        {/* Simple role filter */}
        <div className="flex justify-center gap-2 mb-8">
          {["All", "Leadership", "Staff"].map((r) => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`px-3 py-1.5 rounded border ${
                filter === r
                  ? "bg-sky-600 text-white border-sky-600"
                  : "border-slate-300 hover:bg-slate-50"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((m, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 text-center hover:shadow-md transition">
              <img
                src={m.image}
                alt={m.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-sky-100 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-900">{m.name}</h3>
              <p className="text-sm text-sky-700 font-medium">{m.title}</p>
              <p className="text-slate-700 mt-3 text-sm">{m.bio}</p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block bg-sky-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-700 transition"
              >
                LinkedIn Profile
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-between">
          <a href="/about" className="inline-flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">← Back</a>
          <a href="/services" className="inline-flex items-center bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700">Next →</a>
        </div>
      </div>
    </div>
  );
}

export default Team;
