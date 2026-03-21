import {
  BadgeCheck,
  BookOpenText,
  Building2,
  Clock3,
  Landmark,
  Scale,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LandingIconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type LandingLawItem = {
  title: string;
  description: string;
  note: string;
};

export type LandingLinkItem = {
  label: string;
  href: string;
};

export type LandingStatItem = {
  label: string;
  value: string;
  detail: string;
};

export const heroAudience = [
  "Businesses tracking obligations, payments, and filing dates",
  "Finance teams managing records, cash flow, and compliance",
  "Founders adapting to Nigeria's new tax laws",
  "Individuals who need clearer visibility into personal tax responsibilities",
];

export const heroStats: LandingStatItem[] = [
  {
    label: "Core product",
    value: "Tax management system",
    detail:
      "Track obligations, organize finance activity, and keep compliance work anchored to the current Nigerian framework.",
  },
  {
    label: "Law shift",
    value: "4 reform Acts",
    detail:
      "The 2025 reform package reshaped the tax environment that users need to work from in 2026.",
  },
  {
    label: "Primary focus",
    value: "Tax + finance visibility",
    detail:
      "The product should connect day-to-day financial decisions with tax obligations and law changes.",
  },
];

export const managementPillars: LandingIconItem[] = [
  {
    title: "Track taxes and deadlines",
    description:
      "Taxamy should help users see what is due, when it is due, and which records need to be ready before filing or payment.",
    icon: Clock3,
  },
  {
    title: "Manage finance with tax context",
    description:
      "Revenue, expenses, liabilities, and supporting records should stay close to the tax work they affect so decisions are easier to make.",
    icon: Wallet,
  },
  {
    title: "Stay current on Nigerian law changes",
    description:
      "The platform should explain new tax laws in Nigeria in clear terms and show why staying informed matters for compliance and planning.",
    icon: Sparkles,
  },
];

export const operationalFocus = [
  "Monitor liabilities, filings, receipts, and payment timelines without jumping between scattered tools.",
  "Keep finance records aligned with tax activity so reporting and planning stay cleaner.",
  "Translate new Nigerian tax laws into practical next steps for businesses, finance teams, and individuals.",
  "Reduce avoidable mistakes by clarifying which tax applies, which authority is involved, and what action comes next.",
];

export const legalFramework: LandingLawItem[] = [
  {
    title: "Nigeria Tax Act 2025",
    description:
      "This is the core tax law in the current reform package and it shapes the rules that users need to track, plan for, and respond to.",
    note:
      "It matters inside Taxamy because the product should reflect the rules people are actually working under today, not outdated summaries.",
  },
  {
    title: "Nigeria Tax Administration Act 2025",
    description:
      "This Act sets the tone for registration, filing, assessments, collections, and related administrative workflows across the tax system.",
    note:
      "It matters because good tax management depends on understanding how obligations are administered, not only what the law says in principle.",
  },
  {
    title: "Nigeria Revenue Service (Establishment) Act 2025",
    description:
      "This created the Nigeria Revenue Service as the federal tax authority under the reform package and updated the institutional framework users deal with.",
    note:
      "It matters because the product should help users understand the authority structure behind the obligations they are tracking.",
  },
  {
    title: "Joint Revenue Board (Establishment) Act 2025",
    description:
      "This supports coordination, taxpayer protections, and dispute-resolution structures across the broader Nigerian tax ecosystem.",
    note:
      "It matters because staying informed is not only about rates or laws, but also about how the system coordinates and resolves issues.",
  },
];

export const managementAreas: LandingIconItem[] = [
  {
    title: "Liabilities and due dates",
    description:
      "See upcoming obligations clearly so tax work becomes easier to plan around instead of a last-minute scramble.",
    icon: BadgeCheck,
  },
  {
    title: "Business tax operations",
    description:
      "Support the everyday work of founders and operators who need a better view of company tax responsibilities.",
    icon: Building2,
  },
  {
    title: "Authority and compliance awareness",
    description:
      "Keep obligations grounded in the current system so users know what changed and where they need to pay attention.",
    icon: Landmark,
  },
  {
    title: "Law updates in plain language",
    description:
      "Make new legislation easier to follow so people understand the impact on cash, reporting, and decision-making.",
    icon: BookOpenText,
  },
];

export const whyItMatters: LandingIconItem[] = [
  {
    title: "Current rules affect current decisions",
    description:
      "New tax laws can change how people budget, file, document transactions, and think about cash commitments.",
    icon: Scale,
  },
  {
    title: "Clear guidance reduces outdated assumptions",
    description:
      "When people stay informed, they are less likely to rely on old explanations that no longer match the framework now in force.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable context builds confidence",
    description:
      "A good tax management system should make legal change easier to understand before users take action or seek tailored advice.",
    icon: Sparkles,
  },
];

export const sourceLinks: LandingLinkItem[] = [
  {
    label: "Nigeria Tax Act 2025 Gazette",
    href: "https://www.nipc.gov.ng/wp-content/uploads/2025/08/Nigeria-Tax-Act-2025-Gazette.pdf",
  },
  {
    label: "Nigeria Revenue Service (Establishment) Act 2025",
    href: "https://www.nipc.gov.ng/wp-content/uploads/2025/07/Nigeria-Revenue-Service-Establishment-Act-2025.pdf",
  },
  {
    label: "Nigeria Tax Administration Act 2025",
    href: "https://www.nipc.gov.ng/product/nigeria-tax-administration-act-2025-act/",
  },
  {
    label: "Joint Revenue Board (Establishment) Act 2025",
    href: "https://www.nipc.gov.ng/product/joint-revenue-board-establishment-act-2025/",
  },
  {
    label: "State House brief on the reform package",
    href: "https://statehouse.gov.ng/tax-reforms-will-improve-lives-not-impoverish-nigerians-says-vice-president-kashim-shettima/",
  },
];
