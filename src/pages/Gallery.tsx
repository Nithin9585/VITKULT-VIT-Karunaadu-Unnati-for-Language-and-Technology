
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Scene3D } from '@/components/Scene3D';

const GalleryCard3D = ({ image, index }: { image: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, rotateY: -180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ 
        y: -20, 
        rotateY: 10, 
        rotateX: 5,
        scale: 1.05,
        boxShadow: "0 25px 50px rgba(255, 215, 0, 0.5)"
      }}
      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-karnataka-gold/30 shadow-xl cursor-pointer transform-gpu"
      style={{ transformStyle: 'preserve-3d' }}
      onClick={() => image.onClick(index)}
    >
      <div className="aspect-square bg-gradient-to-br from-karnataka-red/80 to-karnataka-yellow/80 flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
          animate={{ x: [-100, 300] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
        <div className="text-center z-10">
          <motion.div
            whileHover={{ rotateZ: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="text-6xl mb-4"
          >
            {image.icon}
          </motion.div>
          <h3 className="text-white font-bold text-xl">{image.title}</h3>
          <p className="text-karnataka-gold font-kannada">{image.kannadaTitle}</p>
        </div>
      </div>
      
      <motion.div 
        className="p-4"
        whileHover={{ y: -5 }}
      >
        <p className="text-white/80 text-sm">{image.description}</p>
        <motion.div 
          className="mt-3 flex justify-between items-center"
          whileHover={{ x: 5 }}
        >
          <span className="text-karnataka-yellow text-xs">{image.date}</span>
          <span className="text-karnataka-gold text-xs">{image.category}</span>
        </motion.div>
      </motion.div>

      {/* 3D Depth Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-karnataka-red/20 to-karnataka-yellow/20 rounded-2xl transform translate-z-[-15px] group-hover:translate-z-[-30px] transition-transform duration-300"></div>
    </motion.div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      title: "Mysore Palace",
      kannadaTitle: "ಮೈಸೂರು ಅರಮನೆ",
      description: "Royal heritage of Karnataka showcased in our cultural event",
      date: "Nov 2024",
      category: "Heritage",
      icon: "🏰",
      onClick: setSelectedImage
    },
    {
      title: "Classical Dance",
      kannadaTitle: "ಶಾಸ್ತ್ರೀಯ ನೃತ್ಯ",
      description: "Beautiful Bharatanatyam performance by our members",
      date: "Oct 2024",
      category: "Dance",
      icon: "💃",
      onClick: setSelectedImage
    },
    {
      title: "Hampi Festival",
      kannadaTitle: "ಹಂಪಿ ಉತ್ಸವ",
      description: "Celebrating the ancient capital of Vijayanagara Empire",
      date: "Sep 2024",
      category: "Festival",
      icon: "🏛️",
      onClick: setSelectedImage
    },
    {
      title: "Karnataka Cuisine",
      kannadaTitle: "ಕರ್ನಾಟಕ ಪಾಕಪದ್ಧತಿ",
      description: "Traditional food festival featuring regional delicacies",
      date: "Aug 2024",
      category: "Food",
      icon: "🍛",
      onClick: setSelectedImage
    },
    {
      title: "Yakshagana",
      kannadaTitle: "ಯಕ್ಷಗಾನ",
      description: "Traditional theatre form performance by local artists",
      date: "Jul 2024",
      category: "Theatre",
      icon: "🎭",
      onClick: setSelectedImage
    },
    {
      title: "Coorg Coffee",
      kannadaTitle: "ಕೊಡಗು ಕಾಫಿ",
      description: "Coffee plantation visit and cultural exchange",
      date: "Jun 2024",
      category: "Culture",
      icon: "☕",
      onClick: setSelectedImage
    },
    {
      title: "Temple Architecture",
      kannadaTitle: "ದೇವಾಲಯ ವಾಸ್ತುಶಿಲ್ಪ",
      description: "Exploring the architectural marvels of Hoysala dynasty",
      date: "May 2024",
      category: "Architecture",
      icon: "🕌",
      onClick: setSelectedImage
    },
    {
      title: "Folk Music",
      kannadaTitle: "ಜಾನಪದ ಸಂಗೀತ",
      description: "Traditional Kannada folk songs and music session",
      date: "Apr 2024",
      category: "Music",
      icon: "🎵",
      onClick: setSelectedImage
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-karnataka-red via-black to-karnataka-yellow relative overflow-hidden">
      <Scene3D />
      
      {/* Navigation Back */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-20 left-4 z-50"
      >
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </Link>
      </motion.div>

      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-6xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              Gallery
            </motion.h1>
            <motion.p 
              className="text-2xl text-karnataka-gold font-kannada"
              whileHover={{ scale: 1.05 }}
            >
              ಗ್ಯಾಲರಿ
            </motion.p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <GalleryCard3D key={index} image={image} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged view */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.3, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.3, rotateY: 90 }}
              className="relative max-w-4xl w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-karnataka-gold/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-karnataka-yellow transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="text-center">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="text-8xl mb-6"
                >
                  {galleryImages[selectedImage].icon}
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  {galleryImages[selectedImage].title}
                </h2>
                <p className="text-karnataka-gold font-kannada text-2xl mb-4">
                  {galleryImages[selectedImage].kannadaTitle}
                </p>
                <p className="text-white/80 text-lg mb-6">
                  {galleryImages[selectedImage].description}
                </p>
                <div className="flex justify-center space-x-8">
                  <span className="text-karnataka-yellow">{galleryImages[selectedImage].date}</span>
                  <span className="text-karnataka-gold">{galleryImages[selectedImage].category}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
