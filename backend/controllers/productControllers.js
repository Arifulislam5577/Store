import PRODUCT from "../models/PRODUCT.js";
import asyncHandler from "express-async-handler";
import ApiFeatures from "../utils/apiFeature.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  const productCount = await PRODUCT.countDocuments();
  const resultPerPage = 9;

  const apiFeature = new ApiFeatures(PRODUCT.find(), req.query)
    .search()
    .filter()
    .paginate(resultPerPage);
  const products = await apiFeature.query;
  const result = await products.length;

  if (result > 0) {
    res.status(200).json({ productCount, resultPerPage, result, products });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
