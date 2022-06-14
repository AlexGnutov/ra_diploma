import React from 'react';
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" href="/">Главная</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/catalog.html">Каталог</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/about.html">О магазине</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/contacts.html">Контакты</Link>
      </li>
    </ul>
  );
}

export default NavMenu;
