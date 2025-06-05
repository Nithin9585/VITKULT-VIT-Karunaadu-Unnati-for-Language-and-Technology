
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Star, Book } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: Calendar, label: 'Events', href: '/events', kannada: 'ಕಾರ್ಯಕ್ರಮಗಳು' },
    { icon: User, label: 'Team', href: '/team', kannada: 'ತಂಡ' },
    { icon: Star, label: 'Gallery', href: '/gallery', kannada: 'ಗ್ಯಾಲರಿ' },
    { icon: Book, label: 'About', href: '/about', kannada: 'ಬಗ್ಗೆ' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-karnataka-gold/30"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-karnataka-red to-karnataka-yellow rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">VITKULT</h1>
                <p className="text-karnataka-gold text-sm font-kannada">ವಿಟ್ಕಲ್ಟ್</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link key={index} to={item.href}>
                <motion.div
                  className={`group flex flex-col items-center space-y-1 transition-colors cursor-pointer ${
                    location.pathname === item.href 
                      ? 'text-karnataka-yellow' 
                      : 'text-white hover:text-karnataka-yellow'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-xs font-kannada opacity-70">{item.kannada}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.div 
                className="w-full h-0.5 bg-white"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              />
              <motion.div 
                className="w-full h-0.5 bg-white"
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.div 
                className="w-full h-0.5 bg-white"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0, 
            opacity: isOpen ? 1 : 0 
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item, index) => (
              <Link key={index} to={item.href} onClick={() => setIsOpen(false)}>
                <motion.div
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors cursor-pointer ${
                    location.pathname === item.href
                      ? 'bg-karnataka-yellow/20 text-karnataka-yellow'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <item.icon className="w-5 h-5" />
                  <div>
                    <span className="block font-medium">{item.label}</span>
                    <span className="block text-sm font-kannada opacity-70">{item.kannada}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
