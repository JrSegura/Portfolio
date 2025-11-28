'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideDown } from '@/app/lib/animations';

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Acerca de Mí', href: '#acerca' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para mostrar/ocultar navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100); // Aparece después de 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll al hacer click
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Offset para que no quede pegado arriba
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          variants={slideDown}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
          {/* Contenedor con backdrop blur */}
          <div className="max-w-7xl mx-auto bg-black/30 backdrop-blur-md border border-space-blue/20 rounded-full px-8 py-4 shadow-lg shadow-space-blue/10">
            <div className="flex items-center justify-center">


              {/* Links Desktop */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`relative px-6 py-2 text-sm font-medium transition-colors ${
                        isActive ? 'text-space-cyan' : 'text-gray-300 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                      
                      {/* Indicador activo */}
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-space-blue/20 rounded-full border border-space-blue/40"
                          style={{
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                          }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Efecto hover */}
                      <motion.div
                        className="absolute inset-0 bg-space-blue/10 rounded-full opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />

                    </motion.a>
                  );
                })}
              </div>

              {/* Botón menú móvil */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  className="w-6 h-5 flex flex-col justify-between"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 8 }
                    }}
                    className="w-full h-0.5 bg-space-cyan block"
                    style={{ originX: 0.5, originY: 0.5 }}
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    className="w-full h-0.5 bg-space-cyan block"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -8 }
                    }}
                    className="w-full h-0.5 bg-space-cyan block"
                    style={{ originX: 0.5, originY: 0.5 }}
                  />
                </motion.div>
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="bg-black/40 backdrop-blur-md border border-space-blue/20 rounded-3xl px-6 py-4 shadow-lg shadow-space-blue/10">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`block py-3 px-4 rounded-xl mb-2 transition-colors ${
                          isActive 
                            ? 'bg-space-blue/20 text-space-cyan border border-space-blue/40' 
                            : 'text-gray-300 hover:bg-space-blue/10 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}