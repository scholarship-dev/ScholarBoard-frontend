import React from 'react';
import logo from '../Images/logo2black.png';

const Navbar = () => {

  return (
    <div className="header btm-shadow">
      <img href="#default" className="header-logo" src={logo} alt="Logo" srcSet="" />
      <div className="header-right">
        <a className="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#login">Login</a>

      </div>
    </div>
  )
}

export default Navbar;