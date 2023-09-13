import React, { useState, useEffect } from 'react';

export default function useCursorXY() {
  const [cursorXY, setCursorXY] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  const mouseMoveHandler = (e: MouseEvent) => {
    setCursorXY({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    console.log(cursorXY);
  }, [cursorXY]);

  return { cursorXY };
}
