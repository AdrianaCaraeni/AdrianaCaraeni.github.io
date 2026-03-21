export default function Hero({ onNameClick }) {
  return (
    <section id="hero" className="hero anchor-target" aria-label="Introduction">
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span>Entrepreneur · Sales · AI/ML · SWE</span>
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
          Founder, operator, and engineer obsessed with scaling ideas into reality.
        </p>

        <div className="hero-actions">
          <a href="#experience" className="hero-btn-primary">
            View My Work →
          </a>
          <a href="#about" className="hero-btn-ghost">
            About Me
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-label">Scroll</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  )
}
