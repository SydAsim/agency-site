import React, { useState } from 'react';
import { X, Check, Sparkles, Building2, Mail, Users, ArrowRight } from 'lucide-react';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [teamSize, setTeamSize] = useState('6-20 team members');
  const [primaryNeed, setPrimaryNeed] = useState('Media Intelligence & CRM');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workEmail) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setWorkEmail('');
    setAgencyName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ef4d23]"></span>
              <span className="text-[12px] font-semibold text-neutral-700 uppercase tracking-wider">
                Priority Agency Onboarding
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
              Get Early Access to{' '}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                Convix
              </span>
            </h2>

            <p className="text-sm text-neutral-600 mt-2 mb-6">
              Join 400+ leading PR agencies shaping the future of media intelligence, client reporting, and pitch response rates.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-800 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Work Email (Agency Domain)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@agency.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-800 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                    Agency Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Apex Communications"
                      value={agencyName}
                      onChange={(e) => setAgencyName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-800 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                    Team Size
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:border-neutral-800 transition-colors cursor-pointer"
                  >
                    <option value="1-5 members">1-5 members (Boutique)</option>
                    <option value="6-20 team members">6-20 members (Mid-sized)</option>
                    <option value="21-50 team members">21-50 members (Growth)</option>
                    <option value="50+ enterprise">50+ members (Global)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Primary Strategic Focus
                </label>
                <select
                  value={primaryNeed}
                  onChange={(e) => setPrimaryNeed(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:border-neutral-800 transition-colors cursor-pointer"
                >
                  <option value="Media Intelligence & CRM">Media Intelligence & Beat Database</option>
                  <option value="Pitch Response Rate Optimization">Pitch Response Rate Optimization</option>
                  <option value="Automated Client Coverage Books">Automated Client Coverage Books</option>
                  <option value="Whitelabel Client Portals">Whitelabel Client Reporting & Portals</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#ef4d23] hover:bg-[#d83f17] text-white font-medium text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                >
                  <span>Request Instant Agency Access</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-500 pt-1">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  14-Day Free Sandbox
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  No Credit Card Required
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">
              You're on the priority list!
            </h3>

            <p className="text-sm text-neutral-600 mt-2 max-w-sm mx-auto">
              We've dispatched access credentials for{' '}
              <strong className="text-neutral-900">{agencyName || 'your agency'}</strong> to{' '}
              <span className="text-[#ef4d23] font-medium">{workEmail}</span>. Our concierge team will reach out within 2 hours.
            </p>

            <div className="mt-6 bg-[#f5f2ee] rounded-2xl p-4 text-left border border-neutral-200/80">
              <div className="text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                What happens next:
              </div>
              <ul className="text-xs text-neutral-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#ef4d23] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    1
                  </span>
                  <span>Instant sandbox invite email with pre-loaded media databases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#ef4d23] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    2
                  </span>
                  <span>Dedicated 1-on-1 agency workflow migration consultation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#ef4d23] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    3
                  </span>
                  <span>Custom client reporting templates styled to your brand guide.</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="mt-6 w-full py-2.5 bg-[#0b0f1a] hover:bg-neutral-800 text-white text-sm font-medium rounded-xl transition-colors cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
