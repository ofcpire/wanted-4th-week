// GraphBar.js
import * as d3 from 'd3';
import React, { useState, useRef, useEffect, useMemo } from 'react';

interface GraphDrawProps {
  width: number;
  height: number;
  data: mockArrayObjType[];
  emphId: string;
  setEmphId: (id: string) => void;
  setMouseOverIdx: (idx: number | null) => void;
}

export default function GraphDraw({
  width,
  height,
  data,
  emphId,
  setEmphId,
  setMouseOverIdx,
}: GraphDrawProps) {
  const margin = 50;
  const svgRef = useRef<SVGSVGElement | null>(null);
  const barWidth = width / data.length;
  const barYDomain = [0, 20000];
  const areaYDomain = [0, 200];

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin * 2)
      .attr('height', height + margin * 2);
  }, []);

  useEffect(() => {
    draw();
  }, [data]);

  const barYScale = d3
    .scaleLinear()
    .domain(barYDomain)
    .range([height - 100, 0]);

  const areaYScale = d3
    .scaleLinear()
    .domain(areaYDomain)
    .range([height - 100, 0]);

  const barYAxis = d3.axisRight(barYScale);
  const areaYAxis = d3.axisLeft(areaYScale);

  const xScale = d3
    .scaleTime()
    .domain([new Date(data[0].key), Math.max(...data.map(obj => new Date(obj.key).getTime()))])
    .range([barWidth / 2, width - barWidth / 2]);

  const areaChart = d3
    .area<mockArrayObjType>()
    .x(d => xScale(new Date(d.key)))
    .y0(areaYScale(0))
    .y1(d => areaYScale(d.value_area));

  const draw = () => {
    d3.select(svgRef.current)
      .append('g')
      .attr('transform', `translate(${width + margin},${margin * 2})`)
      .attr('class', 'bar-y-axis')
      .call(barYAxis);

    d3.select(svgRef.current)
      .append('g')
      .attr('transform', `translate(${margin},${margin * 2})`)
      .attr('class', 'area-x-axis')
      .call(areaYAxis);

    d3.select(svgRef.current)
      .append('g')
      .attr('transform', `translate(${margin}, ${height})`)
      .call(d3.axisBottom(xScale));

    d3.select(svgRef.current)
      .append('path')
      .datum(data)
      .attr('fill', 'rgba(255,165,0,0.5)')
      .attr('d', areaChart)
      .attr('pointerEvents', 'none')
      .attr('transform', `translate(${margin}, ${margin * 2})`);
  };

  return (
    <div className="chart">
      <svg ref={svgRef}>
        <g>
          {data.map((data, idx) => (
            <rect
              key={data.key}
              className="cursor-pointer"
              pointerEvents="fill"
              onMouseOver={() => setMouseOverIdx(idx)}
              onMouseOut={() => setMouseOverIdx(null)}
              transform={`translate(${margin - barWidth / 2},${margin})`}
              fill={emphId === data.id ? 'steelblue' : 'lightblue'}
              onClick={() => setEmphId(data.id)}
              x={xScale(new Date(data.key))}
              y={barYScale(data.value_bar) + margin}
              height={height - barYScale(data.value_bar) - margin * 2}
              width={barWidth}
            ></rect>
          ))}
        </g>
      </svg>
    </div>
  );
}
