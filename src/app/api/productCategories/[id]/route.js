import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Product from "../../../../../models/productSchema";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.find({ productCategory: id });
  return NextResponse.json({ product }, { status: 200 });
}
