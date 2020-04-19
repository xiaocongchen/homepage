import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Main from '../layouts/Main';
import markdown from '../data/about.md';

const LinkRenderer = ({ ...children }) => <Link {...children} />;
const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About Me</Link></h2>
          <p>Welcome!</p>
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

export default Index;
