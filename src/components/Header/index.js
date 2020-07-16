import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

import './style.scss';

const Header = ({ title, subtitle }) => {
  return (
    <div className="wrapper">
      <header className="header">
        <Image />
        <div className="header-text">
          <h1 className="header-title text-focus-in">{title}</h1>
          <p className="header-description text-focus-in">
            {subtitle}
          </p>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
