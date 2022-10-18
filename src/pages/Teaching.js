import React from 'react';
import PropTypes from 'prop-types';

import Main from '../layouts/Main';

import Teachings from '../components/Teachings/Teachings';

import teaching from '../data/teaching/teaching';

const Experience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="teaching" />
    {data.map((job) => (
      <Teachings
        data={job}
        key={job.daterange}
      />
    ))}
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    professor: PropTypes.string,
    course: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Experience.defaultProps = {
  data: [],
};

const Teaching = () => (
  <Main
    title="Teaching"
    description="Yapan Liu's teaching experience."
  >
    <article className="post" id="teaching">
      <header>
        <div className="title">
          <h2 data-testid="heading">Teaching Experience</h2>
        </div>
      </header>
      <Experience data={teaching} />

    </article>
  </Main>
);

export default Teaching;
