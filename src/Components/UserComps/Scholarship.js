import React from 'react';

const Scholarship = ({ name, description, id, funding }) => (
  <div className="scholarship" key={id}>
    <h1>{name}</h1>
    <h3>{description}</h3>
    <p>{funding}</p>
  </div>
);


export default Scholarship;
