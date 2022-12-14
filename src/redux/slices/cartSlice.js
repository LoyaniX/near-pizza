import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action) {
      const foundItem = state.items.find((obj) => obj.id === action.payload.id);

      if (foundItem) {
        foundItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const foundItem = state.items.find((obj) => obj.id === action.payload);

      if (foundItem) {
        foundItem.count--;
      }

      if (foundItem.count == 0) {
        state.items = state.items.filter((obj) => obj.id != action.payload);
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id != action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, removeItems, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
