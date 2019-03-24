import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/home-page-pics/header-logo.png';
import whiteLogo from '../../images/home-page-pics/white-header-logo.png';

const Navbar = () => (
  <nav>

    <Link to="/">
      <img
        className="header-logo"
        src={logo}
        alt="Logo"
      />
      <img src={whiteLogo}
        alt="Logo"
        className="white-header-logo"
      />
    </Link>

    <div className="nav-right">

      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>

      <i className="fas fa-bars"></i></div>

  </nav>
);




export default Navbar;
