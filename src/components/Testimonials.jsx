import { useCallback, useEffect, useState } from 'react'
import { testimonials } from '../data/testimonials.js'

const AUTO_MS = 9000

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const n = testimonials.length

  const goTo = useCallback((i) => {
    setIndex(((i % n) + n) % n)
  }, [n])

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n)
  }, [n])

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n)
  }, [n])

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % n)
    }, AUTO_MS)
    return () => clearInterval(id)
  }, [n, index])

  const item = testimonials[index]

  return (
    <section
      id="testimonials"
      className="testimonials section-pad"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-page">
        <h2 id="testimonials-heading" className="testimonials-heading">
          Testimonials
        </h2>

        <div className="testimonials-carousel">
          <button
            type="button"
            className="testimonials-arrow testimonials-arrow--prev"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="testimonials-card surface-card"
            tabIndex={0}
            role="article"
            aria-label={`Testimonial from ${item.name}`}
            onClick={(e) => e.currentTarget.focus()}
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
          <div className="testimonials-quote-deco" aria-hidden="true">
            &ldquo;
          </div>

          <header className="testimonials-header">
            <div className="testimonials-avatar">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="testimonials-avatar-img"
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="testimonials-avatar-initials" aria-hidden="true">
                  {initials(item.name)}
                </span>
              )}
            </div>
            <div className="testimonials-meta">
              <div className="testimonials-name-row">
                <h3 className="testimonials-name">{item.name}</h3>
                <div className="testimonials-rating" title="5 out of 5">
                  <span className="testimonials-rating-star" aria-hidden="true">
                    ★
                  </span>
                  <span className="testimonials-rating-num">{item.rating}</span>
                </div>
              </div>
              <p className="testimonials-source">{item.date}</p>
            </div>
          </header>

          <div className="testimonials-role-bar">
            <span className="testimonials-role-text">{item.roles}</span>
          </div>

          <hr className="testimonials-divider" />

          <div className="testimonials-body">
            <span className="testimonials-inline-quote" aria-hidden="true">
              &ldquo;
            </span>
            {item.paragraphs.map((p, i) => (
              <p key={i} className="testimonials-paragraph">
                {p}
              </p>
            ))}
          </div>
          </div>

          <button
            type="button"
            className="testimonials-arrow testimonials-arrow--next"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="testimonials-dots" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1} of ${n}`}
              className={`testimonials-dot ${i === index ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
