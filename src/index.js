import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import reportWebVitals from './reportWebVitals';
import App from './App';
import About from './components/about/about';
import Catalog from './components/catalog/catalog';
import Preview from './components/preview/preview';
import Contacts from './components/contacts/contacts';
import ProductDetails from './components/product-details/product-details';
import Cart from './components/cart/cart';
import Page404 from './components/page-404/page-404';
import store from './store';

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Preview />} />
          <Route path="/catalog.html" element={<Catalog withSearch />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/contacts.html" element={<Contacts />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart.html" element={<Cart />} />
          <Route path="/404.html" element={<Page404 />} />
        </Route>
        <Route path="*" element={<Navigate to="/404.html" />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
