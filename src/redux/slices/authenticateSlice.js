import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accauntId: '',
};

const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    setAccauntId(state, action) {
      state.accauntId = action.payload;
    },
  },
});

export const { setAccauntId } = authenticateSlice.actions;

export default authenticateSlice.reducer;
