import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenEarlyAccess?: () => void;
}

export function Navbar({ onOpenEarlyAccess }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-center pt-4 sm:pt-6 px-3 sm:px-4 relative z-30">
      <div className="bg-white rounded-full shadow-sm border border-neutral-200 pl-2 pr-2 py-2 w-full max-w-[760px] relative flex items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 pl-2 shrink-0 cursor-pointer" aria-label="Convix Home">
          <svg viewBox="0 0 32 32" className="w-7 h-7 sm:w-8 sm:h-8 shrink-0">
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
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 ml-8 text-[14px]">
          <a
            href="#home"
            className="flex items-center gap-2 font-medium text-neutral-900"
          >
            <span className="w-[5px] h-[5px] rounded-full bg-black"></span>
            Home
          </a>
          <a
            href="#features"
            className="font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            className="font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            About
          </a>
          <a
            href="#pages"
            className="font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1"
          >
            Pages
            <ChevronDown className="w-3.5 h-3.5 text-[#ef4d23]" />
          </a>
        </div>

        {/* Right Cluster */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenEarlyAccess}
            className="hidden sm:flex items-center justify-center p-2 text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={onOpenEarlyAccess}
            className="bg-[#ef4d23] hover:bg-[#d83f17] text-white rounded-full pl-4 sm:pl-5 pr-1.5 py-1.5 text-xs sm:text-[14px] font-medium flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span>
              <span className="hidden sm:inline">Get early access</span>
              <span className="sm:hidden">Early access</span>
            </span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ChevronRight className="w-4 h-4 text-white" />
            </span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-900 md:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {menuOpen && (
          <div className="absolute top-full left-2 right-2 mt-2 bg-white rounded-2xl shadow-lg border border-neutral-200 p-4 z-20 md:hidden flex flex-col gap-3 text-sm">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 font-medium text-neutral-900 py-1"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-black"></span>
              Home
            </a>
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-neutral-600 hover:text-neutral-900 py-1"
            >
              Features
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-neutral-600 hover:text-neutral-900 py-1"
            >
              About
            </a>
            <a
              href="#pages"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-neutral-600 hover:text-neutral-900 py-1 flex items-center justify-between"
            >
              Pages (Pricing & Plans)
              <ChevronDown className="w-3.5 h-3.5 text-[#ef4d23]" />
            </a>
            <a
              href="#calculator"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-neutral-600 hover:text-neutral-900 py-1"
            >
              ROI Calculator
            </a>
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-neutral-600 font-medium">Cart / Sandbox</span>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenEarlyAccess?.();
                }}
                className="p-1 text-neutral-700 hover:text-neutral-900"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
