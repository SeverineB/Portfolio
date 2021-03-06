import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './style.scss';

library.add(fab);

const Hard = ({
  icon, tech,
}) => (
  <div className="skill-item">
    <p className="skill-item-icon">
      <FontAwesomeIcon icon={icon} />
    </p>
    <p className="skill-item-name">{tech}</p>
  </div>
);

Hard.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  tech: PropTypes.string.isRequired,
};

export default Hard;
