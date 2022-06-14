import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Portal } from 'react-portal';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Banner from './components/banner/banner';
import PopupMessage from './components/messages/popup-message';
import ProgRouter from './components/prog-router/prog-router';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <ProgRouter />
      <Portal>
        <PopupMessage />
      </Portal>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
