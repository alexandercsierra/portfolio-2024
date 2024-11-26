import { useDispatch } from "react-redux";
import { addToCart as addToCartRedux } from "../redux/cartSlice";

export const getCartFromLS = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const useCart = () => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addToCartRedux(product));
  };

  return { addToCart };
};

export default useCart;
