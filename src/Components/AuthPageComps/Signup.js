import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { signupUser } from '../../js/actions';

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

  handleSubmit(event) {
    event.preventDefault();
    // this.props.signupUser(this.state);
    // this.props.history.push('/dashboard')
    console.log(this.state)
  };

  render() {
    return (
      <div className="auth-page">

        <section
          className="form-container"
        >

          <form
            className="signup-form"
            onSubmit={this.handleSubmit.bind(this)}
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

              <fieldset>

                <select
                  required
                  id="ethnicity"
                  onChange={this.handleChange}
                  name="ethnicity"
                  value={this.state.ethnicity}
                >

                  <option selected="selected" disabled="disabled">-- select one --</option>
                  <optgroup label="White">
                    <option value="White English">English</option>
                    <option value="White Welsh">Welsh</option>
                    <option value="White Scottish">Scottish</option>
                    <option value="White Northern Irish">Northern Irish</option>
                    <option value="White Irish">Irish</option>
                    <option value="White Gypsy or Irish Traveller">Gypsy or Irish Traveller</option>
                    <option value="White Other">Any other White background</option>
                  </optgroup>
                  <optgroup label="Mixed or Multiple ethnic groups">
                    <option value="Mixed White and Black Caribbean">White and Black Caribbean</option>
                    <option value="Mixed White and Black African">White and Black African</option>
                    <option value="Mixed White Other">Any other Mixed or Multiple background</option>
                  </optgroup>
                  <optgroup label="Asian">
                    <option value="Asian Indian">Indian</option>
                    <option value="Asian Pakistani">Pakistani</option>
                    <option value="Asian Bangladeshi">Bangladeshi</option>
                    <option value="Asian Chinese">Chinese</option>
                    <option value="Asian Other">Any other Asian background</option>
                  </optgroup>
                  <optgroup label="Black">
                    <option value="Black African">African</option>
                    <option value="Black African American">African American</option>
                    <option value="Black Caribbean">Caribbean</option>
                    <option value="Black Other">Any other Black background</option>
                  </optgroup>
                  <optgroup label="Other ethnic groups">
                    <option value="Arab">Arab</option>
                    <option value="Hispanic">Hispanic</option>
                    <option value="Latino">Latino</option>
                    <option value="Native American">Native American</option>
                    <option value="Pacific Islander">Pacific Islander</option>
                    <option value="Other">Any other ethnic group</option>
                  </optgroup>
                </select>

              </fieldset>

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
              </button >

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

const mapStateToProps = state => {
  return { user: state.user };
};

console.dir(signupUser)

const mapDispatchToProps = (dispatch) => bindActionCreators({ signupUser }, dispatch);

const SignupUser = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupUser;
