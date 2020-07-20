import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

import Header from '../../containers/Header';
import NavBar from '../../containers/NavBar';
import SideMenu from '../../containers/SideMenu';
import ContactMenu from '../../containers/ContactMenu';
import About from '../../containers/About';
import Projects from '../../containers/Projects';
import Skills from '../../containers/Skills';
import Training from '../../containers/Training';
import Contact from '../../containers/Contact';
import Footer from '../../containers/Footer';

import arrowTop from '../../assets/icons/up-arrow.svg';


import './style.scss';

const App = ({ showButton, hideButton, buttonShown }) => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      showButton();
    }
    else {
      hideButton();
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  return (
    <div className="App">
      <Particles
        className="particles"
        params={{
            "particles": {
                  'number': {
                      "value": 100,
                      "density": {
                          "enable": false
                      }
                  },
                  "size": {
                      "value": 2,
                      "random": true,
                      "anim": {
                          "speed": 2,
                          "size_min": 0.3
                      }
                  },
                  "line_linked": {
                      "enable": false
                  },
                  "move": {
                      "random": true,
                      "speed": 1,
                      "direction": "top",
                      "out_mode": "out"
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "bubble"
                      },
                      "onclick": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  },
                  "modes": {
                      "bubble": {
                          "distance": 250,
                          "duration": 2,
                          "size": 0,
                          "opacity": 0
                      },
                      "repulse": {
                          "distance": 400,
                          "duration": 4
                      }
                  }
              }
        }}
      />
      <NavBar />
      <Header />
      <SideMenu />
      <ContactMenu />
      <About />
      <Projects />
      <Skills />
      <Training />
      <Contact />
      <Footer />
      {buttonShown && (
        <button type="button" onClick={scrollTop}>
          <img className="arrow-top scrollTop" src={arrowTop} alt="arrow-top" />
        </button>
      )}
    </div>
  );
};

App.propTypes = {
  buttonShown: PropTypes.bool.isRequired,
  showButton: PropTypes.func.isRequired,
  hideButton: PropTypes.func.isRequired,
};

export default App;
