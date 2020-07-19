/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import ContactMenu from '../../containers/ContactMenu';

import emailIcon from '../../assets/icons/email.svg';
import phoneIcon from '../../assets/icons/mobile-phone.svg';

/* import EmailIcon from '../../assets/icons/email.svg'; */

import './style.scss';

library.add(far, fas);

const Contact = ({ email, phone }) => {
  return (
    <>
      <ContactMenu />
      <div id="contact" className="contact">
        <h2 className="contact-title">Me contacter</h2>
        <div className="contact-list">
          <div className="contact-mail">
            {/* <a href={email}><EmailIcon /></a> */}
            <a href={email} className="contact-mail-icon"><FontAwesomeIcon icon={['far', 'envelope']} /></a>
          </div>
          <div className="contact-phone">
            {/* <a href={phone}><img src={phoneIcon} alt="envelop" /></a> */}
            <a href={phone} className="contact-phone-icon"><FontAwesomeIcon icon={['fas', 'mobile']} /></a>
          </div>
        </div>
      </div>
    </>
  );
};

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
