import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import TrainingItem from './TrainingItem';
import TrainingContent from './TrainingContent';

const Training = ({ trainingList, training }) => {
  return (
    <div id="training" className="training" data-aos="zoom-in">
      <h2 className="training-title">Ma formation</h2>
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
