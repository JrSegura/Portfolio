'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'QuoApp',
      description: 'Marketplace innovador que conecta clientes con proveedores de servicios. Desarrollado con Flutter y Firebase, implementando Clean Architecture y Riverpod para state management. Sistema completo de pagos integrado con procesadores locales de Costa Rica.',
      technologies: ['Flutter', 'Firebase', 'Dart', 'Clean Architecture', 'Riverpod'],
      images: [
            '/images/projects/quoapp-1.jpeg',
            '/images/projects/quoapp-2.jpeg',
            '/images/projects/quoapp-3.jpeg',
            '/images/projects/quoapp-4.jpeg',
        ],

    },
    {
      title: 'E-commerce Multi-Vendor',
      description: 'Plataforma de comercio electrónico con sistema multi-vendor construida en Shopify. Implementación de templates premium personalizables, efectos 3D, carruseles parallax y sistema de gestión de vendors con metafields.',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Webkul'],
      images: [
        '/images/projects/Ecommerce-1.jpeg',
        '/images/projects/Ecommerce-2.jpeg',
        '/images/projects/Ecommerce-3.jpeg',
        '/images/projects/Ecommerce-4.jpeg',
      ],

      reverse: true,
    },
    {
    title: 'Control de un robot educativo',
    description: 'Desarrollo de una aplicación móvil multiplataforma en Flutter para el manejo de robots educativos Atta-Bots. Integración Bluetooth con ESP32 para envío y recepción de datos, gestión de archivos en iOS/Android y control de permisos. Participación directa con el Project Manager y alta adaptabilidad ante cambios de requisitos.',
    technologies: ['Flutter', 'Bluetooth', 'ESP32', 'Android', 'iOS'],

      images: [
        '/images/projects/atta-1.jpeg',
        '/images/projects/atta-2.jpeg',
        '/images/projects/atta-3.jpeg',
        '/images/projects/atta-4.jpeg',
      ],
    },
  ];

  return (
    <section id="proyectos" className="min-h-screen px-4 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32 md:mb-40"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones innovadoras que combinan diseño, funcionalidad y tecnología de punta
          </p>
        </motion.div>

        {/* Lista de proyectos */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              images={project.images}
              reverse={project.reverse}
            />
          ))}
        </div>
      </div>

      {/* Efectos de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-space-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-space-purple/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}