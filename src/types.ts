/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SkillNode {
  id: string;
  name: string;
  subtitle: string;
  description: string[];
  angle: number; // For circular rendering
  color: string;
}

export interface ServiceItem {
  name: string;
  overview: string;
  approach: "Data-Driven" | "Strategic" | "Auto-Growing";
  link?: string;
}

export interface FunnelData {
  impressions: number;
  clicks: number;
  leads: number;
  conversions: number;
  revenue: number;
  adSpend: number;
}

export interface CampaignData {
  id: string;
  category: "E-Commerce" | "Lead Gen" | "Brand Awareness";
  title: string;
  simulatedValue: string; // e.g., "ROAS" or "RDAS"
  value: string; // e.g. "4.2x"
  ctr: string;
  avgRos: string;
  stsRate: string; // rosts / rests %
  stsRateLabel: string;
  missionLog: string;
  funnel: {
    top: number;
    middle: number;
    bottom: number;
  };
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  imageType: "semlight" | "semdark" | "hubspot" | "meta"; // Style preset or details
  scanUrl: string;
}
