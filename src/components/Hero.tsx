import React from 'react';
import {
  Download,
  Clock,
  Building2,
  BarChart3,
  Laptop,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { HeroAvatar } from './MockVisuals';

interface HeroProps {
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#1687E8]/10 via-[#18B6C9]/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Role Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-[#1687E8] dark:text-[#38BDF8] text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              <span>{portfolioData.personal.title}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#142D4E] dark:text-white tracking-tight leading-[1.12]">
              {portfolioData.personal.name}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-medium text-[#1687E8] dark:text-[#38BDF8]">
              {portfolioData.personal.tagline}
            </p>

            {/* Resume-backed summary */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {portfolioData.personal.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-[#1687E8] hover:bg-[#1270c2] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center space-x-2 cursor-pointer group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={portfolioData.personal.resumePdfUrl}
                download="Sabari_Venkatesh_Daniel_Resume.pdf"
                className="px-5 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-sm shadow-sm transition-all flex items-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#1687E8]" />
                <span>Download Resume</span>
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sabari Venkatesh Daniel LinkedIn Profile"
                className="p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1687E8] border border-slate-300 dark:border-slate-700 shadow-sm transition-all flex items-center justify-center cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroAvatar />
          </div>
        </div>

        {/* 4 Feature Stats Bar (Directly matching reference) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800">
          <div className="bg-white dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-[#1687E8] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">2+ Years</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Experience</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-cyan-50 dark:bg-cyan-900/40 text-[#18B6C9] flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">Cognizant</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Technology Solutions</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-900/40 text-amber-500 flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">Power BI & SQL</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Reporting & Analytics</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-500 flex items-center justify-center shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">Intune & SCCM</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Endpoint Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
