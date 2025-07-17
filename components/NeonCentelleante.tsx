'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './NeonCentelleante.module.css';

interface NeonCentelleanteProps {
  /** Duración de cada ciclo de parpadeo en milisegundos */
  duration?: number;
  /** Intensidad del resplandor (factor aplicado a la sombra) */
  intensity?: number;
}

/**
 * Muestra un texto con efecto de neón parpadeante.
 */
const NeonCentelleante: FC<NeonCentelleanteProps> = ({ duration = 1200, intensity = 1 }) => (
  <motion.span
    aria-label="mensaje neón"
    className={`${styles.blink} text-pink-400 drop-shadow-lg`}
    style={{ animationDuration: `${duration}ms`, '--glow-intensity': intensity } as React.CSSProperties}
    role="status"
  >
    este semestre newsletter extra
  </motion.span>
);

export default NeonCentelleante;
