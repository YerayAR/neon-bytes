'use client';
import { FC, useEffect, useRef } from 'react';

interface MatrixRainProps {
  intensity?: number;
  color?: string;
}

const MatrixRain: FC<MatrixRainProps> = ({ 
  intensity = 0.8, 
  color = '#ff0080' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Caracteres para el efecto matrix
    const matrix = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンNEONBYTES";
    const matrixArray = matrix.split('');

    const fontSize = 14;
    let columns: number;
    let drops: number[];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };

    resizeCanvas();

    const draw = () => {
      // Fondo semi-transparente para efecto trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reiniciar gota si llega al final o aleatoriamente
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const animate = () => {
      draw();
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 50 / intensity); // Controla la velocidad
    };

    animate();

    // Resize handler
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [intensity, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default MatrixRain;
