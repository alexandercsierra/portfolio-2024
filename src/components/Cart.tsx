import React from "react";
import { getCartFromLS } from "../hooks/useCart";
import { Typography, Box } from "@mui/material";
import reactLogo from "../assets/react.svg";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import CTA from "./CTA";

const EmptyCart = () => {
  return (
    <Box
      gap={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "50vh",
      }}
    >
      <Typography variant={"h3"}>Nothing here yet....</Typography>
      <Typography>try adding more skills from the shop page</Typography>
      <CTA
        href={"/store"}
        text={"Go Shopping"}
        style={{ height: "20px", width: "200px" }}
      />
    </Box>
  );
};

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        margin: 0,
        backgroundImage: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
      }}
    >
      {cart.length === 0 && <EmptyCart />}
      {cart.length > 0 && (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
              position: "fixed",
              right: "0",
            }}
          >
            <Typography>Subtotal</Typography>
            <Typography>Shipping</Typography>
            <Typography>Total</Typography>
            <CTA
              href={"/checkout"}
              text={"Check Out"}
              style={{ padding: "5px 10px", mt: 4 }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;

const CartItem = ({ item }) => {
  return (
    <Box
      sx={{
        height: "150px",
        width: "80%",
        m: 2,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        background: "white",
        p: 2,
        borderRadius: "15px",
      }}
    >
      <Box sx={{ width: "200px" }}>
        <img src={reactLogo} style={{ width: "150px" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          textAlign: "left",
          width: "60%",
        }}
      >
        <Typography variant={"h3"}>{item.name}</Typography>
        <Typography>{item.desc}</Typography>
        <Typography>In stock</Typography>
        <Typography>FREE delivery</Typography>
        <CartItemToolbar product={item} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography>{item.price || "$25.32"}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          ml: 2,
        }}
      >
        <Typography>x{item.quantity}</Typography>
      </Box>
    </Box>
  );
};

const CartItemToolbar = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Typography
        sx={{ cursor: "pointer" }}
        onClick={() => {
          dispatch(removeFromCart(product));
        }}
      >
        Remove
      </Typography>
      <Typography>|</Typography>
      <Typography>Save for later</Typography>
      <Typography>|</Typography>
    </Box>
  );
};
