import { createSlice } from "@reduxjs/toolkit";

const initialState = { itemList: [], totalQuantity: 0, showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          parseInt(existingItem.price.toString().replace(/[^\d]/g, "")) *
          existingItem.quantity;
      } else {
        state.itemList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          imageurl: newItem.imageurl,
          height: newItem.height,
          gross_weight: newItem.gross_weight,
          totalPrice: parseInt(newItem.price.toString().replace(/[^\d]/g, "")),
          
        });
      }
    },

    removeFromCart(state, action) {
      const itemId = action.payload.id;
      const item = state.itemList.find((item) => item.id === itemId);

      if (item.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== itemId);
      } else {
        item.quantity--;
        item.totalPrice =
          parseInt(item.price.toString().replace(/[^\d]/g, "")) *
          item.quantity;
      }
    },

    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
