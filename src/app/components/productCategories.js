import React from "react";
import styles from "../../../styles/products.module.css";
import { BASE_API_URL } from "../../../utils/constants";
import design from "../../../styles/productCategories.module.css";
import Image from "next/image";

const getProductbyId = async (id) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/productCategories/${id}`, {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Product");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const ProductCategories = async ({ id }) => {
  const { product } = await getProductbyId(id);
  const pk_currency = Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  });
  return (
    <>
      <section className={design.section}>
        <div className={design.container}>
          {product.length <= 0
            ? "No Products to Show"
            : product.map((t) => (
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
                      <span
                        className={`${styles.product_title} ${styles.select}`}
                      >
                        {t.product_title}
                      </span>
                      <span className={styles.select}>
                        <strong className={styles.select}>Price:</strong>{" "}
                        {pk_currency.format(t.product_price)} PKR
                      </span>
                      <span
                        className={`${styles.product_description} ${styles.select}`}
                      >
                        <strong className={styles.select}>
                          Product Category:
                        </strong>{" "}
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
                </div>
              ))}
        </div>
      </section>
    </>
  );
};

export default ProductCategories;
