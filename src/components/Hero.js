import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Users } from 'lucide-react';
import VANTA from 'vanta/dist/vanta.net.min';

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA({
          el: vantaRef.current,
          color: 0xffffff,
          backgroundColor: 0x000000,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.00,
          minWidth: 100.00,
          scale: 1.00,
          scaleMobile: 1.00,
          points: 35.00,
          maxDistance: 40.00,
          spacing: 12.00,
          showLines: true,
          lineColor: 0x00ffff,
          lineWidth: 1.5,
          pointSize: 2.5,
          pointColor: 0xffffff
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 md:py-32">
      {/* Vanta.js Animated Background */}
      <div ref={vantaRef} className="absolute inset-0 z-0" />
      
      {/* Scanlines Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-10 pointer-events-none z-10" 
           style={{
             backgroundImage: `repeating-linear-gradient(
               0deg,
               transparent,
               transparent 2px,
               rgba(255,255,255,0.03) 2px,
               rgba(255,255,255,0.03) 4px
             )`
           }} />
      
      {/* Animated Diagonal Lines */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`diagonal-${i}`}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-bw-accent/30 to-transparent"
            style={{
              left: `${(i * 15) + 10}%`,
              top: `${(i * 10) + 5}%`,
              transform: `rotate(${45 + (i * 5)}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scaleY: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      {/* Subtle Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-bw-accent/5 via-transparent to-transparent pointer-events-none z-10" />
      
      {/* Enhanced Particle Effects */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-bw-accent/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
      
      {/* Larger Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-3 h-3 bg-bw-accent/30 rounded-full"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${25 + (i * 12)}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 7 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Pulsing Rings */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute border border-bw-accent/20 rounded-full"
            style={{
              left: `${20 + (i * 20)}%`,
              top: `${30 + (i * 15)}%`,
              width: `${100 + (i * 50)}px`,
              height: `${100 + (i * 50)}px`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
      
      {/* Animated Corner Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-bw-accent/15 via-transparent to-transparent pointer-events-none z-5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-bw-accent/15 via-transparent to-transparent pointer-events-none z-5" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-bw-accent/10 via-transparent to-transparent pointer-events-none z-5" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-bw-accent/10 via-transparent to-transparent pointer-events-none z-5" />
      
      {/* Floating Text Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`text-${i}`}
            className="absolute text-bw-accent/10 font-anton text-xs uppercase tracking-wider"
            style={{
              left: `${10 + (i * 30)}%`,
              top: `${20 + (i * 25)}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          >
            {['SYNTH', 'BEAT', 'WAVE'][i]}
          </motion.div>
        ))}
      </div>
      
      {/* Animated Border Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <motion.div
          className="absolute top-8 left-8 w-32 h-px bg-gradient-to-r from-transparent via-bw-accent/40 to-transparent"
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-32 h-px bg-gradient-to-r from-transparent via-bw-accent/40 to-transparent"
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-20 text-center flex flex-col items-center justify-center">
        {/* Artist Name - Enhanced Animation with Floating Effect */}
        <motion.span
          className="font-anton text-5xl md:text-7xl xl:text-8xl font-extrabold uppercase text-bw-white tracking-widest select-none mb-4 block leading-[1.1] animate-float-smooth"
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1
          }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3, 
            type: 'spring', 
            stiffness: 60,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.02,
            textShadow: "0 0 20px rgba(0,255,255,0.5)"
          }}
        >
          FELIX FALKEN
        </motion.span>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
          className="uppercase tracking-wider text-white/70 font-medium text-lg sm:text-xl mt-4 mb-0"
        >
          Electronic Sound Architect
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8 flex-wrap"
        >
          <motion.a
            href="#music"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 sm:px-6 sm:py-3 text-sm sm:text-base border border-white rounded text-white uppercase font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-transparent flex items-center justify-center button-glow-hover"
          >
            <span className="mr-2">🎧</span> Listen Now
          </motion.a>
          <motion.a
            href="#collaborate"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 sm:px-6 sm:py-3 text-sm sm:text-base border border-white rounded text-white uppercase font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-transparent flex items-center justify-center button-glow-hover-pink"
          >
            <span className="mr-2">🤝</span> Collaborate
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 