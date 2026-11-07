import React, { useState } from 'react';
import { X, Send, Check, Mail, Phone, Copy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      subject || `Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Standard RFC mailto navigation
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleCopyFormMessage = () => {
    const formatted = `To: ${portfolioData.personal.email}\nSubject: ${subject || `Inquiry from ${name}`}\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedField('form_message');
    setTimeout(() => setCopiedField(null), 2500);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close contact dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold text-[#1687E8] uppercase tracking-wider">
            Direct Communication
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Get in Touch
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Send an inquiry or connect directly regarding enterprise IT opportunities.
          </p>
        </div>

        {/* Quick Contact Info Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
          <div
            onClick={() => copyToClipboard(portfolioData.personal.email, 'email')}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs cursor-pointer hover:border-[#1687E8] transition-colors"
            title="Click to copy email"
          >
            <div className="flex items-center space-x-2 truncate">
              <Mail className="w-4 h-4 text-[#1687E8] shrink-0" />
              <span className="truncate text-slate-700 dark:text-slate-300">
                {portfolioData.personal.email}
              </span>
            </div>
            {copiedField === 'email' ? (
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 ml-1" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
            )}
          </div>

          <div
            onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone')}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs cursor-pointer hover:border-[#1687E8] transition-colors"
            title="Click to copy phone"
          >
            <div className="flex items-center space-x-2 truncate">
              <Phone className="w-4 h-4 text-[#1687E8] shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">
                {portfolioData.personal.phone}
              </span>
            </div>
            {copiedField === 'phone' ? (
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 ml-1" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
            )}
          </div>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
            <Check className="w-8 h-8 text-emerald-500 mx-auto" />
            <h4 className="font-bold text-emerald-800 dark:text-emerald-300">Message Ready!</h4>
            <p className="text-xs text-emerald-700 dark:text-emerald-400">
              Opening your default email application to deliver your message.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Hiring Manager"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1687E8]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1687E8]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Discussion: Enterprise IT / Power BI Opportunity"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1687E8]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Message
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your note here..."
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1687E8] resize-none"
              />
            </div>

            <div className="space-y-2 pt-1">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1687E8] hover:bg-[#1270c2] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send via Default Email App</span>
              </button>

              <button
                type="button"
                onClick={handleCopyFormMessage}
                className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 font-semibold text-xs border border-slate-200/80 dark:border-slate-700 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                {copiedField === 'form_message' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Formatted Message Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Formatted Message for Webmail (Gmail)</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-relaxed">
              * Launches your desktop/mobile email client, or copy to send manually via webmail. No third-party tracking or intermediate server storage.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

