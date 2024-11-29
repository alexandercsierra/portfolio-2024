import { createSlice } from "@reduxjs/toolkit";

const cartFromLocalStorage = localStorage.getItem("cart");
const initialCart = cartFromLocalStorage
  ? JSON.parse(cartFromLocalStorage)
  : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: initialCart,
  },
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      const newCart = [...state.cart];

      // find the index of the existing product
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === payload.id
      );

      console.log({ existingProductIndex, payload });

      // // if the product exists, increase the quantity
      // if (existingProductIndex >= 0) {
      //   newCart[existingProductIndex].quantity += 1;
      // } else {
      //   // if the product is new, add it to the cart
      //   newCart.push({ ...payload, quantity: 1 });
      // }
      newCart.push({ ...payload, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cart = newCart;
    },
    removeFromCart: (state, action) => {
      console.log("CART SLICE removeFromCart");
      const { payload } = action;
      console.log({ payload });
      const newCart = [...state.cart];
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === payload.id
      );
      const existingProduct = state.cart[existingProductIndex];
      // if (existingProduct.quantity === 1) {
      //   newCart.splice(existingProductIndex, 1);
      // } else {
      //   newCart[existingProductIndex].quantity -= 1;
      // }
      newCart.splice(existingProductIndex, 1);
      console.log({ existingProductIndex, existingProduct, newCart });
      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cart = newCart;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
