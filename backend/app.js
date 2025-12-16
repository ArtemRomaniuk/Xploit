import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import catalogRouter from "./src/routes/catalogRoutes.js";
import userRouter from "./src/routes/userRoutes.js";
import questRouter from "./src/routes/questRoutes.js";

const app = express();
await connectDB();

// Global middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("./uploads"));

// Routes
app.use("/api/catalog", catalogRouter);
app.use("/api/quest", questRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
