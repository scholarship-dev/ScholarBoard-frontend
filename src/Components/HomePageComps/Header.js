import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import headersvg from '../../images/svg/header-svg.png';

const Header = () => (
    <header>

        <section className="cta-content">
            {/* TODO: Replace the emoji with a picture of a cap. Emojis don't render on all screens
            <span role="img" aria-label="Grad Icon"> 🎓
        </span> */}

            <h1>
                <Typed
                    strings={['Scholarship search made easy for students.']} typeSpeed={20}
                />
            </h1>

            <p>
                ScholarBoard allows students to fill out a common application that can be used to apply to dozens of scholarships relevent to them with a click of a button.
            </p>

            <Link to="/signup">
                <button className="btn">Sign up</button>
            </Link>
        </section>

        <img src={headersvg} alt="svg of  people" />

    </header>
);


export default Header;
