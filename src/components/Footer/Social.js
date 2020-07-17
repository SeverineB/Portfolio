import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';

const Social = (/* { icon, link, name } */) => {
  return (
    <p className="socials-item">
      <a href="http://www.linkedin.com/in/severine-bianchi"><img src={linkedin} alt="linkedin" /></a>
      <a href="https://twitter.com/Gnookiie"><img src={github} alt="github" /></a>
    </p>
  );
};

Social.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Social;
