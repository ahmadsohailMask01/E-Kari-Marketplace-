import { transporter, mailOptions } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { name, email, phone, message } = await req.json();
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Contact Request",
      text: "You have a Contact Message from Client!",
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
      .value_msg {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        color: #282c34;
        font-size: 20px;
        font-weight:400;
      }
    </style>
  </head>
  <body>
    <div class="order_container">
      <h1 class="order_head">PAKChem Traders</h1>
      <h1 class="order_head">Contact Details</h1>
      <label htmlFor="" class="label_info">Client Name:</label>
      <h4 class="value">${name}</h4>
      <label htmlFor="" class="label_info">Client Email:</label>
      <h4 class="value">${email}</h4>
      <label htmlFor="" class="label_info">Client Phone No.</label>
      <h4 class="value">${phone}</h4>
      <label htmlFor="" class="label_info">Message from Client:</label>
      <h4 class="value_msg">${message}</h4>
    </div>
  </body>
</html>
`,
    });
    return NextResponse.json(
      { message: "Contact Details sent Successfully" },
      { status: 203 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 405 });
  }
}
