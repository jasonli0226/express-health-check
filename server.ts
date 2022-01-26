import express from "express";
import os from "os";
// winston logger

const app = express();
const manager = express();

const SERVER_PORT = process.env.SERVER_PORT || 8080;
const MANAGEMENT_PORT = process.env.MANAGEMENT_PORT || 8090;

app.get("/foo", (req, res) => {
  res.json({ message: "bar" });
});

manager.get("/health", (req, res) => {
  const freemem = os.freemem();
  res.json({ freemem });
});

app.listen(SERVER_PORT, () => {
  console.log(`[info] listening to SERVER PORT ${SERVER_PORT}`);
});

manager.listen(MANAGEMENT_PORT, () => {
  console.log(`[info] listening to MANAGEMENT PORT ${MANAGEMENT_PORT}`);
});
