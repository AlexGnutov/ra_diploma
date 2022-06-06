import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputVisible: false,
  searchWord: '',
};

export const catalogSearchSlice = createSlice({
  name: 'catalog-search',
  initialState,
  reducers: {
    setSearchWord: (state, action) => ({
      ...state,
      searchWord: action.payload.searchWord,
    }),
    clearSearchWord: (state) => ({
      ...state,
      searchWord: '',
    }),
    showSearchInput: (state) => ({
      ...state,
      inputVisible: true,
    }),
    hideSearchInput: (state) => ({
      ...state,
      inputVisible: false,
    }),
  },
});

export const {
  setSearchWord,
  clearSearchWord,
  showSearchInput,
  hideSearchInput,
} = catalogSearchSlice.actions;

export default catalogSearchSlice.reducer;
