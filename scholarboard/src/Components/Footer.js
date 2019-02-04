import React from 'react';
import logo from '../Images/logo2white.png';

const Footer = () => {
  return (
    <footer className="footer top-shadow">
      <img className="footer-logo" src={logo} alt="Scholarship Logo"></img>
      <p className="footer-credits"><span role="img" aria-label="Grad Icon">💻</span> Built by Asim, Medi, Thomas and William <span role="img" aria-label="Grad Icon">🎓</span></p>
    </footer>
  )
}

export default Footer;