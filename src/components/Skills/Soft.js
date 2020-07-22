import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';


const Soft = ({ name }) => (
  <div className="soft-item">
    <p>{name}</p>
  </div>
);

Soft.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Soft;
