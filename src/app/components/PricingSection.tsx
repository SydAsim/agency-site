import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export function PricingSection({ onOpenEarlyAccess }: { onOpenEarlyAccess: () => void }) {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Boutique',
      tagline: 'Ideal for independent PR consultancies & emerging boutique firms',
      priceMonthly: 149,
      priceAnnual: 119,
      popular: false,
      features: [
        'Up to 5 Active Client Retainers',
        '3 Team Seats included',
        'Journalist Intelligence (350k verified profiles)',
        'Standard Pitch Viability Scoring',
        'Automated Monthly Coverage Books',
        'Email & Chat Concierge Support',
      ],
      cta: 'Start 14-Day Free Trial',
    },
    {
      name: 'Agency Scale',
      tagline: 'The industry standard for high-growth, multi-client PR agencies',
      priceMonthly: 349,
      priceAnnual: 279,
      popular: true,
      badge: 'Agency Standard',
      features: [
        'Up to 25 Active Client Retainers',
        '10 Team Seats included ($25/seat extra)',
        'Full Global Journalist Database (850k+ contacts)',
        'Live Beat Shift & Editorial Desk Radar',
        'AI Pre-Flight Pitch Resonance Analyzer',
        'Custom-Branded Whitelabel Client Portals',
        'Real-Time Sentiment & Share of Voice Scoring',
        'Priority Slack / Video Concierge Support',
      ],
      cta: 'Start Free 14-Day Agency Sandbox',
    },
    {
      name: 'Global Network',
      tagline: 'Custom infrastructure for multinational agency networks & holding groups',
      priceMonthly: 799,
      priceAnnual: 639,
      popular: false,
      features: [
        'Unlimited Client Retainers & Brands',
        'Unlimited Team Seats & Sub-Offices',
        'Dedicated Journalist Concierge Sourcing',
        'Full REST API & Custom CRM Integrations',
        'Single Sign-On (SSO / SAML) & SOC2 Compliant',
        'Custom Domain Whitelabeling with SSL',
        'Dedicated PR Strategist & Account Manager',
        'Custom SLA & 99.99% Guaranteed Uptime',
      ],
      cta: 'Request Enterprise Demo',
    },
  ];

  return (
    <section id="pages" className="w-full">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 border border-neutral-200/80 shadow-xs">
        {/* Header */}
        <div className="max-w-3xl mb-10 text-center mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#f5f2ee] rounded-full px-3.5 py-1 text-xs font-medium text-neutral-800 mb-4 border border-neutral-200/60">
            <span className="w-2 h-2 rounded-full bg-[#ef4d23]"></span>
            <span>Transparent Agency Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight leading-[1.1]">
            Predictable plans for{' '}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              ambitious
            </span>{' '}
            agencies
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-xl mx-auto">
            No surprise per-seat inflation or locked legacy contracts. Every plan includes full access to our updated media intelligence network.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[#f5f2ee] p-1.5 rounded-full border border-neutral-200">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                !annual ? 'bg-white shadow-xs text-neutral-900 font-semibold' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                annual ? 'bg-[#0b0f1a] text-white shadow-xs font-semibold' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-[#ef4d23] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={idx}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'bg-[#0b0f1a] text-white shadow-xl ring-2 ring-[#ef4d23] relative'
                    : 'bg-[#f5f2ee] text-neutral-900 border border-neutral-200/80 hover:border-neutral-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ef4d23] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>

                  <p
                    className={`text-xs mt-2 leading-relaxed ${
                      plan.popular ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-6 mb-6 pb-6 border-b border-neutral-200/20">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-bold tracking-tight">
                        ${price}
                      </span>
                      <span
                        className={`text-xs ${
                          plan.popular ? 'text-neutral-400' : 'text-neutral-500'
                        }`}
                      >
                        / month {annual && '(billed annually)'}
                      </span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8 text-xs sm:text-sm">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.popular
                              ? 'bg-[#ef4d23] text-white'
                              : 'bg-neutral-900 text-white'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span
                          className={
                            plan.popular ? 'text-neutral-200' : 'text-neutral-700'
                          }
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    type="button"
                    onClick={onOpenEarlyAccess}
                    className={`w-full py-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#ef4d23] hover:bg-[#d83f17] text-white shadow-md'
                        : 'bg-white hover:bg-neutral-900 hover:text-white text-neutral-900 border border-neutral-300'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Guarantee Strip */}
        <div className="mt-10 pt-8 border-t border-neutral-100 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 text-center">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>SOC2 Type II Certified Data Centers</span>
          </div>
          <span>•</span>
          <div>14-Day Unconditional Money-Back Guarantee</div>
          <span>•</span>
          <div>Instant 1-Click Data Export anytime (CSV/JSON/PDF)</div>
        </div>
      </div>
    </section>
  );
}
