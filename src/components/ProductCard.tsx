import { Box, Typography } from "@mui/material";
import AddToCartButton from "./AddToCartButton";
import { productImageMap } from "../constants/productData";
import useCart from "../hooks/useCart";

const ProductCard = ({
  product,
}: {
  product: {
    name: string;
    image?: string;
    description?: string;
    subtitle: string;
    price?: number;
    id: string;
  };
}) => {
  const { name, image, price, subtitle } = product;
  const { onClickProduct } = useCart();
  return (
    <Box
      onClick={(e) => onClickProduct(e, product)}
      sx={{
        cursor: "pointer",
        background: "white",
        width: "370px",
        borderRadius: "15px",
        m: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
        px: 1,
        boxShadow: "none", // Initial state
        transition: "box-shadow .6s ease", // Add transition
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "110px",
          // height: "300px",
          borderRadius: "15px",
          // border: "1px solid red",
        }}
      >
        <img src={productImageMap[image]} style={{ width: "100px" }} />
      </Box>
      <Box
        sx={{
          minWidth: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          ml: 4,
        }}
      >
        <Typography
          variant={"h6"}
          sx={{ color: "black", lineHeight: "1.25rem" }}
        >
          {name}
        </Typography>
        <Typography variant={"caption"} sx={{ color: "black" }}>
          ${price}
        </Typography>
        <Typography variant={"caption"} sx={{ color: "black" }}>
          {subtitle}
        </Typography>
        <AddToCartButton product={product} />
      </Box>
    </Box>
  );
};

export default ProductCard;
