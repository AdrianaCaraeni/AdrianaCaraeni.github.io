import { useCallback, useState } from 'react'

/** Paths are in /public — add entries here when new posters are added. */
const POSTERS = [
  { src: '/CIIR-probing.png', alt: 'CIIR probing research poster' },
  { src: '/ERSP%20Poster.png', alt: 'ERSP poster' },
  { src: '/Cognitive%20Offloading.png', alt: 'Cognitive Offloading poster' },
]

const PAPERS = [
  {
    title: 'Potential Energy Savings from Quantum Computing-Based Route Optimization',
    href: 'https://arxiv.org/abs/2604.16718',
  },
  {
    title: 'Cognitive Offloading in Agile Teams: How Artificial Intelligence Reshapes Risk Assessment and Planning Quality',
    href: 'https://arxiv.org/abs/2604.13814',
  },
  {
    title: 'Evaluating GPT-4 at Grading Handwritten Solutions in Math Exams',
    href: 'https://arxiv.org/abs/2411.05231',
  },
]

export default function PortfolioSection() {
  const [index, setIndex] = useState(0)
  const n = POSTERS.length
  const current = POSTERS[index]

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n)
  }, [n])

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n)
  }, [n])

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
        <div className="portfolio-poster-carousel">
          <button
            type="button"
            className="testimonials-arrow testimonials-arrow--prev"
            onClick={goPrev}
            aria-label="Previous poster"
          >
            <span className="portfolio-poster-chevron" aria-hidden="true">
              &lt;
            </span>
          </button>

          <figure
            className="portfolio-poster-card"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                e.preventDefault()
                goPrev()
              }
              if (e.key === 'ArrowRight') {
                e.preventDefault()
                goNext()
              }
            }}
          >
            <img
              className="portfolio-poster-img"
              src={current.src}
              alt={current.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              width={1200}
              height={800}
            />
          </figure>

          <button
            type="button"
            className="testimonials-arrow testimonials-arrow--next"
            onClick={goNext}
            aria-label="Next poster"
          >
            <span className="portfolio-poster-chevron" aria-hidden="true">
              &gt;
            </span>
          </button>
        </div>

        <div className="portfolio-papers-block">
          <h3 id="portfolio-papers-heading" className="portfolio-papers-heading">
            Click paper title to view my published work in arXiv.
          </h3>
          <ul
            className="portfolio-papers-list"
            aria-labelledby="portfolio-papers-heading"
          >
            {PAPERS.map((paper) => (
              <li key={paper.href}>
                <a
                  className="portfolio-paper-link"
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {paper.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
