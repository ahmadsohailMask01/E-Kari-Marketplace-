import React from "react";
import Request_Product from "../../components/request_order";
import { BASE_API_URL } from "../../../../utils/constants";

const getProductbyId = async (id) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Product");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const page = async ({ params }) => {
  const { id } = params;
  const { product } = await getProductbyId(id);
  const { product_title, product_price, product_description } = product;
  return (
    <>
      <Request_Product id={id} title={product_title} price={product_price} />
    </>
  );
};

export default page;
