import React from "react";
import UserProductslist from "./UserProductsList";
import styles from "../../../styles/products.module.css";
import Link from "next/link";
import Image from "next/image";
import Load from "./load";

const User_Products = () => {
  return (
    <>
      <section className={styles.section_products}>
        <Link href={"/addProduct"} className={styles.btn} title="Add Product">
          Add Product
        </Link>
        <span className={styles.product_list_label}>
          Products Listed by You
        </span>
        <Load />
        <div className={styles.products_container} id="container">
          <UserProductslist />
        </div>
      </section>
    </>
  );
};

export default User_Products;
