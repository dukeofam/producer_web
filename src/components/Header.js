import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Music', href: '#music' },
    { name: 'Collaborate', href: '#collaborate' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-bw-black/80 backdrop-blur-xl border-b border-bw-white/30 shadow-lg'
          : 'bg-bw-black/20 backdrop-blur-2xl'
      }`}
      style={{ 
        WebkitBackdropFilter: 'blur(20px)', 
        backdropFilter: 'blur(20px)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none'
      }}
    >
      <div className="flex items-center justify-between py-4 w-full px-8">
        {/* FF Logo with enhanced effects - all the way left */}
        <motion.div 
          className="flex items-center flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={process.env.PUBLIC_URL + '/FF_logo.png'}
            alt="FF Logo"
            className="h-16 md:h-24 w-auto object-contain select-none filter drop-shadow-lg"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.3))'
            }}
          />
        </motion.div>
        {/* Desktop Navigation with enhanced animations - all the way right */}
        <nav className="flex-grow flex items-center justify-end space-x-12">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="bw-link font-anton text-2xl font-extrabold tracking-wide relative group glow-hover"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.08
              }}
            >
              <span className="relative z-10">{item.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bw-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
            </motion.button>
          ))}
        </nav>
        {/* Mobile Menu Button with enhanced styling */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-bw-white p-2 rounded-md border border-transparent hover:border-bw-accent transition-all duration-200 ml-4 button-glow-hover"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>
      
      {/* Mobile Menu with enhanced animations */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-bw-black/95 backdrop-blur-xl border-t border-bw-white/30 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 items-center">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="bw-link font-anton text-lg relative group glow-hover"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bw-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 