export type LawHeroStat = {
  label: string;
  value: string;
  detail: string;
};

export type CurrentLawItem = {
  title: string;
  enactedOn: string;
  status: string;
  focus: string;
  summary: string;
  significance: string;
  provenance: string;
  commencement: string;
  caveat: string;
  href: string;
  sourceLabel: string;
};

export type TimelineItem = {
  date: string;
  title: string;
  detail: string;
};

export type RepealedLawGroup = {
  title: string;
  description: string;
  acts: string[];
};

export type SourceAuditItem = {
  label: string;
  issuer: string;
  tier: string;
  whatItProves: string;
  caveat: string;
  href: string;
};

export type ScholarReadingPath = {
  title: string;
  description: string;
  query: string;
  href: string;
};

export type AuthorityLayer = {
  title: string;
  description: string;
  strength: string;
};

export type ProfessionalCommentarySource = {
  label: string;
  publisher: string;
  whatItCorroborates: string;
  caveat: string;
  href: string;
};

export const lawHeroStats: LawHeroStat[] = [
  {
    label: "Act texts on page",
    value: "4 Act PDFs",
    detail:
      "The four core reform laws are backed here by searchable government-hosted PDF texts.",
  },
  {
    label: "Government statements",
    value: "2 releases",
    detail:
      "State House releases support the June 26, 2025 assent and the January 1, 2026 rollout position.",
  },
  {
    label: "Legislative records",
    value: "2 records",
    detail:
      "National Assembly records help show the tax bills in the formal legislative pipeline before assent.",
  },
];

