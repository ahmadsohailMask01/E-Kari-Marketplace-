import React from "react";
import EditProduct from "@/app/components/editProduct";

const getProductbyId = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
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
      <EditProduct
        id={id}
        title={product_title}
        price={product_price}
        description={product_description}
      />
    </>
  );
};

export default page;
