import { useDispatch } from "react-redux";
import {
  addToCart as addToCartRedux,
  removeFromCart as removeFromCartRedux,
} from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

interface Product {
  name: string;
  image?: string;
  price?: number;
  id: string;
}

export const getCartFromLS = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const useCart = () => {
  const dispatch = useDispatch();

  const addToCart = (product: Product) => {
    dispatch(addToCartRedux(product));
  };

  const removeFromCart = (product: Product) => {
    dispatch(removeFromCartRedux(product));
  };

  const { enqueueSnackbar } = useSnackbar();

  const cart = useSelector((state) => state.cart.cart);
  const onClickProduct = (event: React.MouseEvent, product: Product) => {
    const { id } = product;
    const productInCart = cart.some((item) => item.id === id);

    const snackbarMessage = !productInCart
      ? `Added ${product.name} to cart`
      : `Removed ${product.name} from cart`;
    event.stopPropagation();
    enqueueSnackbar(snackbarMessage, {
      variant: productInCart ? "error" : "success",
    });
    return productInCart ? removeFromCart(product) : addToCart(product);
  };

  return { addToCart, removeFromCart, onClickProduct };
};

export default useCart;
