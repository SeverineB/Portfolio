import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Social from './Social';

const Footer = ({ socials }) => {
  return (
    <div className="footer">
      <div className="footer-socials">{socials.map((social) => (
        <Social key={social.id} {...social} />
      ))}
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
