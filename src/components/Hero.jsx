export default function Hero({ onNameClick }) {
  return (
    <section id="hero" className="hero anchor-target" aria-label="Introduction">
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />

      <div className="hero-inner">
        <div
          className="hero-badge"
          aria-label="Entrepreneur, Sales, AI/ML, SWE"
        >
          <span className="hero-badge-dot" aria-hidden="true" />
          <span className="hero-badge-text">Entrepreneur</span>
          <span className="hero-badge-dot" aria-hidden="true" />
          <span className="hero-badge-text">Sales</span>
          <span className="hero-badge-dot" aria-hidden="true" />
          <span className="hero-badge-text">AI/ML</span>
          <span className="hero-badge-dot" aria-hidden="true" />
          <span className="hero-badge-text">SWE</span>
        </div>

        <h1
          className={`hero-title ${onNameClick ? 'hero-title--clickable' : ''}`}
          onClick={() => onNameClick?.()}
          onKeyDown={(e) => onNameClick && e.key === 'Enter' && onNameClick()}
          role={onNameClick ? 'button' : undefined}
          tabIndex={onNameClick ? 0 : undefined}
          aria-label={onNameClick ? 'Replay loading animation' : undefined}
        >
          Adriana Caraeni
        </h1>
        <p className="hero-tagline">I grow businesses.</p>
        <p className="hero-body">
          Founder, Saleswomen, and Engineer obsessed with scaling ideas into reality.
        </p>
      </div>
    </section>
  )
}
