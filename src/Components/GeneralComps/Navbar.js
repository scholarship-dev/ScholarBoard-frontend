import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import whiteLogo from '../../images/home-page-pics/white-header-logo.png';


class Navbar extends Component {
  constructor(props) {
    super(props);

    this.navRef = React.createRef();
  }

  dropDown = () => {
    console.log(this.navRef)
  }

  render() {
    return (
      <nav ref={this.navRef} className="main" >

        <Link to="/">
          <img src={whiteLogo}
            alt="Logo"
            className="white-header-logo"
          />
        </Link>

        <div className="nav-right">

          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>

          <i onClick={this.dropDown} className="fas fa-bars"></i>
        </div>
      </nav>
    )
  }
}

export default Navbar;
