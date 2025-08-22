// src/pages/Careers.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; 
import PageNav from "../components/PageNav";

function Careers() {
  const ALL_JOBS = [
    { title: "Staff Accountant", dept: "Accounting", type: "Full-time", location: "Sacramento, CA", desc: "Manage client finances, prepare accurate reports, and ensure compliance." },
    { title: "Tax Associate", dept: "Tax", type: "Full-time", location: "Hybrid · Sacramento, CA", desc: "Assist individuals and businesses with tax planning and filing." },
    { title: "Audit Intern", dept: "Audit", type: "Internship", location: "On-site · Sacramento, CA", desc: "Support audit teams with financial reviews and compliance checks." },
    { title: "Financial Analyst", dept: "Advisory", type: "Full-time", location: "Remote (US)", desc: "Analyze data, create forecasts, and provide strategic recommendations." },
    { title: "HR & Recruitment Coordinator", dept: "Operations", type: "Full-time", location: "Hybrid · Sacramento, CA", desc: "Help us find and onboard top talent to grow our team." },
    { title: "Marketing Intern", dept: "Marketing", type: "Internship", location: "On-site · Sacramento, CA", desc: "Assist in campaigns, social content, and brand materials." }
  ];

  const DEPTS = ["All", "Accounting", "Tax", "Audit", "Advisory", "Operations", "Marketing"];

  const [dept, setDept] = useState("All");
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("");

  const filtered = dept === "All" ? ALL_JOBS : ALL_JOBS.filter(j => j.dept === dept);

  const startApply = (title) => { setRole(title); setOpen(true); };
  const closeApply = () => { setOpen(false); setRole(""); };
  const submitApply = (e) => { e.preventDefault(); alert("Application submitted! (demo)"); closeApply(); };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-700 pt-16 pb-28 relative text-white">
      <div className="pointer-events-none -z-10 absolute -top-40 -left-24 w-[28rem] h-[28rem] bg-white/10 blur-3xl rounded-full" />
      <div className="pointer-events-none -z-10 absolute -bottom-48 -right-32 w-[32rem] h-[32rem] bg-white/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Join Our Team</h1>
          <div className="w-20 h-1 bg-white/70 mx-auto mt-3 rounded" />
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            We value collaboration, growth, and a commitment to excellence. Explore roles and grow with BlueOak.
          </p>
        </header>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Great benefits", "Mentorship", "Hybrid options", "Career mobility"].map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {DEPTS.map(d => (
            <button
              key={d}
              onClick={() => setDept(d)}
              className={`px-3 py-1.5 rounded-full text-sm transition
                ${dept === d
                  ? "bg-white text-indigo-900 font-semibold"
                  : "bg-white/10 border border-white/30 hover:bg-white/20"}`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(job => (
            <div
              key={job.title}
              className="bg-white/80 backdrop-blur rounded-2xl border border-white/60 shadow hover:shadow-lg hover:translate-y-[-2px] transition text-slate-900 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                    {job.dept}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">{job.location}</p>
                <p className="text-sm text-slate-600">{job.type}</p>
                <div className="my-4 h-px bg-slate-200" />
                <p className="text-slate-800 text-sm leading-relaxed flex-1">{job.desc}</p>

                {/* footer sticks to bottom */}
                <div className="mt-5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => startApply(job.title)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-800 text-white hover:bg-sky-900 transition"
                  >
                    Apply →
                  </button>
                  <span className="text-xs text-slate-500">Posted · 2w ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA band */}
        <div className="text-center mt-16 bg-white/80 backdrop-blur p-8 rounded-2xl border border-white/60 shadow text-slate-900">
          <h2 className="text-2xl font-semibold">Not seeing the right role?</h2>
          <p className="text-slate-700 mt-2">
            We’re always open to meeting talented people who share our vision.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block bg-sky-800 text-white px-6 py-2 rounded-lg shadow hover:bg-sky-900 transition"
          >
            Contact HR
          </Link>
        </div>

        <div className="mt-12">
          <PageNav back="/services" backLabel="Back: Services" next="/newsroom" nextLabel="Next: Newsroom" always />
        </div>
      </div>

      {/* Application Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="apply-title">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 id="apply-title" className="text-xl font-semibold text-slate-900">Apply for {role}</h3>
              <button onClick={closeApply} aria-label="Close application form" className="text-slate-500 hover:text-slate-700 text-xl leading-none">×</button>
            </div>

            <form className="space-y-4" onSubmit={submitApply}>
              <div className="grid sm:grid-cols-2 gap-3">
                <input required type="text" placeholder="First name" className="w-full border border-slate-300 p-2 rounded" />
                <input required type="text" placeholder="Last name" className="w-full border border-slate-300 p-2 rounded" />
              </div>
              <input required type="email" placeholder="Email" className="w-full border border-slate-300 p-2 rounded" />
              <input type="tel" placeholder="Phone (optional)" className="w-full border border-slate-300 p-2 rounded" />
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Resume (PDF or DOC)</label>
                <input required type="file" accept=".pdf,.doc,.docx" className="w-full border border-slate-300 p-2 rounded bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Cover Letter (optional)</label>
                <textarea rows={4} placeholder="Tell us why you're a great fit…" className="w-full border border-slate-300 p-2 rounded" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <input type="url" placeholder="LinkedIn URL (optional)" className="w-full border border-slate-300 p-2 rounded" />
                <input type="url" placeholder="Portfolio URL (optional)" className="w-full border border-slate-300 p-2 rounded" />
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" required className="accent-sky-800" />
                I consent to the processing of my application data.
              </label>
              <div className="mt-4 flex items-center justify-end gap-3">
                <button type="button" onClick={closeApply} className="px-4 py-2 rounded border border-slate-300 hover:bg-slate-50">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-sky-800 text-white hover:bg-sky-900">Submit Application</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;
