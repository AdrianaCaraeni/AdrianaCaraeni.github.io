/**
 * About section content (bio, education). Timeline data kept for optional future use.
 */

export const aboutBio = {
  paragraphs: [
    'I’m an extroverted engineer: a CS + Math student at UMass Amherst with three technical internships (Commonwealth of Massachusetts, Fidelity, Apps For Good) and award-winning AI research. I’m just as comfortable in front of a customer as in front of a codebase. I helped UMass win the 2026 Northeast Intercollegiate Sales Competition and pitch regularly at the Berthiaume Center. I want to work where engineering meets the customer: understanding the problem firsthand, building the solution, and making the case for it.',
  ],
}

export const aboutEducation = [
  {
    school: 'Georgia Institute of Technology',
    level: 'Graduate',
    degree: 'OMSCS — Online Master of Science in Computer Science',
    note: null,
    dates: 'January 2027 – Present',
    location: 'Remote',
    gpa: null,
    honors: [],
  },
  {
    school: 'University of Massachusetts Amherst',
    level: 'Undergraduate',
    degree: 'Computer Science & Computing Mathematics Dual Degree',
    note: 'Business Minor, Early Research Scholars Program, iCons Certificate',
    dates: 'Sept 2023 – Present',
    location: 'Amherst, MA',
    gpa: '3.9+',
    honors: [
      'First Place in the ACM Student Research Competition',
      'Won the Northeast Intercollegiate Sales Competition w/ UMass Sales Club',
      'NCWIT Collegiate Award National Nominee',
      'Goldwater Scholarship 2025 UMass Nominee',
      "Chancellor's Award Scholarship (4×)",
      'Crowley-Nowick Scholarship (2×)',
      'Phi Kappa Phi Inductee',
      '175+ credits',
    ],
  },
]

/**
 * Most recent first. Grouped entries: multiple roles under one organization.
 */
export const aboutExperience = [
  {
    type: 'single',
    org: 'Break Through Tech',
    role: 'Machine Learning Engineer',
    dates: 'March 2026 – Present',
    location: null,
    bullets: [
      'Built a 7- and 14-day harmful algal bloom forecasting model with class-weighted LightGBM on a time-ordered train/test split that keeps future data out of training. Benchmarked it against persistence, logistic regression and decision tree baselines.',
      'Combined 7 environmental datasets (NOAA weather, satellite chlorophyll, HABSOS bloom samples, nutrients, Mote water temperature) into a 4,187-day table with 14 variables. Converted units, averaged wind correctly using vector components, and flagged each source’s date coverage.',
      'Cut 7M+ satellite chlorophyll readings down to 1.08M for the Sarasota study area and matched 58,765 bloom sampling events to the nearest reading (within about 5 km and ±1 day) using SciPy cKDTree and pandas merge_asof.',
      'Led design of the team’s final presentation deck, turning the analysis of 3,451 sampling days into slides for the Challenge Advisor and AI Studio coaches.',
    ],
  },
  {
    type: 'single',
    org: 'Minds With Purpose Foundation',
    role: 'AI Fellow',
    dates: 'February 2026 – Present',
    location: null,
    bullets: [],
  },
  {
    type: 'group',
    org: 'Fidelity Investments',
    roles: [
      {
        role: 'Incoming Full Stack Software Engineer Intern',
        dates: 'December 2025 – Present',
        location: null,
        bullets: [],
      },
      {
        role: 'BOUNDLESS Mentorship',
        dates: 'May – August 2025',
        location: null,
        bullets: [
          'Mentored by Senior Systems Architect in enterprise FinTech architecture',
        ],
      },
    ],
  },
  {
    type: 'group',
    org: 'Commonwealth of Massachusetts',
    roles: [
      {
        role: 'AI Co-op',
        dates: 'October 2025 – May 2026',
        location: null,
        bullets: [
          "Resolved 10+ critical bugs in the Government's Legal Office Tool",
          'Incorporated user feedback to enhance platform UX',
          'Expanded Genie LLM platform with new models and instructional content',
          'Built Power BI dashboard for SLATE logging',
        ],
      },
      {
        role: 'AI Summer Intern',
        dates: 'April – October 2025',
        location: null,
        bullets: [
          'Built video translation web app with audio transcription, multi-language translation, and caption burning',
          'Integrated AWS + Google Translate API; reduced costs 95% and processing time 80%',
          'Developed GenAI email drafting agent for UMass IT',
        ],
      },
    ],
  },
  {
    type: 'single',
    org: 'Algoverse',
    role: 'AI Researcher',
    dates: 'May 2025 – Present',
    location: null,
    bullets: [
      'Developed HiPO (Hierarchical Preference Optimization), extending DPO for LLM reasoning',
      '13.89% accuracy improvement on GSM8K, 11% on AIME24',
      'Used Qwen-2.5-7B and Llama-3.1-8B models',
    ],
  },
  {
    type: 'single',
    org: 'Teamup',
    role: 'Team Lead + Software Developer',
    dates: 'June – August 2025',
    location: null,
    bullets: [
      'Led 8-engineer team building CapMetro, a real-time bus tracking app for Austin, TX',
      '10-week cycle from concept to deployment; DigitalOcean hosting',
      'Live map, 15s WebSocket API refresh, on-time performance analytics',
    ],
  },
  {
    type: 'single',
    org: 'Liberty Mutual',
    role: 'Women in Tech Summit',
    dates: 'June 2025',
    location: null,
    bullets: [],
  },
  {
    type: 'single',
    org: 'Minutemen Alternative Investment Fund',
    role: 'Quantitative Analyst, ARQ Fellow',
    dates: 'March – May 2025',
    location: null,
    bullets: [
      'MLP neural network for S&P 500 price movement prediction',
      'Features: volatility, momentum, RSI, moving averages, relative volume',
      'Tools: PyTorch, scikit-learn, pandas',
    ],
  },
  {
    type: 'single',
    org: 'UMass Amherst',
    role: 'Early Research Scholars Program Fellow',
    dates: 'September 2024 – May 2025',
    location: null,
    bullets: [
      'Worked under Prof. Hamed Zamani in CIIR Lab',
      'Deployed AMT survey system across 100 unique questions',
      'Built data collection with JS/HTML/CSS + AWS DynamoDB',
      'Fine-tuned LLMs using Direct Preference Optimization',
    ],
  },
  {
    type: 'single',
    org: 'UMass Amherst',
    role: 'ML for Education Lab',
    dates: 'May 2024 – May 2025',
    location: null,
    bullets: [],
  },
  {
    type: 'single',
    org: 'Harvard Kennedy School',
    role: 'Leadership Academy Fellow',
    dates: 'June 2024 – May 2025',
    location: null,
    bullets: [
      'Selected among 70 CS/engineering students nationwide',
      '75 hours of training in negotiation, problem-solving, and communication',
      '9-month mentorship with two professionals',
    ],
  },
  {
    type: 'single',
    org: 'iCons (Integrated Concentration in STEM)',
    role: 'Fellow',
    dates: 'December 2023 – Present',
    location: null,
    bullets: [
      'Crowley-Norwich Scholarship recipient',
      'Researched quantum computing vs. simulated annealing/genetic algorithms for TSP',
      'Statistical significance testing on AI vs. human writing detection',
    ],
  },
]
