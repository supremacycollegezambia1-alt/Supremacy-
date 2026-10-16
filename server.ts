import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_ORIGIN?.split(",") ?? false }));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "Supremacy College Zambia Portal API", mode: "starter" });
});

app.get("/api/config", (_req, res) => {
  res.json({
    applicationFeeZMW: 100,
    requestedPaymentProvider: "Airtel Money",
    studentNumberPolicy: "assigned after approved admission",
    staffRoles: ["PRINCIPAL", "REGISTRAR", "LECTURER"],
    note: "Starter API only; authentication, application submission, payment verification and student services must be implemented before production."
  });
});

const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => console.log(`Supremacy College API starter listening on ${port}`));
