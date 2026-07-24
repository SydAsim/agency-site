import React, { useState } from 'react';
import { TrendingDown, TrendingUp, ChevronDown, X } from 'lucide-react';
import { Gauge } from './Gauge';

export function DashboardPreview() {
  // Toggle states for Card 1 & Card 3
  const [card1ActiveTab, setCard1ActiveTab] = useState<'impressions' | 'clicks'>('impressions');
  const [card3ActiveTab, setCard3ActiveTab] = useState<'videoClicks' | 'videoStarts'>('videoClicks');

  // Form states for Card 2
  const [showFiguresFor, setShowFiguresFor] = useState('This month');
  const [comparePeriodBy, setComparePeriodBy] = useState('Month-to-date (MTD)');
  const [targetMonth, setTargetMonth] = useState('10');
  const [targetYear, setTargetYear] = useState('100');

  return (
    <div className="px-3 sm:px-4">
      <div className="bg-[#f5f2ee] rounded-3xl p-4 sm:p-6 w-full max-w-[880px] mx-auto shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-left">
          {/* Card 1 — Clicks / Impressions */}
          <div className="bg-white rounded-2xl p-5 flex flex-col justify-between shadow-xs border border-neutral-100">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[#ef4d23] font-medium text-sm">Clicks</span>
                <span className="text-[13px] text-neutral-500">This Month</span>
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-[28px] font-semibold text-neutral-900 leading-none">
                  6,896
                </span>
                <span className="bg-red-50 text-red-600 rounded-full px-2 py-0.5 text-[11px] font-medium inline-flex items-center gap-0.5">
                  <TrendingDown className="w-3 h-3 shrink-0" />
                  -3,382 (33%)
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">Compared to yesterday</p>

              <div className="mt-4 mb-2 text-center">
                <span className="text-[12px] text-neutral-500 font-medium">
                  Month Target achieved
                </span>
              </div>

              <Gauge
                value={92}
                color="#ef4d23"
                showLabels={true}
                min="389K"
                max="425K"
              />
            </div>

            <div className="mt-4 bg-neutral-100 rounded-full p-1 flex text-[12px] font-medium">
              <button
                type="button"
                onClick={() => setCard1ActiveTab('impressions')}
                className={`flex-1 py-1.5 rounded-full text-center transition-all cursor-pointer ${
                  card1ActiveTab === 'impressions'
                    ? 'bg-white shadow-xs text-neutral-900 font-semibold'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                Impressions
              </button>
              <button
                type="button"
                onClick={() => setCard1ActiveTab('clicks')}
                className={`flex-1 py-1.5 rounded-full text-center transition-all cursor-pointer ${
                  card1ActiveTab === 'clicks'
                    ? 'bg-white shadow-xs text-neutral-900 font-semibold'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                Clicks
              </button>
            </div>
          </div>

          {/* Card 2 — Form */}
          <div className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-xs border border-neutral-100">
            {/* Field 1: Show figures for */}
            <div>
              <label className="block text-[12px] font-medium text-neutral-700 mb-1">
                Show figures for
              </label>
              <div className="relative">
                <select
                  value={showFiguresFor}
                  onChange={(e) => setShowFiguresFor(e.target.value)}
                  className="w-full appearance-none bg-white border border-neutral-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-neutral-800 pr-8 focus:outline-none focus:border-neutral-400 cursor-pointer font-medium"
                >
                  <option value="This month">This month</option>
                  <option value="Last month">Last month</option>
                  <option value="This quarter">This quarter</option>
                  <option value="This year">This year</option>
                </select>
                <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 2: Compare period by */}
            <div>
              <label className="block text-[12px] font-medium text-neutral-700 mb-1">
                Compare period by
              </label>
              <div className="relative">
                <select
                  value={comparePeriodBy}
                  onChange={(e) => setComparePeriodBy(e.target.value)}
                  className="w-full appearance-none bg-white border border-neutral-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-neutral-800 pr-8 focus:outline-none focus:border-neutral-400 cursor-pointer font-medium"
                >
                  <option value="Month-to-date (MTD)">Month-to-date (MTD)</option>
                  <option value="Year-to-date (YTD)">Year-to-date (YTD)</option>
                  <option value="Prior Period">Prior Period</option>
                </select>
                <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 3: Ste targets (This month) */}
            <div>
              <label className="block text-[12px] font-medium text-neutral-700 mb-1">
                Ste targets (This month)
              </label>
              <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2 bg-white focus-within:border-neutral-400">
                <span className="text-neutral-400 mr-2 text-sm font-medium">#</span>
                <input
                  type="text"
                  value={targetMonth}
                  onChange={(e) => setTargetMonth(e.target.value)}
                  className="w-full text-xs sm:text-sm text-neutral-800 focus:outline-none font-medium"
                />
              </div>
            </div>

            {/* Field 4: Ste targets (This year) */}
            <div>
              <label className="block text-[12px] font-medium text-neutral-700 mb-1">
                Ste targets (This year)
              </label>
              <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2 bg-white focus-within:border-neutral-400">
                <span className="text-neutral-400 mr-2 text-sm font-medium">#</span>
                <input
                  type="text"
                  value={targetYear}
                  onChange={(e) => setTargetYear(e.target.value)}
                  className="w-full text-xs sm:text-sm text-neutral-800 focus:outline-none font-medium"
                />
              </div>
            </div>

            {/* Card 2 Footer */}
            <div className="mt-auto pt-2 flex items-center gap-3">
              <button
                type="button"
                className="bg-[#ef4d23] hover:bg-[#d83f17] text-white rounded-lg px-5 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                Save
              </button>
              <button
                type="button"
                className="text-xs sm:text-sm text-neutral-600 hover:text-neutral-900 underline cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                className="ml-auto text-neutral-400 hover:text-neutral-700 p-1 cursor-pointer transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3 — Video Starts */}
          <div className="bg-white rounded-2xl p-5 flex flex-col justify-between shadow-xs border border-neutral-100 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[#ef4d23] font-medium text-sm">Video Starts</span>
                <span className="text-[13px] text-neutral-500">today</span>
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-[28px] font-semibold text-neutral-900 leading-none">
                  0
                </span>
                <span className="bg-neutral-100 text-neutral-600 rounded-full px-2 py-0.5 text-[11px] font-medium inline-flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3 shrink-0" />
                  0
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">Compared to yesterday</p>

              <div className="mt-4 mb-2 text-center invisible">
                <span className="text-[12px] font-medium">Spacer</span>
              </div>

              <Gauge
                value={68}
                color="#9ca3af"
                showLabels={false}
              />
            </div>

            <div className="mt-4 bg-neutral-100 rounded-full p-1 flex text-[12px] font-medium">
              <button
                type="button"
                onClick={() => setCard3ActiveTab('videoClicks')}
                className={`flex-1 py-1.5 rounded-full text-center transition-all cursor-pointer ${
                  card3ActiveTab === 'videoClicks'
                    ? 'bg-white shadow-xs text-neutral-900 font-semibold'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                Video Clicks
              </button>
              <button
                type="button"
                onClick={() => setCard3ActiveTab('videoStarts')}
                className={`flex-1 py-1.5 rounded-full text-center transition-all cursor-pointer ${
                  card3ActiveTab === 'videoStarts'
                    ? 'bg-white shadow-xs text-neutral-900 font-semibold'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                Video Starts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
