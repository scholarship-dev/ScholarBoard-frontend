import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import ScholarshipImg from '../../images/headerlogo.png';

const Header = () => (
    <header>

        <span role="img" aria-label="Grad Icon">
            🎓
            </span>
        <h3>
            <Typed
                strings={['Scholarship search made easy for students.']} typeSpeed={20}
            />
        </h3>

        <p className="top-sentence">ScholarBoard allows students to fill out a common application that can be used to apply to dozens of scholarships relevent to them with a click of a button.</p>

        <Link to="/signup">
            <button className="btn">Sign up</button>
        </Link>

        <img className="scholarship-img" src={ScholarshipImg} alt="Scholarship" />
    </header>
);


export default Header;
