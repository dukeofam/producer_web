import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Instagram, Music, ExternalLink, ArrowUp } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:felix@felixfalken.com",
      icon: <Mail className="w-6 h-6" />,
      color: "text-cyber-cyan",
      bgColor: "bg-cyber-cyan/20",
      borderColor: "border-cyber-cyan/30",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/felixfalken",
      icon: <Instagram className="w-6 h-6" />,
      color: "text-cyber-pink",
      bgColor: "bg-cyber-pink/20",
      borderColor: "border-cyber-pink/30",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/felixfalken",
      icon: <Music className="w-6 h-6" />,
      color: "text-cyber-cyan",
      bgColor: "bg-cyber-cyan/20",
      borderColor: "border-cyber-cyan/30",
    },
    {
      name: "Bandcamp",
      url: "https://felixfalken.bandcamp.com",
      icon: <ExternalLink className="w-6 h-6" />,
      color: "text-cyber-pink",
      bgColor: "bg-cyber-pink/20",
      borderColor: "border-cyber-pink/30",
    },
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section-padding bg-cyber-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,0,204,0.1),transparent_50%)]"></div>
      </div>

      <div className="container-custom relative z-10">
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
            CONTACT
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-cyber-white/80 max-w-2xl mx-auto"
          >
            Let's create something amazing together. Get in touch for collaborations, bookings, or just to say hello.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-cyber-white mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyber-cyan/20 border border-cyber-cyan/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyber-cyan" />
                  </div>
                  <div>
                    <p className="text-cyber-white font-medium">Email</p>
                    <a 
                      href="mailto:felix@felixfalken.com"
                      className="text-cyber-cyan hover:text-cyber-cyan/80 transition-colors duration-300"
                    >
                      felix@felixfalken.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-cyber-white mb-4">
                Response Time
              </h4>
              <p className="text-cyber-white/70">
                I typically respond to emails within 24-48 hours. For urgent matters, please use the collaboration form above.
              </p>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-cyber-white mb-6"
            >
              Follow & Connect
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 ${link.bgColor} border ${link.borderColor} rounded-lg hover:border-${link.color.split('-')[1]}/50 transition-all duration-300 group`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={link.color}>
                      {link.icon}
                    </div>
                    <span className="text-cyber-white font-medium group-hover:text-cyber-white/80 transition-colors duration-300">
                      {link.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-cyber-gray/30 border border-cyber-gray rounded-lg"
            >
              <h4 className="text-lg font-bold text-cyber-white mb-3">
                Newsletter
              </h4>
              <p className="text-cyber-white/70 text-sm mb-4">
                Stay updated with new releases, behind-the-scenes content, and exclusive previews.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 bg-cyber-dark border border-cyber-gray rounded text-cyber-white placeholder-cyber-white/50 focus:border-cyber-cyan focus:outline-none transition-colors duration-300"
                />
                <button className="px-6 py-2 bg-cyber-cyan text-cyber-black font-bold rounded hover:bg-cyber-cyan/80 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-cyber-cyan text-cyber-black rounded-full flex items-center justify-center hover:bg-cyber-cyan/80 transition-colors duration-300 shadow-lg"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
};

export default Contact; 