import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ScanFace, HeartPulse, GraduationCap, CheckCircle2 } from 'lucide-react';

export const AcademicProjects: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold text-[#1687E8] uppercase tracking-wider flex items-center space-x-1.5">
            <GraduationCap className="w-4 h-4" />
            <span>Engineering & Research Work</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] dark:text-white mt-1">
            Academic Projects
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Software and IoT engineering systems developed during undergraduate studies at K. Ramakrishnan College of Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.academicProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-[#1687E8] flex items-center justify-center shrink-0">
                      {project.id === 'attendance-system' ? (
                        <ScanFace className="w-5 h-5 text-[#1687E8]" />
                      ) : (
                        <HeartPulse className="w-5 h-5 text-rose-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {project.title}
                      </h3>
                      {project.year && (
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          Year: {project.year}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mt-3">
                  {project.scopePoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1687E8] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 text-[11px] font-mono text-slate-400 dark:text-slate-500">
                K. Ramakrishnan College of Engineering
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

