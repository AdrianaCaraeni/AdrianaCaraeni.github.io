import { ABOUT_CONTACT } from '../../data/aboutSectionData.js'
import { IconGitHub, IconGradCap, IconLinkedIn, IconMail, IconPhone } from './AboutIcons.jsx'
import RevealBlock from './RevealBlock.jsx'

export default function AboutIntro() {
  const { email, phone, linkedin, github } = ABOUT_CONTACT

  return (
    <RevealBlock as="header" className="about-glass-panel about-intro about-intro--hero">
      <div className="about-intro-visual">
        <img
          className="about-profile-photo about-profile-photo--hero"
          src="/HeadshotAdriana-new.png"
          alt="Adriana Caraeni"
          width={320}
          height={400}
          decoding="async"
        />
      </div>

      <div className="about-intro-copy">
        <p className="about-kicker">Hello, I&apos;m</p>
        <h2 id="about-heading" className="about-hero-name">
          Adriana Caraeni
        </h2>
        <p className="about-hero-title">AI Researcher &amp; Full Stack Software Engineer</p>
        <p className="about-hero-tags">
          FinTech · Machine Learning · Artificial Intelligence: LLMs
        </p>

        <div className="about-edu-compact">
          <div className="about-edu-compact-icon" aria-hidden="true">
            <IconGradCap />
          </div>
          <div className="about-edu-compact-body">
            <p className="about-edu-compact-label">Education</p>
            <p className="about-edu-compact-school">University of Massachusetts Amherst</p>
            <p className="about-edu-compact-degree">
              Computer Science &amp; Computing Mathematics Dual Degree · Early Research Scholars Program · Business Minor · iCons Certificate
            </p>
          </div>
        </div>

        <div className="about-intro-ctas">
          <a className="about-cta about-cta--primary" href={`mailto:${email}`}>
            <IconMail />
            <span>Get in Touch</span>
          </a>
          <a
            className="about-cta about-cta--ghost"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedIn />
            <span>LinkedIn</span>
          </a>
          <a
            className="about-cta about-cta--ghost"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGitHub />
            <span>GitHub</span>
          </a>
        </div>

        <div className="about-intro-meta">
          <a href={`mailto:${email}`} className="about-intro-meta-item">
            <IconMail />
            <span>{email}</span>
          </a>
          <a href={`tel:${phone.replace(/-/g, '')}`} className="about-intro-meta-item">
            <IconPhone />
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </RevealBlock>
  )
}
