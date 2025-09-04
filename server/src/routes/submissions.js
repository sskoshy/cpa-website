// server/src/routes/submissions.js
import express from "express";
import Submission from "../models/Submission.js";
import Job from "../models/Job.js";

const router = express.Router();

// --- CORS preflight for write endpoints (so browsers don't 405 on OPTIONS) ---
router.options(
  [
    "/contact",
    "/applications",
    "/portal/login",
    "/portal/forgot",
    "/portal/request-access"
  ],
  (_req, res) => res.sendStatus(204)
);

// -------------------- JOBS --------------------
router.get("/jobs", async (_req, res) => {
  try {
    const jobs = await Job.find({}).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    console.error("Jobs list error:", err);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

// -------------------- CONTACT --------------------
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
    res.status(500).json({ ok: false, error: "Failed to save contact." });
  }
});

// -------------------- CAREERS APPLICATIONS --------------------
router.post("/applications", async (req, res) => {
  try {
    const {
      name, email, phone, coverLetter, role, jobId, linkedin, portfolio,
      firstName, lastName, linkedIn,
    } = req.body || {};

    const finalName =
      (name && name.trim()) ||
      `${(firstName || "").trim()} ${(lastName || "").trim()}`.trim();

    const finalLinkedIn = (linkedin || linkedIn)?.trim();

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
    res.status(500).json({ ok: false, error: "Failed to save application." });
  }
});

// -------------------- CLIENT PORTAL: LOGIN + DOCS --------------------
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

router.get("/portal/documents", (_req, res) => {
  res.json({
    ok: true,
    items: [
      { id: "doc-1", name: "2024 Tax Return.pdf", size: "1.2 MB", uploadedAt: "2025-03-01" },
      { id: "doc-2", name: "Q2 Financials.xlsx", size: "420 KB", uploadedAt: "2025-07-15" }
    ]
  });
});

// -------------------- CLIENT PORTAL: NEW ENDPOINTS --------------------
// Forgot password
router.post("/portal/forgot", async (req, res) => {
  try {
    const { email } = req.body || {};
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ ok: false, error: "Valid email required" });
    }

    await Submission.create({
      kind: "portal-forgot",
      email: String(email).trim(),
      source: "client-portal",
    });

    // In production you’d generate a token & send email.
    return res.json({ ok: true, message: "If that email exists, reset instructions were sent." });
  } catch (err) {
    console.error("forgot error:", err);
    return res.status(500).json({ ok: false, error: "Failed to process request" });
  }
});

// Request portal access
router.post("/portal/request-access", async (req, res) => {
  try {
    const { name, email, company } = req.body || {};
    if (!name?.trim() || !email?.trim()) {
      return res.status(400).json({ ok: false, error: "Name and email are required" });
    }

    await Submission.create({
      kind: "portal-access-request",
      name: name.trim(),
      email: email.trim(),
      company: company?.trim(),
      source: "client-portal",
    });

    // In production you’d notify staff, kick off onboarding, etc.
    return res.json({ ok: true, message: "Access request received" });
  } catch (err) {
    console.error("request-access error:", err);
    return res.status(500).json({ ok: false, error: "Failed to submit access request" });
  }
});

// Reports (simple demo list)
router.get("/portal/reports", async (_req, res) => {
  try {
    return res.json({
      ok: true,
      items: [
        { id: "r-2024-yr", name: "2024 Year-End Report.pdf", size: "2.4 MB", generatedAt: "2025-02-15" },
        { id: "r-2025-q2", name: "2025 Q2 Review.pdf", size: "1.1 MB", generatedAt: "2025-07-10" },
      ],
    });
  } catch (err) {
    console.error("reports error:", err);
    return res.status(500).json({ ok: false, error: "Failed to load reports" });
  }
});

export default router;
