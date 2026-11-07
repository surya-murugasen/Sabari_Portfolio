import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Building, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold text-[#1687E8] uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] dark:text-white mt-1">
            Professional Experience
          </h2>
        </div>

        <div className="max-w-4xl">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Left Accent Bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#1687E8]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-[#1687E8] flex items-center justify-center font-bold text-lg shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#1687E8] dark:text-[#38BDF8]">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="self-start sm:self-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/70 text-[#1687E8] border border-blue-200 dark:border-blue-800">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Core Responsibilities */}
              <div className="space-y-2.5 mt-5">
                {exp.bulletPoints.map((point, pIndex) => (
                  <div key={pIndex} className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#1687E8] shrink-0 mt-1" />
                    <span className="text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Tag Group */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

