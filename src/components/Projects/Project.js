/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.scss';

import githubIcon from '../../assets/icons/githubWhite.svg';
/* import GithubIcon from '../../assets/icons/githubWhite.svg'; */

AOS.init();

const Project = ({
  name,
  thumbnail,
  alt,
  description,
  technos,
  githublink,
  link,
}) => {
  return (
    <div className="projet-item" data-aos="zoom-in">
      <img
        src={thumbnail}
        className="projet-item-thumbnail"
        alt={alt}
      />
      <a href="#">
        <div className="overlay">
          <div className="projet-item-meta">
            <h3 className="projet-item-meta-title">
              {name}
            </h3>
            <p className="projet-item-meta-description">
              {description}
            </p>
            <p className="projet-item-meta-technos">
              {technos}
            </p>
            <p className="projet-item-meta-link">
              <a href={githublink}><img src={githubIcon} alt="github" /></a>
              <a href={link}><img src={githubIcon} alt="github" /></a>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technos: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isShown: PropTypes.bool.isRequired,
  githublink: PropTypes.string.isRequired,
};

export default Project;
