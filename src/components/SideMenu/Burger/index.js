import React from 'react';
import PropTypes from 'prop-types';

import { Spring } from 'react-burgers';

import './style.scss';

const BurgerButton = ({ toggleOpen, open }) => {
  return (
    <Spring
      active={open}
      color={open ? '#64ffda' : '#64ffda'}
      borderRadius="50"
      width="30"
      lineHeight={3}
      lineSpacing={5}
      onClick={toggleOpen}
    />
  );
};

BurgerButton.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default BurgerButton;
