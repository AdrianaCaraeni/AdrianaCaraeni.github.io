import { useParallax } from '../hooks/useParallax.js'

export default function Hero() {
  const parallaxRef = useParallax(0.06)

  return (
    <section
      ref={parallaxRef}
      id="hero"
      className="hero hero--parallax"
      aria-label="Introduction"
    >
      <div className="hero-parallax-layer" aria-hidden="true">
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-badge" aria-label="Entrepreneur, Sales, AI/ML, SWE">
            <span className="hero-badge-dot" aria-hidden="true" />
            <span className="hero-badge-text">Entrepreneur</span>
            <span className="hero-badge-dot" aria-hidden="true" />
            <span className="hero-badge-text">Sales</span>
            <span className="hero-badge-dot" aria-hidden="true" />
            <span className="hero-badge-text">AI/ML</span>
            <span className="hero-badge-dot" aria-hidden="true" />
            <span className="hero-badge-text">SWE</span>
          </div>

          <h1 className="hero-tagline">I build things that matter.</h1>
          <p className="hero-body">
            Junior at UMass Amherst studying CS, Math and Business (3.96 GPA). I build full-stack apps and AI
            systems - from video translation pipelines serving 1,200+ students to a novel LLM reasoning method
            published through Algoverse. Currently architecting AI tools at the Commonwealth of MA, and incoming SWE
            Intern at Fidelity Investments and MIT AI Studio Fellow.
          </p>
          <a className="hero-work-link" href="#portfolio">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-graphic" aria-hidden="true">
          <svg className="hero-head-svg" viewBox="0 0 440 380" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heroHeadStroke" x1="75" y1="36" x2="330" y2="328" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(37,99,235,0.9)" />
                <stop offset="100%" stopColor="rgba(99,102,241,0.95)" />
              </linearGradient>
            </defs>
            <path
              d="M137 318v-33c0-16-6-27-19-40-25-24-41-56-41-93 0-71 58-129 130-129 73 0 132 57 132 128 0 55-29 95-78 118-14 7-21 16-21 29v20"
              stroke="url(#heroHeadStroke)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.92"
            />
            <path
              d="M136 318h124M152 342h91M170 363h56"
              stroke="url(#heroHeadStroke)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>

          <div className="hero-binary-intersection" />

          <div className="hero-magnifier">
            <div className="hero-magnifier-glare" />
            <div className="hero-binary-stream">
              <span>1010010110010110</span>
              <span>0110100101100101</span>
              <span>1101010010101101</span>
              <span>0101101001011010</span>
              <span>1010110010100111</span>
              <span>0110010111010010</span>
              <span>1100101010011011</span>
              <span>0011010110100110</span>
              <span>1011001010110010</span>
              <span>0100101101001101</span>
              <span>1110010100101110</span>
              <span>0010101110010100</span>
            </div>
            <div className="hero-magnifier-handle" />
          </div>
        </div>
      </div>
    </section>
  )
}
