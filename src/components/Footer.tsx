import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-10 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#142D4E] to-[#1687E8] text-white flex items-center justify-center font-bold text-xs">
              {portfolioData.personal.initials}
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
              {portfolioData.personal.name}
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-500 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#1687E8] dark:hover:text-[#38BDF8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-[#142D4E] dark:bg-[#1687E8] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all z-40 cursor-pointer border border-white/20"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

