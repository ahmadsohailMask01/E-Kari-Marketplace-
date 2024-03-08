import React from "react";
import Productslist from "./Products_List";
import styles from "../../../styles/products.module.css";

const LoadProducts = () => {
  return (
    <>
      <div className={styles.products_container} id="container">
        <Productslist />
      </div>
    </>
  );
};

export default LoadProducts;
