import {
  LOAD_CAT_ITEMS_ERR,
  LOAD_CAT_ITEMS_OK,
  LOAD_CAT_ITEMS_REQ,
  SET_CAT_GROUP,
  SET_OFFSET,
} from '../actions/action-types';

const initialState = {
  items: [],
  loading: false,
  error: null,
  offset: 0,
  complete: false,
  activeGroup: null,
};

export default function catalogReducer(state = initialState, action) {
  console.log('catalogReducer', state);

  switch (action.type) {
    case LOAD_CAT_ITEMS_REQ:
      return { ...state, loading: true, error: null };
    case LOAD_CAT_ITEMS_ERR:
      return { ...state, loading: false, error: true };
    case LOAD_CAT_ITEMS_OK:
      const { items } = action.payload;
      const complete = (items.length !== 6);
      return {
        ...state,
        items: [...state.items, ...items],
        complete,
        loading: false,
        error: false,
      };
    case SET_OFFSET:
      console.log('set offset');
      return {
        ...state,
        offset: state.offset + 6,
      };
    case SET_CAT_GROUP:
      const { activeGroup } = action.payload;
      return { ...initialState, activeGroup };
    default:
      return state;
  }
}
