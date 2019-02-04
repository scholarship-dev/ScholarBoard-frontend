import React from 'react';
import ScholarshipImg from '../Images/scholarship.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <section className='home-top'>
      <div className="info-section">
        <h3 className="slogan">🎓 Scholarships made easy for high schoolers</h3>
        <p className="top-sentence">ScholarBoard allows students to fill out a common application that can be used to apply to dozens of scholarships relevent to them with a click of a button.</p>
        <Link to='/signup'><button className="btn">Sign up</button></Link>
        <p className="credits">Created by <span>Asim</span>, <span>Medi</span>, <span>Thomas</span>, and <span>William</span>.</p>
      </div>

      <div className="img-section">
        <img className="scholarship-img" src={ScholarshipImg} alt="Scholarship"></img>
      </div>

    </section>
  )
}

export default Header;