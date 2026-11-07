import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { AboutIllustration } from './MockVisuals';
import { CheckCircle2, Server, BarChart, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#1687E8] uppercase tracking-wider">
                Profile Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] dark:text-white mt-1">
                About Me
              </h2>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              {portfolioData.personal.aboutBio}
            </p>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Career Objective
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{portfolioData.personal.objective}"
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#1687E8]" />
                <span>Troubleshooting</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#1687E8]" />
                <span>Performance Tuning</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#1687E8]" />
                <span>Cross-Team Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <AboutIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

