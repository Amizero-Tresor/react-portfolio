// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import LatestProjects from './components/LatestProjects';
import Insights from './components/Insights';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkedWith from './components/WorkedWith';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <WorkedWith />
      <LatestProjects />
      <Insights />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
