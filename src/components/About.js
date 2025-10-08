import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Headphones, Cpu, Speaker } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skills = [
    { name: "FL Studio", icon: <Music className="w-6 h-6" />, color: "text-cyber-cyan" },
    { name: "Audio-Technica M40X", icon: <Headphones className="w-6 h-6" />, color: "text-cyber-pink" },
    { name: "MacBook Pro M1 2020", icon: <Cpu className="w-6 h-6" />, color: "text-cyber-cyan" },
    { name: "Pioneer DJ DM-50D", icon: <Speaker className="w-6 h-6" />, color: "text-cyber-pink" },
  ];

  const influences = [
    "Paul Kalkbrenner", "Boris Brejcha", "Deadmau5", "Mochakk",
    "Ryan K", "Tony Romera", "Stray Beast", "Hi-Lo", "NTO"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-cyber-dark">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-anton text-cyber-white mb-6 tracking-wider"
          >
            ABOUT
          </motion.h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Artist Photo */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-cyber-gray">
              <img
                src={process.env.PUBLIC_URL + '/FelixFalken.jpeg'}
                alt="Felix Falken artist photo"
                className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 to-cyber-pink/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-cyber-white mb-6">
                I'm Felix Falken
              </h3>
              <div className="space-y-4 text-cyber-white/80">
                <p>
                I'm Felix, a dance music producer making groove-driven tracks — mainly house, tech-house, and techno.
                </p>
                <p>
                With over a decade of experience, I aim for clean, musical production that keeps the dancefloor moving.
                </p>
                <p>
                If you like simple, danceable music with some character, I think you’ll dig it.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-cyber-white mb-4">
                Tools & Equipment
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 bg-cyber-gray/30 border border-cyber-gray rounded-lg hover:border-cyber-cyan/50 transition-all duration-300"
                  >
                    <div className={skill.color}>
                      {skill.icon}
                    </div>
                    <span className="text-cyber-white font-medium text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Influences */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-cyber-white mb-4">
                Musical Influences
              </h4>
              <div className="flex flex-wrap gap-2">
                {influences.map((influence, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyber-cyan/20 text-cyber-cyan text-xs font-medium rounded-full border border-cyber-cyan/30"
                  >
                    {influence}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-cyan">20+</div>
                <div className="text-cyber-white/70 text-sm">Tracks Released</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-pink">10+</div>
                <div className="text-cyber-white/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-cyan">5+</div>
                <div className="text-cyber-white/70 text-sm">Collaborations</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 