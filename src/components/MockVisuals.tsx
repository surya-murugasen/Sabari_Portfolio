import React from 'react';

// Professional Power BI Dashboard Mockup preview card
export const PowerBIDashboardPreview: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[170px] bg-slate-900 rounded-xl overflow-hidden p-3 border border-slate-700/60 shadow-inner flex flex-col justify-between relative group">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span className="text-[11px] font-semibold text-slate-200 tracking-wide">
            Enterprise IT Patching Observability
          </span>
        </div>
        <span className="text-[9px] bg-slate-800 text-cyan-300 border border-slate-700 px-2 py-0.5 rounded font-mono">
          Illustrative Mockup
        </span>
      </div>

      {/* Mini Metric Counters */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        <div className="bg-slate-800/80 rounded p-1.5 border border-slate-700/40">
          <div className="text-[9px] text-slate-400">Patch Compliance</div>
          <div className="text-xs font-bold text-emerald-400">98.4%</div>
        </div>
        <div className="bg-slate-800/80 rounded p-1.5 border border-slate-700/40">
          <div className="text-[9px] text-slate-400">Server Health</div>
          <div className="text-xs font-bold text-cyan-400">Optimal</div>
        </div>
        <div className="bg-slate-800/80 rounded p-1.5 border border-slate-700/40">
          <div className="text-[9px] text-slate-400">Active Endpoints</div>
          <div className="text-xs font-bold text-sky-400">Monitored</div>
        </div>
      </div>

      {/* Visual Chart Mockup */}
      <div className="flex items-end space-x-1.5 h-14 bg-slate-950/60 rounded p-2 border border-slate-800/60">
        <div className="w-1/6 bg-cyan-500/60 rounded-t h-[45%]" />
        <div className="w-1/6 bg-sky-500/70 rounded-t h-[65%]" />
        <div className="w-1/6 bg-blue-600/70 rounded-t h-[80%]" />
        <div className="w-1/6 bg-cyan-400/80 rounded-t h-[55%]" />
        <div className="w-1/6 bg-emerald-500/80 rounded-t h-[95%]" />
        <div className="w-1/6 bg-indigo-500/80 rounded-t h-[75%]" />
      </div>

      {/* Footer tags */}
      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
        <span className="italic">Concept Representation • Power BI & SQL</span>
        <span className="text-cyan-400 font-mono text-[9px]">Illustrative Demo</span>
      </div>
    </div>
  );
};

// Windows 11 Migration Mockup preview card
export const Windows11MigrationPreview: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[170px] bg-gradient-to-br from-blue-900 via-sky-900 to-slate-900 rounded-xl overflow-hidden p-3 border border-sky-600/40 shadow-inner flex flex-col justify-between text-white relative">
      {/* Background glow and modern grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(24,182,201,0.2),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between z-10 border-b border-white/10 pb-2">
        <div className="flex items-center space-x-2">
          {/* Windows Logo Icon */}
          <svg className="w-5 h-5 text-sky-400 fill-current" viewBox="0 0 88 88">
            <path d="M0 12.402l35.689-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.005 45.719zm4.326-39.027L87.914 0v41.527l-47.918.378zm47.918 43.479L40.024 88l-.023-34.195 47.913-.288z" />
          </svg>
          <span className="text-xs font-bold tracking-wide">Windows 11 Migration</span>
        </div>
        <span className="text-[9px] bg-white/20 text-white px-2 py-0.5 rounded font-mono">
          Illustrative Workflow
        </span>
      </div>

      {/* Migration Transition Visual */}
      <div className="my-2 z-10 bg-black/30 rounded-lg p-2.5 backdrop-blur-sm border border-white/10">
        <div className="flex items-center justify-between text-xs font-semibold mb-1">
          <span className="text-slate-300">Windows 10</span>
          <span className="text-cyan-300 font-mono text-[10px]">➜ Automated Transition ➜</span>
          <span className="text-sky-300 font-bold">Windows 11</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-sky-400 to-cyan-400 h-full rounded-full w-full" />
        </div>
      </div>

      {/* Endpoint tags */}
      <div className="grid grid-cols-3 gap-1 z-10 text-[9px] text-center font-mono">
        <div className="bg-white/10 py-1 rounded">Intune Admin</div>
        <div className="bg-white/10 py-1 rounded">Active Directory</div>
        <div className="bg-white/10 py-1 rounded">PowerShell Auto</div>
      </div>
    </div>
  );
};

