import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export function FaqSection({ onOpenEarlyAccess }: { onOpenEarlyAccess: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How accurate is Convix’s journalist database compared to Cision or MuckRack?',
      answer:
        'Unlike legacy directories that update contacts semi-annually, Convix continuously monitors live article bylaws, verified social signals, and corporate PR desks in real-time. Our verification engine ensures an industry-leading 99.4% email deliverability rate with zero bounce penalties.',
    },
    {
      question: 'Can we migrate our existing agency media lists and historical client coverage?',
      answer:
        'Yes. Our white-glove onboarding team handles complete zero-downtime migrations from Cision, MuckRack, Meltwater, Prezly, or custom Excel/Airtable spreadsheets within 24 hours at no additional charge.',
    },
    {
      question: 'How does the AI Pitch Resonance algorithm protect journalist relationships?',
      answer:
        'The engine checks your draft against 14M historic pitch interactions to flag spam trigger terms, unverified attachments, over-pitched news cycles, and mismatched beats before you send. This prevents burning bridges with tier-1 reporters.',
    },
    {
      question: 'Are client portals completely white-labeled with our agency’s domain and branding?',
      answer:
        'Yes. Agency Scale and Global plans include full custom domain mapping (e.g. portal.youragency.com), custom brand color palettes, agency logos, and automated white-labeled PDF coverage books.',
    },
    {
      question: 'Can we test Convix before signing an annual contract?',
      answer:
        'Absolutely. We offer a full 14-day unrestricted agency sandbox. You can invite your team, test pitch simulations, and generate live coverage books with zero commitment.',
    },
  ];

  return (
    <section id="faq" className="w-full">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 border border-neutral-200/80 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Heading (Cols 5) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 bg-[#f5f2ee] rounded-full px-3.5 py-1 text-xs font-medium text-neutral-800 mb-4 border border-neutral-200/60">
              <span className="w-2 h-2 rounded-full bg-[#ef4d23]"></span>
              <span>Clarity & Answers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-medium text-neutral-900 tracking-tight leading-[1.1]">
              Frequently asked{' '}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                questions
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Have questions about agency workflow migration, data security, or custom retainer setups? We’re here to help.
            </p>

            <div className="mt-8 bg-[#f5f2ee] rounded-2xl p-5 border border-neutral-200/70">
              <div className="text-xs font-semibold text-neutral-900 mb-1">
                Have a specialized agency setup?
              </div>
              <p className="text-xs text-neutral-600 mb-4">
                Our senior PR strategy team can review your current retainer stack and provide a custom migration plan.
              </p>
              <button
                type="button"
                onClick={onOpenEarlyAccess}
                className="bg-[#0b0f1a] hover:bg-neutral-800 text-white text-xs font-medium px-4 py-2 rounded-xl transition-colors cursor-pointer"
              >
                Talk to an Agency Specialist
              </button>
            </div>
          </div>

          {/* Right Column: Accordions (Cols 7) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? 'bg-[#f5f2ee] border-neutral-300'
                      : 'bg-white border-neutral-200/80 hover:border-neutral-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-semibold text-sm sm:text-base text-neutral-900">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isOpen
                          ? 'bg-[#ef4d23] text-white rotate-180'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
