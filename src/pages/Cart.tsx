import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import CTA from "../components/CTA";
import EmptyCart from "../components/Checkout/EmptyCart";
import CartItem from "../components/Checkout/CartItem";
import CheckoutModal from "../components/Checkout/CheckoutModal";
import Confetti from "react-dom-confetti";

const confettiConfig = {
  angle: 90,
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  dragFriction: 0.2,
  duration: 3000,
  elementCount: 70,
  height: "10px",
  spread: 200,
  stagger: 3,
  startVelocity: 40,
  width: "10px",
  perspective: "500px",
};

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
          // alignItems: "center",
        }}
      >
        <Box sx={{ zIndex: 5000, position: "absolute" }}>
          <Confetti active={open} config={confettiConfig} />
        </Box>
        <CheckoutModal productList={cart} open={open} onCancel={onCancel} />
        {cart.length === 0 && <EmptyCart />}
        {cart.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "70%" },
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
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
                height: "fit-content",
                minHeight: "500px",
                borderRadius: "25px",
                position: { xs: "relative", md: "fixed" },

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
