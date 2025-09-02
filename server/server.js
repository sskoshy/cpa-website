// server/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import submissionsRouter from "./src/routes/submissions.js";


dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://sskoshy.github.io"],
    credentials: true,
  })
);
app.use(express.json());

async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("❌ MONGO_URI missing in .env");
    process.exit(1);
  }
  try {
    await mongoose.connect(uri, { dbName: "cpa" });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err?.message || err);
    process.exit(1);
  }
}
await connectDB();

app.get("/api/health", (_req, res) =>
  res.json({ ok: true, time: new Date().toISOString() })
);
app.get("/", (_req, res) => res.send("API is running..."));

app.use("/api", submissionsRouter);

// ✅ run on 5001 to match CRA proxy
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

function listRoutes(app) {
  const out = [];
  app._router.stack.forEach((layer) => {
    if (layer.route?.path) {
      const methods = Object.keys(layer.route.methods).join(",").toUpperCase();
      out.push(`${methods} ${layer.route.path}`);
    } else if (layer.name === "router" && layer.handle.stack) {
      layer.handle.stack.forEach((h) => {
        if (h.route) {
          const methods = Object.keys(h.route.methods).join(",").toUpperCase();
          out.push(`${methods} /api${h.route.path}`);
        }
      });
    }
  });
  console.log("🧭 Registered routes:\n" + out.sort().join("\n"));
}
listRoutes(app); // TEMP

