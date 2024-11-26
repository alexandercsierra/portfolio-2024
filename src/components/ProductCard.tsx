import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import reactProduct from "../assets/react-product.svg";
import { NavLink } from "react-router-dom";
import { accentColor } from "../constants/colors";
import GenericDialog from "./GenericDialog";
import useCart from "../hooks/useCart";
import { useSelector } from "react-redux";

const imageMap = {
  react: reactProduct,
};

const ProductCard = ({
  product,
}: {
  product: { name: string; image?: string; price?: number };
}) => {
  const { addToCart, removeFromCart } = useCart();
  const [open, setOpen] = useState(false);
  const { name, image, price, description, id, subtitle } = product;
  const cart = useSelector((state) => state.cart.cart);
  const productInCart = cart.some((item) => item.id === id);

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
          <img src={imageMap[image]} style={{ width: "200px" }} />
          {/* <Typography variant={"h6"} sx={{ color: "black" }}>
            {name}
          </Typography> */}
          <Typography
            variant={"caption"}
            sx={{ color: "black", width: "60%", textAlign: "left" }}
          >
            {description}
          </Typography>
          <Button
            size={"large"}
            sx={{
              background: accentColor,
              width: "50%",
              // py: 1,
              px: 1.5,
              borderRadius: "25px",
              textAlign: "center",
            }}
            onClick={(event) => {
              event.stopPropagation();
              productInCart ? removeFromCart(product) : addToCart(product);
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "800",
                fontSize: ".75rem",
                textTransform: "none",
              }}
            >
              {productInCart ? "Remove from cart" : "Add to cart"}
            </Typography>
          </Button>
        </Box>
      </GenericDialog>
      <Box
        onClick={() => setOpen(true)}
        sx={{
          cursor: "pointer",
          background: "white",
          width: "370px",
          // minWidth: "370px",
          // minWidth: "250px",
          // height: "400px",

          borderRadius: "15px",
          m: 2,
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // border: "1px solid green",
          py: 2,
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
          {/* <Box
          sx={{
            m: 1,
            background: "#f4f4f4",
            borderRadius: "15px",
            width: "100%",
            height: "270px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
          <img src={imageMap[image]} style={{ width: "100px" }} />
          {/* </Box> */}
        </Box>
        <Box
          sx={{
            // width: "70%",
            // height: "100px",
            minWidth: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            ml: 4,
            // border: "1px solid red",
          }}
        >
          <Typography variant={"h6"} sx={{ color: "black" }}>
            {name}
          </Typography>
          <Typography variant={"caption"} sx={{ color: "black" }}>
            {subtitle}
          </Typography>
          <Button
            size={"small"}
            sx={{
              background: accentColor,
              // width: "70%",
              // py: 1,
              px: 1.5,
              borderRadius: "25px",
              textAlign: "center",
            }}
            onClick={(event) => {
              event.stopPropagation();
              productInCart ? removeFromCart(product) : addToCart(product);
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "800",
                fontSize: ".75rem",
                textTransform: "none",
              }}
            >
              {productInCart ? "Remove from cart" : "Add to cart"}
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProductCard;
