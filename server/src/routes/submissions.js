// server/src/routes/submissions.js
import express from "express";
import Submission from "../models/Submission.js";

const router = express.Router();

// Hardcoded demo jobs
const DEMO_JOBS = [
  { _id: "demo-1", title: "Staff Accountant", dept: "Accounting", type: "Full-time", location: "Sacramento, CA", description: "Manage client finances, prepare accurate reports, and ensure compliance." },
  { _id: "demo-2", title: "Tax Associate", dept: "Tax", type: "Full-time", location: "Hybrid · Sacramento, CA", description: "Assist individuals and businesses with tax planning and filing." },
  { _id: "demo-3", title: "Audit Intern", dept: "Audit", type: "Internship", location: "On-site · Sacramento, CA", description: "Support audit teams with financial reviews and compliance checks." },
  { _id: "demo-4", title: "Financial Analyst", dept: "Advisory", type: "Full-time", location: "Remote (US)", description: "Analyze data, create forecasts, and provide strategic recommendations." },
  { _id: "demo-5", title: "HR & Recruitment Coordinator", dept: "Operations", type: "Full-time", location: "Hybrid · Sacramento, CA", description: "Help us find and onboard top talent to grow our team." },
  { _id: "demo-6", title: "Marketing Intern", dept: "Marketing", type: "Internship", location: "On-site · Sacramento, CA", description: "Assist in campaigns, social content, and brand materials." }
];

// Health check
router.get("/health", (_req, res) => res.json({ ok: true }));

// Jobs list (frontend calls this)
router.get("/jobs", (_req, res) => {
  res.json(DEMO_JOBS);
});

// Contact form submission
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message, interest, source } = req.body || {};
    const doc = await Submission.create({
      kind: "contact",
      name,
      email,
      phone,
      message,
      interest,
      source: source || "contact-form",
    });
    res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    console.error("contact error:", err);
    res.status(400).json({ ok: false, error: "Failed to save contact." });
  }
});

// Careers application
router.post("/applications", async (req, res) => {
  try {
    const {
      name, email, phone, coverLetter, role, jobId, linkedin, portfolio,
      firstName, lastName, linkedIn,
    } = req.body || {};

    const finalName =
      (name && name.trim()) ||
      `${(firstName || "").trim()} ${(lastName || "").trim()}`.trim();

    const finalLinkedIn = linkedin || linkedIn;

    const doc = await Submission.create({
      kind: "application",
      role,
      jobId,
      name: finalName,
      email,
      phone,
      linkedIn: finalLinkedIn,
      portfolio,
      coverLetter,
      source: "careers-modal",
    });

    res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    console.error("application error:", err);
    res.status(400).json({ ok: false, error: "Failed to save application." });
  }
});

// List recent submissions (for quick dev checks)
router.get("/submissions", async (_req, res) => {
  try {
    const items = await Submission.find().sort({ createdAt: -1 }).limit(50).lean();
    res.json({ ok: true, items });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Failed to fetch submissions." });
  }
});

// Client portal demo login
router.post("/portal/login", (req, res) => {
  const { email, password } = req.body || {};
  const DEMO_EMAIL = process.env.DEMO_CLIENT_EMAIL || "client@example.com";
  const DEMO_PASS = process.env.DEMO_CLIENT_PASSWORD || "Passw0rd!";

  if (!email || !password) {
    return res.status(400).json({ ok: false, error: "Email and password required" });
  }
  if (email.trim().toLowerCase() !== DEMO_EMAIL.toLowerCase() || password !== DEMO_PASS) {
    return res.status(401).json({ ok: false, error: "Invalid credentials" });
  }
  return res.json({ ok: true, user: { email: DEMO_EMAIL } });
});

// Client portal documents
router.get("/portal/documents", (_req, res) => {
  res.json({
    ok: true,
    items: [
      { id: "doc-1", name: "2024 Tax Return.pdf", size: "1.2 MB", uploadedAt: "2025-03-01" },
      { id: "doc-2", name: "Q2 Financials.xlsx", size: "420 KB", uploadedAt: "2025-07-15" }
    ]
  });
});

export default router;
