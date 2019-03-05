import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../js/actions';
import logo from '../../images/logo2black.png';


const Navbar = ({ user, logoutUser }) => {
  if (user) {
    return (
      <nav>
        <Link to="/">

          <img
            className="header-logo"
            src={logo}
            alt="Logo"
            srcSet=""
          />

        </Link>

        <div className="nav-right">
          <button
            type="submit"
            className="btn"
            onClick={logoutUser}
          >
            Logout
          </button>

        </div>
      </nav>
    );
  }
  return (
    <nav>

      <Link to="/">
        <img
          className="header-logo"
          src={logo}
          alt="Logo"
          srcSet=""
        />
      </Link>

      <div className="nav-right">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};


// const mapStateToProps = state => ({ user: state.user });
// function mapDispatchToProps() {
//   return {
//     logoutUser,
//   };
// }
// const UserNavbar = connect(mapStateToProps, mapDispatchToProps())(Navbar);

export default Navbar;
