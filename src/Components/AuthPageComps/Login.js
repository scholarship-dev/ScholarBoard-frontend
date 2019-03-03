import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { signupUser } from '../../js/actions/index';


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      email: '',
    };
  }

  render() {
    return (
      <div className="auth-page">

        <section className="form-container">

          <form onSubmit={this.handleSubmit}>

            <div className="signup-fields">

              <legend>
                Login
              </legend>

              <label htmlFor="email">
                Email
              </label>

              <input
                name="email"
                id="email"
                type="text"
                placeholder="Email"
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
                placeholder="Password"
                required
              />

              <button
                className="btn signup-submit"
                type="submit"
              >
                Login
              </button>

              <p>
                Need to make an account?
                <Link to="/signup">
                  Sign up here
                </Link>
              </p>

            </div>
          </form>


          <div className="info-section gradient">
            <h1>
              Time to apply for those scholarships!
            </h1>
          </div>

        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

function mapDispatchToProps() {
  return {
    signupUser,
  };
}

const SignupUser = connect(mapStateToProps, mapDispatchToProps())(Signup);

export default SignupUser;
