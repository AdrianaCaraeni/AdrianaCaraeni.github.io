import { ABOUT_CONTACT } from '../../data/aboutSectionData.js'
import { IconGitHub, IconLinkedIn, IconMail, IconPhone } from './AboutIcons.jsx'
import RevealBlock from './RevealBlock.jsx'

export default function AboutConnect() {
  const { email, phone, linkedin, github } = ABOUT_CONTACT
  return (
    <RevealBlock className="about-glass-panel about-connect-block">
      <h3 className="about-subheading">Connect</h3>
      <nav className="about-contact about-contact--grid" aria-label="Contact links">
        <a className="about-contact-link" href={`mailto:${email}`} aria-label="Email business at adrianacaraeni dot com">
          <IconMail />
          <span>Email</span>
          <span className="about-contact-value">{email}</span>
        </a>
        <a
          className="about-contact-link"
          href={`tel:${phone.replace(/-/g, '')}`}
          aria-label={`Phone ${phone}`}
        >
          <IconPhone />
          <span>Phone</span>
          <span className="about-contact-value">{phone}</span>
        </a>
        <a
          className="about-contact-link"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <IconLinkedIn />
          <span>LinkedIn</span>
          <span className="about-contact-value">linkedin.com/in/adriana-caraeni/</span>
        </a>
        <a
          className="about-contact-link"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub (opens in a new tab)"
        >
          <IconGitHub />
          <span>GitHub</span>
          <span className="about-contact-value">github.com/AdrianaCaraeni</span>
        </a>
      </nav>
    </RevealBlock>
  )
}
