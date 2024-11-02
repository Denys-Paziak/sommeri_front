// components/CustomCursor.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './CustomCursor.module.css';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const speed = 0.1; // Швидкість інтерполяції (0.1 = повільно, 1 = миттєво)

  const [isBlackWhite, setIsBlackWhite] = useState(false);

  useEffect(() => {
    // Перевірка на клієнтське середовище
    if (typeof window === 'undefined') return;

    pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    mouse.current = { x: pos.current.x, y: pos.current.y };

    const cursor = cursorRef.current;

    const moveCursor = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const updatePosition = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;
      if (cursor) {
        gsap.set(cursor, {
          x: pos.current.x,
          y: pos.current.y,
        });
      }
      requestAnimationFrame(updatePosition);
    };

    const handleMouseEnter = (e: Event) => {
      if ((e.target as Element).matches('.invert-on-hover')) {
        setIsBlackWhite(true);
      }
    };

    const handleMouseLeave = () => {
      setIsBlackWhite(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    updatePosition();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`${styles.cursor} ${isBlackWhite ? styles.blackWhite : ''}`}
    />
  );
};

export default CustomCursor;
