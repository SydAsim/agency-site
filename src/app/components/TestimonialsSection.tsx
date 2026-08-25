import React from 'react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

export function TestimonialsSection({ onOpenEarlyAccess }: { onOpenEarlyAccess: () => void }) {
  const testimonials = [
    {
      quote:
        'Convix replaced three legacy databases that were burning $40k/year in licenses. Our account executives now construct customized, embargoed pitch books in 15 minutes instead of entire afternoons.',
      author: 'Caroline Sterling',
      role: 'Managing Partner',
      agency: 'Sterling & Croft Communications (New York & London)',
      metric: '+310%',
      metricLabel: 'Tier-1 Media Placements in Q1',
    },
    {
      quote:
        'The pre-flight pitch resonance predictor is genuinely transformative. We stopped blindly blast-pitching journalists and started landing exclusives on FT, TechCrunch, and Bloomberg consistently.',
      author: 'Julian Vance-Moreau',
      role: 'Head of Global Technology Practice',
      agency: 'Aethelgard Advisory (San Francisco)',
      metric: '18 hrs',
      metricLabel: 'Saved per client each month',
    },
    {
      quote:
        'Our enterprise clients are obsessed with their live whitelabeled portal. Instead of fielding panicked emails asking "where are our clips?", stakeholders check their live dashboard in real-time.',
      author: 'Maya Lin-Peterson',
      role: 'Founder & President',
      agency: 'Kinetics PR Network (London & Singapore)',
      metric: '99.4%',
      metricLabel: 'Verified Journalist Deliverability',
    },
  ];

  return (
    <section id="about" className="w-full">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 border border-neutral-200/80 shadow-xs">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#f5f2ee] rounded-full px-3.5 py-1 text-xs font-medium text-neutral-800 mb-4 border border-neutral-200/60">
            <span className="w-2 h-2 rounded-full bg-[#ef4d23]"></span>
            <span>Agency Partner Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight leading-[1.1]">
            Trusted by the leaders who shape the{' '}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              world's stories
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            From high-growth tech boutiques to global strategic communication firms, discover why top PR professionals run their core retainer operations on Convix.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#f5f2ee] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-neutral-200/80 hover:border-neutral-300 transition-all shadow-2xs"
            >
              <div>
                {/* Metric Badge */}
                <div className="bg-white rounded-xl p-3.5 border border-neutral-200/80 shadow-2xs mb-6 flex items-baseline justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#ef4d23]">{t.metric}</div>
                    <div className="text-[11px] text-neutral-500 font-medium">{t.metricLabel}</div>
                  </div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-neutral-200/60">
                <div className="font-semibold text-neutral-900 text-sm">{t.author}</div>
                <div className="text-xs text-neutral-500 mt-0.5">{t.role}</div>
                <div className="text-[11px] text-neutral-400 mt-1 font-medium">{t.agency}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
