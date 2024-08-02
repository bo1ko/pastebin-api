import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";


dotenv.config();

const port = process.env.PORT || 3000;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbOptions = process.env.DB_OPTIONS;
const dbURI = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?${dbOptions}`;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(port, () => {
      console.log("SERVER OK");
    });
    console.log("DB OK");
  })
  .catch((err) => console.log("DB ERROR", err));
