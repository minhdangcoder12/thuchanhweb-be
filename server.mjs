/**
 * API photo-sharing — chạy riêng cho CodeSandbox / deploy backend.
 * CodeSandbox thường set PORT; CORS mở để frontend sandbox gọi được.
 */
import express from "express";
import models from "./models.js";

const PORT = Number(process.env.PORT) || 3001;
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

app.listen(PORT, () => {
  console.log(`API: http://localhost:${PORT}`);
});
