import { useState } from "react";
import { Box, Typography } from "@mui/material";
import GenericDialog from "./GenericDialog";
import AddToCartButton from "./AddToCartButton";
import { productImageMap } from "../constants/productData";

const ProductCard = ({
  product,
}: {
  product: { name: string; image?: string; price?: number };
}) => {
  const [open, setOpen] = useState(false);
  const { name, image, price, description, id, subtitle } = product;

  return (
    <>
      {" "}
      <GenericDialog
        id={`${name}-product-info`}
        title={name}
        open={open}
        onCancel={() => setOpen(false)}
        showCloseButton
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          gap={6}
        >
          <img
            src={productImageMap[image]}
            style={{ width: "300px", borderRadius: "25px" }}
          />
          {/* <Typography variant={"h6"} sx={{ color: "black" }}>
            {name}
          </Typography> */}
          <Typography
            variant={"caption"}
            sx={{ color: "black", width: "90%", textAlign: "left" }}
          >
            {description}
          </Typography>
          <AddToCartButton
            product={product}
            buttonWidth={"90%"}
            buttonSize={"large"}
          />
        </Box>
      </GenericDialog>
      <Box
        onClick={() => setOpen(true)}
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
          <Typography variant={"h6"} sx={{ color: "black" }}>
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
    </>
  );
};

export default ProductCard;
