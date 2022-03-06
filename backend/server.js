import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import productRouter from "./routes/productsRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/products", productRouter);

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Database connected");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT + " at " + process.env.NODE_ENV);
});
