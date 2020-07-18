import React from 'react';
import Particles from 'react-particles-js';

import Header from '../../containers/Header';
import NavBar from '../../containers/NavBar';
import SideMenu from '../../containers/SideMenu';
import About from '../../containers/About';
import Projects from '../../containers/Projects';
import Skills from '../../containers/Skills';
import Training from '../../containers/Training';
import Contact from '../../containers/Contact';
import Footer from '../../containers/Footer';


import './style.scss';

const App = () => {
  return (
    <div className="App">
      <Particles
        height={window.outerHeight}
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
                      "value": 3,
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
      <About />
      <Projects />
      <Skills />
      <Training />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
