import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Product from "../../../../models/productSchema";
import getEmailFromSession from "@/app/components/getEmailFromSession";

export async function POST(request) {
  const {
    image,
    product_title,
    product_price,
    product_description,
    userEmail,
    userName,
  } = await request.json();
  await connectMongoDB();
  await Product.create({
    image,
    product_title,
    product_price,
    product_description,
    userEmail,
    userName,
  });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
  const emailToFind = await getEmailFromSession();
  console.log(emailToFind);
  await connectMongoDB();
  const products = await Product.find({
    userEmail: emailToFind,
  });
  console.log(products);
  return NextResponse.json({ products });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product Deleted" }, { status: 200 });
}
