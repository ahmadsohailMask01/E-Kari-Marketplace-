"use client";
import React, { useState } from "react";
import styles from "../../../styles/addProduct.module.css";
import Link from "next/link";
import { RiArrowGoBackLine } from "react-icons/ri";
import Edit from "./edit";
import Image from "next/image";

const EditProduct = ({ id, image, title, price, description }) => {
  const [newImage, setNewImage] = useState(image);
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newDescription, setNewDescription] = useState(description);

  const convertBase64 = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setNewImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Edit(id, newImage, newTitle, newPrice, newDescription);
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
                  type="file"
                  accept="image/*"
                  onChange={convertBase64}
                />
              </div>
              {newImage == "" || newImage == null ? (
                ""
              ) : (
                <img
                  src={newImage}
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
