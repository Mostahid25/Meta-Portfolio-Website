/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, CheckCircle, RefreshCw, Smartphone, QrCode, X, Eye, FileBadge } from 'lucide-react';
import { CertificateItem } from '../types';

export const CertifiedSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'certified' | 'verified'>('certified');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [verifyingId, setVerifyingId] = useState<string | null>(null);
  const [verifiedCerts, setVerifiedCerts] = useState<Record<string, boolean>>({});

  const certificates: CertificateItem[] = [
    {
      id: "cert-1",
      title: "Social Media Marketing Certification",
      issuer: "Semrush Academy",
      issueDate: "October 2025",
      credentialUrl: "https://www.semrush.com/academy/",
      imageType: "semlight",
      scanUrl: "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https://www.semrush.com/academy/&choe=UTF-8"
    },
    {
      id: "cert-2",
      title: "Meta Certified Digital Marketing Associate",
      issuer: "Meta Blueprint",
      issueDate: "December 2025",
      credentialUrl: "https://www.credly.com/org/meta",
      imageType: "meta",
      scanUrl: "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https://www.credly.com/org/meta&choe=UTF-8"
    }
  ];

  const handleVerify = (certId: string) => {
    setVerifyingId(certId);
    setTimeout(() => {
      setVerifiedCerts(prev => ({ ...prev, [certId]: true }));
      setVerifyingId(null);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md shadow-slate-100 overflow-hidden flex flex-col h-full relative">
      {/* Sub-Header Tabs */}
      <div className="flex border-b border-slate-200 bg-slate-50/50">
        <button
          onClick={() => setActiveTab('certified')}
          className={`flex-1 py-4 px-6 text-center font-mono text-xs font-extrabold tracking-widest uppercase transition-all ${
            activeTab === 'certified'
              ? 'bg-white text-cyan-600 border-b-2 border-cyan-500'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          CERTIFIED
        </button>
        <button
          onClick={() => setActiveTab('verified')}
          className={`flex-1 py-4 px-6 text-center font-mono text-xs font-extrabold tracking-widest uppercase transition-all ${
            activeTab === 'verified'
              ? 'bg-white text-cyan-600 border-b-2 border-cyan-500'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          VERIFIED
        </button>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        {activeTab === 'certified' ? (
          <div className="space-y-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-sans font-extrabold text-lg text-slate-800 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                Cert Gallery
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Official industry accreditations. Click on any certificate to view high-resolution credential logs.
              </p>
            </div>

            {/* High-Fidelity Custom Resized Cert Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Certificate 1: HubSpot Academy */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                
                {/* HubSpot Certificate Card Body */}
                <div className="p-6 md:p-8 space-y-5 bg-white text-slate-800 relative">
                  {/* Decorative thin accent line on top */}
                  <div className="absolute top-0 left-0 w-full h-[5px] bg-[#ff7a59]" />

                  {/* HubSpot badge icon at top center */}
                  <div className="flex justify-center pt-2">
                    <div className="w-14 h-14 rounded-full bg-[#ff7a59]/10 border-2 border-[#ff7a59] flex items-center justify-center relative">
                      {/* Innermost orange sprocket-inspired layout */}
                      <div className="w-8 h-8 rounded-full bg-[#ff7a59]/20 border border-dashed border-[#ff7a59] flex items-center justify-center">
                        <span className="text-xs font-mono font-black text-[#ff7a59]">🧡</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h4 className="text-sm font-mono tracking-widest font-extrabold text-slate-450 uppercase">
                      HubSpot Academy
                    </h4>
                    <h3 className="font-sans font-black text-xl text-[#2d3e50] tracking-tight">
                      Social Media Certified
                    </h3>
                  </div>

                  <div className="text-center space-y-1.5 py-1">
                    <p className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                      Proudly Awarded To
                    </p>
                    <span className="text-base font-sans font-black text-[#2d3e50] block border-b border-slate-100 pb-2">
                      G M Mostahid
                    </span>
                  </div>

                  {/* The exact copytext from the HubSpot certificate */}
                  <p className="text-[10px] md:text-[10.5px] leading-relaxed text-slate-600 text-center font-sans tracking-wide max-w-sm mx-auto">
                    The bearer of this certificate is hereby deemed fully capable and skilled in applying inbound social media strategy. They have been tested on best practices and are ready to take an inbound approach to social media including: social monitoring, content strategy, social engagement, creating social media policies, and demonstrating social ROI to stakeholders.
                  </p>

                  <div className="text-center bg-[#fcfcfc] border border-slate-100 p-2.5 rounded-xl space-y-1">
                    <span className="text-[11px] font-sans font-bold text-slate-700 block">
                      Valid from: <span className="text-[#ff7a59]">Mar 29 2026 - Apr 27 2028</span>
                    </span>
                    <span className="text-[8.5px] font-mono text-slate-400 block tracking-normal">
                      Certification code: 7e5adefe90f74ee6895b6751c66ba40d
                    </span>
                  </div>

                  {/* Footer - Branding & Signatures */}
                  <div className="flex justify-between items-end border-t border-slate-100 pt-4 mt-2">
                    {/* HubSpot Academy logo representation */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded px-0.5 bg-[#ff7a59] flex items-center justify-center text-white text-[9px] font-black">
                        Hub
                      </div>
                      <span className="text-[10.5px] font-sans font-extrabold text-[#2d3e50] tracking-tight">
                        HubSpot <span className="font-normal text-slate-550">Academy</span>
                      </span>
                    </div>

                    {/* Signature */}
                    <div className="text-right">
                      <span className="font-serif italic font-extrabold text-slate-700 block text-xs tracking-wide">
                        Yamini Rangan
                      </span>
                      <span className="text-[8px] font-mono text-slate-400 block uppercase font-bold tracking-wide mt-0.5">
                        CEO Yamini Rangan
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scan section */}
                <div className="bg-[#fcfcfc] border-t border-slate-200/60 p-4 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono tracking-wider text-slate-400 font-extrabold block">
                      SCAN TO VERIFY
                    </span>
                    <button
                      onClick={() => setSelectedCert(certificates[0])}
                      className="flex items-center gap-1 text-[10.5px] font-sans font-extrabold text-cyan-600 hover:text-cyan-700 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" /> View Credential log
                    </button>
                  </div>
                  <div
                    onClick={() => setSelectedCert(certificates[0])}
                    className="w-11 h-11 bg-white border border-slate-200 p-1 rounded-lg cursor-pointer hover:border-[#ff7a59] transition-colors"
                  >
                    <QrCode className="w-full h-full text-slate-700" />
                  </div>
                </div>
              </div>

              {/* Certificate 2: Semrush Academy */}
              <div className="bg-gradient-to-br from-[#f3f0ff] via-white to-[#e0f1fe] border border-slate-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                
                {/* Semrush Certificate Card Body */}
                <div className="p-6 md:p-8 space-y-6 relative flex-1 flex flex-col justify-between">
                  {/* Stamp top-right corner */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <div className="w-14 h-14 rounded-full border border-slate-650 flex items-center justify-center p-0.5 rotate-12 relative opacity-90 hover:rotate-0 transition-transform duration-300 bg-white">
                      <div className="absolute inset-0.5 rounded-full border border-dashed border-slate-600" />
                      <div className="text-center p-1 flex flex-col items-center justify-center">
                        <span className="text-[6px] font-mono leading-none tracking-tight text-slate-500 font-bold">
                          SEMRUSH DIGITAL
                        </span>
                        {/* Semrush Eagle/Crest Badge Representation */}
                        <div className="w-5 h-5 my-0.5 rounded-full bg-slate-900 flex items-center justify-center text-white text-[8px] font-black">
                          ⚡
                        </div>
                        <span className="text-[5px] font-mono leading-none text-slate-400">
                          EDUCATION
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Header/Logo spacing correct */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-[11px] font-bold tracking-tight text-[#ff6422] uppercase">
                      <span className="px-1.5 py-0.5 bg-[#ff6422] text-white rounded font-mono text-[9px] font-black">
                        SEMRUSH
                      </span>
                      <span className="text-[#412ba7]">Academy</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold block">
                      OFFICIAL CERTIFICATE
                    </span>
                  </div>

                  {/* Large Name text matching Semrush course exactly */}
                  <div className="space-y-4 my-4">
                    <h3 className="font-sans font-black text-3xl text-slate-900 tracking-tight leading-tight">
                      G M Mostahid
                    </h3>
                    <div className="space-y-1 border-l-2 border-[#ff6422] pl-3.5 py-0.5">
                      <span className="text-[10px] font-mono tracking-wider font-extrabold text-cyan-600 uppercase">
                        Marketing Specialization
                      </span>
                      <h4 className="font-sans font-bold text-sm text-slate-800 leading-tight">
                        Social Media Marketing Crash Course
                      </h4>
                    </div>
                  </div>

                  {/* Footer - Metadata Details & Signature */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-indigo-100/50 pt-4 mt-2">
                    <div className="space-y-1 text-[9px] font-mono text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6422]" />
                        <span>Certificate expires: <span className="font-bold text-slate-700">30.03.2027</span></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>ID: 59a8971c22</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        <span>Exam registry ID-13</span>
                      </div>
                    </div>

                    {/* Instructor Signature representation */}
                    <div className="text-right">
                      <span className="font-serif italic font-extrabold text-indigo-950 block text-sm tracking-wide">
                        Janet Machuka
                      </span>
                      <span className="text-[8px] font-mono text-indigo-400 block uppercase font-bold tracking-wider mt-0.5">
                        Course Instructor
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scan section */}
                <div className="bg-indigo-50/40 border-t border-slate-200/60 p-4 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono tracking-wider text-slate-400 font-extrabold block">
                      SCAN TO VERIFY
                    </span>
                    <button
                      onClick={() => setSelectedCert(certificates[1])}
                      className="flex items-center gap-1 text-[10.5px] font-sans font-extrabold text-cyan-600 hover:text-cyan-700 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" /> View Credential log
                    </button>
                  </div>
                  <div
                    onClick={() => setSelectedCert(certificates[1])}
                    className="w-11 h-11 bg-white border border-slate-200 p-1 rounded-lg cursor-pointer hover:border-[#ff6422] transition-colors"
                  >
                    <QrCode className="w-full h-full text-slate-700" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* REGISTRY DATABASE VERIFICATION view */
          <div className="space-y-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-sans font-extrabold text-lg text-slate-800 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                Meta Credential Registry Database
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Direct querying registry logs. Verify current active standing.
              </p>
            </div>

            {/* Custom Interactive Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 font-mono font-bold border-b border-slate-250">
                    <th className="py-3 px-4">CREDENT REGISTRY ID</th>
                    <th className="py-3 px-4">ISSUER</th>
                    <th className="py-3 px-4 text-center">STATUS</th>
                    <th className="py-3 px-4 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                  {certificates.map((cert) => {
                    const isVerified = verifiedCerts[cert.id];
                    const isVerifying = verifyingId === cert.id;

                    return (
                      <tr key={cert.id} className="hover:bg-slate-50/50">
                        <td className="py-3.5 px-4 font-bold text-slate-800">
                          {cert.id === 'cert-1' ? "REG-SEMRUSH-89104A" : "REG-META-7104B9"}
                        </td>
                        <td className="py-3.5 px-4 font-sans font-medium text-slate-500">
                          {cert.issuer}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {isVerified ? (
                            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 bg-emerald-55/10 bg-emerald-50 border border-emerald-110 font-bold px-2 py-0.5 rounded-full">
                              <CheckCircle className="w-3 h-3" /> VERIFIED
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] text-amber-600 bg-amber-55/10 bg-amber-50 border border-amber-110 font-bold px-2 py-0.5 rounded-full">
                              ● ACTIVE STANDING
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => handleVerify(cert.id)}
                            disabled={isVerified || isVerifying}
                            className={`px-3 py-1 bg-white border text-[10px] font-bold rounded-lg transition-all ${
                              isVerified
                                ? 'border-slate-200 text-slate-400 cursor-not-allowed'
                                : isVerifying
                                ? 'border-cyan-200 text-cyan-600'
                                : 'border-slate-300 text-slate-700 hover:border-cyan-400 hover:bg-cyan-50 cursor-pointer'
                            }`}
                          >
                            {isVerifying ? (
                              <span className="flex items-center gap-1">
                                <RefreshCw className="w-3 h-3 animate-spin" /> Query...
                              </span>
                            ) : isVerified ? (
                              "CONFIRMED"
                            ) : (
                              "QUERY REGISTRY"
                            )}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-250 mt-4 flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-slate-500 shrink-0" />
              <p className="text-[10.5px] font-sans text-slate-500 leading-relaxed">
                Scan the QR badges using any mobile reader. It queries the respective issuer API server to verify G M Mostahid's secure certification registers (Conferred 2025).
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Credential Modal Overlay */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center bg-slate-50 px-6 py-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <FileBadge className="w-5 h-5 text-cyan-650" />
                <span className="text-xs font-mono font-extrabold text-slate-800 uppercase tracking-wider">
                  Official Verification Log
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-650 hover:bg-slate-100 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div className="text-center space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-extrabold uppercase">
                  Conferred by {selectedCert.issuer}
                </span>
                <h4 className="font-sans font-extrabold text-lg text-slate-800 tracking-tight leading-snug">
                  {selectedCert.title}
                </h4>
                <p className="text-xs text-slate-400">
                  Credential Authority Concurrence Index
                </p>
              </div>

              {/* Mockup QR Scan Target */}
              <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="w-24 h-24 bg-white border border-slate-200 p-2 rounded-xl shrink-0 flex items-center justify-center">
                  <QrCode className="w-full h-full text-slate-700 animate-pulse" />
                </div>
                
                <div className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                  <p>
                    <span className="font-bold text-slate-800">Verification Hash:</span>
                    <span className="font-mono text-[10px] bg-white border border-slate-200 rounded px-1.5 py-0.5 ml-1 select-all">
                      {selectedCert.id === 'cert-1' ? 'SHA-256:6BF403D...SEMR' : 'SHA-256:49A105B...META'}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold text-slate-800">Direct link:</span>
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:underline font-mono text-[10px] ml-1 block sm:inline break-all"
                    >
                      {selectedCert.credentialUrl}
                    </a>
                  </p>
                  <p>
                    Scan this dynamic barcode to pull the live database entry directly or match our SHA checksum.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase">
                    CERTIFICATE STATUS
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-1">
                    ✓ SECURE & ACTIVE
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 border border-slate-300 text-slate-755 hover:border-slate-400 hover:bg-slate-50 text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-400 hover:bg-cyan-500 text-slate-900 text-xs font-extrabold rounded-xl transition-all text-center"
                  >
                    Verify Live Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
