/**
 * API photo-sharing — chạy riêng cho CodeSandbox / deploy backend.
 * CodeSandbox thường set PORT; CORS mở để frontend sandbox gọi được.
 */
import express from "express";
import models from "./models.js";

function listenPort() {
  const raw = process.env.PORT;
  if (raw !== undefined && raw !== "") {
    const n = Number(raw);
    if (!Number.isNaN(n) && n > 0) {
      return n;
    }
  }
  return 3001;
}

const PORT = listenPort();
const HOST = process.env.HOST || "0.0.0.0";
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }
  next();
});

app.get("/test/info", (req, res) => {
  res.json(models.schemaInfo());
});

app.get("/user/list", (req, res) => {
  res.json(models.userListModel());
});

app.get("/user/:id", (req, res) => {
  const user = models.userModel(req.params.id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.json(user);
});

app.get("/photosOfUser/:id", (req, res) => {
  res.json(models.photoOfUserModel(req.params.id));
});

const server = app.listen(PORT, HOST, () => {
  console.log(`API listening on http://${HOST}:${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(
      `[EADDRINUSE] Port ${PORT} đang bị dùng — thường do chạy server 2 lần. CodeSandbox: Restart sandbox, chỉ để một terminal/task. Local: PORT=3002 npm start`,
    );
    process.exit(1);
  }
  throw err;
});
