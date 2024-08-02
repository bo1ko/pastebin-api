import express from "express";
import { authRoutes } from "./routes/index.js";

const app = express();

app.use(express.json());

app.use('/api/v1/authorization', authRoutes);

export default app;
