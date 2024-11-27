import { useState } from "react";
import { Typography, Button } from "@mui/material";
import { accentColor } from "../constants/colors";
import useCart from "../hooks/useCart";
import { useSelector } from "react-redux";
import Snackbar from "./Snackbar";

const AddToCartButton = ({
  product,
  buttonSize = "small",
  buttonWidth = "auto",
}: {
  product: { name: string; image?: string; price?: number };
  buttonSize?: "small" | "medium" | "large";
  buttonWidth?: string;
}) => {
  const { addToCart, removeFromCart } = useCart();
  const { id } = product;
  const cart = useSelector((state) => state.cart.cart);
  const productInCart = cart.some((item) => item.id === id);

  const [open, setOpen] = useState(false);

  const snackbarMessage = productInCart
    ? `Added ${product.name} to cart`
    : `Removed ${product.name} from cart`;

  return (
    <>
      <Snackbar
        open={open}
        setOpen={setOpen}
        message={snackbarMessage}
        severity={productInCart ? "success" : "error"}
      />
      <Button
        size={buttonSize}
        sx={{
          background: accentColor,
          px: 1.5,
          borderRadius: "25px",
          textAlign: "center",
          width: buttonWidth,
        }}
        onClick={(event) => {
          event.stopPropagation();
          setOpen(true);
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
    </>
  );
};

export default AddToCartButton;
