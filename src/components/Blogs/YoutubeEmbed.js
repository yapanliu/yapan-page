import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import '../../static/css/components/_youtube-embed.scss';

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width=""
      height=""
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

const YoutubeCell = ({ title, date, embedId }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>{ title }</h3>
        <time className="published">Posted: {dayjs(date).format('MMMM, YYYY')}</time>
      </header>
      <YoutubeEmbed embedId={embedId} />
      <div className="description">
        {/* <p> This is a test! </p> */}
      </div>
    </article>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

YoutubeCell.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  embedId: PropTypes.string.isRequired,
};

export default YoutubeCell;
