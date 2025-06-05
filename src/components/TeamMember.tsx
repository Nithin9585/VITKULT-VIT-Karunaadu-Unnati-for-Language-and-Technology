
import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  kannadaName: string;
  role: string;
  kannadaRole: string;
  image: string;
  bio: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  kannadaName,
  role,
  kannadaRole,
  image,
  bio
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10, rotateY: 5 }}
      viewport={{ once: true }}
      className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
    >
      {/* Profile Image */}
      <div className="relative mb-4">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-karnataka-red to-karnataka-yellow rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
          <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-karnataka-gold rounded-full flex items-center justify-center">
          <span className="text-xs">⭐</span>
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-karnataka-gold font-kannada text-sm mb-2">{kannadaName}</p>
        
        <div className="bg-gradient-to-r from-karnataka-red/20 to-karnataka-yellow/20 rounded-lg p-3 mb-4">
          <p className="text-karnataka-yellow font-medium">{role}</p>
          <p className="text-karnataka-gold font-kannada text-sm">{kannadaRole}</p>
        </div>
        
        <p className="text-white/70 text-sm leading-relaxed">{bio}</p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-2 left-2 w-2 h-2 bg-karnataka-red rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 bg-karnataka-yellow rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  );
};
