import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import enquiryRoutes from "./routes/enquiry.routes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "CRM API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/enquiries", enquiryRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({
      message: "Invalid JSON body",
    });
  }

  console.error("Unhandled error:", err.message);

  return res.status(500).json({
    message: "Internal server error",
  });
});

export default app;
