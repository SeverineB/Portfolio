import React from 'react';

import Header from '../../containers/Header';
import NavBar from '../../containers/NavBar';
import SideMenu from '../../containers/SideMenu';
import About from '../../containers/About';
import Projects from '../../containers/Projects';
import Skills from '../../containers/Skills';
import Contact from '../../containers/Contact';
import Footer from '../../containers/Footer';

import './style.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <SideMenu />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
