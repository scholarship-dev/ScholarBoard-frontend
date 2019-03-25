import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import whiteLogo from '../../images/home/white-header-logo.png';


class Navbar extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   navToggle: false,
  //   // };
  // }

  dropDown = () => {
    // this.setState({
    //   navToggle: true,
    // });
  }

  render() {
    return (
      <nav>

        <Link to="/">
          <img
            src={whiteLogo}
            alt="Logo"
            className="white-header-logo"
          />
        </Link>

        <div className="nav-right">

          <NavLink to="/login">Login</NavLink>

          <NavLink to="/signup">Signup</NavLink>

          <i
            onClick={this.dropDown}
            className="fas fa-bars"
            onKeyDown={this.dropDown}
            role="button"
            tabIndex={0}
          />

        </div>
      </nav>
    );
  }
}


export default Navbar;
