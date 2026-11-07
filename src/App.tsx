import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { EnterpriseProjects } from './components/EnterpriseProjects';
import { TechnicalSkills } from './components/TechnicalSkills';
import { AcademicProjects } from './components/AcademicProjects';
import { CertificationsAndEducation } from './components/CertificationsAndEducation';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('svd-theme');
    if (saved) return saved === 'dark';
    return false; // Default to clean light enterprise theme as requested in reference UI
  });

  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('svd-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('svd-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 transition-colors">
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenContactModal={() => setContactModalOpen(true)} />
        <About />
        <Experience />
        <EnterpriseProjects />
        <TechnicalSkills />
        <AcademicProjects />
        <CertificationsAndEducation />
        <ContactSection onOpenContactModal={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

export default App;

