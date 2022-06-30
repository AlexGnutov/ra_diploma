import React from 'react';
import { Link } from 'react-router-dom';

function FooterInformation() {
  return (
    <section>
      <h5>Информация</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/about.html" className="nav-link">О магазине</Link>
        </li>
        <li className="nav-item">
          <Link to="/catalog.html" className="nav-link">Каталог</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts.html" className="nav-link">Контакты</Link>
        </li>
      </ul>
    </section>
  );
}

export default FooterInformation;
