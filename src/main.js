import express from "express";
import { databaseConnection } from "./database/model/connection.js";
import { env } from "./config/env.service.js";
import authRouter from "./module/auth/auth.controller.js";

const app = express();
app.use(express.json());

app.get('/health-check', (req, res) => {
  res.json({ message: 'server is running' });
});

try {
  await databaseConnection();
} catch (error) {
  console.error('Failed to connect to database:', error.message);
  process.exit(1);
}

app.use("/auth", authRouter);










