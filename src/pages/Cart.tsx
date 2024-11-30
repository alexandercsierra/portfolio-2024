import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import CTA from "../components/CTA";
import EmptyCart from "../components/Checkout/EmptyCart";
import CartItem from "../components/Checkout/CartItem";
import CheckoutModal from "../components/Checkout/CheckoutModal";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [open, setOpen] = useState(false);
  const onCancel = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "85vh",
          margin: 0,
          backgroundImage: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CheckoutModal productList={cart} open={open} onCancel={onCancel} />
        {cart.length === 0 && <EmptyCart />}
        {cart.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              justifyContent: "space-around",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "70%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant={"h3"}
                sx={{
                  textAlign: "center",
                  mt: 4,
                }}
              >
                Your Cart
              </Typography>
              {cart.map((item, idx) => (
                <CartItem key={idx} item={item} />
              ))}
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                m: 2,
                p: 2,
                mt: 13,
                height: "fit-content",
                borderRadius: "25px",

                right: "0",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Subtotal:</Typography>
                <Typography>$117.85</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Shipping:</Typography>
                <Typography>FREE</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Taxes and Fees:</Typography>
                <Typography>$34.22</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Total:</Typography>
                <Typography>$151.00</Typography>
              </Box>

              <CTA
                onClick={openModal}
                text={"Check Out"}
                style={{ padding: "5px 10px", margin: "24px auto" }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Cart;
