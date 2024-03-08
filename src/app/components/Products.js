import React from "react";
import styles from "../../../styles/products.module.css";
import Load from "./load";
import LoadProducts from "./loadProducts";

const Products = () => {
  return (
    <>
      <section className={styles.section_products}>
        <Load />
        <LoadProducts />
      </section>
    </>
  );
};

export default Products;
