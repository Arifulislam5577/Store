import mongoose from "mongoose";
import dotenv from "dotenv";
import PRODUCT from "../models/PRODUCT.js";
import { products } from "../utils/products.js";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Database connected");
});

const seedProducts = async () => {
  try {
    await PRODUCT.deleteMany();
    console.log("Product deleted");
    await PRODUCT.insertMany(products);
    console.log("Product added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedProducts();
