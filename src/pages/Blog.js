import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Blogs/Cell';
import YoutubeEmbed from '../components/Blogs/YoutubeEmbed';
import data from '../data/blogs';

const Projects = () => (
  <Main
    title="Blogs"
    description="Posts created by Yapan Liu."
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
      <div className="App">
        <h1>Youtube Embed</h1>
        <YoutubeEmbed embedId="m2b41ppw03w" />
      </div>
    </article>
  </Main>
);

export default Projects;
