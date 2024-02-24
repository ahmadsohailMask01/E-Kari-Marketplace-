"use client";
import React from "react";
import styles from "../../../styles/products.module.css";
import { MdDelete } from "react-icons/md";
import { toast as note } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { BASE_API_URL } from "../../../utils/constants";

const RemoveButton = ({ id }) => {
  const router = useRouter();
  const removeProduct = async (e) => {
    e.preventDefault();
    const confirmed = confirm("Are You Sure?");
    try {
      if (confirmed) {
        await fetch(`${BASE_API_URL}/api/products?id=${id}`, {
          method: "DELETE",
        });

        note.success("Product deleted successfully");
        router.refresh();
      }
    } catch (error) {
      note.error("Failed to Delete Product", error);
    }
  };

  return (
    <>
      <button
        onClick={removeProduct}
        className={styles.button_del}
        title="Delete this Product"
      >
        <MdDelete className={styles.icon1} />
        Delete
      </button>
    </>
  );
};

export default RemoveButton;
