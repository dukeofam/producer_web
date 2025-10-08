import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Music from './components/Music';
import Collaborate from './components/Collaborate';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App bg-cyber-black min-h-screen">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Music />
        <Collaborate />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 