import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import Cat from '../../assets/images/cat6.svg';

const NotFound = () => (
  <div className="error">
    <img src={Cat} alt="multicolor cat" className="error-image" />
    <p className="error-number text-focus-in">Erreur 404</p>
    <p className="error-text text-focus-in">Il n'y a rien par ici...</p>
    <Link to="/" className="link-home text-focus-in">Retour à l'accueil</Link>
  </div>
);

export default NotFound;