export const currentLawLibrary: CurrentLawItem[] = [
  {
    title: "Nigeria Tax Act 2025",
    enactedOn: "Assent announced June 26, 2025",
    status: "Primary substantive tax law",
    focus:
      "Tax base, rates, exemptions, incentives, VAT, stamp duties, gains, and petroleum-related charging rules.",
    summary:
      "This is the main law to start with when you want to know what is taxed under the current federal framework. The State House assent release presents it as the law that consolidates previously separate tax rules into one harmonised statute.",
    significance:
      "It matters because section 196 of the text lists the repeal of older standalone tax laws such as the Companies Income Tax Act, Personal Income Tax Act, Capital Gains Tax Act, and Value Added Tax Act.",
    provenance:
      "This entry is supported by a government-hosted PDF from NIPC and the June 26, 2025 State House assent release naming the bill among the four signed tax laws.",
    commencement:
      "The exact commencement clause was not cleanly surfaced from the government-hosted copy used on this page. The December 30, 2025 State House release says the remaining acts would commence on January 1, 2026, and KPMG Nigeria's January 2026 note says the NTA became effective on that date.",
    caveat:
      "This page does not yet link a direct Federal Gazette or National Assembly certified PDF for this Act. For now, it relies on a government-hosted copy plus professional corroboration.",
    href: "https://www.nipc.gov.ng/wp-content/uploads/2025/07/Nigeria-Tax-Act-2025.pdf",
    sourceLabel: "Open government-hosted Act text",
  },
  {
    title: "Nigeria Tax Administration Act 2025",
    enactedOn: "Assent announced June 26, 2025",
    status: "Uniform administration framework",
    focus:
      "Registration, Tax ID, filing, assessment, collection, refunds, enforcement, rulings, and penalties.",
    summary:
      "Use this law when your question is not just what tax applies, but how the system is administered. The State House assent release describes it as the framework for tax administration across federal, state, and local governments.",
    significance:
      "It matters because it is the main source for registration, filing, assessment, enforcement, refunds, and day-to-day tax procedure.",
    provenance:
      "This entry is supported by a government-hosted PDF from NIPC and the June 26, 2025 State House assent release naming the Nigeria Tax Administration Bill.",
    commencement:
      "The December 30, 2025 State House release says the remaining acts would commence on January 1, 2026. KPMG Nigeria's January 2026 note specifically says the NTAA became effective on that date.",
    caveat:
      "The exact commencement clause was not cleanly retrievable from the government-hosted PDF during this pass, so the act-by-act effective date still relies partly on practitioner corroboration.",
    href: "https://www.nipc.gov.ng/wp-content/uploads/2025/07/Nigeria-Tax-Administration-Act-2025.pdf",
    sourceLabel: "Open government-hosted Act text",
  },
  {
    title: "Nigeria Revenue Service (Establishment) Act 2025",
    enactedOn: "Assent announced June 26, 2025",
    status: "Institutional law for the federal revenue authority",
    focus:
      "Establishment of the Nigeria Revenue Service, governance, staffing, powers, and the repeal of the former FIRS framework.",
    summary:
      "Use this law when you need to understand who now administers federal tax obligations. The State House assent release says it repeals the former FIRS law and creates the Nigeria Revenue Service.",
    significance:
      "It matters because the institutional authority behind federal tax administration changed under the reform package.",
    provenance:
      "This entry is supported by a government-hosted PDF from NIPC, the June 26, 2025 State House assent release, and KPMG Nigeria's July 2025 act summary.",
    commencement:
      "KPMG Nigeria's January 2026 note says the NRSEA had become effective since June 26, 2025 and was activated on January 1, 2026. The December 30, 2025 State House release also distinguishes between acts already in effect and acts scheduled for January 1, 2026.",
    caveat:
      "The activation wording comes from practitioner commentary rather than a clearly surfaced clause in the government-hosted PDF extracted during this pass.",
    href: "https://www.nipc.gov.ng/wp-content/uploads/2025/07/Nigeria-Revenue-Service-Establishment-Act-2025.pdf",
    sourceLabel: "Open government-hosted Act text",
  },
  {
    title: "Joint Revenue Board (Establishment) Act 2025",
    enactedOn: "Assent announced June 26, 2025",
    status: "Coordination, dispute, and taxpayer-rights framework",
    focus:
      "Joint Revenue Board, Tax Appeal Tribunal, Tax Ombud, intergovernmental coordination, and savings/transitional provisions.",
    summary:
      "Use this law when your question is about coordination across tax authorities, disputes, or taxpayer complaints. The source set for this page supports the Act's role in establishing the Joint Revenue Board, Tax Appeal Tribunal, and Office of the Tax Ombud.",
    significance:
      "It matters because it covers dispute resolution, taxpayer complaints, and coordination across tax authorities.",
    provenance:
      "This entry is supported by a government-hosted PDF from NIPC, the June 26, 2025 State House assent release, and KPMG Nigeria's July 2025 summary of the JRBEA.",
    commencement:
      "KPMG Nigeria's January 2026 note says the JRBEA had become effective since June 26, 2025 and was activated on January 1, 2026.",
    caveat:
      "As with the NRSEA, the activation distinction is corroborated here by practitioner commentary rather than a directly surfaced clause from the retrieved PDF text.",
    href: "https://www.nipc.gov.ng/wp-content/uploads/2025/07/Joint-Revenue-Board-Establishment-Act-2025.pdf",
    sourceLabel: "Open government-hosted Act text",
  },
];

export const authorityLayers: AuthorityLayer[] = [
  {
    title: "Primary law text",
    description:
      "Start with the Act itself. That is the binding source for what the law says.",
    strength: "Highest authority",
  },
  {
    title: "Government provenance",
    description:
      "Government-hosted materials help confirm assent, rollout messaging, and the text copy being cited.",
    strength: "Strong support",
  },
  {
    title: "Parliamentary history",
    description:
      "National Assembly records help show how the bills moved before assent.",
    strength: "Process evidence",
  },
  {
    title: "Professional corroboration",
    description:
      "PwC, Deloitte, and KPMG help show how practitioners are reading the reforms and where drafting issues remain.",
    strength: "Interpretive support",
  },
];

