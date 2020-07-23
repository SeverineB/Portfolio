import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Techno = ({ techno }) => (
  <p className="techno">
    {techno}
  </p>
);

Techno.propTypes = {
  techno: PropTypes.string.isRequired,
};

export default Techno;
