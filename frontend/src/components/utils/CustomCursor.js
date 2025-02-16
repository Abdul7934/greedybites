import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 1.5 : 1,
        }}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          width: '10px',
          height: '10px',
          backgroundColor: '#ff4b4b',
          borderRadius: '50%',
          mixBlendMode: 'difference'
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          width: '40px',
          height: '40px',
          border: '2px solid #ff4b4b',
          borderRadius: '50%',
          opacity: 0.5,
          mixBlendMode: 'difference'
        }}
      />
    </>
  );
};

export default CustomCursor; 