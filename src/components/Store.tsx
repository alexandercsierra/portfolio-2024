import ProductCard from "./ProductCard";
import { Box, Typography } from "@mui/material";
import { products } from "../constants/productData";
import { lightBlue } from "../constants/colors";
import transProfile from "../assets/transprofile.png";

const Store = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: lightBlue,
          pt: 4,
          px: 15,
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ fontWeight: "700", width: "70%" }}>
            Dev experience across the whole stack?
          </Typography>
          <Typography variant="h4">yeah, we got it</Typography>
        </Box>
        <img src={transProfile} style={{ width: "300px" }} />
      </Box>
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
