// import React from 'react';
// import logo from '../Images/logo2black.png';


// const SignupForm = () => {
//   return (
//     <section className="signup-section">

//         <form className="signup-form" onSubmit={this.handleSubmit}>
//             <img className="signup-small-logo" alt="Logo" src={logo} />
//             <div className="signup-fields">
//                 <h2 class="legend">Create Account</h2>
//                 <label htmlFor="firstName">First Name</label>
//                 <input name="firstName" type="text" value={this.state.firstName} placeholder="First Name" required/>
                
//                 <label htmlFor="lastName">Last Name</label>
//                 <input name="lastName" type="text" value={this.state.lastName} placeholder="Last Name" required/>

//                 <label htmlFor="email">Email</label>
//                 <input name="email" type="email" value={this.state.email} placeholder="email" required/>

//                 <label htmlFor="gpa">GPA</label>
//                 <input name="gpa" type="text" value={this.state.gpa} placeholder="3.0" required/>

//                 <label htmlFor="gpa">Email</label>
//                 <input name="gpa" type="text" value={this.state.gpa} placeholder="3.0" required/>

//                 <label htmlFor="ethnicity">Ethnicity</label>
//                 <input name="ethnicity" type="text" value={this.state.ethnicity} placeholder="Ethnicity" required/>   
                
//                 <label htmlFor="educationLevel">Education Level</label>
//                 <input name="educationLevel" type="text" value={this.state.educationLevel} placeholder="Education Level"/>      

//                 <label htmlFor="grade">Grade</label>
//                 <input name="grade" type="text" value={this.state.grade} placeholder="Grade"/>      

//                 <label htmlFor="password">Password</label>
//                 <input name="password" type="password" placeholder="Password" required/>

//                 <button className="btn signup-submit" type="submit" disabled={!this.validateForm()}>Signup</button>
//                 <p>Already have an account? <span>Login here</span></p>
//             </div>
//         </form>
        
//         <div className="signup-info-section blue-green-gradient">
//             <h1>Sign up to join ScholarBoard for free!</h1>
//         </div>

//       </section>
//   )
// }

// export default SignupForm;