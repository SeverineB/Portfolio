import React from 'react';
import PropTypes from 'prop-types';

import { Link, animateScroll as scroll } from 'react-scroll';

import { StyledMenu } from './Menu.styled';

import './style.scss';

const Menu = ({ open, links, toggleOpen }) => (
  <div className={open ? 'overlay overlay-shown' : 'overlay'}>
    <StyledMenu open={open} className={open ? 'opened' : ''}>
      {links.map((link) => {
        return (
          <Link key={link.name} to={link.path} className="burger-menu-links-item" onClick={toggleOpen}>{link.name}</Link>
        );
      })}
    </StyledMenu>
  </div>
);

Menu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  toggleOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Menu;
