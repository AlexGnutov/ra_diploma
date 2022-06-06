import {
  LOAD_PROD_DATA_ERR,
  LOAD_PROD_DATA_OK,
  LOAD_PROD_DATA_REQ, QUANTITY_SELECT, SIZE_SELECT,
} from '../actions/action-types';

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

export default function productDetailsReducer(state = initialState, action) {
  console.log('productDetailsReducer', state);

  switch (action.type) {
    case LOAD_PROD_DATA_REQ:
      return { ...initialState, loading: true, error: null };
    case LOAD_PROD_DATA_ERR:
      return { ...initialState, loading: false, error: true };
    case LOAD_PROD_DATA_OK: {
      const { data } = action.payload;
      return {
        ...state,
        data,
        selectedQuantity: 1,
        loading: false,
        error: null,
      };
    }
    case SIZE_SELECT: {
      const { size } = action.payload;
      return {
        ...state,
        selectedSize: size,
      };
    }
    case QUANTITY_SELECT: {
      const { newQty } = action.payload;
      return {
        ...state,
        selectedQuantity: newQty,
      };
    }
    default:
      return state;
  }
}
