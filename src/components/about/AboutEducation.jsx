import { aboutEducation } from '../../data/aboutContent.js'
import RevealBlock from './RevealBlock.jsx'

export default function AboutEducation() {
  return (
    <RevealBlock className="about-glass-panel about-section about-section--edu">
      <h3 className="about-subheading">Education</h3>
      <div className="about-edu-list">
        {aboutEducation.map((edu) => (
          <article key={edu.school} className="about-edu-card about-edu-card--inner">
            <h4 className="about-edu-school">{edu.school}</h4>
            <p className="about-edu-degree">{edu.degree}</p>
            <p className="about-edu-meta">
              {edu.dates}
              <span className="about-edu-sep"> · </span>
              {edu.location}
              <span className="about-edu-sep"> · </span>
              GPA {edu.gpa}
            </p>
            <ul className="about-edu-honors">
              {edu.honors.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </RevealBlock>
  )
}
