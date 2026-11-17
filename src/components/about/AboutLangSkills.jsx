import { useState } from 'react'
import { SKILL_GROUPS } from '../../data/aboutSectionData.js'
import {
  IconBriefcase,
  IconChevron,
  IconCloud,
  IconCode,
  IconDatabase,
  IconTools,
} from './AboutIcons.jsx'
import RevealBlock from './RevealBlock.jsx'

function IconFinance() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 19V5M4 19h16M8 16V10M12 16V7M16 16v-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const SKILL_ICONS = {
  programming: IconCode,
  databases: IconDatabase,
  cloud: IconCloud,
  tools: IconTools,
  business: IconBriefcase,
  finance: IconFinance,
}

export default function AboutLangSkills() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <RevealBlock className="about-glass-panel about-skills-panel">
      <p className="about-skills-kicker">My Technical Expertise</p>
      <h3 className="about-subheading about-skills-heading">Skills</h3>
      <div className="about-skills-grid">
        {SKILL_GROUPS.map((group) => {
          const Icon = SKILL_ICONS[group.id] ?? IconCode
          const isOpen = openId === group.id

          return (
            <div
              key={group.id}
              className={`about-skill-card${isOpen ? ' is-open' : ''}`}
            >
              <button
                type="button"
                className="about-skill-card-trigger"
                aria-expanded={isOpen}
                onClick={() => toggle(group.id)}
              >
                <span className="about-skill-card-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="about-skill-card-title">{group.title}</span>
                <span className="about-skill-card-chevron" aria-hidden="true">
                  <IconChevron up={isOpen} />
                </span>
              </button>

              {isOpen ? (
                <ul className="about-skill-pills about-skill-pills--dropdown">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="about-pill">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          )
        })}
      </div>
    </RevealBlock>
  )
}
