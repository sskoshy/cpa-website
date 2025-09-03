// server/src/routes/submissions.js
import express from "express";
import Submission from "../models/Submission.js";
import Job from "../models/Job.js";

const router = express.Router();

// Answer preflight explicitly on the write endpoints
router.options(["/contact", "/applications", "/portal/login"], (_req, res) => res.sendStatus(204));

// Jobs (GET)
router.get("/jobs", async (_req, res) => {
  try {
    const jobs = await Job.find({}).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    console.error("Jobs list error:", err);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

// Contact (POST)
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message, interest, source } = req.body || {};
    const doc = await Submission.create({
      kind: "contact",
      name, email, phone, message, interest,
      source: source || "contact-form",
    });
    res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    console.error("contact error:", err);
    res.status(500).json({ ok: false, error: "Failed to save contact." });
  }
});

// Applications (POST)
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
    res.status(500).json({ ok: false, error: "Failed to save application." });
  }
});

// Client Portal
router.post("/portal/login", (req, res) => {
  const { email, password } = req.body || {};
  const DEMO_EMAIL = process.env.DEMO_CLIENT_EMAIL || "client@example.com";
  const DEMO_PASS  = process.env.DEMO_CLIENT_PASSWORD || "Passw0rd!";
  if (!email || !password) return res.status(400).json({ ok: false, error: "Email and password required" });
  if (email.trim().toLowerCase() !== DEMO_EMAIL.toLowerCase() || password !== DEMO_PASS) {
    return res.status(401).json({ ok: false, error: "Invalid credentials" });
  }
  res.json({ ok: true, user: { email: DEMO_EMAIL } });
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

export default router;
