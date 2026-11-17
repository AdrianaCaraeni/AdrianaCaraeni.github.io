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
    rolesLine: 'MOBILE SOFTWARE ENGINEERING',
    description: '',
    bulletPoints: [
      "Developed order search functionality for Fidelity's brokerage app, gated behind LaunchDarkly toggle.",
      'Implemented general search across the Activity & Orders sections of the flagship mobile application.',
      'Redesigned search & filter toggle w/ right-aligned layout & vertical divider to be smooth & intuitive.',
      'Authored onboarding documentation to assist with future developers joining the team as an Android developer.',
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
      'Built a 7- and 14-day harmful algal bloom forecasting model with class-weighted LightGBM on a time-ordered train/test split that keeps future data out of training. Benchmarked it against persistence, logistic regression and decision tree baselines.',
      'Combined 7 environmental datasets (NOAA weather, satellite chlorophyll, HABSOS bloom samples, nutrients, Mote water temperature) into a 4,187-day table with 14 variables. Converted units, averaged wind correctly using vector components, and flagged each source’s date coverage.',
      'Cut 7M+ satellite chlorophyll readings down to 1.08M for the Sarasota study area and matched 58,765 bloom sampling events to the nearest reading (within about 5 km and ±1 day) using SciPy cKDTree and pandas merge_asof.',
      'Led design of the team’s final presentation deck, turning the analysis of 3,451 sampling days into slides for the Challenge Advisor and AI Studio coaches.',
    ],
    logo: '/break_through_tech_logo.jfif',
    website: 'https://breakthroughtech.org/',
  },
  {
    id: 'commonwealth',
    company: 'Commonwealth of Massachusetts',
    roleTitle: 'Artificial Intelligence Tool Developer',
    dateRange: 'April 2025 – May 2026',
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
  {
    id: 'apps-for-good',
    company: 'Apps for Good: CapMetro',
    roleTitle: 'Team Lead + Full Stack Software Engineer · Austin, Texas',
    dateRange: 'June – August 2025',
    industry: 'Civic Technology',
    rolesLine: 'TEAM LEAD / FULL STACK SOFTWARE ENGINEERING',
    description: '',
    bulletPoints: [
      'Led a 9-person distributed team to ship a real-time bus tracking application for CapMetro, integrating the Texas Open Data Portal API and Google Maps with 15-second live location refresh, deployed to production on Digital Ocean.',
      'Architected the WebSocket event schema, REST endpoint structure, and PostgreSQL data layer from scratch, designing for sub-second query performance across 200+ active bus routes.',
      'Built a multi-table ETL pipeline converting CapMetro’s GTFS feed (stops, routes, trips, stop times, shapes) from raw CSV into optimized SQL INSERT statements, supporting the WebSocket-driven live tracking backend.',
    ],
    logo: '/apps_for_good.png',
    website: 'https://teamup.us/',
  },
]

export function isOngoing(dateRange) {
  return /present/i.test(dateRange)
}
