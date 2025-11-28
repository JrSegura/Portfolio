'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useParallax } from '@/app/hooks/useParallax';
import { fadeInUp } from '@/app/lib/animations';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  link?: string;
  reverse?: boolean;
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  images,
  link,
  reverse = false 
}: ProjectCardProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const y = useParallax(ref, 100);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className={`grid md:grid-cols-2 gap-12 items-center mb-32 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Texto - Lado izquierdo (o derecho si reverse) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className={`space-y-6 ${reverse ? 'md:order-2' : ''}`}
        >
          <motion.h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-glow"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h3>

          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>

          {/* Tecnologías */}
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-space-blue/10 border border-space-blue/30 rounded-full text-sm text-space-cyan hover:bg-space-blue/20 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Link del proyecto */}
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-space-blue to-space-cyan rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 glow-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
            >
              Ver Proyecto →
            </motion.a>
          )}
        </motion.div>

        {/* Collage de imágenes - Lado derecho (o izquierdo si reverse) */}
        <motion.div
          ref={ref}
          style={{ y }}
          className={`relative ${reverse ? 'md:order-1' : ''}`}
        >
        <motion.div 
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >
        {images.map((image, index) => (
            <motion.div
            key={index}
            className={`relative rounded-2xl overflow-hidden cursor-pointer group`}
            style={{
                height: '250px' // Todas las imágenes del mismo tamaño
            }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(index)}
              >
            {/* Imagen real */}
            <Image
            src={image}
            alt={`${title} screenshot ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            />

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">Click para ampliar</span>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-space-blue/20 blur-xl opacity-0 group-hover:opacity-100 -z-10"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Resplandor de fondo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-space-purple/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>

      {/* Modal de zoom */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            {/* Contenedor de la imagen */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden border-2 border-space-blue/50 shadow-2xl shadow-space-blue/20"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Imagen ampliada */}
            <div className="relative w-full h-[70vh] bg-gradient-to-br from-gray-800 to-gray-900">
            <Image
                src={images[selectedImage]}
                alt={`${title} screenshot ${selectedImage + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
            />
            </div>

              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all hover:scale-110 border border-space-cyan/50"
              >
                ✕
              </button>

              {/* Botón anterior */}
              {images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all hover:scale-110 border border-space-cyan/50"
                >
                  ‹
                </button>
              )}

              {/* Botón siguiente */}
              {images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all hover:scale-110 border border-space-cyan/50"
                >
                  ›
                </button>
              )}

              {/* Indicador de imagen */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm border border-space-cyan/50">
                {selectedImage + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}