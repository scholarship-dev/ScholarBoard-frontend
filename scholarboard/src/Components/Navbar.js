import React from 'react';
import '../Styles/Navbar.css';



const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='navbar'>
          <a href="/">
            <li>[Logo]</li>
          </a>
          <a href="#Features">
            <li>Features</li>
          </a>
          <a href="#About">
            <li>About</li>
          </a>
          {/* TODO: Come back and add routes to the components */}
          <a href="#Signup comp">
            <li>Sign up</li>
          </a>
          <a href="#Login comp">
            <li>Sign Up</li>
          </a>
        </ul>
      </nav>
    </div>
  )
}


export default Navbar;