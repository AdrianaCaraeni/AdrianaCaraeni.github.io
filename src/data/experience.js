/**
 * Experience / portfolio cards — #experience
 */
export const experiences = [
  {
    id: 'fidelity',
    company: 'Fidelity Investments',
    roleTitle: 'Full Stack Software Engineer Intern',
    dateRange: 'Summer 2026',
    industry: 'Financial Services',
    rolesLine: 'FULL STACK SOFTWARE ENGINEERING',
    description: 'Incoming Software.',
    bulletPoints: [],
    logo: '/fidelity_investments_logo.jpg',
    website: 'https://www.fidelity.com/',
  },
  {
    id: 'vierra',
    company: 'Vierra',
    roleTitle: 'Sales Strategist · Tech Lead · Talent Acquisition',
    dateRange: 'Dec 2025 – Present',
    industry: 'AI Marketing Software',
    rolesLine: 'SALES STRATEGIST / TECH LEAD / TALENT ACQUISITION',
    description: '',
    bulletPoints: [
      'Architected a multi-channel lead qualification system integrating LinkedIn Sales Navigator, SmartLead, and Harmonic APIs to identify and score ICP-aligned prospects, generating 20+ qualified pipeline opportunities per month.',
      'Built and automated end-to-end recruitment infrastructure with structured evaluation rubrics, onboarding SOPs, and candidate tracking workflows, reducing time-to-hire by 50% and improving 30-day retention by 25% across 10+ hires.',
      'Designed and instrumented a CRM-backed client success pipeline tracking engagement signals and account health across 50+ active accounts, contributing to a 95% retention rate and $15K ACV.',
      'Developed an outbound sales automation system spanning cold email, LinkedIn, and in-person event workflows across 100+ founder-level contacts, driving $10K+ in new MRR.',
    ],
    logo: '/vierra.jpg',
    website: 'https://vierradev.com/',
  },
  {
    id: 'mwp',
    company: 'Artemis',
    roleTitle: 'Founder + Full Stack Software Engineer',
    dateRange: 'Dec 2025 - Present',
    industry: 'Software as a Service',
    rolesLine: 'FOUNDER / FULL STACK SOFTWARE ENGINEERING',
    description: '',
    bulletPoints: [
      'Built a full-stack email client in Next.js and TypeScript integrating Google and Outlook OAuth to unify multiple mail accounts with full IMAP/SMTP support, 2FA, and encrypted session authentication.',
      'Designed a PostgreSQL contacts system with tag-based segmentation and CSV pipeline, powering a Nodemailer campaign engine that sends individually addressed bulk emails across filtered contact lists.',
      'Developed a lead mining panel aggregating Google Maps API, LinkedIn, and social media into a unified lead scoring and outreach pipeline, with automated validation and outreach via Manus AI API integration.',
    ],
    logo: '/Logo.png',
  },
  {
    id: 'commonwealth',
    company: 'Commonwealth of Massachusetts',
    roleTitle: 'Artificial Intelligence Tool Developer',
    dateRange: 'April 2025 – Present',
    industry: 'AI Tools',
    rolesLine: 'ARTIFICIAL INTELLIGENCE / TOOL DEVELOPMENT',
    description: '',
    bulletPoints: [
      'Deployed an automated video translation system serving 1,200+ Culinary Career Ladder students, processing multilingual content concurrently via AWS and parallel Google Translate API execution.',
      'Achieved a 95% reduction in operational expenses by architecting intelligent transcription caching that reuses duplicate segments alongside scalable compute infrastructure and automated pipelines.',
      'Reduced translation workflow time by 83% through unified content management and seamless save/edit functionality.',
      'Created a CloudWatch dashboard connected to AWS Athena for SLATE AI tool logging and stakeholder visibility.',
    ],
    logo: '/commonwealth_logo.jpg',
    website: 'https://www.mass.gov/',
  },
]

export function isOngoing(dateRange) {
  return /present/i.test(dateRange)
}
