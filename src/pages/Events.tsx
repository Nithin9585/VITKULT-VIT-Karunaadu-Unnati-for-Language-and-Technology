
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Scene3D } from '@/components/Scene3D';

const EventCard3D = ({ event, index }: { event: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -30 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        y: -20, 
        rotateY: 10, 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)"
      }}
      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 border border-karnataka-gold/30 shadow-xl transform-gpu perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <motion.div 
            className="p-3 bg-gradient-to-br from-karnataka-red to-karnataka-yellow rounded-xl"
            whileHover={{ rotateZ: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Calendar className="w-6 h-6 text-white" />
          </motion.div>
          {event.isUpcoming && (
            <motion.span 
              className="px-3 py-1 bg-karnataka-red text-white rounded-full text-sm"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Upcoming
            </motion.span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
        <p className="text-karnataka-gold font-kannada mb-4">{event.kannadaTitle}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-white/80">
            <Clock className="w-4 h-4 text-karnataka-yellow" />
            <span>{event.date} • {event.time}</span>
          </div>
          <div className="flex items-center space-x-2 text-white/80">
            <MapPin className="w-4 h-4 text-karnataka-yellow" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center space-x-2 text-white/80">
            <Users className="w-4 h-4 text-karnataka-yellow" />
            <span>{event.attendees} attending</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-karnataka-red to-karnataka-yellow text-white font-medium py-3 rounded-xl hover:shadow-lg transition-all duration-300"
        >
          {event.isUpcoming ? 'Register Now' : 'View Details'}
        </motion.button>
      </div>

      {/* 3D Shadow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-karnataka-red/20 to-karnataka-yellow/20 rounded-3xl transform translate-z-[-10px] group-hover:translate-z-[-20px] transition-transform duration-300"></div>
    </motion.div>
  );
};

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Karnataka Cultural Festival",
      kannadaTitle: "ಕರ್ನಾಟಕ ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವ",
      date: "Dec 15, 2024",
      time: "6:00 PM",
      venue: "Main Auditorium",
      attendees: 250,
      isUpcoming: true
    },
    {
      id: 2,
      title: "Mysore Palace Heritage Walk",
      kannadaTitle: "ಮೈಸೂರು ಅರಮನೆ ಪರಂಪರೆ ನಡಿಗೆ",
      date: "Dec 20, 2024",
      time: "10:00 AM",
      venue: "Campus Grounds",
      attendees: 150,
      isUpcoming: true
    }
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Hampi Archaeological Tour",
      kannadaTitle: "ಹಂಪಿ ಪುರಾತತ್ವ ಪ್ರವಾಸ",
      date: "Nov 25, 2024",
      time: "9:00 AM",
      venue: "Virtual Tour",
      attendees: 300,
      isUpcoming: false
    },
    {
      id: 4,
      title: "Karnataka Food Festival",
      kannadaTitle: "ಕರ್ನಾಟಕ ಆಹಾರ ಉತ್ಸವ",
      date: "Nov 10, 2024",
      time: "12:00 PM",
      venue: "Food Court",
      attendees: 400,
      isUpcoming: false
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
              Events
            </motion.h1>
            <motion.p 
              className="text-2xl text-karnataka-gold font-kannada"
              whileHover={{ scale: 1.05 }}
            >
              ಕಾರ್ಯಕ್ರಮಗಳು
            </motion.p>
          </motion.div>

          {/* Upcoming Events */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold text-karnataka-yellow mb-8"
              whileHover={{ scale: 1.05 }}
            >
              Upcoming Events
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard3D key={event.id} event={event} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Event History */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h2 
              className="text-4xl font-bold text-karnataka-yellow mb-8"
              whileHover={{ scale: 1.05 }}
            >
              Event History
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard3D key={event.id} event={event} index={index} />
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Events;
