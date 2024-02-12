import React from "react";
import Productslist from "./Products_List";
import styles from "../../../styles/products.module.css";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <section className={styles.section_products}>
        <div className={styles.products_container}>
          <Productslist />
        </div>
      </section>
    </>
  );
};

export default Products;
