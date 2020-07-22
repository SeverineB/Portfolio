/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import dotIcon from '../../assets/icons/rec.svg';

const TrainingItem = ({ content }) => (
  <li className="training-list-item">
    <img src={dotIcon} alt="github" />
    <p>{content}</p>
  </li>
);

TrainingItem.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TrainingItem;
