import React from 'react';

const Scholarship = ({ name, description, id, funding }) => (
  <div className="scholarship" key={id}>
    <h1>{name}</h1>
    <p>{description}</p>
    <p>Funding: {funding}</p>
  </div>
);


export default Scholarship;
