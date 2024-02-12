import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    product_title: String,
    product_price: Number,
    product_description: String,
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
