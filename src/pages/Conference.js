import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdownPre = raw('../data/presentations.md');
const markdownConf = raw('../data/conference.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Publication = () => (
  <Main
    description="A list of presentations and conference attended."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"> Presentations </h2>
        </div>
      </header>

      <ReactMarkdown
        linkTarget="_blank"
        source={markdownPre}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>

    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"> Conference </h2>
        </div>
      </header>

      <ReactMarkdown
        linkTarget="_blank"
        source={markdownConf}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>

  </Main>
);

export default Publication;
