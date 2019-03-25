import React from 'react';
import PropTypes from 'prop-types';


const Feature = ({ step, description, img, alt }) => (
  <div className="feature">
    <img src={img} alt={alt} />
    <h4>{step}</h4>
    <p>{description}</p>
  </div>
);


Feature.propTypes = {
  step: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
};

Feature.defaultProps = {
  step: 'Sarah',
  description: 'lorem ipsum',
  img: 'hey',
  alt: 'An image',
};


export default Feature;
