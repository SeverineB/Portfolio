import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Project from './Project';

const Projects = ({
  projetspersos,
  isShown,
}) => {
  return (
    <div id="projets" className="projet-list">
      <div className="projet-list-title">
        <div className="projet-list-title-line" />
        <h2 className="projet-list-title-content">
          Projets personnels
        </h2>
      </div>
      <div className="projet-list-items">
        {projetspersos.map((projet) => (
          <Project key={projet.id} isShown={isShown} {...projet} />
        ))}
      </div>
    </div>
  );
};

Projects.propTypes = {
  projetspersos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  isShown: PropTypes.bool.isRequired,
};

export default Projects;
