import React from 'react';

interface GaugeProps {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string | number;
  max?: string | number;
}

export function Gauge({
  value,
  color = '#ef4d23',
  showLabels = false,
  min,
  max,
}: GaugeProps) {
  const totalTicks = 40;
  const activeCount = Math.round((value / 100) * totalTicks);
  const cx = 100;
  const cy = 100;
  const rOuter = 80;
  const rInner = 70;

  const ticks = Array.from({ length: totalTicks }).map((_, i) => {
    const angleRad = Math.PI + (i / (totalTicks - 1)) * Math.PI;
    const x1 = cx + rInner * Math.cos(angleRad);
    const y1 = cy + rInner * Math.sin(angleRad);
    const x2 = cx + rOuter * Math.cos(angleRad);
    const y2 = cy + rOuter * Math.sin(angleRad);
    const isActive = i < activeCount;

    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isActive ? color : '#d4d4d8'}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    );
  });

  return (
    <div className="w-full max-w-[260px] mx-auto flex flex-col items-center">
      <div className="relative w-full">
        <svg viewBox="0 0 200 120" className="w-full h-auto overflow-visible">
          {ticks}
          <text
            x={100}
            y={105}
            textAnchor="middle"
            fill="#0f172a"
            style={{ fontSize: '22px', fontWeight: 600 }}
          >
            {value}%
          </text>
        </svg>
      </div>
      {showLabels && (min !== undefined || max !== undefined) && (
        <div className="flex justify-between w-full text-[11px] text-neutral-500 px-2 mt-[-4px]">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
