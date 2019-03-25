import React from 'react';
import PropTypes from 'prop-types';


const Scholarship = ({ name, description, id, funding }) => (
  <div className="scholarship" key={id}>
    <h1>{name}</h1>
    <p>{`${description.slice(0, 150)} ...`}</p>
    <section className="scholarship-bottom">
      <p>
        Funding:
        {funding}
      </p>
      <button type="submit">View Details</button>
    </section>
  </div>
);

Scholarship.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  funding: PropTypes.number,
};

Scholarship.defaultProps = {
  name: 'Sarah',
  description: 'lorem ipsum',
  id: 1234,
  funding: 1234,
};

export default Scholarship;
