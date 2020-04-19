import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Publication from '../components/Resume/Publication';

import conference from '../data/resume/conference';
import review from '../data/resume/review';

const publication = () => (
  <Main>
    <Helmet title="Publication" />
    <article className="post" id="">
      <header>
        <div className="title">
          <h2><Link to="publication">Publications</Link></h2>
        </div>
      </header>
      <h3>Published Papers</h3>
      <Publication data={conference} />
      <h3>Under Review</h3>
      <Publication data={review} />
    </article>
  </Main>
);

export default publication;
