import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Hard from './Hard';
import Soft from './Soft';

const Skills = ({ skills, softs }) => {
  return (
    <div id="skills" className="skills-list">
      <h2 className="skills-list-title">Compétences</h2>
      <div className="skills-list-items">
        <h3 className="skills-list-items-title">Technologies</h3>
        {skills.map((skill) => (
          <Hard key={skill.id} {...skill} />
        ))}
      </div>
      <div className="soft-list-items">
        <h3 className="soft-list-items-title">Savoir-être</h3>
        {softs.map((soft) => (
          <Soft key={soft.id} {...soft} />
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  softs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};


export default Skills;
