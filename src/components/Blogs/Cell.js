import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header id={data.title.replace(/\s/g, '-')}>
        <h3>{data.title}</h3>

        {data.publish === true ? (
          <p className="daterange">
            <a href={data.paperLink} target="_blank" rel="noopener noreferrer">Paper Published</a>
          </p>
        ) : null }

        <time className="published">Posted: {dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} target="_blank" rel="noopener noreferrer" className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    subtitle: PropTypes.string,
    publish: PropTypes.bool.isRequired,
    paperLink: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
