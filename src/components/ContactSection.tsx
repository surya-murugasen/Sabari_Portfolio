import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContactModal }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#142D4E] dark:bg-[#0B1528] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1687E8]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#18B6C9]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Heading & Hook */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-cyan-300">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Get in Touch
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
              I'm open to enterprise IT operations, modern workplace engineering, and analytics opportunities. Feel free to reach out.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContactModal}
                className="px-5 py-2.5 rounded-xl bg-[#1687E8] hover:bg-[#1270c2] text-white text-xs font-semibold shadow-md transition-all inline-flex items-center space-x-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Quick Inquiry Form</span>
              </button>
            </div>
          </div>

          {/* Right Column: Direct Contact Channels */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row flex-wrap lg:justify-end gap-3.5 text-xs sm:text-sm">
            {/* Email Pill */}
            <div className="flex items-center justify-between space-x-2 bg-white/10 hover:bg-white/15 px-3.5 py-2.5 rounded-xl transition-all border border-white/10">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center space-x-2 text-slate-200 hover:text-white truncate"
              >
                <Mail className="w-4 h-4 text-[#18B6C9] shrink-0" />
                <span className="truncate">{portfolioData.personal.email}</span>
              </a>
              <button
                onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                aria-label="Copy email address"
                className="text-slate-400 hover:text-white p-1 rounded transition-colors shrink-0 cursor-pointer"
                title="Copy email"
              >
                {copiedText === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Phone Pill */}
            <div className="flex items-center justify-between space-x-2 bg-white/10 hover:bg-white/15 px-3.5 py-2.5 rounded-xl transition-all border border-white/10">
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="flex items-center space-x-2 text-slate-200 hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#18B6C9] shrink-0" />
                <span>{portfolioData.personal.phone}</span>
              </a>
              <button
                onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                aria-label="Copy phone number"
                className="text-slate-400 hover:text-white p-1 rounded transition-colors shrink-0 cursor-pointer"
                title="Copy phone"
              >
                {copiedText === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* LinkedIn Pill */}
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/15 px-3.5 py-2.5 rounded-xl transition-all border border-white/10 text-slate-200 hover:text-white"
            >
              <svg className="w-4 h-4 text-[#18B6C9] shrink-0 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn Connect</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
