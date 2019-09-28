import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Xiaocong Chen</h2>
        <p><a href="mailto:xiaocong.chen@unsw.edu.au">xiaocong.chen@unsw.edu.au</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Xiaocong.
          {/* eslint-disable-next-line max-len */}
          I am a first year research student at School of Computer Science and Engineering, University of New South Wales (UNSW), Australia. My research interest includes machine learning, data mining and deep learning.
          Currenlty, I&apos;m focusing on the interactive recommendation system.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">About Me</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;
