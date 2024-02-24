"use client";

import React, { useState } from "react";
import styles from "../../../styles/addProduct.module.css";
import { RiArrowGoBackLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast as notify } from "react-toastify";
import { BASE_API_URL } from "../../../utils/constants";

const AddProduct = () => {
  const [product_title, setTitle] = useState("");
  const [product_price, setPrice] = useState("");
  const [product_description, setDescription] = useState("");
  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`${BASE_API_URL}/api/products`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          product_title,
          product_price,
          product_description,
        }),
      });

      notify.success("Product Created Successfully");
      router.push("/products");
      router.refresh();
    } catch (error) {
      notify.error("Failed to create a Product", error);
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
            Here You can Add your Product
          </label>
          <form onSubmit={handleSubmit} className={styles.form}>
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
              onClick={() => setActive(!active)}
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
