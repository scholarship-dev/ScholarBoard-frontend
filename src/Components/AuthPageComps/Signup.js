import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupUser } from '../../js/actions/index';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      gpa: '',
      ethnicity: '',
      educationLevel: '',
      grade: '',
      password: ''
    };
  };

  // validateForm() {
  //   return this.state.firstName.length > 0 &&  this.state.lastName.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
  // };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signupUser(this.state);
  };

  render() {
    return (
      <div className="auth-page">

        <section
          className="form-container"
        >

          <form
            className="signup-form"
            onSubmit={this.handleSubmit}
          >

            <div className="signup-fields">
              <legend>Create An Account</legend>

              <label
                htmlFor="firstname">
                First Name
              </label>

              <input
                name="firstname"
                id="firstname"
                type="text"
                value={this.state.firstname}
                onChange={this.handleChange}
                required
              />

              <label
                htmlFor="lastname">
                Last Name
              </label>

              <input
                name="lastname"
                id="lastname"
                type="text"
                value={this.state.lastname}
                onChange={this.handleChange}
                required
              />

              <label
                htmlFor="email">
                Email
              </label>

              <input
                name="email"
                id="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />

              <label
                htmlFor="gpa">
                GPA
              </label>

              <input
                name="gpa"
                id="gpa"
                type="number"
                value={this.state.gpa}
                onChange={this.handleChange}
                required
              />

              <label
                htmlFor="ethnicity">
                Ethnicity
              </label>

              <input
                name="ethnicity"
                id="ethnicity"
                type="text"
                value={this.state.ethnicity}
                onChange={this.handleChange}
                required
              />

              <label
                htmlFor="educationLevel">
                Education Level
              </label>

              <input
                name="educationLevel"
                id="educationLevel"
                type="text"
                value={this.state.educationLevel}
                onChange={this.handleChange}
                required
              />

              <label
                htmlFor="grade">
                Grade
              </label>

              <input
                name="grade"
                id="grade"
                type="text"
                value={this.state.grade}
                onChange={this.handleChange}
                required
              />

              <label
                htmlFor="password">
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
                Signup
              </button>
              <p>
                Already have an account?

              <Link to="/login">
                  Login here
              </Link>

              </p>
            </div>

          </form>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => { user: state.user };


function mapDispatchToProps() {
  return {
    signupUser
  };
};
const SignupUser = connect(mapStateToProps, mapDispatchToProps())(Signup);

export default SignupUser;
