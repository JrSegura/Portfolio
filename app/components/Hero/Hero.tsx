'use client';

import { motion } from 'framer-motion';
import { textReveal, glowPulse, letterContainer, letter } from '@/app/lib/animations';
import StarField from './StarField';

export default function Hero() {
  const title = "Bienvenidos";
  const subtitle1 = "Soy Gatilla y soy";
  const subtitle2 = "Desarrollador Junior";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Campo de estrellas de fondo */}
      <StarField />

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Título principal con animación por letras */}
        <motion.h1
          variants={letterContainer}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-7xl font-bold mb-8"
        >
          {title.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className="inline-block text-glow"
              style={{ 
                display: char === ' ' ? 'inline' : 'inline-block',
                textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtítulo 1 */}
        <motion.p
          variants={textReveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4"
        >
          {subtitle1.split(' ').map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              whileHover={{ 
                scale: 1.1,
                color: '#60A5FA',
                transition: { duration: 0.2 }
              }}
            >
              {word === 'Junior' ? (
                <span className="text-space-blue font-bold">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.p>

        {/* Subtítulo 2 - Desarrollador Junior */}
        <motion.div
          variants={glowPulse}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          className="relative inline-block"
        >
          <motion.p
            className="text-2xl md:text-3xl lg:text-5xl font-orbitron font-bold text-space-cyan relative z-10"
            style={{
              textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)'
            }}
            animate={{
              textShadow: [
                '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.5)',
                '0 0 30px rgba(6, 182, 212, 1), 0 0 60px rgba(6, 182, 212, 0.7)',
                '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.5)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {subtitle2}
          </motion.p>

          {/* Efecto de resplandor de fondo */}
          <motion.div
            className="absolute inset-0 bg-space-cyan blur-3xl opacity-30 -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>

        {/* Indicador de scroll con flechas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-20 md:top-90 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          {/* Texto "Scroll" */}
          <motion.span
            className="text-space-cyan text-sm font-medium tracking-widest mb-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              textShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
            }}
          >
            SCROLL
          </motion.span>

          {/* Flechas animadas */}
          <div className="relative flex flex-col items-center">
            {/* Flecha 1 */}
            <motion.div
              className="text-space-blue text-3xl"
              animate={{
                y: [0, 10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0
              }}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))'
              }}
            >
              ↓
            </motion.div>

            {/* Flecha 2 */}
            <motion.div
              className="text-space-cyan text-3xl -mt-3"
              animate={{
                y: [0, 10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3
              }}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 1))'
              }}
            >
              ↓
            </motion.div>

            {/* Flecha 3 */}
            <motion.div
              className="text-space-purple text-3xl -mt-3"
              animate={{
                y: [0, 10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.6
              }}
              style={{
                filter: 'drop-shadow(0 0 12px rgba(139, 92, 246, 1))'
              }}
            >
              ↓
            </motion.div>

            {/* Glow de fondo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-space-blue/20 via-space-cyan/20 to-space-purple/20 blur-xl -z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}