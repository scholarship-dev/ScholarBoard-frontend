import React, { Component } from 'react';
import logo from '../../images/logo2black.png';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutUser } from "../../js/actions/";

class Navbar extends Component {

  render() {
    if (this.props.user) {
      return (
        <div className="header">
          <Link to="/"><img href="#default" className="header-logo" src={logo} alt="Logo" srcSet="" /></Link>
          <div className="header-right">
            <button onClick={this.props.logoutUser}>Logout</button>
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
function mapDispatchToProps() {
  return {
    logoutUser
  };
};
const UserNavbar = connect(mapStateToProps, mapDispatchToProps())(Navbar);

export default UserNavbar
// export default Navbar;