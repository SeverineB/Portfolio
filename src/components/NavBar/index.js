import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Link from './Link';

const NavBar = ({
  links,
  fixed,
  openScroll,
  closeScroll,
}) => {
  console.log('links vaut', links);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      openScroll();
    }
    else {
      closeScroll();
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  return (
    <div className={fixed === true ? 'navbar fixed' : 'navbar'}>
      {links.map((link) => (
        <Link key={link.id} {...link} />
      ))}
    </div>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  fixed: PropTypes.bool.isRequired,
  openScroll: PropTypes.func.isRequired,
  closeScroll: PropTypes.func.isRequired,
};


export default NavBar;