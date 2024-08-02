import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// choice view engine
app.set("view engine", "ejs");
// set path to view folder
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
