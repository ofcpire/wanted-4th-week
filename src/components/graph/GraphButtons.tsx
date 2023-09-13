import React, { useState, useMemo } from 'react';

interface GraphButtonsProps {
  data: mockArrayObjType[];
  emphId: string;
  setEmphId: (id: string) => void;
}

const buttonClass = 'm-5 p-1 border rounded-md blue';

export default function GraphButtons({ data, emphId, setEmphId }: GraphButtonsProps) {
  const idArray = useMemo(() => {
    const idArray: string[] = [];
    for (const obj of data) {
      if (!idArray.includes(obj.id)) idArray.push(obj.id);
    }
    return idArray;
  }, [data]);

  return (
    <div>
      <button className={`${buttonClass} border-black text-black`} onClick={() => setEmphId('')}>
        초기화
      </button>
      {idArray.map(id => (
        <button
          key={id}
          className={`${buttonClass} ${
            id === emphId ? 'border-blue-500 text-blue-500' : 'border-black text-black'
          }`}
          onClick={() => setEmphId(id)}
        >
          {id}
        </button>
      ))}
    </div>
  );
}
