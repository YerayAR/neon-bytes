'use client';
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
          size: Math.random() * 12 + 4, // 4px to 16px
          left: Math.random() * 100, // 0% to 100%
          delay: Math.random() * 5, // 0s to 5s delay
          duration: Math.random() * 10 + 8, // 8s to 18s duration
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
          className={`absolute rounded-full opacity-20 ${bubble.color} animate-float`}
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
