import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phone: '',
  address: '',
};

export const cartOrderSlice = createSlice({
  name: 'cart-order',
  initialState,
  reducers: {
    updateOrderData: (state, action) => ({
      ...state,
      [action.payload.name]: action.payload.value,
    }),
  },
});

export const {
  updateOrderData,
} = cartOrderSlice.actions;

export default cartOrderSlice.reducer;
