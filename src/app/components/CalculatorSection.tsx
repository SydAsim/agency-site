import React, { useState } from 'react';
import { DollarSign, Clock, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export function CalculatorSection({ onOpenEarlyAccess }: { onOpenEarlyAccess: () => void }) {
  const [clientCount, setClientCount] = useState<number>(12);
  const [teamCount, setTeamCount] = useState<number>(6);
  const [hourlyRate, setHourlyRate] = useState<number>(185);

  // Calculations
  // Average hours wasted on manual coverage books, searching journalists, and fragmented pitch reporting: ~18 hrs / client / month
  // With Convix, automated clipping + fast CRM saves ~14 hrs per client per month.
  const hoursSavedPerMonth = clientCount * 14;
  const monthlyValueUnlocked = hoursSavedPerMonth * hourlyRate;
  const annualValueUnlocked = monthlyValueUnlocked * 12;
  const hoursSavedPerPerson = Math.round(hoursSavedPerMonth / Math.max(teamCount, 1));

  return (
    <section id="calculator" className="w-full">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 border border-neutral-200/80 shadow-xs">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 bg-[#f5f2ee] rounded-full px-3.5 py-1 text-xs font-medium text-neutral-800 mb-4 border border-neutral-200/60">
            <span className="w-2 h-2 rounded-full bg-[#ef4d23]"></span>
            <span>Agency Economics & ROI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight leading-[1.1]">
            Quantify the billable hours{' '}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              unlocked
            </span>{' '}
            every month
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Manual clipping books, outdated media spreadsheets, and disconnected reporting burn hundreds of agency hours every retainer cycle. See your agency's direct productivity upside.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Input (Cols 6) */}
          <div className="lg:col-span-6 bg-[#f5f2ee] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/80 space-y-6">
            {/* Slider 1: Retainer Clients */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-neutral-800">
                  Active Retainer Clients
                </label>
                <span className="text-base font-bold text-[#ef4d23] bg-white px-3 py-1 rounded-lg border border-neutral-200 shadow-2xs">
                  {clientCount} Clients
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="60"
                step="1"
                value={clientCount}
                onChange={(e) => setClientCount(Number(e.target.value))}
                className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer accent-[#ef4d23]"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                <span>2 Boutique</span>
                <span>30 Mid-Sized</span>
                <span>60+ Enterprise</span>
              </div>
            </div>

            {/* Slider 2: Team Members */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-neutral-800">
                  PR Account Execs & Directors
                </label>
                <span className="text-base font-bold text-neutral-900 bg-white px-3 py-1 rounded-lg border border-neutral-200 shadow-2xs">
                  {teamCount} Practitioners
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="35"
                step="1"
                value={teamCount}
                onChange={(e) => setTeamCount(Number(e.target.value))}
                className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer accent-[#ef4d23]"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                <span>1 Solo Partner</span>
                <span>15 Growing Agency</span>
                <span>35+ Global Team</span>
              </div>
            </div>

            {/* Slider 3: Average Billable Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-neutral-800">
                  Blended Agency Billable Rate ($/hr)
                </label>
                <span className="text-base font-bold text-neutral-900 bg-white px-3 py-1 rounded-lg border border-neutral-200 shadow-2xs">
                  ${hourlyRate}/hr
                </span>
              </div>
              <input
                type="range"
                min="75"
                max="400"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer accent-[#ef4d23]"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                <span>$75/hr</span>
                <span>$200/hr</span>
                <span>$400/hr</span>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-200/70 text-xs text-neutral-500 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Based on audited time-tracking benchmarks across 120+ PR firms</span>
            </div>
          </div>

          {/* Results Summary Card (Cols 6) */}
          <div className="lg:col-span-6 bg-[#0b0f1a] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden">
            {/* Background glowing subtle circle */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ef4d23]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Estimated Agency Upside
                </span>
                <span className="bg-[#ef4d23] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  18.4x ROI
                </span>
              </div>

              {/* Big Metrics */}
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-neutral-400">Monthly Capacity Recovered</div>
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-1">
                    {hoursSavedPerMonth.toLocaleString()}{' '}
                    <span className="text-xl font-normal text-neutral-400">hours / mo</span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">
                    ~{hoursSavedPerPerson} hours recovered per team member each month
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-neutral-400">Monthly Billable Upside</div>
                    <div className="text-2xl sm:text-3xl font-semibold text-emerald-400 mt-1">
                      ${monthlyValueUnlocked.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Annual Agency Value</div>
                    <div className="text-2xl sm:text-3xl font-semibold text-white mt-1">
                      ${annualValueUnlocked.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-8 pt-6 border-t border-neutral-800">
              <button
                type="button"
                onClick={onOpenEarlyAccess}
                className="w-full py-3 bg-[#ef4d23] hover:bg-[#d83f17] text-white text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group"
              >
                <span>Unlock Your Agency's Full Capacity</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
