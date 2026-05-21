/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Filter, ChevronDown, RefreshCw, BarChart2, Calculator, Info, InfoIcon } from 'lucide-react';
import { CampaignData } from '../types';

export const ResultsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'results' | 'matrix'>('results');
  const [filterIndustry, setFilterIndustry] = useState<string>('All');
  
  // Funnel predictor local state
  const [budget, setBudget] = useState<number>(3000);
  const [cpc, setCpc] = useState<number>(0.85);
  const [conversionRate, setConversionRate] = useState<number>(2.2); // in %
  const [aov, setAov] = useState<number>(75); // Average Order Value in $

  const campaigns: CampaignData[] = [
    {
      id: "comp-1",
      category: "E-Commerce",
      title: "Direct-to-Consumer Retail",
      simulatedValue: "ROAS",
      value: "3.5x",
      ctr: "4.2%",
      avgRos: "3.5x",
      stsRate: "67%",
      stsRateLabel: "Cohort Retention",
      missionLog: "Not just ads. Data-backed audience selecting, funnel engineering, and catalog setup resulted in immediate scaling.",
      funnel: { top: 90, middle: 45, bottom: 25 }
    },
    {
      id: "comp-2",
      category: "Lead Gen",
      title: "B2B SaaS Strategy",
      simulatedValue: "RDAS",
      value: "3.2x",
      ctr: "3.2%",
      avgRos: "3.5x",
      stsRate: "72%",
      stsRateLabel: "Lead Quality",
      missionLog: "Constructed high-intent native lead campaigns paired with instant WhatsApp sequences. Lead cost reduced by 34%.",
      funnel: { top: 85, middle: 35, bottom: 12 }
    },
    {
      id: "comp-3",
      category: "Brand Awareness",
      title: "Omnichannel Launch",
      simulatedValue: "ROAS",
      value: "4.2x",
      ctr: "4.2%",
      avgRos: "3.8x",
      stsRate: "88%",
      stsRateLabel: "Brand Lift",
      missionLog: "Engaged warm lookalive exclusions with story-first creative. Reached 1.2M targeted impressions at very low CPM.",
      funnel: { top: 95, middle: 60, bottom: 40 }
    }
  ];

  const filteredCampaigns = filterIndustry === 'All' 
    ? campaigns 
    : campaigns.filter(c => c.category === filterIndustry);

  // ROI calculations
  const clicks = Math.round(budget / cpc);
  const transactions = Math.round(clicks * (conversionRate / 100));
  const revenue = transactions * aov;
  const roas = budget > 0 ? (revenue / budget).toFixed(2) : '0.00';
  const cpa = transactions > 0 ? (budget / transactions).toFixed(2) : '0.00';
  const returnPercentage = budget > 0 ? Math.round(((revenue - budget) / budget) * 100) : 0;

  return (
    <div id="results" className="bg-white rounded-3xl border border-slate-200/80 shadow-md shadow-slate-100 overflow-hidden flex flex-col h-full">
      {/* Tab Switch Headers */}
      <div className="flex border-b border-slate-200 bg-slate-50/50">
        <button
          onClick={() => setActiveTab('results')}
          className={`flex-1 py-4 px-6 text-center font-mono text-xs font-extrabold tracking-widest uppercase transition-all ${
            activeTab === 'results'
              ? 'bg-white text-cyan-600 border-b-2 border-cyan-500'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          RESULTS
        </button>
        <button
          onClick={() => setActiveTab('matrix')}
          className={`flex-1 py-4 px-6 text-center font-mono text-xs font-extrabold tracking-widest uppercase transition-all ${
            activeTab === 'matrix'
              ? 'bg-white text-cyan-600 border-b-2 border-cyan-500'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          Campaign Matrix
        </button>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        {activeTab === 'results' ? (
          <div className="space-y-6 flex-1 flex flex-col justify-between">
            {/* Title Bar with Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-sans font-extrabold text-lg text-slate-800 tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                  CAMPAIGN DEPLOYMENTS
                </h3>
                <p className="text-slate-500 text-xs mt-1">Real historical simulations.</p>
              </div>

              {/* Filtering Controls */}
              <div className="flex items-center gap-2 self-stretch sm:self-auto">
                <span className="text-slate-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> Filter by:
                </span>
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-xs font-sans font-bold text-slate-700 px-3 py-1.5 rounded-xl focus:border-cyan-400 focus:outline-none"
                >
                  <option value="All">All Categories</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Lead Gen">Lead Gen</option>
                  <option value="Brand Awareness">Brand Awareness</option>
                </select>
              </div>
            </div>

            {/* Campaign Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredCampaigns.map((camp) => (
                <div
                  key={camp.id}
                  className="group rounded-2xl border border-slate-200 bg-slate-50/20 hover:bg-slate-50 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
                >
                  <div>
                    {/* Header Label */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-mono tracking-wider font-extrabold text-cyan-600 uppercase bg-cyan-100/50 px-2.5 py-0.5 rounded-full">
                        {camp.category}
                      </span>
                      <span className="text-[9px] font-mono text-slate-450 font-bold">
                        ACTIVE
                      </span>
                    </div>

                    <h4 className="font-sans font-extrabold text-sm text-slate-800 tracking-tight mb-4">
                      {camp.title}
                    </h4>

                    {/* Styled Interactive Funnel Illustration */}
                    <div className="relative h-28 w-full flex flex-col justify-center items-center gap-1.5 mb-5">
                      {/* Top funnel block */}
                      <div
                        className="h-6 rounded bg-gradient-to-r from-blue-500 to-sky-400 opacity-90 text-[10px] text-white font-mono font-bold flex items-center justify-center transition-all duration-500 shadow-md px-2.5 whitespace-nowrap"
                        style={{ width: `${Math.max(38, camp.funnel.top)}%`, minWidth: '115px' }}
                      >
                        TOFU (Imp: {camp.funnel.top}k)
                      </div>
                      {/* Middle funnel block */}
                      <div
                        className="h-6 rounded bg-gradient-to-r from-sky-400 to-cyan-400 opacity-95 text-[10px] text-slate-800 font-mono font-bold flex items-center justify-center transition-all duration-500 shadow-md px-2.5 whitespace-nowrap"
                        style={{ width: `${Math.max(38, camp.funnel.middle)}%`, minWidth: '115px' }}
                      >
                        MOFU (Click: {camp.funnel.middle}k)
                      </div>
                      {/* Bottom funnel block */}
                      <div
                        className="h-6 rounded bg-gradient-to-r from-cyan-400 to-indigo-500 text-[10px] text-white font-mono font-bold flex items-center justify-center transition-all duration-500 shadow-md animate-pulse px-2.5 whitespace-nowrap"
                        style={{ width: `${Math.max(38, camp.funnel.bottom)}%`, minWidth: '115px' }}
                      >
                        BOFU (Conv: {camp.funnel.bottom}k)
                      </div>
                    </div>

                    {/* Structured Key KPIs Matrix */}
                    <div className="grid grid-cols-3 gap-2 bg-white border border-slate-100 p-3 rounded-xl shadow-inner text-center mb-5">
                      <div>
                        <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase block leading-none mb-1">
                          ROAS MATCH
                        </span>
                        <span className="text-xs font-mono font-extrabold text-blue-600 leading-none">
                          {camp.value}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase block leading-none mb-1">
                          CTR LEVEL
                        </span>
                        <span className="text-xs font-mono font-extrabold text-slate-800 leading-none">
                          {camp.ctr}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase block leading-none mb-1">
                          AVG ROS
                        </span>
                        <span className="text-xs font-mono font-extrabold text-slate-800 leading-none">
                          {camp.avgRos}
                        </span>
                      </div>
                    </div>

                    {/* Cohort Rate list */}
                    <div className="flex gap-4 mb-4 border-b border-dashed border-slate-200 pb-4 text-[11px] text-slate-500">
                      <div>
                        <span className="font-bold text-slate-700 block">{camp.stsRate}</span>
                        <span className="text-[9px] font-mono">Conversion</span>
                      </div>
                      <div className="w-px h-6 bg-slate-200" />
                      <div>
                        <span className="font-bold text-slate-700 block">{camp.stsRate}</span>
                        <span className="text-[9px] font-mono">{camp.stsRateLabel}</span>
                      </div>
                      <div className="w-px h-6 bg-slate-200" />
                      <div>
                        <span className="font-bold text-slate-700 block">CTR</span>
                        <span className="text-[9px] font-mono">Precision</span>
                      </div>
                    </div>
                  </div>

                  {/* Mission Log Card */}
                  <div className="bg-white rounded-xl p-3 border border-slate-100">
                    <span className="text-[9px] font-mono font-extrabold text-slate-400 uppercase tracking-widest block mb-1">
                      Mission Log
                    </span>
                    <p className="text-[10.5px] text-slate-500 leading-relaxed font-sans italic">
                      "{camp.missionLog}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Display Notice Banner at bottom */}
            <div className="py-2.5 px-4 bg-sky-50 border border-sky-100 rounded-2xl text-center">
              <span className="text-[9px] font-mono tracking-widest font-extrabold text-cyan-700 block uppercase animate-pulse">
                ❖ ALL DATA SIMULATED FOR PORTFOLIO DISPLAY ❖
              </span>
            </div>
          </div>
        ) : (
          /* Matrix - Dynamic Funnel ROI Slider Simulator */
          <div className="space-y-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-sans font-extrabold text-lg text-slate-800 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block animate-pulse" />
                Meta Ads ROI Predictor Matrix
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Simulate G M Mostahid's optimization impact compared to vanilla baseline targeting.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Sliders Input Block */}
              <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                  <span className="text-xs font-mono font-extrabold text-slate-700 uppercase flex items-center gap-1">
                    <Calculator className="w-4 h-4 text-cyan-600" /> Simulator Controls
                  </span>
                  <button
                    onClick={() => {
                      setBudget(3000);
                      setCpc(0.85);
                      setConversionRate(2.2);
                      setAov(75);
                    }}
                    className="text-[9px] font-mono text-cyan-600 font-bold hover:underline"
                  >
                    Reset Defaults
                  </button>
                </div>

                {/* Slider 1: Budget */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-sans text-slate-600">Simulated Monthly Budget</span>
                    <span className="font-mono font-bold text-slate-800">${budget.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="500"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <span className="text-[9.5px] text-slate-400 block font-mono">Limits: $500 - $20,000</span>
                </div>

                {/* Slider 2: CPC */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-sans text-slate-600">Average Click-Through-Cost (CPC)</span>
                    <span className="font-mono font-bold text-slate-800">${cpc.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.15"
                    max="3.50"
                    step="0.05"
                    value={cpc}
                    onChange={(e) => setCpc(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <span className="text-[9.5px] text-slate-400 block font-mono">Limits: $0.15 - $3.50</span>
                </div>

                {/* Slider 3: Conversion Rate */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-650">
                    <span className="font-sans text-slate-600">Purchase Link Conversion Rate</span>
                    <span className="font-mono font-bold text-slate-800">{conversionRate.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10.0"
                    step="0.1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <span className="text-[9.5px] text-slate-400 block font-mono">Limits: 0.5% - 10.0%</span>
                </div>

                {/* Slider 4: AOV */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-sans text-slate-600">Average Cart Checkout Value (AOV)</span>
                    <span className="font-mono font-bold text-slate-800">${aov}</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="500"
                    step="5"
                    value={aov}
                    onChange={(e) => setAov(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <span className="text-[9.5px] text-slate-400 block font-mono">Limits: $15 - $500</span>
                </div>
              </div>

              {/* Dynamic Outputs Block */}
              <div className="flex flex-col justify-between h-full bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full filter blur-xl" />

                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#a1a1aa] block uppercase mb-3">
                    PROJECTED PERFORMANCE INDEX
                  </span>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                      <span className="text-[9px] font-mono text-slate-400 block leading-none mb-1">
                        REVENUE GENERATED
                      </span>
                      <span className="text-xl font-mono text-cyan-400 font-extrabold leading-tight">
                        ${revenue.toLocaleString()}
                      </span>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                      <span className="text-[9px] font-mono text-slate-400 block leading-none mb-1">
                        PROJECTED ROAS
                      </span>
                      <span className="text-xl font-mono text-green-400 font-extrabold leading-tight">
                        {roas}x
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-350 border-t border-slate-800 pt-4 font-mono">
                    <div className="flex justify-between">
                      <span>Simulated Ad Clicks:</span>
                      <span className="text-slate-200 font-bold">{clicks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Simulated Orders:</span>
                      <span className="text-slate-200 font-bold">{transactions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Acquisition Cost (CPA):</span>
                      <span className="text-slate-200 font-bold">${cpa}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-800/60 pt-2 text-[#a1a1aa]">
                      <span>Projected ROI Return:</span>
                      <span className={`${returnPercentage >= 0 ? 'text-green-400' : 'text-rose-400'} font-bold`}>
                        {returnPercentage >= 0 ? '+' : ''}{returnPercentage}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 p-3 rounded-xl bg-cyan-950/40 border border-cyan-900/65 flex gap-2.5 items-start">
                  <Info className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <p className="text-[10px] leading-relaxed text-cyan-300">
                    Mostahid routinely uses matching Conversions API pipelines to capture 21% more conversions than average standard browser pixels. This adds direct training data data back into Meta, scaling indices seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
