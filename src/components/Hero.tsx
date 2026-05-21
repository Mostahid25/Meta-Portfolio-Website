/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Target, Filter, TrendingUp } from 'lucide-react';

interface HeroProps {
  onStartCampaignClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartCampaignClick }) => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const keyPillars = [
    {
      id: 1,
      icon: <Target className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
      title: "Audience Structuring",
      value: "Precision Targets",
      desc: "Architecting lookalike modeling, customized LTV cohorts, and granular behaviors to guarantee zero wasted ad spend."
    },
    {
      id: 2,
      icon: <Filter className="w-8 h-8 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />,
      title: "Funnel Engineering",
      value: "Frictionless Paths",
      desc: "Optimizing landing pages, lead capture mechanisms, and checkouts to squeeze maximal conversions from click-to-pay."
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />,
      title: "Attribution & Scaling",
      value: "Aggressive Growth",
      desc: "Custom Conversion APIs, offline tracking, and dynamic budget distribution strategies to safely scale profitable campaigns."
    }
  ];

  return (
    <section id="mission" className="relative w-full py-16 px-4 bg-gradient-to-b from-sky-50 via-slate-50 to-white overflow-hidden">
      {/* Custom Styles for Staggered Floats of the 3 Key Pillars */}
      <style>{`
        @keyframes floatPillar {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .animate-float-pillar-0 {
          animation: floatPillar 5s ease-in-out infinite;
        }
        .animate-float-pillar-1 {
          animation: floatPillar 5s ease-in-out infinite 1.2s;
        }
        .animate-float-pillar-2 {
          animation: floatPillar 5s ease-in-out infinite 2.4s;
        }
      `}</style>

      {/* Absolute faint decorative grid lines/orbits */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-sky-300 animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-sky-200 border-dashed animate-[spin_90s_linear_infinite]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Intro Body Card (glowing light blue border) */}
        <div className="p-8 md:p-12 rounded-3xl bg-white/70 backdrop-blur-md border border-cyan-100/80 shadow-xl shadow-cyan-500/5">
          <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 font-mono text-[11px] font-extrabold rounded-full tracking-widest uppercase mb-6 animate-pulse">
            ★ Core MISSION STATEMENT
          </div>

          <h2 className="font-sans font-medium text-2xl md:text-3.5xl tracking-tight text-slate-800 leading-relaxed mb-8 max-w-3xl mx-auto">
            I'm <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">G M Mostahid</span>, a results-driven <span className="underline decoration-cyan-400 decoration-wavy decoration-2 underline-offset-4">Meta Ads Specialist</span> from Bangladesh.
            <span className="block mt-4 text-slate-600 font-normal text-xl md:text-2xl">
              I decode audience behavior, engineer high-converting funnels, and optimize every campaign with data-driven precision.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onStartCampaignClick}
              className="group relative px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-sans font-extrabold text-base rounded-2xl tracking-wider shadow-lg shadow-cyan-400/20 active:translate-y-0.5 hover:-translate-y-0.5 transition-all text-center uppercase cursor-pointer"
            >
              Start A Campaign
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full animate-ping" />
            </button>
          </div>

          {/* Three Interactive Icons Grid underneath the CTA */}
          <div className="mt-12 pt-10 border-t border-slate-100">
            <p className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-6">
              Hover to decode tactical optimization pillars
            </p>
            
            <div className="flex justify-center items-center gap-8 md:gap-16">
              {keyPillars.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  onMouseEnter={() => setHoveredIcon(idx)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className={`group relative flex flex-col items-center cursor-help animate-float-pillar-${idx}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Soft interactive pulsing ripple */}
                    <span className="absolute inset-0 rounded-full bg-cyan-100/60 animate-ping opacity-65 scale-110 group-hover:scale-125 transition-all duration-300" style={{ animationDuration: '3s' }} />
                    
                    <div className="w-16 h-16 relative z-10 rounded-full border-2 border-dashed border-sky-300 group-hover:border-solid group-hover:border-cyan-500 group-hover:bg-cyan-50 group-hover:scale-110 group-hover:rotate-3 flex items-center justify-center bg-white shadow-lg shadow-sky-100/50 transition-all duration-300">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {pillar.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle pulsing anchor dot under icon */}
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 group-hover:bg-cyan-500 transition-all duration-300 animate-pulse" />
                  
                  <span className="mt-1 text-[11px] font-mono text-slate-500 font-semibold group-hover:text-slate-800 transition-colors duration-200">
                    {pillar.value}
                  </span>

                  {/* High Quality Rich Dropdown Tooltip on hover */}
                  <div
                    className={`absolute bottom-20 left-1/2 -translate-x-1/2 w-64 p-4 rounded-xl bg-slate-900 text-white text-xs border border-slate-800 shadow-2xl transition-all duration-300 pointer-events-none z-30 ${
                      hoveredIcon === idx
                        ? 'opacity-100 scale-100 translate-y-0 visible'
                        : 'opacity-0 scale-95 translate-y-2 invisible'
                    }`}
                  >
                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-slate-900 border-r border-b border-slate-800" />
                    <h4 className="font-mono font-bold text-cyan-400 uppercase mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                      {pillar.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed font-sans font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
