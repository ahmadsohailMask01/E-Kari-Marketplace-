"use client";
import React, { useState } from "react";
import styles from "../../../styles/addProduct.module.css";
import Link from "next/link";
import { RiArrowGoBackLine } from "react-icons/ri";
import Edit from "./edit";

const EditProduct = ({ id, title, price, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    Edit(id, newTitle, newPrice, newDescription);
  };
  return (
    <>
      <section className={styles.form_section}>
        <Link href={"/products"} title="Go back to products">
          <RiArrowGoBackLine className={styles.go_back} />
        </Link>
        <div className={styles.form_container}>
          <label className={styles.form_head}>
            Here You can Edit your Product
          </label>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
              className={styles.input}
              placeholder="Product Title"
              required={true}
            />
            <input
              type="text"
              onChange={(e) => setNewPrice(e.target.value)}
              value={newPrice}
              className={styles.input}
              placeholder="Product Price in PKR"
              required={true}
            />
            <textarea
              className={styles.textarea}
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
              placeholder="Product Description"
              required={true}
            />
            <button className={styles.button} title="Update Product">
              Update Product
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditProduct;
