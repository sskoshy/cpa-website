// server/src/models/Job.js
import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    dept: { type: String, default: "Other" },
    type: { type: String, default: "Full-time" },
    location: { type: String, default: "Remote/Hybrid" },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
