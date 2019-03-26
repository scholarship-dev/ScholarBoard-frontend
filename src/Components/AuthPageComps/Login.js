import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
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
  };


  render() {
    const { email, password } = this.state;

    return (
      <div className="auth-page">

        <section className="form-container">
          <form
            onSubmit={this.handleSubmit}
            className="login"
          >

            <div className="login-fields">
              <legend>Login</legend>

              <label htmlFor={email}>
                Email
                <br />
                <input
                  ref={this.inputRef}
                  name="email"
                  id="email"
                  type="text"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </label>

              <label htmlFor={password}>
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

              <button
                type="submit"
              >
                Login
              </button>

              <p>
                Need to make an account?

                <br />
              </p>
              <Link to="/signup">
                Sign up here
              </Link>
            </div>
          </form>
          <div />
        </section>
      </div>
    );
  }
}

export default Login;
