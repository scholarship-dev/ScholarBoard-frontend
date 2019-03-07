import React from 'react';
import Feature from './Feature';

const Features = () => (
  <div className="Features page-section">
    <h2>How it works</h2>
    <section className="feature-content">
      <div className="feature-step signup">
        <section className="feature-step-content">
          <Feature
            step="Step 1. Sign Up"
            description="We use the data you provide on when you sign up to
              scrape the web for relevant scholarships that match your profile."
          />
        </section>
      </div>

      <div className="feature-step dashboard">
        <section className="feature-step-content d">
          <Feature
            step="Step 2. Your Dashboard"
            description="You can view all the scholarships that
            were curated just for you beautifully placed in your dashboard."
          />
        </section>
      </div>

      <div className="feature-step apply">
        <section className="feature-step-content">
          <Feature
            step="Step 3. Apply"
            description="You can click on each scholarship to apply to them directly.
            No need to examine if it fits you, our algorithm does it for you!"
          />
        </section>
      </div>


      <div className="feature-step celebrate">
        <section className="feature-step-content">
          <Feature
            step="Step 4. Celebrate"
            description="Give yourself a pat on the back! By using Scholarboard you have saved thousands of hours searching for scholarships."
          />
        </section>
      </div>

    </section>
  </div>
);


export default Features;
