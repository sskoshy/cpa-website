// server/src/routes/submissions.js
import express from "express";
import Submission from "../models/Submission.js";
import Job from "../models/Job.js";

const router = express.Router();

console.log("🔌 submissions router loaded"); // TEMP LOG


/**
 * GET /api/jobs
 */
router.get("/jobs", async (_req, res) => {
  try {
    const jobs = await Job.find({}).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    console.error("Jobs list error:", err);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

/**
 * POST /api/jobs
 * Create a new job (used by the seed script)
 */
router.post("/jobs", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    console.error("Create job error:", err);
    res.status(400).json({ error: err.message || "Failed to create job" });
  }
});

router.get("/health", (_req, res) => res.json({ ok: true }));

// Save contact form
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message, interest, source } = req.body;
    const doc = await Submission.create({
      kind: "contact",
      name, email, phone, message, interest,
      source: source || "contact-form",
    });
    res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    console.error("contact error:", err);
    res.status(400).json({ ok: false, error: "Failed to save contact." });
  }
});

// Save careers application
router.post("/applications", async (req, res) => {
  try {
    const {
      name, email, phone, coverLetter, role, jobId, linkedin, portfolio,
      firstName, lastName, linkedIn,
    } = req.body;

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

// Quick dev check: list recent submissions
router.get("/submissions", async (_req, res) => {
  const items = await Submission.find().sort({ createdAt: -1 }).limit(50);
  res.json({ ok: true, items });
});

// POST /api/portal/login (because the router is mounted at /api)
router.post("/portal/login", (req, res) => {
  const { email, password } = req.body || {};
  const DEMO_EMAIL = process.env.DEMO_CLIENT_EMAIL || "client@example.com";
  const DEMO_PASS  = process.env.DEMO_CLIENT_PASSWORD || "Passw0rd!";

  if (!email || !password) {
    return res.status(400).json({ ok: false, error: "Email and password required" });
  }
  if (email.trim().toLowerCase() !== DEMO_EMAIL.toLowerCase() || password !== DEMO_PASS) {
    return res.status(401).json({ ok: false, error: "Invalid credentials" });
  }
  return res.json({ ok: true, user: { email: DEMO_EMAIL } });
});

// GET /api/portal/documents
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
