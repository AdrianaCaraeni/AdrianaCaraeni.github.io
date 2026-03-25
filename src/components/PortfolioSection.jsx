export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="portfolio-block section-pad"
      aria-labelledby="portfolio-heading"
    >
      <div className="container-page">
        <h2 id="portfolio-heading" className="portfolio-heading">
          Portfolio
        </h2>
        <div className="portfolio-placeholder surface-card">
          <p className="portfolio-placeholder-text">
            Case studies and selected work are coming soon. In the meantime, explore{' '}
            <a href="#experience">experience</a> and <a href="#contact">get in touch</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
