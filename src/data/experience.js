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
    logo: '/vierra.jpg',
    website: 'https://vierradev.com/',
  },
  {
    id: 'mwp',
    company: 'Minds With Purpose',
    roleTitle: 'Mobile Developer',
    dateRange: 'February 2026 – Present',
    industry: 'Mobile Application',
    rolesLine: 'MOBILE DEVELOPMENT',
    description: '',
    logo: '/mwp.jpg',
  },
  {
    id: 'commonwealth',
    company: 'Commonwealth of Massachusetts',
    roleTitle: 'Artificial Intelligence Tool Developer',
    dateRange: 'April 2025 – Present',
    industry: 'AI Tools',
    rolesLine: 'ARTIFICIAL INTELLIGENCE / TOOL DEVELOPMENT',
    description: '',
    logo: '/commonwealth_logo.jpg',
    website: 'https://www.mass.gov/',
  },
]

export function isOngoing(dateRange) {
  return /present/i.test(dateRange)
}
