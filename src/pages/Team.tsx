
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Scene3D } from '@/components/Scene3D';

const TeamCard3D = ({ member, index }: { member: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ 
        y: -30, 
        rotateY: 15, 
        rotateX: 10,
        scale: 1.05,
        boxShadow: "0 30px 60px rgba(255, 215, 0, 0.4)"
      }}
      className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-karnataka-gold/30 shadow-2xl transform-gpu"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Profile Section */}
      <div className="relative z-10 text-center">
        <motion.div
          className="relative mb-6"
          whileHover={{ rotateY: 360 }}
          transition={{ duration: 1 }}
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-karnataka-red to-karnataka-yellow rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
            <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
          </div>
          <motion.div 
            className="absolute -top-3 -right-3 w-8 h-8 bg-karnataka-gold rounded-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            <Star className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        <motion.h3 
          className="text-2xl font-bold text-white mb-2"
          whileHover={{ scale: 1.1 }}
        >
          {member.name}
        </motion.h3>
        <motion.p 
          className="text-karnataka-gold font-kannada text-lg mb-4"
          whileHover={{ scale: 1.05 }}
        >
          {member.kannadaName}
        </motion.p>
        
        <motion.div 
          className="bg-gradient-to-r from-karnataka-red/30 to-karnataka-yellow/30 rounded-xl p-4 mb-6"
          whileHover={{ scale: 1.05, rotateZ: 2 }}
        >
          <p className="text-karnataka-yellow font-bold text-lg">{member.role}</p>
          <p className="text-karnataka-gold font-kannada">{member.kannadaRole}</p>
        </motion.div>
        
        <p className="text-white/80 text-sm leading-relaxed mb-6">{member.bio}</p>

        {/* Action Icons */}
        <div className="flex justify-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.2, rotateZ: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-karnataka-red/20 rounded-full cursor-pointer"
          >
            <Award className="w-5 h-5 text-karnataka-yellow" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotateZ: -10 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-karnataka-yellow/20 rounded-full cursor-pointer"
          >
            <Heart className="w-5 h-5 text-karnataka-red" />
          </motion.div>
        </div>
      </div>

      {/* 3D Depth Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-karnataka-red/10 to-karnataka-yellow/10 rounded-3xl transform translate-z-[-20px] group-hover:translate-z-[-40px] transition-transform duration-500"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-4 left-4 w-3 h-3 bg-karnataka-red rounded-full"
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.div 
        className="absolute bottom-4 right-4 w-3 h-3 bg-karnataka-yellow rounded-full"
        animate={{ y: [5, -5, 5] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
      />
    </motion.div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Saravana Kumar S",
      kannadaName: " ಸರವಣ ಕುಮಾರ್ ಎಸ್",
      role: "President",
      kannadaRole: "ಅಧ್ಯಕ್ಷ",
      bio: "Leading the cultural initiatives and promoting Karnataka's rich heritage among students."
    },
    {
      name: "Priya Rao",
      kannadaName: "ಪ್ರಿಯಾ ರಾವ್",
      role: "Vice President",
      kannadaRole: "ಉಪಾಧ್ಯಕ್ಷ",
      bio: "Organizing events and managing cultural programs with passion and dedication."
    },
    {
      name: "Vikram Gowda",
      kannadaName: "ವಿಕ್ರಮ್ ಗೌಡ",
      role: "Event Coordinator",
      kannadaRole: "ಕಾರ್ಯಕ್ರಮ ಸಂಯೋಜಕ",
      bio: "Expert in planning and executing cultural events that celebrate Karnataka's traditions."
    },
    {
      name: "Kavya Nair",
      kannadaName: "ಕಾವ್ಯ ನಾಯರ್",
      role: "Cultural Secretary",
      kannadaRole: "ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯದರ್ಶಿ",
      bio: "Promoting traditional arts, music, and dance forms of Karnataka."
    },
    {
      name: "Nithin N",
      kannadaName: "ನಿತಿನ್ ಎನ್",
      role: "Technical Head",
      kannadaRole: "ತಾಂತ್ರಿಕ ಮುಖ್ಯಸ್ಥ",
      bio: "Managing digital platforms and technical aspects of cultural presentations."
    },
    {
      name: "Deepika Murthy",
      kannadaName: "ದೀಪಿಕಾ ಮೂರ್ತಿ",
      role: "Public Relations",
      kannadaRole: "ಸಾರ್ವಜನಿಕ ಸಂಪರ್ಕ",
      bio: "Building connections and spreading awareness about Karnataka's cultural significance."
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
              Our Team
            </motion.h1>
            <motion.p 
              className="text-2xl text-karnataka-gold font-kannada"
              whileHover={{ scale: 1.05 }}
            >
              ನಮ್ಮ ತಂಡ
            </motion.p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard3D key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
