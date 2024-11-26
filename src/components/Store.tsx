import React from "react";
import ProductCard from "./ProductCard";
import { Box, Typography } from "@mui/material";
import reactProduct from "../assets/react-product.svg";
import { products } from "../constants/productData";

const Store = () => {
  return (
    <Box>
      <Typography variant="h4">Store</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => {
          return (
            <ProductCard
              addToCart={() => console.log("add to cart")}
              product={product}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Store;
