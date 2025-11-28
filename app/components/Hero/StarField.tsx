'use client';

import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '@/app/hooks/useMousePosition';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  layer: number; // Nueva propiedad para parallax vertical
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const mousePosition = useMousePosition();
  const animationFrameId = useRef<number | null>(null);
  const scrollY = useRef(0);

  // Rastrear scroll
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Crear estrellas iniciales con capas
  useEffect(() => {
    const createStars = () => {
      const newStars: Star[] = [];
      const starCount = 250;

      for (let i = 0; i < starCount; i++) {
        // Asignar capa (1 = más cerca, 3 = más lejos)
        const layer = Math.floor(Math.random() * 3) + 1;
        
        newStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 2, // Más altura para scroll
          size: Math.random() * 3 + 1,
          speed: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          layer: layer, // 1, 2, o 3
        });
      }

      setStars(newStars);
    };

    createStars();

    const handleResize = () => {
      createStars();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animar las estrellas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // PARALLAX HORIZONTAL (mouse)
        const parallaxX = (mousePosition.x - window.innerWidth / 2) * star.speed * 0.05;
        
        // PARALLAX VERTICAL (scroll) - diferentes velocidades según capa
        // Capa 1 (cerca): se mueve más rápido (0.3)
        // Capa 2 (media): velocidad media (0.15)
        // Capa 3 (lejos): se mueve más lento (0.05)
        const scrollSpeed = star.layer === 1 ? 0.3 : star.layer === 2 ? 0.15 : 0.05;
        const parallaxY = scrollY.current * scrollSpeed;

        const x = star.x + parallaxX;
        const y = (star.y - parallaxY) % (canvas.height + 200); // Wrap vertical

        // Efecto de parpadeo
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7;
        const opacity = star.opacity * twinkle;

        // Detectar si el mouse está cerca
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - x, 2) + Math.pow(mousePosition.y - y, 2)
        );
        const isNear = distance < 150;

        // Tamaño según capa (estrellas lejanas más pequeñas)
        const layerSizeMultiplier = star.layer === 1 ? 1 : star.layer === 2 ? 0.7 : 0.5;
        const adjustedSize = star.size * layerSizeMultiplier;

        // Dibujar la estrella base
        ctx.beginPath();
        ctx.arc(x, y, adjustedSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        // Glow MÁS BRILLANTE Y DIFUMINADO
        if (isNear) {
          const intensity = 1 - (distance / 150);
          const glowSize = adjustedSize * 8;

          // Glow exterior (más difuminado)
          const gradientOuter = ctx.createRadialGradient(x, y, adjustedSize, x, y, glowSize);
          gradientOuter.addColorStop(0, `rgba(59, 130, 246, ${opacity * intensity * 0.8})`);
          gradientOuter.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * intensity * 0.4})`);
          gradientOuter.addColorStop(1, 'rgba(59, 130, 246, 0)');

          ctx.beginPath();
          ctx.arc(x, y, glowSize, 0, Math.PI * 2);
          ctx.fillStyle = gradientOuter;
          ctx.fill();

          // Glow interior (más intenso)
          const glowSizeInner = adjustedSize * 4;
          const gradientInner = ctx.createRadialGradient(x, y, 0, x, y, glowSizeInner);
          gradientInner.addColorStop(0, `rgba(96, 165, 250, ${opacity * intensity})`);
          gradientInner.addColorStop(1, `rgba(59, 130, 246, 0)`);

          ctx.beginPath();
          ctx.arc(x, y, glowSizeInner, 0, Math.PI * 2);
          ctx.fillStyle = gradientInner;
          ctx.fill();
        }
      });

      time += 1;
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [stars, mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-space-dark"
      style={{ pointerEvents: 'none' }}
    />
  );
}