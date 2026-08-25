import React, { useState } from 'react';
import { ChevronRight, Sparkles, Check, ArrowRight, Shield } from 'lucide-react';

export function CtaBanner({ onOpenEarlyAccess }: { onOpenEarlyAccess: () => void }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full">
      <div className="bg-[#0b0f1a] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl border border-neutral-800">
        {/* Background glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ef4d23]/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-neutral-700/20 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs rounded-full px-4 py-1.5 text-xs font-medium text-neutral-200 mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#ef4d23]"></span>
            <span>The New Agency Paradigm</span>
          </div>

          {/* Headline */}
          <h2
            className="text-white tracking-tight leading-[1.05]"
            style={{
              fontSize: 'clamp(32px, 6vw, 60px)',
              fontWeight: 500,
            }}
          >
            The future of PR is{' '}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              already written
            </span>
            .<br />
            Claim your agency's seat.
          </h2>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
            Join 450+ forward-thinking agencies replacing legacy clutter with Convix's high-velocity intelligence suite.
          </p>

          {/* Quick Email capture or modal trigger */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mt-8 w-full max-w-md flex flex-col sm:flex-row gap-2.5"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your agency work email..."
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:border-white focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="bg-[#ef4d23] hover:bg-[#d83f17] text-white font-medium text-sm rounded-full px-6 py-3 transition-colors cursor-pointer flex items-center justify-center gap-2 shrink-0 shadow-md group"
              >
                <span>Get Early Access</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          ) : (
            <div className="mt-8 bg-white/10 border border-white/20 rounded-2xl p-4 flex items-center gap-3 text-sm text-emerald-300">
              <Check className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Thank you! We've reserved your priority spot for <strong>{email}</strong>.
              </span>
            </div>
          )}

          {/* Direct CTA Alt */}
          <div className="mt-4">
            <button
              type="button"
              onClick={onOpenEarlyAccess}
              className="text-xs text-neutral-400 hover:text-white underline transition-colors cursor-pointer"
            >
              Prefer a customized private agency demo? Click here
            </button>
          </div>

          {/* Trust points */}
          <div className="mt-10 pt-8 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              14-Day Free Full Access
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Zero Setup Fees
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Instant Team Onboarding
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
