// src/pages/Team.jsx
import { useState } from "react";
import PageNav from "../components/PageNav";

const TEAM_MEMBERS = [
  {
    name: "Alex Miller",
    title: "Partner",
    role: "Leadership",
    bio:
      "Alex has over 15 years of experience in corporate tax strategy and client advisory. He is passionate about helping businesses grow sustainably while keeping compliance simple.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "https://linkedin.com/in/alexmiller",
  },
  {
    name: "Emily Jones",
    title: "Senior Manager",
    role: "Leadership",
    bio:
      "Emily specializes in audit and assurance services, with a focus on nonprofits and healthcare organizations. She’s dedicated to building long-term client relationships.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    linkedin: "https://linkedin.com/in/emilyjones",
  },
  {
    name: "Jordan Smith",
    title: "Staff Accountant",
    role: "Staff",
    bio:
      "Jordan supports the accounting team with payroll, bookkeeping, and tax filings. He enjoys simplifying complex processes for clients and ensuring accuracy in every detail.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    linkedin: "https://linkedin.com/in/jordan-smith",
  },
  {
    name: "Taylor Nguyen",
    title: "Tax Associate",
    role: "Staff",
    bio:
      "Taylor focuses on preparing individual and business tax returns. She is especially skilled at helping small businesses optimize deductions and improve cash flow.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    linkedin: "https://linkedin.com/in/taylor-nguyen",
  },
];

function Team() {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState(null); // expand/collapse one bio at a time

  const list =
    filter === "All" ? TEAM_MEMBERS : TEAM_MEMBERS.filter((m) => m.role === filter);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-700 text-white pt-16 relative">
      {/* soft glows to match Home/About/Contact */}
      <div className="absolute -top-40 -left-24 w-[28rem] h-[28rem] bg-white/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-48 -right-32 w-[32rem] h-[32rem] bg-white/10 blur-3xl rounded-full" />

      {/* Header */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Our Team</h1>
        <div className="w-20 h-1 bg-white/70 mx-auto mt-3 mb-6 rounded" />
        <p className="text-white/90 max-w-2xl mx-auto">
          Meet the professionals driving our commitment to excellence.
        </p>
      </div>

      {/* Role filter (glass pills) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-6 flex justify-center flex-wrap gap-2">
        {["All", "Leadership", "Staff"].map((r) => (
          <button
            key={r}
            onClick={() => setFilter(r)}
            className={`px-4 py-2 rounded-full text-sm border backdrop-blur
              ${
                filter === r
                  ? "bg-white text-sky-900 border-white/70 shadow"
                  : "bg-white/20 text-white border-white/30 hover:bg-white/30"
              }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Cards (glassy, elevated, organized) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((m, i) => {
            const isOpen = openIndex === i;
            return (
              <article
                key={m.name}
                className="bg-white/80 text-slate-900 backdrop-blur rounded-2xl border border-white/60 shadow hover:shadow-lg hover:-translate-y-0.5 transition p-6 flex flex-col"
              >
                {/* header */}
                <div className="text-center">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-28 h-28 object-cover rounded-full border-4 border-white mx-auto mb-4 shadow-sm"
                  />
                  <h3 className="text-xl font-semibold">{m.name}</h3>
                  <p className="text-sm text-sky-800 font-medium">{m.title}</p>
                  <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-100">
                    {m.role}
                  </span>
                </div>

                {/* bio */}
                <div className="mt-5 text-center">
                  <p className={`text-slate-700 text-sm ${isOpen ? "" : "line-clamp-3"}`}>
                    {m.bio}
                  </p>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="mt-3 inline-block text-sky-800 hover:underline text-sm"
                  >
                    {isOpen ? "Show less" : "Read more"}
                  </button>
                </div>

                {/* actions (spaced, with divider) */}
                <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-center">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-sky-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-900 transition"
                  >
                    {/* simple LinkedIn glyph */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="opacity-90"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.78-2.2C20.4 8 24 10.42 24 16.29V24h-4v-6.73c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V24h-4V8z"/>
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Uniform Back/Next (fixed slide-in via PageNav with clear labels) */}
        <PageNav back="/about" backLabel="Back: About" next="/services" nextLabel="Next: Services" always />
      </div>
    </div>
  );
}

export default Team;
