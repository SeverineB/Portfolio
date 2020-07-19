/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.scss';

import githubIcon from '../../assets/icons/githubWhite.svg';
import githubIconB from '../../assets/icons/githubB.svg';
import linkIcon from '../../assets/icons/link.svg';

/* import GithubIcon from '../../assets/icons/githubB.svg'; */

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
      <div className="overlay">
        <div className="overlay-meta">
          <h3 className="overlay-meta-title">
            {name}
          </h3>
          <p className="overlay-meta-description">
            {description}
          </p>
          <p className="overlay-meta-technos">
            {technos}
          </p>
          <p className="overlay-meta-link">
            <a href={githublink}><img src={githubIcon} alt="github" /></a>
            <a href={link}><img src={linkIcon} alt="github" /></a>
          </p>
        </div>
      </div>
      <div className="infos">
        <div className="infos-meta">
          <h3 className="infos-meta-title">
            {name}
          </h3>
          <p className="infos-meta-description">
            {description}
          </p>
          <p className="infos-meta-technos">
            {technos.map((techno) => (
              <p className="techno">{techno}</p>
            ))}
          </p>
          <p className="infos-meta-link">
            <a href={githublink}><img src={githubIconB} alt="github" /></a>
            <a href={link}><img src={linkIcon} alt="github" /></a>
          </p>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technos: PropTypes.arrayOf(
    PropTypes.shape({
      techno: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  link: PropTypes.string.isRequired,
  isShown: PropTypes.bool.isRequired,
  githublink: PropTypes.string.isRequired,
};

export default Project;
