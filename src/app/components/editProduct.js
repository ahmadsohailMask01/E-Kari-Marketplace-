"use client";
import React, { useState } from "react";
import styles from "../../../styles/addProduct.module.css";
import Link from "next/link";
import { RiArrowGoBackLine } from "react-icons/ri";
import { toast as notify } from "react-toastify";
import { useRouter } from "next/navigation";

const EditProduct = ({ id, title, price, description }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newPrice, newDescription }),
      });

      notify.success("Product Updated Successfully!");
      router.push("/admin_dashboard");
      router.refresh();
    } catch (error) {
      notify.error("Failed to Update the Product", error);
    }
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
