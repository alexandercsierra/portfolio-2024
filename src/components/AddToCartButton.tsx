import { Typography, Button } from "@mui/material";
import { accentColor } from "../constants/colors";
import useCart from "../hooks/useCart";
import { useSelector } from "react-redux";

const AddToCartButton = ({
  product,
  buttonSize = "small",
  buttonWidth = "auto",
}: {
  product: { name: string; image?: string; price?: number; id: string };
  buttonSize?: "small" | "medium" | "large";
  buttonWidth?: string;
}) => {
  const { onClickProduct } = useCart();
  const { id } = product;
  const cart = useSelector((state) => state.cart.cart);
  const productInCart = cart.some((item) => item.id === id);

  return (
    <>
      <Button
        size={buttonSize}
        sx={{
          background: accentColor,
          px: 1.5,
          borderRadius: "25px",
          textAlign: "center",
          width: buttonWidth,
        }}
        onClick={(e) => onClickProduct(e, product)}
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
