/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import ContactMenu from '../../containers/ContactMenu';

import './style.scss';

const Contact = ({ email, phone }) => {
  return (
    <>
      <ContactMenu />
      <div id="contact" className="contact">
        <h2 className="contact-title">Me contacter</h2>
        <div className="contact-list">
          <div className="contact-list-mail">
            <a href={email} className="contact-list-email-icon">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" className="">
                <g>
                  <g>
                    <g>
                      <path id="part1" d="M467,61H45c-6.927,0-13.412,1.703-19.279,4.51L255,294.789l51.389-49.387c0,0,0.004-0.005,0.005-0.007 c0.001-0.002,0.005-0.004,0.005-0.004L486.286,65.514C480.418,62.705,473.929,61,467,61z" data-original="#000000" className="active-path" fill="#000000" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path id="part2" d="M507.496,86.728L338.213,256.002L507.49,425.279c2.807-5.867,4.51-12.352,4.51-19.279V106 C512,99.077,510.301,92.593,507.496,86.728z" data-original="#000000" className="active-path" fill="#000000" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path id="part3" d="M4.51,86.721C1.703,92.588,0,99.073,0,106v300c0,6.923,1.701,13.409,4.506,19.274L173.789,256L4.51,86.721z" data-original="#000000" className="active-path" fill="#000000" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path id="part4" d="M317.002,277.213l-51.396,49.393c-2.93,2.93-6.768,4.395-10.605,4.395s-7.676-1.465-10.605-4.395L195,277.211 L25.714,446.486C31.582,449.295,38.071,451,45,451h422c6.927,0,13.412-1.703,19.279-4.51L317.002,277.213z" data-original="#000000" className="active-path" fill="#000000" />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="contact-list-phone">
            <a href={phone} className="contact-list-phone-icon">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 503.604 503.604">
                <g>
                  <g>
                    <path d="M337.324,0H167.192c-28.924,0-53.5,23.584-53.5,52.5v398.664c0,28.916,24.056,52.44,52.98,52.44l170.412-0.184
                      c28.92,0,52.58-23.528,52.58-52.448l0.248-398.5C389.908,23.452,366.364,0,337.324,0z M227.68,31.476h49.36
                      c4.336,0,7.868,3.52,7.868,7.868c0,4.348-3.532,7.868-7.868,7.868h-49.36c-4.348,0-7.868-3.52-7.868-7.868
                      C219.812,34.996,223.332,31.476,227.68,31.476z M198.02,33.98c2.916-2.912,8.224-2.952,11.136,0c1.46,1.456,2.324,3.5,2.324,5.588
                      c0,2.048-0.864,4.088-2.324,5.548c-1.452,1.46-3.504,2.32-5.548,2.32c-2.084,0-4.088-0.86-5.588-2.32
                      c-1.452-1.456-2.28-3.5-2.28-5.548C195.736,37.48,196.568,35.436,198.02,33.98z M250.772,488.008
                      c-12.984,0-23.544-10.568-23.544-23.548c0-12.984,10.56-23.548,23.544-23.548s23.544,10.564,23.544,23.548
                      C274.316,477.44,263.752,488.008,250.772,488.008z M365.488,424.908H141.232V74.756h224.256V424.908z"
                    />
                  </g>
                </g>
              </svg>
            </a>
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
