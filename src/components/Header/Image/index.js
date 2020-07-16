import React from 'react';

import './style.scss';

import image from '../../../assets/images/catlightblue.svg';
import image2 from '../../../assets/images/catlightblue2.svg';
import image3 from '../../../assets/images/catlightblue3.svg';
import image4 from '../../../assets/images/catlightblue4.svg';
import image5 from '../../../assets/images/catlightblue5.svg';
import image6 from '../../../assets/images/catlightblue6.svg';

const Image = () => {
  return (
    <div className="header-image">
      <img src={image} className="first-image fadeIn" alt="orange cat vector" />
      <img src={image2} className="second-image fadeIn" alt="orange cat vector" />
      <img src={image3} className="third-image fadeIn" alt="orange cat vector" />
      <img src={image4} className="fourth-image fadeIn" alt="orange cat vector" />
      <img src={image5} className="fifth-image fadeIn" alt="orange cat vector" />
      <img src={image6} className="sixth-image fadeIn" alt="orange cat vector" />
    </div>
  )
};

export default Image;
