import React from 'react';
import logo from '../Images/logo2black.png';


const SignupForm = () => {
  return (
    <section className="signup-section">

        <form className="signup-form">
            <img className="signup-small-logo" alt="Logo" src={logo} />

            <div className="signup-fields">
                <h2 class="legend">Create Account</h2>
                <label htmlFor="firstName">First Name</label>
                <input name="firstName" type="text" placeholder="First Name" required/>
                
                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" type="text" placeholder="Last Name" required/>

                <label htmlFor="email">Email</label>
                <input name="email" type="email" placeholder="email" required/>

                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="Password" required/>

                <button className="btn signup-submit" type="submit"><a classhref="/dashboard">Signup</a></button>

                <p>Already have an account? <span>Login here</span></p>
            </div>
        </form>
        <div className="signup-info-section blue-green-gradient">
            <h1>Sign up to join ScholarBoard for free!</h1>
        </div>
      </section>
  )
}

export default SignupForm;