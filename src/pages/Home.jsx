import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1">
        <Hero />
        <About />
        <Skills />
        <Projects />

      </main>
      <Footer />
    </div>
  );
};

export default Home;
