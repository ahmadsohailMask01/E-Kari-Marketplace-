import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    product_title: String,
    product_price: Number,
    product_description: String,
    // medium: String,
    // dimensions: String,
    // imageUrl: String,
    // status: String,
    // artist_emailId: String,
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
