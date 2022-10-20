import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/publications.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Publication = () => (
  <Main
    description={"Yapan Liu's personal website."
    + 'Ph.D. Candidate from Syracuse University.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"> Publications </h2>
        </div>
      </header>

      <ReactMarkdown
        linkTarget="_blank"
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>

  </Main>
);

export default Publication;
