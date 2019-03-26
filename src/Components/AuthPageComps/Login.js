import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

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
    return (
      <div className="auth-page">

        <section
          className="form-container"
        >

          <form
            onSubmit={this.handleSubmit}
          >

            <div className="signup-fields">
              <legend>Login</legend>

              <label htmlFor="email">
                Email
                  </label>

              <input
                name="email"
                id="email" type="text"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="password">
                Password
                  </label>

              <input
                name="password"
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />

              <button
                type="submit">
                Login
                  </button>

              <p>
                Need to make an account? <Link to="/signup">
                  Sign up here
                  </Link>
              </p>
            </div>

          </form>
        </section>
      </div>
    );
  }
}
export default Login;