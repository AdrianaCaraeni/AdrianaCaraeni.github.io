import { useState } from 'react'
import { experiences, isOngoing } from '../data/experience.js'

const LOGO_FALLBACK = {
  fidelity: 'FI',
  vierra: 'VR',
  mwp: 'MW',
  commonwealth: 'CM',
}

function ExperienceCard({ exp }) {
  const [imgError, setImgError] = useState(false)
  const ongoing = isOngoing(exp.dateRange)

  return (
    <article
      className="experience-card surface-card"
      tabIndex={0}
      onClick={(e) => e.currentTarget.focus()}
    >
      <div className="experience-card-visual">
        {ongoing && (
          <span className="experience-card-status">
            <span className="experience-card-status-dot" aria-hidden="true" />
            Ongoing
          </span>
        )}
        <a
          href={exp.website}
          target="_blank"
          rel="noopener noreferrer"
          className="experience-card-logo-link"
          aria-label={`${exp.company} website (opens in a new tab)`}
          onClick={(e) => e.stopPropagation()}
        >
          {!imgError ? (
            <img
              src={exp.logo}
              alt=""
              className="experience-card-logo"
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="experience-card-logo-fallback" aria-hidden="true">
              {LOGO_FALLBACK[exp.id] ?? exp.company.slice(0, 2).toUpperCase()}
            </div>
          )}
        </a>
      </div>

      <div className="experience-card-body">
        <h3 className="experience-card-company">{exp.company}</h3>

        <div className="experience-card-meta">
          <span className="experience-card-industry">{exp.industry}</span>
          <span className="experience-card-date">{exp.dateRange}</span>
        </div>

        <p className="experience-card-role">{exp.roleTitle}</p>

        <p className="experience-card-roles-line">{exp.rolesLine}</p>

        {exp.description?.trim() ? (
          <p className="experience-card-desc">{exp.description}</p>
        ) : null}
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience section-pad"
      aria-labelledby="experience-heading"
    >
      <div className="container-page">
        <h2 id="experience-heading" className="experience-heading">
          Experience
        </h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
