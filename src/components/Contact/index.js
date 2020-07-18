import React from 'react';
import PropTypes from 'prop-types';

import ContactMenu from '../../containers/Contact/ContactMenu';

import emailIcon from '../../assets/icons/email.svg';
import phoneIcon from '../../assets/icons/mobile-phone.svg';

import './style.scss';

const Contact = ({ email, phone }) => {
  return (
    <>
      <ContactMenu />
      <div id="contact" className="contact">
        <h2 className="contact-title">Me contacter</h2>
        <div className="contact-list">
          <div className="contact-mail">
            <a href={email}><img src={emailIcon} alt="envelop" /></a>
          </div>
          <div className="contact-phone">
            <a href={phone}><img src={phoneIcon} alt="envelop" /></a>
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
