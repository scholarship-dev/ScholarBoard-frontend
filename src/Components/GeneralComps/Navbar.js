import React, { Component } from 'react';
import logo from '../../images/logo2black.png';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Navbar extends Component {

  render() {
    if (this.props.user) {
      return (
        <div className="header">
          <Link to="/"><img href="#default" className="header-logo" src={logo} alt="Logo" srcSet="" /></Link>
          <div className="header-right">
            <Link to='/logout'>Logout</Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className="header">
          <Link to="/"><img href="#default" className="header-logo" src={logo} alt="Logo" srcSet="" /></Link>
          <div className="header-right">
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        </div>
      );
    }
  }
};

const mapStateToProps = state => {
  return { user: state.user };
};

const UserNavbar = connect(mapStateToProps, null)(Navbar);

export default UserNavbar
// export default Navbar;