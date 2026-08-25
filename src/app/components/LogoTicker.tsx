import React from 'react';

export function LogoTicker() {
  const logos = [
    { name: 'ARCHETYPE', category: 'Global Tech PR' },
    { name: 'EDELMAN', category: 'Communications' },
    { name: 'BRUNSWICK', category: 'Strategic Advisory' },
    { name: 'WEBER SHANDWICK', category: 'Media Network' },
    { name: 'FLEISHMAN', category: 'Brand & Public Affairs' },
    { name: 'OGILVY PR', category: 'Creative Communications' },
  ];

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ef4d23]"></span>
            <span className="text-xs font-semibold text-neutral-800 uppercase tracking-wider">
              Trusted by 450+ Communications Firms
            </span>
          </div>
          <p className="text-xs text-neutral-500 text-center sm:text-right">
            Powering over <strong>2.4M monthly media placements</strong> worldwide
          </p>
        </div>

        <div className="pt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-neutral-50 transition-colors group cursor-default"
            >
              <span className="font-semibold text-neutral-900 tracking-wider text-sm group-hover:text-[#ef4d23] transition-colors">
                {logo.name}
              </span>
              <span className="text-[10px] text-neutral-400 mt-0.5 tracking-tight">
                {logo.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
