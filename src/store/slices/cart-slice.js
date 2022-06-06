import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goods: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { item, selectedSize, selectedQuantity } = action.payload;
      const goods = [...state.goods];
      goods.push({ item, selectedSize, selectedQuantity });
      return {
        ...state,
        goods,
      };
    },
    removeItemFromCart: (state, action) => {
      const { id } = action.payload;
      const newGoods = state.goods.filter((g) => g.item.id !== id);
      return {
        ...state,
        goods: newGoods,
      };
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