export const lawTimeline: TimelineItem[] = [
  {
    date: "June 26, 2025",
    title: "State House announced assent to the four tax bills",
    detail:
      "The Presidency said the President signed the Nigeria Tax Bill, Nigeria Tax Administration Bill, Nigeria Revenue Service (Establishment) Bill, and Joint Revenue Board (Establishment) Bill on this date.",
  },
  {
    date: "July 10, 2025",
    title: "Senate progression chart reflected the tax bills as passed",
    detail:
      "The Senate Bills Department progression chart shows SB. 585 Nigeria Tax Administration Bill, 2024 and SB. 586 Nigeria Tax Bill, 2024 as passed, adding legislative context to the reform package.",
  },
  {
    date: "December 30, 2025",
    title: "State House reaffirmed the January 1, 2026 commencement plan",
    detail:
      "The Presidency said the laws already effective on June 26, 2025 and the remaining acts scheduled for January 1, 2026 would continue as planned.",
  },
  {
    date: "January 2026",
    title: "KPMG Nigeria flagged certified-act discrepancies",
    detail:
      "KPMG Nigeria reported that the National Assembly had released 'certified' Acts following allegations of discrepancies between harmonized bills and gazetted texts.",
  },
];

export const repealedLawGroups: RepealedLawGroup[] = [
  {
    title: "Major charging statutes listed in section 196 of the Nigeria Tax Act 2025",
    description:
      "These repeal claims are not based on commentary alone. They come from the retrieved text of the Nigeria Tax Act itself, which lists the enactments repealed by section 196.",
    acts: [
      "Capital Gains Tax Act",
      "Companies Income Tax Act",
      "Personal Income Tax Act",
      "Petroleum Profits Tax Act",
      "Stamp Duties Act",
      "Value Added Tax Act",
    ],
  },
  {
    title: "Additional enactments also listed in section 196",
    description:
      "These are likewise taken from the retrieved section 196 repeal list in the Act text, not inferred from secondary summaries.",
    acts: [
      "Casino Act",
      "Deep Offshore and Inland Basin Act",
      "Industrial Development (Income Tax Relief) Act",
      "Income Tax (Authorised Communications) Act",
      "Taxes and Levies (Approved List for Collection) Act",
      "Venture Capital (Incentives) Act",
    ],
  },
];

export const governmentLawSources: SourceAuditItem[] = [
  {
    label: "Nigeria Tax Act 2025 PDF",
    issuer: "Nigerian Investment Promotion Commission",
    tier: "Government-hosted law text",
    whatItProves:
      "Gives the searchable text used on this page for section 196 repeal claims and the core charging framework.",
    caveat:
      "This is a government-hosted PDF, but not yet a direct Federal Gazette or certified-act link on this page.",
    href: "https://www.nipc.gov.ng/wp-content/uploads/2025/07/Nigeria-Tax-Act-2025.pdf",
  },
  {
    label: "Nigeria Tax Administration Act 2025 PDF",
    issuer: "Nigerian Investment Promotion Commission",
    tier: "Government-hosted law text",
    whatItProves:
      "Gives the text used on this page for filing, assessment, enforcement, refunds, and administrative procedure.",
    caveat:
      "Used here as the working text, but direct Gazette or certified-act provenance is still an open hardening step.",
    href: "https://www.nipc.gov.ng/wp-content/uploads/2025/07/Nigeria-Tax-Administration-Act-2025.pdf",
  },
  {
    label: "Nigeria Revenue Service (Establishment) Act 2025 PDF",
    issuer: "Nigerian Investment Promotion Commission",
    tier: "Government-hosted law text",
    whatItProves:
      "Gives the text used on this page for the institutional shift away from the former FIRS framework.",
    caveat:
      "The text is government-hosted, but the page still does not surface a direct gazette or certified link.",
    href: "https://www.nipc.gov.ng/wp-content/uploads/2025/07/Nigeria-Revenue-Service-Establishment-Act-2025.pdf",
  },
  {
    label: "Joint Revenue Board (Establishment) Act 2025 PDF",
    issuer: "Nigerian Investment Promotion Commission",
    tier: "Government-hosted law text",
    whatItProves:
      "Gives the text used on this page for the Board, the Tax Appeal Tribunal, and related transitional provisions.",
    caveat:
      "Only a government-hosted copy is linked here for now; direct gazette or certified provenance remains a gap.",
    href: "https://www.nipc.gov.ng/wp-content/uploads/2025/07/Joint-Revenue-Board-Establishment-Act-2025.pdf",
  },
  {
    label: "Presidential assent statement",
    issuer: "The State House, Abuja",
    tier: "Government assent record",
    whatItProves:
      "Confirms that the President signed four tax bills on June 26, 2025 and names each bill in the package.",
    caveat:
      "Useful assent evidence, but not a substitute for the enacted legal text itself.",
    href: "https://statehouse.gov.ng/president-tinubu-new-tax-laws-the-way-forward-for-nigerias-prosperity/",
  },
  {
    label: "Commencement reaffirmation statement",
    issuer: "The State House, Abuja",
    tier: "Government rollout record",
    whatItProves:
      "Confirms that some of the new tax laws had already taken effect on June 26, 2025 and the remaining acts were scheduled for January 1, 2026.",
    caveat:
      "The statement does not map the exact act-by-act commencement split, so that point is corroborated here with professional commentary.",
    href: "https://statehouse.gov.ng/new-tax-laws-will-commence-on-january-1-2026-as-planned/",
  },
];

