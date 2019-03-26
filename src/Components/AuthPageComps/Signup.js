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
      confirmPassword: '',
    };
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.id]: event.target.value,
      },
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const {
      firstName, lastName, email, gpa,
      ethnicity, educationLevel, grade, password, confirmPassword,
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
                />
              </label>

              <label
                htmlFor="confirmPassword"
              >
                Confirm Password
                <br />
                <input
                  name="confirmPassword"
                  id="confirmPassword"
                  type="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleChange}
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

                />
              </label>

              <fieldset>

                <label
                  htmlFor={ethnicity}
                >
                  Ethnicity

                  <select
                    id="ethnicity"
                    onChange={this.handleChange}
                    name="ethnicity"
                    value={ethnicity}
                    placeholder="White"
                  >

                    <option disabled="disabled">-- Select your ethnicity --</option>
                    <option style={
                      {
                        display: 'none',
                      }
                    }
                    />
                    <option value="Hispanic">Hispanic</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Asian Indian">Asian</option>
                    <option value="Asian">Asian</option>
                    <option value="Latino">Latino</option>
                    <option value="Native American">Native American</option>
                    <option value="Not given">None</option>
                  </select>
                </label>


              </fieldset>

              <fieldset>
                <label
                  htmlFor="educationLevel"
                >
                  Education Level
                  <select

                    value={educationLevel || 'Highschool'}
                    onChange={this.handleChange}
                    id="educationLevel"
                  >
                    <option style={
                      {
                        display: 'none',
                      }
                    }
                    />
                    <option value="highschool">Highschool</option>
                    <option value="college">College</option>
                  </select>

                  <label
                    htmlFor={grade}
                  >
                    Grade
                    <select
                      id="grade"

                      value={grade}
                      onChange={this.handleChange}
                      name="grade"
                    >
                      <option style={
                        {
                          display: 'none',
                        }
                      }
                      />
                      <option value="junior">Junior</option>
                      <option value="senior">Senior</option>
                    </select>
                  </label>
                </label>
              </fieldset>


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
