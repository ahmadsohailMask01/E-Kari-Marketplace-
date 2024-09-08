import React from "react";
import { BASE_API_URL } from "../../../utils/constants";
import { toast as note } from "react-hot-toast";

const Delete = async (id) => {
  const confirmed = confirm("Are You Sure?");
  try {
    if (confirmed) {
      await fetch(`${BASE_API_URL}/api/products?id=${id}`, {
        method: "DELETE",
      });

      note.success("Product deleted successfully");
      window.location.replace("/products");
    }
  } catch (error) {
    note.error("Failed to Delete Product", error);
  }
  return <></>;
};

export default Delete;
