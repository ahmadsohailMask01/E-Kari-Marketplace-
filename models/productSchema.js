import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    image: String,
    product_title: String,
    product_price: Number,
    product_description: String,
    userEmail: String,
    userName: String,
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
