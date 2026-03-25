import { LANGUAGES, SKILL_GROUPS } from '../../data/aboutSectionData.js'
import RevealBlock from './RevealBlock.jsx'

export default function AboutLangSkills() {
  return (
    <div className="about-split">
      <RevealBlock className="about-glass-panel about-split-col">
        <h3 className="about-subheading">Languages</h3>
        <ul className="about-lang-list">
          {LANGUAGES.map((lang) => (
            <li key={lang.name} className="about-lang-row">
              <span className="about-lang-name">{lang.name}</span>
              <span className="about-lang-level">{lang.level}</span>
            </li>
          ))}
        </ul>
      </RevealBlock>
      <RevealBlock className="about-glass-panel about-split-col about-split-col--skills">
        <h3 className="about-subheading">Technical Skills</h3>
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="about-skill-group">
            <h4 className="about-skill-title">{group.title}</h4>
            <ul className="about-skill-pills">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="about-pill">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </RevealBlock>
    </div>
  )
}
