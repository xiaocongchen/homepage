import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      {/* eslint-disable-next-line max-len */}
      <h4>{data.authors},<u>{data.title}</u></h4><p><a href={data.link}>{data.name}</a> {data.daterange},{data.location}</p>
    </header>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    authors: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Job;
