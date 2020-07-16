import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Social = ({ icon, link, name }) => {
  return (
    <p className="socials-item">
      <a href={link}><img src={icon} alt={name} /></a>
    </p>
  );
};

Social.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Social;
