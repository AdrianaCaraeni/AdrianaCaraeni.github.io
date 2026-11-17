import { aboutEducation } from '../../data/aboutContent.js'
import RevealBlock from './RevealBlock.jsx'

export default function AboutEducation() {
  return (
    <RevealBlock className="about-glass-panel about-section about-section--edu">
      <h3 className="about-subheading">Education</h3>
      <div className="about-edu-list">
        {aboutEducation.map((edu) => (
          <article key={edu.school} className="about-edu-card about-edu-card--inner">
            {edu.level ? <p className="about-edu-level">{edu.level}</p> : null}
            <h4 className="about-edu-school">{edu.school}</h4>
            <p className="about-edu-degree">{edu.degree}</p>
            {edu.note ? <p className="about-edu-note">{edu.note}</p> : null}
            <p className="about-edu-meta">
              {edu.dates}
              {edu.location ? (
                <>
                  <span className="about-edu-sep"> · </span>
                  {edu.location}
                </>
              ) : null}
              {edu.gpa ? (
                <>
                  <span className="about-edu-sep"> · </span>
                  GPA {edu.gpa}
                </>
              ) : null}
            </p>
            {edu.honors?.length ? (
              <ul className="about-edu-honors">
                {edu.honors.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </RevealBlock>
  )
}
