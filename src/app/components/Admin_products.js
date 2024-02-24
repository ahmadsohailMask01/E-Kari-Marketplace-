"use client";
import React, { useEffect } from "react";
import AdminProductslist from "./AdminProductslist";
import styles from "../../../styles/products.module.css";
import loading from "../../../assets/loading.gif";
import Link from "next/link";
import Image from "next/image";

const Admin_Products = () => {
  useEffect(() => {
    const loading_func = () => {
      document.getElementById("loading").style.display = "none";
      document.getElementById("container").style.display = "flex";
    };
    setTimeout(loading_func, 2000);
  }, []);
  return (
    <>
      <section className={styles.section_products}>
        <Link href={"/addProduct"} className={styles.btn} title="Add Product">
          Add Product
        </Link>
        <div className={styles.load} id="loading">
          <span>Loading</span>
          <Image src={loading} className={styles.loading_gif}></Image>
        </div>
        <div className={styles.products_container} id="container">
          <AdminProductslist />
        </div>
      </section>
    </>
  );
};

export default Admin_Products;
