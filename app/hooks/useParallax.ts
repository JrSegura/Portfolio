'use client';

import { useTransform, useScroll, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

export const useParallax = (
  ref: RefObject<HTMLElement | HTMLDivElement | null>,
  distance: number = 200
): MotionValue<number> => {
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
    offset: ['start end', 'end start']
  });

  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
};