import { Typography, Box } from "@mui/material";
import { productImageMap } from "../../constants/productData";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartItemToolbar = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Typography
        variant={"caption"}
        sx={{ cursor: "pointer", textDecoration: "underline" }}
        onClick={() => {
          dispatch(removeFromCart(product));
        }}
      >
        Remove
      </Typography>
    </Box>
  );
};

const CartItem = ({ item }) => {
  return (
    <Box
      sx={{
        height: "150px",
        width: "80%",
        m: 2,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "white",
        p: 2,
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          width: { xs: "100px", md: "150px" },
          display: "flex",
          alignItems: "center",
          mr: 2,
        }}
      >
        <img
          src={productImageMap[item.category]}
          style={{ width: "inherit" }}
        />
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
        <Typography
          variant={"h4"}
          sx={{ fontSize: { xs: "1.25rem", md: "1.75rem" } }}
        >
          {item.name}
        </Typography>
        <Typography>{item.subtitle}</Typography>
        <Typography variant={"caption"}>In stock</Typography>
        <Typography variant={"caption"}>FREE delivery</Typography>
        <CartItemToolbar product={item} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography>{item.price ? `$${item.price}` : "$25.32"}</Typography>
      </Box>
    </Box>
  );
};

export default CartItem;
