import { useMotionValue, MotionValue } from 'framer-motion';
import { useEffect } from 'react';

interface CursorPosition {
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
}

export const useCursorPosition = (): CursorPosition => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return { cursorX, cursorY };
};
