import { LOAD_SALES_HITS_ERR, LOAD_SALES_HITS_OK, LOAD_SALES_HITS_REQ } from '../actions/action-types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function salesHitsReducer(state = initialState, action) {
  console.log('salesHitsReducer', state);

  switch (action.type) {
    case LOAD_SALES_HITS_REQ:
      return { ...state, loading: true, error: null };
    case LOAD_SALES_HITS_ERR:
      return { ...initialState, loading: false, error: true };
    case LOAD_SALES_HITS_OK: {
      const { items } = action.payload;
      return {
        ...state, items, loading: false, error: null,
      };
    }
    default:
      return state;
  }
}
