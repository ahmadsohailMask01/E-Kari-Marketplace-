"use client";
import React, { useState } from "react";
import styles from "../../../styles/addProduct.module.css";
import Link from "next/link";
import { RiArrowGoBackLine } from "react-icons/ri";
import { toast as notify } from "react-toastify";
import { useRouter } from "next/navigation";
import { BASE_API_URL } from "../../../utils/constants";

const Request_Product = ({ title, price }) => {
  const router = useRouter();

  const [Product_title] = useState(title);
  const [Product_price] = useState(price);
  const [client_name, set_clientname] = useState("");
  const [client_email, set_clientemail] = useState("");
  const [client_phone, set_clientphone] = useState("");
  const [product_amount, set_productamount] = useState("1");
  const [client_address, set_clientaddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${BASE_API_URL}/api/request_order`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          Product_title,
          Product_price,
          client_name,
          client_email,
          client_phone,
          product_amount,
          client_address,
          new_price,
        }),
      });
      notify.success("Your Order Request is Sent!");
      router.push("/products");
    } catch (error) {
      console.log(error);
    }
  };

  const calculate_Price = () => {
    if (product_amount < 0 || product_amount == "") {
      notify.info("Your Quantity must be greater than 0!");
      return 0;
    } else {
      let x = Number.parseInt(Product_price);
      let y = Number.parseInt(product_amount);
      return x * y;
    }
  };

  const new_price = calculate_Price();
  let pkr = Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  });

  return (
    <>
      <section className={styles.form_section}>
        <Link href={"/products"} title="Go back to products">
          <RiArrowGoBackLine className={styles.go_back} />
        </Link>
        <div className={styles.form_container}>
          <label className={styles.form_head}>
            Here You can Request your Order
          </label>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.product_info_label}>Product Title:</label>
            <input
              type="text"
              disabled={true}
              value={Product_title}
              className={styles.input}
              placeholder="Product Title"
              required={true}
            />
            <label className={styles.product_info_label}>Product Price:</label>
            <input
              type="text"
              disabled={true}
              value={Product_price}
              className={styles.input}
              placeholder="Product Price in PKR"
              required={true}
            />

            <label className={styles.info_form_label}>
              <hr />
              Provide your additional details to complete the order
              <hr />
            </label>

            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
              required={true}
              onChange={(e) => set_clientname(e.target.value)}
              value={client_name}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={styles.input}
              required={true}
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              onChange={(e) => set_clientemail(e.target.value)}
              value={client_email}
            />
            <input
              type="text"
              placeholder="Your Phone No."
              className={styles.input}
              required={true}
              onChange={(e) => set_clientphone(e.target.value)}
              value={client_phone}
            />
            <label className={styles.product_info_label}>
              Product Quantity:
            </label>
            <input
              type="number"
              placeholder="Enter Product Quantity"
              className={styles.input}
              min={"1"}
              required={true}
              onChange={(e) => set_productamount(e.target.value)}
              value={product_amount}
            />
            <label className={styles.price_label}>
              Your Total Price will be:{" "}
              <strong style={{ color: `#571d46` }}>
                {pkr.format(new_price)} PKR
              </strong>
            </label>
            <input
              type="text"
              placeholder="Your Street Address"
              className={styles.input}
              required={true}
              onChange={(e) => set_clientaddress(e.target.value)}
              value={client_address}
            />

            <button
              type="submit"
              className={styles.button}
              title="Request Product"
            >
              Request Order
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Request_Product;
