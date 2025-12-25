'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef(null);
  const frame = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (frame.current) return;

      frame.current = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.background = `
            radial-gradient(
              600px at ${e.clientX}px ${e.clientY}px,
              rgba(59,130,246,0.15),
              transparent 60%
            )
          `;
        }
        frame.current = null;
      });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
