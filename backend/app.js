import "dotenv/config";
import express from "express";
import { connectDB } from "./src/config/db.js";

const app = express();
await connectDB();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
