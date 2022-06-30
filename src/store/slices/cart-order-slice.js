import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phone: '',
  address: '',
  agreement: false,
  loading: false,
  error: false,
};

export const cartOrderSlice = createSlice({
  name: 'cart-order',
  initialState,
  reducers: {
    updateOrderData: (state, action) => ({
      ...state,
      [action.payload.name]: action.payload.value,
    }),
    sendOrderReq: (state) => ({
      ...state,
      loading: true,
      error: false,
    }
    ),
    sendOrderErr: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),
    sendOrderOk: (state) => ({
      ...state,
      loading: false,
      error: false,
      agreement: false,
    }),
  },
});

export const {
  updateOrderData,
  sendOrderReq,
  sendOrderErr,
  sendOrderOk,
} = cartOrderSlice.actions;

export default cartOrderSlice.reducer;
