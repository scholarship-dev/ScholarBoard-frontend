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
            description="We use the data you provide in the sign up page to
              scrape the web for relevant scholarships that match your profile."
          />
        </section>
      </div>

      <div className="feature-step apply">
        <section className="feature-step-content">    
          <Feature
            step="Step 2. Your Dashboard"
            description="You can view all the scholarships that
            match your description beautifully placed in your dashboard"
          />
        </section>
      </div>

      <div className="feature-step apply">
        <section className="feature-step-content">
          <Feature
            step="Step 3. Apply"
            description="You can click on each scholarships to apply to them directly.
            No need to examine if it fits you, our algorithm does it for you!"
          />
        </section>
      </div>


      <div className="feature-step celebrate">
        <section className="feature-step-content">
          <Feature
            step="Step 4. Celebrate"
            description="  Lorem ipsum dolor,
            sit amet consectetur adipisicing elit.
            Quia dolores molestias
            vitae corrupti esse sunt nemo
            debitis tempora ex quo!"
          />
        </section>
      </div>

    </section>
  </div>
);


export default Features;
