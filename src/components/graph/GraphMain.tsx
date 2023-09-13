import React, { useEffect, useState, useMemo } from 'react';
import mockData from '../../mock/mock_data.json';
import GraphDraw from './GraphDraw';
import GraphTooltip from './GraphTooltip';
import GraphButtons from './GraphButtons';
import useCursorXY from '../../hook/useCursorXY';

export default function GraphMain() {
  const { cursorXY } = useCursorXY();
  const [emphId, setEmphId] = useState('');
  const [mouseOverIdx, setMouseOverIdx] = useState<number | null>(null);
  const data = mockData.response as mockDataType;
  const dataArray = useMemo(
    () => Object.keys(data).map(key => Object.assign(data[key], { key: key })),
    [mockData],
  );

  return (
    <div>
      <GraphButtons data={dataArray} emphId={emphId} setEmphId={setEmphId} />
      <GraphDraw
        width={1000}
        height={700}
        data={dataArray}
        emphId={emphId}
        setEmphId={setEmphId}
        setMouseOverIdx={setMouseOverIdx}
      />
      {mouseOverIdx && <GraphTooltip dataObj={dataArray[mouseOverIdx]} cursorXY={cursorXY} />}
    </div>
  );
}
