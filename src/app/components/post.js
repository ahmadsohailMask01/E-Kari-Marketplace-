import React from "react";
import { toast as notify } from "react-toastify";
import { BASE_API_URL } from "../../../utils/constants";

const handleSubmit = async (
  image,
  product_title,
  product_price,
  product_description,
  userEmail,
  userName
) => {
  try {
    await fetch(`${BASE_API_URL}/api/products`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        image,
        product_title,
        product_price,
        product_description,
        userEmail,
        userName,
      }),
    });

    notify.success("Product Created Successfully");
    window.location.replace("/products");
  } catch (error) {
    notify.error("Failed to create a Product", error);
  }

  return <></>;
};
export default handleSubmit;
