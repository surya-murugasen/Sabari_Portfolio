import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, GraduationCap, Briefcase, ChevronRight, Calendar, BookOpen } from 'lucide-react';

export const CertificationsAndEducation: React.FC = () => {
  const getIssuerBadge = (issuer: string) => {
    switch (issuer) {
      case 'Microsoft':
        return (
          <div className="w-6 h-6 grid grid-cols-2 gap-0.5 shrink-0">
            <div className="bg-[#f25022] rounded-xs" />
            <div className="bg-[#7fba00] rounded-xs" />
            <div className="bg-[#00a4ef] rounded-xs" />
            <div className="bg-[#ffb900] rounded-xs" />
          </div>
        );
      case 'Udemy':
        return (
          <div className="w-6 h-6 rounded-md bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 font-bold text-xs shrink-0">
            û
          </div>
        );
      case 'AWS':
        return (
          <div className="w-6 h-6 rounded-md bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600 font-bold text-[9px] shrink-0">
            AWS
          </div>
        );
      case 'Wipro':
        return (
          <div className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 font-bold text-[9px] shrink-0">
            W
          </div>
        );
      case 'Oracle':
        return (
          <div className="w-6 h-6 rounded-md bg-red-100 dark:bg-red-950 flex items-center justify-center text-red-600 font-bold text-[8px] shrink-0">
            ORA
          </div>
        );
      default:
        return <Award className="w-5 h-5 text-[#1687E8]" />;
    }
  };

  return (
    <section id="certifications" className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Certifications & Courses */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#1687E8] uppercase tracking-wider flex items-center space-x-1.5">
                <Award className="w-4 h-4" />
                <span>Professional Credentials</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] dark:text-white mt-1">
                Certifications & Courses
              </h2>
            </div>

            <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-700/60 shadow-sm space-y-3.5">
              {portfolioData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                >
                  <div className="flex items-center space-x-3.5">
                    {getIssuerBadge(cert.issuer)}
                    <div>
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-tight">
                        {cert.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {cert.issuer} {cert.year ? `• (${cert.year})` : ''}
                      </div>
                    </div>
                  </div>

                  {cert.badge && (
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-[#1687E8] dark:text-[#38BDF8] border border-blue-200 dark:border-blue-900 shrink-0 ml-2">
                      {cert.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Internships */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-[#1687E8] uppercase tracking-wider flex items-center space-x-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Qualifications</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] dark:text-white mt-1">
                  Education
                </h2>
              </div>

              <div className="space-y-3">
                {portfolioData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`bg-white dark:bg-slate-800/90 rounded-2xl p-5 border shadow-sm transition-all ${
                      edu.isPrimary
                        ? 'border-[#1687E8]/40 dark:border-[#38BDF8]/40 ring-1 ring-[#1687E8]/20'
                        : 'border-slate-200/80 dark:border-slate-700/60'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          {edu.institution}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Board/Type: {edu.boardOrType}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="inline-block text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                          {edu.score}
                        </span >
                        <div className="text-[11px] text-slate-400 mt-1">
                          Grad: {edu.year}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-[#1687E8] uppercase tracking-wider flex items-center space-x-1.5">
                  <Briefcase className="w-4 h-4" />
                  <span>Early Career Training</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142D4E] dark:text-white mt-1">
                  Internships
                </h2>
              </div>

              <div className="space-y-3">
                {portfolioData.internships.map((intern, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex items-start justify-between"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {intern.company}, {intern.location}
                      </h3>
                      <p className="text-xs text-[#1687E8] dark:text-[#38BDF8] font-medium mt-0.5">
                        {intern.role}
                      </p>
                    </div>
                    <span className="text-xs font-mono bg-slate-100 dark:bg-slate-700/60 px-2.5 py-1 rounded text-slate-600 dark:text-slate-300 shrink-0 ml-2">
                      {intern.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

