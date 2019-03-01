import React from 'react';
import logo from '../images/logo2black.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="header">
      <Link to="/"><img href="#default" className="header-logo" src={logo} alt="Logo" srcSet="" /></Link>
      <div className="header-right">
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  )
}

export default Navbar;