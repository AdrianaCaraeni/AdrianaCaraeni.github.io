import { useState } from 'react'
import { projects } from '../data/projects.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

/** Flat-top hexagon path centered at (cx, cy) with outer radius r. */
function hexPath(cx, cy, r) {
  const pts = [0, 1, 2, 3, 4, 5].map((i) => {
    const a = (Math.PI / 180) * (i * 60)
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
  })
  return `M${pts.join('L')}Z`
}

function NestedHex({ cx, cy, r, fill = '#f4b0c6', stroke = '#111111' }) {
  return (
    <g>
      <path d={hexPath(cx, cy, r)} fill={fill} stroke={stroke} strokeWidth="0.7" strokeLinejoin="round" />
      <path
        d={hexPath(cx, cy, r * 0.58)}
        fill="#fff7fa"
        stroke={stroke}
        strokeWidth="0.65"
        strokeLinejoin="round"
      />
    </g>
  )
}

function HoneycombCap() {
  // Flat-top honeycomb: edges nearly touch (tight interlocking).
  const r = 11
  const gap = 1.015
  const dx = r * 1.5 * gap
  const dy = r * Math.sqrt(3) * gap
  const ox = 82
  const oy = 20
  const cells = [
    { x: ox - dx, y: oy + dy * 0.5 },
    { x: ox - dx, y: oy + dy * 1.5 },
    { x: ox, y: oy },
    { x: ox, y: oy + dy },
    { x: ox, y: oy + dy * 2 },
    { x: ox + dx, y: oy + dy * 0.5 },
    { x: ox + dx, y: oy + dy * 1.5 },
  ]

  return (
    <div className="projects-honey-cap" aria-hidden="true">
      <img
        className="projects-bee-img"
        src="/bee.png"
        alt=""
        width="118"
        height="54"
        decoding="async"
      />
      <svg
        className="projects-honey-cells"
        width="110"
        height="92"
        viewBox="40 8 110 84"
        fill="none"
      >
        {cells.map((c, i) => (
          <NestedHex
            key={i}
            cx={c.x}
            cy={c.y}
            r={r}
            fill={i % 2 === 0 ? '#f4b0c6' : '#e892b6'}
          />
        ))}
      </svg>
    </div>
  )
}

function HexMarker({ status }) {
  const shipped = status === 'Shipped'
  return (
    <span
      className={`projects-hex${shipped ? ' is-shipped' : ' is-progress'}`}
      aria-hidden="true"
    >
      <svg width="34" height="30" viewBox="0 0 34 30" fill="none">
        <path
          className="projects-hex-outer"
          d={hexPath(17, 15, 14.5)}
          stroke="#111111"
          strokeWidth="0.75"
          strokeLinejoin="round"
        />
        <path
          className="projects-hex-inner"
          d={hexPath(17, 15, 8.4)}
          stroke="#111111"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
        {shipped ? (
          <path
            d="M12.2 15.3 15.4 18.3 22.2 11.4"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : null}
      </svg>
    </span>
  )
}

function ProjectItem({ project }) {
  const [open, setOpen] = useState(false)
  const revealRef = useScrollReveal()
  const shipped = project.status === 'Shipped'

  return (
    <li ref={revealRef} className="projects-item reveal">
      <div className="projects-marker">
        <span className="projects-connector" aria-hidden="true" />
        <HexMarker status={project.status} />
      </div>

      <article className="projects-card surface-card">
        <div className="projects-card-top">
          <span className="projects-category">{project.category}</span>
          <span className={`projects-status${shipped ? ' is-shipped' : ' is-progress'}`}>
            {!shipped ? <span className="projects-status-dot" aria-hidden="true" /> : null}
            {project.status}
          </span>
        </div>

        <h3 className="projects-card-title">{project.title}</h3>
        <p className="projects-card-tagline">{project.tagline}</p>

        <ul className="projects-stack">
          {project.stack.map((tech) => (
            <li key={tech}>
              <span className="projects-stack-tag">{tech}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="projects-details-btn"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Details
          <span className="projects-details-chevron" aria-hidden="true">
            {open ? '▴' : '▾'}
          </span>
        </button>

        <div className={`projects-details${open ? ' is-open' : ''}`}>
          <div className="projects-details-inner">
            <p className="projects-problem">{project.problem}</p>
          </div>
        </div>
      </article>
    </li>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects section-pad"
      aria-labelledby="projects-heading"
    >
      <div className="container-page">
        <header className="projects-header">
          <p className="projects-kicker">What I&apos;m Building</p>
          <h2 id="projects-heading" className="projects-heading">
            Projects
          </h2>
        </header>

        <div className="projects-timeline-wrap">
          <div className="projects-honey-bg" aria-hidden="true" />
          <div className="projects-cap">
            <HoneycombCap />
            <p className="projects-bee-quote">
              Adding interlocking knowledge through personal projects, buzzzzz
            </p>
          </div>
          <ol className="projects-timeline">
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
