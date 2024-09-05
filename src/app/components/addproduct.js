"use client";

import React, { useState } from "react";
import styles from "../../../styles/addProduct.module.css";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useSession } from "next-auth/react";
import Link from "next/link";
import handleSubmit from "./post";

const AddProduct = () => {
  const [image, setImage] = useState("");
  const convert_to_base64 = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  const { data: session } = useSession();
  const [product_title, setTitle] = useState("");
  const [product_price, setPrice] = useState("");
  const [product_description, setDescription] = useState("");
  const userEmail = session?.user?.email;
  const userName = session?.user?.name;
  const handle = (e) => {
    e.preventDefault();
    handleSubmit(
      image,
      product_title,
      product_price,
      product_description,
      userEmail,
      userName
    );
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
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                alignItems: `center`,
                backgroundColor: `white`,
                border: `1px solid darkgrey`,
                width: `96%`,
                padding: `2%`,
                minHeight: `30px`,
              }}
            >
              <div
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  rowGap: `5px`,
                  alignItems: `flex-start`,
                }}
              >
                <label
                  for="Place Image"
                  style={{ color: `#282c34`, fontSize: `12px` }}
                >
                  Insert your Image here:
                </label>
                <input
                  style={{
                    marginLeft: `1%`,
                    color: `white`,
                  }}
                  required={true}
                  type="file"
                  accept="image/*"
                  onChange={convert_to_base64}
                />
              </div>
              {image == "" || image == null ? (
                ""
              ) : (
                <img
                  src={image}
                  width={100}
                  height={100}
                  style={{
                    borderRadius: `10px`,
                    alignSelf: `flex-end`,
                    justifySelf: `flex-end`,
                    border: `1px solid darkgrey`,
                  }}
                />
              )}
            </div>
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