// 3D Isometric IT Setup Vector for About section
export const AboutIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[320px] mx-auto aspect-square flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1687E8]/20 to-[#18B6C9]/20 rounded-full blur-2xl -z-10" />

      {/* Clean SVG Vector Graphic representing IT Operations, Cloud and Analytics */}
      <svg
        viewBox="0 0 300 260"
        className="w-full h-full drop-shadow-xl select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Platform / Grid */}
        <ellipse cx="150" cy="200" rx="120" ry="40" fill="#E2E8F0" className="dark:fill-slate-800" />
        <ellipse cx="150" cy="195" rx="110" ry="35" fill="#F1F5F9" className="dark:fill-slate-700/50" />

        {/* Server Stack (Right) */}
        <g transform="translate(180, 100)">
          {/* Server Unit 3 */}
          <rect x="0" y="55" width="65" height="24" rx="4" fill="#142D4E" />
          <circle cx="10" cy="67" r="2.5" fill="#10B981" />
          <circle cx="20" cy="67" r="2.5" fill="#1687E8" />
          <line x1="30" y1="67" x2="55" y2="67" stroke="#334155" strokeWidth="2" strokeLinecap="round" />

          {/* Server Unit 2 */}
          <rect x="0" y="27" width="65" height="24" rx="4" fill="#1E293B" />
          <circle cx="10" cy="39" r="2.5" fill="#10B981" />
          <circle cx="20" cy="39" r="2.5" fill="#18B6C9" />
          <line x1="30" y1="39" x2="55" y2="39" stroke="#334155" strokeWidth="2" strokeLinecap="round" />

          {/* Server Unit 1 */}
          <rect x="0" y="0" width="65" height="24" rx="4" fill="#0F172A" />
          <circle cx="10" cy="12" r="2.5" fill="#10B981" />
          <circle cx="20" cy="12" r="2.5" fill="#F59E0B" />
          <line x1="30" y1="12" x2="55" y2="12" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Laptop with Analytics Screen (Center-Left) */}
        <g transform="translate(60, 80)">
          {/* Screen Body */}
          <rect x="0" y="0" width="110" height="75" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
          {/* Screen Display */}
          <rect x="5" y="5" width="100" height="65" rx="3" fill="#090D16" />
          {/* Mini Bar Chart inside laptop */}
          <rect x="15" y="45" width="8" height="20" rx="1" fill="#18B6C9" />
          <rect x="27" y="32" width="8" height="33" rx="1" fill="#1687E8" />
          <rect x="39" y="22" width="8" height="43" rx="1" fill="#38BDF8" />
          <rect x="51" y="38" width="8" height="27" rx="1" fill="#0284C7" />
          <rect x="63" y="15" width="8" height="50" rx="1" fill="#10B981" />
          {/* Line Chart / Pulse */}
          <path d="M 15 25 Q 35 15, 55 28 T 95 18" stroke="#F59E0B" strokeWidth="2" fill="none" />
          {/* Screen Base / Keyboard */}
          <path d="M -15 76 L 125 76 L 115 88 L -5 88 Z" fill="#334155" />
          <rect x="40" y="80" width="30" height="4" rx="1" fill="#64748B" />
        </g>

        {/* Cloud Icon floating top */}
        <g transform="translate(195, 35)">
          <path
            d="M 10 30 C 5 30 0 25 0 20 C 0 14 5 10 10 10 C 13 4 21 0 28 0 C 36 0 43 5 46 12 C 49 11 53 12 55 15 C 58 19 57 25 53 28 C 50 30 46 30 45 30 Z"
            fill="#1687E8"
            opacity="0.9"
          />
          <path
            d="M 20 18 L 28 10 L 36 18 M 28 11 L 28 24"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Subtle Gear/Automation Icon */}
        <g transform="translate(45, 45)">
          <circle cx="16" cy="16" r="14" fill="#18B6C9" opacity="0.15" />
          <circle cx="16" cy="16" r="8" stroke="#18B6C9" strokeWidth="2.5" strokeDasharray="3 3" />
          <circle cx="16" cy="16" r="3" fill="#18B6C9" />
        </g>
      </svg>
    </div>
  );
};

