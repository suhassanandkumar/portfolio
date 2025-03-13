// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </Router>
  );
};

export default App;