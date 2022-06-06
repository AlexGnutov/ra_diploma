import {
  LOAD_CAT_GROUPS_ERR, LOAD_CAT_GROUPS_OK, LOAD_CAT_GROUPS_REQ, SET_CAT_GROUP,
} from '../actions/action-types';

const initialState = {
  groups: [],
  loading: false,
  error: null,
};

export default function catalogGroupsReducer(state = initialState, action) {
  console.log('catalogGroupsReducer', state);
  switch (action.type) {
    case LOAD_CAT_GROUPS_REQ:
      return { ...state, loading: true, error: null };
    case LOAD_CAT_GROUPS_ERR:
      return { ...state, loading: false, error: true };
    case LOAD_CAT_GROUPS_OK:
      const { groups } = action.payload;
      return {
        ...state, groups, loading: false, error: false,
      };
    default:
      return state;
  }
}
