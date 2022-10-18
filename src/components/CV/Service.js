import React from 'react';
import PropTypes from 'prop-types';

import Serve from './Experience/Serve';

const Service = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="service" />
    <div className="title">
      <h3>Service</h3>
    </div>
    {data.map((job) => (
      <Serve
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Service.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Service.defaultProps = {
  data: [],
};

export default Service;
