import React from 'react';
import PropTypes from 'prop-types';

const Teachings = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4>{data.course}</h4>
      <p className="daterange">{data.position} for {data.professor}</p>
      {/* <p className="daterange">{data.position}</p> */}
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Teachings.propTypes = {
  data: PropTypes.shape({
    professor: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Teachings;
