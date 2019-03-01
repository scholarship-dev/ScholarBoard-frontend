import React, { Component } from 'react';
// import SignupForm from './SignupForm';
import { connect } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import { loginUser } from "../../js/actions/index";
// import logo from '../../images/logo2black.png';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {

    if (this.props.user) {
      return <Redirect to='/dashboard' />
    };

    return (
      <div className="signup-page">
        <section className="signup-section">
          <form className="signup-form" onSubmit={this.handleSubmit}>

            <div className="signup-fields">
              <h2 className="legend">Login</h2>
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />


              <label htmlFor="password">Password</label>
              <input name="password" id="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />

              <button className="btn signup-submit" type="submit">Login</button>
              <p>Need to make an account? <Link to="/signup">Sign up here</Link></p>
            </div>
          </form>


          <div className="signup-info-section blue-green-gradient">
            <h1>Time to apply for those scholarships!</h1>
          </div>

        </section>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return { user: state.user };
};

function mapDispatchToProps() {
  return {
    loginUser
  };
};
const LoginUser = connect(mapStateToProps, mapDispatchToProps())(Login);

export default LoginUser;
