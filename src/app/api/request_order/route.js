import { transporter, mailOptions } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const price_format = Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  });

  const {
    Product_title,
    Product_price,
    client_name,
    client_email,
    client_phone,
    product_amount,
    client_address,
    new_price,
  } = await req.json();
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New Order",
      text: "New Order is Confirmed!",
      html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Order</title>
    <style>
      .order_container {
        padding: 2%;
        border-radius: 10px;
        border: 1px solid darkgray;
        background-color: #f3f3f3;
        box-shadow: 0px 0px 10px lightgray;
      }
      .order_head {
        align-self: center;
        color: #ff5820;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 45px;
        font-weight: 700;
      }
      .label_info {
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        color: #3b3b3b;
        font-size: 25px;
      }
      .value {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        color: #282c34;
        font-size: 27px;
      }
    </style>
  </head>
  <body>
    <div class="order_container">
      <h1 class="order_head">PAKChem Traders</h1>
      <h1 class="order_head">Order Summary</h1>
      <label htmlFor="" class="label_info">Product Title:</label>
      <h2 class="value">${Product_title}</h2>
      <label htmlFor="" class="label_info">Product Price:</label>
      <h3 class="value">${price_format.format(Product_price)} PKR</h3>
      <label htmlFor="" class="label_info">Client Name:</label>
      <h4 class="value">${client_name}</h4>
      <label htmlFor="" class="label_info">Client Email:</label>
      <h4 class="value">${client_email}</h4>
      <label htmlFor="" class="label_info">Client Phone No.</label>
      <h4 class="value">${client_phone}</h4>
      <label htmlFor="" class="label_info">Quantity of Product:</label>
      <h4 class="value">${product_amount}</h4>
      <label htmlFor="" class="label_info">Client Address:</label>
      <h4 class="value">${client_address}</h4>
      <label htmlFor="" class="label_info">Total Price of Order:</label>
      <h4 class="value">${price_format.format(new_price)} PKR</h4>
    </div>
  </body>
</html>

`,
    });
    return NextResponse.json(
      { message: "Order Sent Successfully" },
      { status: 203 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 405 });
  }
}
