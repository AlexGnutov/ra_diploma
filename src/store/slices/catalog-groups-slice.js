import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groups: [],
  loading: false,
  error: null,
};

export const catalogGroupsSlice = createSlice({
  name: 'catalogGroups',
  initialState,
  reducers: {
    loadCatGroupsReq: (state) => (
      { ...state, loading: true, error: null }
    ),
    loadCatGroupsErr: (state) => (
      { ...state, loading: false, error: true }
    ),
    loadCatGroupsOk: (state, action) => {
      const { groups } = action.payload;
      return {
        ...state, groups, loading: false, error: false,
      };
    },
  },
});

export const {
  loadCatGroupsReq,
  loadCatGroupsErr,
  loadCatGroupsOk,
} = catalogGroupsSlice.actions;

export default catalogGroupsSlice.reducer;
