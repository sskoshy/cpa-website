// src/pages/Careers.jsx
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

/**
 * Works in both modes:
 * - Dev proxy: package.json -> "proxy": "http://localhost:5001"
 *   => keep REACT_APP_API_BASE undefined and we call relative URLs ("/api/...").
 * - Env URL: .env -> REACT_APP_API_BASE=http://localhost:5001
 *   => we'll prefix all requests with that base.
 */
const API_BASE = (process.env.REACT_APP_API_BASE || "").replace(/\/+$/, "");
const withBase = (path) => (API_BASE ? `${API_BASE}${path}` : path);


const DEFAULT_DEPTS = ["All", "Accounting", "Tax", "Audit", "Advisory", "Operations", "Marketing"];

// Simple portal modal so inputs are never blocked by page overlays
function Modal({ open, onBackdrop, children }) {
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-[1000]">
      <div className="absolute inset-0 bg-black/40" onClick={onBackdrop} />
      <div className="relative z-10 flex min-h-full items-center justify-center p-4">
        <div
          className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [dept, setDept] = useState("All");
  const [open, setOpen] = useState(false);
  const [activeJob, setActiveJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // form state
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // fetch jobs (supports proxy or absolute base)
  useEffect(() => {
    (async () => {
      const url = withBase(`/api/jobs`);
      try {
        console.log("Fetching jobs from:", url);
        const res = await fetch(url);
        const data = await res.json().catch(() => []);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setJobs(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("GET /api/jobs failed:", e);
        setError(`Jobs failed: ${e?.message || "unknown"}`);
        setJobs([
          { _id: "demo-1", title: "Staff Accountant", dept: "Accounting", type: "Full-time", location: "Sacramento, CA", description: "Manage client finances, prepare accurate reports, and ensure compliance." },
          { _id: "demo-2", title: "Tax Associate", dept: "Tax", type: "Full-time", location: "Hybrid · Sacramento, CA", description: "Assist individuals and businesses with tax planning and filing." },
          { _id: "demo-3", title: "Audit Intern", dept: "Audit", type: "Internship", location: "On-site · Sacramento, CA", description: "Support audit teams with financial reviews and compliance checks." },
          { _id: "demo-4", title: "Financial Analyst", dept: "Advisory", type: "Full-time", location: "Remote (US)", description: "Analyze data, create forecasts, and provide strategic recommendations." },
          { _id: "demo-5", title: "HR & Recruitment Coordinator", dept: "Operations", type: "Full-time", location: "Hybrid · Sacramento, CA", description: "Help us find and onboard top talent to grow our team." },
          { _id: "demo-6", title: "Marketing Intern", dept: "Marketing", type: "Internship", location: "On-site · Sacramento, CA", description: "Assist in campaigns, social content, and brand materials." }
        ]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const dynamicDepts = useMemo(() => {
    const s = new Set(DEFAULT_DEPTS);
    jobs.forEach((j) => j.dept && s.add(j.dept));
    return Array.from(s);
  }, [jobs]);

  const filtered = useMemo(() => {
    if (dept === "All") return jobs;
    return jobs.filter((j) => (j.dept || "Other") === dept);
  }, [jobs, dept]);

  const startApply = (job) => {
    setActiveJob(job);
    setOpen(true);
    setFirst(""); setLast(""); setEmail(""); setPhone("");
    setCoverLetter(""); setResumeFile(null); setLinkedin(""); setPortfolio("");
    setConsent(false); setSubmitMsg(""); setSubmitting(false);
  };
  const closeApply = () => { setOpen(false); setActiveJob(null); };

  const submitApply = async (e) => {
    e.preventDefault();
    if (!activeJob) return;
    if (!consent) { setSubmitMsg("Please consent to data processing to continue."); return; }

    setSubmitting(true);
    setSubmitMsg("");

    try {
      let res;
      const postUrl = withBase(`/api/applications`);

      if (resumeFile) {
        const fd = new FormData();
        fd.append("name", `${first.trim()} ${last.trim()}`.trim());
        fd.append("email", email.trim());
        if (phone) fd.append("phone", phone.trim());
        if (coverLetter) fd.append("coverLetter", coverLetter.trim());
        if (linkedin) fd.append("linkedin", linkedin.trim());
        if (portfolio) fd.append("portfolio", portfolio.trim());
        fd.append("jobId", activeJob._id || "");
        fd.append("role", activeJob.title || "");
        fd.append("resume", resumeFile);
        console.log("POST applications to:", postUrl, "(FormData)");
        res = await fetch(postUrl, { method: "POST", body: fd });
      } else {
        const body = {
          name: `${first.trim()} ${last.trim()}`.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          coverLetter: coverLetter.trim() || undefined,
          jobId: activeJob._id,
          role: activeJob.title,
          linkedin: linkedin.trim() || undefined,
          portfolio: portfolio.trim() || undefined,
        };
        console.log("POST applications to:", postUrl, "(JSON)");
        res = await fetch(postUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || data?.error || "Failed to submit application");
      setSubmitMsg("Application submitted! We'll be in touch.");
      setTimeout(() => { closeApply(); }, 900);
    } catch (err) {
      setSubmitMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-sky-700 pt-16 pb-28 relative text-white">
      {/* soft glows */}
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
          {["Great benefits", "Mentorship", "Hybrid options", "Career mobility"].map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Dept filter pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {dynamicDepts.map((d) => (
            <button
              key={d}
              onClick={() => setDept(d)}
              className={`px-3 py-1.5 rounded-full text-sm transition ${
                dept === d ? "bg-white text-indigo-900 font-semibold" : "bg-white/10 border border-white/30 hover:bg-white/20"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Loading / Error / Empty states */}
        {loading && <p className="text-center mt-8">Loading roles…</p>}
        {!loading && error && (
          <p className="text-center mt-4 bg-white/80 text-red-800 border border-red-200 rounded px-3 py-2 inline-block">
            {error}
          </p>
        )}
        {!loading && !error && filtered.length === 0 && (
          <p className="text-center mt-8">No openings right now. Check back soon!</p>
        )}

        {/* Job Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job) => (
            <div
              key={job._id || job.title}
              className="bg-white/80 backdrop-blur rounded-2xl border border-white/60 shadow hover:shadow-lg hover:translate-y-[-2px] transition text-slate-900 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                    {job.dept || job.type || "Role"}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">{job.location || "Remote/Hybrid"}</p>
                <p className="text-sm text-slate-600">{job.type || "Full-time"}</p>
                <div className="my-4 h-px bg-slate-200" />
                <p className="text-slate-800 text-sm leading-relaxed flex-1">{job.description || job.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => startApply(job)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-800 text-white hover:bg-sky-900 transition"
                  >
                    Apply →
                  </button>
                  <span className="text-xs text-slate-500">
                    Posted · {new Date(job.createdAt || Date.now() - 12096e5).toLocaleDateString()}
                  </span>
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

      {/* Modal rendered in a portal so inputs are always typeable */}
      <Modal open={open} onBackdrop={closeApply}>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-slate-900">Apply for {activeJob?.title}</h3>
          <button
            onClick={closeApply}
            aria-label="Close application form"
            className="text-slate-500 hover:text-slate-700 text-xl leading-none"
          >
            ×
          </button>
        </div>

        {submitMsg && (
          <div
            className={`mb-3 rounded px-3 py-2 text-sm ${
              /wrong|fail|error/i.test(submitMsg) ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
            }`}
          >
            {submitMsg}
          </div>
        )}

        <form className="space-y-4" onSubmit={submitApply}>
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              required
              type="text"
              placeholder="First name"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              className="w-full border border-slate-300 p-2 rounded"
              autoFocus
            />
            <input
              required
              type="text"
              placeholder="Last name"
              value={last}
              onChange={(e) => setLast(e.target.value)}
              className="w-full border border-slate-300 p-2 rounded"
            />
          </div>

          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-slate-300 p-2 rounded"
          />

          <input
            type="tel"
            placeholder="Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-slate-300 p-2 rounded"
          />

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Resume (PDF or DOC)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
              className="w-full border border-slate-300 p-2 rounded bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Cover Letter (optional)
            </label>
            <textarea
              rows={4}
              placeholder="Tell us why you're a great fit…"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="w-full border border-slate-300 p-2 rounded"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <input
              type="url"
              placeholder="LinkedIn URL (optional)"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="w-full border border-slate-300 p-2 rounded"
            />
            <input
              type="url"
              placeholder="Portfolio URL (optional)"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              className="w-full border border-slate-300 p-2 rounded"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="accent-sky-800"
            />
            I consent to the processing of my application data.
          </label>

          <div className="mt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={closeApply}
              className="px-4 py-2 rounded border border-slate-300 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 rounded bg-sky-800 text-white hover:bg-sky-900 disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit Application"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Careers;
