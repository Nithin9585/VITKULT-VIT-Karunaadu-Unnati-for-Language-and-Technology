
import React from 'react';
import { motion } from 'framer-motion';
import { Scene3D } from '../components/Scene3D';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { EventCard } from '../components/EventCard';
import { TeamMember } from '../components/TeamMember';
import { VideoSection } from '../components/VideoSection';
import { Calendar3D } from '../components/Calendar3D';
import { Calendar, Star, Code, Heart, Image } from 'lucide-react';

const Index = () => {
  const upcomingEvent = {
    title: "Hackathon 2024",
    kannadaTitle: "ಹ್ಯಾಕಥಾನ್ ೨೦೨೪",
    date: "December 15, 2024",
    time: "9:00 AM",
    venue: "VIT Bhopal Main Auditorium",
    attendees: 150,
    image: "/placeholder.svg",
    description: "Join us for an exciting 24-hour hackathon where culture meets technology. Build innovative solutions while celebrating Kannada heritage.",
    isUpcoming: true
  };

  const pastEvents = [
    {
      title: "Yugadi Celebration",
      kannadaTitle: "ಯುಗಾದಿ ಆಚರಣೆ",
      date: "March 22, 2024",
      time: "6:00 PM",
      venue: "Campus Ground",
      attendees: 300,
      image: "/placeholder.svg",
      description: "Celebrated the Kannada New Year with traditional performances, food, and cultural activities."
    },
    {
      title: "Tech Talk Series",
      kannadaTitle: "ತಂತ್ರಜ್ಞಾನ ಚರ್ಚೆ",
      date: "February 14, 2024",
      time: "4:00 PM",
      venue: "Seminar Hall B",
      attendees: 85,
      image: "/placeholder.svg",
      description: "Expert talks on emerging technologies with discussions in Kannada and English."
    }
  ];

  const eventPosters = [
    {
      title: "Karaga Festival Celebration",
      kannadaTitle: "ಕರಗ ಹಬ್ಬದ ಆಚರಣೆ",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      date: "April 2024"
    },
    {
      title: "AI Workshop",
      kannadaTitle: "ಕೃತ್ರಿಮ ಬುದ್ಧಿಮತ್ತೆ ಕಾರ್ಯಾಗಾರ",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "March 2024"
    },
    {
      title: "Coding Competition",
      kannadaTitle: "ಕೋಡಿಂಗ್ ಸ್ಪರ್ಧೆ",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      date: "January 2024"
    },
    {
      title: "Cultural Night",
      kannadaTitle: "ಸಾಂಸ್ಕೃತಿಕ ರಾತ್ರಿ",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      date: "December 2023"
    }
  ];

  const teamMembers = [
    {
      name: "Arjun Prasad",
      kannadaName: "ಅರ್ಜುನ್ ಪ್ರಸಾದ್",
      role: "President",
      kannadaRole: "ಅಧ್ಯಕ್ಷ",
      image: "/placeholder.svg",
      bio: "Leading VITKULT with passion for both technology and Kannada culture."
    },
    {
      name: "Priya Nayak",
      kannadaName: "ಪ್ರಿಯಾ ನಾಯಕ್",
      role: "Vice President",
      kannadaRole: "ಉಪಾಧ್ಯಕ್ಷ",
      image: "/placeholder.svg",
      bio: "Organizing cultural events that showcase the beauty of Karnataka traditions."
    },
    {
      name: "Vikram Rao",
      kannadaName: "ವಿಕ್ರಮ್ ರಾವ್",
      role: "Tech Lead",
      kannadaRole: "ತಂತ್ರಜ್ಞಾನ ಮುಖ್ಯಸ್ಥ",
      image: "/placeholder.svg",
      bio: "Building innovative tech solutions while preserving our cultural heritage."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Floating Karnataka Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-8 h-8 bg-karnataka-red rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-6 h-6 bg-karnataka-yellow rounded-full opacity-70"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-12 h-12 bg-karnataka-gold rounded-full opacity-50"
        />
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Video Section */}
      <VideoSection />

      {/* 3D Calendar Section */}
      <Calendar3D />

      {/* Upcoming Event Section */}
      <section id="events" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-karnataka-red to-karnataka-yellow bg-clip-text text-transparent mb-4"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Next Event
            </motion.h2>
            <p className="text-karnataka-gold font-kannada text-xl">ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮ</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <EventCard {...upcomingEvent} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">About VITKULT</h2>
            <p className="text-karnataka-gold font-kannada text-xl mb-8">ವಿಟ್ಕಲ್ಟ್ ಬಗ್ಗೆ</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-karnataka-yellow">Our Mission</h3>
              <motion.p 
                className="text-white/80 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                VITKULT bridges the gap between technology and culture, creating a space where 
                students can explore their Kannada heritage while advancing in the tech world. 
                We believe that innovation flourishes when rooted in cultural values.
              </motion.p>
              <motion.p 
                className="text-karnataka-gold font-kannada"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಸಂಗಮದಲ್ಲಿ ನಾವು ಬೆಳೆಯುತ್ತೇವೆ
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Code, title: 'Tech Workshops', kannada: 'ತಂತ್ರಜ್ಞಾನ ಕಾರ್ಯಾಗಾರ' },
                { icon: Heart, title: 'Cultural Events', kannada: 'ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮ' },
                { icon: Star, title: 'Competitions', kannada: 'ಸ್ಪರ್ಧೆಗಳು' },
                { icon: Calendar, title: 'Festivals', kannada: 'ಹಬ್ಬಗಳು' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl border border-white/20 text-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <item.icon className="w-8 h-8 text-karnataka-yellow mx-auto mb-3" />
                  </motion.div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-karnataka-gold font-kannada text-sm">{item.kannada}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-karnataka-gold font-kannada text-xl">ನಮ್ಮ ತಂಡ</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Posters Section */}
      <section id="gallery" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Event Gallery</h2>
            <p className="text-karnataka-gold font-kannada text-xl">ಕಾರ್ಯಕ್ರಮ ಗ್ಯಾಲರಿ</p>
          </motion.div>

          {/* Event Posters Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {eventPosters.map((poster, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(255, 0, 0, 0.3)"
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={poster.image} 
                    alt={poster.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="font-bold text-white mb-1">{poster.title}</h4>
                      <p className="text-karnataka-gold font-kannada text-sm mb-2">{poster.kannadaTitle}</p>
                      <p className="text-white/70 text-xs">{poster.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Past Events */}
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Join the VITKULT Family</h3>
            <p className="text-karnataka-gold font-kannada">ವಿಟ್ಕಲ್ಟ್ ಕುಟುಂಬಕ್ಕೆ ಸೇರಿ</p>
          </motion.div>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 0, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-karnataka-red to-karnataka-yellow text-white font-bold text-lg rounded-full shadow-lg mb-8"
          >
            Become a VitKultian! • ವಿಟ್ಕಲ್ಟ್ ಸದಸ್ಯರಾಗಿ!
          </motion.button>

          <div className="text-white/60 text-sm">
            <p>&copy; 2024 VITKULT - VIT Bhopal. All rights reserved.</p>
            <p className="font-kannada mt-2">ಸರ್ವಾಧಿಕಾರ ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ</p>
          </div>
        </div>

        {/* Floating Karnataka Symbols */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-10 left-10 w-6 h-6 bg-karnataka-yellow rounded-full opacity-30"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 right-10 w-8 h-8 bg-karnataka-red rounded-full opacity-40"
          />
        </div>
      </footer>
    </div>
  );
};

export default Index;
