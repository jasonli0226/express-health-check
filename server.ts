import express from "express";
import { manager } from "./manager";
// winston logger

const app = express();

app.get("/foo", (req, res) => {
  const pid = process.pid;
  res.json({ message: "bar", pid });
});

const SERVER_PORT = process.env.SERVER_PORT || 8080;
app.listen(SERVER_PORT, () => {
  console.log(`[info] listening to SERVER PORT ${SERVER_PORT}`);
});

const MANAGEMENT_PORT = process.env.MANAGEMENT_PORT || 8090;
manager.listen(MANAGEMENT_PORT, () => {
  console.log(`[info] listening to MANAGEMENT PORT ${MANAGEMENT_PORT}`);
});
