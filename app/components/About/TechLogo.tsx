'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useParallax } from '@/app/hooks/useParallax';

interface TechLogoProps {
  icon: React.ReactNode;
  name: string;
  color: string;
  delay?: number;
  floatDistance?: number;
  orbitRadius?: number;
}

export default function TechLogo({ 
  icon, 
  name, 
  color, 
  delay = 0,
  floatDistance = 20,
  orbitRadius = 0 
}: TechLogoProps) {
  const ref = useRef<HTMLDivElement>(null);
const y = useParallax(ref, floatDistance);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        delay,
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }}
      style={{ y }}
      className="relative group"
    >
      <motion.div
        whileHover={{ 
          scale: 1.2,
          rotate: orbitRadius > 0 ? 360 : 5,
        }}
        transition={{ 
          rotate: { duration: orbitRadius > 0 ? 20 : 0.3, ease: 'linear', repeat: orbitRadius > 0 ? Infinity : 0 },
          scale: { duration: 0.3 }
        }}
        className="relative"
      >
        {/* Logo container */}
        <div 
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:border-opacity-100"
          style={{ 
            borderColor: color,
            boxShadow: `0 0 0 rgba(${hexToRgb(color)}, 0)`
          }}
        >
          <div style={{ color, fontSize: '2rem' }}>
            {icon}
          </div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 rounded-2xl blur-xl -z-10"
          style={{ 
            background: color,
            opacity: 0.3
          }}
        />

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs whitespace-nowrap border"
          style={{ borderColor: color }}
        >
          {name}
        </motion.div>
      </motion.div>

      {/* Floating animation */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay
        }}
        className="absolute inset-0 -z-20"
      />
    </motion.div>
  );
}

// Helper function
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '59, 130, 246';
  
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}