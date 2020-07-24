import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import TrainingItem from './TrainingItem';
import TrainingContent from './TrainingContent';

const Training = ({ trainingList, training }) => {
  return (
    <div id="training" className="training" data-aos="zoom-in">
      <div className="training-title">
        <div className="training-title-line" />
        <h2 className="training-title-content">
          Ma formation
        </h2>
      </div>
      <div className="training-infos">
        <div className="training-list">
          <ul>
            {trainingList.map((info) => (
              <TrainingItem key={info.content} {...info} />
            ))}
          </ul>
        </div>
        <div className="training-content">
          {training.map((info) => (
            <TrainingContent key={info.content} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
};

Training.propTypes = {
  training: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  trainingList: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Training;
