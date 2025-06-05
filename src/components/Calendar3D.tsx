
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Calendar, Plus, X } from 'lucide-react';
import { Mesh } from 'three';
import * as THREE from 'three';

interface Event {
  id: string;
  title: string;
  kannadaTitle: string;
  date: Date;
  description: string;
}

const CalendarDay = ({ 
  position, 
  day, 
  isToday, 
  hasEvent, 
  onClick 
}: { 
  position: [number, number, number];
  day: number;
  isToday: boolean;
  hasEvent: boolean;
  onClick: () => void;
}) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + day) * 0.1;
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const color = isToday ? '#FFD700' : hasEvent ? '#FF0000' : '#FFFFFF';

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh
        ref={meshRef}
        position={position}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.8, 0.8, 0.2]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
        <Text
          position={[0, 0, 0.11]}
          fontSize={0.3}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          {day}
        </Text>
      </mesh>
    </Float>
  );
};

export const Calendar3D = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Hackathon 2024',
      kannadaTitle: 'ಹ್ಯಾಕಥಾನ್ ೨೦೨೪',
      date: new Date(2024, 11, 15),
      description: '24-hour coding marathon with cultural themes'
    }
  ]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    kannadaTitle: '',
    description: ''
  });

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day &&
           today.getMonth() === currentDate.getMonth() &&
           today.getFullYear() === currentDate.getFullYear();
  };

  const hasEvent = (day: number) => {
    return events.some(event => 
      event.date.getDate() === day &&
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const getEventsForDay = (day: number) => {
    return events.filter(event => 
      event.date.getDate() === day &&
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const handleDayClick = (day: number) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
  };

  const handleAddEvent = () => {
    if (selectedDate && newEvent.title) {
      const event: Event = {
        id: Date.now().toString(),
        title: newEvent.title,
        kannadaTitle: newEvent.kannadaTitle,
        date: selectedDate,
        description: newEvent.description
      };
      setEvents([...events, event]);
      setNewEvent({ title: '', kannadaTitle: '', description: '' });
      setShowAddEvent(false);
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Calculate grid positions
    for (let day = 1; day <= daysInMonth; day++) {
      const row = Math.floor((day + firstDay - 1) / 7);
      const col = (day + firstDay - 1) % 7;
      const x = (col - 3) * 1.2;
      const y = (2 - row) * 1.2;
      const z = 0;

      days.push(
        <CalendarDay
          key={day}
          position={[x, y, z]}
          day={day}
          isToday={isToday(day)}
          hasEvent={hasEvent(day)}
          onClick={() => handleDayClick(day)}
        />
      );
    }

    return days;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const kannadaMonths = [
    'ಜನವರಿ', 'ಫೆಬ್ರವರಿ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿಲ್', 'ಮೇ', 'ಜೂನ್',
    'ಜುಲೈ', 'ಆಗಸ್ಟ್', 'ಸೆಪ್ಟೆಂಬರ್', 'ಅಕ್ಟೋಬರ್', 'ನವೆಂಬರ್', 'ಡಿಸೆಂಬರ್'
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-karnataka-red to-karnataka-yellow bg-clip-text text-transparent mb-4">
            Event Calendar
          </h2>
          <p className="text-karnataka-gold font-kannada text-xl">ಕಾರ್ಯಕ್ರಮ ಕ್ಯಾಲೆಂಡರ್</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              {/* Calendar Header */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                  className="text-karnataka-yellow hover:text-white transition-colors"
                >
                  ←
                </button>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h3>
                  <p className="text-karnataka-gold font-kannada">
                    {kannadaMonths[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </p>
                </div>
                <button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                  className="text-karnataka-yellow hover:text-white transition-colors"
                >
                  →
                </button>
              </div>

              {/* 3D Calendar Grid */}
              <div className="h-96">
                <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[10, 10, 5]} intensity={0.8} />
                  <pointLight position={[-10, -10, -5]} intensity={0.3} color="#FFD700" />
                  
                  {renderCalendarDays()}
                  
                  <OrbitControls 
                    enableZoom={true} 
                    enablePan={false} 
                    maxDistance={12}
                    minDistance={4}
                  />
                </Canvas>
              </div>

              <div className="text-center mt-4 text-sm text-white/70">
                <p>Click on a date to view/add events • Yellow = Today • Red = Has Events</p>
              </div>
            </div>
          </div>

          {/* Event Details Panel */}
          <div className="space-y-6">
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold text-white">
                    {selectedDate.toLocaleDateString()}
                  </h4>
                  <button
                    onClick={() => setShowAddEvent(true)}
                    className="p-2 bg-gradient-to-r from-karnataka-red to-karnataka-yellow rounded-lg text-white hover:scale-105 transition-transform"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Events for selected date */}
                <div className="space-y-3">
                  {getEventsForDay(selectedDate.getDate()).map((event) => (
                    <div key={event.id} className="p-3 bg-white/10 rounded-lg">
                      <h5 className="font-medium text-white">{event.title}</h5>
                      <p className="text-karnataka-gold font-kannada text-sm">{event.kannadaTitle}</p>
                      <p className="text-white/70 text-sm mt-1">{event.description}</p>
                    </div>
                  ))}
                  {getEventsForDay(selectedDate.getDate()).length === 0 && (
                    <p className="text-white/50 text-sm">No events on this date</p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Add Event Form */}
            {showAddEvent && selectedDate && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold text-white">Add Event</h4>
                  <button
                    onClick={() => setShowAddEvent(false)}
                    className="text-white/70 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Event Title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
                  />
                  <input
                    type="text"
                    placeholder="ಕನ್ನಡ ಶೀರ್ಷಿಕೆ"
                    value={newEvent.kannadaTitle}
                    onChange={(e) => setNewEvent({ ...newEvent, kannadaTitle: e.target.value })}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 font-kannada"
                  />
                  <textarea
                    placeholder="Event Description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 h-20 resize-none"
                  />
                  <button
                    onClick={handleAddEvent}
                    className="w-full py-3 bg-gradient-to-r from-karnataka-red to-karnataka-yellow text-white font-medium rounded-lg hover:scale-105 transition-transform"
                  >
                    Add Event
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
