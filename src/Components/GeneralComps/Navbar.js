import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2black.png';

const Navbar = () => (
  <nav>
    <Link to="/">
      <img
        className="nav-logo"
        src={logo}
        alt="Logo"
        srcSet=""
      />
    </Link>

    <div className="nav-right">
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  </nav>
);


export default Navbar;