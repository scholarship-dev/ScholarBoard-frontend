import React from 'react';
import logo from '../images/logo2black.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="header btn-shadow">
      <Link to="/"><img href="#default" className="header-logo" src={logo} alt="Logo" srcSet="" /></Link>
      <div className="header-right">
        <Link to='/' className="active" >Home</Link>
        {/* <a href="/contact">Contact</a> */}
        <Link to='/about'>About</Link>
        <Link to='/login'>Login</Link>

      </div>
    </div>
  )
}

export default Navbar;