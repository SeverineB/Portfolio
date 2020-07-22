import React from 'react';
import PropTypes from 'prop-types';

import contactIcon from '../../assets/icons/contacts.svg';
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import twitterIcon from '../../assets/icons/twitter.svg';

import './style.scss';

const ContactMenu = ({ menuOpen, toggleContactMenu }) => {
  return (
    <div className="contact-toggle">
      <div className="contact-button">
        <button type="button" onClick={toggleContactMenu}>
          <img src={contactIcon} alt="contact" />
        </button>
      </div>
      <div className={menuOpen ? 'contact-menu-opened' : 'contact-menu'}>
        <div className="contact-menu-opened-items">
          <a href="https://github.com/SeverineB" target="blank">
            <img src={githubIcon} alt="contact" />
          </a>
          <a href="http://www.linkedin.com/in/severine-bianchi" target="blank">
            <img src={linkedinIcon} alt="contact" />
          </a>
          <a href="https://twitter.com/Gnookiie" target="blank">
            <img src={twitterIcon} alt="contact" />
          </a>
        </div>
      </div>
    </div>
  );
};

ContactMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleContactMenu: PropTypes.func.isRequired,
};

export default ContactMenu;
