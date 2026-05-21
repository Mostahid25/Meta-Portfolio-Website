/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ExternalLink, CheckSquare, Clock, Zap, Target, TrendingUp, HelpCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onInquireService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  const [activeTab, setActiveTab] = useState<'services' | 'operate'>('services');

  const services: ServiceItem[] = [
    {
      name: "Full-Funnel Ad Campaign Management",
      overview: "End-to-end campaign strategy, targeting top-of-funnel (TOF), middle-of-funnel (MOF), and bottom-of-funnel (BOF) loops to drive customer actions from awareness to purchase.",
      approach: "Data-Driven"
    },
    {
      name: "Audience Research & Targeting",
      overview: "Deep-dive diagnostic data analysis to discover your ideal customer profile. Building rich lookalike bases, detailed interest-stack hierarchies, and competitor exclusions.",
      approach: "Strategic"
    },
    {
      name: "Ad Creative Strategy & Production",
      overview: "Compelling graphic direction & scroll-stopping video structure guidelines. Directing hook-angles, body copywriting, split tests, and custom CTA layout formulas.",
      approach: "Strategic"
    },
    {
      name: "Retargeting & Remarketing Campaigns",
      overview: "Re-engage site visitors, abandoned shopping carts, video viewers, and historic clients with custom dynamic ads, keeping high conversion matching scores.",
      approach: "Auto-Growing"
    },
    {
      name: "Campaign Performance Reporting",
      overview: "Full transparent performance reporting. Attribution validation comparing Shopify sales, third-party analytics logs, and Meta dashboard parameters.",
      approach: "Data-Driven"
    }
  ];

  const operatePlaybook = [
    {
      duration: "DAILY RUNBOOK",
      icon: <Clock className="w-4 h-4 text-cyan-600" />,
      color: "border-cyan-200 bg-cyan-50/40",
      tasks: [
        "Monitor active spend and detect any unpredicted CPM or CPC spikes.",
        "Assess frequency indexes across ad units to prevent target fatigue.",
        "Inspect and resolve Catalog synching and product sync feeds.",
        "Reallocate budgets dynamically from stale ad sets to top ROAS winners."
      ]
    },
    {
      duration: "WEEKLY CALIBRATION",
      icon: <Zap className="w-4 h-4 text-amber-600" />,
      color: "border-amber-200 bg-amber-50/40",
      tasks: [
        "Deploy newly designed visual creatives and execute copy variant tests.",
        "Analyze cohort conversions across age groups, device types, and genders.",
        "Refine and prune custom lookalikes based on newly synced customer sheets.",
        "Validate server-side CAPI event match quality and inspect deduplication scores."
      ]
    },
    {
      duration: "MONTHLY MACRO BLUEPRINT",
      icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
      color: "border-emerald-200 bg-emerald-50/40",
      tasks: [
        "Reconcile multi-touch attribution metrics (Shopify/Sales vs Ads Manager).",
        "Formulate scaling roadmap, determining budget increments for next month.",
        "Re-audit ad account health and competitor placements using intelligence libraries.",
        "Submit executive strategic audit and review ROAS targets with client teams."
      ]
    }
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md shadow-slate-100 overflow-hidden flex flex-col h-full">
      {/* Dynamic Tab Switch Header */}
      <div className="flex border-b border-slate-200 bg-slate-50/50">
        <button
          onClick={() => setActiveTab('services')}
          className={`flex-1 py-4 px-6 text-center font-mono text-xs font-extrabold tracking-widest uppercase transition-all ${
            activeTab === 'services'
              ? 'bg-white text-cyan-600 border-b-2 border-cyan-500'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          SERVICES
        </button>
        <button
          onClick={() => setActiveTab('operate')}
          className={`flex-1 py-4 px-6 text-center font-mono text-xs font-extrabold tracking-widest uppercase transition-all ${
            activeTab === 'operate'
              ? 'bg-white text-cyan-600 border-b-2 border-cyan-500'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          OPERATE
        </button>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        {activeTab === 'services' ? (
          <div className="space-y-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-sans font-extrabold text-lg text-slate-800 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                Services Command Suite
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Engineered for maximum scale. Click an inquire icon to launch a campaign inquiry.
              </p>
            </div>

            {/* Custom Responsive Table Matrix */}
            <div className="overflow-x-auto rounded-2xl border border-slate-100">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-sky-50 text-slate-700 font-mono font-bold tracking-wider border-b border-slate-200">
                    <th className="py-3 px-4 min-w-[150px]">SERVICE NAME</th>
                    <th className="py-3 px-4 min-w-[200px]">OVERVIEW</th>
                    <th className="py-3 px-4 text-center">APPROACH</th>
                    <th className="py-3 px-3 text-center">INQUIRE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {services.map((service, index) => (
                    <tr
                      key={index}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="py-3.5 px-4 font-sans font-extrabold text-slate-800 leading-snug">
                        {service.name}
                      </td>
                      <td className="py-3.5 px-4 font-sans text-slate-500 leading-relaxed text-[11px]">
                        {service.overview}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full font-mono text-[9px] font-bold tracking-wider uppercase ${
                            service.approach === 'Data-Driven'
                              ? 'bg-blue-105/10 text-blue-700 bg-blue-50 border border-blue-100'
                              : service.approach === 'Strategic'
                              ? 'bg-cyan-105/10 text-cyan-700 bg-cyan-50 border border-cyan-100'
                              : 'bg-indigo-105/10 text-indigo-700 bg-indigo-50 border border-indigo-100'
                          }`}
                        >
                          {service.approach}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <button
                          onClick={() => onInquireService(service.name)}
                          className="p-1.5 rounded-lg border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50 text-slate-400 hover:text-cyan-600 transition-all cursor-pointer"
                          title="Inquire about this service"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom mini footnote card */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mt-4">
              <p className="text-[11px] font-sans text-slate-500 leading-relaxed">
                🚀 <span className="font-bold text-slate-700">Campaign Handover includes</span>: Complete custom Ad Account setting audit, Pixels & CAPI configuration, 3 set custom audience stacks, creative hook roadmap, and 14 days of daily micro-budget optimization.
              </p>
            </div>
          </div>
        ) : (
          /* Operate - Campaign Operations Playbook Section */
          <div className="space-y-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-sans font-extrabold text-lg text-slate-800 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block animate-pulse" />
                Operational Optimization Tactics
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                G M Mostahid's precise operational routine designed to scale ad campaigns.
              </p>
            </div>

            {/* Daily, Weekly, Monthly Playbook cards */}
            <div className="space-y-4">
              {operatePlaybook.map((phase, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl p-4 transition-all duration-300 hover:shadow-md ${phase.color}`}
                >
                  <h4 className="font-mono font-extrabold text-xs text-slate-800 flex items-center gap-2 mb-2.5">
                    {phase.icon}
                    {phase.duration}
                  </h4>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-600">
                    {phase.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-relaxed bg-white/70 p-2 rounded-xl border border-slate-100">
                        <CheckSquare className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4 mt-4 flex items-start gap-3">
              <Target className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-sans font-extrabold text-xs text-sky-900">
                  Adaptive Scale Architecture (ASA)
                </h5>
                <p className="text-sky-850 text-[10px] leading-relaxed mt-1">
                  We maintain a strictly conservative baseline and increment daily ad set spend by 15-20% only when CTR levels are above 1.5% and CPC thresholds are stable. This avoids shocking the Meta ad algorithm and resets fatigue profiles safely.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
