/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const TrainingContent = ({ content }) => (
  <p className="training-content-item">{content}</p>
);

TrainingContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TrainingContent;
