import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Publication from '../components/Resume/Publication';

import conference from '../data/resume/conference';

const publication = () => (
  <Main>
    <Helmet title="Publication" />
    <article className="post" id="">
      <header>
        <div className="title">
          <h2><Link to="publication">Publications</Link></h2>
        </div>
      </header>
      <Publication data={conference} />
    </article>
  </Main>
);

export default publication;
