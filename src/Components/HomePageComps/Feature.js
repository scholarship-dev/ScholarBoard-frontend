import React from 'react';

const Feature = ({ step, description, img, alt }) => (
  <div className="feature">
    <img src={img} alt={alt} />
    <h4>{step}</h4>
    <p>{description}</p>
  </div>
);


export default Feature;
