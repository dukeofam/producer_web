import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Users, Music, Palette, Camera } from 'lucide-react';

const Collaborate = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    portfolio: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        role: '',
        portfolio: '',
        message: '',
      });
      alert('Thank you! Your collaboration request has been sent.');
    }, 2000);
  };

  const collaborationTypes = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Vocalists",
      description: "Looking for unique voices to complement my electronic soundscapes",
      color: "text-cyber-cyan",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Producers",
      description: "Collaborate on innovative sound design and production techniques",
      color: "text-cyber-pink",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Visual Artists",
      description: "Create stunning visuals and artwork for music releases",
      color: "text-cyber-cyan",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Videographers",
      description: "Produce music videos and visual content for tracks",
      color: "text-cyber-pink",
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

  return (
    <section id="collaborate" className="section-padding bg-cyber-black">
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
            COLLABORATE
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-cyber-white/80 max-w-3xl mx-auto"
          >
            I'm open to collaborating with vocalists, producers, and visual artists to create innovative music projects.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Collaboration Types */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-cyber-white mb-8"
            >
              Looking For
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {collaborationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-cyber-gray/30 border border-cyber-gray rounded-lg p-6 hover:border-cyber-cyan/50 transition-all duration-300"
                >
                  <div className={`${type.color} mb-4`}>
                    {type.icon}
                  </div>
                  <h4 className="text-lg font-bold text-cyber-white mb-2">
                    {type.title}
                  </h4>
                  <p className="text-cyber-white/70 text-sm">
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-cyber-gray/30 border border-cyber-gray rounded-lg p-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-cyber-white mb-6"
            >
              Get In Touch
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-cyber-white text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark border border-cyber-gray rounded-lg text-cyber-white placeholder-cyber-white/50 focus:border-cyber-cyan focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-cyber-white text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark border border-cyber-gray rounded-lg text-cyber-white placeholder-cyber-white/50 focus:border-cyber-cyan focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-cyber-white text-sm font-medium mb-2">
                  Role *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-gray rounded-lg text-cyber-white focus:border-cyber-cyan focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select your role</option>
                  <option value="vocalist">Vocalist</option>
                  <option value="producer">Producer</option>
                  <option value="visual-artist">Visual Artist</option>
                  <option value="videographer">Videographer</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-cyber-white text-sm font-medium mb-2">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-gray rounded-lg text-cyber-white placeholder-cyber-white/50 focus:border-cyber-cyan focus:outline-none transition-colors duration-300"
                  placeholder="https://your-portfolio.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-cyber-white text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-gray rounded-lg text-cyber-white placeholder-cyber-white/50 focus:border-cyber-cyan focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project and how you'd like to collaborate..."
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                className="cyber-button w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyber-black mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate; 