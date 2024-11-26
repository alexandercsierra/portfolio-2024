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
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "50vh",
      }}
    >
      <Typography variant={"h4"}>Nothing here yet....</Typography>
      <CTA href={"/store"} text={"Go Shopping"} />
    </Box>
  );
};

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box sx={{ minHeight: "100vh", margin: 0 }}>
      {cart.length === 0 && <EmptyCart />}
      {cart.length > 0 &&
        cart.map((item, idx) => <CartItem key={idx} item={item} />)}
    </Box>
  );
};

export default Cart;

const CartItem = ({ item }) => {
  return (
    <Box
      sx={{
        height: "200px",
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
