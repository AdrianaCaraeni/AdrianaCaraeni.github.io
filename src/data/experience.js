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
    description: '',
    bulletPoints: [
      'Android developer on the flagship Fidelity mobile application.',
    ],
    logo: '/fidelity_investments_logo.jpg',
    website: 'https://www.fidelity.com/',
  },
  {
    id: 'breakthrough',
    company: 'Break Through Tech',
    roleTitle: 'Machine Learning Engineer',
    dateRange: 'March 2026 – Present',
    industry: 'Education & Technology',
    rolesLine: 'MACHINE LEARNING ENGINEERING',
    description: '',
    bulletPoints: [
      'Six weeks of machine learning coursework and labs',
      'Fall machine learning project with partner company.',
    ],
    logo: '/break_through_tech_logo.jfif',
    website: 'https://breakthroughtech.org/',
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
