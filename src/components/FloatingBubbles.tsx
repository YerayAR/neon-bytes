'use client';

// Efecto de burbujas animadas para secciones de la página
import { FC, useEffect, useState } from 'react';

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

interface FloatingBubblesProps {
  count?: number;
  colors?: string[];
}

/**
 * Genera burbujas animadas en segundo plano.
 */
const FloatingBubbles: FC<FloatingBubblesProps> = ({
  count = 15, 
  colors = ['bg-pink-500', 'bg-purple-500', 'bg-pink-400', 'bg-purple-400', 'bg-pink-300'] 
}) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < count; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 10 + 6, // 6px to 16px
          left: Math.random() * 100, // 0% to 100%
          delay: Math.random() * 8, // 0s to 8s delay
          duration: Math.random() * 15 + 12, // 12s to 27s duration
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, [count, colors]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full opacity-30 ${bubble.color} animate-float`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-20px',
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
