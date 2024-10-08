import React from "react";
import { BASE_API_URL } from "../../../utils/constants";
import { toast as notify } from "react-toastify";

const Edit = async (id, newImage, newTitle, newPrice, newDescription) => {
  try {
    await fetch(`${BASE_API_URL}/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ newImage, newTitle, newPrice, newDescription }),
    });

    notify.success("Product Updated Successfully!");
    window.location.replace(`/products`);
  } catch (error) {
    notify.error("Failed to Update the Product", error);
  }
  return <></>;
};

export default Edit;
