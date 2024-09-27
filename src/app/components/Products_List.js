import React from "react";
import styles from "../../../styles/products.module.css";
import Link from "next/link";
import { BASE_API_URL } from "../../../utils/constants";
import Image from "next/image";

const getProducts = async () => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/products`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Products");
    } else {
      return res.json();
    }
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

const GetProductDesign = async () => {
  const { products } = await getProducts();
  //console.log(products);
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
              <div className={styles.owner}>
                <span style={{ color: `darkgray` }}>
                  Product By: <b style={{ color: `red` }}>{t.userName}</b>
                </span>
              </div>
              <div className={styles.prodInformationRow}>
                <Image
                  src={t.image}
                  width={250}
                  height={200}
                  className={styles.prodImage}
                />
                <div className={styles.prodInfoCol}>
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
                    <strong className={styles.select}>Product Category:</strong>{" "}
                    {t.productCategory}
                  </span>
                  <span
                    className={`${styles.product_description} ${styles.select}`}
                  >
                    <strong className={styles.select}>Description:</strong>{" "}
                    {t.product_description}
                  </span>
                </div>
              </div>
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

const Productslist = () => {
  return <GetProductDesign />;
};

export default Productslist;
