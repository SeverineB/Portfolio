import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.scss';

AOS.init();

const Project = ({
  name,
  thumbnail,
  alt,
  description,
  technos,
  isShown,
  githublink,
  link
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
              {technos} - {description}
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
};

export default Project;
