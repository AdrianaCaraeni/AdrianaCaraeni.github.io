/**
 * About section content (bio, education). Timeline data kept for optional future use.
 */

export const aboutBio = {
  paragraphs: [
    'Adriana Caraeni is a dual-degree Computer Science and Computing Mathematics student at UMass Amherst, maintaining a 3.95+ GPA while pursuing rigorous coursework and research at the intersection of AI and software engineering.',
    'As an AI researcher and full-stack developer—and a Goldwater Scholarship nominee—she focuses on applied machine learning, LLM reasoning, and shipping tools that solve real problems. She is multilingual in English, Romanian, and French.',
    'Her experience spans public-sector AI engineering, enterprise fintech, startup sales and leadership, and academic research labs. She has interned with the Commonwealth of Massachusetts (AI co-op), is an incoming software engineering intern at Fidelity Investments, and conducts research with Algoverse AI.',
  ],
}

export const aboutEducation = [
  {
    school: 'University of Massachusetts Amherst',
    degree: 'Computer Science & Computing Mathematics Dual Degree',
    dates: 'Sept 2023 – Present',
    location: 'Amherst, MA',
    gpa: '3.95+',
    honors: [
      'NCWIT Collegiate Award National Nominee',
      'Goldwater Scholarship 2025 UMass Nominee',
      "Chancellor's Award Scholarship (4×)",
      'Crowley-Nowick Scholarship (2×)',
      'Phi Kappa Phi Inductee',
      '152+ credits',
    ],
  },
  {
    school: 'Lebanon High School',
    degree: 'High School Diploma',
    dates: 'Sept 2019 – June 2023',
    location: 'Lebanon, NH',
    gpa: '4.46',
    honors: [
      'Salutatorian',
      'Math Team First Place (4×)',
      'Science Olympiad State Champion (2×)',
      'French Club President',
      'Library Advisory Board Director',
      'ELO Award',
      '32+ credits',
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
      'Six weeks of machine learning coursework and labs',
      'Fall machine learning project with partner company.',
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
          'Mentored by Senior Systems Architect in enterprise fintech architecture',
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
        dates: 'October 2025 – Present',
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
