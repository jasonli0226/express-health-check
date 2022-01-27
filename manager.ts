import express from "express";
import os from "os";

// https://github.com/siimon/prom-client
import prometheus from "prom-client";

const collectDefaultMetrics = prometheus.collectDefaultMetrics;
const Registry = prometheus.Registry;
const register = new Registry();

collectDefaultMetrics({ register });

export const manager = express();

manager.use((req, res, next) => {
  console.log(`[INFO] request path: ${req.path},,, method: ${req.method}`);
  next();
});

manager.get("/health", (req, res) => {
  const freemem = os.freemem();
  const pid = process.pid;
  res.json({ freemem, pid });
});

manager.get("/prometheus", async (req, res) => {
  const metrics = await register.metrics();
  res.set("Content-Type", register.contentType);
  res.end(metrics);
});
