/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ResultsSection } from './components/ResultsSection';
import { CertifiedSection } from './components/CertifiedSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('mission');
  const [selectedServiceInquiry, setSelectedServiceInquiry] = useState<string>("");

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Compensate for sticky navbar height (approx 80px)
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleInquireService = (serviceName: string) => {
    setSelectedServiceInquiry(serviceName);
    // Smooth scroll to formulation footer
    handleNavigate('operate');
  };

  // Scroll spy to update active link in navbar dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mission', 'skills', 'services', 'results', 'certified', 'operate'];
      const scrollPosition = window.scrollY + 120; // safe midpoint limit

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans transition-colors duration-300 antialiased selection:bg-cyan-100 selection:text-cyan-950">
      
      {/* Top sticky bracketed navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Single-View Segment */}
      <main className="flex-1 w-full pb-1">
        
        {/* Unit 1: Hero Pitch */}
        <Hero onStartCampaignClick={() => handleNavigate('operate')} />

        {/* Unit 2: Core Skills & Ecosystem Command Suite (Full-Width Stacked Sections) */}
        <div id="skills" className="scroll-mt-24 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SkillsSection />
          </div>
        </div>

        <div id="services" className="scroll-mt-24 py-8 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesSection onInquireService={handleInquireService} />
          </div>
        </div>

        {/* Unit 3: Historical Deployments & Cert Accreditations (Full-Width Stacked Sections) */}
        <div id="results" className="scroll-mt-24 py-8 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ResultsSection />
          </div>
        </div>

        <div id="certified" className="scroll-mt-24 py-8 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CertifiedSection />
          </div>
        </div>

      </main>

      {/* Unit 4: Call to Action Contact Footer & Lead Synthesizer Form */}
      <FooterSection initialServiceSelection={selectedServiceInquiry} />

    </div>
  );
}
