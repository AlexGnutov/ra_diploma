import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const salesHitsSlice = createSlice({
  name: 'sales-hits',
  initialState,
  reducers: {
    loadSalesHitsReq: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    loadSalesHitsErr: () => (
      { ...initialState, loading: false, error: true }
    ),
    loadSalesHitsOk: (state, action) => {
      const { items } = action.payload;
      return {
        ...state, items, loading: false, error: null,
      };
    },
  },
});

export const {
  loadSalesHitsReq,
  loadSalesHitsErr,
  loadSalesHitsOk,
} = salesHitsSlice.actions;

export default salesHitsSlice.reducer;
