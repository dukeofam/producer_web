import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Music, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/example",
      icon: <Music className="w-5 h-5" />,
      color: "text-cyber-cyan",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/felixfalken",
      icon: <Instagram className="w-5 h-5" />,
      color: "text-cyber-pink",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/felixfalken",
      icon: <Music className="w-5 h-5" />,
      color: "text-cyber-cyan",
    },
    {
      name: "Bandcamp",
      url: "https://felixfalken.bandcamp.com",
      icon: <ExternalLink className="w-5 h-5" />,
      color: "text-cyber-pink",
    },
  ];

  return (
    <footer className="bg-cyber-black border-t border-cyber-gray">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-cyber-cyan rounded-full flex items-center justify-center">
              <span className="text-cyber-black font-bold text-sm">F</span>
            </div>
            <div>
              <p className="text-cyber-white font-medium">© 2025 Felix Falken</p>
              <p className="text-cyber-white/60 text-sm">Electronic Sound Architect</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${link.color} hover:opacity-80 transition-opacity duration-300`}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-cyber-white hover:text-cyber-cyan transition-colors duration-300"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-cyber-gray">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-cyber-white font-bold mb-2">Music</h4>
              <p className="text-cyber-white/60 text-sm">
                Electronic • Synthwave • Ambient • Experimental
              </p>
            </div>
            <div>
              <h4 className="text-cyber-white font-bold mb-2">Location</h4>
              <p className="text-cyber-white/60 text-sm">
                Prague, Czech Republic
              </p>
            </div>
            <div>
              <h4 className="text-cyber-white font-bold mb-2">Available For</h4>
              <p className="text-cyber-white/60 text-sm">
                Collaborations • Remixes • Live Shows • Production
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 