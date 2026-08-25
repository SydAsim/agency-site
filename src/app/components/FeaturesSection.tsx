import React, { useState } from 'react';
import {
  Users,
  Target,
  Sparkles,
  BarChart3,
  Search,
  ExternalLink,
  Mail,
  CheckCircle2,
  Share2,
  TrendingUp,
  Clock,
  FileText,
  Eye,
  ChevronRight,
} from 'lucide-react';
import { Gauge } from './Gauge';

export function FeaturesSection({ onOpenEarlyAccess }: { onOpenEarlyAccess: () => void }) {
  const [activeTab, setActiveTab] = useState<'media' | 'pitch' | 'coverage' | 'portal'>('media');

  // Media search query state
  const [mediaQuery, setMediaQuery] = useState('tech');

  const journalists = [
    {
      name: 'Elena Rostova',
      outlet: 'Financial Times',
      beat: 'Fintech, AI Infra, European VC',
      match: 98,
      verified: true,
      recent: 'Mapped out Europe’s top 25 generative AI scale-ups',
      openRate: '84%',
    },
    {
      name: 'Marcus Chen',
      outlet: 'TechCrunch',
      beat: 'Early Stage, SaaS, Enterprise Cloud',
      match: 94,
      verified: true,
      recent: 'Dissecting seed to Series A valuations in Q3',
      openRate: '79%',
    },
    {
      name: 'Sarah Lindqvist',
      outlet: 'Bloomberg Businessweek',
      beat: 'Deeptech, Climate Hardware',
      match: 91,
      verified: true,
      recent: 'Grid resilience and next-gen storage breakthroughs',
      openRate: '88%',
    },
  ];

  return (
    <section id="features" className="w-full">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 border border-neutral-200/80 shadow-xs">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#f5f2ee] rounded-full px-3.5 py-1 text-xs font-medium text-neutral-800 mb-4 border border-neutral-200/60">
            <span className="w-2 h-2 rounded-full bg-[#ef4d23]"></span>
            <span>Platform Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight leading-[1.1]">
            Engineered exclusively for{' '}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              high-growth
            </span>{' '}
            PR agencies
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Eliminate bloated legacy suites and disconnected spreadsheets. Convix centralizes verified media intelligence, live response prediction, automated clipping books, and whitelabeled client workspaces into one seamless interface.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Main Showcase Card (Cols 7) */}
          <div className="lg:col-span-7 bg-[#f5f2ee] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-200/80">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#ef4d23] shadow-xs">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-lg">
                      Live Journalist Intelligence Engine
                    </h3>
                    <p className="text-xs text-neutral-500">
                      850,000+ verified journalists & active editorial desk shifts
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex bg-white px-2.5 py-1 rounded-full text-[11px] font-medium text-emerald-700 border border-emerald-200">
                  Updated 4 mins ago
                </span>
              </div>

              {/* Interactive Search Bar */}
              <div className="relative my-4">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={mediaQuery}
                  onChange={(e) => setMediaQuery(e.target.value)}
                  placeholder="Search by beat, publication, recent article, or geography..."
                  className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 font-medium"
                />
              </div>

              {/* Journalist Cards Preview */}
              <div className="space-y-2.5 mt-4">
                {journalists.map((j, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-3.5 border border-neutral-200/70 hover:border-neutral-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-neutral-900 text-white font-medium flex items-center justify-center text-xs shrink-0">
                        {j.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-xs sm:text-sm text-neutral-900">
                            {j.name}
                          </span>
                          <span className="text-[11px] font-medium text-neutral-500">
                            • {j.outlet}
                          </span>
                          {j.verified && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] text-neutral-600 mt-0.5 line-clamp-1">
                          <strong>Beat:</strong> {j.beat}
                        </p>
                        <p className="text-[10px] text-neutral-400 mt-0.5 italic line-clamp-1">
                          "{j.recent}"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:self-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
                      <div className="text-right pr-1">
                        <div className="text-[10px] text-neutral-400">Match</div>
                        <div className="text-xs font-bold text-[#ef4d23]">{j.match}%</div>
                      </div>
                      <button
                        type="button"
                        onClick={onOpenEarlyAccess}
                        className="bg-neutral-100 hover:bg-[#ef4d23] hover:text-white text-neutral-700 text-[11px] font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        Pitch Target
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-600">
              <span>Dynamic contact verification with 99.4% deliverability rating</span>
              <button
                type="button"
                onClick={onOpenEarlyAccess}
                className="font-medium text-[#ef4d23] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Explore Database <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Secondary Card (Cols 5) - Real-time Pitch Gauges */}
          <div className="lg:col-span-5 bg-[#f5f2ee] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-200/80">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#ef4d23] shadow-xs">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 text-lg">
                    Pitch Resonance & Open Prediction
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Pre-flight AI algorithm trained on 14M journalist pitches
                  </p>
                </div>
              </div>

              {/* Pitch Preview Box */}
              <div className="bg-white rounded-xl p-4 border border-neutral-200/80 shadow-xs mb-4">
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                  <span>Subject Line Analysis</span>
                  <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">
                    High Probability
                  </span>
                </div>
                <div className="text-xs font-medium text-neutral-800 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                  "Exclusive: [Client Name] closes $18M Series A to decentralize clean energy compute"
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                  <div className="bg-neutral-50 rounded-lg p-2.5">
                    <div className="text-[10px] text-neutral-500">Predicted Open Rate</div>
                    <div className="text-lg font-bold text-neutral-900 mt-0.5">78.4%</div>
                    <div className="text-[10px] text-emerald-600">+34% vs industry avg</div>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-2.5">
                    <div className="text-[10px] text-neutral-500">Optimal Send Time</div>
                    <div className="text-lg font-bold text-neutral-900 mt-0.5">Tue 9:15 AM</div>
                    <div className="text-[10px] text-neutral-500">Recipient Local Time</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-neutral-200/80 shadow-xs">
                <div className="text-center text-xs font-medium text-neutral-600 mb-1">
                  Overall Story Viability Score
                </div>
                <Gauge value={87} color="#ef4d23" showLabels={true} min="Low" max="Optimal" />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-600">
              <span>Spam-filter simulation & embargo lock</span>
              <button
                type="button"
                onClick={onOpenEarlyAccess}
                className="font-medium text-[#ef4d23] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tertiary Card (Cols 6) - Automated Coverage Books */}
          <div className="lg:col-span-6 bg-[#f5f2ee] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-200/80">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#ef4d23] shadow-xs">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 text-lg">
                    Instant Executive Coverage Books
                  </h3>
                  <p className="text-xs text-neutral-500">
                    One-click client decks with sentiment, reach, and UVPM
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-neutral-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-900">Campaign: Series A Launch</span>
                    <span className="bg-neutral-100 text-neutral-600 text-[10px] px-2 py-0.5 rounded-full font-medium">
                      24 Clips
                    </span>
                  </div>
                  <span className="text-xs text-[#ef4d23] font-semibold">4.8M Est. Views</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs p-2 bg-neutral-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-medium text-neutral-800">TechCrunch Headline Feature</span>
                    </div>
                    <span className="text-neutral-500 text-[11px]">92k Impressions</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 bg-neutral-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-medium text-neutral-800">Forbes Leadership Column</span>
                    </div>
                    <span className="text-neutral-500 text-[11px]">145k Impressions</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 bg-neutral-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-medium text-neutral-800">VentureBeat Sector Deep Dive</span>
                    </div>
                    <span className="text-neutral-500 text-[11px]">68k Impressions</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Auto-synced with Google Analytics & Brand Mentions</span>
                  <span className="bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-md text-[11px]">
                    96% Positive Sentiment
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-600">
              <span>Export as Whitelabel PDF or Live Shareable Link</span>
              <button
                type="button"
                onClick={onOpenEarlyAccess}
                className="font-medium text-[#ef4d23] hover:underline flex items-center gap-1 cursor-pointer"
              >
                View Sample Report <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quaternary Card (Cols 6) - Whitelabel Client Portals */}
          <div className="lg:col-span-6 bg-[#f5f2ee] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-200/80">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#ef4d23] shadow-xs">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 text-lg">
                    Client Retainer Workspace & Portals
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Live client-facing portals branded entirely under your agency domain
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-neutral-200/80 shadow-xs">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ef4d23]" />
                    <span className="text-xs font-semibold text-neutral-900">
                      portal.youragency.com/client-hub
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full font-medium">
                    Whitelabel Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                  <div className="bg-neutral-50 p-2.5 rounded-lg">
                    <div className="text-[10px] text-neutral-500">Active Pitches</div>
                    <div className="text-base font-bold text-neutral-900">18</div>
                  </div>
                  <div className="bg-neutral-50 p-2.5 rounded-lg">
                    <div className="text-[10px] text-neutral-500">Placements</div>
                    <div className="text-base font-bold text-neutral-900">9</div>
                  </div>
                  <div className="bg-neutral-50 p-2.5 rounded-lg">
                    <div className="text-[10px] text-neutral-500">Share of Voice</div>
                    <div className="text-base font-bold text-[#ef4d23]">41.2%</div>
                  </div>
                </div>

                <div className="text-[11px] text-neutral-600 bg-neutral-50 p-2.5 rounded-lg flex items-center justify-between">
                  <span>Client Stakeholders Online: <strong>4 Executives</strong></span>
                  <span className="text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Syncing
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-600">
              <span>Custom domain, custom CSS, & granular permission controls</span>
              <button
                type="button"
                onClick={onOpenEarlyAccess}
                className="font-medium text-[#ef4d23] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Explore Portals <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
