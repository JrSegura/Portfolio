'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';
import { 

  FaLinkedin, 
  FaEnvelope, 

  FaMapMarkerAlt,

} from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/junior-segura-726143206/',
      color: '#0A66C2',
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:jurnese5@gmail.com',
      color: '#EA4335',
    },

  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      text: 'Cartago, Costa Rica',
      color: '#3B82F6',
    },
    {
      icon: <FaEnvelope />,
      text: 'jurnese5@gmail.com',
      color: '#8B5CF6',
    },

  ];

  return (
    <footer id="contacto" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Degradado de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark via-space-dark to-blue-950/20 -z-20" />
      
      {/* Efectos de resplandor */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-space-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-space-purple/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estoy siempre abierto a nuevas oportunidades y colaboraciones
          </p>
        </motion.div>

        {/* Grid principal */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Información de contacto */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-space-cyan mb-8">Información de Contacto</h3>
            
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center space-x-4 group"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 border-2"
                  style={{ 
                    borderColor: item.color,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-space-cyan mb-8">Sígueme en</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div 
                    className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 flex flex-col items-center justify-center space-y-3 transition-all duration-300 group-hover:border-opacity-100"
                    style={{ 
                       borderColor: social.color,
                    }}
                  >
                    <div 
                      className="text-4xl transition-all duration-300"
                      style={{ color: social.color }}
                    >
                      {social.icon}
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </div>

                  {/* Glow effect on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl blur-xl -z-10"
                    style={{ 
                      background: social.color,
                      opacity: 0.3
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        

        {/* Línea divisoria */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-space-blue to-transparent mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-gray-500 text-sm">
            Diseñado y desarrollado con <span className="text-red-500">♥</span> por Junior Segura
          </p>
 
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-space-blue to-space-cyan rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-space-blue/50 hover:shadow-space-blue/70 transition-all z-40"
          style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
}