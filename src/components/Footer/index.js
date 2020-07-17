import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Social from './Social';

import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import twitter from '../../assets/icons/twitter.svg';

const Footer = (/* { socials } */) => {
  return (
    <div className="footer">
      <div className="footer-socials">
      {/*   {socials.map((social) => (
        <Social key={social.id} {...social} />
      ))} */}
        <p className="socials-item">
          <a href="http://www.linkedin.com/in/severine-bianchi"><img src={linkedin} alt="linkedin" /></a>
          <a href="https://twitter.com/Gnookiie"><img src={twitter} alt="twitter" /></a>
          <a href="https://github.com/SeverineB"><img src={github} alt="github" /></a>
        </p>
      </div>
      <div className="footer-metas">
        <p>Séverine Bianchi &#169; - 2020</p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Footer;
