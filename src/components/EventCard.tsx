
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Share2 } from 'lucide-react';

interface EventCardProps {
  title: string;
  kannadaTitle: string;
  date: string;
  time: string;
  venue: string;
  attendees: number;
  image: string;
  description: string;
  isUpcoming?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  kannadaTitle,
  date,
  time,
  venue,
  attendees,
  image,
  description,
  isUpcoming = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true }}
      className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl"
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-karnataka-red/80 to-karnataka-yellow/80 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{title}</div>
            <div className="text-lg font-kannada text-karnataka-gold">{kannadaTitle}</div>
          </div>
        </div>
        {isUpcoming && (
          <div className="absolute top-4 right-4 bg-karnataka-red text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
            Upcoming
          </div>
        )}
      </div>

      {/* Event Details */}
      <div className="p-6">
        <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3 text-white/70">
            <Calendar className="w-4 h-4 text-karnataka-yellow" />
            <span>{date} • {time}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-white/70">
            <MapPin className="w-4 h-4 text-karnataka-yellow" />
            <span>{venue}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-white/70">
            <Users className="w-4 h-4 text-karnataka-yellow" />
            <span>{attendees} attending</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gradient-to-r from-karnataka-red to-karnataka-yellow text-white font-medium py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            {isUpcoming ? 'Register Now' : 'View Details'}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
          >
            <Share2 className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
