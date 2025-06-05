
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-karnataka-red via-karnataka-yellow to-karnataka-gold rounded-full flex items-center justify-center shadow-2xl animate-float">
            <span className="text-4xl font-bold text-white">VK</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white mb-4 bg-gradient-to-r from-karnataka-red to-karnataka-yellow bg-clip-text text-transparent"
        >
          VITKULT
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl text-karnataka-gold font-kannada mb-2">
            ವಿಐಟ್ ಭೋಪಾಲ್ ಕನ್ನಡ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕ್ಲಬ್
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-medium">
            VIT Bhopal's Kannada Tech & Cultural Club
          </p>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Celebrating Culture and Code • ಸಂಸ್ಕೃತಿ ಮತ್ತು ಕೋಡ್ ಆಚರಣೆ
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-karnataka-red to-karnataka-yellow text-white font-bold text-lg rounded-full shadow-lg flex items-center space-x-3 transition-all duration-300"
          >
            <Calendar className="w-6 h-6 group-hover:animate-sparkle" />
            <span>Join Next Event</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-transparent border-2 border-karnataka-gold text-karnataka-gold font-bold text-lg rounded-full flex items-center space-x-3 hover:bg-karnataka-gold hover:text-black transition-all duration-300"
          >
            <Star className="w-6 h-6 group-hover:animate-sparkle" />
            <span>Explore Gallery</span>
          </motion.button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { number: '500+', label: 'Members', kannada: 'ಸದಸ್ಯರು' },
            { number: '50+', label: 'Events', kannada: 'ಕಾರ್ಯಕ್ರಮಗಳು' },
            { number: '5+', label: 'Years', kannada: 'ವರ್ಷಗಳು' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            >
              <div className="text-2xl md:text-3xl font-bold text-karnataka-yellow">
                {stat.number}
              </div>
              <div className="text-white text-sm">{stat.label}</div>
              <div className="text-karnataka-gold text-xs font-kannada">{stat.kannada}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-karnataka-red rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-karnataka-yellow rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-karnataka-gold rounded-full animate-sparkle"></div>
      <div className="absolute bottom-40 right-10 w-3 h-3 bg-karnataka-red rounded-full animate-pulse"></div>
    </section>
  );
};
