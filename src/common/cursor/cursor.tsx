import React from 'react';
import { useCursorPosition } from './use-cursor-position';
import { MainCursor } from './main-cursor';
import { useAppStore } from '@/store';

export const CustomCursor: React.FC = () => {
  const { cursorX, cursorY } = useCursorPosition();

  const { isHovering } = useAppStore();

  return (
    <>
      <MainCursor cursorX={cursorX} cursorY={cursorY} isHovering={isHovering} />
    </>
  );
};
