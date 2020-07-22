/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const TrainingContent = ({ info }) => (
  <p className="training-content-item">{info}</p>
);

TrainingContent.propTypes = {
  info: PropTypes.string.isRequired,
};

export default TrainingContent;
