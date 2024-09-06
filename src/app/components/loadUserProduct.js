import React from "react";
import { BASE_API_URL } from "../../../utils/constants";
import { toast as note } from "react-hot-toast";

const loadUserProduct = async (userEmail) => {
  try {
    await fetch(`${BASE_API_URL}/api/products?userEmail=${userEmail}`, {
      method: "GET",
    });
  } catch (error) {
    note.error("Failed to load Product", error);
  }
  return <></>;
};

export default loadUserProduct;
