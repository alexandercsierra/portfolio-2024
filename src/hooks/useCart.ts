import { useDispatch } from "react-redux";
import {
  addToCart as addToCartRedux,
  removeFromCart as removeFromCartRedux,
} from "../redux/cartSlice";

export const getCartFromLS = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const useCart = () => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addToCartRedux(product));
  };

  const removeFromCart = (product) => {
    dispatch(removeFromCartRedux(product));
  };

  return { addToCart, removeFromCart };
};

export default useCart;
