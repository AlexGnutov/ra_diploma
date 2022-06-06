import React from 'react';
import NavMenu from './nav-menu';
import HeaderControls from './header-controls';

function HeaderNavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src="/img/header-logo.png" alt="Bosa Noga" />
      </a>
      <div className="collapase navbar-collapse" id="navbarMain">
        <NavMenu />
        <HeaderControls />
      </div>
    </nav>
  );
}

export default HeaderNavBar;
