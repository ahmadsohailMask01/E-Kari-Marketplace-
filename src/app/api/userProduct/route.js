import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Product from "../../../../models/productSchema";
import { GET as handler } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(handler);
  const emailToFind = JSON.stringify(session?.user?.email);
  const finalEmail = emailToFind;
  console.log("Email is: ", finalEmail);
  const email = "info.ahmadsohail97@gmail.com";
  await connectMongoDB();
  const products = await Product.find({
    userEmail: finalEmail,
  });
  console.log(products);
  return NextResponse.json({ products });
}
