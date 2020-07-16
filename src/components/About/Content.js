import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.scss';

AOS.init();

const Content = ({ name, content }) => (
  <div className="about-content-infos" data-aos="zoom-in">
    <p key={name} className="about-content-item">
      {content}
    </p>
  </div>
);

Content.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Content;