export const legislativeHistorySources: SourceAuditItem[] = [
  {
    label: "House of Representatives Order Paper, February 12, 2025",
    issuer: "National Assembly of Nigeria",
    tier: "Parliamentary provenance",
    whatItProves:
      "Shows the House handling the Nigeria Revenue Service (Establishment) Bill, Joint Revenue Board (Establishment) Bill, Nigeria Tax Bill, and Nigeria Tax Administration Bill as part of the same reform package.",
    caveat:
      "This is process evidence for bill movement, not enacted-law evidence on its own.",
    href: "https://nass.gov.ng/documents/download/11180",
  },
  {
    label: "Senate Bills Progression Chart, July 10, 2025",
    issuer: "Senate Bills Department, National Assembly",
    tier: "Parliamentary provenance",
    whatItProves:
      "Shows SB. 585 Nigeria Tax Administration Bill, 2024 and SB. 586 Nigeria Tax Bill, 2024 as passed in the Senate progression chart.",
    caveat:
      "Useful for provenance and timing, but still subordinate to the enacted Act text and assent record.",
    href: "https://nass.gov.ng/documents/billdownload/11207.pdf",
  },
];

export const professionalCommentarySources: ProfessionalCommentarySource[] = [
  {
    label: "The Nigerian Tax Reform Acts",
    publisher: "PwC Nigeria",
    whatItCorroborates:
      "Supports the view that the reform package is being treated by major practitioners as a broad overhaul of Nigeria's tax framework.",
    caveat:
      "Interpretive and commercial commentary, not binding legal authority.",
    href: "https://www.pwc.com/ng/en/publications/the-nigerian-tax-reform-acts.html",
  },
  {
    label: "Nigeria's New Tax Laws: Technical and Industry Insights",
    publisher: "Deloitte Nigeria",
    whatItCorroborates:
      "Supports the broad-overhaul reading, including the repeal of twelve principal or subsidiary tax laws under the reform package.",
    caveat:
      "Useful practitioner synthesis, but the repeal claims should still be checked against section 196 of the Act text.",
    href: "https://www.deloitte.com/ng/en/services/tax/perspectives/nigeria-s-new-tax-laws-technical-and-industry-insights.html",
  },
  {
    label: "The Nigeria Revenue Service (Establishment) Act, 2025",
    publisher: "KPMG Nigeria",
    whatItCorroborates:
      "Supports the reading that the former FIRS structure was replaced with the Nigeria Revenue Service.",
    caveat:
      "Act-specific commentary rather than the law text itself.",
    href: "https://kpmg.com/ng/en/home/insights/2025/07/the-nigeria-revenue-service-establishment-act-2025.html",
  },
  {
    label: "The Joint Revenue Board Establishment Act (JREA), 2025",
    publisher: "KPMG Nigeria",
    whatItCorroborates:
      "Supports the reading that the JRBEA provides for the Joint Revenue Board, Tax Appeal Tribunal, and Office of the Tax Ombud.",
    caveat:
      "Interpretive support only; institutional claims remain grounded in the Act text.",
    href: "https://kpmg.com/ng/en/home/insights/2025/07/the-joint-revenue-board-establishment-act-jrea-2025.html",
  },
  {
    label: "Nigeria's new tax laws: Inherent errors, inconsistencies, gaps and omissions",
    publisher: "KPMG Nigeria",
    whatItCorroborates:
      "Supports the act-by-act effective-date split and flags that the National Assembly released 'certified' Acts after discrepancy allegations.",
    caveat:
      "This is precisely a warning source, so it should be read as evidence of uncertainty as well as corroboration.",
    href: "https://kpmg.com/ng/en/home/insights/2026/01/nigeria-new-tax-laws-inherent-errors-inconsistencies-gaps-and-omissions.html",
  },
];

