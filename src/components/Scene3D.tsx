
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles } from '@react-three/drei';
import { Mesh } from 'three';

const Monument = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Reduced rotation speed for better performance
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
      </mesh>
    </Float>
  );
};

const Lotus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Slower rotation for better performance
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <coneGeometry args={[0.5, 1, 8]} />
        <meshStandardMaterial color="#FFD700" metalness={0.5} roughness={0.2} />
      </mesh>
    </Float>
  );
};

export const Scene3D = () => {
  // Memoize expensive calculations
  const monuments = useMemo(() => [
    { position: [-3, 1, -2] as [number, number, number], color: "#FF0000", scale: 0.8 },
    { position: [3, -1, -3] as [number, number, number], color: "#FFD700", scale: 1.2 },
    { position: [0, 2, -4] as [number, number, number], color: "#FF9933", scale: 0.6 }
  ], []);

  const lotuses = useMemo(() => [
    [-2, -2, -1] as [number, number, number],
    [2, 1, -2] as [number, number, number],
    [0, -1, -3] as [number, number, number]
  ], []);

  return (
    <div className="absolute inset-0 -z-10 performance-optimized">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        // Performance optimizations
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={Math.min(window.devicePixelRatio, 2)} // Limit pixel ratio for better performance
        performance={{ min: 0.5 }} // Allow frame rate to drop if needed
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#FF0000" />
        
        {/* Reduced sparkles count for better performance */}
        <Sparkles count={50} scale={8} size={1.5} speed={0.1} />
        
        {/* Karnataka Monuments */}
        {monuments.map((monument, index) => (
          <Monument 
            key={index}
            position={monument.position}
            color={monument.color}
            scale={monument.scale}
          />
        ))}
        
        {/* Lotus flowers */}
        {lotuses.map((position, index) => (
          <Lotus key={index} position={position} />
        ))}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.2} // Reduced speed
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};
