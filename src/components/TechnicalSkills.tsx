import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Laptop,
  BarChart2,
  Cloud,
  Code2,
  Terminal,
  Database,
  Network,
} from 'lucide-react';

export const TechnicalSkills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#1687E8]" />;
      case 'BarChart2':
        return <BarChart2 className="w-5 h-5 text-amber-500" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-500" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-500" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-500" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-500" />;
      case 'Network':
        return <Network className="w-5 h-5 text-purple-500" />;
      default:
        return <Code2 className="w-5 h-5 text-[#1687E8]" />;
    }
  };

  return (
    <section id="skills" className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold text-[#1687E8] uppercase tracking-wider">
            Technical Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142D4E] dark:text-white mt-1">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Skill sets documented directly from enterprise implementations and engineering coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioData.skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:border-[#1687E8]/50 dark:hover:border-[#38BDF8]/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/60 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                  {getIcon(category.iconName)}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200"
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

