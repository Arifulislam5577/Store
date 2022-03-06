import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rate: { type: Number, required: true },
  count: { type: Number, required: true },
});

const PRODUCT = mongoose.model("Product", productSchema);

export default PRODUCT;
