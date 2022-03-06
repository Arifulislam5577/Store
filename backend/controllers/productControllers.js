import PRODUCT from "../models/PRODUCT.js";
import asyncHandler from "express-async-handler";

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await PRODUCT.find({});
  const productCount = await PRODUCT.countDocuments();

  if (products.length > 0) {
    res.status(200).json({ productCount, products });
  } else {
    res.status(404);
    throw new Error("Products not found");
  }
});
