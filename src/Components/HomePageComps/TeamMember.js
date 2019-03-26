import React from 'react';
import PropTypes from 'prop-types';


const TeamMember = ({ name, description, img, alt }) => (
  <div className="team-member">
    <img src={img} alt={alt} />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

TeamMember.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
};

TeamMember.defaultProps = {
  name: 'Sarah',
  description: 'lorem ipsum',
  img: 'hey',
  alt: 'An image',
};


export default TeamMember;
