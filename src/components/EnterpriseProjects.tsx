import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { PowerBIDashboardPreview, Windows11MigrationPreview } from './MockVisuals';
import { Layers, ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from 'lucide-react';

export const EnterpriseProjects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-16 lg:py-20 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold text-[#1687E8] uppercase tracking-wider">
            Client Solutions & Implementations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] dark:text-white mt-1">
            Enterprise Projects
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Mission-critical IT operations, infrastructure observability and modern workplace engineering delivered at Cognizant.
          </p>
        </div>

        <div className="space-y-8">
          {portfolioData.enterpriseProjects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 p-6 lg:p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Left Column: Interactive Visual Preview Mockup */}
                  <div className="lg:col-span-5 w-full">
                    {project.id === 'nyu-patching' ? (
                      <PowerBIDashboardPreview />
                    ) : (
                      <Windows11MigrationPreview />
                    )}
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-1.5 text-center sm:text-left">
                      * Illustrative concept visualization. Contains no confidential client data or internal production screenshots.
                    </p>
                  </div>

                  {/* Right Column: Project Details */}
                  <div className="lg:col-span-7 space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      {project.client && (
                        <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/70 text-[#1687E8] dark:text-[#38BDF8] border border-sky-200 dark:border-sky-800">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Client: {project.client}</span>
                        </span>
                      )}
                    </div>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Summary Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Expandable Scope Points */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 space-y-2">
                        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Full Project Scope (Resume Verbatim)
                        </div>
                        <ul className="space-y-2">
                          {project.scopePoints.map((point, idx) => (
                            <li
                              key={idx}
                              className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start space-x-2.5"
                            >
                              <span className="text-[#1687E8] font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Toggle Button */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-xs font-semibold text-[#1687E8] dark:text-[#38BDF8] hover:underline flex items-center space-x-1 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Show Less Details' : 'View Scope & Responsibilities'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <span className="text-[11px] text-slate-400 font-mono">
                        Cognizant Delivery
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

