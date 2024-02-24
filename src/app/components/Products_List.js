import React from "react";
import styles from "../../../styles/products.module.css";
import Link from "next/link";
import { BASE_API_URL } from "../../../utils/constants";

const getProducts = async () => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/products`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

const Productslist = async () => {
  // const { products } = await getProducts();
  const products = "";
  console.log(products);
  const curr = Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  });
  return (
    <>
      {products.length <= 0
        ? "No Products to Show"
        : products.map((t) => (
            <div
              className={styles.product}
              key={t._id}
              title={`Order ID = ${t._id}`}
            >
              <span className={`${styles.product_title} ${styles.select}`}>
                {t.product_title}
              </span>
              <span className={styles.select}>
                <strong className={styles.select}>Price:</strong>{" "}
                {curr.format(t.product_price)} PKR
              </span>
              <span
                className={`${styles.product_description} ${styles.select}`}
              >
                <strong className={styles.select}>Description:</strong>{" "}
                {t.product_description}
              </span>
              <Link
                href={`/request_order/${t._id}`}
                className={styles.request_button}
                title="Request this Product"
              >
                Request Order
              </Link>
            </div>
          ))}
    </>
  );
};

export default Productslist;
