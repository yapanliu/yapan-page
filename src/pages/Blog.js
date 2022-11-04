import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Blogs/Cell';
// import YoutubeCell from '../components/Blogs/YoutubeEmbed';
import data from '../data/blogs';

const Projects = () => (
  <Main
    title="Blog"
    description="Research blogs and videos."
  >
    <article className="post" id="blogs">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Research Blogs</Link></h2>
          <p>A selection of posts that highlight my interested research work.</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
      {/* <div className="App">
        <YoutubeCell title="Human Mobility Tracking" date="2022-10-23" embedId="m2b41ppw03w" />
      </div> */}
    </article>
  </Main>
);

export default Projects;
