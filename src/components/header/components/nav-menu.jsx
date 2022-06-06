import React from 'react';

function NavMenu() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Главная</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/catalog.html">Каталог</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about.html">О магазине</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contacts.html">Контакты</a>
      </li>
    </ul>
  );
}

export default NavMenu;
