
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-karnataka-red to-karnataka-yellow bg-clip-text text-transparent mb-4">
            Welcome to VITKULT
          </h2>
          <p className="text-karnataka-gold font-kannada text-xl">ವಿಟ್ಕಲ್ಟ್ ಗೆ ಸ್ವಾಗತ</p>
        </motion.div>

        {/* Club Welcome Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl">
            <div className="relative aspect-video bg-gradient-to-br from-karnataka-red/20 to-karnataka-yellow/20">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 bg-gradient-to-r from-karnataka-red to-karnataka-yellow rounded-full flex items-center justify-center shadow-lg mb-4"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </motion.button>
                  <h3 className="text-2xl font-bold text-white mb-2">Welcome to VITKULT</h3>
                  <p className="text-karnataka-gold font-kannada text-lg">ವಿಟ್ಕಲ್ಟ್ ಪರಿಚಯ ವೀಡಿಯೋ</p>
                  <p className="text-white/70 mt-2">Discover our journey of celebrating culture and code</p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
