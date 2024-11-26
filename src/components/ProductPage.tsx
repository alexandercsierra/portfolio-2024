import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();
  const { productId } = params;

  return <div>ProductPage for product: {productId}</div>;
};

export default ProductPage;
