import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Content from './Content';

const About = ({ infos }) => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h2 className="about-title-content">
          A propos de moi
        </h2>
        <div className="about-title-line" />
      </div>
      <div className="about-infos">
        <div className="about-content">
          {infos.map((info) => (
            <Content key={info.name} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default About;
