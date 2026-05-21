/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const menuItems = [
    { label: 'MISSION', id: 'mission' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'SERVICES', id: 'services' },
    { label: 'RESULTS', id: 'results' },
    { label: 'CERTIFIED', id: 'certified' },
    { label: 'OPERATE', id: 'operate' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#cbd5e1] bg-white/80 backdrop-blur-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand Logo & Signal Wave */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-xl shadow-md cursor-pointer hover:rotate-6 transition-transform">
              G
            </div>
            <div>
              <h1 className="font-sans font-extrabold text-xl tracking-tight text-slate-800">
                G M Mostahid
              </h1>
              <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block -mt-1 leading-none uppercase">
                Meta Ads Engineer
              </span>
            </div>
          </div>
          
          <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

          {/* Styled Signal/Frequency Web Waveform */}
          <div className="flex items-center gap-[2px] h-6 px-1 hidden sm:flex">
            {[20, 45, 15, 60, 30, 85, 40, 75, 25, 55, 10, 35, 60, 20, 40].map((height, i) => (
              <span
                key={i}
                className="w-[2px] rounded-full bg-gradient-to-t from-sky-400 via-cyan-500 to-blue-600"
                style={{
                  height: `${height}%`,
                  animation: `pulse 1.5s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.08}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Navigation Menu Links */}
        <nav className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono font-black">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer select-none font-mono font-extrabold text-[11px] tracking-wider border relative ${
                  isActive
                    ? 'bg-gradient-to-r from-slate-900 to-indigo-950 text-cyan-400 border-indigo-950 shadow-md shadow-cyan-400/10 scale-105 active:scale-100 z-10'
                    : 'bg-slate-100 text-slate-800 hover:text-slate-900 hover:bg-slate-200 border-slate-200/80 hover:border-slate-300 scale-100 hover:scale-102 active:scale-98'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-sm shadow-cyan-400/80" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
