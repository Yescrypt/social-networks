
'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  className?: string;
  color?: string;
}

export default function MatrixRain({ className = '', color = '#00ff00' }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    // Only letters and numbers - no Chinese symbols
    const matrix = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]()<>+-*/=!@#$%^&|\\;:.,?';
    const drops: number[] = [];
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    let animationId: number;

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      setCanvasSize();
      const newColumns = Math.floor(canvas.width / fontSize);
      drops.length = newColumns;
      for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) {
          drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: 'black' }}
    />
  );
}
