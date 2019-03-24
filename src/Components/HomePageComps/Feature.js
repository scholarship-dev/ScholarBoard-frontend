import React from 'react';

const Feature = ({ step, description, img, alt }) => (
  <>
    <img src={img} alt={alt} />
    <h4>{step}</h4>
    <p>{description}</p>
  </>
);


export default Feature;
