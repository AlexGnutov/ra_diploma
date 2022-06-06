import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from '../actions/action-types';

const initialState = {
  goods: [],
};

export default function cartReducer(state = initialState, action) {
  console.log('cartReducer', state);

  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const { item, selectedSize, selectedQuantity } = action.payload;
      const goods = [...state.goods];
      goods.push({ item, selectedSize, selectedQuantity });
      return {
        ...state,
        goods,
      };
    }
    case REMOVE_ITEM_FROM_CART: {
      const { id } = action.payload;
      const newGoods = state.goods.filter((g) => g.item.id === id);
      return {
        ...state,
        goods: newGoods,
      };
    }
    default:
      return state;
  }
}
