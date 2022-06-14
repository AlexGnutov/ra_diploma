import history from 'history/browser';
import {
  catchError, filter, map, mergeMap, of, switchMap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { loadSalesHitsReq } from '../slices/sales-hits-slice';
import {
  loadMoreItemsReq,
  loadNewItemsReq,
  setCatGroup,
} from '../slices/catalog-slice';
import { loadCatGroupsReq } from '../slices/catalog-groups-slice';
import { loadProdDataReq } from '../slices/product-details-slice';
import { sendOrderOk, sendOrderReq } from '../slices/cart-order-slice';
import { hidePopupMessage } from '../slices/popup-message-slice';

export const getAction = (type, payload) => ({ type, payload });

// Loading sales hits - main page
export const loadSalesHitsEpic = (action$) => action$.pipe(
  filter(loadSalesHitsReq.match),
  switchMap(() => ajax.getJSON(`${process.env.REACT_APP_API_URL}top-sales`)
    .pipe(
      map((o) => getAction('sales-hits/loadSalesHitsOk', { items: o })),
      catchError((e) => of(getAction('sales-hits/loadSalesHitsErr', { message: e.message }))),
    )),
);

// Loading new cat items - initial load (first six)
export const loadNewItemsEpic = (action$, state$) => action$.pipe(
  filter(loadNewItemsReq.match),
  map(() => new URLSearchParams({
    categoryId: state$.value.catalog.activeGroup || '',
    q: state$.value.catalogSearch.searchWord || '',
  })),
  switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_API_URL}items?${o}`)
    .pipe(
      map((r) => getAction('catalog/loadNewItemsOk', { items: r })),
      catchError((e) => of(getAction('catalog/loadItemsErr', { message: e.message }))),
    )),
);

// Load more - with load more button
export const loadMoreItemsEpic = (action$, state$) => action$.pipe(
  filter(loadMoreItemsReq.match),
  filter(() => !state$.value.catalog.complete),
  map(() => new URLSearchParams({
    categoryId: state$.value.catalog.activeGroup || '',
    offset: state$.value.catalog.offset || '',
    q: state$.value.catalogSearch.searchWord || '',
  })),
  switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_API_URL}items?${o}`)
    .pipe(
      map((r) => getAction('catalog/loadMoreItemsOk', { items: r })),
      catchError((e) => of(getAction('catalog/loadItemsErr', { message: e.message }))),
    )),
);

// Loading catalogue groups - main page and catalog page
export const loadCatGroupsEpic = (action$) => action$.pipe(
  filter(loadCatGroupsReq.match),
  switchMap(() => ajax.getJSON(`${process.env.REACT_APP_API_URL}categories`).pipe(
    map((o) => getAction('catalogGroups/loadCatGroupsOk', { groups: o })),
    catchError((e) => of(getAction('catalogGroups/loadCatGroupsErr', { message: e.message }))),
  )),
);

// Load data for detailed product data page
export const loadProductDetailsEpic = (action$) => action$.pipe(
  filter(loadProdDataReq.match),
  map((a) => a.payload.id),
  switchMap((id) => ajax.getJSON(`${process.env.REACT_APP_API_URL}items/${id}`).pipe(
    map((o) => getAction('productDetails/loadProdDataOk', { data: o })),
    catchError((e) => of(getAction('productDetails/loadProdDataErr', { message: e.message }))),
  )),
);

// Do catalog reload when new group selected
export const switchCategoryEpic = (action$) => action$.pipe(
  filter(setCatGroup.match),
  map((o) => o.payload.activeGroup),
  map(() => getAction('catalog/loadNewItemsReq')),
);

// Sending order data
export const sendOrderDataEpic = (action$) => action$.pipe(
  filter(sendOrderReq.match),
  map((o) => o.payload.orderData),
  switchMap((data) => ajax.post(`${process.env.REACT_APP_API_URL}order`, data).pipe(
    map(() => getAction('cart-order/sendOrderOk')),
    catchError(() => of(
      getAction(
        'popup-message/showPopupMessage',
        { messageName: 'orderSendingError' },
      ),
      getAction(
        'cart-order/sendOrderErr',
      ),
    )),
  )),
);

export const sendOrderOkEpic = (action$) => action$.pipe(
  filter(sendOrderOk.match),
  switchMap(() => of(
    getAction('cart/clearCart'),
    getAction(
      'popup-message/showPopupMessage',
      { messageName: 'orderSendingSuccess' },
    ),
    getAction('popup-message/startRedirect', {
      redirect: true,
      path: '/catalog.html',
    }),
  )),
);
