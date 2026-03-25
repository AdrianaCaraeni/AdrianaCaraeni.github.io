import RevealBlock from './RevealBlock.jsx'

export default function AboutHighlights() {
  return (
    <RevealBlock className="about-glass-panel about-stats-wrap">
      <h3 className="about-subheading">Highlights</h3>
      <div className="about-stats" role="list">
        <div className="about-stat about-reveal-stat" role="listitem">
          <span className="about-stat-value">3</span>
          <span className="about-stat-label">Years Experience</span>
        </div>
        <div className="about-stat about-reveal-stat" role="listitem">
          <span className="about-stat-value">5+</span>
          <span className="about-stat-label">Research Projects</span>
        </div>
        <div className="about-stat about-reveal-stat" role="listitem">
          <span className="about-stat-value">3.95+</span>
          <span className="about-stat-label">GPA</span>
        </div>
        <div
          className="about-stat about-stat--placeholder about-reveal-stat"
          role="listitem"
          aria-label="Fourth metric: to be announced"
        >
          <span className="about-stat-value about-stat-value--empty">—</span>
          <span className="about-stat-label about-stat-label--muted">Coming soon</span>
        </div>
      </div>
    </RevealBlock>
  )
}
