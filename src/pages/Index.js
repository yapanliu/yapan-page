import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

// total words in the markdown file
// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Index = () => (
  <Main
    description={"Yapan Liu's personal website."
    + 'Ph.D. Candidate from Syracuse University.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">About me</h2>
          {/* <p> This website is under development. </p> */}
        </div>
      </header>
      {/* <p> I&apos;m a Ph.D. Candidate at Syracuse University, NY
        and focus on using advanced machine learning tools for
        building-level control optimization and energy savings.
        I also work with urban scale human mobility data to understand
        human behaviors at city level.
        <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}.
      </p> */}

      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />

    </article>

  </Main>
);

export default Index;
