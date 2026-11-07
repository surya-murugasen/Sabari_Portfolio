import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#142D4E] via-[#1687E8] to-[#18B6C9] flex items-center justify-center text-white font-black tracking-wider text-sm shadow-md group-hover:scale-105 transition-transform">
            {portfolioData.personal.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-[#1687E8] transition-colors leading-tight">
              {portfolioData.personal.name}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              {portfolioData.personal.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-600 dark:text-slate-300">
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

        {/* Actions: Theme Toggle & Contact Button */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle color theme"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenContactModal}
            className="px-4 py-2 rounded-xl bg-[#1687E8] hover:bg-[#1270c2] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger & Theme Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle color theme"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full py-2.5 rounded-xl bg-[#1687E8] text-white text-sm font-semibold flex items-center justify-center space-x-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

