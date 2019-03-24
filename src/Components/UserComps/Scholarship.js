import React from 'react';

const Scholarship = ({ name, description, id, funding }) => (
  <div className="scholarship" key={id}>
    <h1>{name}</h1>
    <p>{description.slice(0, 200) + '...'}</p>
    <p>Funding: {funding}</p>
  </div>
);


export default Scholarship;
