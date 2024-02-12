import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Product from "../../../../../models/productSchema";
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: product_title,
    newPrice: product_price,
    newDescription: product_description,
  } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, {
    product_title,
    product_price,
    product_description,
  });
  return NextResponse.json({ message: "Product Updated!" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
