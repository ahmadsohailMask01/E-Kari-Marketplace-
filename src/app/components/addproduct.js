"use client";

import React, { useState } from "react";
import styles from "../../../styles/addProduct.module.css";
import { RiArrowGoBackLine } from "react-icons/ri";
import Link from "next/link";
import handleSubmit from "./post";

const AddProduct = () => {
  const [product_title, setTitle] = useState("");
  const [product_price, setPrice] = useState("");
  const [product_description, setDescription] = useState("");
  const handle = (e) => {
    e.preventDefault();
    handleSubmit(product_title, product_price, product_description);
  };

  return (
    <>
      <section className={styles.form_section}>
        <Link href={"/products"} title="Go back to products">
          <RiArrowGoBackLine className={styles.go_back} />
        </Link>
        <div className={styles.form_container}>
          <label className={styles.form_head}>
            Here You can Add your Product
          </label>
          <form className={styles.form} onSubmit={handle}>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={product_title}
              className={styles.input}
              placeholder="Product Title"
              required={true}
            />
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={product_price}
              className={styles.input_price}
              placeholder="Product Price in PKR"
              required={true}
            />
            <textarea
              className={styles.textarea}
              onChange={(e) => setDescription(e.target.value)}
              value={product_description}
              placeholder="Product Description"
              required={true}
            />
            <button
              type="submit"
              className={styles.button}
              title="Create Product"
            >
              Create!
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
