import React from 'react';
import Navbar from './Navbar';
import ShortFooter from './ShortFooter';
import SignupForm from './SignupForm';


const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="signup-page">
        <SignupForm />
      </div>
      <ShortFooter />
    </div>
  )
}

export default Signup;