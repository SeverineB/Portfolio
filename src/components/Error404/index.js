import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import Cat from '../../assets/images/cat6.svg';

const Error404 = () => (
  <div className="error">
    <img src={Cat} alt="multicolor cat" className="error-image" />
    <p className="error-number text-focus-in">Erreur 404</p>
    <p className="error-text text-focus-in">Oupalaaa, vous avez fait fausse route</p>
    <Link to="/" className="link-home text-focus-in">Pour retourner à l'accueil, c'est par là</Link>
  </div>
);

export default Error404;
