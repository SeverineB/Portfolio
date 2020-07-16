import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useOnClickOutside } from '../../hooks';

import Burger from '../../containers/SideMenu/Burger';
import Menu from '../../containers/SideMenu/Menu';

import datas from '../../../data';

const SideMenu = ({ open, closeMenu }) => {
  const [links] = useState(datas.links);
  const node = useRef();
  useOnClickOutside(node, () => closeMenu());
  return (
    <div ref={node}>
      <Burger open={open} />
      <Menu open={open} links={links} />
    </div>
  );
};

SideMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SideMenu;
