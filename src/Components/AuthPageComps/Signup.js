import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      ethnicity: '',
      educationLevel: '',
      grade: '',
      password: '',
    };
  }

  handleChange = (event) => {
    console.log(event.target.id);
    this.setState(
      {
        [event.target.id]: event.target.value,
      },
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const {
      firstName, lastName, email, gpa,
      ethnicity, educationLevel, grade, password,
    } = this.state;

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
                htmlFor={firstName}
              >
                First Name
                <br />
                <input
                  name={firstName}
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={this.handleChange}
                  required
                />
              </label>

              <label
                htmlFor={lastName}
              >
                Last Name
                <br />
                <input
                  name={lastName}
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={this.handleChange}
                  required
                />
              </label>


              <label
                htmlFor="email"
              >
                Email
                <br />
                <input
                  name="email"
                  id="email"
                  type="text"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </label>


              <label
                htmlFor="password"
              >
                Password
                <br />
                <input
                  name="password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
              </label>

              <label
                htmlFor="gpa"
              >
                GPA
                <br />
                <input
                  name="gpa"
                  id="gpa"
                  type="text"
                  value={gpa}
                  onChange={this.handleChange}
                  required
                />
              </label>

              <fieldset>

                <label
                  htmlFor={ethnicity}
                >
                  Ethnicity
                  <select
                    required
                    id="ethnicity"
                    onChange={this.handleChange}
                    name="ethnicity"
                    value={ethnicity}
                  >

                    <option disabled="disabled">-- Select your ethnicity --</option>
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
                </label>


              </fieldset>

              <fieldset>
                <label
                  htmlFor="educationLevel"
                >
                  Education Level
                  <select
                    required
                    value={educationLevel}
                    onChange={this.handleChange}
                    id="educationLevel"
                  >
                    <option value="highschool">Highschool</option>
                    <option value="college">College</option>
                  </select>
                </label>
              </fieldset>


              <label
                htmlFor={grade}
              >
                Grade
                <select
                  id="grade"
                  required
                  value={grade}
                  onChange={this.handleChange}
                  name="grade"
                >

                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                </select>
              </label>

              <button
                type="submit"
              >
                Signup
              </button>

              <p>
                Already have an account?
              </p>

              <Link to="/login">
                Login here
              </Link>

            </div>

          </form>
        </section>
      </div>
    );
  }
}


export default Signup;
