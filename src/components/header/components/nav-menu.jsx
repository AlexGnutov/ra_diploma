import React from 'react';
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Главная</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/catalog.html">Каталог</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about.html">О магазине</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contacts.html">Контакты</Link>
      </li>
    </ul>
  );
}

export default NavMenu;
