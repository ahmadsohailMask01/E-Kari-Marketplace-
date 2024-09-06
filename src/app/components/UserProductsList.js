import React from "react";
import styles from "../../../styles/products.module.css";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import RemoveButton from "./removeButton";
import { BASE_API_URL } from "../../../utils/constants";
import Image from "next/image";

const getProducts = async (email) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/UserProduct/${email}`, {
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

const UserProductslist = async ({ email }) => {
  const { emailToFind } = email;
  const { items } = await getProducts(emailToFind);
  const pk_currency = Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  });
  return (
    <>
      {items.length <= 0
        ? "No Products to Show"
        : items.map((t) => (
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
                    {pk_currency.format(t.product_price)} PKR
                  </span>
                  <span
                    className={`${styles.product_description} ${styles.select}`}
                  >
                    <strong className={styles.select}>Description:</strong>{" "}
                    {t.product_description}
                  </span>
                </div>
              </div>
              <div className={styles.icons}>
                <RemoveButton id={t._id} />
                <Link
                  href={`/editProduct/${t._id}`}
                  title="Edit this Product"
                  className={styles.edit_btn}
                >
                  <FaEdit className={styles.icon2} />
                  Edit
                </Link>
              </div>
            </div>
          ))}
    </>
  );
};

export default UserProductslist;
