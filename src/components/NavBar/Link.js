import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Link = ({ path, name }) => (
  <a className="navbar-item doubleDashed" key={name} href={path}>{name}</a>
);

Link.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Link;
