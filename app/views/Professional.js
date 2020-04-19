import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

import markdown from '../data/professional.md';


// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Professional = () => (
  <Main>
    <Helmet title="Professional Service" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2><Link to="/about">Professional Service</Link></h2>
        </div>
      </header>
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

export default Professional;
