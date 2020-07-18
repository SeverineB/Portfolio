import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Project from './Project';

const Projects = ({
  projets,
  isShown,
}) => {
  return (
    <div id="projets" className="projet-list">
      <h2 className="projet-list-title">Projets</h2>
      <div className="projet-list-items">
        {projets.map((projet) => (
          <Project key={projet.id} isShown={isShown} {...projet} />
        ))}
      </div>
    </div>
  );
};

Projects.propTypes = {
  projets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  isShown: PropTypes.bool.isRequired,
};

export default Projects;
