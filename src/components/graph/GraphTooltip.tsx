import React, { useState, useEffect } from 'react';

interface GraphTooltipProps {
  dataObj: mockArrayObjType;
  cursorXY: { x: number; y: number };
}

export default function GraphTooltip({ dataObj, cursorXY }: GraphTooltipProps) {
  return (
    <div
      className={`border border-black p-2 rounded bg-white absolute`}
      style={{ top: `${cursorXY.y}px`, left: `${cursorXY.x}px` }}
    >
      <div>id : {dataObj.id}</div>
      <div>bar : {dataObj.value_bar}</div>
      <div>area : {dataObj.value_area}</div>
    </div>
  );
}