export const scholarReadingPaths: ScholarReadingPath[] = [
  {
    title: "Nigeria Tax Act 2025 reform analysis",
    description:
      "Use this after reading the Act itself if you want academic discussion on codification and consolidation.",
    query: "Nigeria Tax Act 2025 reform consolidation Nigeria",
    href: "https://scholar.google.com/scholar?q=Nigeria+Tax+Act+2025+reform+consolidation+Nigeria",
  },
  {
    title: "Tax administration and taxpayer compliance in Nigeria",
    description:
      "Useful after the NTAA if you want scholarship on enforcement, filing behaviour, and administration design.",
    query: "Nigeria tax administration taxpayer compliance tax law",
    href: "https://scholar.google.com/scholar?q=Nigeria+tax+administration+taxpayer+compliance+tax+law",
  },
  {
    title: "Value Added Tax law and revenue allocation",
    description:
      "A research path for VAT structure, disputes, and fiscal federalism after checking the current Act text.",
    query: "Nigeria value added tax law revenue allocation federalism",
    href: "https://scholar.google.com/scholar?q=Nigeria+value+added+tax+law+revenue+allocation+federalism",
  },
  {
    title: "Company taxation and tax incentives in Nigeria",
    description:
      "Useful for academic context around company taxation, incentives, and business-facing reform effects.",
    query: "Nigeria company income tax incentives law reform",
    href: "https://scholar.google.com/scholar?q=Nigeria+company+income+tax+incentives+law+reform",
  },
  {
    title: "Personal income tax and fiscal federalism",
    description:
      "Helpful for academic work on resident individual taxation and state-level allocation issues.",
    query: "Nigeria personal income tax fiscal federalism law",
    href: "https://scholar.google.com/scholar?q=Nigeria+personal+income+tax+fiscal+federalism+law",
  },
  {
    title: "Petroleum taxation after the reform package",
    description:
      "Useful for comparing legacy petroleum profits tax scholarship with post-reform analysis.",
    query: "Nigeria petroleum taxation Petroleum Industry Act Nigeria Tax Act 2025",
    href: "https://scholar.google.com/scholar?q=Nigeria+petroleum+taxation+Petroleum+Industry+Act+Nigeria+Tax+Act+2025",
  },
  {
    title: "Tax disputes, Tax Appeal Tribunal, and taxpayer rights",
    description:
      "Best for policy and academic research around objections, appeals, ombuds processes, and taxpayer protection.",
    query: "Nigeria Tax Appeal Tribunal taxpayer rights tax ombud",
    href: "https://scholar.google.com/scholar?q=Nigeria+Tax+Appeal+Tribunal+taxpayer+rights+tax+ombud",
  },
];

export const evidenceGapNotes = [
  "This page uses government-hosted Act texts as its working primary sources, but it still does not link direct Federal Gazette URLs or National Assembly certified-act PDFs for all four Acts.",
  "The exact act-by-act commencement split is not clearly surfaced in the retrieved government-hosted PDFs used here. Where the page assigns January 1, 2026 to the NTA and NTAA, or June 26, 2025 plus January 1, 2026 activation to the NRSEA and JRBEA, that point is supported here by KPMG Nigeria's January 2026 commentary.",
  "The legislative provenance section helps show bill movement and passage history, but it does not replace the final enacted text. Legal reliance should still stay anchored in the Act text and, where possible, gazette or certified versions.",
];

export const lawLibraryNotes = [
  "This page is a federal tax-law research hub. It does not attempt to reproduce every state revenue law or local government instrument in Nigeria.",
  "Primary law text, government provenance, parliamentary history, professional commentary, and scholarship are intentionally separated so users can quickly see the difference in authority.",
  "Taxamy should treat this page as an information library, not a substitute for tailored legal, accounting, or tax advice.",
];
