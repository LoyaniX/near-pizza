import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import authenticate from './slices/authenticateSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    authenticate,
  },
});
