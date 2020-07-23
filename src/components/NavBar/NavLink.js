import React from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from 'react-scroll';

import './style.scss';

const NavLink = ({ path, name }) => (
  <Link
    to={path}
    smooth
    spy
    duration={2000}
    className="navbar-item doubleDashed"
    key={name}
  >
    {name}
  </Link>
);

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavLink;
