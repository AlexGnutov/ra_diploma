import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    id: '',
    category: '',
    heelSize: '',
    price: '',
    title: '',
    images: [],
    sku: '',
    manufacturer: '',
    color: '',
    material: '',
    reason: '',
    season: '',
    sizes: [],
  },
  loading: false,
  error: null,
  selectedSize: null,
  selectedQuantity: null,
};

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    loadProdDataReq: () => (
      { ...initialState, loading: true, error: null }
    ),
    loadProdDataErr: () => (
      { ...initialState, loading: false, error: true }
    ),
    loadProdDataOk: (state, action) => {
      const { data } = action.payload;
      return {
        ...state,
        data,
        selectedQuantity: 1,
        loading: false,
        error: null,
      };
    },
    sizeSelect: (state, action) => {
      const { size } = action.payload;
      return {
        ...state,
        selectedSize: size,
      };
    },
    quantitySelect: (state, action) => {
      const { newQty } = action.payload;
      return {
        ...state,
        selectedQuantity: newQty,
      };
    },
  },
});

export const {
  loadProdDataReq,
  loadProdDataErr,
  loadProdDataOk,
  sizeSelect,
  quantitySelect,
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
