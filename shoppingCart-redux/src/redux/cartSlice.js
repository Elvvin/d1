import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (!Array.isArray(state.cart)) state.cart = []; // Ensure state.cart is an array
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      if (Array.isArray(state.cart)) {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item) item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      if (Array.isArray(state.cart)) {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity--;
        }
      }
    },
    removeItem: (state, action) => {
      if (Array.isArray(state.cart)) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
