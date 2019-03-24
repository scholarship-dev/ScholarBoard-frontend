import React from 'react';
import signUp from '../../images/home-page-pics/signup.jpg';
import dashboard from '../../images/home-page-pics/dashboard.jpg';
import apply from '../../images/home-page-pics/apply.jpg';
import party from '../../images/home-page-pics/party.jpg';


import Feature from './Feature';

const Features = () => (
  <div className="Features page-section">
    <h2>How it works</h2>

    <section className="feature-section">

          <Feature
              img={signUp}
              alt="The image for signup"
              step="Step 1. Sign Up"
            description="We use the data you provide on when you sign up to
              scrape the web for relevant scholarships that match your profile."
          />

          <Feature
            step="Step 2. Your Dashboard"
            description="You can view all the scholarships that
            were curated just for you beautifully placed in your dashboard."
            img={dashboard}
            alt="An image of a dashboard"
          />

          <Feature
            step="Step 3. Apply"
            description="You can click on each scholarship to apply to them directly.
            No need to examine if it fits you, our algorithm does it for you!"
            img={apply}
            alt="Applying for a scholarship"
          />




          <Feature
            step="Step 4. Celebrate"
            description="Give yourself a pat on the back! By using Scholarboard you have saved thousands of hours searching for scholarships."
            img={party}
            alt="Celebrate"
          />

      </section>
  </div>
);


export default Features;
