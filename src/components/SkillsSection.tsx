/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Layers, 
  ShieldCheck, 
  RefreshCw, 
  Cpu, 
  Database, 
  Check, 
  Layers2, 
  Sparkles, 
  TrendingUp, 
  HelpCircle,
  Target,
  Split,
  LineChart,
  UserPlus,
  Coins,
  Settings
} from 'lucide-react';
import { SkillNode } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab ] = useState<'skills' | 'ecosystem'>('skills');
  const [selectedNode, setSelectedNode] = useState<string>('audience');

  // Hardcoded node angles/details matching the circular skill architecture exactly
  const skillNodes: (SkillNode & { shortLabel: string; platformLogo: string; icon: React.ReactNode })[] = [
    {
      id: 'ads-manager',
      name: 'Meta Ads Manager Suite',
      subtitle: 'Meta Business Suite',
      shortLabel: 'ADS',
      platformLogo: '🔵',
      icon: <Settings className="w-5 h-5 text-white animate-[spin_10s_linear_infinite]" />,
      angle: 0, // right
      color: 'from-blue-600 to-sky-500',
      description: [
        'Strategic placement mapping across Facebook & Instagram feed, Reels, and Meta Audience Network.',
        'Configuring Product Catalogs, Advantage+ Shopping campaigns, dynamic carousels, and instant experiences.',
        'Immediate resolution of restricted accounts, BM setting errors, pixel validation glitches, and commerce catalogs.'
      ]
    },
    {
      id: 'audience',
      name: 'Audience Targeting',
      subtitle: 'Lookalike / Behavioral Focus',
      shortLabel: 'AUD',
      platformLogo: '🎯',
      icon: <Target className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />,
      angle: 60, // bottom-right
      color: 'from-sky-500 to-cyan-400',
      description: [
        'Advanced Lookalike modeling extracted from high-value customer LTV sheets, pixel buyers, and repeat site visits.',
        'Granular Behavioral Interest stacking, demographic filters, and multi-layered exclusions targeting optimal buyers.',
        'Retargeting custom flows mapped using direct video-view duration metrics and mid-funnel checkout drops.'
      ]
    },
    {
      id: 'ab-testing',
      name: 'Multivariate A/B Testing',
      subtitle: 'Data-Backed Stat Decisions',
      shortLabel: 'A/B',
      platformLogo: '⚡',
      icon: <Split className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />,
      angle: 120, // bottom-left
      color: 'from-cyan-400 to-indigo-500',
      description: [
        'Creative multivariate testing protocols isolating video hooks, body copy angles, static imagery, and reels styles.',
        'Rigorous statistical significance thresholds to check confidence before scaling campaign budgets.',
        'Landing page URL destination split checks to identify conversion rate optimizations and drop-off bottlenecks.'
      ]
    },
    {
      id: 'performance',
      name: 'Performance & Analytics',
      subtitle: 'Multi-Touch Attribution',
      shortLabel: 'ANL',
      platformLogo: '📊',
      icon: <LineChart className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />,
      angle: 180, // left
      color: 'from-indigo-500 to-violet-600',
      description: [
        'Detailed diagnosis of CPC inflation, frequency exhaustion, creative fatigue, and overlapping audience groups.',
        'Multi-touch cross-channel attribution modeling aligning Shopify panels, Google Analytics, and Meta Ads Manager UI.',
        'Hour-by-hour budget reallocation to feed winning creative combinations during peak peak-conversion slots.'
      ]
    },
    {
      id: 'lead-generation',
      name: 'High-Volume Lead Generation',
      subtitle: 'Low Cost-Per-Lead Tactics',
      shortLabel: 'LED',
      platformLogo: '👤',
      icon: <UserPlus className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />,
      angle: 240, // top-left
      color: 'from-violet-600 to-fuchsia-500',
      description: [
        'Custom Native Lead Forms optimized with pre-fill parameters and logical verification checkpoints for clean leads.',
        'Real-time CRM webhook pipelines feeding leads directly into Slack, email, or your sales team\'s outbound dialers.',
        'High-converting quiz systems, guide downloads, and consultation funnels that keep Cost-Per-Lead (CPL) minimal.'
      ]
    },
    {
      id: 'budget',
      name: 'Budget & CBO Scaling Strategy',
      subtitle: 'Automated Rule Frameworks',
      shortLabel: 'CBO',
      platformLogo: '💰',
      icon: <Coins className="w-5 h-5 text-white group-hover:scale-110 transition-transform animate-pulse" />,
      angle: 300, // top-right
      color: 'from-fuchsia-500 to-blue-600',
      description: [
        'Strategic Campaign Budget Optimization (CBO) system scale-ups to let algorithms maximize conversions safely.',
        'Isolating fresh ad layouts using Ad Set Budget Allocation (ABO) rule groups for clean sandbox research.',
        'Automated scaling parameters linked to Real-Time ROAS to increase budgets on winners while pruning underperformers.'
      ]
    }
  ];

  const currentSkill = skillNodes.find(n => n.id === selectedNode) || skillNodes[0];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md shadow-slate-100 overflow-hidden flex flex-col h-full">
      {/* Tab Select Header */}
      <div className="flex border-b border-slate-200 bg-slate-50/50">
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex-1 py-4 px-6 text-center font-mono text-xs font-extrabold tracking-widest uppercase transition-all ${
            activeTab === 'skills'
              ? 'bg-white text-cyan-600 border-b-2 border-cyan-500'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          SKILLS & PLAYBOOKS
        </button>
        <button
          onClick={() => setActiveTab('ecosystem')}
          className={`flex-1 py-4 px-6 text-center font-mono text-xs font-extrabold tracking-widest uppercase transition-all ${
            activeTab === 'ecosystem'
              ? 'bg-white text-cyan-600 border-b-2 border-cyan-500'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          CAPI ECOSYSTEM
        </button>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        {activeTab === 'skills' ? (
          <div className="space-y-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-sans font-extrabold text-lg text-slate-800 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                Interactions Center Suite
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Select your focus area by picking on the larger interactive keys or using the list shortcuts below to prevent mistakes.
              </p>
            </div>

            {/* Sticker Badges - facebook, meta, instagram, shopify, pixel, graph */}
            <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-2xl">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 font-extrabold block uppercase mb-2">
                Verified Integrations & Trackers
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {/* Meta Sticker */}
                <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl px-2 py-1.5 shadow-sm hover:scale-105 hover:-rotate-1 transition-all">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center text-white text-[9px] font-black">∞</div>
                  <span className="text-[10px] font-sans font-black text-slate-700">Meta</span>
                </div>
                {/* Facebook Sticker */}
                <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl px-2 py-1.5 shadow-sm hover:scale-105 hover:rotate-2 transition-all">
                  <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white text-[11px] font-black">f</div>
                  <span className="text-[10px] font-sans font-bold text-slate-700">Facebook</span>
                </div>
                {/* Instagram Sticker */}
                <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl px-2 py-1.5 shadow-sm hover:scale-105 hover:-rotate-2 transition-all">
                  <div className="w-5 h-5 rounded bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 flex items-center justify-center text-white text-[9px] font-black">📸</div>
                  <span className="text-[10px] font-sans font-bold text-slate-700">Instagram</span>
                </div>
                {/* Shopify Sticker */}
                <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl px-2 py-1.5 shadow-sm hover:scale-105 hover:rotate-1 transition-all">
                  <div className="w-5 h-5 rounded bg-[#96bf48] flex items-center justify-center text-white text-[10px] font-black">S</div>
                  <span className="text-[10px] font-sans font-bold text-slate-700">Shopify</span>
                </div>
                {/* Pixel Sticker */}
                <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl px-2 py-1.5 shadow-sm hover:scale-105 hover:-rotate-1 transition-all">
                  <div className="w-5 h-5 rounded bg-cyan-500 flex items-center justify-center text-white text-[10px] font-black">▩</div>
                  <span className="text-[10px] font-sans font-bold text-slate-700">Pixel</span>
                </div>
                {/* Graph Sticker */}
                <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl px-2 py-1.5 shadow-sm hover:scale-105 hover:rotate-2 transition-all">
                  <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center text-white text-[9px] font-black">📈</div>
                  <span className="text-[10px] font-sans font-bold text-slate-700">Graph</span>
                </div>
              </div>
            </div>

            {/* Quick List Selector - Solid Palette buttons with present text */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              {skillNodes.map((node, index) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`p-2.5 rounded-xl text-left transition-all duration-300 flex items-center gap-2 cursor-pointer select-none border-0 ${
                      isSelected
                        ? `bg-gradient-to-r ${node.color} text-white shadow-md scale-[1.02] shadow-cyan-500/10`
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:scale-[1.01]'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg font-mono text-[11px] font-black flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {node.platformLogo}
                    </span>
                    <div className="truncate">
                      <span className="text-[10.5px] font-sans font-extrabold block leading-tight truncate">
                        {node.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Circular Orbit Graphic Wrapper with Larger Interactive Nodes */}
            <div className="relative w-full aspect-square max-w-[280px] mx-auto my-1 flex items-center justify-center">
              {/* Outer Circular orbital Ring line */}
              <div className="absolute w-[85%] h-[85%] rounded-full border border-sky-100 border-dashed animate-[spin_50s_linear_infinite]" />

              {/* Central Architecture Core */}
              <div className="relative z-10 w-28 h-28 rounded-full bg-slate-50 border-2 border-cyan-400 shadow-xl shadow-cyan-550/15 flex flex-col items-center justify-center p-2.5 text-center transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-1 rounded-full border border-dashed border-cyan-300/40 animate-[spin_18s_linear_infinite]" />
                {/* Glowing ambient background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-indigo-500/10 rounded-full scale-90 group-hover:scale-100 transition-transform duration-500" />
                
                {/* High-Fidelity Animated Meta Infinity Loop */}
                <svg
                  className="w-8 h-8 text-slate-800 relative z-10 animate-[pulse_2s_ease-in-out_infinite] mb-1"
                  viewBox="0 0 100 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0064e0" />
                      <stop offset="50%" stopColor="#007dfc" />
                      <stop offset="100%" stopColor="#00f3ff" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#00f3ff" floodOpacity="0.45" />
                    </filter>
                  </defs>
                  {/* Glowing thin backup shadow stroke */}
                  <path
                    d="M 33,16 C 25.2,16 19,22.2 19,30 C 19,37.8 25.2,44 33,44 C 38.3,44 42.9,39.9 46.2,34.8 L 51.8,25.2 C 55.1,20.1 59.7,16 65,16 C 72.8,16 79,22.2 79,30 C 79,37.8 72.8,44 65,44 C 59.7,44 55.1,39.9 51.8,34.8 L 46.2,25.2 C 42.9,20.1 38.3,16 33,16 Z"
                    stroke="url(#metaGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40 animate-[pulse_1.5s_ease-in-out_infinite]"
                  />
                  {/* Crisp premium gradient foreground paths */}
                  <path
                    d="M 33,16 C 25.2,16 19,22.2 19,30 C 19,37.8 25.2,44 33,44 C 38.3,44 42.9,39.9 46.2,34.8 L 51.8,25.2 C 55.1,20.1 59.7,16 65,16 C 72.8,16 79,22.2 79,30 C 79,37.8 72.8,44 65,44 C 59.7,44 55.1,39.9 51.8,34.8 L 46.2,25.2 C 42.9,20.1 38.3,16 33,16 Z"
                    stroke="url(#metaGrad)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Meta core identity labels inside central node */}
                <span className="text-[10px] font-sans font-black tracking-wider text-[#0064e0] relative z-10 block uppercase">
                  META ADS
                </span>
                <span className="text-[8px] font-mono tracking-widest text-slate-500 font-extrabold relative z-10 block uppercase leading-none">
                  OPTIMIZER
                </span>
              </div>

              {/* Mini Skill Nodes positioned orbitally - Only appropriate logo graphic */}
              {skillNodes.map((node, index) => {
                const rad = (node.angle * Math.PI) / 180;
                // Position offset relative to center core (using raw percentage positioning)
                // Offset percentage from center (50%) with orbit radius of 39%
                const rightPct = 50 + 39 * Math.cos(rad);
                const bottomPct = 50 + 39 * Math.sin(rad);
                
                const isSelected = selectedNode === node.id;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className="absolute z-20 group -translate-x-1/2 -translate-y-1/2 focus:outline-none cursor-pointer select-none"
                    style={{
                      left: `${rightPct}%`,
                      top: `${bottomPct}%`,
                    }}
                  >
                    {/* Pulsing ring backdrop only when selected */}
                    {isSelected && (
                      <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping opacity-75" style={{ animationDuration: '2s' }} />
                    )}

                    {/* Highly tactile circular icon container with hover animations */}
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${node.color} flex items-center justify-center text-white shadow-xl transition-all duration-300 ${
                      isSelected 
                        ? 'shrink-0 ring-4 ring-cyan-300 ring-offset-1 ring-opacity-80 scale-120 shadow-cyan-300/35 rotate-3' 
                        : 'hover:scale-115 hover:rotate-6 active:scale-95'
                    }`}>
                      {node.icon}
                    </div>

                    {/* Tiny visual badge floating on top right of the orbit circle */}
                    <span className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[9px] font-mono font-black flex items-center justify-center shadow-md border ${
                      isSelected ? 'bg-cyan-500 text-white border-white animate-bounce' : 'bg-white text-slate-700 border-slate-200'
                    }`} style={{ animationDuration: '2.5s' }}>
                      {node.platformLogo}
                    </span>

                    {/* Tooltip Hover Label */}
                    <span className="absolute left-1/2 -translate-x-1/2 bg-slate-900 text-white font-mono text-[9px] font-bold py-1 px-2.5 rounded-lg border border-slate-750 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-30 pointer-events-none mt-2 shadow-lg">
                      {node.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Details Box - Text is made MUCH larger, readable font, bold and key bullet parameters */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-inner">
              <span className="text-[9.5px] font-mono tracking-widest uppercase font-extrabold text-cyan-600 block mb-1">
                TACTICAL PLAYBOOK FOR FOCUS AREA #{skillNodes.findIndex(n => n.id === currentSkill.id) + 1}
              </span>
              <h4 className="font-sans font-black text-base text-slate-800 tracking-tight flex items-center gap-2">
                <span>{currentSkill.platformLogo}</span>
                <span>{currentSkill.name}</span>
                <span className="text-slate-500 font-bold text-xs font-mono ml-auto">({currentSkill.subtitle})</span>
              </h4>
              
              <ul className="mt-4 space-y-3">
                {currentSkill.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    {/* Enlarged playbooks words for maximum clarity */}
                    <span className="text-[12.5px] font-sans text-slate-700 font-semibold leading-relaxed">
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ) : (
          /* Ecosystem Sync Architecture view */
          <div className="space-y-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-sans font-extrabold text-lg text-slate-800 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block animate-pulse" />
                Server-Side Cookie & Conversions (CAPI) Sync
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Bypassing iOS14+ tracking limits using dual-signal cloud servers.
              </p>
            </div>

            {/* Simulated Live Diagram Block Flow */}
            <div className="space-y-4 p-4 bg-slate-900 text-slate-100 rounded-2xl border border-slate-850 font-mono text-[11px] shadow-inner">
              <div className="flex justify-between items-center bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-cyan-400 font-bold flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" /> Web Pixel Event
                </span>
                <span className="text-emerald-400 font-bold">100% fired</span>
              </div>

              {/* Split Pipeline Arrows */}
              <div className="flex justify-around items-center px-6 text-slate-500 my-1 text-center scale-x-125">
                <span>↙</span>
                <span className="animate-bounce text-cyan-400">⚡</span>
                <span>↘</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-center space-y-1">
                  <span className="text-sky-300 block font-bold">A. Server Pipeline</span>
                  <div className="text-[9px] text-slate-400">
                    GTM Cloud Container <br />
                    Secure REST hash <br />
                    No Adblock hurdles
                  </div>
                  <span className="text-[9px] inline-block px-1.5 py-0.5 bg-sky-950 text-sky-400 rounded border border-sky-900 mt-1">
                    CAPI API Send
                  </span>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-center space-y-1">
                  <span className="text-pink-300 block font-bold">B. Browser Pipeline</span>
                  <div className="text-[9px] text-slate-400">
                    Local Device JS <br />
                    Cookie Drops (fbp/fbc) <br />
                    Adblock block risk
                  </div>
                  <span className="text-[9px] inline-block px-1.5 py-0.5 bg-pink-950 text-pink-400 rounded border border-pink-900 mt-1">
                    Local JS Pixel
                  </span>
                </div>
              </div>

              <div className="flex justify-center items-center py-1 text-slate-500">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
              </div>

              <div className="bg-sky-950 p-2.5 rounded-xl border border-sky-900 flex justify-between items-center">
                <div>
                  <span className="text-cyan-300 font-bold block">Aggregated Deduplication</span>
                  <span className="text-[9px] text-slate-300">Using EventID + Phone + Email Hashing</span>
                </div>
                <div className="text-right">
                  <span className="text-emerald-400 font-bold block">9.4 / 10 score</span>
                  <span className="text-[8px] text-slate-400">High Meta Rank</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
              <h4 className="font-sans font-bold text-xs text-indigo-900 uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                Why this architecture is compulsory
              </h4>
              <p className="text-indigo-850 text-xs leading-relaxed mt-1.5">
                Browser-only pixels miss roughly 25-40% of real purchase conversions due to Safari updates, iOS lockdown settings, and standard desktop browser blockades. Adding a cloud synchronizer logs every single dollar spent to train your ads algorithm accurately.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
