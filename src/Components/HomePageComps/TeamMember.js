import React from 'react';

// TODO: Fix proptypes error later
const TeamMember = ({ name, description, img, alt }) => (
  <div className="team-member">
    <img src={img} alt={alt} />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);


export default TeamMember;
