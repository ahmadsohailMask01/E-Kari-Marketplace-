import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Product from "../../../../models/productSchema";
import { GET as handler } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(handler);
  const emailToFind = session.user.email;
  await connectMongoDB();
  const products = await Product.find({
    userEmail: emailToFind,
  });
  console.log(products);
  return NextResponse.json({ products });
}
