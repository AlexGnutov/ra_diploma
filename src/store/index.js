import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import {
  loadCatGroupsEpic,
  loadNewItemsEpic,
  loadProductDetailsEpic,
  loadSalesHitsEpic,
  switchCategoryEpic,
  loadMoreItemsEpic,
} from './epics';
import salesHitsReducer from './slices/sales-hits-slice';
import catalogReducer from './slices/catalog-slice';
import cartReducer, { addItemToCart, removeItemFromCart } from './slices/cart-slice';
import catalogGroupsReducer from './slices/catalog-groups-slice';
import productDetailsReducer from './slices/product-details-slice';
import { loadStateFromLocalStorage, saveStateToLocal } from './state-saving/utils';
import catalogSearchReducer, { setSearchWord } from './slices/catalog-search-slice';
import cartOrderReducer, { updateOrderData } from './slices/cart-order-slice';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(
    addItemToCart,
    removeItemFromCart,
    setSearchWord,
    updateOrderData,
  ),
  effect: (action, listenerApi) => {
    const state = listenerApi.getState();
    saveStateToLocal(state);
  },
});

// Prepare Epics
const epic = combineEpics(
  loadSalesHitsEpic,
  loadNewItemsEpic,
  loadCatGroupsEpic,
  loadProductDetailsEpic,
  switchCategoryEpic,
  loadMoreItemsEpic,
);
const epicMiddleware = createEpicMiddleware();

const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    salesHits: salesHitsReducer,
    catalog: catalogReducer,
    categories: catalogGroupsReducer,
    cart: cartReducer,
    productDetails: productDetailsReducer,
    catalogSearch: catalogSearchReducer,
    cartOrder: cartOrderReducer,
  },
  middleware: [epicMiddleware, listenerMiddleware.middleware],
  preloadedState,
});

epicMiddleware.run(epic);
export default store;
