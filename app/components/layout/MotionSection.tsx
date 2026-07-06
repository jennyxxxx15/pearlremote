'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { MotionSectionProps } from '../../types/components/motion.types';

export function MotionSection({
  children,
  ...sectionProps
}: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <section {...sectionProps}>{children}</section>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ amount: 0.01, once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      {...sectionProps}
    >
      {children}
    </motion.section>
  );
}
