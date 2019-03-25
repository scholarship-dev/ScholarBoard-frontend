import React from 'react';




const Scholarship = ({ name, description, id, funding }) => (
  <div className="scholarship" key={id}>
    <h1>{name}</h1>
    <p>{description.slice(0, 150) + '...'}</p>
    <section className="scholarship-bottom">
      <p>Funding: {funding}</p>
      <button>View Details</button>
    </section>
  </div>
);


export default Scholarship;