// Professional Avatar Frame with modern styling
export const HeroAvatar: React.FC = () => {
  return (
    <div className="relative w-full max-w-[340px] lg:max-w-[380px] aspect-[4/5] mx-auto flex items-end justify-center">
      {/* Background Rounded Arch */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1687E8] via-[#142D4E] to-[#1687E8]/30 rounded-t-[140px] rounded-b-3xl -z-10 shadow-2xl overflow-hidden">
        {/* Geometric light accents */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-400/20 rounded-full blur-2xl" />
        <div className="absolute bottom-4 left-4 w-36 h-36 bg-blue-500/20 rounded-full blur-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      </div>

      {/* Professional Representation Vector */}
      <div className="w-full h-full flex flex-col items-center justify-end z-10 pb-2 px-4">
        <svg
          viewBox="0 0 280 340"
          className="w-full h-full drop-shadow-2xl select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Modern Professional Silhouette with sharp business attire */}
          {/* Head & Hair */}
          <path
            d="M 100 110 C 95 65 185 65 180 110 C 180 135 170 155 140 155 C 110 155 100 135 100 110 Z"
            fill="#E2E8F0"
          />
          {/* Styled Hair */}
          <path
            d="M 94 95 C 92 60 120 40 140 40 C 165 40 190 55 186 95 C 175 75 160 70 140 70 C 120 70 105 75 94 95 Z"
            fill="#1E293B"
          />
          {/* Ears */}
          <circle cx="98" cy="112" r="7" fill="#CBD5E1" />
          <circle cx="182" cy="112" r="7" fill="#CBD5E1" />
          {/* Neck */}
          <path d="M 125 150 L 125 180 L 155 180 L 155 150 Z" fill="#CBD5E1" />

          {/* White Business Shirt Collar */}
          <path d="M 115 175 L 140 205 L 128 220 L 110 185 Z" fill="#FFFFFF" />
          <path d="M 165 175 L 140 205 L 152 220 L 170 185 Z" fill="#F8FAFC" />
          {/* Modern Slim Navy Tie */}
          <path d="M 136 200 L 144 200 L 146 260 L 140 270 L 134 260 Z" fill="#0EA5E9" />

          {/* Navy Suit Jacket */}
          <path
            d="M 60 340 L 80 205 C 85 185 110 180 125 180 L 138 230 L 142 230 L 155 180 C 170 180 195 185 200 205 L 220 340 Z"
            fill="#0F172A"
          />
          {/* Suit Lapels */}
          <path d="M 85 200 L 120 250 L 112 340 L 60 340 Z" fill="#1E293B" />
          <path d="M 195 200 L 160 250 L 168 340 L 220 340 Z" fill="#142D4E" />

          {/* Cognizant / IT Specialist Badge on suit lapel */}
          <circle cx="95" cy="240" r="5" fill="#18B6C9" />
        </svg>

        {/* Cognizant Company Affiliation Badge */}
        <div className="absolute -bottom-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-full px-4 py-1.5 shadow-lg flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#1687E8]" />
          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            Cognizant Technology Solutions
          </span>
        </div>
      </div>
    </div>
  );
};

