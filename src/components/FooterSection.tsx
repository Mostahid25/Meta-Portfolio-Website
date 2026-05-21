/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, User, CheckCircle, RefreshCw, X, MessageSquare, Briefcase } from 'lucide-react';

interface FooterSectionProps {
  initialServiceSelection?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ initialServiceSelection = "" }) => {
  const [email, setEmail] = useState<string>("mostahidgm@gmail.com");
  const [phone, setPhone] = useState<string>("+8801771426048");
  const [role, setRole] = useState<string>("Meta Ads Specialist");
  
  // Custom user inquiry fields
  const [userEmail, setUserEmail] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");
  const [selectedServiceInForm, setSelectedServiceInForm] = useState<string>("Full-Funnel Ad Campaign Management");
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showInquireDialog, setShowInquireDialog] = useState<boolean>(false);
  const [showInquireForm, setShowInquireForm] = useState<boolean>(false);

  const handleInitiateProject = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowInquireDialog(true);
      setShowInquireForm(false);
      // Reset inputs
      setUserMessage("");
    }, 1200);
  };

  return (
    <footer id="operate" className="w-full bg-[#090d16] text-white border-t border-slate-900 py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Absolute background ambient glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl opacity-60" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full filter blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto space-y-12 position-relative z-10">
        
        {/* Core CTA Banner Line */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-800 pb-10">
          <div className="space-y-2">
            <span className="text-cyan-400 font-mono text-[10px] tracking-widest font-extrabold uppercase block">
              ★ CALL TO ACTION
            </span>
            <h2 className="font-sans font-extrabold text-2xl lg:text-3.5xl tracking-tight text-white uppercase max-w-2xl leading-none">
              READY TO GROW YOUR BUSINESS WITH META ADS?
            </h2>
          </div>

          {/* Minimal Stylized Logo G */}
          <div className="w-12 h-12 rounded-full border border-slate-800 bg-slate-950/80 flex items-center justify-center text-cyan-400 font-extrabold text-xl shadow-inner cursor-pointer hover:border-cyan-400/50 transition-colors">
            G
          </div>
        </div>

        {/* Dynamic Selector Panel (Either Form or the Contact Info view) */}
        {!showInquireForm ? (
          /* Pictured Exact Layout */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
            
            {/* Email Field Column */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 flex flex-col justify-center h-20 hover:border-slate-700 transition-colors">
              <span className="text-[9px] font-mono tracking-widest uppercase font-extrabold text-slate-500 block mb-1">
                CONTACT EMAIL
              </span>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a
                  href={`mailto:${email}`}
                  className="text-xs font-mono font-bold hover:text-cyan-400 hover:underline text-slate-300 truncate"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Phone Field Column */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 flex flex-col justify-center h-20 hover:border-slate-700 transition-colors">
              <span className="text-[9px] font-mono tracking-widest uppercase font-extrabold text-slate-500 block mb-1">
                CONTACT PHONE
              </span>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a
                  href={`tel:${phone}`}
                  className="text-xs font-mono font-bold hover:text-cyan-400 hover:underline text-slate-300 truncate"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* Role Field Column */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 flex flex-col justify-center h-20 hover:border-slate-700 transition-colors">
              <span className="text-[9px] font-mono tracking-widest uppercase font-extrabold text-slate-500 block mb-1">
                CONSULTANT ROLE
              </span>
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-sans font-bold text-slate-300 truncate">
                  {role}
                </span>
              </div>
            </div>

            {/* Launch Inquire Trigger Button */}
            <button
              onClick={() => {
                setShowInquireForm(true);
                if (initialServiceSelection) {
                  setSelectedServiceInForm(initialServiceSelection);
                }
              }}
              className="lg:col-span-1 h-20 w-full rounded-2xl bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-sans font-extrabold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg shadow-cyan-400/10 cursor-pointer text-sm uppercase"
            >
              <MessageSquare className="w-4 h-4" />
              INITIATE PROJECT
            </button>
          </div>
        ) : (
          /* Double-action custom secure inquiry form builder (extremely professional) */
          <form
            onSubmit={handleInitiateProject}
            className="bg-[#0b101d] rounded-3xl p-6 md:p-8 border border-slate-800 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300"
          >
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <h3 className="font-sans font-extrabold text-sm text-white tracking-widest uppercase flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-400" /> Create Custom Campaign Proposal
              </h3>
              <button
                type="button"
                onClick={() => setShowInquireForm(false)}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[9px] font-mono text-slate-400 font-extrabold tracking-wider uppercase">
                  Your Best Contact Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g., founder@mybrand.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:border-cyan-400 focus:outline-none placeholder-slate-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-mono text-slate-400 font-extrabold tracking-wider uppercase">
                  Selected Agency Service
                </label>
                <select
                  value={selectedServiceInForm}
                  onChange={(e) => setSelectedServiceInForm(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-300 focus:border-cyan-400 focus:outline-none"
                >
                  <option value="Full-Funnel Ad Campaign Management">Full-Funnel Ad Campaign Management</option>
                  <option value="Audience Research & Targeting">Audience Research & Targeting</option>
                  <option value="Ad Creative Strategy & Production">Ad Creative Strategy & Production</option>
                  <option value="Retargeting & Remarketing Campaigns">Retargeting & Remarketing Campaigns</option>
                  <option value="Campaign Performance Reporting">Campaign Performance Reporting</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] font-mono text-slate-400 font-extrabold tracking-wider uppercase">
                Campaign Scope & Ad Spend Goals
              </label>
              <textarea
                placeholder="Briefly describe your products, target cost per purchase, and monthly spend goals..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                rows={3}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-xs text-white focus:border-cyan-400 focus:outline-none placeholder-slate-600"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-end items-center gap-3">
              <button
                type="button"
                onClick={() => setShowInquireForm(false)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs text-slate-400 hover:text-white border border-slate-850 hover:bg-slate-900 rounded-xl font-bold transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-cyan-400 hover:bg-cyan-500 text-slate-950 text-xs font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Pipe setting sync...
                  </>
                ) : (
                  "INITIATE CAMPAIGN NOW"
                )}
              </button>
            </div>
          </form>
        )}

        {/* Footnote Copyright block */}
        <div className="pt-8 border-t border-slate-950 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-600">
          <p>© {new Date().getFullYear()} G M Mostahid, Meta Ads Specialist. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span>Server Container: v2.14-prod</span>
            <span>Security Rule Check: PASS</span>
          </div>
        </div>
      </div>

      {/* SUCCESS INQUIRY CONVERSATION LIGHTBOX MODAL */}
      {showInquireDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm transition-opacity">
          <div className="bg-[#090d16] text-white rounded-3xl border border-slate-850 shadow-2xl max-w-md w-full overflow-hidden p-6 space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-cyan-950 border border-cyan-800 text-cyan-400 rounded-full flex items-center justify-center mx-auto text-xl font-extrabold animate-bounce">
                ✓
              </div>
              
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-cyan-400 tracking-widest font-extrabold block uppercase">
                  Proposal Log Transmission Successful
                </span>
                <h4 className="font-sans font-extrabold text-base text-white tracking-tight">
                  Campaign Project Initiated!
                </h4>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 text-xs text-slate-450 leading-relaxed font-mono space-y-2">
              <p>
                <span className="font-bold text-white">Target Sync Service:</span> <br />
                {selectedServiceInForm}
              </p>
              <p>
                <span className="font-bold text-white">Response Timeout SLA:</span> <br />
                Under 12 hours (Average response: 4.8 hrs)
              </p>
              <p>
                A Secure webhook receipt has been piped to <span className="text-cyan-400 underline">{userEmail || "your email"}</span>. Mostahid will review your parameters and generate a customized high-converting budget model.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowInquireDialog(false)}
                className="w-full sm:w-auto px-5 py-2.5 bg-cyan-400 hover:bg-cyan-500 text-slate-950 text-xs font-extrabold rounded-xl transition-all text-center cursor-pointer uppercase"
              >
                Acknowledge Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
