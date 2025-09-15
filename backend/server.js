import express from "express";
import cors from "cors";
import { parseMessage } from "./prompts.js";

const app = express();
app.use(cors());
app.use(express.json());

let requests = [];

// Endpoint: send a user message
app.post("/api/messages", (req, res) => {
  const { text } = req.body;
  const parsed = parseMessage(text);
  const request = { id: requests.length + 1, ...parsed };
  requests.push(request);
  res.json(request);
});

// Endpoint: get all requests
app.get("/api/requests", (req, res) => {
  res.json(requests);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
