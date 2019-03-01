import React, { Component } from 'react';
// import SignupForm from './SignupForm';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { signupUser } from "../../js/actions/index";


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      email: ''
    };
  };

  // validateForm() {
  //   return this.state.firstName.length > 0 &&  this.state.lastName.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
  // };

  handleChange = event => {
    console.log("in handel");

    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    console.log("in submit func");
    event.preventDefault();
    this.props.signupUser(this.state);
  };

  render() {

    if (this.props.user) {
      return <Redirect to='/dashboard' />
    };
    return (
      <div>
        <div className="signup-page">

          <section className="signup-section">
            <form className="signup-form" onSubmit={this.handleSubmit}>

              <div className="signup-fields">
                <h2 className="legend">Create Account</h2>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />

                <label htmlFor="password">Password</label>
                <input name="password" id="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />


                <button className="btn signup-submit" type="submit">Signup</button>
                <p>Already have an account? <span>Login here</span></p>
              </div>
            </form>

            {/* <div className="signup-info-section blue-green-gradient">
                <h1>Sign up to join ScholarBoard for free!</h1>
            </div> */}

          </section>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return { user: state.user };
};

function mapDispatchToProps() {
  return {
    signupUser
  };
};
const SignupUser = connect(mapStateToProps, mapDispatchToProps())(Signup);

export default SignupUser;
