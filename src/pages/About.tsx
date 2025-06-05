
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Star, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Scene3D } from '@/components/Scene3D';

const FeatureCard3D = ({ feature, index }: { feature: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -45 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ 
        y: -25, 
        rotateY: 10, 
        rotateX: 5,
        scale: 1.05,
        boxShadow: "0 30px 60px rgba(255, 215, 0, 0.4)"
      }}
      className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-karnataka-gold/30 shadow-2xl transform-gpu"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-karnataka-red to-karnataka-yellow rounded-2xl mb-6 mx-auto"
        whileHover={{ rotateY: 360, scale: 1.2 }}
        transition={{ duration: 0.8 }}
      >
        <feature.icon className="w-8 h-8 text-white" />
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-bold text-white text-center mb-4"
        whileHover={{ scale: 1.1 }}
      >
        {feature.title}
      </motion.h3>
      
      <motion.p 
        className="text-karnataka-gold font-kannada text-center mb-4"
        whileHover={{ scale: 1.05 }}
      >
        {feature.kannadaTitle}
      </motion.p>
      
      <p className="text-white/80 text-center leading-relaxed">{feature.description}</p>

      {/* 3D Depth Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-karnataka-red/10 to-karnataka-yellow/10 rounded-3xl transform translate-z-[-25px] group-hover:translate-z-[-50px] transition-transform duration-500"></div>
    </motion.div>
  );
};

const StatsCard3D = ({ stat, index }: { stat: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateZ: -45 }}
      animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.1, 
        rotateY: 15,
        y: -10
      }}
      className="text-center group"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
        className="text-4xl font-bold text-karnataka-yellow mb-2"
      >
        {stat.number}
      </motion.div>
      <motion.p 
        className="text-white/80"
        whileHover={{ scale: 1.05 }}
      >
        {stat.label}
      </motion.p>
      <motion.p 
        className="text-karnataka-gold font-kannada text-sm"
        whileHover={{ scale: 1.05 }}
      >
        {stat.kannadaLabel}
      </motion.p>
    </motion.div>
  );
};

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Cultural Heritage",
      kannadaTitle: "ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆ",
      description: "Preserving and promoting the rich cultural heritage of Karnataka through various events and activities."
    },
    {
      icon: Star,
      title: "Community Building",
      kannadaTitle: "ಸಮುದಾಯ ನಿರ್ಮಾಣ",
      description: "Creating a strong community of Karnataka culture enthusiasts and students from the region."
    },
    {
      icon: Award,
      title: "Excellence",
      kannadaTitle: "ಶ್ರೇಷ್ಠತೆ",
      description: "Striving for excellence in all our cultural programs and maintaining high standards."
    },
    {
      icon: Users,
      title: "Inclusivity",
      kannadaTitle: "ಸಮಾವೇಶ",
      description: "Welcoming everyone to learn about and participate in Karnataka's diverse cultural traditions."
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Active Members",
      kannadaLabel: "ಸಕ್ರಿಯ ಸದಸ್ಯರು"
    },
    {
      number: "50+",
      label: "Events Organized",
      kannadaLabel: "ಆಯೋಜಿಸಿದ ಕಾರ್ಯಕ್ರಮಗಳು"
    },
    {
      number: "10+",
      label: "Years Active",
      kannadaLabel: "ವರ್ಷಗಳ ಸೇವೆ"
    },
    {
      number: "100%",
      label: "Cultural Pride",
      kannadaLabel: "ಸಾಂಸ್ಕೃತಿಕ ಹೆಮ್ಮೆ"
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
              About VITKULT
            </motion.h1>
            <motion.p 
              className="text-2xl text-karnataka-gold font-kannada mb-8"
              whileHover={{ scale: 1.05 }}
            >
              ವಿಟ್ಕಲ್ಟ್ ಬಗ್ಗೆ
            </motion.p>
            <motion.p 
              className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              VITKULT is the premier Karnataka cultural club at VIT, dedicated to celebrating and preserving 
              the magnificent heritage of Karnataka. We bring together students who share a passion for 
              our state's rich traditions, arts, and values.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatsCard3D key={index} stat={stat} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <motion.h2 
              className="text-4xl font-bold text-karnataka-yellow text-center mb-12"
              whileHover={{ scale: 1.05 }}
            >
              What We Stand For
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard3D key={index} feature={feature} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12 border border-karnataka-gold/30 shadow-2xl"
            >
              <motion.h2 
                className="text-4xl font-bold text-karnataka-yellow mb-6"
                whileHover={{ scale: 1.1 }}
              >
                Our Mission
              </motion.h2>
              <motion.p 
                className="text-karnataka-gold font-kannada text-xl mb-6"
                whileHover={{ scale: 1.05 }}
              >
                ನಮ್ಮ ಮಿಷನ್
              </motion.p>
              <motion.p 
                className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto"
                whileHover={{ scale: 1.02 }}
              >
                To create a vibrant platform where Karnataka's cultural essence thrives, where students 
                can connect with their roots, celebrate their heritage, and share the beauty of our 
                traditions with the diverse VIT community. We aim to be the bridge between our glorious 
                past and promising future, ensuring that the spirit of Karnataka continues to inspire 
                generations of students.
              </motion.p>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
