import React from 'react';
import PropTypes from 'prop-types';

import Job from './Pub/Job';

const Publication = ({ data }) => (
  <div className="publication">
    <div className="link-to" id="publication" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    {data.map((paper) => (
      <Job
        data={paper}
        key={paper.title}
      />
    ))}
  </div>
);

Publication.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    award: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    location: PropTypes.string,
    authors: PropTypes.string,
  })),
};

Publication.defaultProps = {
  data: [],
};


export default Publication;
