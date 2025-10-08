import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, ExternalLink, Music as MusicIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const Music = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const tracks = [
    {
      id: 1,
      title: "Montluçon",
      description: "Cinematic Deep House with melodic & progressive undertones",
      genre: "Deep House",
      duration: "5:21",
      cover: "/Montluçon.png",
      spotifyUrl: "https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh",
      soundcloudUrl: "https://soundcloud.com/felixfalken/montlucon",
    },
    {
      id: 2,
      title: "Digital Void",
      description: "Ambient textures floating in electronic space",
      genre: "Ambient",
      duration: "6:15",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
      spotifyUrl: "https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh",
      soundcloudUrl: "https://soundcloud.com/felixfalken/digital-void",
    },
    {
      id: 3,
      title: "Circuit Breaker",
      description: "High-energy electronic beats with industrial influences",
      genre: "Industrial",
      duration: "3:48",
      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
      spotifyUrl: "https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh",
      soundcloudUrl: "https://soundcloud.com/felixfalken/circuit-breaker",
    },
    {
      id: 4,
      title: "Echo Chamber",
      description: "Experimental sound design with modular synthesis",
      genre: "Experimental",
      duration: "5:22",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      spotifyUrl: "https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh",
      soundcloudUrl: "https://soundcloud.com/felixfalken/echo-chamber",
    },
  ];

  const tracksPerView = 2; // Number of tracks visible at once
  const maxIndex = Math.max(0, tracks.length - tracksPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

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
    <section id="music" className="section-padding bg-cyber-dark">
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
            MUSIC
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-cyber-white/80 max-w-2xl mx-auto"
          >
            Explore my latest electronic compositions and sonic experiments
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <motion.button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-32 z-10 w-16 h-16 bg-bw-accent/90 rounded-full flex items-center justify-center hover:bg-bw-accent transition-colors duration-300 border-2 border-bw-black button-glow-hover"
            >
              <ChevronLeft className="w-8 h-8 text-bw-black" />
            </motion.button>
          )}

          {currentIndex < maxIndex && (
            <motion.button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-32 z-10 w-16 h-16 bg-bw-accent/90 rounded-full flex items-center justify-center hover:bg-bw-accent transition-colors duration-300 border-2 border-bw-black button-glow-hover"
            >
              <ChevronRight className="w-8 h-8 text-bw-black" />
            </motion.button>
          )}

          {/* Tracks Carousel */}
          <div className="overflow-hidden">
            <motion.div
              ref={carouselRef}
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / tracksPerView)}%)`,
              }}
            >
              {tracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/2 bg-cyber-gray/50 backdrop-blur-sm border border-cyber-gray rounded-lg overflow-hidden hover:border-cyber-cyan/50 transition-all duration-300 glow-hover"
                >
                  {/* Track Cover */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={track.cover}
                      alt={track.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 bg-cyber-cyan/90 rounded-full flex items-center justify-center hover:bg-cyber-cyan transition-colors duration-300 button-glow-hover"
                      >
                        <Play className="w-8 h-8 text-cyber-black ml-1" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Track Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-cyber-white mb-2">
                          {track.title}
                        </h3>
                        <p className="text-cyber-white/70 text-sm mb-3">
                          {track.description}
                        </p>
                      </div>
                      <span className="text-cyber-cyan text-sm font-mono">
                        {track.duration}
                      </span>
                    </div>

                    {/* Genre Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyber-cyan/20 text-cyber-cyan text-xs font-bold rounded-full border border-cyber-cyan/30">
                        {track.genre}
                      </span>
                    </div>

                    {/* Platform Links */}
                    <div className="flex gap-3">
                      <motion.a
                        href={track.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-cyber-cyan text-cyber-black py-2 px-4 rounded font-bold text-sm flex items-center justify-center hover:bg-cyber-cyan/80 transition-colors duration-300 button-glow-hover"
                      >
                        <MusicIcon className="w-4 h-4 mr-2" />
                        Spotify
                      </motion.a>
                      <motion.a
                        href={track.soundcloudUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-cyber-pink text-cyber-black py-2 px-4 rounded font-bold text-sm flex items-center justify-center hover:bg-cyber-pink/80 transition-colors duration-300 button-glow-hover-pink"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        SoundCloud
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Indicators */}
          {tracks.length > tracksPerView && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-cyber-cyan scale-125'
                      : 'bg-cyber-gray hover:bg-cyber-gray/70'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Removed standalone Follow CTA per request */}
      </div>
    </section>
  );
};

export default Music; 