/**
 * Projects timeline — order in this array is top-to-bottom on the page.
 * Move items to reorder. Set status to 'Shipped' when a project ships.
 *
 * status: 'In Progress' | 'Shipped'
 * category: 'iOS App' | 'AI Automation' | 'Backend Systems'
 */
export const projects = [
  {
    id: 'lift-labs',
    title: 'Lift Labs',
    tagline:
      'An iOS weightlifting app built for women: programming, progress tracking, and form guidance.',
    category: 'iOS App',
    status: 'In Progress',
    problem:
      "Most lifting apps are designed around men's training goals and assume prior gym experience. Lift Labs gives women structured strength programs, simple progress tracking, and form guidance so they can train with confidence.",
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'HealthKit'],
  },
  {
    id: 'filing-watch',
    title: 'FilingWatch',
    tagline:
      "An AI agent that detects what actually changed in a company's SEC filings, with cited sources and a measured accuracy score.",
    category: 'AI Automation',
    status: 'In Progress',
    problem:
      "Material changes in SEC filings, like new risk factors, revised guidance, or one-off events, are buried in hundreds of pages, and most AI summarizers can't be trusted to catch them. FilingWatch compares each new 10-K, 10-Q, and 8-K against the prior filing section by section, flags only what changed with a link to the exact source text, and is evaluated against a hand-labeled test set so its accuracy is measured, not assumed.",
    stack: ['Python', 'EdgarTools', 'LLM API', 'PostgreSQL', 'GitHub Actions'],
  },
  {
    id: 'market-data-service',
    title: 'Market Data Service',
    tagline:
      'A real-time market data service that ingests a live feed, aggregates it, and serves it over REST and WebSocket APIs.',
    category: 'Backend Systems',
    status: 'In Progress',
    problem:
      'Financial applications need market data that is fast, correct, and always available. This service ingests a live price feed, stores ticks, builds OHLC bars, and serves them through low-latency APIs with caching and rate limiting.',
    stack: [
      'Java 21',
      'Spring Boot',
      'PostgreSQL + TimescaleDB',
      'Redis',
      'WebSocket',
      'JUnit',
      'Docker',
      'GitHub Actions',
    ],
  },
]
