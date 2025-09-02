// server/scripts/seedJobs.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import Job from "../src/models/Job.js";

dotenv.config();

async function run() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("❌ MONGO_URI missing in .env");
    process.exit(1);
  }
  await mongoose.connect(uri, { dbName: "cpa" });

  const seed = [
    { title: "Staff Accountant", dept: "Accounting", type: "Full-time", location: "Sacramento, CA", description: "Manage client finances, prepare accurate reports, and ensure compliance." },
    { title: "Tax Associate", dept: "Tax", type: "Full-time", location: "Hybrid · Sacramento, CA", description: "Assist individuals and businesses with tax planning and filing." },
    { title: "Audit Intern", dept: "Audit", type: "Internship", location: "On-site · Sacramento, CA", description: "Support audit teams with financial reviews and compliance checks." },
    { title: "Financial Analyst", dept: "Advisory", type: "Full-time", location: "Remote (US)", description: "Analyze data, create forecasts, and provide strategic recommendations." },
    { title: "HR & Recruitment Coordinator", dept: "Operations", type: "Full-time", location: "Hybrid · Sacramento, CA", description: "Help us find and onboard top talent to grow our team." },
    { title: "Marketing Intern", dept: "Marketing", type: "Internship", location: "On-site · Sacramento, CA", description: "Assist in campaigns, social content, and brand materials." }
  ];

  // Optional: clear first so re-seeding is idempotent
  await Job.deleteMany({});
  await Job.insertMany(seed);

  console.log("✅ Seeded jobs:", seed.length);
  await mongoose.disconnect();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
