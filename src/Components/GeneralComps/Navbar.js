import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  </nav>
);


export default Navbar;
