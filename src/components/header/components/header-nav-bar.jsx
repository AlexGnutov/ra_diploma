import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './nav-menu';
import HeaderControls from './header-controls';

function HeaderNavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/" reloadDocument>
        <img src="/img/header-logo.png" alt="Bosa Noga" />
      </Link>
      <div className="collapase navbar-collapse" id="navbarMain">
        <NavMenu />
        <HeaderControls />
      </div>
    </nav>
  );
}

export default HeaderNavBar;
