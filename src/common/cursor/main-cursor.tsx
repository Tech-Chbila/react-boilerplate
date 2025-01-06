import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface MainCursorProps {
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
  isHovering: boolean;
}

export const MainCursor: React.FC<MainCursorProps> = ({
  cursorX,
  cursorY,
  isHovering,
}) => {
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference "
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{
        duration: 0.5, // Increased duration
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
    >
      <motion.div
        className="h-10 w-10 rounded-full "
        animate={{
          scale: isHovering ? 1.2 : 1,
          backgroundColor: isHovering ? '#ededed' : 'white',
        }}
        transition={{ duration: 1.2 }} // Increased duration
      />
    </motion.div>
  );
};
