import React from "react";
import ProductCategories from "@/app/components/productCategories";

const page = async ({ params }) => {
  const { id } = params;
  return (
    <>
      <ProductCategories id={id} />
    </>
  );
};

export default page;
