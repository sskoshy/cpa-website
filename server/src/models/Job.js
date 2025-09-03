import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    dept:  { type: String, required: true },
    type:  { type: String, default: "Full-time" },
    location: { type: String, default: "Remote/Hybrid" },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
