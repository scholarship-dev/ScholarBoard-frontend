import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import headerPeople from '../../images/home-page-pics/header-people.png';

const Header = () => (
    <header>

        <section className="cta-content a">
            <h1>
                <Typed
                    strings={['Scholarship search made easy for students.']} typeSpeed={20}
                />
            </h1>

            <p>
                ScholarBoard allows students to fill out a common application that can be used to apply to dozens of scholarships relevant to them with a click of a button.
            </p>



        </section>
        <div className="button">
            <Link to="/signup" className="b">
                <button className="btn">Sign up</button>
            </Link>
        </div>


        <img className="c" src={headerPeople} alt="svg of  people" />

    </header>
);


export default Header;
