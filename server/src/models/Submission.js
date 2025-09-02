// server/src/models/Submission.js
import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema(
  {
    kind: { type: String, required: true }, // "contact" | "application" | ...
    // Common fields (all optional except kind)
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
    interest: String,
    source: String,
    // Careers-specific (optional)
    role: String,
    jobId: String,
    linkedIn: String,  // keep this for backward compat
    linkedin: String,  // if frontend sends `linkedin`
    portfolio: String,
    coverLetter: String,
  },
  { timestamps: true }
);

export default mongoose.models.Submission || mongoose.model("Submission", SubmissionSchema);
