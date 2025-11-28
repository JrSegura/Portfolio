'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/app/lib/animations';
import TechLogo from './TechLogo';
import { 
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiFlutter,
  SiSharp,
  SiGit,
  SiBootstrap,
  SiDotnet,
  SiJson,
  SiFigma,
  SiFirebase,
  SiShopify
} from 'react-icons/si';

export default function About() {
const technologies = [
  { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E', delay: 0.1 },
  { icon: <SiPython />, name: 'Python', color: '#3776AB', delay: 0.15 },
  { icon: <SiCplusplus />, name: 'C++', color: '#00599C', delay: 0.2 },
  { icon: <SiHtml5 />, name: 'HTML5', color: '#E34F26', delay: 0.25 },
  { icon: <SiCss3 />, name: 'CSS', color: '#1572B6', delay: 0.3 },
  { icon: <SiMysql />, name: 'SQL', color: '#4479A1', delay: 0.35 },
  { icon: <SiFlutter />, name: 'Flutter', color: '#02569B', delay: 0.4, orbitRadius: 30 },
  { icon: <SiSharp />, name: 'C#', color: '#239120', delay: 0.45 },
  { icon: <SiGit />, name: 'Git', color: '#F05032', delay: 0.5 },
  { icon: <SiBootstrap />, name: 'Bootstrap', color: '#7952B3', delay: 0.55 },
  { icon: <SiDotnet />, name: '.NET', color: '#512BD4', delay: 0.6 },
  { icon: <SiJson />, name: 'JSON', color: '#000000', delay: 0.65 },
  { icon: <SiFigma />, name: 'Figma', color: '#F24E1E', delay: 0.7 },
  { icon: <SiFirebase />, name: 'Firebase', color: '#FFCA28', delay: 0.75 },
  { icon: <SiShopify />, name: 'Shopify', color: '#96BF48', delay: 0.8 },
];

  return (
    <section id="acerca" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Lado izquierdo - Collage de tecnologías */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative h-[500px] md:h-[600px]"
          >
            {/* Grid layout para los logos */}
            <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-center"
                  style={{
                    gridColumn: index % 4 === 0 ? 'span 2' : 'span 1',
                    gridRow: Math.floor(index / 3) + 1
                  }}
                >
                  <TechLogo
                    icon={tech.icon}
                    name={tech.name}
                    color={tech.color}
                    delay={tech.delay}
                    floatDistance={20 + (index % 3) * 10}
                    orbitRadius={tech.orbitRadius}
                  />
                </div>
              ))}
            </div>

            {/* Efecto de resplandor de fondo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-space-blue/20 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>

          {/* Lado derecho - Texto */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Acerca de Mí
            </motion.h2>

            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Soy un <span className="text-space-cyan font-semibold">desarrollador junior</span> apasionado 
              por crear experiencias digitales innovadoras. Especializado en desarrollo móvil 
              con <span className="text-space-blue font-semibold">Flutter</span> y desarrollo 
              web con <span className="text-space-purple font-semibold">Bootstrap y JavaScript</span>.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
             
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Me encanta explorar nuevas tecnologías, desde blockchain hasta IA, 
              siempre buscando crear soluciones que generen impacto real.
            </motion.p>

            {/* Stats o highlights */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center p-4 bg-space-blue/10 rounded-xl border border-space-blue/30">
                <div className="text-3xl font-bold text-space-cyan">3+</div>
                <div className="text-sm text-gray-400 mt-1">Proyectos</div>
              </div>
              <div className="text-center p-4 bg-space-purple/10 rounded-xl border border-space-purple/30">
                <div className="text-3xl font-bold text-space-purple">10+</div>
                <div className="text-sm text-gray-400 mt-1">Tecnologías</div>
              </div>
              <div className="text-center p-4 bg-space-cyan/10 rounded-xl border border-space-cyan/30">
                <div className="text-3xl font-bold text-space-blue">100%</div>
                <div className="text-sm text-gray-400 mt-1">Dedicación</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}