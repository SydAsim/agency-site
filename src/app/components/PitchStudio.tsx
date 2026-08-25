import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Target,
  Sliders,
  ChevronRight,
  RefreshCw,
  Copy,
  Check,
} from 'lucide-react';
import { Gauge } from './Gauge';

export function PitchStudio({ onOpenEarlyAccess }: { onOpenEarlyAccess: () => void }) {
  const [pitchType, setPitchType] = useState<'funding' | 'product' | 'executive' | 'crisis'>('funding');
  const [tone, setTone] = useState<'punchy' | 'executive' | 'technical'>('punchy');
  const [copied, setCopied] = useState(false);

  const pitchPresets = {
    funding: {
      title: 'Series A / Growth Funding',
      subject: 'Exclusive: [Startup] raises $24M to automate AI infrastructure latency',
      body: 'Hi [Journalist Name],\n\nGiven your recent coverage on cloud inference economics at [Publication], I wanted to share an embargoed exclusive: [Startup] has just closed a $24M Series A led by [Lead VC].\n\nUnlike legacy models, their compiler cuts API spend by 62% for enterprise teams. Founder [Name] is available for a 15-min background briefing under embargo until Thursday 6:00 AM EST.\n\nWould you like the confidential press release and benchmark deck?',
      metrics: {
        score: 92,
        openRate: '81.4%',
        sentiment: 'High Excitement',
        topOutlet: 'TechCrunch / FT',
        sendTime: 'Tuesday 9:15 AM EST',
      },
    },
    product: {
      title: 'Product Redesign & Launch',
      subject: 'Preview: How [Brand] reimagined agency workflow for 50,000 teams',
      body: 'Hi [Journalist Name],\n\nFollowing up on your piece regarding fragmented SaaS stacks, [Brand] is launching their flagship 3.0 platform next week.\n\nThey have consolidated 6 disparate PR tools into a single high-velocity command center. We have prepared an early hands-on beta invite and customer quotes from [Top Agency].\n\nLet me know if you would like exclusive access before the global announcement.',
      metrics: {
        score: 86,
        openRate: '74.2%',
        sentiment: 'Strong Innovation',
        topOutlet: 'VentureBeat / Wired',
        sendTime: 'Wednesday 10:00 AM EST',
      },
    },
    executive: {
      title: 'Executive C-Suite Hire',
      subject: 'News: Former [Tech Giant] VP joins [Company] as Chief Product Officer',
      body: 'Hi [Journalist Name],\n\nQuick note on leadership moves: [Company] has appointed [Executive Name], formerly Head of Product at [Tech Giant], as their new CPO to accelerate enterprise expansion.\n\n[Executive Name] oversaw $400M ARR growth and is available to discuss shifts in enterprise security architecture.\n\nHappy to connect you directly for a brief Q&A.',
      metrics: {
        score: 79,
        openRate: '68.5%',
        sentiment: 'Corporate Stability',
        topOutlet: 'Forbes / WSJ Pro',
        sendTime: 'Monday 8:30 AM EST',
      },
    },
    crisis: {
      title: 'Crisis & Brand Statement',
      subject: 'Statement & Clarification: [Company] response to [Industry Event]',
      body: 'Hi [Journalist Name],\n\nWe are sharing an official statement and independent audit report from [Company CEO] regarding today’s regulatory developments.\n\nAll customer data remains completely segregated and untouched. Attached is the verified technical log and our timeline of resolutions.\n\nOur legal and engineering leads are on standby for verification calls.',
      metrics: {
        score: 89,
        openRate: '88.0%',
        sentiment: 'Transparency & High Urgency',
        topOutlet: 'Bloomberg / Reuters',
        sendTime: 'Immediate Broadcast',
      },
    },
  };

  const current = pitchPresets[pitchType];

  const handleCopy = () => {
    navigator.clipboard.writeText(`${current.subject}\n\n${current.body}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="pitch-studio" className="w-full">
      <div className="bg-[#f5f2ee] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 border border-neutral-200/80 shadow-xs">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3.5 py-1 text-xs font-medium text-neutral-800 mb-4 border border-neutral-200/60 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#ef4d23]"></span>
            <span>Interactive Pitch Studio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight leading-[1.1]">
            Draft, calibrate, and forecast{' '}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              response rates
            </span>{' '}
            in real-time
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Test how different narrative hooks, subject line structures, and embargo timings affect your predicted open and placement rates across tier-1 editorial desks.
          </p>
        </div>

        {/* Pitch Studio Interactive Board */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-neutral-200 shadow-sm">
          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2 pb-5 border-b border-neutral-100">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mr-2">
              Story Angle:
            </span>
            {(['funding', 'product', 'executive', 'crisis'] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setPitchType(type)}
                className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  pitchType === type
                    ? 'bg-[#0b0f1a] text-white shadow-xs'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {pitchPresets[type].title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            {/* Editor Side (Cols 7) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-neutral-700 mb-1.5">
                    <span>Subject Line Hook</span>
                    <span className="text-[#ef4d23] text-[11px] font-semibold">
                      {current.subject.length} chars (Optimal: 45-65)
                    </span>
                  </div>
                  <div className="w-full bg-[#f5f2ee] p-3 rounded-xl border border-neutral-200 text-xs sm:text-sm font-medium text-neutral-900">
                    {current.subject}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-neutral-700 mb-1.5">
                    <span>Pitch Body Preview</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="text-neutral-500 hover:text-neutral-900 flex items-center gap-1 text-[11px] cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Draft</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="w-full bg-[#f5f2ee] p-4 rounded-xl border border-neutral-200 text-xs sm:text-sm text-neutral-800 font-mono whitespace-pre-line leading-relaxed min-h-[180px]">
                    {current.body}
                  </div>
                </div>

                {/* Tone Selector */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-500 font-medium">Tone Profile:</span>
                    <div className="inline-flex bg-neutral-100 rounded-lg p-0.5 text-xs">
                      {(['punchy', 'executive', 'technical'] as const).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTone(t)}
                          className={`px-2.5 py-1 rounded-md capitalize font-medium cursor-pointer transition-all ${
                            tone === t
                              ? 'bg-white text-neutral-900 shadow-2xs font-semibold'
                              : 'text-neutral-500 hover:text-neutral-800'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <span className="text-[11px] text-neutral-400">
                    Auto-calibrated for tier-1 inbox scanners
                  </span>
                </div>
              </div>
            </div>

            {/* Live Analytics Side (Cols 5) */}
            <div className="lg:col-span-5 bg-[#f5f2ee] rounded-2xl p-5 sm:p-6 border border-neutral-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#ef4d23]" />
                    <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                      Resonance Intelligence
                    </span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    99.2% Accuracy
                  </span>
                </div>

                {/* Gauge */}
                <div className="bg-white rounded-xl p-4 border border-neutral-200/60 shadow-2xs mb-4">
                  <div className="text-center text-xs font-medium text-neutral-600 mb-1">
                    Forecasted Story Viability Index
                  </div>
                  <Gauge
                    value={current.metrics.score}
                    color="#ef4d23"
                    showLabels={true}
                    min="Baseline (40%)"
                    max="Elite (95%)"
                  />
                </div>

                {/* Metric Items */}
                <div className="grid grid-cols-2 gap-2.5 text-left">
                  <div className="bg-white p-3 rounded-xl border border-neutral-200/60">
                    <div className="text-[10px] text-neutral-500 font-medium">
                      Estimated Open Rate
                    </div>
                    <div className="text-base font-bold text-neutral-900 mt-0.5">
                      {current.metrics.openRate}
                    </div>
                    <div className="text-[10px] text-emerald-600 font-medium">Top 5% quartile</div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-neutral-200/60">
                    <div className="text-[10px] text-neutral-500 font-medium">Optimal Window</div>
                    <div className="text-xs font-bold text-neutral-900 mt-0.5">
                      {current.metrics.sendTime}
                    </div>
                    <div className="text-[10px] text-neutral-400">Desk local time</div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-neutral-200/60 col-span-2 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-neutral-500 font-medium">Top Matched Outlets</div>
                      <div className="text-xs font-bold text-neutral-900 mt-0.5">
                        {current.metrics.topOutlet}
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-[#ef4d23] bg-orange-50 px-2 py-1 rounded-md border border-orange-100">
                      Tier 1 Fit
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-neutral-200/80">
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="w-full py-2.5 bg-[#ef4d23] hover:bg-[#d83f17] text-white text-xs sm:text-sm font-medium rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 group shadow-xs"
                >
                  <span>Launch Custom Campaign with this Template</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
