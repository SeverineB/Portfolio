import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import dotIcon from '../../assets/icons/rec.svg';

const Training = ({ trainingList, training }) => {
  return (
    <div id="training" className="training">
      <h2 className="training-title">Ma formation</h2>
      <div className="training-infos">
        <div className="training-list">
          <ul>
            {trainingList.map((info) => (
              <li className="training-list-item">
                <img src={dotIcon} alt="github" />
                <p>{info}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="training-content">
          {training.map((info) => (
            <p className="training-content-item">
              {info}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

Training.propTypes = {
  training: PropTypes.arrayOf(
    PropTypes.shape({
      info: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  trainingList: PropTypes.arrayOf(
    PropTypes.shape({
      info: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Training;
