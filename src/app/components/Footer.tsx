import React from 'react';
import { Sparkles, Globe, Shield, ArrowUp } from 'lucide-react';

export function Footer({ onOpenEarlyAccess }: { onOpenEarlyAccess: () => void }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 border border-neutral-200/80 shadow-xs">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-100">
          {/* Brand Info (Cols 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 32 32" className="w-8 h-8 shrink-0">
                  <circle cx="16" cy="16" r="3.5" fill="#ef4d23" />
                  <circle cx="26" cy="16" r="3.5" fill="#ef4d23" />
                  <circle cx="23.07" cy="23.07" r="3.5" fill="#ef4d23" />
                  <circle cx="16" cy="26" r="3.5" fill="#ef4d23" />
                  <circle cx="8.93" cy="23.07" r="3.5" fill="#ef4d23" />
                  <circle cx="6" cy="16" r="3.5" fill="#ef4d23" />
                  <circle cx="8.93" cy="8.93" r="3.5" fill="#ef4d23" />
                  <circle cx="16" cy="6" r="3.5" fill="#ef4d23" />
                  <circle cx="23.07" cy="8.93" r="3.5" fill="#ef4d23" />
                </svg>
                <span className="font-semibold text-lg text-neutral-900 tracking-tight">
                  Convix Software
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm">
                The all-in-one software powering the future of PR agencies. Unifying media intelligence, pre-flight pitch forecasting, and whitelabeled client reporting into one aesthetic platform.
              </p>
            </div>

            {/* System Status Pill */}
            <div className="mt-6 inline-flex items-center gap-2 bg-[#f5f2ee] px-3 py-1.5 rounded-full text-xs text-neutral-700 w-fit border border-neutral-200/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium">All Media Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Links Column 1: Product (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li>
                <a href="#features" className="hover:text-[#ef4d23] transition-colors">
                  Journalist Radar
                </a>
              </li>
              <li>
                <a href="#pitch-studio" className="hover:text-[#ef4d23] transition-colors">
                  Pitch Resonance Studio
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#ef4d23] transition-colors">
                  Coverage Books
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#ef4d23] transition-colors">
                  Whitelabel Portals
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#ef4d23] transition-colors">
                  Agency ROI Calculator
                </a>
              </li>
              <li>
                <a href="#pages" className="hover:text-[#ef4d23] transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Solutions (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer"
                >
                  Tech PR Boutiques
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer"
                >
                  Crisis & Corporate
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer"
                >
                  Consumer & Lifestyle
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer"
                >
                  Global Agency Groups
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer"
                >
                  In-House Brand Teams
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Resources (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li>
                <a href="#about" className="hover:text-[#ef4d23] transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#ef4d23] transition-colors">
                  FAQ & Migration
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer"
                >
                  2026 PR Benchmarks
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer"
                >
                  Pitch Hook Library
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer"
                >
                  API Documentation
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 4: Company (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li>
                <a href="#about" className="hover:text-[#ef4d23] transition-colors">
                  About Convix
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Careers</span>
                  <span className="text-[10px] bg-[#ef4d23] text-white px-1.5 py-0.2 rounded-full font-bold">
                    Hiring
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer"
                >
                  Press & Media Kit
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer"
                >
                  Security & SOC2
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#ef4d23] transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Convix Software Inc. All rights reserved. Crafted for modern PR agencies.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenEarlyAccess}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenEarlyAccess}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#ef4d23] transition-colors cursor-pointer font-medium"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
