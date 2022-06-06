import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
  offset: 0,
  complete: false,
  activeGroup: null,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    loadNewItemsReq: (state) => ({ ...state, loading: true, error: null }),
    loadNewItemsOk: (state, action) => {
      const { items } = action.payload;
      const complete = (items.length !== 6);
      return {
        ...state,
        items,
        complete,
        loading: false,
        error: false,
      };
    },
    loadMoreItemsReq: (state) => ({
      ...state,
      offset: state.offset + 6,
    }),
    loadMoreItemsOk: (state, action) => {
      const { items } = action.payload;
      const complete = (items.length !== 6);
      return {
        ...state,
        items: [...state.items, ...items],
        complete,
        loading: false,
        error: false,
      };
    },
    loadItemsErr: (state) => ({ ...state, loading: false, error: true }),
    setCatGroup: (state, action) => {
      const { activeGroup } = action.payload;
      return { ...initialState, activeGroup };
    },
  },
});

export const {
  loadNewItemsReq,
  loadNewItemsOk,
  loadMoreItemsReq,
  loadMoreItemsOk,
  loadItemsErr,
  setCatGroup,
} = catalogSlice.actions;

export default catalogSlice.reducer;
