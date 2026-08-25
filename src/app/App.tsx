import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { DashboardPreview } from './components/DashboardPreview';
import { LogoTicker } from './components/LogoTicker';
import { FeaturesSection } from './components/FeaturesSection';
import { PitchStudio } from './components/PitchStudio';
import { CalculatorSection } from './components/CalculatorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { EarlyAccessModal } from './components/EarlyAccessModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      id="home"
      className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4 font-['Inter',sans-serif] text-neutral-900 selection:bg-[#ef4d23] selection:text-white flex flex-col gap-3 sm:gap-4 scroll-smooth"
    >
      {/* 1. Full-Viewport Hero Container */}
      <div className="relative w-full min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] overflow-hidden bg-[#d9d9d9] rounded-2xl sm:rounded-3xl flex flex-col justify-between shadow-xs">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=60"
          disableRemotePlayback
          {...({
            'webkit-playsinline': 'true',
            'x5-playsinline': 'true',
          } as any)}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4"
            type="video/mp4"
          />
        </video>

        {/* Above video overlay */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />

        {/* Foreground Content Wrapper */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Floating Pill Navbar */}
          <Navbar onOpenEarlyAccess={() => setModalOpen(true)} />

          {/* Hero Content */}
          <div className="flex flex-col items-center px-4 pt-10 sm:pt-16 pb-8 sm:pb-12 text-center shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-xs text-[13px] font-medium text-neutral-800">
              <span className="w-2 h-2 rounded-full bg-[#ef4d23]"></span>
              <span>Convix Software</span>
            </div>

            {/* Headline */}
            <h1
              className="mt-5 sm:mt-6 max-w-4xl text-neutral-900 tracking-tight"
              style={{
                fontSize: 'clamp(36px, 8vw, 72px)',
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: '-0.02em',
              }}
            >
              Shaping{' '}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                Agencies
              </span>
              <br />
              of tomorrow
            </h1>

            {/* Subtitle */}
            <p
              className="mt-4 sm:mt-6 text-neutral-700 px-2 max-w-xl mx-auto font-normal"
              style={{
                fontSize: 'clamp(13px, 3.5vw, 16px)',
              }}
            >
              The All-In-One Software Powering the Future of PR Agencies
            </p>

            {/* CTA button */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="mt-6 sm:mt-8 inline-flex items-center gap-3 bg-[#0b0f1a] hover:bg-[#1a2235] text-white rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 text-[14px] font-medium shadow-md transition-all cursor-pointer group"
            >
              <span>Get Started</span>
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors">
                <ChevronRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-auto pt-2 pb-0 shrink-0">
            <DashboardPreview />
          </div>
        </div>
      </div>

      {/* 2. Client Agencies & Trust Logos */}
      <LogoTicker />

      {/* 3. Core Capabilities Bento Section */}
      <FeaturesSection onOpenEarlyAccess={() => setModalOpen(true)} />

      {/* 4. Interactive Live Pitch Studio */}
      <PitchStudio onOpenEarlyAccess={() => setModalOpen(true)} />

      {/* 5. Interactive Agency ROI & Capacity Calculator */}
      <CalculatorSection onOpenEarlyAccess={() => setModalOpen(true)} />

      {/* 6. Partner Proof & Customer Stories */}
      <TestimonialsSection onOpenEarlyAccess={() => setModalOpen(true)} />

      {/* 7. Transparent Pricing Tiers */}
      <PricingSection onOpenEarlyAccess={() => setModalOpen(true)} />

      {/* 8. Frequently Asked Questions */}
      <FaqSection onOpenEarlyAccess={() => setModalOpen(true)} />

      {/* 9. High-Impact Closing CTA Banner */}
      <CtaBanner onOpenEarlyAccess={() => setModalOpen(true)} />

      {/* 10. Minimalist Editorial Footer */}
      <Footer onOpenEarlyAccess={() => setModalOpen(true)} />

      {/* Interactive Modal */}
      <EarlyAccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
